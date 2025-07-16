import Navbar from '../Navbar'
import FooterSection from '../FooterSection'
import InvestmentAdviceBanner from './InvestmentAdviceBanner'
import InvestmentCalculator from './InvestmentCalculator'
import InvestmentOptionsSlider from './InvestmentOptionsSlider'
import HighReturnSlotsCard from './HighReturnSlotsCard'
import RealEstateFAQ from './RealEstateFAQ'
import React, { useRef } from 'react';
import BlogCard from './BlogCard'

function Resources() {
  return (
    <div className="min-h-screen bg-white flex flex-col  mt-24">
      <Navbar />
      <InvestmentAdviceBanner />
      <InvestmentCalculator />
      <InvestmentOptionsSlider />
      <HighReturnSlotsCard />

      {/* Blogs Section */}
      <section className="md:bg-[#f7f7f7] bg-white py-12 md:pt-0 px-6">
        <div className="max-w-7xl mx-auto ">
          <div className="flex flex-row items-center justify-between mb-8 gap-4">
            <h2 className="text-xl md:text-3xl font-bold text-[#23253A]">Blogs</h2>
            <button className="bg-[#6C6CFF] text-white font-semibold rounded-xl px-3 md:px-7 py-1 md:py-3 shadow text-sm md:text-lg hover:bg-[#5959e6] transition self-start md:self-center">Explore more</button>
          </div>
          <BlogCardsScroller />
        </div>
      </section>

      <RealEstateFAQ />

      <FooterSection />
    </div>
  )
}

// BlogCardsScroller component
function BlogCardsScroller() {
  const scrollRef = useRef(null);
  const cards = [
    {
      image: "/resourcesAssets/blog1.png",
      tags: ["News", "Legal"],
      title: "All you need to know about Leave and License agreement",
      description: "Simply put, a Leave and License is an understanding where one party (the...",
      date: "14 Feb, 2022",
      readTime: 7,
      link: "#",
    },
    {
      image: "/resourcesAssets/blog1.png",
      tags: ["News", "Legal"],
      title: "All you need to know about Leave and License agreement",
      description: "Simply put, a Leave and License is an understanding where one party (the...",
      date: "14 Feb, 2022",
      readTime: 7,
      link: "#",
    },
    {
      image: "/resourcesAssets/blog1.png",
      tags: ["News", "Legal"],
      title: "All you need to know about Leave and License agreement",
      description: "Simply put, a Leave and License is an understanding where one party (the...",
      date: "14 Feb, 2022",
      readTime: 7,
      link: "#",
    },
    {
      image: "/resourcesAssets/blog1.png",
      tags: ["News", "Legal"],
      title: "All you need to know about Leave and License agreement",
      description: "Simply put, a Leave and License is an understanding where one party (the...",
      date: "14 Feb, 2022",
      readTime: 7,
      link: "#",
    },
  ];

  const scroll = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.firstChild ? el.firstChild.offsetWidth : 320;
    el.scrollBy({ left: dir * (cardWidth + 24), behavior: 'smooth' });
  };

  return (
    <div className="relative">
      {/* Left arrow */}
      <button
        className="flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-200 shadow rounded-full w-8 md:w-12 h-8 md:h-12 items-center justify-center hover:bg-gray-100 transition"
        onClick={() => scroll(-1)}
        aria-label="Scroll left"
        type="button"
      >
        <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
      </button>
      {/* Cards row */}
      <div
        ref={scrollRef}
        className="flex gap-6 md:gap-8 overflow-x-auto scroll-smooth pb-2 md:pb-4 snap-x snap-mandatory"
        style={{
          scrollbarWidth: 'none', // Firefox
          msOverflowStyle: 'none', // IE/Edge
        }}
      >
        {/* Hide scrollbar for Chrome, Safari and Opera */}
        <style>{`
          .hide-scrollbar::-webkit-scrollbar { display: none; }
        `}</style>
        <div className="hide-scrollbar flex gap-6 md:gap-8">
          {cards.map((card, idx) => (
            <div key={idx} className="snap-start flex-shrink-0 w-80 md:w-96">
              <BlogCard {...card} />
            </div>
          ))}
        </div>
      </div>
      {/* Right arrow */}
      <button
        className="flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-200 shadow rounded-full w-8 md:w-12 h-8 md:h-12 items-center justify-center hover:bg-gray-100 transition"
        onClick={() => scroll(1)}
        aria-label="Scroll right"
        type="button"
      >
        <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
      </button>
    </div>
  );
}

export default Resources