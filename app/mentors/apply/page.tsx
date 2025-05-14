"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { CheckCircle, ArrowRight, Upload } from "lucide-react"

export default function MentorApplicationPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    linkedin: "",
    expertise: [] as string[],
    experience: "",
    motivation: "",
    hoursPerWeek: "",
    resumeFile: null as File | null,
  })

  const expertiseOptions = [
    "Software Development",
    "Product Management",
    "Business Strategy",
    "Marketing",
    "Sales",
    "Finance",
    "Leadership",
    "UX Design",
    "Data Science",
    "AI/ML",
    "Blockchain",
    "Venture Capital",
  ]

  const handleExpertiseToggle = (expertise: string) => {
    setFormData((prev) => {
      if (prev.expertise.includes(expertise)) {
        return {
          ...prev,
          expertise: prev.expertise.filter((item) => item !== expertise),
        }
      } else {
        return {
          ...prev,
          expertise: [...prev.expertise, expertise],
        }
      }
    })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, resumeFile: e.target.files![0] }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
    setStep(4) // Success page
  }

  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">Become a CapZ Mentor</h1>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
            Share your expertise with promising startups and help shape the next generation of innovators.
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
                    {step > i ? <CheckCircle className="size-5" /> : i}
                  </div>

                  <div className="text-xs text-center mt-2 text-gray-400">
                    {i === 1 ? "Basic Info" : i === 2 ? "Expertise" : "Commitment"}
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
              <h2 className="text-xl font-bold mb-6">Personal Information</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-300 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2.5 focus:outline-none focus:border-cyan-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                      Email Address
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
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2.5 focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="linkedin" className="block text-sm font-medium text-gray-300 mb-1">
                      LinkedIn Profile
                    </label>
                    <input
                      type="url"
                      id="linkedin"
                      name="linkedin"
                      value={formData.linkedin}
                      onChange={handleInputChange}
                      className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2.5 focus:outline-none focus:border-cyan-500"
                      placeholder="https://linkedin.com/in/yourprofile"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="resumeFile" className="block text-sm font-medium text-gray-300 mb-1">
                    Upload Resume/CV
                  </label>
                  <div className="flex items-center justify-center w-full">
                    <label
                      htmlFor="resumeFile"
                      className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-700 rounded-lg cursor-pointer bg-gray-900 hover:border-cyan-500 transition-colors"
                    >
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <Upload className="size-8 text-gray-400 mb-2" />
                        <p className="mb-2 text-sm text-gray-400">
                          <span className="font-semibold">Click to upload</span> or drag and drop
                        </p>
                        <p className="text-xs text-gray-500">PDF, DOCX (MAX. 5MB)</p>
                      </div>
                      <input
                        id="resumeFile"
                        name="resumeFile"
                        type="file"
                        accept=".pdf,.docx"
                        className="hidden"
                        onChange={handleFileChange}
                      />
                    </label>
                  </div>
                  {formData.resumeFile && (
                    <p className="text-sm text-cyan-400 mt-2">File selected: {formData.resumeFile.name}</p>
                  )}
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
              <h2 className="text-xl font-bold mb-6">Your Expertise</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">
                    Areas of Expertise (select all that apply)
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {expertiseOptions.map((expertise) => (
                      <div key={expertise} className="flex items-center">
                        <button
                          type="button"
                          onClick={() => handleExpertiseToggle(expertise)}
                          className={`flex-1 px-4 py-2 rounded-lg text-sm ${
                            formData.expertise.includes(expertise)
                              ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/50"
                              : "bg-gray-800 border border-gray-700 text-gray-300"
                          }`}
                        >
                          {expertise}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="experience" className="block text-sm font-medium text-gray-300 mb-1">
                    Professional Experience
                  </label>
                  <textarea
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-500"
                    placeholder="Briefly describe your professional experience, including roles, companies, and key achievements..."
                  />
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
                    type="button"
                    onClick={() => setStep(3)}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium hover:shadow-lg hover:shadow-cyan-500/20 transition-all"
                  >
                    Next Step
                    <ArrowRight className="size-4" />
                  </button>
                </div>
              </form>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 md:p-8"
            >
              <h2 className="text-xl font-bold mb-6">Commitment & Motivation</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="motivation" className="block text-sm font-medium text-gray-300 mb-1">
                    Why do you want to be a mentor?
                  </label>
                  <textarea
                    id="motivation"
                    name="motivation"
                    value={formData.motivation}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-500"
                    placeholder="Tell us why you're interested in mentoring startups and what you hope to contribute..."
                    required
                  />
                </div>

                <div>
                  <label htmlFor="hoursPerWeek" className="block text-sm font-medium text-gray-300 mb-1">
                    Hours available per week
                  </label>
                  <select
                    id="hoursPerWeek"
                    name="hoursPerWeek"
                    value={formData.hoursPerWeek}
                    onChange={handleInputChange}
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2.5 focus:outline-none focus:border-cyan-500"
                    required
                  >
                    <option value="" disabled>
                      Select availability
                    </option>
                    <option value="1-2">1-2 hours</option>
                    <option value="3-5">3-5 hours</option>
                    <option value="6-10">6-10 hours</option>
                    <option value="10+">More than 10 hours</option>
                  </select>
                </div>

                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
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

          {step === 4 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 md:p-12 text-center"
            >
              <div className="flex justify-center mb-6">
                <div className="size-20 rounded-full bg-cyan-500/20 flex items-center justify-center">
                  <CheckCircle className="size-10 text-cyan-400" />
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-3">Application Submitted!</h2>
              <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                Thank you for applying to be a CapZ mentor. We've received your application and our team will review it
                shortly. We'll be in touch via email within 3-5 business days.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/mentors"
                  className="px-6 py-3 rounded-lg border border-gray-700 text-gray-300 font-medium hover:border-gray-600 transition-colors"
                >
                  Back to Mentors
                </a>
                <a
                  href="/"
                  className="px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium hover:shadow-lg hover:shadow-cyan-500/20 transition-all"
                >
                  Return Home
                </a>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </main>
  )
}
