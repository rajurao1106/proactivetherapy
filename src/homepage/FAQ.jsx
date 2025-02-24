"use client"
import React, { useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { question: "What is physiotherapy?", answer: "Physiotherapy helps improve physical health through movement, exercise, and manual therapy." },
    { question: "Are there any side effects for Physiotherapy?", answer: "Physiotherapy is safe, but mild soreness may occur after treatment." },
    { question: "How to book an appointment for Physiotherapy at home in Raipur?", answer: "Call 8085354646 or 9893092426 to book an appointment." },
    { question: "What services does a Physiotherapist provide?", answer: "Services include manual therapy, sports injury rehab, neurological rehab, and pain management." },
    { question: "When is the best time to consider physiotherapy?", answer: "When experiencing pain, after injury, before/after surgery, or mobility issues." },
    { question: "Is physiotherapy a painful process?", answer: "It should not be painful; discomfort may occur but should be tolerable." },
    { question: "Why take Physiotherapy at home and what are its advantages?", answer: "Home physiotherapy provides convenience, no travel, and personalized care." }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className=" bg-gray-100 flex flex-col">
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Fre<span className='text-red-500'>quently</span> Asked Questions</h2>
              <p className="text-gray-600">Find answers to common questions about our physiotherapy services.</p>
            </div>

            {/* FAQ Items */}
            <div className="bg-white rounded-2xl shadow-lg w-full">
              {faqs.map((faq, index) => (
                <div key={index} className=" border-b border-gray-200 last:border-0 px-5">
                  <button
                    className="w-full py-6 text-left flex justify-between items-center hover:text-red-600 transition-colors"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span className="font-medium text-lg">{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 transition-transform ${openIndex === index ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 pb-6' : 'max-h-0'}`}>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>

           
          </div>
        </div>
      </section>
    </div>
  );
}

export default FAQ;
