"use client"
import React from "react";
import Hero from "./Hero";
import FAQ from "./FAQ";
import AboutProactive from "./AboutProactive";
import OurTeam from "./OurTeam";
import WhyChooseUs from "./Testimonials";
import DoctorDetails from "./DoctorDetails";
import Services from "./Services";
import Gellary from "./Gellary";
import ContactUs from "./ContactUs";
import OurEquipments from "./OurEquipments";

export default function Homepage() {
  return (
    <div>
      <Hero />
      <AboutProactive />
      <DoctorDetails />
      <Services />
      <Gellary />
      <OurEquipments />
      <WhyChooseUs />
      <FAQ />
      <ContactUs />
    </div>
  );
}
