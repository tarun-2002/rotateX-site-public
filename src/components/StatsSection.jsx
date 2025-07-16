import React from "react";
import './StatsSection.css'; // Assuming you have a CSS file for styles
export default function StatsSection() {
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:justify-between px-6">
        {/* Left: Text */}
        <div className="flex-1 flex flex-col items-start justify-center mb-8 md:mb-0">
          <span className="text-blue-600 font-bold uppercase text-sm mb-2 new-text">New!</span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight stats-main-text">Want to save big ?</h2>
          <p className="text-gray-700 text-base md:text-lg max-w-md stats-sub-text">
            The smartest saving option in the market is where you can save up to ₹100,000 and get a return of up to 30% on top of your savings.
          </p>
        </div>
        {/* Right: Phone mockup with cards and coin icon */}
        <div className="flex-1 flex flex-col items-center md:items-end justify-center md:justify-end w-full max-w-xl relative md:w-[28rem] md:h-[28rem]">
          {/* Phone mockup */}
          <div className="relative w-full md:w-[28rem] md:h-[28rem]">
            <img
              src="https://ik.imagekit.io/q46s1ahe0/RotateX-Assets/save-big-image.png.png?updatedAt=1752656111710"
              alt="Phone mockup"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
} 