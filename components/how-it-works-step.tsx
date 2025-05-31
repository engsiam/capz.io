import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import React from "react";

interface HowItWorksStepProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const HowItWorksStep: React.FC<HowItWorksStepProps> = ({
  icon: Icon,
  title,
  description,
}) => {
  return (
    <div className="flex items-start space-x-4">
      <motion.div
        className="flex-shrink-0"
        whileHover={{ scale: 1.2, rotate: 10 }}
        whileTap={{ scale: 0.9, rotate: -10 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Icon className="w-8 h-8 text-cyan-400" />
      </motion.div>
      <div>
        <h4 className="text-lg font-semibold mb-1">{title}</h4>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
};
