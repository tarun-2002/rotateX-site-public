import React from "react";
import './InvestmentAdviceBanner.css'; // Assuming you have a CSS file for styles
export default function InvestmentAdviceBanner() {
  return (
    <section className="bg-white py-12 px-6">
      <div className="max-w-7xl w-full h-[193px] sm:h-[230px] mx-auto gap-[22px] shrink-0 rounded-[6px] px-6 py-6 pl-3 md:p-8 md:px-24 flex flex-row items-start" style={{
        backgroundImage: "url('https://ik.imagekit.io/q46s1ahe0/RotateX-Assets/Group%20(3).png?updatedAt=1752927987205')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        {/* Left: Text and Button */}
        <div className="flex-1 flex flex-col items-start justify-center mb-4 md:mb-0">
          <div className="text-white text-[20px] md:text-3xl font-semibold mb-6 leading-snug max-w-lg font-text-styling">
            Don’t know how to get started in Investment?
          </div>
          <button className="bg-white text-[#232323] font-normal rounded-lg px-2 py-1 md:px-7 md:py-3 shadow flex items-center  gap-3 text-base md:text-lg hover:bg-gray-100 text-[14px] transition font-text-styling">
            Contact Us!
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path d="M12.2612 10.1926C12.2612 10.4026 12.2146 10.6184 12.1154 10.8284C12.0162 11.0384 11.8879 11.2367 11.7187 11.4234C11.4329 11.7384 11.1179 11.9659 10.7621 12.1117C10.4121 12.2576 10.0329 12.3334 9.62456 12.3334C9.02956 12.3334 8.39373 12.1934 7.72289 11.9076C7.05206 11.6217 6.38123 11.2367 5.71623 10.7526C5.04539 10.2626 4.40956 9.72008 3.80289 9.11925C3.20206 8.51258 2.65956 7.87675 2.17539 7.21175C1.69706 6.54675 1.31206 5.88175 1.03206 5.22258C0.752061 4.55758 0.612061 3.92175 0.612061 3.31508C0.612061 2.91841 0.682061 2.53925 0.822061 2.18925C0.962061 1.83341 1.18373 1.50675 1.49289 1.21508C1.86623 0.847581 2.27456 0.666748 2.70623 0.666748C2.86956 0.666748 3.03289 0.701748 3.17873 0.771748C3.33039 0.841748 3.46456 0.946748 3.56956 1.09841L4.92289 3.00591C5.02789 3.15175 5.10373 3.28591 5.15623 3.41425C5.20873 3.53675 5.2379 3.65925 5.2379 3.77008C5.2379 3.91008 5.19706 4.05008 5.11539 4.18425C5.03956 4.31841 4.92873 4.45841 4.78873 4.59841L4.34539 5.05925C4.28123 5.12341 4.25206 5.19925 4.25206 5.29258C4.25206 5.33925 4.25789 5.38008 4.26956 5.42675C4.28706 5.47341 4.30456 5.50841 4.31623 5.54342C4.42123 5.73591 4.60206 5.98675 4.85873 6.29008C5.12123 6.59342 5.40123 6.90258 5.70456 7.21175C6.01956 7.52092 6.32289 7.80675 6.63206 8.06925C6.93539 8.32591 7.18623 8.50092 7.38456 8.60592C7.41373 8.61758 7.44873 8.63508 7.48956 8.65258C7.53623 8.67008 7.5829 8.67591 7.6354 8.67591C7.73456 8.67591 7.81039 8.64092 7.87456 8.57675L8.3179 8.13925C8.46373 7.99342 8.60373 7.88258 8.7379 7.81258C8.87206 7.73092 9.00623 7.69008 9.15206 7.69008C9.26289 7.69008 9.37956 7.71342 9.5079 7.76592C9.63623 7.81842 9.7704 7.89425 9.91623 7.99342L11.8471 9.36425C11.9987 9.46925 12.1037 9.59175 12.1679 9.73758C12.2262 9.88342 12.2612 10.0292 12.2612 10.1926Z" fill="#000929" />
            </svg>
          </button>
        </div>
        {/* Right: Illustration */}
        <div className="flex-shrink-1 flex items-end justify-end transform scale-150 md:-translate-x-8">
          <img src="https://ik.imagekit.io/q46s1ahe0/RotateX-Assets/Male%20Employee%20Presentation.png?updatedAt=1752927987040" alt="Investment advice illustration" className="h-40 md:h-48 object-contain" />
        </div>
      </div>
    </section>
  );
} 