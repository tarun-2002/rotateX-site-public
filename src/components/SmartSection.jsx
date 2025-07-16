import React from "react";
import './SmartSection.css'; // Assuming you have a CSS file for styles
export default function SmartSection() {
  return (
    <>
      <section className="bg-white ">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:justify-between py-4 px-4">
          {/* Left: Text */}
          <div className="flex-1 flex flex-col items-start justify-center mb-8 md:mb-0">
            <h2 className="text-4xl font-bold text-gray-900 mb-2 smart-text">Smart</h2>
            <p className="text-gray-700 text-base md:text-lg max-w-md smart-sub-text">
              Whether your goal is to credit or to save-up, you will find a rotateX for it with the highest returns on your savings.
            </p>
          </div>
          {/* Right: Phone mockup with cards and coin icon */}
          <div className="flex-1 flex flex-col items-center md:items-end justify-center md:justify-end w-full max-w-xl relative md:w-[28rem] md:h-[28rem]">
            {/* Phone mockup */}
            <div className="relative w-full md:w-[28rem] md:h-[28rem]">
              <img
                src="https://ik.imagekit.io/q46s1ahe0/RotateX-Assets/smart-image.png?updatedAt=1752651124226"
                alt="Phone mockup"
                className="w-full h-auto"
                style={{ transform: 'rotate(-20deg)' }}
              />
            </div>
          </div>
        </div>
      </section>

    </>
  );
} 