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
    <section className="bg-[#f7f7f7] py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:justify-between">
        {/* Left: Text */}
        <div className="flex-1 max-w-xl">
          <div className="flex flex-row items-center mb-2 w-full">
            <h2 className="text-2xl md:text-3xl font-bold text-[#23253A] flex-shrink-0">Investment Calculator</h2>
            <div className="flex-1"></div>
            <button className="flex items-center gap-1 text-gray-500 hover:text-blue-600 text-base md:text-lg ml-2">
              <span>Share</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 8.25V6a3.75 3.75 0 10-7.5 0v2.25m7.5 0A2.25 2.25 0 0117.25 10.5h.75A2.25 2.25 0 0120.25 12.75v6A2.25 2.25 0 0118 21H6a2.25 2.25 0 01-2.25-2.25v-6A2.25 2.25 0 015.25 10.5h.75A2.25 2.25 0 019 8.25m6 0h-6" />
              </svg>
            </button>
          </div>
          <p className="text-gray-500 text-base mb-6">There are various types of investments you can make in real estate. Tell us your investment criteria and discover the returns for asset classes that fit your needs.</p>
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
                    <img src="/resourcesAssets/investmentType.svg" alt="Investment Type" className="w-6 h-6 inline-block" onError={e => e.target.style.display='none'} />
                    <span role="img" aria-label="building" className="align-middle">🏢</span>
                </span>
                <span className="font-semibold text-gray-800">Choose your preferred Investment type</span>
                </div>
                <div className="flex gap-2 flex-wrap items-center justify-center">
                {investmentTypes.map((type) => (
                    <button
                    key={type.value}
                    className={`px-4 py-2 rounded-lg border text-sm font-medium transition-all focus:outline-none ${
                        selectedType === type.value
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
                    <img src="/resourcesAssets/moneyIcon.svg" alt="Money" className="w-6 h-6 inline-block" onError={e => e.target.style.display='none'} />
                    <span role="img" aria-label="money" className="align-middle">💰</span>
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
                    className="text-xs text-blue-500 underline ml-2"
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
                <span className="inline-block text-xl align-middle">
                    <img src="/resourcesAssets/timeIcon.svg" alt="Time" className="w-6 h-6 inline-block" onError={e => e.target.style.display='none'} />
                    <span role="img" aria-label="clock" className="align-middle">⏳</span>
                </span>
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
                    className="text-xs text-blue-500 underline ml-2"
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