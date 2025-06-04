"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";



interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <motion.div
      className="feature-card relative bg-black/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 shadow-lg transition-all duration-300 hover:shadow-[#FFAC0E] hover:border-[#67E6F4]"
      whileHover={{ y: -5, transition: { duration: 0.3 } }}
    >
      <div className="text-cyan-400 mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-white">{description}</p>
    </motion.div>
  );
}
