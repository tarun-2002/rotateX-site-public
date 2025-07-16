import React from "react";

export default function HighReturnSlotsCard() {
  return (
    <section className="bg-[#f7f7f7] py-12 px-6">
    <div className="relative rounded-2xl overflow-hidden shadow-lg w-full max-w-xs mx-auto md:hidden" style={{minHeight: '270px'}}>
      {/* Background image */}
      <img
        src="/resourcesAssets/high-return-bg.png"
        alt="High Return Slots"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#23253A]/40 z-10"></div>
      {/* Top bar */}
      <div className="absolute top-0 left-0 w-full bg-[#23253A] bg-opacity-95 py-2 px-4 flex items-center justify-between z-20">
        <span className="text-white font-semibold text-sm">Explore Opportunities</span>
        <svg className="w-4 h-4 text-white ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
      </div>
      {/* Main content */}
      <div className="relative z-20 flex flex-col justify-center items-start h-full px-6 pt-12 pb-6">
        <h2 className="text-white text-2xl font-bold mb-12 mt-2 leading-tight">Check Out High Return Slots</h2>
        <button className="w-full bg-white text-[#23253A] font-semibold rounded-xl py-3 text-base flex items-center justify-center gap-2 shadow hover:bg-gray-100 transition">
          Starting @ ₹50 Lacs
          <svg className="w-4 h-4 text-[#23253A] ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
        </button>
      </div>
    </div>
    </section>
  );
} 