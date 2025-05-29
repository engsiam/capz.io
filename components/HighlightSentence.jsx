// components/HighlightText.js
"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const HighlightSentence = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.7, triggerOnce: false });

  return (
    <motion.span
      ref={ref}
      className={`transition-colors duration-500 ${
        isInView ? "text-white" : "text-gray-500"
      }`}
    >
      {children}
    </motion.span>
  );
};

export default HighlightSentence;
