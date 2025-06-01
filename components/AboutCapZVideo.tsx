import { motion, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const AboutCapZVideo: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const videoRef = useRef<HTMLVideoElement>(null);

  // Play video when in view
  useEffect(() => {
    const video = videoRef.current;
    if (video && isInView) {
      video.currentTime = 0; // Reset to start
      video.play();
    }
  }, [isInView]);

  // Handlers for hover play
  const handleMouseEnter = () => {
    const video = videoRef.current;
    if (video) {
      video.currentTime = 0; // Reset to start
      video.play();
    }
  };

  return (
    <section
      ref={sectionRef}
      className="py-24 px-4 bg-gray-900/50 border-t border-gray-800 relative overflow-hidden"
    >
      {/* Optional background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/10 to-purple-900/10 pointer-events-none" />

      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
      >
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT COLUMN */}
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
              About CapZ
            </h2>
            <p className="text-2xl text-black dark:text-white max-w-prose">
              It's a complete ecosystem for innovation. Not just a funding source.
              For visionaries, get capital and support. Access resources to make
              your plan real.
              <br /><br />
              Investors, find promising ventures. Discover where to invest wisely.
              We create open connections for funding.
            </p>
          </motion.div>

          {/* RIGHT COLUMN (VIDEO) */}
          <motion.div
            variants={itemVariants}
            className="relative overflow-hidden rounded-xl shadow-lg"
          >
            <div className="aspect-w-16 aspect-h-9">
              <motion.video
                ref={videoRef}
                className="w-full h-full object-cover rounded-xl"
                muted
                playsInline
                onMouseEnter={handleMouseEnter}
                onTouchStart={handleMouseEnter}
                src="https://res.cloudinary.com/davhgjfvj/video/upload/v1748441612/z_ktnfn9.mp4"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutCapZVideo;
