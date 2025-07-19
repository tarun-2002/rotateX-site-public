import React from "react";

export default function PrefferedSlot() {
  return (
    <>
      <section className="bg-white py-[30px] px-6 mb-[50px]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:justify-between">
          {/* Left: Text */}
          <div className="flex-1 flex flex-col items-start justify-center mb-0 md:mb-0">
            <div className="flex-1 flex flex-col items-start md:justify-center mb-0 md:mb-0">
              <h2 className="text-[30px] md:text-3xl font-normal text-[#3051BB] mb-4 leading-tight steps-heading-font">
                PICK YOUR<br className="hidden md:block" /> PREFFERED SLOT
              </h2>
              <p className="text-[#343F52] text-base md:text-lg max-w-md steps-subheading">
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
            <div className="relative w-full md:w-[28rem] md:h-[28rem] transform translate-y-12">
              <img
                src="https://ik.imagekit.io/q46s1ahe0/RotateX-Assets/How%20to%20Join%20Money%20Circles.png?updatedAt=1752925390213"
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