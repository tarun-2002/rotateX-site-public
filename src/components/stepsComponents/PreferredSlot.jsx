import React from "react";

export default function PrefferedSlot() {
  return (
    <>
    <section className="bg-[#f7f7f7] py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:justify-between">
        {/* Left: Text */}
        <div className="flex-1 flex flex-col items-start justify-center mb-8 md:mb-0">
            <div className="flex-1 flex flex-col items-start md:justify-center mb-8 md:mb-0">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-700 mb-4 leading-tight">
                PICK YOUR<br className="hidden md:block" /> PREFFERED SLOT
            </h2>
            <p className="text-gray-700 text-base md:text-lg max-w-md">
                Choose the payout month you want: Early
                slots with admin fees, middle slots with
                low to zero fees, or enjoy late slots with
                discounts on pay-ins up to 125%
            </p>
            </div>
        </div>
        {/* Right: Phone mockup with cards and coin icon */}
        <div className="flex-1 flex flex-col items-center md:items-end justify-center md:justify-end w-full max-w-xl relative md:w-[28rem] md:h-[28rem]">
          {/* Phone mockup */}
          <div className="relative w-64 md:w-[28rem] md:h-[28rem]">
            <img
              src="/stepsAssets/slot.svg"
              alt="Preffered Slot Mockup"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
    </>
  );
}