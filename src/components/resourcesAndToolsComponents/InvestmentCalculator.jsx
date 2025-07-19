import React, { useState } from "react";

const investmentTypes = [
  { label: "₹500–₹20 lacs", value: "low" },
  { label: "₹20–₹60 Lacs", value: "mid" },
  { label: "above ₹60 Lacs", value: "high" },
];

export default function InvestmentCalculator() {
  const [selectedType, setSelectedType] = useState("mid");
  const [monthlyInvestment, setMonthlyInvestment] = useState(40); // in Lacs
  const [period, setPeriod] = useState(10); // in years

  return (
    <>
      <section className="bg-white pb-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:justify-between">
          {/* Left: Text */}
          <div className="flex-1 max-w-xl">
            <div className="flex flex-row items-center mb-2 w-full">
              <h2 className="text-2xl md:text-3xl font-normal text-[#23253A] flex-shrink-0 font-text-styling">Investment Calculator</h2>
              <div className="flex-1"></div>
              <button className="flex items-center gap-1 text-[14px] text-gray-500 hover:text-blue-600 text-base md:text-lg ml-2 font-text-styling">
                <span>Share</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none">
                  <path d="M9.24498 4.6C9.61047 4.60001 9.96731 4.48876 10.268 4.28104C10.5688 4.07332 10.7991 3.77897 10.9285 3.43714C11.0579 3.09532 11.0801 2.7222 10.9923 2.36742C10.9044 2.01264 10.7107 1.69301 10.4368 1.45102C10.1629 1.20904 9.82178 1.05617 9.45887 1.01275C9.09597 0.969328 8.72845 1.03741 8.40518 1.20795C8.08191 1.37848 7.81821 1.64338 7.64916 1.96743C7.4801 2.29147 7.4137 2.6593 7.45878 3.022L4.49478 4.504C4.24052 4.25881 3.91973 4.09385 3.57239 4.02967C3.22505 3.96548 2.8665 4.00491 2.54141 4.14304C2.21631 4.28117 1.93905 4.5119 1.74414 4.80648C1.54924 5.10106 1.44531 5.44648 1.44531 5.7997C1.44531 6.15292 1.54924 6.49834 1.74414 6.79292C1.93905 7.0875 2.21631 7.31823 2.54141 7.45636C2.8665 7.59449 3.22505 7.63392 3.57239 7.56974C3.91973 7.50555 4.24052 7.34059 4.49478 7.0954L7.45878 8.5774C7.40628 8.99875 7.50441 9.42509 7.73584 9.78107C7.96728 10.1371 8.3171 10.3998 8.72349 10.5228C9.12989 10.6458 9.56668 10.6212 9.95668 10.4533C10.3467 10.2854 10.6648 9.98505 10.8548 9.60531C11.0447 9.22558 11.0943 8.79092 10.9948 8.37814C10.8953 7.96536 10.6531 7.60105 10.311 7.34959C9.96885 7.09812 9.54884 6.9757 9.12518 7.00396C8.70152 7.03222 8.30148 7.20933 7.99578 7.504L5.03178 6.022C5.04994 5.87456 5.04994 5.72544 5.03178 5.578L7.99578 4.096C8.31858 4.408 8.75898 4.6 9.24498 4.6Z" fill="#374151" />
                </svg>
              </button>
            </div>
            <p className="text-gray-500 text-base text-[14px] mb-6 font-text-styling">There are various types of investments you can make in real estate. Tell us your investment criteria and discover the returns for asset classes that fit your needs.</p>
          </div>
          {/* Right: Phone mockup with cards and coin icon */}
          <div className="flex-1 flex flex-col items-center md:items-end justify-center md:justify-end w-full max-w-xl relative md:w-[28rem] md:h-[28rem]">
            {/* Phone mockup */}
            <div className="bg-white rounded-xl shadow p-4 md:p-8 max-w-xl w-full mx-auto mt-8">
              {/* Investment Type */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  {/* Icon */}
                  <span className="inline-block text-xl align-middle">
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
                      <path d="M10.1953 16.5H4.19531C2.69531 16.5 1.94531 15.75 1.94531 14.25V8.25C1.94531 6.75 2.69531 6 4.19531 6H7.94531V14.25C7.94531 15.75 8.69531 16.5 10.1953 16.5Z" stroke="#374151" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M8.0278 3C7.9678 3.225 7.94531 3.4725 7.94531 3.75V6H4.19531V4.5C4.19531 3.675 4.87031 3 5.69531 3H8.0278Z" stroke="#374151" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M10.9453 6V9.75" stroke="#374151" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M13.9453 6V9.75" stroke="#374151" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M13.1953 12.75H11.6953C11.2828 12.75 10.9453 13.0875 10.9453 13.5V16.5H13.9453V13.5C13.9453 13.0875 13.6078 12.75 13.1953 12.75Z" stroke="#374151" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M7.94531 14.25V3.75C7.94531 2.25 8.69531 1.5 10.1953 1.5H14.6953C16.1953 1.5 16.9453 2.25 16.9453 3.75V14.25C16.9453 15.75 16.1953 16.5 14.6953 16.5H10.1953C8.69531 16.5 7.94531 15.75 7.94531 14.25Z" stroke="#374151" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </span>
                  <span className="font-normal text-gray-800 font-text-styling">Choose your preferred Investment type</span>
                </div>
                <div className="flex gap-2 flex-wrap items-center justify-center">
                  {investmentTypes.map((type) => (
                    <button
                      key={type.value}
                      className={`px-2 py-1 font-text-styling rounded-lg border text-[14px] font-normal transition-all focus:outline-none ${selectedType === type.value
                        ? "bg-[#23253A] text-white border-[#23253A] shadow"
                        : "bg-white text-[#23253A] border-gray-200 hover:bg-gray-100"
                        }`}
                      onClick={() => setSelectedType(type.value)}
                    >
                      {type.label}
                    </button>
                  ))}
                </div>
              </div>
              {/* Monthly Investment */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-block text-xl align-middle">
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
                      <path d="M13.1953 15.375H5.69531C3.44531 15.375 1.94531 14.25 1.94531 11.625V6.375C1.94531 3.75 3.44531 2.625 5.69531 2.625H13.1953C15.4453 2.625 16.9453 3.75 16.9453 6.375V11.625C16.9453 14.25 15.4453 15.375 13.1953 15.375Z" stroke="#374151" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M9.44531 11.25C10.688 11.25 11.6953 10.2426 11.6953 9C11.6953 7.75736 10.688 6.75 9.44531 6.75C8.20267 6.75 7.19531 7.75736 7.19531 9C7.19531 10.2426 8.20267 11.25 9.44531 11.25Z" stroke="#374151" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M4.57031 7.125V10.875" stroke="#374151" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M14.3203 7.125V10.875" stroke="#374151" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </span>
                  <span className="font-semibold text-gray-800">Monthly investment</span>
                </div>
                <div className="flex items-center gap-4">
                  <input
                    type="range"
                    min={1}
                    max={100}
                    value={monthlyInvestment}
                    onChange={e => setMonthlyInvestment(Number(e.target.value))}
                    className="w-full accent-[#23253A]"
                  />
                  <button
                    className="text-xs text-black underline ml-2"
                    onClick={() => setMonthlyInvestment(1)}
                    type="button"
                  >
                    Reset
                  </button>
                </div>
                <div className="mt-2 flex items-center">
                  <span className="bg-white rounded-lg shadow px-4 py-2 font-semibold text-[#23253A] text-base border border-gray-100">
                    ₹{monthlyInvestment} Lacs
                  </span>
                </div>
              </div>
              {/* Time of Period */}
              <div className="mb-2">
                <div className="flex items-center gap-2 mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
                    <path d="M13.1953 15.375H5.69531C3.44531 15.375 1.94531 14.25 1.94531 11.625V6.375C1.94531 3.75 3.44531 2.625 5.69531 2.625H13.1953C15.4453 2.625 16.9453 3.75 16.9453 6.375V11.625C16.9453 14.25 15.4453 15.375 13.1953 15.375Z" stroke="#374151" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M9.44531 11.25C10.688 11.25 11.6953 10.2426 11.6953 9C11.6953 7.75736 10.688 6.75 9.44531 6.75C8.20267 6.75 7.19531 7.75736 7.19531 9C7.19531 10.2426 8.20267 11.25 9.44531 11.25Z" stroke="#374151" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M4.57031 7.125V10.875" stroke="#374151" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M14.3203 7.125V10.875" stroke="#374151" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <span className="font-semibold text-gray-800">Time of Period</span>
                </div>
                <div className="flex items-center gap-4">
                  <input
                    type="range"
                    min={1}
                    max={30}
                    value={period}
                    onChange={e => setPeriod(Number(e.target.value))}
                    className="w-full accent-[#23253A]"
                  />
                  <button
                    className="text-xs text-black underline ml-2"
                    onClick={() => setPeriod(1)}
                    type="button"
                  >
                    Reset
                  </button>
                </div>
                <div className="mt-2 flex items-center">
                  <span className="bg-white rounded-lg shadow px-4 py-2 font-semibold text-[#23253A] text-base border border-gray-100">
                    {period} years
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 