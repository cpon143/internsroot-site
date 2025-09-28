import { Eye, Award, Code, TrendingUp } from "lucide-react";

const ProcessSection = ({ handleCTAClick }) => (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          My Development Process
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          A proven 4-step methodology that ensures your project is delivered on time, 
          within budget, and exceeds expectations
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            step: "01",
            title: "Discover",
            description:
              "Understanding your business goals, target audience, and technical requirements",
            icon: <Eye className="w-8 h-8" />,
          },
          {
            step: "02",
            title: "Design",
            description:
              "Creating wireframes, prototypes, and user-centered designs that convert",
            icon: <Award className="w-8 h-8" />,
          },
          {
            step: "03",
            title: "Build",
            description:
              "Developing with modern technologies, following best practices and performance standards",
            icon: <Code className="w-8 h-8" />,
          },
          {
            step: "04",
            title: "Grow",
            description:
              "Launch optimization, SEO implementation, and ongoing performance monitoring",
            icon: <TrendingUp className="w-8 h-8" />,
          },
        ].map((process, index) => (
          <div key={index} className="text-center">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <div className="text-blue-600">{process.icon}</div>
            </div>
            <div className="text-blue-600 font-bold text-lg mb-2">
              Step {process.step}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              {process.title}
            </h3>
            <p className="text-gray-600">{process.description}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <button
          onClick={() => handleCTAClick("get-proposal")}
          className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
        >
          Start Your Project
        </button>
      </div>
    </div>
  </section>
);

export default ProcessSection;
