import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-green-50 min-h-screen flex flex-col">

      {/* Hero Content */}
      <div className="flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-12 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-900 mb-4">
                Unlock Africa's Next Generation of Leaders
              </h1>
              <h2 className="text-xl lg:text-2xl font-semibold text-blue-700 mb-4">
                Empowering graduates to build confidence, skills, and careers with AI
              </h2>
              <p className="text-lg lg:text-xl text-gray-700 mb-8 max-w-2xl">
                We created AI Career Companion to break down barriers for African graduates. Our mission is to provide every young professional with the tools, mentorship, and confidence they need to thrive in a competitive world. Whether you're searching for your first job or aiming higher, our platform is designed to help you stand out and succeed.
              </p>
              <Button 
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 py-3 text-lg font-semibold"
              >
                Join the Pilot Program
              </Button>
            </div>
            
            <div className="flex justify-center">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1663743556587-b0cd1a9cd61d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwdW5pdmVyc2l0eSUyMGdyYWR1YXRlcyUyMHByb2Zlc3Npb25hbHMlMjBsYXB0b3BzfGVufDF8fHx8MTc1NDM3ODIyNHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="African university graduates and professionals working with technology"
                className="w-full max-w-lg rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}