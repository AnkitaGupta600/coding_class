"use client";

import Link from "next/link";
import Image from "next/image";
import { Search, ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import DropDown from "../components/Navbar/dropDown";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationItems = [
    { name: "Home", href: "/", hasDropdown: false, isActive: true },
    { name: "About", href: "/about", hasDropdown: false },
    { name: "Courses", href: "#", hasDropdown: true },
    { name: "Blog", href: "/blog", hasDropdown: false },
    { name: "Contact", href: "/contact", hasDropdown: false },
  ];

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md border-b border-gray-200"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="Logo"
                width={40}
                height={40}
                className="rounded-full object-contain"
              />
              <span className="text-xl font-extrabold text-blue-800 tracking-tight">
                Gavinath Infotech
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-8 lg:flex">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 text-sm font-medium transition-all ${
                    item.isActive
                      ? "text-blue-600"
                      : "text-gray-700 hover:text-blue-600"
                  }`}
                >
                  {item.name}
                  {item.hasDropdown && <ChevronDown className="h-4 w-4" />}
                </Link>

                {/* Dropdown */}
                {item.name === "Courses" && item.hasDropdown && (
                  <div className="absolute left-0 top-full hidden w-48 rounded-xl bg-white p-4 shadow-lg group-hover:block">
                    <DropDown />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            <button className="hidden text-gray-600 hover:text-gray-900 lg:block">
              <Search className="h-5 w-5" />
            </button>

            <Link
              href="/login"
              className="hidden text-sm font-medium text-gray-700 hover:text-blue-600 lg:block"
            >
              Log In
            </Link>

            <Button className="hidden bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-2 text-sm font-semibold text-white shadow-md hover:opacity-90 lg:block">
              Get Started
            </Button>

            {/* Mobile Menu Toggle */}
            <button
              className="text-gray-600 hover:text-gray-900 lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="animate-slideDown mt-2 rounded-2xl bg-white p-4 shadow-lg lg:hidden">
            <div className="space-y-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex w-full items-center justify-between text-sm font-medium transition-colors ${
                    item.isActive
                      ? "text-blue-600"
                      : "text-gray-700 hover:text-blue-600"
                  }`}
                >
                  {item.name}
                  {item.hasDropdown && <ChevronDown className="h-4 w-4" />}
                </Link>
              ))}

              <hr className="my-4" />

              <div className="space-y-3">
                <button className="flex w-full items-center gap-2 text-sm font-medium text-gray-700">
                  <Search className="h-4 w-4" />
                  Search
                </button>
                <Link
                  href="/login"
                  className="block w-full text-left text-sm font-medium text-gray-700 hover:text-blue-600"
                >
                  Log In
                </Link>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md hover:opacity-90">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
