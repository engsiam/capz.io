"use client";

import { useEffect, useRef, useState } from "react";

export default function VideoSection() {
  const [scale, setScale] = useState(1);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const maxScale = 1.3; // Maximum zoom level

  useEffect(() => {
    const handleScroll = () => {
      if (!videoContainerRef.current) return;

      const rect = videoContainerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate how much of the video section is visible in the viewport
      const visiblePercentage =
        Math.max(
          0,
          Math.min(windowHeight, rect.bottom) - Math.max(0, rect.top)
        ) / windowHeight;

      // Only apply zoom effect when the video is in view
      if (visiblePercentage > 0) {
        // Calculate how far the top of the video is from the bottom of the viewport
        // Normalized to a value between 0 and 1
        const scrollProgress = Math.max(
          0,
          Math.min(1, 1 - rect.top / windowHeight)
        );

        // Calculate scale based on scroll position
        const newScale = 1 + scrollProgress * (maxScale - 1);
        setScale(newScale);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="py-24 px-4 relative bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-orange-500">
            Featured Video
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-300">
            Explore the world's largest Cpaz office and discover amazing
            retro treasures
          </p>
        </motion.div> */}

        <div
          ref={videoContainerRef}
          className="relative aspect-video rounded-xl overflow-hidden border border-gray-800"
          style={{ transform: `scale(${scale})` }}
        >
          {/* Overlay for better text visibility */}
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-black to-transparent opacity-60"></div>

          {/* Video with zoom effect */}
          <div className="absolute inset-0 z-0 transition-transform duration-100">
            <iframe
              loading="lazy"
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/1gYZmRrszPc?si=zdBtP8zsUe9nFtz9&autoplay=1&mute=1&loop=1&playlist=1gYZmRrszPc&controls=0&showinfo=0&rel=0&enablejsapi=1"
              title="I went to capZ Largest Largest Office"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture autoplay; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 w-full h-full object-cover"
            ></iframe>
          </div>

          {/* Content overlay */}
          <div className="absolute bottom-0 left-0 right-0 z-20 p-6 text-white">
            <h3 className="text-2xl font-bold mb-2">
              I went to capZ Largest Office
            </h3>
            {/* <p className="text-gray-300 mb-4">
              capZ • 579K views • 1 year ago
            </p> */}
            {/* <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium hover:shadow-lg hover:shadow-cyan-500/20 transition-all"
            >
              Watch on YouTube
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path
                  fillRule="evenodd"
                  d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                  clipRule="evenodd"
                />
              </svg>
            </Link> */}
          </div>
        </div>
      </div>
    </section>
  );
}
