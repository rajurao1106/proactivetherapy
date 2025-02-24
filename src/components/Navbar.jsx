"use client"
import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Icons for a modern look
import logo from "../images/About/Pro active logo.png";
import { Link } from "react-scroll";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const Menus = [
    {
      menu: "Home",
      to: "home",
      smooth: true,
      offset: -150,
      duration: 500,
      function: () => setIsOpen(!isOpen)
    },
    {
      menu: "About",
      to: "about",
      smooth: true,
      offset: -150,
      duration: 500,
      function: () => setIsOpen(!isOpen)
    },
    {
      menu: "Services",
      to: "services",
      smooth: true,
      offset: -150,
      duration: 500,
      function: () => setIsOpen(!isOpen)
    },
    {
      menu: "Gallery",
      to: "gallery",
      smooth: true,
      offset: -150,
      duration: 500,
      function: () => setIsOpen(!isOpen)
    },

    {
      menu: "Our Equipment",
      to: "equipment",
      smooth: true,
      offset: -150,
      duration: 500,
      function: () => setIsOpen(!isOpen)
    },
  ];

  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="w-full max-w-[1200px] flex justify-between items-center p-3 mx-auto">
        {/* Logo */}
        <Link to="home" smooth={true} offset={-150} duration={500}>
          <img loading="lazy" src={logo} alt="" className="w-[10rem]" />
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-8 text-lg  font-semibold">
          {Menus.map((item, index) => (
            <Link
              to={item.to}
              key={index}
              className="cursor-pointer hover:text-[#D62828] transition-colors duration-300"
              smooth={item.smooth}
              offset={item.offset}
              duration={item.duration}
            >
              {item.menu}
            </Link>
          ))}
        </div>

        {/* Call to Action: "Recover Faster" */}
        <div
          className="hidden md:block bg-[#D62828] text-white font-semibold px-4 py-2 rounded-lg cursor-pointer 
                          hover:bg-red-900 transition-all duration-300 shadow-lg"
        >
          <Link
            to="contact"
            smooth={true}
            offset={-150}
            duration={500}
            className=""
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 text-gray-200 flex flex-col items-center space-y-4 py-4 transition-all duration-300">
          {Menus.map((item, index) => (
            <Link
              to={item.to}
              key={index}
              smooth={item.smooth}
              offset={item.offset}
              duration={item.duration}
              onClick={item.function}
              className="py-2 w-full text-center cursor-pointer hover:text-[#D62828] transition-colors duration-300"
            >
              {item.menu}
            </Link>
          ))}
          <div className="py-2 w-full text-center cursor-pointer bg-[#D62828] text-white font-semibold rounded-md px-4 hover:bg-red-700 transition-all duration-300">
            <Link to="contact" smooth={true} offset={-150} duration={500} onClick={() => setIsOpen(!isOpen)}>
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
