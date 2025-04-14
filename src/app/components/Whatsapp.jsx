import React from "react";
import Image from "next/image";
import whatsapp from "../assets/images/utils/whatsapp.png";

export default function Whatsapp() {
  return (
    <div className="fixed bottom-6 left-6 z-100">
      <a href="https://wa.me/919893092426">
        <Image loading="lazy" src={whatsapp} alt="" className="w-[60px]" />
      </a>
    </div>
  );
}
