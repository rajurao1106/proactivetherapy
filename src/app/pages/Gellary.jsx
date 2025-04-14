import React from "react";
import Image from "next/image";
import { Image as ImageIcon, ZoomIn, X } from "lucide-react";
import gallery1 from "../assets/images/About/gallery1.jpg";
import gallery2 from "../assets/images/About/gallery2.jpg";
import gallery3 from "../assets/images/About/gallery3.jpg";
import gallery4 from "../assets/images/About/gallery4.jpg";

// Gallery images data
const galleryImages = [
  {
    id: 1,
    url: gallery1,
    title: "Medical Consultation",
    category: "photos",
  },
  {
    id: 2,
    url: gallery2,
    title: "Research Publication",
    category: "photos",
  },
  {
    id: 3,
    url: gallery3,
    title: "Award Ceremony",
    category: "photos",
  },
  {
    id: 4,
    url: gallery4,
    title: "Team Recognition",
    category: "photos",
  },
];

export default function Gallery() {
  return (
    <div
      className="w-full flex flex-col justify-center items-center py-5"
      id="gallery"
    >
      <div className="w-full max-w-[1200px] flex flex-col justify-center items-center">
        <div className="text-center py-10">
          <h1 className="text-4xl font-bold mb-2">
            Gall<span className="text-red-500">ery</span>
          </h1>
          <p className="text-2xl text-gray-600">Explore Our Stunning Gallery</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="border hover:scale-110 transition hover:shadow-lg hover:shadow-gray-400 rounded-lg overflow-hidden shadow-md max-lg:m-5"
            >
              <Image
                loading="lazy"
                src={image.url}
                alt={image.title}
                className="w-full h-48 object-cover "
              />
              {/* <p className="text-center mt-2 text-lg font-semibold">{image.title}</p> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
