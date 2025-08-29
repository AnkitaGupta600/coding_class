"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, BarChart3 } from "lucide-react";
import { useRef, useEffect } from "react";
import { courseCategories } from "../lib/courses";

gsap.registerPlugin(ScrollTrigger);

export default function SecondSection() {
  const scrollerRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const onWheel = (e) => {
      const verticalIntent = Math.abs(e.deltaY) >= Math.abs(e.deltaX);
      const atStart = el.scrollLeft <= 0;
      const atEnd = Math.ceil(el.scrollLeft + el.clientWidth) >= el.scrollWidth;

      if (verticalIntent) {
        if ((e.deltaY < 0 && atStart) || (e.deltaY > 0 && atEnd)) {
          return; // allow normal scroll
        }

        e.preventDefault();
        el.scrollBy({
          left: e.deltaY,
          behavior: "smooth",
        });
      }
    };

    // 👇 Control attach/detach with ScrollTrigger
    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top bottom", // jab section ka top viewport ke bottom ko touch kare
      end: "bottom top", // jab section ka bottom viewport ke top ko touch kare
      onEnter: () => {
        el.addEventListener("wheel", onWheel, { passive: false });
      },
      onLeave: () => {
        el.removeEventListener("wheel", onWheel);
      },
      onEnterBack: () => {
        el.addEventListener("wheel", onWheel, { passive: false });
      },
      onLeaveBack: () => {
        el.removeEventListener("wheel", onWheel);
      },
    });

    return () => {
      trigger.kill();
      el.removeEventListener("wheel", onWheel);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 px-4 bg-gradient-to-b from-blue-50 via-blue-100 to-blue-200"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Explore Our
            <span className="text-[#2e82b8] relative">
              {" "}
              Courses
              <div className="absolute bottom-0 left-0 w-full h-1 bg-[#2e82b8] rounded-full"></div>
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Choose from 10+ world-class courses across various domains and skill
            levels
          </p>
        </div>

        {/* Horizontal Scroller */}
        <div
          ref={scrollerRef}
          className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
        >
          {courseCategories?.map((category, index) => (
            <div
              key={`${category.id}-${index}`}
              className="snap-start min-w-[320px] max-w-[340px] bg-white/90 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-[#2e82b8]/40 transition-all duration-300 p-6 relative flex-shrink-0 group border border-blue-200"
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
        </div>
      </div>
    </section>
  );
}
