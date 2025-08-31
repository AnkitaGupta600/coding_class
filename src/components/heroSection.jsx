"use client";
import { Code, Database, Shield, BookOpen, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-blue-100 via-cyan-100 to-teal-100 px-4 py-14 sm:px-6 sm:py-20 md:py-24 h-auto">
      <div className="relative mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          {/* LEFT CONTENT with animation */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8 sm:space-y-10 text-center md:text-left"
          >
            <div className="flex items-center justify-center md:justify-start gap-2 text-gray-700">
              <div className="h-3 w-3 rotate-45 bg-blue-600"></div>
              <span className="text-sm md:text-base font-medium">
                Learn from Experts, Build Real Skills 🎯
              </span>
            </div>

            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
                Transform the Way You Learn
              </h1>
              <h2 className="relative text-3xl sm:text-4xl lg:text-6xl font-extrabold text-gray-900 leading-tight inline-block">
                Skills That Power Your Future
                <div className="absolute -bottom-2 left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0 h-1 w-32 sm:w-40 bg-blue-600"></div>
              </h2>
            </div>

            <p className="mt-6 sm:mt-10 max-w-md mx-auto md:mx-0 text-base md:text-lg text-gray-700 leading-relaxed">
              Access{" "}
              <span className="font-semibold text-blue-600">
                world-class courses
              </span>{" "}
              designed to help you grow in{" "}
              <span className="font-semibold">
                technology, data, and business
              </span>
              . Learn at your own pace, guided by industry experts, and turn
              knowledge into real success.
            </p>

            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 text-base font-semibold text-white rounded-xl shadow-md hover:opacity-90 transition"
              >
                Get Started
              </Link>
              <Link
                href="/demo"
                className="px-6 py-3 text-base font-semibold border border-blue-400 text-blue-600 rounded-xl hover:bg-blue-50 transition bg-transparent"
              >
                Try Free Demo
              </Link>
            </div>
          </motion.div>

          {/* RIGHT CONTENT with animation */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex justify-center md:justify-end items-center"
          >
            {/* Background circles */}
            <div className="absolute -right-12 top-8 h-40 w-40 sm:h-60 sm:w-60 md:h-96 md:w-96 rounded-full bg-blue-300/30 blur-3xl"></div>
            <div className="absolute right-0 top-28 h-32 w-32 sm:h-52 sm:w-52 md:h-72 md:w-72 rounded-full bg-cyan-300/40 blur-2xl"></div>

            {/* Girl Image */}
            <div className="mt-8 relative z-10">
              <img
                src="/girl_image.png"
                alt="Student learning online"
                className="w-[250px] sm:w-[350px] md:w-[450px] lg:w-[620px] object-contain drop-shadow-xl mx-auto"
              />
            </div>

            {/* Skill Card */}
            <div className="absolute right-2 bottom-4 z-20 w-[220px] sm:w-[260px] md:w-72 rounded-xl bg-white p-4 sm:p-5 shadow-2xl">
              <div className="space-y-2 text-sm">
                <div>
                  <div className="flex items-center gap-2">
                    <Code className="h-4 w-4 text-blue-600" />
                    <span className="font-medium">Web Development</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-gray-200 mt-1">
                    <div className="h-2 w-3/4 rounded-full bg-blue-600"></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <Database className="h-4 w-4 text-cyan-500" />
                    <span className="font-medium">Data Science</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-gray-200 mt-1">
                    <div className="h-2 w-2/4 rounded-full bg-cyan-500"></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-teal-500" />
                    <span className="font-medium">Cyber Security</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-gray-200 mt-1">
                    <div className="h-2 w-2/3 rounded-full bg-teal-500"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Icons -> show only md+ */}
            <div
              className="hidden md:flex absolute -right-8 -top-8 z-20 h-12 w-12 items-center justify-center rounded-full bg-blue-600 shadow-lg"
              style={{ animation: "float 3s ease-in-out infinite alternate" }}
            >
              <Code className="h-6 w-6 text-white" />
            </div>

            <div
              className="hidden md:flex absolute right-12 bottom-40 z-20 h-12 w-12 items-center justify-center rounded-full bg-cyan-500 shadow-lg"
              style={{ animation: "float 4s ease-in-out infinite alternate" }}
            >
              <Video className="h-6 w-6 text-white" />
            </div>

            <div
              className="hidden md:flex absolute right-28 bottom-12 z-20 h-12 w-12 items-center justify-center rounded-full bg-teal-500 shadow-lg"
              style={{ animation: "float 3.5s ease-in-out infinite alternate" }}
            >
              <BookOpen className="h-6 w-6 text-white" />
            </div>

            {/* Floating Animation */}
            <style>
              {`
                @keyframes float {
                  0% { transform: translateY(0px); }
                  50% { transform: translateY(-10px); }
                  100% { transform: translateY(0px); }
                }
              `}
            </style>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
