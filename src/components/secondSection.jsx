"use client";
import { ArrowUpRight, BarChart3 } from "lucide-react";
import { courseCategories } from "../lib/courses";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function SecondSection() {
  const containerRef = useRef(null);
  const [scrollWidth, setScrollWidth] = useState(0);

  // scroll progress of this whole big container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // move cards horizontally as vertical scroll happens
  const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${scrollWidth}px`]);

  // dynamically calculate total scroll distance
  useEffect(() => {
    const cardWidth = 340 + 24; // 340px card + 24px gap
    const totalCardsWidth = courseCategories.length * cardWidth;
    const viewportWidth = window.innerWidth;
    const extraScroll = totalCardsWidth - viewportWidth;

    setScrollWidth(extraScroll > 0 ? extraScroll : 0);
  }, []);

  return (
    // outer container: height = screenHeight + scrollWidth
    <section
      ref={containerRef}
      style={{ height: `calc(100vh + ${scrollWidth}px)` }}
      className="relative bg-blue-50"
    >
      {/* sticky section */}
      <div className="sticky top-0 h-screen flex flex-col justify-center px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto w-full">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Explore Our{" "}
              <span className="text-[#2e82b8] relative">
                Courses
                <div className="absolute bottom-0 left-0 w-full h-1 bg-[#2e82b8] rounded-full"></div>
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Choose from 10+ world-class courses across various domains and
              skill levels
            </p>
          </div>

          {/* Horizontal Scroller */}
          <motion.div style={{ x }} className="flex gap-6">
            {courseCategories?.map((category, index) => (
              <div
                key={`${category.id}-${index}`}
                className="min-w-[320px] max-w-[340px] bg-white/90 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-[#2e82b8]/40 transition-all duration-300 p-6 relative flex-shrink-0 group border border-blue-200"
              >
                {/* Action Button */}
                <div className="absolute top-6 right-6 z-10">
                  <button className="p-2 bg-[#2e82b8] text-white shadow-md rounded-full hover:bg-blue-600 transition-all duration-300 group-hover:scale-110">
                    <ArrowUpRight className="h-5 w-5" />
                  </button>
                </div>

                {/* Image */}
                <div className="relative overflow-hidden rounded-xl mb-6">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    className="w-full h-[200px] object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2e82b8]/60 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {category.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center bg-[#2e82b8]/10 text-[#2e82b8] text-sm font-semibold px-3 py-1 rounded-full border border-[#2e82b8]/30">
                      <BarChart3 className="w-4 h-4 mr-1" />
                      {category.subCourses?.length || 0} COURSES
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
