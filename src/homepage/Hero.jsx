"use client"
import React from "react";
import { ArrowRight, Calendar, Award, Users } from "lucide-react";
import { Link } from "react-scroll";
import hero_image from "../images/Homepage/hero-image3.png";
import hero_image2 from "../images/Homepage/hero-image2.jpg";
import Image from 'next/image'

function Hero() {
  return (
    <div className=" bg-gray-100 flex flex-col" id="home">
      {/* Hero Section */}
      <div className="relative bg-white">
        {/* Background Image Section */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-red-900 to-red-900/75 z-10" />
          <Image
            priority
            src={hero_image2}
            alt="Physiotherapy Session"
            className="w-full h-full object-cover"
          />
        </div>  

        {/* Hero Content */}
        <div className="relative z-20 container mx-auto px-6 ">
          <div className="flex max-lg:flex-col justify-center gap-1 items-center max-lg:pt-[2.5rem]">
            {/* Left Column - Text Content */}
            <div className="text-white space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight max-lg:text-center">
                Expert Physiotherapy Care for Your Better Health
              </h1>
              <p className="text-xl text-gray-200 max-lg:text-center">
                Restore movement, reduce pain, and improve your quality of life
                with our specialized physiotherapy treatments.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  to="contact"
                  smooth={true}
                  offset={-150}
                  duration={500}
                  className="cursor-pointer bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold flex items-center justify-center hover:bg-orange-400 transition-colors group"
                >
                  Book Appointment
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="services"
                  smooth={true}
                  offset={-150}
                  duration={500}
                  className="cursor-pointer border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors flex items-center justify-center"
                >
                  Our Services
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-6 pt-5 border-t border-white/20">
                <div className="text-center">
                  <div className="flex justify-center">
                    <Calendar className="w-8 h-8 text-orange-500" />
                  </div>
                  <p className="mt-2 font-semibold">15+ Years Experience</p>
                </div>
                <div className="text-center">
                  <div className="flex justify-center">
                    <Award className="w-8 h-8 text-orange-500" />
                  </div>
                  <p className="mt-2 font-semibold">Certified Experts</p>
                </div>
                <div className="text-center">
                  <div className="flex justify-center">
                    <Users className="w-8 h-8 text-orange-500" />
                  </div>
                  <p className="mt-2 font-semibold">5000+ Patients</p>
                </div>
              </div>
            </div>

           
            <Image priority src={hero_image} alt="" className="w-[35rem]" />
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
