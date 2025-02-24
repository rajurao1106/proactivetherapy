"use client"
import React from "react";
import { CheckCircle2 } from "lucide-react";
import Back_Pain from "../images/Services/Back Pain.jpg";
import Cervical_Spondylitis from "../images/Services/Cervical Spondylitis 1.jpg";
import Cervical_Spondylitis2 from "../images/Services/Cervical Spondylitis 2.jpg";
import Cupping from "../images/Services/Cupping.webp";
import Frozen_Shoulder1 from "../images/Services/Tennis Elbow.jpg";
import handsome_man_with_shoulder_pain from "../images/Services/handsome-man-with-shoulder-pain.jpg";
import Needling from "../images/Services/Needling.jpg";
import Slip_Disc from "../images/Services/Slip Disc.jpg";
import Osteoarthritis1 from "../images/Services/Osteoarthritis 1.jpg";
import Osteoarthritis2 from "../images/Services/Osteoarthritis 2.jpg";
import Paralysis1 from "../images/Services/Paralysis 1.jpg";
import Sciatica from "../images/Services/Sciatica.jpg";
import Post_Fracture_Stiffness1 from "../images/Services/Post Fracture Stiffness 1.jpg";
import Post_Fracture_Stiffness2 from "../images/Services/Hand Pain.jpg";
import Nutritional_Healing from "../images/Services/Nutritional Healing.jpg";
import Frozen_Shoulder2 from "../images/Services/Frozen Shoulder 1.png";
import Pelvic_Floor_Exercises from "../images/Services/Pelvic Floor Exercises.jpg";
import Weight_Reduction from "../images/Services/Weight Reduction.jpg";

import { Link } from "react-scroll";

const services = [
  { title: "Back Pain", category: "Pain Management", image: Back_Pain },
  { title: "Sciatica", category: "Pain Management", image: Sciatica },
  {
    title: "Hand Pain",
    category: "Pain Management",
    image: Post_Fracture_Stiffness2,
  },
  {
    title: "Osteoarthritis",
    category: "Pain Management",
    image: Osteoarthritis1,
  },
  {
    title: "Tennis Elbow",
    category: "Pain Management",
    image: Frozen_Shoulder1,
  },
  { title: "Paralysis", category: "Specialized Care", image: Paralysis1 },
  { title: "Slip Disc", category: "Pain Management", image: Slip_Disc },
  {
    title: "Post Fracture Stiffness",
    category: "Rehabilitation",
    image: Post_Fracture_Stiffness1,
  },
  {
    title: "Cervical Spondylitis",
    category: "Pain Management",
    image: Cervical_Spondylitis,
  },
  {
    title: "Frozen Shoulder",
    category: "Pain Management",
    image: Frozen_Shoulder2,
  },
  { title: "Needling", category: "Alternative Therapy", image: Needling },
  { title: "Cupping", category: "Alternative Therapy", image: Cupping },
  {
    title: "Nutritional Healing",
    category: "Wellness",
    image: Nutritional_Healing,
  },
  {
    title: "Pelvic Floor Exercises",
    category: "Wellness",
    image: Pelvic_Floor_Exercises,
  },
  {
    title: "Weight Reduction",
    category: "Wellness",
    image: Weight_Reduction,
  },
];

function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-b" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Treatments <span className="text-red-500">Available</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive physiotherapy and rehabilitation services tailored to
            your needs
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className=" group relative bg-white rounded-lg transition-all duration-300 ease-in-out shadow hover:shadow-xl"
            >
              <div className="flex items-start space-x-3 flex-col w-[18rem]">
                {/* <CheckCircle2 className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" /> */}
                <img
                  loading="lazy"
                  src={service.image}
                  alt=""
                  className="w-[30rem] h-[13rem] rounded-md"
                />
                <div className="p-3">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-red-500">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-500">{service.category}</p>
                </div>
              </div>
              <div />
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-8">
            Need help choosing the right service? Contact our team for a
            consultation.
          </p>
          <Link
            to="contact"
            smooth={true}
            offset={-150}
            duration={500}
            className=" cursor-pointer bg-red-600 text-white px-8 py-3 rounded-full font-medium hover:bg-red-700 transition-colors duration-300 ease-in-out transform hover:scale-105"
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Services;
