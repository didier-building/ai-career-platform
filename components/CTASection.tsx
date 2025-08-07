import { Button } from "./ui/button";
import { Rocket, ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-green-600 py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 lg:px-6 text-center">
        <div className="flex justify-center mb-8">
          <div className="bg-white/20 rounded-full p-6">
            <Rocket className="w-12 h-12 text-white" />
          </div>
        </div>
        
        <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
          Be Among the First to Try AI Career Companion
        </h2>
        
        <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
          We are launching soon! Sign up now to shape Africa's digital future 
          and be part of the career revolution across the continent.
        </p>
        
        <div className="space-y-6">
          <Button 
            size="lg"
            className="bg-white text-blue-700 hover:bg-gray-100 px-12 py-4 text-lg font-semibold rounded-full shadow-lg"
          >
            Join the Pilot Program
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          
          <div className="flex flex-wrap justify-center gap-8 text-blue-100 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>Limited Spots Available</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>Free During Beta</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>Early Access Benefits</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}