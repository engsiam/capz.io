"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function HyperspeedBackground() {
  const [lines, setLines] = useState<number[]>([]);

  useEffect(() => {
    // Generate an array of line positions
    const lineCount = 50;
    const newLines = Array.from({ length: lineCount }, (_, i) => i);
    setLines(newLines);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      {lines.map((line) => (
        <motion.div
          key={line}
          className="absolute w-0.5 bg-white opacity-20"
          style={{
            left: `${Math.random() * 100}%`,
            height: `${Math.random() * 100 + 100}px`,
          }}
          animate={{
            y: ["-100%", "100%"],
          }}
          transition={{
            duration: Math.random() * 1 + 0.5,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random(),
          }}
        />
      ))}
    </div>
  );
}
