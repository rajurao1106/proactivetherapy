"use client"
import React from "react"; 
import physiotherapy from "../images/About/physiotherapy.jpg";

export default function AboutProactive() {
  return (
    <div
      className="w-full flex flex-col justify-center items-center py-5"
      id="about"
    >
      <div className="w-full max-w-[1200px] flex flex-col justify-center items-center ">
        <div className="text-center py-10">
          <h1 className="text-4xl font-bold mb-2">
            Pro<span className="text-red-500">Active</span> Physiotherapy
          </h1>
          <p className="text-xl text-gray-600">
            Integrated Physio Care for Active Healing.
          </p>
        </div>

        <div className="flex gap-20 max-lg:flex-col">
          <img
            loading="lazy"
            src={physiotherapy}
            alt=""
            className="w-[30rem] h-[20rem] max-lg:h-[auto] p-3"
          />
          <div className="max-lg:p-5 max-lg:text-center">
            <p>
              Proactive Physiotherapy is more than just pain relief—it’s about
              preventing injuries, improving mobility, and strengthening your
              body for long-term wellness. Instead of waiting for pain to take
              over, this approach focuses on early intervention, advanced
              treatments, and personalized care to keep you moving freely and
              comfortably. Whether you're dealing with back pain, knee
              stiffness, frozen shoulder, or cervical spondylitis, muscle
              tightness, proactive physiotherapy helps you regain strength,
              improve flexibility, and prevent future issues before they become
              serious.
              <br />
              <br /> At Proactive Physiotherapy, we combine modern techniques
              like cupping, dry needling, and manual therapy with a holistic
              healing approach, including nutritional guidance and customized
              exercise plans. This ensures that every treatment not only
              relieves discomfort but also supports your body’s natural healing
              process. Our goal is simple: to help you move better, feel
              stronger, and live pain-free. <br />
              <br /> Whether you're recovering from an injury, struggling with
              chronic pain, or simply looking to maintain a healthy, active
              lifestyle, proactive physiotherapy is your path to better
              movement, better health, and a better life. Take control of your
              well-being today and experience the benefits of expert care
              designed just for you!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
