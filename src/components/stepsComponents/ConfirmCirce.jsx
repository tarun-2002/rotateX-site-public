import React from "react";

export default function ConfirmCircle() {
  return (
    <>
    <section className="bg-[#f7f7f7] py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:justify-between">
        {/* Left: Text */}
        <div className="flex-1 flex flex-col items-start justify-center mb-8 md:mb-0">
            <div className="flex-1 flex flex-col items-start md:justify-center mb-8 md:mb-0">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-700 mb-4 leading-tight">
                CONFIRM YOUR<br className="hidden md:block" /> CIRCLE
            </h2>
            <p className="text-gray-700 text-base md:text-lg max-w-md">
                Check the Circle Summary with all the
                choices you submitted and confirm to
                complete the final step! Don't forget to
                send a referral invitation to enjoy a 150
                INR discount for both you and your
                friends
            </p>
            </div>
        </div>
        {/* Right: Phone mockup with cards and coin icon */}
        <div className="flex-1 flex flex-col items-center md:items-end justify-center md:justify-end w-full max-w-xl relative md:w-[28rem] md:h-[28rem]">
          {/* Phone mockup */}
          <div className="relative w-64 md:w-[28rem] md:h-[28rem]">
            <img
              src="/stepsAssets/confirmCircle.svg"
              alt="Add Address Mockup"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
    </>
  );
}