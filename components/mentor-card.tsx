"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface Mentor {
  id: number
  name: string
  role: string
  image: string
  quote: string
}

interface MentorCardProps {
  mentor: Mentor
  index: number
}

export function MentorCard({ mentor, index }: MentorCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      className="bg-gray-900/50 border border-gray-800 rounded-xl overflow-hidden hover:border-cyan-500/30 transition-colors duration-300 group"
    >
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <Image
          src={mentor.image || "/placeholder.svg"}
          alt={mentor.name}
          fill
          className="object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      </div>

      <div className="p-6 relative">
        <div className="absolute top-0 right-0 transform -translate-y-1/2 translate-x-1/2">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
              />
            </svg>
          </div>
        </div>

        <h3 className="text-xl font-bold">{mentor.name}</h3>
        <p className="text-gray-400 mb-4">{mentor.role}</p>

        <blockquote className="italic text-gray-300">"{mentor.quote}"</blockquote>

        <div className="mt-6">
          <button className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 flex items-center gap-1 text-sm">
            View Profile
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </motion.div>
  )
}
