"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import ThemeToggle from "./theme-toggle";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [teamOpen, setTeamOpen] = useState(false);

  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown if clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setTeamOpen(false);
      }
    }
    if (teamOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [teamOpen]);

  // Reset state on route change and scroll detection
  useEffect(() => {
    setMobileMenuOpen(false);
    setTeamOpen(false);

    function onScroll() {
      setIsScrolled(window.scrollY > 10);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

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
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
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

              {/* Desktop Dropdown — opens/closes on click */}
              <div ref={dropdownRef} className="relative">
                <button
                  aria-haspopup="true"
                  aria-expanded={teamOpen}
                  onClick={() => setTeamOpen((open) => !open)}
                  className="flex items-center gap-1 text-md font-medium text-white hover:text-white transition-colors focus:outline-none"
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setTeamOpen((open) => !open);
                    }
                    if (e.key === "Escape") {
                      setTeamOpen(false);
                    }
                  }}
                >
                  Company <ChevronDown className="size-4" />
                </button>

                {teamOpen && (
                  <div className="absolute left-0 mt-2 w-48 bg-gray-900 border border-gray-800 rounded-lg shadow-xl py-2 z-50">
                    <Link
                      href="/about"
                      className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800/50"
                      onClick={() => setTeamOpen(false)}
                    >
                      About
                    </Link>
                    <Link
                      href="/teams"
                      className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800/50"
                      onClick={() => setTeamOpen(false)}
                    >
                      Team
                    </Link>
                  </div>
                )}
              </div>
            </nav>

            {/* Right side buttons (desktop) */}
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

            {/* Mobile Hamburger */}
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
                aria-label="Toggle menu"
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
          <div className="md:hidden py-4 border-t border-gray-800 bg-gray-800">
            <nav className="flex flex-col gap-4 mb-6">
              <Link
                href="/"
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors px-4 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
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

              {/* Mobile Dropdown */}
              <div className="flex flex-col">
                <button
                  onClick={() => setTeamOpen((open) => !open)}
                  className="flex items-center justify-between text-sm font-medium text-gray-300 hover:text-white transition-colors px-4 py-2"
                  aria-expanded={teamOpen}
                  aria-controls="mobile-team-dropdown"
                >
                  <span>Company</span>
                  <ChevronDown
                    className={`size-4 transition-transform ${
                      teamOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {teamOpen && (
                  <div
                    id="mobile-team-dropdown"
                    className="bg-gray-800/50 rounded-md mt-1 mb-1 mx-4"
                  >
                    <Link
                      href="/about"
                      className="block px-4 py-2 text-sm text-gray-300 hover:text-white"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      About
                    </Link>
                    <Link
                      href="/teams"
                      className="block px-4 py-2 text-sm text-gray-300 hover:text-white"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Our Team
                    </Link>
                  </div>
                )}
              </div>
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
