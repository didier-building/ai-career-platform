import { ImageWithFallback } from "./figma/ImageWithFallback";
import { AlertCircle, FileX, Users, MessageSquare } from "lucide-react";

export function ProblemSection() {
  const problems = [
    {
      icon: <FileX className="w-5 h-5 text-red-500" />,
      text: "Weak CVs & cover letters"
    },
    {
      icon: <Users className="w-5 h-5 text-red-500" />,
      text: "Lack of mentorship"
    },
    {
      icon: <MessageSquare className="w-5 h-5 text-red-500" />,
      text: "Low confidence in interviews"
    }
  ];

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1528901166007-3784c7dd3653?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGFmcmljYW4lMjBwcm9mZXNzaW9uYWwlMjBqb2IlMjBzZWFyY2glMjBzdHJlc3N8ZW58MXx8fHwxNzU0Mzc4MjI2fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Young African professional facing job search challenges"
              className="w-full rounded-2xl shadow-lg"
            />
          </div>
          
          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-3 mb-6">
              <AlertCircle className="w-8 h-8 text-red-500" />
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Why Many Graduates Struggle After University
              </h2>
            </div>
            
            <p className="text-lg text-gray-600 mb-8">
              Despite their qualifications, many African graduates face significant 
              challenges when transitioning from university to the workplace across the continent.
            </p>
            
            <ul className="space-y-4">
              {problems.map((problem, index) => (
                <li key={index} className="flex items-center gap-4">
                  {problem.icon}
                  <span className="text-lg text-gray-700">{problem.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}