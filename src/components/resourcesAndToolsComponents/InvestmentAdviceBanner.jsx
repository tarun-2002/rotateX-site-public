import React from "react";

export default function InvestmentAdviceBanner() {
  return (
    <section className="bg-white py-12 px-6">
        <div className="max-w-7xl mx-auto rounded-xl p-4 py-0 md:p-8 md:px-24 flex flex-row items-center" style={{background: "linear-gradient(135deg, #ECA2A2 0%, #F6C37F 100%)"}}>
        {/* Left: Text and Button */}
        <div className="flex-1 flex flex-col items-start justify-center mb-4 md:mb-0">
            <div className="text-white text-2xl md:text-3xl font-semibold mb-6 leading-snug max-w-lg">
            Don’t know how to get started in Investment?
            </div>
            <button className="bg-white text-[#232323] font-semibold rounded-lg px-2 py-1 md:px-7 md:py-3 shadow flex items-center  gap-3 text-base md:text-lg hover:bg-gray-100 transition">
            Get Free Investment Advice
            <img src="/resourcesAssets/phoneIcon.svg" alt="Phone Icon" className=" transform md:scale-125 scale-150 -translate-x-1 md:translate-x-1"/>
            </button>
        </div>
        {/* Right: Illustration */}
        <div className="flex-shrink-1 flex items-end justify-end transform scale-150 md:-translate-x-8">
            <img src="/resourcesAssets/investment-advice.svg" alt="Investment advice illustration" className="h-40 md:h-48 object-contain" />
        </div>
        </div>
    </section>
  );
} 