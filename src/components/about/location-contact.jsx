"use client";

import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Car,
  Bus,
  ExternalLink,
} from "lucide-react";
import { useEffect } from "react";

export default function LocationContact() {
  useEffect(() => {
    const mapFrame = document.getElementById("location-map");
    if (mapFrame) {
      mapFrame.addEventListener("load", () => {
        console.log("Map loaded successfully");
      });
    }
  }, []);

  const coordinates = {
    lat: 22.754022544007956,
    lng: 75.89385466243786,
  };

  const openInGoogleMaps = () => {
    const url = `https://www.google.com/maps/search/?api=1&query=${coordinates.lat},${coordinates.lng}&zoom=17`;
    window.open(url, "_blank");
  };

  const openDirections = () => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${coordinates.lat},${coordinates.lng}`;
    window.open(url, "_blank");
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-6">
            Visit Our Campus
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We’re located in the heart of Indore, easily accessible from all
            parts of the city. Drop by to explore our vibrant campus and connect
            with our team.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all">
              <h3 className="text-2xl font-bold text-purple-900 mb-6">
                Get in Touch
              </h3>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Address
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      1st Floor, HP Petrol Pump, Celestial Arcade,
                      <br />
                      Near Radisson Hotel, Vijay Nagar,
                      <br />
                      Indore, Madhya Pradesh 452010
                    </p>
                    <div className="mt-2 text-sm text-purple-600 font-mono">
                      📍 {coordinates.lat}, {coordinates.lng}
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                    <p className="text-gray-600">+91 98765 43210</p>
                    <p className="text-gray-600">+91 87654 32109</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600">info@codingskillhub.com</p>
                    <p className="text-gray-600">
                      admissions@codingskillhub.com
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <Clock className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Hours</h4>
                    <p className="text-gray-600">
                      Mon - Sat: 9:00 AM - 8:00 PM
                    </p>
                    <p className="text-gray-600">Sunday: 10:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Transportation */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all">
              <h3 className="text-xl font-bold text-purple-900 mb-4">
                How to Reach
              </h3>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Bus className="w-5 h-5 text-purple-600" />
                  <span className="text-gray-600">
                    Bus Stop: Vijay Nagar (2 min walk)
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Car className="w-5 h-5 text-purple-600" />
                  <span className="text-gray-600">
                    Near HP Petrol Pump & Radisson Hotel
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-purple-600" />
                  <span className="text-gray-600">
                    Celestial Arcade, 1st Floor
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="relative h-96 w-full">
              <iframe
                id="location-map"
                src={`https://maps.google.com/maps?q=${coordinates.lat},${coordinates.lng}&t=m&z=17&output=embed&iwloc=near`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="CodingSkillHub Exact Location"
                className="rounded-t-2xl"
              ></iframe>

              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-purple-600 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-gray-900">
                    ShivaCodeSolution
                  </span>
                </div>
                <div className="text-xs text-gray-600 mt-1">
                  Celestial Arcade, Indore
                </div>
              </div>
            </div>

            {/* Map Controls */}
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-purple-900">
                    Our Location
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Celestial Arcade, Vijay Nagar, Indore
                  </p>
                </div>
                <div className="flex items-center space-x-1 text-xs text-gray-500">
                  <MapPin className="w-3 h-3" />
                  <span>Pinpoint Accurate</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={openDirections}
                  className="flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 text-white px-4 py-3 rounded-lg font-semibold transition"
                >
                  <Car className="w-4 h-4" />
                  <span>Directions</span>
                </button>
                <button
                  onClick={openInGoogleMaps}
                  className="flex items-center justify-center space-x-2 border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-4 py-3 rounded-lg font-semibold transition"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Open Maps</span>
                </button>
              </div>

              <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                <div className="text-xs text-gray-500 mb-1">
                  Exact Coordinates:
                </div>
                <div className="font-mono text-sm text-gray-700">
                  {coordinates.lat}, {coordinates.lng}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
