import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactUs() {
  return (
    <div className="w-full flex flex-col items-center py-10 bg-gray-100" id="contact">
      <div className="w-full max-w-[1200px] flex flex-col md:flex-row bg-white shadow-lg rounded-xl ">
        {/* Contact Form Section */}
        <div className="w-full md:w-1/2 p-8 flex flex-col">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Get <span className='text-red-500'>in</span> Touch</h2>
          <p className="text-gray-600 mb-6">Reach out to us for any inquiries or to book an appointment.</p>
          <form className="flex flex-col space-y-4 text-gray-400">
            <input type="text" placeholder="Full Name" className="p-3 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300" />
            <input type="email" placeholder="Email Address" className="p-3 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300" />
            <select name="" id="" className=" p-3 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300">
              <option value="Select Services">Select Services</option>
              <option value="Back Pain">Back Pain</option>
              <option value="Sciatica">Sciatica</option>
              <option value="Hand Pain">Hand Pain</option>
              <option value="Osteoarthritis">Osteoarthritis</option>
              <option value="Tennis Elbow">Tennis Elbow</option>
              <option value="Paralysis">Paralysis</option>
              <option value="Slip Disc">Slip Disc</option>
              <option value="Post Fracture Stiffness">Post Fracture Stiffness</option>
              <option value="Cervical Spondylitis">Cervical Spondylitis</option>
              <option value="Frozen Shoulder">Frozen Shoulder</option>
              <option value="Needling">Needling</option>
              <option value="Cupping">Cupping</option>
              <option value="Nutritional Healing">Nutritional Healing</option>
              <option value="Pelvic Floor Exercises">Pelvic Floor Exercises</option>
              <option value="Weight Reduction">Weight Reduction</option>
              
शनिवार	10am–1pm, 5:30–8pm
रविवार	बंद
सोमवार	10am–1pm, 5:30–8pm
मंगलवार	10am–1pm, 5:30–8pm
बुधवार	10am–1pm, 5:30–8pm
गुरुवार	10am–1pm, 5:30–8pm
शुक्रवार	10am–1pm, 5:30–8pm
            </select>
            <textarea placeholder="Your Message" rows="4" className="p-3 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"></textarea>
            <button className="bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition">Send Message</button>
          </form>
        </div>

        {/* Contact Info Section */}
        <div className="w-full md:w-1/2 p-8 bg-gray-800 text-white flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">Contact Info<span className='text-red-500'>rmation</span></h2>
          <p className="mb-6">We are here to help you with personalized physiotherapy sessions.</p>
          <div className="flex items-center mb-4">
            <Phone className="mr-3" />
            <span>+91-8085354646, +91-9893092426</span>
          </div>
          <div className="flex items-center mb-4">
            <Mail className="mr-3" />
            <span>info@proactivephysio.com</span>
          </div>
          <div className="flex items-center">
            <MapPin className="mr-3" />
            <span>LIG-68, Aashirwad, Sector-2, Shankar Nagar, Raipur Chhattisgarh, Raipur</span>
          </div>
        </div>
      </div>
    </div>
  );
}