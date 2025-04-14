import React from "react";
import Image from "next/image";
import page_not_found from "../assets/images/utils/page_not_found.png";

export default function PageNotFound() {
  return (
    <div className="flex items-center justify-center py-10 bg-gray-100">
      <Image
        src={page_not_found}
        alt="Page Not Found"
        className="max-w-full h-auto md:max-w-lg"
      />
    </div>
  );
}
