import React from "react";
import './QuestionSection.css'; // Assuming you have a CSS file for styles
export default function QuestionSection() {
  return (
    <section className="bg-white py-12">
      <div className="max-w-2xl mx-auto flex flex-col items-start sm:items-center text-center  px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 font-text-styling">Have more questions ?</h2>
        <p className="text-gray-500 mb-8 font-text-styling">Reach out and we’ll answer all of them.</p>
        <div className="flex flex-row sm:flex-row gap-4 w-full justify-center">
          <a
            href="#"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-full border-2 border-orange-400 text-orange-500 font-semibold bg-white hover:bg-orange-50 transition text-base w-full sm:w-auto ques-button-box font-text-styling"
          >
            <span className="inline-block">
              {/* Chat icon (Heroicons outline chat) */}
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                <rect x="0.5" width="24" height="24" rx="12" fill="#FF7504" />
                <path d="M17.2707 8.47461L7.17969 9.34478L7.72827 15.7065L11.4576 15.3849L12.9251 17.0264L14.09 15.1579L17.8193 14.8363L17.2707 8.47461Z" fill="white" />
              </svg>
            </span>
            Chat with us
          </a>
          <a
            href="#"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-full border-2 border-blue-400 text-blue-500 font-semibold bg-white hover:bg-blue-50 transition text-base w-full sm:w-auto ques-button-box2 font-text-styling"
          >
            <span className="inline-block">
              {/* Email icon (Heroicons outline mail) */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5v9A2.25 2.25 0 0118.75 19H5.25A2.25 2.25 0 013 16.5v-9M21 7.5A2.25 2.25 0 0018.75 5H5.25A2.25 2.25 0 003 7.5m18 0v.243a2.25 2.25 0 01-.684 1.607l-6.75 6.75a2.25 2.25 0 01-3.182 0l-6.75-6.75A2.25 2.25 0 013 7.743V7.5" />
              </svg>
            </span>
            Email
          </a>
        </div>
      </div>
    </section>
  );
} 