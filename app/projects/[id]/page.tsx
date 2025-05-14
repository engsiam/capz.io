"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Share2, Heart, ArrowLeft, Download, ExternalLink } from "lucide-react"

export default function ProjectPage({ params }: { params: { id: string } }) {
  const [isInterested, setIsInterested] = useState(false)

  // Dummy project data based on ID
  const project = {
    id: params.id,
    name: "NeuralTech AI",
    logo: "/placeholder.svg?height=80&width=80",
    banner: "/placeholder.svg?height=400&width=1200",
    description:
      "NeuralTech is revolutionizing enterprise data analytics with AI-driven insights that help companies make better decisions faster.",
    longDescription:
      "NeuralTech leverages cutting-edge machine learning algorithms to analyze vast datasets in real-time, providing actionable insights for enterprises across various industries. Our proprietary neural network architecture can process structured and unstructured data with unprecedented accuracy, identifying patterns and anomalies that traditional analytics platforms miss.",
    fundingStage: "Series A",
    raised: "$5.2M",
    goal: "$8M",
    progress: 65, // percentage
    location: "San Francisco, CA",
    industry: "Enterprise Software / AI",
    team: [
      {
        name: "John Smith",
        role: "Founder & CEO",
        image: "/placeholder.svg?height=150&width=150",
        bio: "Former ML Lead at Google. PhD in Computer Science from Stanford.",
      },
      {
        name: "Emily Chen",
        role: "CTO",
        image: "/placeholder.svg?height=150&width=150",
        bio: "10+ years in AI research. Previously built ML systems at Amazon.",
      },
      {
        name: "Michael Johnson",
        role: "VP of Product",
        image: "/placeholder.svg?height=150&width=150",
        bio: "Product leader with experience at multiple successful startups.",
      },
    ],
    highlights: [
      "3x faster data processing than competitors",
      "Proprietary neural network architecture",
      "Enterprise-grade security and compliance",
      "200+ active enterprise users",
    ],
    documents: [
      { name: "Pitch Deck", type: "pdf" },
      { name: "Financial Projections", type: "xlsx" },
      { name: "Technical Overview", type: "pdf" },
    ],
  }

  return (
    <main className="pt-20">
      {/* Banner */}
      <div className="relative h-[300px] md:h-[400px]">
        <Image src={project.banner || "/placeholder.svg"} alt={project.name} fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl">
        {/* Project Header */}
        <div className="flex flex-col md:flex-row gap-6 md:items-end -mt-20 relative z-10 mb-8">
          <div className="w-[100px] h-[100px] rounded-xl overflow-hidden bg-gray-900 border-4 border-black">
            <Image
              src={project.logo || "/placeholder.svg"}
              alt={project.name}
              width={100}
              height={100}
              className="object-cover"
            />
          </div>

          <div className="flex-1">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-cyan-400 mb-2"
            >
              <ArrowLeft className="size-4" />
              Back to Projects
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold">{project.name}</h1>
            <div className="flex flex-wrap gap-3 mt-2">
              <span className="text-xs px-2 py-1 rounded-full bg-cyan-500/20 text-cyan-400">
                {project.fundingStage}
              </span>
              <span className="text-xs px-2 py-1 rounded-full bg-gray-800 text-gray-300">{project.industry}</span>
              <span className="text-xs px-2 py-1 rounded-full bg-gray-800 text-gray-300">{project.location}</span>
            </div>
          </div>

          <div className="flex gap-2 items-center">
            <button
              onClick={() => setIsInterested(!isInterested)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full ${
                isInterested
                  ? "bg-cyan-500 text-white"
                  : "bg-transparent border border-gray-700 text-white hover:border-cyan-500 hover:text-cyan-400"
              } transition-colors`}
            >
              <Heart className="size-4" fill={isInterested ? "currentColor" : "none"} />
              {isInterested ? "Interested" : "Express Interest"}
            </button>

            <button className="flex items-center justify-center size-10 rounded-full bg-transparent border border-gray-700 text-white hover:border-cyan-500 hover:text-cyan-400 transition-colors">
              <Share2 className="size-4" />
              <span className="sr-only">Share</span>
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Left Column - Project Details */}
          <div className="md:col-span-2 space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">About {project.name}</h2>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <p className="text-gray-300">{project.longDescription}</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Key Highlights</h2>
              <ul className="grid sm:grid-cols-2 gap-4">
                {project.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="flex-shrink-0 size-5 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-3"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Team</h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {project.team.map((member, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="bg-gray-900/50 border border-gray-800 rounded-xl p-4"
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="size-16 rounded-full overflow-hidden mb-3">
                        <Image
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          width={64}
                          height={64}
                          className="object-cover"
                        />
                      </div>
                      <h3 className="font-medium">{member.name}</h3>
                      <p className="text-sm text-cyan-400">{member.role}</p>
                      <p className="text-xs text-gray-400 mt-2">{member.bio}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column - Funding & Actions */}
          <div className="space-y-6">
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">Funding</h3>

              <div className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-400">Raised</span>
                  <span className="text-sm font-medium">
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
                  <span className="text-xs text-gray-500">Seed Round</span>
                </div>
              </div>

              <button className="w-full py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium hover:shadow-lg hover:shadow-cyan-500/20 transition-all">
                Contact Startup
              </button>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">Documents</h3>

              <div className="space-y-3">
                {project.documents.map((doc, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0 size-8 rounded bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
                        {doc.type === "pdf" ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="size-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                              clipRule="evenodd"
                            />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="size-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                      </div>
                      <span className="text-sm">{doc.name}</span>
                    </div>
                    <button className="text-gray-400 hover:text-cyan-400">
                      <Download className="size-4" />
                      <span className="sr-only">Download</span>
                    </button>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-gray-800">
                <Link
                  href="#"
                  className="flex items-center justify-center gap-2 text-sm text-gray-300 hover:text-cyan-400"
                >
                  <ExternalLink className="size-4" />
                  Visit Website
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
