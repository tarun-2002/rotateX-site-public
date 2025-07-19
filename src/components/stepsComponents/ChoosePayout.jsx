import React from "react";
import './ChoosePayout.css'; // Import the CSS file for styling
export default function ChoosePayout() {
  return (
    <>
      <section className="bg-white py-[30px] px-6 mb-[50px]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:justify-between">
          {/* Left: Text */}
          <div className="flex-1 flex flex-col items-start justify-center mb-0 md:mb-0">
            <div className="flex-1 flex flex-col items-start md:justify-center mb-0 md:mb-0">
              <h2 className="text-[30px] md:text-3xl font-normal text-[#3051BB] mb-4 leading-tight steps-heading-font">
                CHOOSE THE<br className="hidden md:block" /> PAYOUT AMOUNT
              </h2>
              <p className="text-[#343F52] text-base md:text-lg max-w-md steps-subheading">
                Join any Circle with payout amounts starting from 3,000 INR to 120,000 INR per circle and you can join more than one Circle at the same time.
              </p>
            </div>
          </div>
          {/* Right: Phone mockup with cards and coin icon */}
          <div className="flex-1 flex flex-col items-center md:items-end justify-center md:justify-end w-full max-w-xl relative md:w-[28rem] md:h-[28rem]">
            {/* Phone mockup */}
            <div className="relative w-full md:w-[28rem] md:h-[28rem] transform translate-y-12">
              <img
                src="https://ik.imagekit.io/q46s1ahe0/RotateX-Assets/How%20To%20En.png?updatedAt=1752925389914"
                alt="Choose payout amount mockup"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
