import { useState } from 'react';
import { Button } from "../ui/button";
import type { CVData } from './CVBuilder';
import { generatePDF } from './utils/pdfGenerator';

interface CVPreviewProps {
  template: string;
  data: CVData;
  onEdit: () => void;
}

export function CVPreview({ template, data, onEdit }: CVPreviewProps) {
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const [pdfError, setPdfError] = useState<string | null>(null);
  const renderModernTemplate = () => (
    <div className="flex">
      {/* Left sidebar */}
      <div className="w-1/3 bg-blue-600 text-white p-6">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2">{data.personalInfo?.name}</h2>
          <div className="text-blue-100 text-sm space-y-1">
            <p>{data.personalInfo?.email}</p>
            <p>{data.personalInfo?.phone}</p>
            <p>{data.personalInfo?.location}</p>
          </div>
        </div>

        {/* Skills in sidebar */}
        {data.skills && data.skills.length > 0 && (
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-3 text-blue-100">Skills</h3>
            <div className="space-y-2">
              {data.skills.map((skill, index) => (
                <div key={index} className="bg-blue-500 px-3 py-1 rounded text-sm">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Right content */}
      <div className="w-2/3 p-6">
        {/* Experience */}
        {data.experience && data.experience.length > 0 && (
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-blue-600 border-b-2 border-blue-600 pb-2">Experience</h3>
            {data.experience.map((exp, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-semibold text-lg">{exp.title}</h4>
                    <p className="text-blue-600 font-medium">{exp.company}</p>
                  </div>
                  <span className="text-gray-500 text-sm">{exp.duration}</span>
                </div>
                <p className="text-gray-700">{exp.description}</p>
              </div>
            ))}
          </div>
        )}

        {/* Education */}
        {data.education && data.education.length > 0 && (
          <div>
            <h3 className="text-xl font-semibold mb-4 text-blue-600 border-b-2 border-blue-600 pb-2">Education</h3>
            {data.education.map((edu, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold">{edu.degree}</h4>
                    <p className="text-blue-600">{edu.institution}</p>
                  </div>
                  <span className="text-gray-500 text-sm">{edu.duration}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  const renderClassicTemplate = () => (
    <div>
      {/* Header */}
      <div className="bg-blue-600 text-white p-6 mb-6">
        <h2 className="text-3xl font-bold mb-2">{data.personalInfo?.name}</h2>
        <div className="text-blue-100">
          <p>{data.personalInfo?.email} • {data.personalInfo?.phone} • {data.personalInfo?.location}</p>
        </div>
      </div>

      <div className="px-6">
        {/* Experience */}
        {data.experience && data.experience.length > 0 && (
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 uppercase tracking-wide">Professional Experience</h3>
            {data.experience.map((exp, index) => (
              <div key={index} className="mb-6 border-l-4 border-blue-600 pl-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-semibold text-lg">{exp.title}</h4>
                    <p className="text-gray-600 font-medium">{exp.company}</p>
                  </div>
                  <span className="text-gray-500">{exp.duration}</span>
                </div>
                <p className="text-gray-700">{exp.description}</p>
              </div>
            ))}
          </div>
        )}

        {/* Education */}
        {data.education && data.education.length > 0 && (
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 uppercase tracking-wide">Education</h3>
            {data.education.map((edu, index) => (
              <div key={index} className="mb-4 border-l-4 border-blue-600 pl-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold">{edu.degree}</h4>
                    <p className="text-gray-600">{edu.institution}</p>
                  </div>
                  <span className="text-gray-500">{edu.duration}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Skills */}
        {data.skills && data.skills.length > 0 && (
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800 uppercase tracking-wide">Skills</h3>
            <div className="grid grid-cols-2 gap-2">
              {data.skills.map((skill, index) => (
                <div key={index} className="bg-gray-100 px-3 py-2 rounded">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );

  const renderCreativeTemplate = () => (
    <div>
      {/* Creative header with diagonal design */}
      <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 mb-6">
        <div className="absolute top-0 left-0 w-20 h-full bg-blue-800 transform -skew-x-12"></div>
        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-2">{data.personalInfo?.name}</h2>
          <div className="text-blue-100">
            <p>{data.personalInfo?.email} • {data.personalInfo?.phone}</p>
            <p>{data.personalInfo?.location}</p>
          </div>
        </div>
      </div>

      <div className="px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Left column */}
          <div className="md:col-span-2">
            {/* Experience */}
            {data.experience && data.experience.length > 0 && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-purple-600">Experience</h3>
                {data.experience.map((exp, index) => (
                  <div key={index} className="mb-6 relative">
                    <div className="absolute left-0 top-2 w-3 h-3 bg-purple-600 rounded-full"></div>
                    <div className="ml-6">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-semibold text-lg">{exp.title}</h4>
                          <p className="text-purple-600 font-medium">{exp.company}</p>
                        </div>
                        <span className="text-gray-500 text-sm">{exp.duration}</span>
                      </div>
                      <p className="text-gray-700">{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Education */}
            {data.education && data.education.length > 0 && (
              <div>
                <h3 className="text-xl font-semibold mb-4 text-purple-600">Education</h3>
                {data.education.map((edu, index) => (
                  <div key={index} className="mb-4 relative">
                    <div className="absolute left-0 top-2 w-3 h-3 bg-purple-600 rounded-full"></div>
                    <div className="ml-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold">{edu.degree}</h4>
                          <p className="text-purple-600">{edu.institution}</p>
                        </div>
                        <span className="text-gray-500 text-sm">{edu.duration}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right column - Skills */}
          <div>
            {data.skills && data.skills.length > 0 && (
              <div>
                <h3 className="text-xl font-semibold mb-4 text-purple-600">Skills</h3>
                <div className="space-y-3">
                  {data.skills.map((skill, index) => (
                    <div key={index} className="bg-gradient-to-r from-purple-100 to-blue-100 px-4 py-2 rounded-lg border-l-4 border-purple-600">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  const renderTemplate = () => {
    switch (template) {
      case 'modern':
        return renderModernTemplate();
      case 'classic':
        return renderClassicTemplate();
      case 'creative':
        return renderCreativeTemplate();
      default:
        return renderModernTemplate();
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div id="cv-preview" className="bg-white rounded-lg shadow-lg overflow-hidden mb-6" style={{ minHeight: '800px' }}>
        {renderTemplate()}
      </div>

      {pdfError && (
        <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-700 text-sm">
            <strong>Error generating PDF:</strong> {pdfError}
          </p>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setPdfError(null)}
            className="mt-2"
          >
            Dismiss
          </Button>
        </div>
      )}

      <div className="flex justify-center gap-4">
        <Button
          variant="outline"
          onClick={onEdit}
          className="bg-white"
          disabled={isGeneratingPDF}
        >
          Edit Content
        </Button>
        <Button
          className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white disabled:opacity-50"
          disabled={isGeneratingPDF}
          onClick={async () => {
            setIsGeneratingPDF(true);
            setPdfError(null);
            try {
              await generatePDF(template, data, 'cv-preview');
            } catch (error) {
              console.error('Error generating PDF:', error);
              setPdfError(error instanceof Error ? error.message : 'An unexpected error occurred');
            } finally {
              setIsGeneratingPDF(false);
            }
          }}
        >
          {isGeneratingPDF ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
              Generating PDF...
            </>
          ) : (
            'Download PDF'
          )}
        </Button>
      </div>
    </div>
  );
}
