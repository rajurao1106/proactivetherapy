import React from "react";
import Image from "next/image";
import { Image as ImageIcon, ZoomIn, X } from "lucide-react";
import Equipment1 from "../assets/images/About/Equipment1.jpg";
import Equipment2 from "../assets/images/About/Equipment2.jpg";
import Equipment3 from "../assets/images/About/Equipment3.jpg";
import Equipment4 from "../assets/images/About/Equipment4.webp";
import Equipment5 from "../assets/images/About/Equipment5.jpg";
import Equipment6 from "../assets/images/About/Equipment6.jpg";
import Equipment7 from "../assets/images/About/Equipment7.jpg";
import Equipment8 from "../assets/images/About/Equipment8.jpg";
import Equipment9 from "../assets/images/About/Equipment9.jpg";
import Equipment10 from "../assets/images/About/Equipment10.webp";
import Equipment11 from "../assets/images/About/Equipment11.jpg";
import Equipment12 from "../assets/images/About/Equipment12.jpg";
import Equipment13 from "../assets/images/About/Equipment13.webp";

// Gallery images data
const galleryImages = [
  {
    image: Equipment1,
  },
  {
    image: Equipment2,
  },
  {
    image: Equipment3,
  },
  {
    image: Equipment4,
  },
  {
    image: Equipment5,
  },
  {
    image: Equipment6,
  },
  {
    image: Equipment7,
  },
  {
    image: Equipment8,
  },
  {
    image: Equipment9,
  },
  {
    image: Equipment10,
  },
  {
    image: Equipment11,
  },
  {
    image: Equipment12,
  },
  {
    image: Equipment13,
  },
];

export default function OurEquipments() {
  return (
    <div
      className="w-full flex flex-col justify-center items-center py-5"
      id="equipment"
    >
      <div className="w-full max-w-[1200px] flex flex-col justify-center items-center">
        <div className="text-center py-10">
          <h1 className="text-4xl font-bold mb-2">
            Our <span className="text-red-500">Equipments</span>
          </h1>
          <p className="text-md text-gray-600">
            Our state-of-the-art equipment ensures high-quality performance and
            efficiency, meeting industry standards for precision and
            reliability.
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-6">
          {galleryImages.map((image) => (
            <div className="p-2 border rounded-lg overflow-hidden shadow-md">
              <Image
                loading="lazy"
                src={image.image}
                className="w-[16rem] h-[13rem] rounded-md"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
