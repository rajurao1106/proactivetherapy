import React from "react";
import Image from "next/image";
import DrSonaliShadangi from "../../assets/images/About/DrSonaliShadangi.jpg";

export default function DoctorDetails() {
  return (
    <div className="w-full flex flex-col justify-center items-center py-5 bg-gray-100">
      <div className="w-full max-w-[1200px] flex flex-col justify-center items-center px-4">
        <div className="text-center py-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            ABOUT DR. SONALI SHADANGI
          </h1>
          {/* <p className="text-lg md:text-2xl text-gray-600">
            Integrated Physio Care for Active Healing.
          </p> */}
        </div>

        <div className="flex flex-col lg:flex-row gap-10 justify-center items-center max-lg:flex-col-reverse max-lg:text-center">
          {/* Text Section */}
          <div className="text-lg md:text-xl max-lg:text-lg px-2">
            <p>
              With over <span className="font-bold">15 years</span> of
              experience in physiotherapy,{" "}
              <span className="font-bold">Dr. Sonali Shadangi</span> is
              dedicated to helping patients achieve optimal{" "}
              <span className="font-bold">health and wellness.</span> She
              specializes in providing personalized care to address a wide range
              of conditions, from{" "}
              <span className="font-bold">
                sports injuries to chronic pain management, mobility issues, and
                post-surgery rehabilitation.
              </span>
            </p>
            <br />
            <p>
              Her approach combines advanced physiotherapy techniques with a
              focus on patient education and empowerment, ensuring you not only
              feel better but also understand how to maintain your health
              long-term. Whether you are recovering from an injury, managing
              discomfort, or simply aiming to improve your overall function, She
              is here to guide you on your journey to recovery.
            </p>
          </div>

          {/* Image Section */}
          <Image
            loading="lazy"
            src={DrSonaliShadangi}
            alt="Dr. Sonali Shadangi"
            className="w-full max-w-[400px] h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
