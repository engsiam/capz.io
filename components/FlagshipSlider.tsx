"use client";
import { MoveLeft, MoveRight } from "lucide-react";
import { useRef } from "react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const slides = [
  {
    title: "FundedNext",
    subtitle: "PROP TRADING SOLUTION",
    description:
      "A leading prop trading firm committed to empowering promising traders worldwide to achieve maximum trading success.",
    videoUrl:
      "https://nextventures.fra1.cdn.digitaloceanspaces.com/new/products/fundednext-cube.m4v",
      bgColor:"bg-[#D9DDFE]"
  },
  {
    title: "NextSlide",
    subtitle: "INNOVATION PLATFORM",
    description:
      "Empowering your ideas and innovations through cutting-edge technology solutions.",
    videoUrl:
      "https://nextventures.fra1.cdn.digitaloceanspaces.com/new/products/cube.m4v",
      bgColor:"bg-[#C9FCDC] "
  },
];

export default function FlagshipSlider() {
  const swiperRef = useRef(null);

  return (
    <div className="max-w-6xl mx-auto relative">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-5xl font-bold">
          Explore our <br /> flagship products
        </h2>
        <div className="flex space-x-4">
          <button
            onClick={() => swiperRef.current.slidePrev()}
            className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center shadow-md hover:bg-gray-800 transition"
          >
            <MoveLeft />
          </button>
          <button
            onClick={() => swiperRef.current.slideNext()}
            className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center shadow-md hover:bg-gray-800 transition"
          >
            <MoveRight />
          </button>
        </div>
      </div>
      <Swiper
        modules={[Autoplay]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        autoplay={{ delay: 8000, disableOnInteraction: false }}
        loop={true}
        className="rounded-xl overflow-hidden shadow-xl"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className={`${slide.bgColor} grid md:grid-cols-2 gap-6 items-center p-6 md:p-12 justify-center`}>
              <div>
                <h4 className="text-lg uppercase text-indigo-500 tracking-wide font-semibold">
                  {slide.subtitle}
                </h4>
                <h3 className="text-3xl md:text-4xl font-bold my-4 text-black">
                  {slide.title}
                </h3>
                <p className="mb-6 text-black">{slide.description}</p>
                <button className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition">
                  Enter our PropVerse →
                </button>
              </div>
              <div className="mt-6 md:mt-0 md:ml-8">
                <video
                  autoPlay
                  loop
                  muted
                  width="100%"
                  height="315"
                  src={slide.videoUrl}
                  className="rounded-lg object-contain"
                  type="video/mp4"
                  allowFullScreen
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
