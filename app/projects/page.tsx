"use client";

import ProjectCard from "@/components/ProjectCard";
import { motion } from "framer-motion";

import {
  BatteryCharging,
  Briefcase,
  Database,
  Leaf,
  Lock,
  Search,
  Shield,
  Sprout,
  Stethoscope,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const projects = [
  {
    id: 1,
    name: "NeuralTech",
    logo: Briefcase,
    description: "AI-driven data analytics for enterprise",
    fundingStage: "Series A",
    raised: "$5.2M",
    goal: "$8M",
    progress: 65,
    industry: "AI/ML",
    location: "San Francisco, CA",
  },
  {
    id: 2,
    name: "CloudSecure",
    logo: Lock,
    description: "Zero-trust security for cloud infrastructure",
    fundingStage: "Seed",
    raised: "$1.8M",
    goal: "$3M",
    progress: 60,
    industry: "Cybersecurity",
    location: "Boston, MA",
  },
  {
    id: 3,
    name: "GreenFinance",
    logo: Leaf,
    description: "Sustainable investment platform",
    fundingStage: "Series B",
    raised: "$12M",
    goal: "$20M",
    progress: 60,
    industry: "FinTech",
    location: "New York, NY",
  },
  {
    id: 4,
    name: "HealthBridge",
    logo: Stethoscope,
    description: "Remote patient monitoring solutions",
    fundingStage: "Seed",
    raised: "$2.5M",
    goal: "$4M",
    progress: 62,
    industry: "HealthTech",
    location: "Austin, TX",
  },
  {
    id: 5,
    name: "EcoCharge",
    logo: BatteryCharging,
    description: "Renewable energy charging infrastructure",
    fundingStage: "Series A",
    raised: "$7.5M",
    goal: "$10M",
    progress: 75,
    industry: "CleanTech",
    location: "Portland, OR",
  },
  {
    id: 6,
    name: "UrbanFarm",
    logo: Sprout,
    description: "Vertical farming technology for urban areas",
    fundingStage: "Seed",
    raised: "$3.2M",
    goal: "$5M",
    progress: 64,
    industry: "AgTech",
    location: "Chicago, IL",
  },
  {
    id: 7,
    name: "DataSync",
    logo: Database,
    description: "Real-time data synchronization platform",
    fundingStage: "Series A",
    raised: "$6.8M",
    goal: "$12M",
    progress: 57,
    industry: "Enterprise Software",
    location: "Seattle, WA",
  },
  {
    id: 8,
    name: "CryptoSecure",
    logo: Shield,
    description: "Blockchain security and compliance tools",
    fundingStage: "Seed",
    raised: "$2.1M",
    goal: "$4M",
    progress: 52,
    industry: "Blockchain",
    location: "Miami, FL",
  },
];

const industries = [
  "All Industries",
  "AI/ML",
  "Cybersecurity",
  "FinTech",
  "HealthTech",
  "CleanTech",
  "AgTech",
  "Enterprise Software",
  "Blockchain",
];

const stages = [
  "All Stages",
  "Pre-Seed",
  "Seed",
  "Series A",
  "Series B",
  "Series C+",
];

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("All Industries");
  const [selectedStage, setSelectedStage] = useState("All Stages");
  const [sortBy, setSortBy] = useState("newest");

  // Filter projects based on search, industry, and stage
  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesIndustry =
      selectedIndustry === "All Industries" ||
      project.industry === selectedIndustry;

    const matchesStage =
      selectedStage === "All Stages" || project.fundingStage === selectedStage;

    return matchesSearch && matchesIndustry && matchesStage;
  });

  // Sort projects
  const sortedProjects = [...filteredProjects].sort((a, b) => {
    if (sortBy === "raised-high") {
      return (
        Number.parseFloat(b.raised.replace("$", "").replace("M", "")) -
        Number.parseFloat(a.raised.replace("$", "").replace("M", ""))
      );
    } else if (sortBy === "raised-low") {
      return (
        Number.parseFloat(a.raised.replace("$", "").replace("M", "")) -
        Number.parseFloat(b.raised.replace("$", "").replace("M", ""))
      );
    } else if (sortBy === "progress") {
      return b.progress - a.progress;
    }
    // Default: newest (by ID in this mock data)
    return b.id - a.id;
  });

  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-orange-500">
            Explore Startups
          </h1>
          <p className="text-lg max-w-3xl mx-auto text-gray-300">
            Discover innovative startups raising capital across various
            industries and funding stages
          </p>
        </motion.div>

        {/* Filters and Search */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 mb-8">
          <div className="grid md:grid-cols-4 gap-4">
            <div className="md:col-span-2">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Search className="size-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="bg-gray-800 border border-gray-700 text-white text-sm rounded-lg block w-full pl-10 p-2.5 focus:border-cyan-500 focus:outline-none"
                  placeholder="Search startups by name or description..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            <div>
              <select
                className="bg-gray-800 border border-gray-700 text-white text-sm rounded-lg block w-full p-2.5 focus:border-cyan-500 focus:outline-none"
                value={selectedIndustry}
                onChange={(e) => setSelectedIndustry(e.target.value)}
              >
                {industries.map((industry) => (
                  <option key={industry} value={industry}>
                    {industry}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <select
                className="bg-gray-800 border border-gray-700 text-white text-sm rounded-lg block w-full p-2.5 focus:border-cyan-500 focus:outline-none"
                value={selectedStage}
                onChange={(e) => setSelectedStage(e.target.value)}
              >
                {stages.map((stage) => (
                  <option key={stage} value={stage}>
                    {stage}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-800">
            <div className="text-sm text-gray-400">
              Showing{" "}
              <span className="font-medium text-white">
                {sortedProjects.length}
              </span>{" "}
              results
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-400">Sort by:</span>
              <select
                className="bg-gray-800 border border-gray-700 text-white text-sm rounded-lg p-2 focus:border-cyan-500 focus:outline-none"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="newest">Newest</option>
                <option value="raised-high">Highest Raised</option>
                <option value="raised-low">Lowest Raised</option>
                <option value="progress">Funding Progress</option>
              </select>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        {sortedProjects.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-gray-900/50 border border-gray-800 rounded-xl">
            <div className="size-16 mx-auto mb-4 rounded-full bg-gray-800 flex items-center justify-center">
              <Search className="size-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">No startups found</h3>
            <p className="text-gray-400">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
