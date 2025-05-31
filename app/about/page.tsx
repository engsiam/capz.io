"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-orange-500">
            About CapZ
          </h1>
          {/* <p className="text-lg max-w-3xl mx-auto text-gray-300">
            Our mission is to transform how early-stage companies access funding
            by creating transparent connections between bold entrepreneurs and
            forward-thinking investors.
          </p> */}
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-white">Our Story</h2>
            <div className="space-y-4 text-white text-2xl">
              <p>
                It's a complete ecosystem for innovation. Not just a funding source. For visionaries, get capital and support. Access resources to make your plan real.
              </p>
              <p>
                Investors, find promising ventures. Discover where to invest wisely. We create open connections for funding.
              </p>
              {/* <p>
                Transparency is key to everything we do. We provide clear
                connections and support. We offer mentorship and resources to
                help projects succeed. Join our community dedicated to mutual
                success. We are building the future of funding, together.
              </p> */}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative"
          >
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-cyan-500/10 rounded-full filter blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl"></div>
            <div className="relative z-10 rounded-xl overflow-hidden border border-gray-800">
              <Image
                src="./about/about.jpg"
                alt="CapZ Team"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-10 text-center text-white">
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-cyan-500/30 transition-colors duration-300">
              <div className="size-14 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-7 text-cyan-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Innovation First</h3>
              <p className="text-gray-400">
                We believe in the power of innovation to solve the world's most
                pressing challenges. We prioritize startups that bring fresh
                perspectives and disruptive solutions.
              </p>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-cyan-500/30 transition-colors duration-300">
              <div className="size-14 rounded-full bg-gradient-to-r from-blue-500/20 to-orange-500/20 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-7 text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Meaningful Connections</h3>
              <p className="text-gray-400">
                We create purposeful connections between entrepreneurs and
                investors based on shared values, vision, and complementary
                expertise, not just financial metrics.
              </p>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-cyan-500/30 transition-colors duration-300">
              <div className="size-14 rounded-full bg-gradient-to-r from-orange-500/20 to-cyan-500/20 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-7 text-orange-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Transparency & Trust</h3>
              <p className="text-gray-400">
                We foster an environment of complete transparency in all
                interactions, ensuring that both entrepreneurs and investors can
                make informed decisions with confidence.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-10 text-center text-white">
            Leadership Team
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "CEO & Co-Founder",
                image: "./about/sarah.jpg",
                bio: "Former VP at Sequoia Capital with 15+ years in venture capital and startup advisory.",
              },
              {
                name: "David Chen",
                role: "CTO & Co-Founder",
                image: "./about/david.jpg",
                bio: "Serial entrepreneur with two successful exits in the fintech and enterprise software spaces.",
              },
              {
                name: "Michelle Rodriguez",
                role: "COO",
                image: "/placeholder.svg?height=300&width=300",
                bio: "Operations expert who scaled three startups from seed to Series C and beyond.",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-gray-900/50 border border-gray-800 rounded-xl overflow-hidden hover:border-cyan-500/30 transition-colors duration-300"
              >
                <div className="relative h-64">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-cyan-400 mb-3">{member.role}</p>
                  <p className="text-gray-400">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-6 text-white">
            Join Our Mission
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-300 mb-8">
            Whether you're an entrepreneur with a groundbreaking idea, an
            investor looking for the next big opportunity, or an industry expert
            interested in mentoring, we invite you to join the CapZ community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/entrepreneurs/submit"
              className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium hover:shadow-lg hover:shadow-cyan-500/20 transition-all"
            >
              Submit Your Startup
            </Link>
            <Link
              href="/investors/register"
              className="px-8 py-3 rounded-full bg-transparent border-2 border-gray-700 font-medium hover:border-cyan-500 hover:text-cyan-400 transition-all"
            >
              Become an Investor
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
