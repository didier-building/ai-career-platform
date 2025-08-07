import { useState } from 'react';
import { Button } from "../ui/button";
import { TemplateSelector } from './TemplateSelector';
import { AIChatInterface } from './AIChatInterface';
import { CVPreview } from './CVPreview';

export type CVData = {
  personalInfo?: {
    name: string;
    email: string;
    phone: string;
    location: string;
  };
  experience?: Array<{
    title: string;
    company: string;
    duration: string;
    description: string;
  }>;
  education?: Array<{
    degree: string;
    institution: string;
    duration: string;
  }>;
  skills?: string[];
};

export function CVBuilder() {
  console.log('CVBuilder rendered');
  const [step, setStep] = useState<'template' | 'chat' | 'preview'>('template');
  const [selectedTemplate, setSelectedTemplate] = useState('');
  const [cvData, setCVData] = useState<CVData>({});

  const handleChatComplete = (data: CVData) => {
    console.log('Chat completed with data:', data);
    setCVData(data);
    setStep('preview');
  };

  const handleEditCV = () => {
    setStep('chat');
  };

  const handleStartOver = () => {
    setStep('template');
    setSelectedTemplate('');
    setCVData({});
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
          Create Your Professional CV
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          {step === 'template' && "Choose a template and let our AI guide you through creating a standout CV."}
          {step === 'chat' && "Let our AI assistant help you build your CV content."}
          {step === 'preview' && "Review your CV and download when ready."}
        </p>

        {/* Progress indicator */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-4">
            <div className={`flex items-center ${step === 'template' ? 'text-blue-600' : 'text-green-600'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-medium ${step === 'template' ? 'bg-blue-600' : 'bg-green-600'}`}>
                1
              </div>
              <span className="ml-2 text-sm font-medium">Template</span>
            </div>
            <div className={`w-8 h-0.5 ${step === 'template' ? 'bg-gray-300' : 'bg-green-600'}`}></div>
            <div className={`flex items-center ${step === 'chat' ? 'text-blue-600' : step === 'preview' ? 'text-green-600' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-medium ${step === 'chat' ? 'bg-blue-600' : step === 'preview' ? 'bg-green-600' : 'bg-gray-400'}`}>
                2
              </div>
              <span className="ml-2 text-sm font-medium">Content</span>
            </div>
            <div className={`w-8 h-0.5 ${step === 'preview' ? 'bg-green-600' : 'bg-gray-300'}`}></div>
            <div className={`flex items-center ${step === 'preview' ? 'text-blue-600' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-medium ${step === 'preview' ? 'bg-blue-600' : 'bg-gray-400'}`}>
                3
              </div>
              <span className="ml-2 text-sm font-medium">Preview</span>
            </div>
          </div>
        </div>

        {step === 'template' && (
          <TemplateSelector
            onSelect={(template: string) => {
              console.log('Template selected:', template);
              setSelectedTemplate(template);
              setStep('chat');
            }}
          />
        )}

        {step === 'chat' && (
          <div className="space-y-6">
            <div className="text-center">
              <Button
                variant="outline"
                onClick={handleStartOver}
                className="mb-4"
              >
                ← Change Template
              </Button>
            </div>
            <AIChatInterface
              template={selectedTemplate}
              onComplete={handleChatComplete}
            />
          </div>
        )}

        {step === 'preview' && (
          <div className="space-y-6">
            <div className="text-center">
              <Button
                variant="outline"
                onClick={handleStartOver}
                className="mr-4"
              >
                ← Start Over
              </Button>
            </div>
            <CVPreview
              template={selectedTemplate}
              data={cvData}
              onEdit={handleEditCV}
            />
          </div>
        )}
      </div>
    </section>
  );
}
