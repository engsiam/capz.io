"use client";

import { useTheme } from "@/context/theme-context";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const maxSpeed = 0.5; // Adjust the speed of the parallax effect
  const { theme } = useTheme();

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY]);

  return (
    <div ref={heroRef} className="relative h-screen w-full overflow-hidden">
      {/* Fixed hero content */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white p-4">
        <div className="text-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center mb-8"
          >
            {/* Logo or content */}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-8xl font-bold mb-6 text-white"
          >
            {/* bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-orange-500 */}
            Connecting <span className="text-stroke-white">Visionaries</span>{" "}
            with Capital
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-xl mb-10 max-w-3xl mx-auto text-white"
          >
            The platform where groundbreaking startups meet strategic investors.
            We're transforming how innovation gets funded.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link
              href="/projects"
              className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium text-lg hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 transform hover:-translate-y-1"
            >
              Explore Projects
            </Link>
            <Link
              href="/entrepreneurs/submit"
              className="px-8 py-3 rounded-full bg-transparent border-2 border-white font-medium text-lg hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300 transform hover:-translate-y-1"
            >
              Submit Startup
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Parallax effect: Smoothly moving background image */}
      <div className="absolute inset-0 z-10 bg-black/50"></div>
      <div
        className="absolute inset-0 z-0 transition-transform duration-[1500ms] ease-in-out"
        style={{
          transform: `translateY(-${scrollY * maxSpeed}px)`, // Smooth vertical movement
          willChange: "transform",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Background"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Video controls */}
      <div className="absolute bottom-4 right-4 z-30">
        {/* Play/Pause Button */}
      </div>
    </div>
  );
}
