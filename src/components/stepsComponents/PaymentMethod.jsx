import React from "react";

export default function PaymentMethod() {
  return (
    <>
    <section className="bg-white py-[30px] px-6 mb-[50px]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:justify-between">
        {/* Left: Text */}
        <div className="flex-1 flex flex-col items-start justify-center mb-0 md:mb-0">
            <div className="flex-1 flex flex-col items-start md:justify-center mb-0 md:mb-0">
            <h2 className="text-[30px] md:text-3xl font-normal text-[#3051BB] mb-4 leading-tight steps-heading-font">
                SELECT THE<br className="hidden md:block" /> PAYMENT METHOD
            </h2>
            <p className="text-[#343F52] text-base md:text-lg max-w-md steps-subheading">
                Choose the payment method that's most
                convenient for you, including bank cards,
                bank transfers, pre-paid cards, e-wallets
                and Shivhare’s bank.
            </p>
            </div>
        </div>
        {/* Right: Phone mockup with cards and coin icon */}
        <div className="flex-1 flex flex-col items-center md:items-end justify-center md:justify-end w-full max-w-xl relative md:w-[28rem] md:h-[28rem]">
          {/* Phone mockup */}
          <div className="relative w-full md:w-[28rem] md:h-[28rem] transform translate-y-12">
            <img
              src="https://ik.imagekit.io/q46s1ahe0/RotateX-Assets/How%20To%20En%20(2).png?updatedAt=1752925390227"
              alt="Payment Method Mockup"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
    </>
  );
}