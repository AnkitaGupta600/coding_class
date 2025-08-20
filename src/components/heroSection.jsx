import { Code, Database, Shield, BookOpen, Video } from "lucide-react"; 
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-orange-100 via-rose-100 to-yellow-100 px-6 py-16 md:py-24 h-screen">
      <div className="relative mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          
          {/* LEFT CONTENT */}
          <div className="space-y-10">
            <div className="flex items-center gap-2 text-gray-700">
              <div className="h-3 w-3 rotate-45 bg-orange-500"></div>
              <span className="text-sm md:text-base font-medium">
                Learn from Experts, Build Real Skills 🎯
              </span>
            </div>

            <div className="space-y-2">
              <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
                Transform the Way You Learn
              </h1>
              <h2 className="relative text-4xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
                Skills That Power Your Future
                <div className="absolute -bottom-2 left-0 h-1 w-40 bg-orange-500"></div>
              </h2>
            </div>

            <p className="mt-10 max-w-md text-base md:text-lg text-gray-700 leading-relaxed">
              Access <span className="font-semibold text-orange-600">world-class courses</span> designed 
              to help you grow in <span className="font-semibold">technology, data, and business</span>.  
              Learn at your own pace, guided by industry experts, and turn knowledge into real success.
            </p>

            <div className="flex gap-4">
              <Button className="bg-gradient-to-r from-orange-500 to-pink-500 px-8 py-5 text-base md:text-lg font-semibold text-white rounded-xl shadow-md hover:opacity-90 transition">
                Get Started
              </Button>
              <Button variant="outline" className="px-8 py-5 text-base md:text-lg font-semibold border-orange-400 text-orange-600 rounded-xl hover:bg-orange-50 transition">
                Try Free Demo
              </Button>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="relative flex justify-center md:justify-end items-center">
            
            {/* Background circles */}
            <div className="absolute -right-20 top-8 h-96 w-96 rounded-full bg-orange-300/30 blur-3xl"></div>
            <div className="absolute right-0 top-28 h-72 w-72 rounded-full bg-pink-300/40 blur-2xl"></div>

            {/* Girl Image */}
            <div className="mt-10 relative z-10">
              <img
                src="/girl_image.png"
                alt="Student learning online"
                className="w-[520px] lg:w-[620px] object-contain drop-shadow-xl"
              />
            </div>

            {/* Skill Card */}
            <div className="absolute right-0 bottom-4 z-20 w-62 rounded-xl bg-white p-5 shadow-2xl">
              <div className="space-y-2 text-sm">
                <div>
                  <div className="flex items-center gap-2">
                    <Code className="h-4 w-4 text-orange-500" />
                    <span className="font-medium">Web Development</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-gray-200 mt-1">
                    <div className="h-2 w-3/4 rounded-full bg-orange-500"></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <Database className="h-4 w-4 text-pink-500" />
                    <span className="font-medium">Data Science</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-gray-200 mt-1">
                    <div className="h-2 w-2/4 rounded-full bg-pink-500"></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-yellow-500" />
                    <span className="font-medium">Cyber Security</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-gray-200 mt-1">
                    <div className="h-2 w-2/3 rounded-full bg-yellow-500"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Tech Icons */}
            <div
              className="absolute -right-8 -top-8 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 shadow-lg"
              style={{ animation: "float 3s ease-in-out infinite alternate" }}
            >
              <Code className="h-6 w-6 text-white" />
            </div>

            <div
              className="absolute right-12 bottom-40 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-pink-500 shadow-lg"
              style={{ animation: "float 4s ease-in-out infinite alternate" }}
            >
              <Video className="h-6 w-6 text-white" />
            </div>

            <div
              className="absolute right-28 bottom-12 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-yellow-500 shadow-lg"
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

          </div>
        </div>
      </div>
    </div>
  );
}
