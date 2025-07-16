import React, { useState } from "react";
import './FAQSection.css'; // Assuming you have a CSS file for styles
const tabs = ["Eligibility", "Payments"];
const faqs = {
  Eligibility: [
    {
      question: "Am I eligible for the program?",
      answer:
        "Product management is one of the hottest jobs in the market. These are cross-functional high ownership roles in tech firms that comprises a good mix of ideation, user research, implementation, stake-holder management, data analysis and experimentation. It is a business (non-coding) role.",
      video: {
        url: "https://www.youtube.com/watch?v=example",
        label: "Watch this video on eligibility",
        avatar: "faq-avatar.jpg",
      },
    },
    {
      question: "Can I register if my program is not listed above?",
      answer: "Yes, you can register even if your program is not listed. Please contact support for more info.",
    },
    {
      question: "Can I appear in the selection process of my college if I am selected in Upraised Embark Program?",
      answer: "Yes, you can appear in your college's selection process as well.",
    },
    {
      question: "Can I appear in the selection process if I have already received an offer from college?",
      answer: "Yes, you are still eligible to participate.",
    },
  ],
  Payments: [
    {
      question: "Am I eligible for the program?",
      answer:
        "Product management is one of the hottest jobs in the market. These are cross-functional high ownership roles in tech firms that comprises a good mix of ideation, user research, implementation, stake-holder management, data analysis and experimentation. It is a business (non-coding) role.",
      video: {
        url: "https://www.youtube.com/watch?v=example",
        label: "Watch this video on eligibility",
        avatar: "faq-avatar.jpg",
      },
    },
    {
      question: "Can I register if my program is not listed above?",
      answer: "Yes, you can register even if your program is not listed. Please contact support for more info.",
    },
    {
      question: "Can I appear in the selection process of my college if I am selected in Upraised Embark Program?",
      answer: "Yes, you can appear in your college's selection process as well.",
    },
  ],
};

export default function FAQSection() {
  const [activeTab, setActiveTab] = useState("Eligibility");
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-white py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        {/* Left: FAQ Tabs and Accordions */}
        <div className="flex-1 max-w-2xl mx-auto md:mx-0">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">FAQs</h2>
          {/* Tabs */}
          <div className="flex gap-2 mb-6">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`px-4 font-text-styling py-2 rounded-full border text-sm font-medium transition-all ${activeTab === tab
                  ? "bg-blue-100 text-blue-600 border-blue-200"
                  : "bg-white text-gray-700 border-gray-200 hover:bg-gray-100"
                  }`}
                onClick={() => {
                  setActiveTab(tab);
                  setOpenIndex(0);
                }}
              >
                {tab}
              </button>
            ))}
          </div>
          {/* Accordions */}
          <div className="divide-y divide-gray-200">
            {faqs[activeTab].map((faq, idx) => (
              <div key={faq.question}>
                <button
                  className="w-full text-left py-4 focus:outline-none flex justify-between items-center"
                  onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                >
                  <span className="font-semibold font-text-styling text-base md:text-lg text-gray-900">
                    {faq.question}
                  </span>
                  <span className="ml-2 text-gray-400">{openIndex === idx ? <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M13.5 11.25L9 6.75L4.5 11.25" stroke="#828282" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M4.5 6.75L9 11.25L13.5 6.75" stroke="#828282" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>}</span>
                </button>
                {openIndex === idx && (
                  <div className="pb-4 pl-1">
                    <p className="text-gray-600 mb-4 text-sm md:text-base font-text-styling">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        {/* Right: Illustration or placeholder */}
        <div className="hidden md:flex flex-1 items-center justify-center">
          {/* You can replace this with an illustration or image */}
          <div className="w-64 h-64 rounded-2xl flex items-center justify-center text-blue-400 font-bold text-2xl">
            <svg className="w-60 h-64" xmlns="http://www.w3.org/2000/svg" width="70" height="71" viewBox="0 0 70 71" fill="none">
              <path d="M68.3484 1.16199C67.9592 0.759029 67.4674 0.480035 66.9308 0.357809C66.3943 0.235584 65.8354 0.275208 65.3198 0.472024L1.8615 24.4708C1.31422 24.6867 0.84305 25.0706 0.51056 25.5716C0.178071 26.0726 0 26.6669 0 27.2756C0 27.8844 0.178071 28.4787 0.51056 28.9797C0.84305 29.4807 1.31422 29.8646 1.8615 30.0805L29.5524 41.5999L40.6287 70.3984C40.8368 70.9426 41.1935 71.4115 41.6548 71.7473C42.1162 72.0832 42.6619 72.2712 43.2247 72.2883C43.8077 72.2759 44.3733 72.08 44.847 71.7266C45.3207 71.3732 45.6804 70.8787 45.8785 70.3084L68.9542 4.31183C69.1507 3.78108 69.1981 3.20317 69.0909 2.64548C68.9836 2.08779 68.7261 1.5733 68.3484 1.16199V1.16199ZM43.2247 60.8889L35.1771 39.89L48.9937 25.5207L44.9266 21.291L30.9946 35.7802L10.9187 27.2906L61.4834 8.30162L43.2247 60.8889Z" fill="#5359EA" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
} 