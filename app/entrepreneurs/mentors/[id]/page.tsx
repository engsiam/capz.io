"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { User, Clock, Star, Award, ArrowLeft } from "lucide-react"

export default function MentorProfile({ params }: { params: { id: string } }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  
  // Dummy mentor data based on ID
  const mentor = {
    id: params.id,
    name: "Alex Morgan",
    role: "Former CTO at TechGiants",
    company: "TechGiants",
    image: "/placeholder.svg?height=150&width=150",
    coverImage: "/placeholder.svg?height=300&width=1200",
    bio: "Alex has 15+ years of experience in scaling technology startups. He served as CTO at TechGiants for 6 years, where he grew the engineering team from 10 to 200+ and led the company through its successful IPO. Prior to that, Alex founded two startups in the enterprise software space, with one successful exit.",
    expertise: ["Technical Leadership", "Engineering Team Management", "Product Strategy", "Cloud Architecture", "Scaling Operations"],
    reviews: [
      { author: "Sarah Chen", company: "DataSync", rating: 5, text: "Alex's guidance on our technical architecture was invaluable. He helped us avoid several critical mistakes and accelerated our development timeline." },
      { author: "Michael Lee", company: "CloudSecure", rating: 4, text: "Great mentor with practical advice on scaling our engineering team. His experience at TechGiants provided relevant insights for our growth challenges." }
    ],
    availableSlots: [
      { date: "2025-05-15", times: ["10:00 AM", "2:00 PM"] },
      { date: "2025-05-16", times: ["11:00 AM", "3:00 PM"] },
      { date: "2025-05-17", times: ["9:00 AM", "1:00 PM"] }
    ]
  };
  
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { weekday: 'long', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };
  
  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };
  
  const handleSlotSelect = (date: string, time: string) => {
    setSelectedSlot(`${date} at ${time}`);
  };
  
  const handleBookSession = () => {
    console.log("Booking session for:", selectedSlot);
    closeModal();
    alert(`Session booked for ${selectedSlot}!`);
  };
  
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);
  
  return (
    <main className="pt-20">
      {/* Cover Image */}
      <div className="relative h-[200px] md:h-[300px]">
        <Image 
          src={mentor.coverImage || "/placeholder.svg"}
          alt={`${mentor.name} Cover`}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
      </div>
      
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Mentor Header */}
        <div className="flex flex-col md:flex-row gap-6 -mt-24 relative z-10 mb-8">
          <div className="size-36 md:size-48 rounded-xl overflow-hidden border-4 border-black">
            <Image 
              src={mentor.image || "/placeholder.svg"}
              alt={mentor.name}
              width={192}
              height={192}
              className="object-cover"
            />
          </div>
          
          <div className="flex-1 pt-4 md:pt-16">
            <Link 
              href="/mentors" 
              className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-cyan-400 mb-2"
            >
              <ArrowLeft className="size-4" />
              Back to Mentors
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold">{mentor.name}</h1>
            <p className="text-xl text-cyan-400 mt-1">{mentor.role}</p>
            
            <div className="flex flex-wrap gap-3 mt-4">
              {mentor.expertise.map((skill, index) => (
                <span 
                  key={index} 
                  className="text-xs px-2 py-1 rounded-full bg-gray-800 text-gray-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div className="md:self-end md:pb-4">
            <button
              onClick={openModal}
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium hover:shadow-lg hover:shadow-cyan-500/20 transition-all"
            >
              Book a Session
            </button>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Left Column - Mentor Details */}
          <div className="md:col-span-2 space-y-8">
            <section className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
              <h2 className="text-2xl font-bold mb-4">About {mentor.name}</h2>
              <p className="text-gray-300">{mentor.bio}</p>
              
              <div className="mt-6 pt-6 border-t border-gray-800 grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 size-10 rounded-full bg-gray-800 flex items-center justify-center text-cyan-400">
                    <User className="size-5" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Company</div>
                    <div className="font-medium">{mentor.company}</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 size-10 rounded-full bg-gray-800 flex items-center justify-center text-cyan-400">
                    <Clock className="size-5" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Session Length</div>
                    <div className="font-medium">45 minutes</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 size-10 rounded-full bg-gray-800 flex items-center justify-center text-cyan-400">
                    <Star className="size-5" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Rating</div>
                    <div className="font-medium flex items-center">
                      4.8/5
                      <div className="flex ml-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star 
                            key={star} 
                            className="size-3 text-yellow-400" 
                            fill={star <= 4 ? "currentColor" : "none"} 
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            <section className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
              <h2 className="text-2xl font-bold mb-4">Areas of Expertise</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-800/50 rounded-xl p-5">
                  <h3 className="font-bold mb-3 flex items-center gap-2">
                    <Award className="size-5 text-cyan-400" />
                    Technical Leadership
                  </h3>
                  <p className="text-sm text-gray-400">Building and scaling engineering organizations through rapid growth phases. Creating technical roadmaps aligned with business strategy.</p>
                </div>
                
                <div className="bg-gray-800/50 rounded-xl p-5">
                  <h3 className="font-bold mb-3 flex items-center gap-2">
                    <Award className="size-5 text-cyan-400" />
                    Cloud Architecture
                  </h3>
                  <p className="text-sm text-gray-400">Designing scalable and cost-effective cloud infrastructure. Expertise in AWS, Azure, and containerization strategies.</p>
                </div>
                
                <div className="bg-gray-800/50 rounded-xl p-5">
                  <h3 className="font-bold mb-3 flex items-center gap-2">
                    <Award className="size-5 text-cyan-400" />
                    Product Strategy
                  </h3>
                  <p className="text-sm text-gray-400">Translating business requirements into technical implementations. Building product roadmaps and feature prioritization.</p>
                </div>
                
                <div className="bg-gray-800/50 rounded-xl p-5">
                  <h3 className="font-bold mb-3 flex items-center gap-2">
                    <Award className="size-5 text-cyan-400" />
                    Scaling Operations
                  </h3>
                  <p className="text-sm text-gray-400">Optimizing development processes and implementing DevOps practices to support rapid growth and deployment.</p>
                </div>
              </div>
            </section>
            
            <section className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
              <h2 className="text-2xl font-bold mb-4">Mentee Reviews</h2>
              <div className="space-y-6">
                {mentor.reviews.map((review, index) => (
                  <div key={index} className="border-b border-gray-800 last:border-0 pb-6 last:pb-0">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h3 className="font-bold">{review.author}</h3>
                        <p className="text-sm text-gray-400">{review.company}</p>
                      </div>
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star 
                            key={star} 
                            className="size-4 text-yellow-400" 
                            fill={star <= review.rating ? "currentColor" : "none"} 
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-300">{review.text}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
          
          {/* Right Column - Booking */}
          <div>
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 sticky top-24">
              <h2 className="text-xl font-bold mb-4">Available Sessions</h2>
              <div className="space-y-4">
                {mentor.availableSlots.map((slot, slotIndex) => (
                  <div key={slotIndex} className="border-b border-gray-800 last:border-0 pb-4 last:pb-0">
                    <h3 className="font-medium mb-2">{formatDate(slot.date)}</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {slot.times.map((time, timeIndex) => (
                        <button
                          key={timeIndex}
                          className="px-3 py-2 text-sm rounded-lg border border-gray-700 hover:border-cyan-500 hover:bg-gray-800 transition-colors"
                          onClick={() => handleSlotSelect(slot.date, time)}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <button
                onClick={openModal}
                className="w-full mt-6 px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium hover:shadow-lg hover:shadow-cyan-500/20 transition-all"
              >
                Book a Session
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Booking Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/70" onClick={closeModal}></div>
          <div className="relative bg-gray-900 rounded-xl p-6 max-w-md w-full max-h-[90vh] overflow-y-auto">
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold mb-6">Book a Session with {mentor.name}</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-medium mb-3">Select a Date & Time</h3>
                <div className="space-y-4">
                  {mentor.availableSlots.map((slot, slotIndex) => (
                    <div key={slotIndex} className="border-b border-gray-800 last:border-0 pb-4 last:pb-0">
                      <h4 className="font-medium mb-2">{formatDate(slot.date)}</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {slot.times.map((time, timeIndex) => (
                          <button
                            key={timeIndex}
                            className={`px-3 py-2 text-sm rounded-lg border transition-colors ${
                              selectedSlot === `${slot.date} at ${time}`
                                ? 'border-cyan-500 bg-cyan-500/20 text-white'
                                : 'border-gray-700 hover:border-cyan-500 hover:bg-gray-800'
                            }`}
                            onClick={() => handleSlotSelect(slot.date, time)}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-medium mb-3">Session Details</h3>
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-400">Mentor:</span>
                    <span>{mentor.name}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-400">Duration:</span>
                    <span>45 minutes</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-400">Selected Time:</span>
                    <span>{selectedSlot || 'None selected'}</span>
                  </div>
                </div>
              </div>
              
              <button
                onClick={handleBookSession}
                disabled={!selectedSlot}
                className={`w-full px-6 py-3 rounded-lg font-medium transition-all ${
                  selectedSlot
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-lg hover:shadow-cyan-500/20'
                    : 'bg-gray-700 text-gray-400 cursor-not-allowed'
                }`}
              >
                Confirm Booking
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}