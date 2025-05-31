"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check, TrendingUp, Users, DollarSign, Search } from "lucide-react"

export default function InvestorsPage() {
  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Hero Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-orange-500">
              Invest in the Future
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Join our network of forward-thinking investors gaining access to pre-vetted, high-potential startups
              across multiple sectors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/investors/register"
                className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium hover:shadow-lg hover:shadow-cyan-500/20 transition-all"
              >
                Join as Investor
              </Link>
              <Link
                href="/projects"
                className="px-8 py-3 rounded-full bg-transparent border-2 border-gray-700 font-medium hover:border-cyan-500 hover:text-cyan-400 transition-all"
              >
                Browse Startups
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-cyan-500/10 rounded-full filter blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl"></div>
            <div className="relative z-10 rounded-xl overflow-hidden border border-gray-800">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Investors"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
        >
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center">
            <div className="size-16 mx-auto mb-4 rounded-full bg-cyan-500/20 flex items-center justify-center">
              <TrendingUp className="size-8 text-cyan-400" />
            </div>
            <h3 className="text-3xl font-bold mb-2">34%</h3>
            <p className="text-gray-400">Average Return on Investment</p>
          </div>  
    
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center">
            <div className="size-16 mx-auto mb-4 rounded-full bg-blue-500/20 flex items-center justify-center">
              <Users className="size-8 text-blue-400" />
            </div>
            <h3 className="text-3xl font-bold mb-2">250+</h3>
            <p className="text-gray-400">Startups Funded</p>
          </div>

          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center">
            <div className="size-16 mx-auto mb-4 rounded-full bg-orange-500/20 flex items-center justify-center">
              <DollarSign className="size-8 text-orange-400" />
            </div>
            <h3 className="text-3xl font-bold mb-2">$75M+</h3>
            <p className="text-gray-400">Total Investment Facilitated</p>
          </div>
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Invest Through CapZ</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Our platform offers unique advantages that help you make smarter investment decisions and maximize returns
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 text-cyan-400">Curated Deal Flow</h3>
              <p className="text-gray-300 mb-4">
                Access to pre-vetted startups that have passed our rigorous screening process, saving you time and
                reducing risk.
              </p>
              <ul className="space-y-2">
                {[
                  "Detailed due diligence reports",
                  "Comprehensive financial analysis",
                  "Background checks on founding teams",
                  "Market opportunity assessment",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="size-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 text-blue-400">Personalized Matching</h3>
              <p className="text-gray-300 mb-4">
                Our AI-powered algorithm matches you with startups aligned with your investment criteria and industry
                expertise.
              </p>
              <ul className="space-y-2">
                {[
                  "Customizable investment preferences",
                  "Industry and sector filtering",
                  "Stage-based matching",
                  "Geographic focus options",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="size-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 text-orange-400">Portfolio Management</h3>
              <p className="text-gray-300 mb-4">
                Comprehensive tools to track, analyze, and optimize your startup investment portfolio.
              </p>
              <ul className="space-y-2">
                {[
                  "Real-time performance tracking",
                  "Milestone and progress updates",
                  "Comparative analytics",
                  "Exit opportunity alerts",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="size-5 text-orange-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 text-purple-400">Exclusive Network</h3>
              <p className="text-gray-300 mb-4">
                Join a community of like-minded investors, industry experts, and successful entrepreneurs.
              </p>
              <ul className="space-y-2">
                {[
                  "Co-investment opportunities",
                  "Regular networking events",
                  "Expert roundtables and discussions",
                  "Mentorship opportunities",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="size-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* How It Works */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Our streamlined process makes startup investing simple, transparent, and efficient
            </p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-600 to-orange-500"></div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  title: "Create Profile",
                  description:
                    "Set up your investor profile with your investment criteria, focus areas, and preferences.",
                  icon: Users,
                  color: "cyan",
                },
                {
                  title: "Discover Startups",
                  description: "Browse pre-vetted startups matched to your investment preferences and interests.",
                  icon: Search,
                  color: "blue",
                },
                {
                  title: "Due Diligence",
                  description: "Access detailed analytics and our expert evaluation on each startup opportunity.",
                  icon: Check,
                  color: "purple",
                },
                {
                  title: "Invest & Monitor",
                  description: "Complete your investment and track progress through our portfolio management tools.",
                  icon: TrendingUp,
                  color: "orange",
                },
              ].map((step, index) => (
                <div key={index} className="relative">
                  <div className="flex justify-center mb-8">
                    <div
                      className={`size-16 rounded-full bg-${step.color}-500/20 flex items-center justify-center relative z-10 border-4 border-black`}
                    >
                      <step.icon className={`size-8 text-${step.color}-400`} />
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-400">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 rounded-xl p-8 md:p-12 text-center"
        >
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Investing?</h2>
            <p className="text-lg text-gray-300 mb-8">
              Join our network of investors today and gain access to exclusive startup opportunities.
            </p>
            <Link
              href="/investors/register"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium hover:shadow-lg hover:shadow-cyan-500/20 transition-all"
            >
              Create Investor Account
              <ArrowRight className="size-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
