import React, { useState } from "react";

const faqs = [
  {
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor",
  },
  {
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor",
  },
];

export default function RealEstateFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-[#f7f7f7] py-12 pt-0 px-6 md:hidden">
    <div className="bg-white rounded-2xl shadow border border-gray-100 p-6 max-w-md w-full mx-auto mt-12">
      <h2 className="text-xl md:text-2xl font-bold text-[#23253A] mb-2">All you need to know about<br/>Real Estate Investments Calculators</h2>
      <hr className="my-4 border-gray-200" />
      <div className="flex flex-col gap-2">
        {faqs.map((faq, idx) => (
          <div key={idx} className="border-b border-transparent last:border-b-0">
            <button
              className="w-full text-left py-4 flex justify-between items-center font-semibold text-[#23253A] focus:outline-none"
              onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
            >
              <span>{faq.question}</span>
              <svg
                className={`w-5 h-5 ml-2 transform transition-transform duration-200 ${openIndex === idx ? "rotate-180" : "rotate-0"}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openIndex === idx && (
              <div className="pb-4 text-gray-500 text-base">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    </section>
  );
} 