"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import {
  ArrowLeft,
  Clock,
  Users,
  Award,
  CheckCircle,
  Star,
  Play,
  BookOpen,
  Target,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
import { courseCategories } from "@/lib/courses";
import Footer from "../../../components/footer";
import Navbar from "../../../components/Navbar";

export default function CourseDetailPage() {
  const params = useParams();
  const courseId = Number.parseInt(params.id);
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const foundCourse = courseCategories.find((c) => c.id === courseId);
    setCourse(foundCourse);
  }, [courseId]);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-orange-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading course details...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-blue-200 via-amber-100 to-yellow-100">
        {/* Navigation */}
        <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky mt-24 z-50">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <Link
              href="/"
              className="inline-flex items-center text-gray-600 hover:text-orange-500 transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Courses
            </Link>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-200 via-amber-100 to-yellow-100"></div>
          <div className="relative max-w-7xl mx-auto px-4 py-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="inline-flex items-center bg-orange-100 text-orange-700 text-sm font-semibold px-4 py-2 rounded-full">
                    <Star className="w-4 h-4 mr-2" />
                    Premium Course
                  </div>
                  <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                    {course.title}
                    <span className="block text-3xl text-orange-500 mt-2">
                      Master the Future
                    </span>
                  </h1>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    Comprehensive training program designed to make you
                    industry-ready with hands-on projects, expert mentorship,
                    and career growth opportunities.
                  </p>
                </div>

                {/* Info Row */}
                <div className="flex flex-wrap gap-6">
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-5 w-5 mr-2 text-orange-500" />
                    <span>6-12 Months Duration</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="h-5 w-5 mr-2 text-blue-500" />
                    <span>Live Interactive Classes</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Award className="h-5 w-5 mr-2 text-amber-500" />
                    <span>Industry Certification</span>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-orange-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-orange-600 transition shadow-md">
                    Enroll Now
                  </button>
                  <button className="border-2 border-orange-500 text-orange-500 px-8 py-4 rounded-xl font-semibold hover:bg-orange-500 hover:text-white transition flex items-center justify-center">
                    <Play className="h-5 w-5 mr-2" />
                    Watch Demo
                  </button>
                </div>
              </div>

              {/* Right Image */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-200 to-amber-200 rounded-3xl transform rotate-6"></div>
                <div className="relative bg-white p-2 rounded-3xl shadow-2xl">
                  <img
                    src={
                      course.image ||
                      "/placeholder.svg?height=400&width=600&query=course+technology"
                    }
                    alt={course.title}
                    className="w-full h-80 object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Course Investment
                </h2>
                <p className="text-gray-600">
                  Flexible payment options available
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-amber-100 rounded-2xl">
                  <div className="text-4xl font-bold text-orange-600 mb-2">
                    {course.price.split(" + ")[0]}
                  </div>
                  <div className="text-gray-600 mb-4">Course Fee</div>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                      Complete Course Material
                    </li>
                    <li className="flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                      Live Project Training
                    </li>
                    <li className="flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                      Industry Certification
                    </li>
                  </ul>
                </div>

                {course.price.includes("placement") && (
                  <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl">
                    <div className="text-4xl font-bold text-blue-600 mb-2">
                      {course.price.split(" + ")[1]}
                    </div>
                    <div className="text-gray-600 mb-4">Placement Support</div>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li className="flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                        100% Placement Assistance
                      </li>
                      <li className="flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                        Interview Preparation
                      </li>
                      <li className="flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                        Resume Building
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Course Modules */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Course
                <span className="text-orange-500 relative">
                  {" "}
                  Modules
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-orange-500 rounded-full"></div>
                </span>
              </h2>
              <p className="text-gray-600 text-lg">
                Comprehensive curriculum designed by industry experts
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {course.subCourses.map((subCourse, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                        {subCourse.split(":")[0]}
                      </h3>
                      {subCourse.includes(":") && (
                        <p className="text-gray-600 text-sm">
                          {subCourse.split(":")[1]}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Why Choose This Course?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Expert Instructors
                </h3>
                <p className="text-gray-600">
                  Learn from industry professionals with years of experience
                </p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Hands-on Projects
                </h3>
                <p className="text-gray-600">
                  Build real-world projects to strengthen your portfolio
                </p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Community Support
                </h3>
                <p className="text-gray-600">
                  Join a community of learners and get peer support
                </p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Career Growth
                </h3>
                <p className="text-gray-600">
                  Advance your career with industry-relevant skills
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-orange-500 to-amber-500">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-orange-100 mb-8">
              Join thousands of students who have transformed their careers with
              our courses
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-orange-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Enroll Now
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-orange-600 transition-all duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
