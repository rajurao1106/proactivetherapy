import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function OurTeam() {
  const [activeIndex, setActiveIndex] = useState(0); // Track active slide

  return (
    <div className="w-full flex flex-col justify-center items-center py-5">
      <div className="w-full max-w-[1200px] flex flex-col justify-center items-center">
        <div className="text-center py-10">
          <h1 className="text-4xl font-bold mb-2">Our Team</h1>
          <p className="text-2xl text-gray-600">
            Leadership team with expertise in healthcare & technology
          </p>
        </div>

        {/* Swiper Slider */}
        <div className="w-full flex justify-center items-center py-10">
          <div className="w-full px-4">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={4}
              centeredSlides={true}
              loop={true}
              autoplay={{ delay: 3000 }}
              navigation
              pagination={{ clickable: true }}
              grabCursor={true}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)} // Update active index
              breakpoints={{
                1024: { slidesPerView: 4 },
                768: { slidesPerView: 3 },
                640: { slidesPerView: 1 },
              }}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map((num, index) => (
                <SwiperSlide key={num}>
                  <div
                    className={`h-64 p-5 flex justify-center items-center text-3xl font-bold rounded-lg shadow-md transition-all duration-300 ${
                      index === activeIndex
                        ? "bg-blue-500 text-white scale-101 shadow-xl  "
                        : "bg-gray-200 text-black scale-100"
                    }`}
                  >
                    {num}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
