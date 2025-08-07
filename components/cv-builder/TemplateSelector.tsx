import { useState } from 'react';
import { Button } from "../ui/button";

interface Template {
  id: string;
  name: string;
  description: string;
  preview: string;
}

// Base64 template previews for immediate visibility
const templates: Template[] = [
  {
    id: 'modern',
    name: 'Modern Professional',
    description: 'Clean and contemporary design perfect for tech and business roles',
    preview: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjgwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZmZmIi8+PHJlY3Qgd2lkdGg9IjMwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMWE0ZWI4Ii8+PC9zdmc+'
  },
  {
    id: 'classic',
    name: 'Classic Executive',
    description: 'Traditional layout ideal for corporate and management positions',
    preview: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjgwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZmZmIi8+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTUlIiBmaWxsPSIjMWE0ZWI4Ii8+PC9zdmc+'
  },
  {
    id: 'creative',
    name: 'Creative Impact',
    description: 'Stand-out design for creative and innovative roles',
    preview: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjgwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZmZmIi8+PHBhdGggZD0iTTAgMGw1MCAxMDBIMHoiIGZpbGw9IiMxYTRlYjgiLz48L3N2Zz4='
  }
];

interface TemplateSelectorProps {
  onSelect: (templateId: string) => void;
}

export function TemplateSelector({ onSelect }: TemplateSelectorProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-3 gap-6">
        {templates.map((template) => (
          <div
            key={template.id}
            className={`
              p-4 rounded-lg border-2 cursor-pointer transition-all
              ${selectedId === template.id 
                ? 'border-blue-600 bg-blue-50' 
                : 'border-gray-200 hover:border-blue-300 bg-white'
              }
            `}
            onClick={() => setSelectedId(template.id)}
          >
            <div className="aspect-[3/4] mb-4 rounded-md overflow-hidden bg-gray-100">
              <img
                src={template.preview}
                alt={template.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-semibold text-lg mb-2">{template.name}</h3>
            <p className="text-gray-600 text-sm">{template.description}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <Button
          className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8"
          disabled={!selectedId}
          onClick={() => selectedId && onSelect(selectedId)}
        >
          Use This Template
        </Button>
      </div>
    </div>
  );
}
