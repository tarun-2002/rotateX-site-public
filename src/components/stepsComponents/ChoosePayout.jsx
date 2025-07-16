import React from "react";

export default function ChoosePayout() {
  return (
    <>
    <section className="bg-[#f7f7f7] py-[70px] px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:justify-between">
        {/* Left: Text */}
        <div className="flex-1 flex flex-col items-start justify-center mb-8 md:mb-0">
            <div className="flex-1 flex flex-col items-start md:justify-center mb-8 md:mb-0">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-700 mb-4 leading-tight">
                CHOOSE THE<br className="hidden md:block" /> PAYOUT AMOUNT
            </h2>
            <p className="text-gray-700 text-base md:text-lg max-w-md">
                Join any Circle with payout amounts starting from 3,000 INR to 120,000 INR per circle and you can join more than one Circle at the same time.
            </p>
            </div>
        </div>
        {/* Right: Phone mockup with cards and coin icon */}
        <div className="flex-1 flex flex-col items-center md:items-end justify-center md:justify-end w-full max-w-xl relative md:w-[28rem] md:h-[28rem]">
          {/* Phone mockup */}
          <div className="relative w-64 md:w-[28rem] md:h-[28rem] transform translate-y-12">
            <img
              src="/stepsAssets/payout.svg"
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
