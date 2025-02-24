"use client"
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import { FaRegUser } from "react-icons/fa";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Rajesh Yadav",
    feedback:
      "The physiotherapy sessions were life-changing! Highly skilled professionals and excellent care.",
    image: <FaRegUser />,
  },
  {
    name: "Anita Sahu",
    feedback:
      "Absolutely the best place for physiotherapy. I saw significant improvement within weeks.",
    image: <FaRegUser />,
  },
  {
    name: "Suman Patel",
    feedback:
      "Very professional and caring staff. They made my recovery process smooth and painless!",
    image: <FaRegUser />,
  },
];

export default function Testimonials() {
  return (
    <div className="w-full flex flex-col justify-center items-center py-10 bg-gray-100">
      <div className="w-full max-w-5xl flex flex-col justify-center items-center px-4">
        {/* Header */}
        <div className="text-center py-10">
          <h1 className="text-4xl font-bold mb-3 ">
            Why Choose Pro<span className="text-red-500">Active</span>{" "}
            Physiotherapy
          </h1>
          <p className="text-xl text-gray-700">
            Treatment that blends{" "}
            <span className="font-semibold">Competence</span> with{" "}
            <span className="font-semibold">Compassion</span>
          </p>
        </div>

        {/* Testimonials Slider */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          className="w-full"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index} className="py-10">
              <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-lg transition-all duration-300 transform">
                <p className="w-16 h-16 rounded-full border-4 border-gray-400 mb-4 flex justify-center items-center text-gray-500 text-3xl">
                  {item.image}
                </p>
                <p className="text-gray-700 text-lg italic text-center mb-4">
                  "{item.feedback}"
                </p>
                <h3 className="text-lg font-semibold">{item.name}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
