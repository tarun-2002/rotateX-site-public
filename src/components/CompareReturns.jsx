import React, { useState } from "react";

const investmentTypes = [
  { label: "Credit", value: "credit" },
  { label: "Invest", value: "invest" },
];

const formatCurrency = (value) =>
  `₹${value.toLocaleString("en-IN")}`;

function getThumbPosition(value, min, max, width = 100) {
  // width is percent (0-100)
  return ((value - min) / (max - min)) * width;
}

export default function CompareReturns() {
  const [investmentType, setInvestmentType] = useState("invest");
  const [monthlyInvestment, setMonthlyInvestment] = useState(15000);
  const [period, setPeriod] = useState(10);

  // Example calculations (replace with real logic as needed)
  const investedAmount = monthlyInvestment * period;
  const rotateXMultiplier = 1.14;
  //   const fixedDepositMultiplier = 1.05;
  const rotateXReturns = investedAmount * rotateXMultiplier;
  //   const fixedDepositReturns = investedAmount * fixedDepositMultiplier;
  const totalValue = rotateXReturns;
  const percentGain = ((rotateXMultiplier - 1) * 100).toFixed(3);

  // Slider config
  const minInvestment = 1000;
  const maxInvestment = 50000;
  const minPeriod = 1;
  const maxPeriod = 24;

  // Calculate thumb positions (in percent)
  const investmentThumb = getThumbPosition(monthlyInvestment, minInvestment, maxInvestment);
  const periodThumb = getThumbPosition(period, minPeriod, maxPeriod);

  return (
    <section className="w-full bg-white py-12 mb-12 pb-0 md:py-16 px-6 md:px-0 flex flex-col md:flex-row md:items-stretch md:justify-center max-w-7xl mx-auto gap-8 md:gap-12">
      {/* Left Side: Controls */}
      <div className="md:w-1/2 w-full flex flex-col gap-4 md:gap-10">
        <h2 className="text-2xl md:text-3xl font-semibold mb-2 font-text-styling">Compare Returns</h2>
        {/* Investment Type */}
        <div>
          <div className="flex items-center gap-2 mb-2 text-sm font-normal font-text-styling">
            <span className="inline-block">
              <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
                <path d="M10.1953 16.5H4.19531C2.69531 16.5 1.94531 15.75 1.94531 14.25V8.25C1.94531 6.75 2.69531 6 4.19531 6H7.94531V14.25C7.94531 15.75 8.69531 16.5 10.1953 16.5Z" stroke="#374151" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M8.0278 3C7.9678 3.225 7.94531 3.4725 7.94531 3.75V6H4.19531V4.5C4.19531 3.675 4.87031 3 5.69531 3H8.0278Z" stroke="#374151" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M10.9453 6V9.75" stroke="#374151" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M13.9453 6V9.75" stroke="#374151" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M13.1953 12.75H11.6953C11.2828 12.75 10.9453 13.0875 10.9453 13.5V16.5H13.9453V13.5C13.9453 13.0875 13.6078 12.75 13.1953 12.75Z" stroke="#374151" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M7.94531 14.25V3.75C7.94531 2.25 8.69531 1.5 10.1953 1.5H14.6953C16.1953 1.5 16.9453 2.25 16.9453 3.75V14.25C16.9453 15.75 16.1953 16.5 14.6953 16.5H10.1953C8.69531 16.5 7.94531 15.75 7.94531 14.25Z" stroke="#374151" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </span>
            Choose your preferred Investment type
          </div>
          <div className="flex gap-2 mt-6 mb-6">
            {investmentTypes.map((type) => (
              <button
                key={type.value}
                className={`px-4 py-1.5 rounded-lg border text-sm font-medium transition-colors duration-150 ${investmentType === type.value
                  ? "bg-black text-white border-blue-900"
                  : "bg-white text-gray-700 border-gray-300 hover:border-black-400"
                  }`}
                onClick={() => setInvestmentType(type.value)}
              >
                {type.label}
              </button>
            ))}
          </div>
        </div>
        {/* Monthly Investment */}
        <div>
          <div className="flex items-center gap-2 mb-14 text-sm font-normal font-text-styling">
            <span className="inline-block">
              <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
                <path d="M13.1953 15.375H5.69531C3.44531 15.375 1.94531 14.25 1.94531 11.625V6.375C1.94531 3.75 3.44531 2.625 5.69531 2.625H13.1953C15.4453 2.625 16.9453 3.75 16.9453 6.375V11.625C16.9453 14.25 15.4453 15.375 13.1953 15.375Z" stroke="#374151" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M9.44531 11.25C10.688 11.25 11.6953 10.2426 11.6953 9C11.6953 7.75736 10.688 6.75 9.44531 6.75C8.20267 6.75 7.19531 7.75736 7.19531 9C7.19531 10.2426 8.20267 11.25 9.44531 11.25Z" stroke="#374151" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M4.57031 7.125V10.875" stroke="#374151" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M14.3203 7.125V10.875" stroke="#374151" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </span>
            Monthly investment
          </div>
          <div className="relative w-3/4" style={{ height: 20 }}>
            {/* Moving value label */}
            <span
              className="bg-white shadow px-4 py-1.5 rounded-lg text-base font-semibold absolute -top-10 z-10 transition-all duration-200 whitespace-nowrap"
              style={{ left: `calc(${investmentThumb}% - 48px)` }}
            >
              {formatCurrency(monthlyInvestment)}
            </span>
            <input
              type="range"
              min={minInvestment}
              max={maxInvestment}
              step={1000}
              value={monthlyInvestment}
              onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
              className="w-full accent-blue-900 mt-5"
            />
          </div>
          <div className="flex items-center justify-between w-full mt-0">
            <div></div>
            <button
              className="text-xs text-black hover:text-blue-700 underline ml-2"
              onClick={() => setMonthlyInvestment(15000)}
            >
              Reset
            </button>
          </div>
        </div>
        {/* Time of Period */}
        <div>
          <div className="flex items-center gap-2 mt-6 mb-14 text-sm font-normal font-text-styling">
            <span className="inline-block">
              <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
                <path d="M13.1953 15.375H5.69531C3.44531 15.375 1.94531 14.25 1.94531 11.625V6.375C1.94531 3.75 3.44531 2.625 5.69531 2.625H13.1953C15.4453 2.625 16.9453 3.75 16.9453 6.375V11.625C16.9453 14.25 15.4453 15.375 13.1953 15.375Z" stroke="#374151" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M9.44531 11.25C10.688 11.25 11.6953 10.2426 11.6953 9C11.6953 7.75736 10.688 6.75 9.44531 6.75C8.20267 6.75 7.19531 7.75736 7.19531 9C7.19531 10.2426 8.20267 11.25 9.44531 11.25Z" stroke="#374151" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M4.57031 7.125V10.875" stroke="#374151" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M14.3203 7.125V10.875" stroke="#374151" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </span>
            Time of Period
          </div>
          <div className="relative w-3/4" style={{ height: 20 }}>
            {/* Moving value label */}
            <span
              className="bg-white shadow px-4 py-1.5 rounded-lg text-base font-semibold absolute -top-10 z-10 transition-all duration-200 whitespace-nowrap"
              style={{ left: `calc(${periodThumb}% - 36px)` }}
            >
              {period} month
            </span>
            <input
              type="range"
              min={minPeriod}
              max={maxPeriod}
              step={1}
              value={period}
              onChange={(e) => setPeriod(Number(e.target.value))}
              className="w-full accent-blue-900 mt-5"
            />
          </div>
          <div className="flex items-center justify-between w-full mt-0">
            <div></div>
            <button
              className="text-xs text-black hover:text-blue-700 underline ml-2"
              onClick={() => setPeriod(10)}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
      {/* Right Side: Comparison */}
      <div className="md:w-1/2 w-full flex flex-col justify-between bg-white md:rounded-2xl md:p-10 md:shadow-md">
        <div>
          <hr className="my-2" />
          <h3 className="text-base md:text-lg font-normal text-center font-text-styling">RotateX Returns Vs Market Returns</h3>
          <hr className="my-2" />
          <div className="flex gap-2 my-4 flex-wrap justify-center">
            <span className="bg-[#FFEDD5] text-[#FF9200] px-3 py-1 rounded-lg text-xs font-medium font-text-styling">Fixed Returns</span>
            <span className="bg-[#DDF3F8] text-[#25A0BD] px-3 py-1 rounded-lg text-xs font-medium font-text-styling">Moderate Risk</span>
            <span className="bg-[#DCFCE7] text-[#10BC4B] px-3 py-1 rounded-lg text-xs font-medium font-text-styling">Get upto 45% Interest</span>
          </div>
          {/* Bar Comparison */}
          <div className="space-y-2 mb-6">
            <div className="flex items-center justify-between gap-2">
              <div className="bg-[#5359EA] h-8 md:h-8 rounded-lg flex items-center justify-center text-white text-xs md:text-sm font-normal font-text-styling px-8 w-32 md:w-60">1.14x</div>
              <span className="text-xs md:text-sm text-gray-700 ml-2 font-normal font-text-styling"><span className="text-[#1F7AE0]">RotateX</span> Returns</span>
            </div>
            <div className="flex items-center justify-between gap-2">
              <div className="bg-[#D1D5DB] h-8 md:h-8 rounded-lg flex items-center justify-center text-gray-700 text-xs font-normal font-text-styling px-4 w-24 md:w-44">1.05x</div>
              <span className="text-xs md:text-sm text-[#6B7280] ml-2 font-normal font-text-styling">Fixed Deposits</span>
            </div>
            <div className="flex items-center justify-between gap-2">
              <div className="bg-[#D1D5DB] h-8 md:h-8 rounded-lg flex items-center justify-center text-gray-700 text-xs font-normal font-text-styling px-4 w-24 md:w-44">1.05x</div>
              <span className="text-xs md:text-sm text-[#6B7280] ml-2 font-normal font-text-styling">Fixed Deposits</span>
            </div>
          </div>
          {/* Amounts */}
          <div className="flex flex-col gap-1 text-sm mb-4">
            <div className="flex justify-between">
              <span className="text-[#6B7280] font-text-styling font-normal mb-2">Invested Amount</span>
              <span className="font-text-styling font-normal">{formatCurrency(investedAmount)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#6B7280] font-text-styling font-normal">Estimated Returns</span>
              <span className="font-text-styling font-normal text-[#5359EA]">{formatCurrency(rotateXReturns)}</span>
            </div>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between items-center text-xs text-green-600 mb-0">
            <span></span>
            <div className="flex">
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="16" viewBox="0 0 13 16" fill="none">
                <g clip-path="url(#clip0_545_6871)">
                  <path d="M2.4453 6.7327L4.53319 5L6.62109 6.7327" stroke="#23D057" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M2.4453 10.5608L4.53319 8.82812L6.62109 10.5608" stroke="#23D057" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                </g>
                <defs>
                  <clipPath id="clip0_545_6871">
                    <rect width="16" height="12" fill="white" transform="translate(12.4453) rotate(90)" />
                  </clipPath>
                </defs>
              </svg>
              <span>{percentGain}%</span>
            </div>
          </div>
          <div className="flex justify-between items-center text-base text-[#6B7280] font-normal font-text-styling">
            <span>Total Value</span>
            <span className="text-black font-semibold text-lg">₹ {totalValue.toLocaleString("en-IN")}</span>
          </div>
          <hr className="my-2" />
        </div>
        {/* 
        <button className="mt-2 w-full bg-black text-white py-3 rounded-xl font-semibold text-base flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors">
          Explore Similar Clubs
          <span className="ml-1"><img src="/homeAssets/button-arrow-icon.svg" alt="" /></span>
        </button> */}
      </div>
    </section>
  );
} 