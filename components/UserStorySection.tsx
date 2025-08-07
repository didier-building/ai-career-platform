import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Quote } from "lucide-react";

export function UserStorySection() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1461039088886-b5c863279a0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25maWRlbnQlMjBhZnJpY2FuJTIwd29tYW4lMjBncmFkdWF0ZSUyMHByb2Zlc3Npb25hbCUyMHN1Y2Nlc3N8ZW58MXx8fHwxNzU0Mzc4MjMwfDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Confident African woman professional celebrating success"
              className="w-full rounded-2xl shadow-lg"
            />
          </div>
          
          {/* Content */}
          <div>
            <div className="flex items-start gap-4 mb-6">
              <Quote className="w-12 h-12 text-blue-600 flex-shrink-0 mt-2" />
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Meet Amara
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-green-600 mb-6"></div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                "Amara, a 24-year-old graduate from Nairobi, used AI Career Companion to 
                improve her CV, practice interviews, and boost her confidence. Within a month, 
                she landed three job interviews across different companies — and walked into each one ready to succeed."
              </p>
              
              <div className="flex flex-wrap gap-4">
                <div className="bg-white rounded-lg px-4 py-2">
                  <span className="text-blue-600 font-medium">✓ Professional CV</span>
                </div>
                <div className="bg-white rounded-lg px-4 py-2">
                  <span className="text-green-600 font-medium">✓ Interview Confidence</span>
                </div>
                <div className="bg-white rounded-lg px-4 py-2">
                  <span className="text-blue-600 font-medium">✓ 3 Job Interviews</span>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl text-white">
              <h3 className="text-xl font-semibold mb-2">Ready to be the next success story?</h3>
              <p className="opacity-90">Join thousands of African graduates transforming their careers with AI.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}