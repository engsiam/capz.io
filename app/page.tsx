"use client";

import AnimatedCounter from "@/components/animated-counter";
import { FeatureCard } from "@/components/feature-card";
import HeroSection from "@/components/hero-section";
import { HowItWorksStep } from "@/components/how-it-works-step";
import { StartupCard } from "@/components/startup-card";
import VideoSection from "@/components/video-section";
import { useTheme } from "@/context/theme-context";
import { featuredStartups, metrics } from "@/src/data/data";
import { useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const { theme } = useTheme();
  const sectionRefs = {
    about: useRef(null),
    howItWorks: useRef(null),
    startups: useRef(null),
    whyCapZ: useRef(null),
    mentors: useRef(null),
    metrics: useRef(null),
    cta: useRef(null),
    video: useRef<HTMLVideoElement | null>(null),
  };

  const { scrollYProgress } = useScroll();
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const setupAnimations = () => {
      // GSAP Animations for sections
      const aboutSection = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRefs.about.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      aboutSection.from(".about-content", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
      });

      // How it works animation
      const howItWorksTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRefs.howItWorks.current,
          start: "top 70%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      howItWorksTimeline.from(".step-item", {
        scale: 0.8,
        opacity: 0,
        duration: 0.5,
        stagger: 0.2,
      });

      // Feature cards animation
      // gsap.from(".feature-card", {
      //   scrollTrigger: {
      //     trigger: sectionRefs.whyCapZ.current,
      //     start: "top 70%",
      //     end: "bottom 20%",
      //     toggleActions: "play none none reverse",
      //   },
      //   y: 50,
      //   opacity: 0,
      //   duration: 0.6,
      //   stagger: 0.2,
      // })

      // CTA animation
      const ctaTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRefs.cta.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      ctaTimeline
        .from(".cta-container", {
          scale: 0.9,
          opacity: 0,
          duration: 0.8,
        })
        .from(
          ".cta-btn",
          {
            y: 20,
            opacity: 0,
            duration: 0.5,
            stagger: 0.2,
          },
          "-=0.4"
        );
      // 🔥 VIDEO PLAY ON SCROLL
      if (!videoRef.current) return;

      ScrollTrigger.create({
        trigger: videoRef.current,
        start: "top 80%",
        end: "bottom 20%",
        onUpdate: (self) => {
          const direction = self.direction; // 1 = down, -1 = up
          if (!videoRef.current) return;

          if (self.isActive) {
            if (direction === 1 && videoRef.current.paused) {
              videoRef.current.play();
            } else if (direction === -1 && !videoRef.current.paused) {
              videoRef.current.pause();
            }
          } else {
            videoRef.current.pause();
          }
        },
        markers: false, // for debugging set to true
      });
      // Ensure ScrollTrigger calculates correct layout
      ScrollTrigger.refresh();
    };

    return () => {
      // Wait for next paint/frame before running GSAP
      requestAnimationFrame(setupAnimations);
      // Clean up ScrollTriggers
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <main className="overflow-x-hidden">
      {/* Hero Section with Video Background */}
      <HeroSection />

      {/* YouTube Video Section with Zoom Effect */}
      <VideoSection />

      {/* About Section */}
      <section ref={sectionRefs.about} className="py-24 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 about-content bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
                About CapZ
              </h2>
              <div className="space-y-6">
                <p className="text-lg about-content">
                  It's a complete ecosystem for innovation. Not just a funding
                  source. For visionaries, get capital and support. Access
                  resources to make your plan real.
                </p>
                <p className="text-lg about-content">
                  Investors, find promising ventures. Discover where to invest
                  wisely. We create open connections for funding.
                </p>
              </div>
            </div>
            <div className="about-content">
              {/* <div className="rounded-xl overflow-hidden aspect-video bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 p-1">
                <div className="w-full h-full rounded-lg overflow-hidden bg-gray-900 relative flex items-center justify-center">
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-[20%] left-[20%] w-32 h-32 bg-cyan-500 rounded-full filter blur-3xl"></div>
                    <div className="absolute bottom-[20%] right-[20%] w-32 h-32 bg-blue-500 rounded-full filter blur-3xl"></div>
                  </div>
                  <div className="relative z-10 p-8 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-white"
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
                    <h3 className="text-xl font-bold mb-2">
                      Accelerating Innovation
                    </h3>
                    <p className="text-white">
                      We've helped 250+ startups connect with investors and
                      raise over $75M in funding
                    </p>
                  </div>
                </div>
              </div> */}
              <div className="overflow-hidden relative">
                <video
                  ref={videoRef}
                  className="h2-chip-video"
                  muted
                  autoPlay
                  playsInline
                  preload="none"
                  aria-label="The brand-new H2 chip."
                  src="//res.cloudinary.com/davhgjfvj/video/upload/v1747676223/vlrj8l1ktwchcfef86ao.mp4"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section
        ref={sectionRefs.howItWorks}
        className="py-24 px-4 relative bg-gradient-to-b from-transparent to-gray-900/40"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
              How we work
            </h2>
            <p className="text-lg max-w-3xl mx-auto text-gray-300">
              Our simple process gets results. It links great ideas to smart
              capital.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mt-12">
            <div>
              <h3 className="text-2xl font-bold mb-8 text-center text-cyan-400">
                For Entrepreneurs
              </h3>
              <div className="space-y-12">
                <HowItWorksStep
                  number={1}
                  title="Submit Your Startup"
                  description="Create your profile and submit your startup details, pitch deck, and funding requirements."
                  className="step-item"
                />

                <HowItWorksStep
                  number={2}
                  title="Get Matched With Mentors"
                  description="Our algorithm matches you with industry-specific mentors who help refine your pitch."
                  className="step-item"
                />

                <HowItWorksStep
                  number={3}
                  title="Connect With Investors"
                  description="Present to our curated network of investors looking for opportunities in your sector."
                  className="step-item"
                />

                <HowItWorksStep
                  number={4}
                  title="Secure Funding"
                  description="Close your funding round with legal and technical support from our team."
                  className="step-item"
                />
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-8 text-center text-blue-400">
                For Investors
              </h3>
              <div className="space-y-12">
                <HowItWorksStep
                  number={1}
                  title="Join Our Network"
                  description="Create your investor profile with your investment criteria and focus areas."
                  className="step-item"
                />

                <HowItWorksStep
                  number={2}
                  title="Discover Opportunities"
                  description="Browse pre-vetted startups matched to your investment preferences."
                  className="step-item"
                />

                <HowItWorksStep
                  number={3}
                  title="Due Diligence Support"
                  description="Access detailed analytics and our expert evaluation on each startup."
                  className="step-item"
                />

                <HowItWorksStep
                  number={4}
                  title="Portfolio Management"
                  description="Track your investments and get regular updates on portfolio performance."
                  className="step-item"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Startups */}
      <section ref={sectionRefs.startups} className="py-24 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
              Featured Startups
            </h2>
            <p className="text-lg max-w-3xl mx-auto text-gray-300">
              Discover some of the innovative companies currently fundraising on
              our platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredStartups.map((startup, index) => (
              <StartupCard key={startup.id} startup={startup} index={index} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/projects"
              className="px-8 py-3 rounded-full bg-transparent border-2 border-gray-700 font-medium hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300"
            >
              View All Startups
            </Link>
          </div>
        </div>
      </section>

      {/* Why CapZ */}
      <section
        ref={sectionRefs.whyCapZ}
        className="relative w-full h-screen overflow-hidden bg-gradient-to-b from-transparent to-gray-900/40"
      >
        <div className="absolute inset-0 w-full h-full -z-[-1]">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute -left-22rem top-0 h-ful w-full object-cover"
            style={{ width: "100%" }} // You can set to "50%" if you want it on just half screen
          >
            <source
              src="https://nextventures.fra1.cdn.digitaloceanspaces.com/new/lan-globe.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                Why Choose CapZ
              </h2>
              <p className="text-lg max-w-3xl mx-auto text-gray-300">
                We offer a comprehensive platform designed to maximize success
                for both startups and investors
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                }
                title="Expert Mentorship"
                description="Access to industry leaders who provide guidance, feedback, and connections to help your startup succeed."
              />

              <FeatureCard
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
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
                }
                title="Secure Environment"
                description="State-of-the-art data protection and confidentiality for all startup information and investor communications."
              />

              <FeatureCard
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                }
                title="Global Network"
                description="Connect with investors and partners from around the world, expanding your reach and opportunities."
              />

              <FeatureCard
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                    />
                  </svg>
                }
                title="Due Diligence Tools"
                description="Comprehensive analytics and evaluation tools to make informed investment decisions quickly."
              />

              <FeatureCard
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
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
                }
                title="Accelerated Growth"
                description="Resources and partnerships to help startups scale rapidly after securing funding."
              />

              <FeatureCard
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
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
                }
                title="Community Support"
                description="Join a thriving community of entrepreneurs and investors sharing knowledge and opportunities."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mentorship Spotlight
      <section ref={sectionRefs.mentors} className="py-24 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
              Mentorship Spotlight
            </h2>
            <p className="text-lg max-w-3xl mx-auto text-gray-300">
              Learn from industry leaders who provide guidance and expertise to
              our startup community
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {mentors.map((mentor, index) => (
              <MentorCard key={mentor.id} mentor={mentor} index={index} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/mentors"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-transparent border-2 border-gray-700 font-medium hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300"
            >
              Book a Mentor
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section> */}

      {/* Metrics & Progress */}
      <section
        ref={sectionRefs.metrics}
        className="py-24 px-4 relative bg-gradient-to-b from-transparent to-gray-900/40"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
              Our Impact
            </h2>
            <p className="text-lg max-w-3xl mx-auto text-gray-300">
              The numbers that drive our mission to transform startup funding
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2 text-white flex items-center justify-center">
                  {metric.prefix && <span>{metric.prefix}</span>}
                  <AnimatedCounter to={metric.value} />
                  {metric.suffix && <span>{metric.suffix}</span>}
                </div>
                <div className="text-gray-400">{metric.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-6">
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 text-cyan-400">
                Funding Success Rate
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-400">Pre-Seed</span>
                    <span className="text-sm text-gray-400">85%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 h-full rounded-full"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-400">Seed</span>
                    <span className="text-sm text-gray-400">76%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 h-full rounded-full"
                      style={{ width: "76%" }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-400">Series A</span>
                    <span className="text-sm text-gray-400">68%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 h-full rounded-full"
                      style={{ width: "68%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 text-blue-400">
                Sector Distribution
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-400">
                      SaaS & Enterprise
                    </span>
                    <span className="text-sm text-gray-400">42%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-full rounded-full"
                      style={{ width: "42%" }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-400">FinTech</span>
                    <span className="text-sm text-gray-400">28%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-full rounded-full"
                      style={{ width: "28%" }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-400">
                      Health & Biotech
                    </span>
                    <span className="text-sm text-gray-400">18%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-full rounded-full"
                      style={{ width: "18%" }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-400">Other Sectors</span>
                    <span className="text-sm text-gray-400">12%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-full rounded-full"
                      style={{ width: "12%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dual Call to Action */}
      <section ref={sectionRefs.cta} className="py-24 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="cta-container grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 rounded-xl p-8 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/20 rounded-full filter blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>

              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white relative z-10">
                For Entrepreneurs
              </h3>
              <p className="text-gray-300 mb-8 relative z-10">
                Ready to take your startup to the next level? Join our platform
                to connect with investors and mentors who can help you
                accelerate growth.
              </p>
              <Link
                href="/entrepreneurs/register"
                className="cta-btn inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 relative z-10"
              >
                Join as Entrepreneur
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1  1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1
a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 rounded-xl p-8 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full filter blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>

              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white relative z-10">
                For Investors
              </h3>
              <p className="text-gray-300 mb-8 relative z-10">
                Discover pre-vetted investment opportunities aligned with your
                criteria. Gain access to innovative startups with high growth
                potential.
              </p>
              <Link
                href="/investors/register"
                className="cta-btn inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 relative z-10"
              >
                Join as Investor
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
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
      </section>

      {/* Trusted Partners */}
      <section className="py-16 px-4 relative border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-4 text-gray-300">
              Trusted By Industry Leaders
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              >
                <Image
                  src={`/placeholder.svg?height=40&width=120&text=Partner ${i}`}
                  alt={`Partner ${i}`}
                  width={120}
                  height={40}
                  className="max-h-10 w-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
