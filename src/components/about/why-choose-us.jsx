import {
  Shield,
  Users,
  Trophy,
  Clock,
  HeadphonesIcon,
  Briefcase,
} from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: Shield,
      title: "Practical Learning",
      description:
        "Hands-on coding sessions with real projects to strengthen your concepts step by step.",
    },
    {
      icon: Users,
      title: "Personal Mentorship",
      description:
        "Direct guidance and doubt-solving sessions to ensure no student is left behind.",
    },
    {
      icon: Trophy,
      title: "Student Success",
      description:
        "Our learners build strong foundations, clear interviews, and gain confidence in coding.",
    },
    {
      icon: Clock,
      title: "Flexible Learning",
      description:
        "Learn at your own pace with flexible timings and structured lessons.",
    },
    {
      icon: HeadphonesIcon,
      title: "Dedicated Support",
      description:
        "Get help whenever you need with mentor guidance and an active student community.",
    },
    {
      icon: Briefcase,
      title: "Career Growth",
      description:
        "From building projects to interview prep, we support your complete career journey.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-6">
            Why Choose Us?
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            We focus on building not just coding skills, but problem-solving and
            real-world development experience — helping you grow as a confident developer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group transform hover:-translate-y-2"
            >
              <div className="bg-gradient-to-r from-purple-100 to-pink-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:from-purple-600 group-hover:to-pink-600 transition-colors duration-300">
                <feature.icon className="w-8 h-8 text-purple-600 group-hover:text-white transition-colors duration-300" />
              </div>

              <h3 className="text-xl font-bold text-purple-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
