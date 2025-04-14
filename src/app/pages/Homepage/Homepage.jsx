import React from "react";
import Image from "next/image";
import Hero from "./Hero";
import FAQ from "../FAQ";
import AboutProactive from "../About/AboutProactive";
import OurTeam from "../About/OurTeam";
import WhyChooseUs from "../About/Testimonials";
import DoctorDetails from "../About/DoctorDetails";
import Services from "../Services";
import Gellary from "../Gellary";
import ContactUs from "../ContactUs";
import OurEquipments from "../OurEquipments";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function Homepage() {
  return (
    <div>
      <Navbar/>
      <Hero />
      <AboutProactive />
      <DoctorDetails />
      <Services />
      <Gellary />
      <OurEquipments />
      <WhyChooseUs />
      <FAQ />
      <ContactUs />
      <Footer/>
    </div>
  );
}
