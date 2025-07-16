import React from "react";
import './CTASection.css'; // Assuming you have a CSS file for styles
export default function CTASection() {
  return (
    <section className="bg-[#2C2C2C] py-12 flex justify-center">
      <div className="max-w-lg md:max-w-2xl w-full rounded-2xl shadow-lg p-1 flex flex-col items-start sm:items-center justify-center px-6 ">
        <h2 className="text-white text-2xl md:text-3xl font-semibold mb-8 sm:items-center cta-text">
          Ready to be a part of community interest.
        </h2>
        {/* Steps */}
        <ol className="w-full mb-14 flex flex-col md:flex-row">
          <li className="flex flex-row md:flex-col items-center gap-2 mb-6">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-[#232323] font-bold text-lg border-2 border-white mb-2 mr-4">1</span>
            <div className="text-left sm:text-center">
              <div className="text-white font-bold text-base mb-1 cta-text-font">Identify your blindspots</div>
              <div className="text-gray-300 text-sm cta-subtext-font">Take Upraised’s Know Your Self (KYS) Test</div>
            </div>
          </li>
          <li className="flex flex-row md:flex-col items-center gap-2 mb-6">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-[#232323] font-bold text-lg border-2 border-[#444] mb-2 mr-4">2</span>
            <div className="text-left sm:text-center">
              <div className="text-gray-200 font-semibold text-base mb-1 cta-text-font">Upskill to bridge the gaps</div>
              <div className="text-gray-400 text-sm cta-subtext-font">Learn, Apply, Get Feedback, Master. Repeat</div>
            </div>
          </li>
          <li className="flex flex-row md:flex-col items-center gap-2">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-[#232323] font-bold text-lg border-2 border-[#444] mb-2 mr-4">3</span>
            <div className="text-left sm:text-center">
              <div className="text-gray-200 font-semibold text-base mb-1 cta-text-font">Get an Outcome</div>
              <div className="text-gray-400 text-sm cta-subtext-font">Land a PM Job with a Salary Hike</div>
            </div>
          </li>
        </ol>
        <button className="w-full md:w-50 button-grad hover:bg-[#ff7d00] text-white font-bold py-3 px-12 rounded-full text-lg shadow-lg transition mx-auto">
          Join Waitlist Now!
        </button>
      </div>
    </section>
  );
} 