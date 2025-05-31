"use client";

import { useTheme } from "@/context/theme-context";
import { motion } from "framer-motion";
import Img from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import HyperspeedBackground from "./HyperspeedBackground";

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

  // Calculate a parallax offset for lightning background
  // Adjust multiplier to control speed/direction
  const parallaxOffset = scrollY * 0.3;

  return (
    <div
      ref={heroRef}
      className="relative h-[80vh] md:h-screen w-full overflow-hidden"
    >
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
            className="text-4xl md:text-9xl font-bold mb-6 text-white"
          >
            {/* bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-orange-500 */}
            Your Vision <span className="text-stroke-white">Funded </span> Here
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-base md:text-xl mb-10 max-w-3xl mx-auto text-white"
          >
            Have a solid project? We find the capital. Turn your detailed plan
            real. Investors, access quality opportunities. Your money works hard
            for you.
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
              Submit Your Dream Plan
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
        <Img
          src="./slider/building.jpg"
          fill
          alt="Background"
          loading="lazy"
          className="w-full h-full object-cover"
        />

        <HyperspeedBackground />
      </div>

      {/* Video controls */}
      <div className="absolute bottom-4 right-4 z-30">
        {/* Play/Pause Button */}
      </div>
    </div>
  );
}
