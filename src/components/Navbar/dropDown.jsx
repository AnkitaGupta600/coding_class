"use client";
import Link from "next/link";
import { courseCategories } from "../../lib/courses";

export default function DropDown() {
  return (
    <div className="w-[900px] max-h-[80vh] overflow-y-auto rounded-xl bg-white shadow-xl animate-slide-down z-50 p-4 grid grid-cols-2 gap-4 mt-8">
      {courseCategories.map((course) => (
        <Link key={course.id} href={`/courses/${course.id}`} className="block">
          <div className="p-3 rounded-lg hover:bg-blue-50 transition-all duration-200 cursor-pointer group border border-transparent hover:border-blue-200">
            <h3 className="text-sm font-semibold text-blue-600 group-hover:text-blue-700 transition-colors">
              {course.title}
            </h3>
            <p className="text-xs text-gray-500 mt-1 group-hover:text-gray-600">
              {course.subCourses.length} modules • {course.price}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
