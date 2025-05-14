"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Upload } from "lucide-react"

export default function SubmitStartupPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    companyName: "",
    website: "",
    email: "",
    industry: "",
    fundingStage: "",
    fundingAmount: "",
    description: "",
    pitchDeck: null as File | null,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, pitchDeck: e.target.files![0] }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
    setStep(3) // Success page
  }

  const industries = [
    "Select industry",
    "SaaS",
    "FinTech",
    "HealthTech",
    "AI/ML",
    "CleanTech",
    "EdTech",
    "E-commerce",
    "Other",
  ]

  const fundingStages = ["Select stage", "Pre-seed", "Seed", "Series A", "Series B", "Series C+", "Not raising"]

  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">Submit Your Startup</h1>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
            Share your vision with our network of investors and get the funding you need to grow your business.
          </p>

          {/* Progress Steps */}
          <div className="flex items-center justify-center mb-12">
            <div className="flex items-center w-full max-w-xl">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex-1 relative">
                  <div
                    className={`size-10 rounded-full flex items-center justify-center mx-auto border-2 ${
                      step >= i ? "bg-cyan-500 border-cyan-600 text-white" : "bg-gray-800 border-gray-700 text-gray-400"
                    }`}
                  >
                    {i}
                  </div>

                  <div className="text-xs text-center mt-2 text-gray-400">
                    {i === 1 ? "Company Info" : i === 2 ? "Funding Details" : "Submission"}
                  </div>

                  {i < 3 && (
                    <div
                      className={`absolute top-5 w-full h-0.5 ${step > i ? "bg-cyan-500" : "bg-gray-700"}`}
                      style={{ left: "50%" }}
                    ></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {step === 1 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 md:p-8"
            >
              <h2 className="text-xl font-bold mb-6">Company Information</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="companyName" className="block text-sm font-medium text-gray-300 mb-1">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2.5 focus:outline-none focus:border-cyan-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="website" className="block text-sm font-medium text-gray-300 mb-1">
                      Website
                    </label>
                    <input
                      type="url"
                      id="website"
                      name="website"
                      value={formData.website}
                      onChange={handleInputChange}
                      className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2.5 focus:outline-none focus:border-cyan-500"
                      placeholder="https://"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                      Contact Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2.5 focus:outline-none focus:border-cyan-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="industry" className="block text-sm font-medium text-gray-300 mb-1">
                      Industry
                    </label>
                    <select
                      id="industry"
                      name="industry"
                      value={formData.industry}
                      onChange={handleInputChange}
                      className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2.5 focus:outline-none focus:border-cyan-500"
                      required
                    >
                      {industries.map((industry) => (
                        <option key={industry} value={industry}>
                          {industry}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-1">
                    Company Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-500"
                    placeholder="Briefly describe your company, product, and target market..."
                    required
                  />
                </div>

                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium hover:shadow-lg hover:shadow-cyan-500/20 transition-all"
                  >
                    Next Step
                    <ArrowRight className="size-4" />
                  </button>
                </div>
              </form>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 md:p-8"
            >
              <h2 className="text-xl font-bold mb-6">Funding Details</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="fundingStage" className="block text-sm font-medium text-gray-300 mb-1">
                      Funding Stage
                    </label>
                    <select
                      id="fundingStage"
                      name="fundingStage"
                      value={formData.fundingStage}
                      onChange={handleInputChange}
                      className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2.5 focus:outline-none focus:border-cyan-500"
                      required
                    >
                      {fundingStages.map((stage) => (
                        <option key={stage} value={stage}>
                          {stage}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="fundingAmount" className="block text-sm font-medium text-gray-300 mb-1">
                      Funding Amount Seeking
                    </label>
                    <input
                      type="text"
                      id="fundingAmount"
                      name="fundingAmount"
                      value={formData.fundingAmount}
                      onChange={handleInputChange}
                      className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2.5 focus:outline-none focus:border-cyan-500"
                      placeholder="e.g. $500,000"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="pitchDeck" className="block text-sm font-medium text-gray-300 mb-1">
                    Upload Pitch Deck (PDF)
                  </label>
                  <div className="flex items-center justify-center w-full">
                    <label
                      htmlFor="pitchDeck"
                      className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-700 rounded-lg cursor-pointer bg-gray-900 hover:border-cyan-500 transition-colors"
                    >
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <Upload className="size-8 text-gray-400 mb-2" />
                        <p className="mb-2 text-sm text-gray-400">
                          <span className="font-semibold">Click to upload</span> or drag and drop
                        </p>
                        <p className="text-xs text-gray-500">PDF (MAX. 10MB)</p>
                      </div>
                      <input
                        id="pitchDeck"
                        name="pitchDeck"
                        type="file"
                        accept=".pdf"
                        className="hidden"
                        onChange={handleFileChange}
                      />
                    </label>
                  </div>
                  {formData.pitchDeck && (
                    <p className="text-sm text-cyan-400 mt-2">File selected: {formData.pitchDeck.name}</p>
                  )}
                </div>

                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="px-6 py-3 rounded-lg border border-gray-700 text-gray-300 font-medium hover:border-gray-600 transition-colors"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium hover:shadow-lg hover:shadow-cyan-500/20 transition-all"
                  >
                    Submit Application
                    <ArrowRight className="size-4" />
                  </button>
                </div>
              </form>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 md:p-12 text-center"
            >
              <div className="flex justify-center mb-6">
                <div className="size-20 rounded-full bg-cyan-500/20 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-10 text-cyan-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-3">Application Submitted!</h2>
              <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                Thank you for submitting your startup. Our team will review your application and get back to you within
                3-5 business days.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/projects"
                  className="px-6 py-3 rounded-lg border border-gray-700 text-gray-300 font-medium hover:border-gray-600 transition-colors"
                >
                  Browse Startups
                </Link>
                <Link
                  href="/"
                  className="px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium hover:shadow-lg hover:shadow-cyan-500/20 transition-all"
                >
                  Return Home
                </Link>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </main>
  )
}
