import { useState } from 'react';
import { Button } from "../ui/button";
import type { CVData } from './CVBuilder';
import { CVChatService } from '../cv-builder/utils/chatService';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface AIChatInterfaceProps {
  template: string;
  onComplete: (data: CVData) => void;
}

export function AIChatInterface({ template, onComplete }: AIChatInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hi! I'll help you create a professional CV. Let's start with your basic information. What's your full name and current job title?"
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const [chatService] = useState(() => new CVChatService());

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    
    // Add user message to chat
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    
    setIsLoading(true);
    
    try {
      // Process message with chat service
      const response = await chatService.processMessage(userMessage);
      setMessages(prev => [...prev, response]);

      // If the response indicates completion, send data to parent
      if (response.content.includes("Let's preview your CV now") ||
          (response.content.includes('Ready to preview your CV?') && userMessage.toLowerCase().includes('yes'))) {
        onComplete(chatService.getData());
      }
    } catch (error) {
      console.error('Error processing message:', error);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: "I'm sorry, I encountered an error. Please try again."
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="h-[500px] overflow-y-auto p-6 space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.role === 'assistant' ? 'justify-start' : 'justify-end'}`}
          >
            <div
              className={`
                max-w-[80%] rounded-lg p-4
                ${message.role === 'assistant'
                  ? 'bg-blue-100 text-gray-800'
                  : 'bg-blue-600 text-white'
                }
              `}
            >
              {message.content}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-blue-100 text-blue-900 rounded-lg p-4">
              Thinking...
            </div>
          </div>
        )}
      </div>
      
      <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200">
        <div className="flex gap-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your response..."
            className="flex-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <Button
            type="submit"
            disabled={!input.trim() || isLoading}
            className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}
