"use client"
import { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

const VideoSlider = () => {
  // Array of video sources
  const videos = [
    { src: 'https://nextventures.fra1.cdn.digitaloceanspaces.com/new/events/event-1.m4v ', id: 1 },
    { src: 'https://nextventures.fra1.cdn.digitaloceanspaces.com/new/events/event-2.m4v ', id: 2 },
    { src: 'https://nextventures.fra1.cdn.digitaloceanspaces.com/new/events/event-3.m4v ', id: 3 },
    { src: 'https://nextventures.fra1.cdn.digitaloceanspaces.com/new/events/event-4.m4v ', id: 4 },
    { src: 'https://nextventures.fra1.cdn.digitaloceanspaces.com/new/events/event-5.m4v ', id: 5 },
    { src: 'https://nextventures.fra1.cdn.digitaloceanspaces.com/new/events/event-6.m4v ', id: 6 },
  ];

  // State to track the active video index
  const [activeVideo, setActiveVideo] = useState(0);

  // Ref to store video elements
  const videoRefs = useRef([]);

  // Function to handle hover events
  const handleHover = (index) => {
    setActiveVideo(index);

    // Pause all videos
    videoRefs.current.forEach((video) => {
      if (video && !video.paused) {
        video.pause();
      }
    });

    // Play the active video
    if (videoRefs.current[index]) {
      videoRefs.current[index].play();
    }
  };

  return (
    <div className="w-full max-w-screen-lg mx-auto my-8">
      <h2 className="text-3xl font-bold mb-4">engage & connect</h2>
      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={10}
        slidesPerView={5}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {/* Map through the videos array */}
        {videos.map((video, index) => (
          <SwiperSlide key={video.id}>
            <div
              className={`relative group overflow-hidden rounded-xl shadow-lg ${
                activeVideo === index ? 'z-10 scale-110' : ''
              }`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(0)}
            >
              <div className="pb-[56.25%] relative"> {/* 16:9 Aspect Ratio */}
                {/* Show thumbnail image by default */}
                <img
                  src={video.src} // You can replace this with a thumbnail URL if needed
                  alt={`Thumbnail ${index + 1}`}
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />

                {/* Show iframe on hover (only if active) */}
                {activeVideo === index && (
                  <video
                    ref={(ref) => {
                      if (ref) {
                        videoRefs.current[index] = ref;
                      }
                    }}
                    className="absolute top-0 left-0 w-full h-full transition-transform duration-500 ease-in-out"
                    loop
                    playsInline
                  >
                    <source src={video.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <button className="bg-red-500 text-white px-4 py-2 rounded mt-4">Read more →</button>
    </div>
  );
};

export default VideoSlider;