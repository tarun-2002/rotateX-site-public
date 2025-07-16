import React, { useEffect, useState } from "react";

const options = [
  {
    title: "Vacant Commercial Properties",
    tags: [
      { text: "Starting from 50 lacs", color: "bg-orange-100 text-orange-600" },
      { text: "Moderate  Risk", color: "bg-blue-100 text-blue-600" },
      { text: "Earn upto 15%IRR", color: "bg-green-100 text-green-600" },
    ],
    description: "Commercial assets for sale in premium location with high value appreciation",
    bars: [
      { label: "rotateX", value: 1.14, color: "bg-[#6C6CFF] text-white" },
      { label: "SIP", value: 1.05, color: "bg-gray-200 text-gray-700" },
      { label: "Fixed Deposits", value: 1.05, color: "bg-gray-200 text-gray-700" },
    ],
    invested: "₹1,96,161",
    returns: "₹1,96,160",
    total: "₹3,98,281",
  },
  // Add more options here as needed
  {
    title: "Premium Office Spaces",
    tags: [
      { text: "Starting from 1 crore", color: "bg-orange-100 text-orange-600" },
      { text: "Low Risk", color: "bg-blue-100 text-blue-600" },
      { text: "Earn upto 10%IRR", color: "bg-green-100 text-green-600" },
    ],
    description: "Office spaces in business districts with stable rental income",
    bars: [
      { label: "rotateX", value: 1.10, color: "bg-[#6C6CFF] text-white" },
      { label: "SIP", value: 1.04, color: "bg-gray-200 text-gray-700" },
      { label: "Fixed Deposits", value: 1.03, color: "bg-gray-200 text-gray-700" },
    ],
    invested: "₹2,00,000",
    returns: "₹1,80,000",
    total: "₹3,80,000",
  },
];

export default function InvestmentOptionsSlider() {
  const [current, setCurrent] = useState(0);

  //for auto sliding
  useEffect(() => {
    const interval = setInterval(() => next(), 10000);
    return () => clearInterval(interval);
  }, [current]);
  

  const prev = () => setCurrent((c) => (c === 0 ? options.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === options.length - 1 ? 0 : c + 1));
  const opt = options[current];

  return (
    <>
    <section className="bg-white py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:justify-between">
        {/* Left: Text */}
        <div className="flex-1 max-w-xl">
            <h2 className="text-2xl md:text-3xl font-bold text-[#23253A] flex-shrink-0">Investment Options for You</h2>
            <p className="text-gray-500 text-base mb-6">There are various types of investments you can make in real estate. Tell us your investment criteria and discover the returns for asset classes that fit your needs.</p>
        </div>
        {/* Right: Phone mockup with cards and coin icon */}
        <div className="flex-1 flex flex-col items-center md:items-end justify-center md:justify-end w-full max-w-xl relative md:w-[28rem] md:h-[28rem]">
            <div className="bg-white rounded-xl shadow p-4 md:p-8 max-w-xl w-full mx-auto mt-8 relative">
                
                {/* Slider arrows */}
                <button onClick={prev} className="absolute left-2 top-4 md:top-6 bg-white rounded-full shadow p-0 md:p-1 border border-gray-200 hover:bg-gray-100 z-10" aria-label="Previous">
                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/></svg>
                </button>
                <button onClick={next} className="absolute right-2 top-4 md:top-6 bg-white rounded-full shadow p-0 md:p-1 border border-gray-200 hover:bg-gray-100 z-10" aria-label="Next">
                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
                </button>
                {/* Title and dots */}
                <div className="flex flex-col items-center mb-2">
                    <div className="font-semibold text-sm-2 md:text-xl text-[#23253A] flex items-center gap-2">
                    {opt.title}
                    </div>
                    <div className="flex items-center gap-1 mt-1 mb-2">
                    {options.map((_, i) => (
                        <span key={i} className={`w-2 h-2 rounded-full transition-all duration-300 ${i === current ? 'bg-gray-500 scale-125' : 'bg-gray-200'}`}></span>
                    ))}
                    </div>
                </div>
                {/* Tags */}
                <div className="flex gap-2 mb-3 flex-wrap items-center justify-center">
                    {opt.tags.map((tag, i) => (
                    <span key={i} className={`px-2 py-1 rounded text-xs font-medium ${tag.color}`}>{tag.text}</span>
                    ))}
                </div>
                <div className="text-gray-500 text-sm mb-4">{opt.description}</div>
                {/* Bars */}
                <div className="mb-4">
                    {opt.bars.map((bar) => (
                    <div key={bar.label} className="flex items-center gap-2 mb-2">
                        <div className={`rounded-lg ${bar.color} h-7 flex items-center justify-center font-semibold text-base px-4`} style={{width: `min(${bar.value * 100}px, 100%)`, minWidth: '60px'}}>
                        {bar.value.toFixed(2)}×
                        </div>
                        <span className="text-gray-500 text-sm font-medium ml-2 min-w-[80px]">{bar.label}</span>
                    </div>
                    ))}
                </div>
                {/* Invested/Returns */}
                <div className="flex flex-col gap-1 mb-2 text-sm">
                    <div className="flex justify-between"><span className="text-gray-500">Invested Amount</span><span className="font-semibold text-gray-700">{opt.invested}</span></div>
                    <div className="flex justify-between"><span className="text-gray-500">Estimated Returns</span><span className="font-semibold text-[#6C6CFF]">{opt.returns}</span></div>
                </div>
                <div className="border-t border-gray-200 my-2"></div>
                <div className="flex justify-between items-center mt-2">
                    <span className="font-semibold text-gray-500 text-lg">Total Value</span>
                    <span className="font-bold text-2xl text-[#23253A]">{opt.total}</span>
                </div>
                </div>
            </div>
            </div>
    </section>
    </>
  );
} 