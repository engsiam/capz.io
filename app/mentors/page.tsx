"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Search, Calendar, Star } from "lucide-react"

// Sample data for mentors
const mentors = [
  {
    id: 1,
    name: "Alex Morgan",
    role: "Former CTO at TechGiants",
    image: "/placeholder.svg?height=150&width=150",
    expertise: ["Technical Leadership", "Engineering Management", "Cloud Architecture"],
    rating: 4.8,
    available: true,
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Venture Partner at Future Fund",
    image: "/placeholder.svg?height=150&width=150",
    expertise: ["Fundraising", "Pitch Preparation", "Financial Modeling"],
    rating: 4.9,
    available: true,
  },
  {
    id: 3,
    name: "Michael Johnson",
    role: "Serial Entrepreneur, 3 Exits",
    image: "/placeholder.svg?height=150&width=150",
    expertise: ["Growth Strategy", "Product Market Fit", "Team Building"],
    rating: 4.7,
    available: false,
  },
  {
    id: 4,
    name: "Emily Rodriguez",
    role: "Marketing Director at GrowthCo",
    image: "/placeholder.svg?height=150&width=150",
    expertise: ["Digital Marketing", "Brand Strategy", "Customer Acquisition"],
    rating: 4.6,
    available: true,
  },
  {
    id: 5,
    name: "David Kim",
    role: "Product Lead at TechInnovate",
    image: "/placeholder.svg?height=150&width=150",
    expertise: ["Product Development", "UX Design", "Agile Methodology"],
    rating: 4.9,
    available: true,
  },
  {
    id: 6,
    name: "Jennifer Lee",
    role: "CFO at ScaleUp Ventures",
    image: "/placeholder.svg?height=150&width=150",
    expertise: ["Financial Planning", "Investor Relations", "M&A"],
    rating: 4.8,
    available: false,
  },
]

const expertiseCategories = [
  "All Categories",
  "Technical Leadership",
  "Fundraising",
  "Growth Strategy",
  "Digital Marketing",
  "Product Development",
  "Financial Planning",
  "Engineering Management",
  "Pitch Preparation",
]

export default function MentorsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedExpertise, setSelectedExpertise] = useState("All Categories")
  const [availableOnly, setAvailableOnly] = useState(false)

  // Filter mentors based on search, expertise, and availability
  const filteredMentors = mentors.filter((mentor) => {
    const matchesSearch =
      mentor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mentor.role.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesExpertise = selectedExpertise === "All Categories" || mentor.expertise.includes(selectedExpertise)

    const matchesAvailability = availableOnly ? mentor.available : true

    return matchesSearch && matchesExpertise && matchesAvailability
  })

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
            Connect with Mentors
          </h1>
          <p className="text-lg max-w-3xl mx-auto text-gray-300">
            Get guidance from industry experts who have been where you want to go
          </p>
        </motion.div>

        {/* Filters and Search */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 mb-8">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="md:col-span-2">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Search className="size-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="bg-gray-800 border border-gray-700 text-white text-sm rounded-lg block w-full pl-10 p-2.5 focus:border-cyan-500 focus:outline-none"
                  placeholder="Search mentors by name or role..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            <div>
              <select
                className="bg-gray-800 border border-gray-700 text-white text-sm rounded-lg block w-full p-2.5 focus:border-cyan-500 focus:outline-none"
                value={selectedExpertise}
                onChange={(e) => setSelectedExpertise(e.target.value)}
              >
                {expertiseCategories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-800">
            <div className="text-sm text-gray-400">
              Showing <span className="font-medium text-white">{filteredMentors.length}</span> mentors
            </div>

            <div className="flex items-center">
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={availableOnly}
                  onChange={() => setAvailableOnly(!availableOnly)}
                />
                <div className="relative w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-cyan-500/50 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-500"></div>
                <span className="ms-3 text-sm font-medium text-gray-300">Available Now</span>
              </label>
            </div>
          </div>
        </div>

        {/* Mentors Grid */}
        {filteredMentors.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMentors.map((mentor, index) => (
              <motion.div
                key={mentor.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-gray-900/50 border border-gray-800 rounded-xl overflow-hidden hover:border-cyan-500/30 transition-colors duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative">
                      <Image
                        src={mentor.image || "/placeholder.svg"}
                        alt={mentor.name}
                        width={80}
                        height={80}
                        className="rounded-full"
                      />
                      {mentor.available && (
                        <div className="absolute bottom-0 right-0 size-4 rounded-full bg-green-500 border-2 border-gray-900"></div>
                      )}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{mentor.name}</h3>
                      <p className="text-cyan-400 text-sm">{mentor.role}</p>
                      <div className="flex items-center gap-1 mt-1">
                        <Star className="size-4 text-yellow-400 fill-yellow-400" />
                        <span className="text-sm">{mentor.rating}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm text-gray-400 mb-2">Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                      {mentor.expertise.map((skill, i) => (
                        <span key={i} className="text-xs px-2 py-1 rounded-full bg-gray-800 text-gray-300">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Link
                      href={`/entrepreneurs/mentors/${mentor.id}`}
                      className="flex-1 py-2 text-center rounded-lg bg-gray-800 hover:bg-gray-700 text-white font-medium transition-colors"
                    >
                      View Profile
                    </Link>
                    <Link
                      href={mentor.available ? `/entrepreneurs/mentors/${mentor.id}` : "#"}
                      className={`flex items-center justify-center px-3 rounded-lg ${
                        mentor.available
                          ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-lg hover:shadow-cyan-500/20"
                          : "bg-gray-800 text-gray-500 cursor-not-allowed"
                      } transition-all`}
                    >
                      <Calendar className="size-5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-gray-900/50 border border-gray-800 rounded-xl">
            <div className="size-16 mx-auto mb-4 rounded-full bg-gray-800 flex items-center justify-center">
              <Search className="size-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">No mentors found</h3>
            <p className="text-gray-400">Try adjusting your search or filter criteria</p>
          </div>
        )}

        <div className="mt-12 text-center">
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Become a Mentor</h2>
            <p className="text-gray-300 mb-6">
              Share your expertise with promising startups and help shape the next generation of innovators.
            </p>
            <Link
              href="/mentors/apply"
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium hover:shadow-lg hover:shadow-cyan-500/20 transition-all"
            >
              Apply as Mentor
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
