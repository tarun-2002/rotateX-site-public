import React from "react";
import './SaveBigSection.css'; // Assuming you have a CSS file for styles
export default function SaveBigSection() {
  return (
    <section className="bg-white pb-12">
      <div className="max-w-7xl mx-auto  px-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2 current-number-text">Current Market numbers<br />speak more than us</h2>
        <p className="text-gray-500 mb-8 current-number-sub-text">Access undiscovered potential</p>
        <div className="grid grid-cols-2 gap-4">
          {/* Card 1 */}
          <div className="rounded-xl border border-pink-100 bg-pink-50 p-6 flex flex-col items-center box1-stats">
            <span className="text-[#F24E7C] text-xl md:text-3xl font-bold mb-1 stat-block-head">₹30,000 Cr</span>
            <span className="text-[11px] md:text-sm text-gray-500 font-medium stat-block-subhead">ANNUAL MARKET SIZE</span>
          </div>
          {/* Card 2 */}
          <div className="rounded-xl border border-pink-100 bg-pink-50 p-6 flex flex-col items-center box2-stats">
            <span className="text-[#F24E7C] text-xl md:text-3xl font-bold mb-1 stat-block-head">₹16+ lakh Cr</span>
            <span className="text-[10px] md:text-sm text-gray-500 font-medium stat-block-subhead">INDUSTRY OPPORTUNITY</span>
          </div>
          {/* Card 3 */}
          <div className="rounded-xl border border-blue-100 bg-blue-50 p-6 flex flex-col items-center box3-stats">
            <span className="text-[#048EFF] text-xl md:text-3xl font-bold mb-1 stat-block-head">100+</span>
            <span className="text-[11px] md:text-sm text-gray-500 font-medium stat-block-subhead">WAITLIST USERS</span>
          </div>
          {/* Card 4 */}
          <div className="rounded-xl border border-purple-100 bg-purple-50 p-6 flex flex-col items-center box4-stats">
            <span className="text-[#AD75FF] text-xl md:text-3xl font-bold mb-1 stat-block-head">10x</span>
            <span className="text-[10px] md:text-sm text-gray-500 font-medium stat-block-subhead">MUTUAL FUNDS MARKET</span>
          </div>
        </div>
      </div>
    </section>
  );
} 