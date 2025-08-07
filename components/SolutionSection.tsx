import { FileText, Mic, Users, TrendingUp, BookOpen } from "lucide-react";

export function SolutionSection() {
  const solutions = [
    {
      icon: <FileText className="w-12 h-12 text-blue-600" />,
      title: "AI CV & Cover Letter Builder",
      description: "Generate professional CVs and cover letters tailored to specific job requirements."
    },
    {
      icon: <Mic className="w-12 h-12 text-green-600" />,
      title: "AI Communication Coach",
      description: "Practice and improve your communication skills with AI-powered feedback."
    },
    {
      icon: <Users className="w-12 h-12 text-blue-600" />,
      title: "Mentorship Matching",
      description: "Connect with experienced professionals in your field for guidance and support."
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-green-600" />,
      title: "Career Progress Tracker",
      description: "Monitor your career development journey with personalized insights and goals."
    },
    {
      icon: <BookOpen className="w-12 h-12 text-blue-600" />,
      title: "Soft Skills & Interview Training",
      description: "Develop essential soft skills and ace your interviews with targeted practice."
    }
  ];

  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Introducing{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
              AI Career Companion
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A comprehensive platform designed to empower graduates with the tools 
            and confidence they need to succeed in their careers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 p-4 bg-gradient-to-br from-blue-50 to-green-50 rounded-full">
                  {solution.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  {solution.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {solution.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}