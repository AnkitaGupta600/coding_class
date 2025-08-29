import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 via-blue-950 to-black text-gray-300">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-5">
            <div className="flex items-center space-x-2">
              {/* Company Logo */}
              <Link
                href="/"
                className="flex items-center gap-3"
                aria-label="Shiva Code Solution Home"
              >
                <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-blue-800 text-white">
                  <span className="text-[11px] font-black tracking-wide">
                    SCS
                  </span>
                  <span className="absolute right-1.5 top-1.5 h-2 w-0.5 rounded-sm bg-green-500"></span>
                </div>
                <span className="text-2xl font-extrabold tracking-tight text-white">
                  Shiva Code Solution
                </span>
              </Link>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Unlock your potential with high-quality courses, hands-on
              projects, and expert mentors guiding you towards your dream
              career.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Twitter className="w-6 h-6" />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Youtube className="w-6 h-6" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-5">
            <h3 className="text-xl font-bold text-white">Quick Links</h3>
            <ul className="space-y-3">
              {["Home", "About Us", "Solutions", "Blog", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-cyan-400 transition-colors text-sm font-medium"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Popular Courses */}
          <div className="space-y-5">
            <h3 className="text-xl font-bold text-white">Popular Courses</h3>
            <ul className="space-y-3">
              {[
                "Web Development",
                "Data Science",
                "Cyber Security",
                "Digital Marketing",
                "UI/UX Design",
              ].map((course) => (
                <li key={course}>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-cyan-400 transition-colors text-sm font-medium"
                  >
                    {course}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-5">
            <h3 className="text-xl font-bold text-white">Contact Info</h3>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-white">Office1 - Indore</h3>
                  <p className="text-muted-foreground">
                    Scheme No 54, near to Malhar Mega Mall
                    <br />
                    Vijay Nagar
                    <br />
                    Indore, Madhya Pradesh - 452010
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-white ">
                    Office2 - Birsinghpur-Satna
                  </h3>
                  <p className="text-muted-foreground">
                    Near Bholenath Shiv Temple
                    <br />
                    Main-Market, Birsinghpur-Satna
                    <br />
                    Madhya Pradesh - 485226
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <p className="text-sm">+91 7440248190</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <p className="text-sm">shivanshu2019gupta@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-t border-gray-700 py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-5 md:space-y-0">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-white mb-2">
                Stay Updated
              </h3>
              <p className="text-gray-400 text-sm">
                Get the latest courses, career tips, and learning updates in
                your inbox.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-lg bg-gray-800 border border-gray-600 text-gray-200 placeholder-gray-400 focus:outline-none focus:border-cyan-400 flex-1 md:w-64"
              />
              <button className="px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-white rounded-lg font-medium transition-colors shadow-lg shadow-cyan-500/30">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 text-gray-500 text-sm">
            <p>
              &copy; {new Date().getFullYear()} Shiva Code Solution. All rights
              reserved.
            </p>
            <p>Developed with ❤️ by Shivanshu Gupta</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
