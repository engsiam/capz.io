"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ThemeToggle from "./theme-toggle";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-sm border-b border-gray-800"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="CapZ Logo"
              width={100}
              height={30}
              priority
              className="w-auto h-8 md:h-10"
            />
          </Link>

          <div className="flex items-center gap-4">
            <nav className="hidden md:flex items-center gap-6 uppercase">
              <Link
                href="/"
                className="text-md font-medium text-white hover:text-white transition-colors"
              >
                Home
              </Link>
              <Link
                href="/projects"
                className="text-md font-medium text-white hover:text-white transition-colors"
              >
                Startups
              </Link>
              <Link
                href="/investors"
                className="text-md font-medium text-white hover:text-white transition-colors"
              >
                Investors
              </Link>
              {/* <Link
                href="/mentors"
                className="text-md font-medium text-white hover:text-white transition-colors"
              >
                Mentors
              </Link> */}
              <Link
                href="/about"
                className="text-md font-medium text-white hover:text-white transition-colors"
              >
                About
              </Link>
            </nav>

            <div className="hidden md:flex items-center gap-4">
              <ThemeToggle />
              <Link
                href="/login"
                className="text-md font-medium text-white hover:text-white transition-colors px-4 py-2 border border-gray-800 rounded-full hover:border-cyan-500"
              >
                Log In
              </Link>
              <Link
                href="/entrepreneurs/submit"
                className="px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium transition-all hover:shadow-lg hover:shadow-cyan-500/20"
              >
                Submit Startup
              </Link>
            </div>

            <div className="flex md:hidden items-center gap-4">
              <ThemeToggle />
              <Link
                href="/login"
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
              >
                Login
              </Link>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="flex items-center justify-center size-10 text-gray-300"
              >
                {mobileMenuOpen ? (
                  <X className="size-6" />
                ) : (
                  <Menu className="size-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            <nav className="flex flex-col gap-4 mb-6">
              <Link
                href="/projects"
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors px-4 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Startups
              </Link>
              <Link
                href="/investors"
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors px-4 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Investors
              </Link>
              <Link
                href="/mentors"
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors px-4 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Mentors
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors px-4 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
            </nav>

            <div className="flex flex-col gap-3 px-4">
              <Link
                href="/login"
                className="text-sm font-medium text-center text-gray-300 hover:text-white transition-colors px-4 py-2 border border-gray-800 rounded-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                Log In
              </Link>
              <Link
                href="/entrepreneurs/submit"
                className="text-sm font-medium text-center text-white px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                Submit Startup
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
