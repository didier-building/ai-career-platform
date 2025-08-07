import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { FileText, MessageSquare, Download, Sparkles } from "lucide-react";

export function MVPInteractiveSection() {
  return (
    <section id="mvp" className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
            Experience Our AI-Powered Tools
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get started with our comprehensive suite of career development tools designed specifically for African graduates.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <FileText className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">AI CV Builder</h3>
            <p className="text-gray-600 text-sm mb-4">
              Create professional CVs with AI guidance and multiple templates.
            </p>
            <div className="text-green-600 text-sm font-medium">✓ Ready to use</div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-lg opacity-75">
            <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <MessageSquare className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Communication Coach</h3>
            <p className="text-gray-600 text-sm mb-4">
              Practice and improve your communication skills with AI feedback.
            </p>
            <div className="text-orange-600 text-sm font-medium">⏳ Coming soon</div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-lg opacity-75">
            <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Sparkles className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Interview Training</h3>
            <p className="text-gray-600 text-sm mb-4">
              Ace your interviews with targeted practice and feedback.
            </p>
            <div className="text-orange-600 text-sm font-medium">⏳ Coming soon</div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-lg opacity-75">
            <div className="bg-red-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Download className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Career Tracker</h3>
            <p className="text-gray-600 text-sm mb-4">
              Monitor your career development with personalized insights.
            </p>
            <div className="text-orange-600 text-sm font-medium">⏳ Coming soon</div>
          </div>
        </div>

        <div className="text-center">
          <Link to="/cv-builder">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 py-4 text-lg font-semibold"
            >
              Start Building Your CV Now
            </Button>
          </Link>
          <p className="text-gray-500 text-sm mt-3">
            No signup required • Create professional CVs in minutes
          </p>
        </div>
      </div>
    </section>
  );
}
