import React from "react";
import './ControlSection.css'; // Assuming you have a CSS file for styles
export default function ControlSection() {
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:justify-between px-6">
        {/* Left: Diamond image */}
        <div className="mb-8 md:mb-0 md:w-[28rem] md:h-[28rem] flex-shrink-0 flex items-center">
          <div className="relative w-full md:w-[28rem] md:h-[28rem]">
            <img
              src="https://ik.imagekit.io/q46s1ahe0/RotateX-Assets/control-image.png?updatedAt=1752651425682"
              alt="Happy person"
              className="w-full h-auto"
            />
          </div>
        </div>
        {/* Right: Heading and description */}
        <div className="flex-1 max-w-full w-full flex flex-col items-center md:items-end justify-center md:justify-end md:text-right">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 control-text">You are in control</h2>
          <p className="text-base md:text-lg max-w-md control-sub-text text-center">
            Customize your plan: from setting your goal to the amount you need and even your pay-in and payout methods.
          </p>
        </div>
      </div>
    </section>
  );
} 