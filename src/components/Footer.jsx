"use client"
import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
} from "lucide-react";
import { Link } from "react-scroll";

const openingHours = [
  { day: "Monday", time: "10:00 AM - 1:00 PM,", from: " 5:30 PM - 8:00 PM" },
  { day: "Tuesday", time: "10:00 AM - 1:00 PM,", from: " 5:30 PM - 8:00 PM" },
  { day: "Wednesday", time: "10:00 AM - 1:00 PM,", from: " 5:30 PM - 8:00 PM" },
  { day: "Thursday", time: "10:00 AM - 1:00 PM,", from: " 5:30 PM - 8:00 PM" },
  { day: "Friday", time: "10:00 AM - 1:00 PM,", from: " 5:30 PM - 8:00 PM" },
  { day: "Saturday", time: "10:00 AM - 1:00 PM,", from: " 5:30 PM - 8:00 PM" },
  { day: "Sunday", time: "Closed" },
];

function OpeningHours() {
  return (
    <div>
      <h3 className="text-white text-lg font-semibold mb-4">Opening Hours</h3>
      <div className="space-y-2">
        {openingHours.map((item, index) => (
          <div key={index} className="flex justify-between text-md gap-0">
            <span>{item.day}:</span>
            <span className={item.day === "Sunday" ? "text-yellow-500" : ""}>
              {item.time} <br />{item.from}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-gray-100 flex flex-col">
      {/* Enhanced Footer */}
      <footer className="bg-gray-900 text-gray-300">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">
                Proactive Physiotherapy
              </h3>
              <div className="flex items-start space-x-3 mb-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <p>
                  LIG-68, Aashirwad, Sector-2, Shankar Nagar, Raipur,
                  Chhattisgarh
                </p>
              </div>
              <div className="flex items-center space-x-3 mb-3">
                <Phone className="w-5 h-5" />
                <p>8085354646, 9893092426</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5" />
                <p>info@proactivephysio.com</p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2">
                {["home", "about", "services", "gallery", "contact", "equipment"].map(
                  (section) => (
                    <li key={section}>
                      <Link
                        smooth={true}
                        offset={-150}
                        duration={500}
                        to={section}
                        className="hover:text-white transition-colors cursor-pointer"
                      >
                        {section.charAt(0).toUpperCase() + section.slice(1)}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Opening Hours Component */}
            <OpeningHours />

            {/* Social Media */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">
                Connect With Us
              </h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/profile.php?id=100063483956528"
                  className="hover:text-white transition-colors"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a
                  href="https://www.instagram.com/proactive_physiotherapy/"
                  className="hover:text-white transition-colors"
                >
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
              <div className="mt-6">
                <h4 className="text-white text-sm font-semibold mb-2">
                  Emergency Contact
                </h4>
                <p className="text-yellow-500 font-semibold">+91 8085354646</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="border-t border-gray-800">
          <div className="container mx-auto px-6 py-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm">
                © 2025 Proactive Physiotherapy. All rights reserved.
              </p>
              <div className="mt-4 md:mt-0">
                <a
                  href="/privacy"
                  className="text-sm hover:text-white transition-colors mr-4"
                >
                  Privacy Policy
                </a>
                <a
                  href="/terms"
                  className="text-sm hover:text-white transition-colors"
                >
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
