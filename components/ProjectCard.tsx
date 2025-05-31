"use client";

import { motion } from "framer-motion";
import Link from "next/link";

type Project = {
  id: number;
  name: string;
  logo?: React.ComponentType<{ className?: string }>;
  description: string;
  fundingStage: string;
  raised: string;
  goal: string;
  progress: number;
  industry: string;
  location: string;
};

interface ProjectCardProps {
  project: Project;
  index?: number; // optional for stagger animation delay
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const Logo = project.logo;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="bg-gray-900/50 border border-gray-800 rounded-xl overflow-hidden hover:border-cyan-500/30 transition-colors duration-300"
    >
      <div className="p-6">
        <div className="flex items-center gap-4 mb-4">
          {Logo ? (
            <Logo className="w-10 h-10 text-primary rounded-lg bg-gray-200 dark:bg-gray-800 p-2" />
          ) : (
            <img
              src="/placeholder.svg"
              alt={project.name}
              width={60}
              height={60}
              className="rounded-lg bg-gray-800 p-2"
            />
          )}
          <div>
            <h3 className="font-bold text-lg">{project.name}</h3>
            <div className="flex flex-wrap gap-2 mt-1">
              <span className="text-xs px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-400">
                {project.fundingStage}
              </span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-gray-800 text-gray-300">
                {project.industry}
              </span>
            </div>
          </div>
        </div>

        <p className="text-gray-400 text-sm mb-4">{project.description}</p>

        <div className="mb-4">
          <div className="flex justify-between mb-1">
            <span className="text-xs text-gray-400">Raised</span>
            <span className="text-xs text-gray-400">
              {project.raised} of {project.goal}
            </span>
          </div>
          <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
            <div
              className="bg-gradient-to-r from-cyan-500 to-blue-600 h-full rounded-full"
              style={{ width: `${project.progress}%` }}
            ></div>
          </div>
          <div className="flex justify-between mt-1">
            <span className="text-xs text-gray-500">{project.progress}% complete</span>
            <span className="text-xs text-gray-500">{project.location}</span>
          </div>
        </div>

        <Link
          href={`/projects/${project.id}`}
          className="inline-block w-full py-2 text-center rounded-lg bg-gray-800 hover:bg-gray-700 text-white font-medium transition-colors"
        >
          View Details
        </Link>
      </div>
    </motion.div>
  );
}
