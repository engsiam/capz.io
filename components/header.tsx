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
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null); // for mobile dropdown
  const [teamOpen, setTeamOpen] = useState(false); // for desktop dropdown

  const pathname = usePathname();

  // Separate refs for desktop and mobile dropdowns
  const desktopDropdownRef = useRef<HTMLDivElement>(null);
  // Mobile dropdown doesn't need outside click handling in this snippet

  // Close desktop dropdown if clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        desktopDropdownRef.current &&
        !desktopDropdownRef.current.contains(event.target as Node)
      ) {
        setTeamOpen(false);
      }
    }
    if (teamOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [teamOpen]);

  // Reset mobile menu and dropdowns on route change and scroll detection
  useEffect(() => {
    setMobileMenuOpen(false);
    setTeamOpen(false);
    setDropdownOpen(null);

    function onScroll() {
      setIsScrolled(window.scrollY > 10);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
    ${
      isScrolled
        ? "bg-black/80 backdrop-blur-sm border-b border-white text-white"
        : "bg-black/80 text-white"
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
                className="text-md font-medium hover:text-[#2563eb] transition-colors"
              >
                Home
              </Link>
              <Link
                href="/projects"
                className="text-md font-medium hover:text-[#2563eb] transition-colors"
              >
                Startups
              </Link>
              <Link
                href="/investors"
                className="text-md font-medium hover:text-[#2563eb] transition-colors"
              >
                Investors
              </Link>

              {/* Desktop Dropdown */}
              <div ref={desktopDropdownRef} className="relative">
                <button
                  aria-haspopup="true"
                  aria-expanded={teamOpen}
                  onClick={() => setTeamOpen((open) => !open)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setTeamOpen((open) => !open);
                    }
                    if (e.key === "Escape") {
                      setTeamOpen(false);
                    }
                  }}
                  className="flex items-center gap-1 text-md font-medium hover:text-[#2563eb] transition-colors focus:outline-none"
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
              {/* <ThemeToggle /> */}
              <Link
                href="/login"
                className="text-md font-medium text-white hover:text-dark transition-colors px-4 py-2 border border-gray-800 rounded-full hover:border-cyan-500 dark:hover:text-white"
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
              {/* <ThemeToggle /> */}
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
                {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
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
              <div className="text-sm font-medium text-gray-300 hover:text-white transition-colors px-4 py-2">
                <li className="relative list-none">
                  <button
                    aria-haspopup="true"
                    aria-expanded={dropdownOpen === "Company"}
                    onClick={() =>
                      setDropdownOpen(dropdownOpen === "Company" ? null : "Company")
                    }
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setDropdownOpen(
                          dropdownOpen === "Company" ? null : "Company"
                        );
                      }
                      if (e.key === "Escape") {
                        setDropdownOpen(null);
                      }
                    }}
                    className="flex items-center justify-between w-full py-2 text-md font-medium hover:text-[#2563eb] transition-colors focus:outline-none"
                  >
                    Company <ChevronDown className="size-4" />
                  </button>

                  {dropdownOpen === "Company" && (
                    <div className="mt-1 rounded-md border border-gray-800 bg-gray-900 py-2 shadow-lg">
                      <Link
                        href="/about"
                        className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800/50"
                        onClick={() => {
                          setDropdownOpen(null);
                          setMobileMenuOpen(false);
                        }}
                      >
                        About
                      </Link>
                      <Link
                        href="/teams"
                        className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800/50"
                        onClick={() => {
                          setDropdownOpen(null);
                          setMobileMenuOpen(false);
                        }}
                      >
                        Team
                      </Link>
                    </div>
                  )}
                </li>
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
                className="px-4 py-2 text-sm font-medium text-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white transition-all hover:shadow-lg hover:shadow-cyan-500/20"
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
