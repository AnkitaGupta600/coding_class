import { Button } from "@/components/ui/button";

export default function DiversitySection() {
  return (
    <section className="bg-gradient-to-b from-gray-900 via-blue-950 to-black py-16 px-6 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Side - Image */}
          <div className="relative">
            <img
              src="/group_photo.jpg"
              alt="Global students collaborating together"
              className="w-full h-auto rounded-2xl object-cover shadow-lg shadow-cyan-500/20"
            />

            {/* Decorative Element */}
            <div className="absolute -bottom-4 -right-4 w-20 h-20 opacity-30">
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full text-cyan-400"
              >
                <path
                  d="M20 80 Q 50 20 80 80"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
                <path
                  d="M30 85 Q 60 25 90 85"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            {/* Heading */}
            <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Empowering Diversity & Global Collaboration
            </h2>

            {/* Description */}
            <p className="text-base text-gray-300 leading-relaxed sm:text-lg">
              We believe education thrives when cultures, ideas, and
              perspectives come together. Our diverse student community
              represents learners from across the globe, bringing fresh
              creativity, inclusivity, and innovation to every classroom.  
              By fostering a collaborative environment, we empower every student
              to grow into future-ready leaders.
            </p>

            {/* Statistics */}
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              {/* Graduate Students Stat */}
              <div className="space-y-2">
                <div className="text-4xl font-bold text-cyan-400 sm:text-5xl">
                  40K+
                </div>
                <div className="text-lg font-semibold text-white">
                  Global Learners
                </div>
              </div>

              {/* Happy Students Stat */}
              <div className="space-y-2">
                <div className="text-4xl font-bold text-cyan-400 sm:text-5xl">
                  95%
                </div>
                <div className="text-lg font-semibold text-white">
                  Student Satisfaction
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Button className="bg-cyan-500 hover:bg-cyan-400 text-white px-8 py-3 text-base font-semibold rounded-lg shadow-lg shadow-cyan-500/30">
                Join Our Community
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
