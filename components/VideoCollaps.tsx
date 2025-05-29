"use client";

import { useEffect, useRef, useState } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

const SLIDES = [
  {
    video:
      "https://nextventures.fra1.cdn.digitaloceanspaces.com/new/events/event-1.m4v",
  },
  {
    video:
      "https://nextventures.fra1.cdn.digitaloceanspaces.com/new/events/event-2.m4v",
  },
  {
    video:
      "https://nextventures.fra1.cdn.digitaloceanspaces.com/new/events/event-3.m4v",
  },
  {
    video:
      "https://nextventures.fra1.cdn.digitaloceanspaces.com/new/events/event-4.m4v",
  },
  {
    video:
      "https://nextventures.fra1.cdn.digitaloceanspaces.com/new/events/event-5.m4v",
  },
];

export default function VideoCollaps() {
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRefs = useRef([]);

  // play/pause on click‐change
  useEffect(() => {
    videoRefs.current.forEach((videoEl, idx) => {
      if (!videoEl) return;
      if (idx === activeIndex) {
        videoEl.currentTime = 0;
        videoEl.play().catch(() => {});
      } else {
        videoEl.pause();
      }
    });
  }, [activeIndex]);

  return (
    <div className="max-w-6xl mx-auto relative">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-5xl font-bold">
          Going global - <br /> engage & connect
        </h2>
        <div className="flex space-x-4">
          
        </div>
      </div>
      <Swiper
        slidesPerView="auto"
        spaceBetween={10}
        style={{ width: "100%", height: 400 }}
        className="rounded-xl overflow-hidden shadow-xl"
      >
        {SLIDES.map((slide, idx) => {
          const isActive = idx === activeIndex;
          const width = isActive ? "60%" : "10%";

          return (
            <SwiperSlide
              key={idx}
              onMouseOver={() => setActiveIndex(idx)}
              style={{
                width,
                height: "100%",
                cursor: "pointer",
                overflow: "hidden",
                transition: "width 300ms ease",
              }}
              
            >
              <video
                ref={(el) => (videoRefs.current[idx] = el)}
                src={slide.video}
                muted
                loop
                playsInline
                preload="metadata"
                controls={false}
                autoPlay={isActive}
                className="rounded-lg"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  filter: isActive ? "none" : "brightness(0.6)",
                  transition: "filter 200ms",
                }}
                
                /* 👇 Hover handlers for collapsed slides */
                onMouseEnter={() => {
                  if (idx !== activeIndex && videoRefs.current[idx]) {
                    videoRefs.current[idx].currentTime = 0;
                    videoRefs.current[idx].play().catch(() => {});
                  }
                }}
                onMouseLeave={() => {
                  if (idx !== activeIndex && videoRefs.current[idx]) {
                    videoRefs.current[idx].pause();
                    videoRefs.current[idx].currentTime = 0;
                  }
                }}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
