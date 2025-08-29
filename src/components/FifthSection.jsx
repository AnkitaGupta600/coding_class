"use client";
import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "How can online learning benefit students?",
    answer:
      "Online learning provides flexibility, access to diverse resources, and personalized pacing. Students can learn anytime, anywhere, while balancing studies with personal commitments.",
  },
  {
    question: "What technology requirements are needed?",
    answer:
      "A stable internet connection, a computer or smartphone, and updated browsers are the basic requirements. Some courses may require additional software like VS Code or Zoom.",
  },
  {
    question: "How is student progress tracked?",
    answer:
      "Progress is tracked through quizzes, assignments, projects, and performance dashboards that give students and mentors real-time updates on learning outcomes.",
  },
  {
    question: "What support services are available?",
    answer:
      "Dedicated mentors, doubt-clearing sessions, discussion forums, and technical support are available to guide students throughout their learning journey.",
  },
  {
    question: "How is the quality of education maintained?",
    answer:
      "Quality is ensured through expert-designed curriculum, continuous mentor training, student feedback loops, and regular updates to keep content industry-relevant.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
            <HelpCircle className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-pretty">
            Find answers to common questions about our online learning platform
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left group"
              >
                <span className="text-lg font-semibold text-gray-900 pr-4 text-balance group-hover:text-blue-600 transition-colors">
                  {faq.question}
                </span>
                <div className="flex-shrink-0">
                  <ChevronDown
                    className={`w-6 h-6 text-gray-400 group-hover:text-blue-600 transform transition-all duration-300 ${
                      openIndex === index ? "rotate-180 text-blue-600" : ""
                    }`}
                  />
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6 pt-0">
                  <div className="h-px bg-gray-100 mb-4"></div>
                  <p className="text-gray-700 leading-relaxed text-pretty">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Our support team is here to help you get started
            </p>
            <button className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
