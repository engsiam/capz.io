"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { featuredStartups } from "@/src/data/data"

interface Startup {
  id: number
  name: string
  logo: string
  description: string
  fundingStage: string
  raised: string
}

interface StartupCardProps {
  startup: Startup
  index: number
}

export function StartupCard({ startup, index }: StartupCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ y: -5, transition: { duration: 0.3 } }}
      className="bg-gray-900/50 border border-gray-800 rounded-xl overflow-hidden hover:border-cyan-500/30 transition-colors duration-300"
    >
      <div className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <Image
            src={startup.logo || "/placeholder.svg"}
            alt={startup.name}
            width={50}
            height={50}
            className="rounded-lg bg-gray-800 p-2"
          />
          <div>
            <h3 className="font-bold">{startup.name}</h3>
            <span className="text-xs px-2 py-1 rounded-full bg-cyan-500/20 text-cyan-400">{startup.fundingStage}</span>
          </div>
        </div>

        <p className="text-gray-400 text-sm mb-4 line-clamp-2">{startup.description}</p>

        <div className="border-t border-gray-800 pt-4 mt-4">
          <div className="flex justify-between items-center">
            <div>
              <span className="text-xs text-gray-500">Raised</span>
              <div className="font-bold text-white">{startup.raised}</div>
            </div>

            <Link
              href={`/projects/${startup.id}`}
              className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 flex items-center gap-1 text-sm"
            >
              View Details
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
