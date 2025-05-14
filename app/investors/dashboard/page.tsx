"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Building2, TrendingUp, Filter, Search, DollarSign, PieChart, ArrowRight } from "lucide-react"

// Sample data for dashboard
const portfolioStats = [
  { label: "Total Investments", value: "$2.8M", icon: DollarSign, change: "+12%", positive: true },
  { label: "Companies", value: "17", icon: Building2, change: "+3", positive: true },
  { label: "Average Return", value: "34%", icon: TrendingUp, change: "+5%", positive: true },
  { label: "Sectors", value: "6", icon: PieChart, change: "0", positive: false },
]

const investmentOpportunities = [
  {
    id: 1,
    name: "NeuralTech",
    logo: "/placeholder.svg?height=80&width=80",
    description: "AI-driven data analytics for enterprise",
    fundingStage: "Series A",
    raised: "$5.2M",
    goal: "$8M",
    progress: 65,
    match: 96,
  },
  {
    id: 2,
    name: "CloudSecure",
    logo: "/placeholder.svg?height=80&width=80",
    description: "Zero-trust security for cloud infrastructure",
    fundingStage: "Seed",
    raised: "$1.8M",
    goal: "$3M",
    progress: 60,
    match: 91,
  },
  {
    id: 3,
    name: "GreenFinance",
    logo: "/placeholder.svg?height=80&width=80",
    description: "Sustainable investment platform",
    fundingStage: "Series B",
    raised: "$12M",
    goal: "$20M",
    progress: 60,
    match: 88,
  },
  {
    id: 4,
    name: "HealthBridge",
    logo: "/placeholder.svg?height=80&width=80",
    description: "Remote patient monitoring solutions",
    fundingStage: "Seed",
    raised: "$2.5M",
    goal: "$4M",
    progress: 62,
    match: 85,
  },
]

const portfolioCompanies = [
  {
    id: 1,
    name: "DataSync",
    logo: "/placeholder.svg?height=80&width=80",
    invested: "$500K",
    currentValue: "$1.2M",
    performance: "+140%",
    positive: true,
  },
  {
    id: 2,
    name: "MediTrack",
    logo: "/placeholder.svg?height=80&width=80",
    invested: "$350K",
    currentValue: "$420K",
    performance: "+20%",
    positive: true,
  },
  {
    id: 3,
    name: "EcoCharge",
    logo: "/placeholder.svg?height=80&width=80",
    invested: "$250K",
    currentValue: "$375K",
    performance: "+50%",
    positive: true,
  },
  {
    id: 4,
    name: "CryptoSecure",
    logo: "/placeholder.svg?height=80&width=80",
    invested: "$400K",
    currentValue: "$280K",
    performance: "-30%",
    positive: false,
  },
]

export default function InvestorDashboard() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold">Investor Dashboard</h1>
            <p className="text-gray-400">Welcome back, Michael. Here's your investment overview.</p>
          </div>

          <div className="flex gap-3">
            <button className="px-4 py-2 rounded-lg border border-gray-700 bg-gray-800/50 text-sm font-medium flex items-center gap-2 hover:border-cyan-500 transition-colors">
              <Filter className="size-4" />
              Filter
            </button>
            <Link
              href="/investors/settings"
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium hover:shadow-lg hover:shadow-cyan-500/20 transition-all"
            >
              Update Preferences
            </Link>
          </div>
        </div>

        {/* Portfolio Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {portfolioStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-gray-900/50 border border-gray-800 rounded-xl p-6"
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-gray-400">{stat.label}</p>
                  <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
                  <div
                    className={`flex items-center gap-1 mt-1 text-xs ${stat.positive ? "text-green-500" : "text-gray-400"}`}
                  >
                    {stat.change}
                    {stat.positive && <TrendingUp className="size-3" />}
                  </div>
                </div>
                <div className="flex-shrink-0 size-10 rounded-full bg-gray-800 flex items-center justify-center text-cyan-400">
                  <stat.icon className="size-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Top Opportunities */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
            <h2 className="text-2xl font-bold">Matched Opportunities</h2>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="size-4 text-gray-400" />
              </div>
              <input
                type="text"
                className="bg-gray-900/50 border border-gray-700 text-sm rounded-lg block w-full pl-10 p-2.5 focus:border-cyan-500 focus:outline-none"
                placeholder="Search opportunities..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {investmentOpportunities.map((opportunity, index) => (
              <motion.div
                key={opportunity.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-gray-900/50 border border-gray-800 rounded-xl overflow-hidden hover:border-cyan-500/30 transition-colors duration-300"
              >
                <div className="p-5">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="size-12 rounded-lg overflow-hidden bg-gray-800 p-2 flex-shrink-0">
                      <Image
                        src={opportunity.logo || "/placeholder.svg"}
                        alt={opportunity.name}
                        width={40}
                        height={40}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold">{opportunity.name}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-400">
                          {opportunity.fundingStage}
                        </span>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-green-500/20 text-green-400">
                          {opportunity.match}% Match
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-gray-400 mb-4 line-clamp-2">{opportunity.description}</p>

                  <div className="mb-4">
                    <div className="flex justify-between mb-1">
                      <span className="text-xs text-gray-400">Raised</span>
                      <span className="text-xs text-gray-400">
                        {opportunity.raised} of {opportunity.goal}
                      </span>
                    </div>
                    <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-cyan-500 to-blue-600 h-full rounded-full"
                        style={{ width: `${opportunity.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  <Link
                    href={`/projects/${opportunity.id}`}
                    className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-300 flex items-center gap-1"
                  >
                    View Details
                    <ArrowRight className="size-3" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-4 text-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-700 bg-gray-800/50 text-sm font-medium hover:border-cyan-500 transition-colors"
            >
              View All Opportunities
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>

        {/* Portfolio Companies */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Your Portfolio</h2>

          <div className="bg-gray-900/50 border border-gray-800 rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-800/50 text-xs uppercase">
                  <tr>
                    <th className="px-6 py-3 text-left">Company</th>
                    <th className="px-6 py-3 text-right">Invested</th>
                    <th className="px-6 py-3 text-right">Current Value</th>
                    <th className="px-6 py-3 text-right">Performance</th>
                    <th className="px-6 py-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                  {portfolioCompanies.map((company) => (
                    <tr key={company.id} className="hover:bg-gray-800/30 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="size-10 rounded-lg overflow-hidden bg-gray-800 p-1.5 flex-shrink-0">
                            <Image
                              src={company.logo || "/placeholder.svg"}
                              alt={company.name}
                              width={30}
                              height={30}
                              className="object-cover"
                            />
                          </div>
                          <span className="font-medium">{company.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right">{company.invested}</td>
                      <td className="px-6 py-4 text-right">{company.currentValue}</td>
                      <td className="px-6 py-4 text-right">
                        <span className={company.positive ? "text-green-500" : "text-red-500"}>
                          {company.performance}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <Link
                          href={`/portfolio/${company.id}`}
                          className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                        >
                          Details
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
