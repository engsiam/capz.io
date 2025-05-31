"use client";
import AnimatedCounter from "@/components/animated-counter";
import { FeatureCard } from "@/components/feature-card";
import FlagshipSlider from "@/components/FlagshipSlider";
import HeroSection from "@/components/hero-section";
import PartnersGrid from "@/components/partners";
import { StartupCard } from "@/components/startup-card";
import HomeStep from "@/components/HomeStep";
import VerticalVideoSlider from "@/components/VerticalSlider";
import VideoSection from "@/components/video-section";
import VideoCollaps from "@/components/VideoCollaps";
import { useTheme } from "@/context/theme-context";
import { featuredStartups, metrics } from "@/src/data/data";
import { useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import WhyChoseUs from "@/components/WhyChoseUs";

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
  const textRef = useRef(null);
  const [isHighlighted, setIsHighlighted] = useState(false);

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
        start: "top 40%",
        end: "bottom 40%",
        onUpdate: (self) => {
          const video = videoRef.current;
          if (!video) return;

          if (self.isActive) {
            if (self.direction === 1 && video.paused) {
              video.play();
            } else if (self.direction === -1 && !video.paused) {
              video.pause();
            }
          } else {
            video.pause();
          }
        },
        markers: false,
      });

      //text aniamtion
      if (!textRef.current) return;

      const scrollTrigger = ScrollTrigger.create({
        trigger: textRef.current,
        start: "top 80%",
        end: "bottom 20%",
        onUpdate: (self) => {
          setIsHighlighted(self.isActive);
        },
        markers: false,
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
              <div className="space-y-6 video-text text-xl">
                <p>
                  It's a complete ecosystem for innovation. Not just a funding
                  source. For visionaries, get capital and support. Access
                  resources to make your plan real.
                </p>
                <p>
                  Investors, find promising ventures. Discover where to invest
                  wisely. We create open connections for funding.
                </p>
                {/* <ScrollRevealText
                  text=""
                /> */}
                {/* <ScrollRevealText
                  text=""
                /> */}
                {/* <ScrollFloat
                  animationDuration={1}
                  ease="back.inOut(2)"
                  scrollStart="center bottom+=50%"
                  scrollEnd="bottom bottom-=40%"
                  stagger={0.03}
                >
                It's a complete ecosystem for innovation. Not just a funding
                  source. For visionaries, get capital and support. Access
                  resources to make your plan real.
                  </ScrollFloat>
                <ScrollFloat
                  animationDuration={1}
                  ease="back.inOut(2)"
                  scrollStart="center bottom+=50%"
                  scrollEnd="bottom bottom-=40%"
                  stagger={0.03}
                >
                  
                  Investors, find promising ventures. Discover where to invest
                  wisely. We create open connections for funding.
                </ScrollFloat> */}
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
              <div
                className="overflow-hidden relative"
                onMouseEnter={() => {
                  const video = videoRef.current;
                  if (!video) return;
                  video.currentTime = 0;
                  video.play();
                }}
                onMouseLeave={() => {
                  const video = videoRef.current;
                  if (!video) return;
                  // Don't pause immediately — let it finish naturally
                  video.onended = () => {
                    video.currentTime = 0;
                  };
                }}
              >
                <video
                  ref={videoRef}
                  className="h2-chip-video"
                  muted
                  playsInline
                  preload="auto"
                  aria-label="The brand-new H2 chip."
                  src="//res.cloudinary.com/davhgjfvj/video/upload/v1748441612/z_ktnfn9.mp4"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <HomeStep />

      {/* Featured Startups */}
      <section ref={sectionRefs.startups} className="py-24 px-4 relative" id="startups">
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
      <WhyChoseUs/>

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
      {/* video Slider */}
      <section className="py-24 px-4 relative bg-gradient-to-b from-transparent to-gray-900/40">
        <FlagshipSlider />
      </section>
      {/* vertical Slider */}
      <section className="py-24 px-4 relative bg-gradient-to-b from-transparent to-gray-900/40">
        <VerticalVideoSlider />
      </section>
      {/* video Slider collaps & expanded */}
      <section className="py-24 px-4 relative bg-gradient-to-b from-transparent to-gray-900/40">
        <VideoCollaps />
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
          <PartnersGrid />
          {/* <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
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
          </div> */}
        </div>
      </section>
    </main>
  );
}
