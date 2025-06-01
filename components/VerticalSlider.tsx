"use client";

import { useEffect, useRef, useState } from "react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay, Controller } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const slides = [
  {
    name: "Malaysia",
    video:
      "https://videos.pexels.com/video-files/19408915/19408915-hd_1920_1080_30fps.mp4",
  },
  {
    name: "Bangladesh",
    video:
      "https://videos.pexels.com/video-files/1654216/1654216-hd_1920_1080_30fps.mp4",
  },
  {
    name: "Sri Lanka",
    video:
      "https://videos.pexels.com/video-files/3063475/3063475-uhd_2560_1440_30fps.mp4",
  },
  {
    name: "Cyprus",
    video:
      "https://videos.pexels.com/video-files/857254/857254-hd_1920_1080_24fps.mp4",
  },
];

export default function GlobalOperations() {
  const [mainSwiper, setMainSwiper] = useState(null);
  const [textSwiper, setTextSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRefs = useRef([]);

  const handleSlideChange = (swiper) => {
    const realIdx = swiper.realIndex;
    setActiveIndex(realIdx);

    videoRefs.current.forEach((video, idx) => {
      if (video) {
        if (idx === realIdx) {
          video.currentTime = 0;
          video.play();
        } else {
          video.pause();
        }
      }
    });

    if (textSwiper) {
      textSwiper.slideToLoop(realIdx);
    }
  };

  useEffect(() => {
    if (videoRefs.current[0]) {
      videoRefs.current[0].play();
    }
  }, []);

  return (
    <section className="max-w-6xl mx-auto bg-gray-700 dark:bg-gray-800 text-white px-4 py-12 rounded-xl flex flex-col md:flex-row items-center justify-center gap-10">
      {/* Left Content */}
      <div className="max-w-xl">
        <p className="uppercase text-sm tracking-widest text-blue-400 font-semibold">
          We Have
        </p>
        <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
         Our Global Network
        </h1>
        <p className=":text-white text-base md:text-lg">
          capZ is a team of 450 people from diverse backgrounds, operating
          from 5 different countries, including UAE, Malaysia, Bangladesh, Sri
          Lanka & Cyprus.
        </p>
      </div>

      {/* Right Video + Text */}
      <div className="flex flex-col items-center justify-end">
        {/* Main Video Swiper */}
        <Swiper
          direction="vertical"
          modules={[Autoplay, Controller]}
          loop={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          onSwiper={setMainSwiper}
          onSlideChange={handleSlideChange}
          className="w-[345px] h-[220px] rounded-xl overflow-hidden mb-6"
        >
          {slides.map((slide, i) => (
            <SwiperSlide key={i}>
              <div className="relative w-full h-full">
                <video
                  ref={(el) => (videoRefs.current[i] = el)}
                  src={slide.video}
                  muted
                  playsInline
                  className="w-full h-full object-cover rounded-xl"
                />
                <div className="absolute bottom-4 left-4 bg-black bg-opacity-60 px-4 py-2 rounded text-white text-2xl font-bold">
                  {slide.name}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Bottom Text Swiper */}
        <Swiper
          direction="vertical"
          slidesPerView={4}
          spaceBetween={5}
          loop={true}
          allowTouchMove={false}
          controller={{ control: mainSwiper }}
          onSwiper={setTextSwiper}
          modules={[Controller]}
          className="h-[120px] w-[200px] text-left !px-0"
          style={{ marginLeft: "30px" }}
        >
          {slides.map((slide, i) => (
            <SwiperSlide key={i}>
              <div
                className={`text-white text-lg font-semibold cursor-pointer transition-opacity duration-500 ease-in-out ${
                  i === activeIndex ? "opacity-0" : "opacity-100"
                }`}
              >
                {slide.name}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
