"use client";

import { Target, Lightbulb, Users, Code2 } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="bg-gradient-to-b from-purple-50 to-pink-50 py-4 px-6 md:px-16">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-6">
          Learn. Code. Grow.
        </h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          At our coding classes, we simplify programming and make learning fun.  
          From basics to real-world projects, we guide you step by step to build 
          strong coding skills and prepare you for a bright career in tech.
        </p>
      </div>

      {/* Mission Vision Values */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
        <div className="bg-white shadow-lg rounded-2xl p-8 text-center hover:shadow-2xl transition transform hover:-translate-y-2">
          <Target className="w-14 h-14 mx-auto text-purple-600 mb-4" />
          <h3 className="text-2xl font-semibold text-purple-900 mb-3">Our Mission</h3>
          <p className="text-gray-600">
            To make coding easy and accessible for every learner while building 
            confidence and problem-solving ability.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-2xl p-8 text-center hover:shadow-2xl transition transform hover:-translate-y-2">
          <Lightbulb className="w-14 h-14 mx-auto text-pink-500 mb-4" />
          <h3 className="text-2xl font-semibold text-purple-900 mb-3">Our Vision</h3>
          <p className="text-gray-600">
            To create future-ready developers who can turn ideas into impactful solutions 
            with their coding skills.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-2xl p-8 text-center hover:shadow-2xl transition transform hover:-translate-y-2">
          <Users className="w-14 h-14 mx-auto text-indigo-600 mb-4" />
          <h3 className="text-2xl font-semibold text-purple-900 mb-3">Our Values</h3>
          <p className="text-gray-600">
            Consistency, curiosity, and collaboration — the three keys we follow 
            to support every learner’s growth.
          </p>
        </div>
      </div>

      {/* Journey / Timeline */}
      <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl shadow-lg p-10 mb-20">
        <h3 className="text-3xl font-bold text-purple-900 mb-8 text-center">
          Our Journey So Far
        </h3>
        <ul className="space-y-6 text-gray-800 text-lg">
          <li>📘 Started with a small group of learners eager to code.</li>
          <li>💡 Designed fun, practical projects to make concepts clear.</li>
          <li>🤝 Built a supportive community of passionate students.</li>
          <li>🚀 Helping learners prepare for interviews and real-world challenges.</li>
        </ul>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <h3 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
          Ready to Begin Your Coding Journey? 🚀
        </h3>
        <p className="text-lg text-gray-700 mb-8">
          Join us today and take your first step towards becoming a confident 
          programmer and building your dream career.
        </p>
        <button className="px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-lg rounded-2xl shadow-xl hover:scale-105 transition transform">
          Enroll Now
        </button>
      </div>
    </section>
  );
}
