import React from "react";

export default function BlogCard({ image, tags = [], title, description, date, readTime, link }) {
  return (
    <div className="bg-white rounded-2xl shadow border border-gray-100 p-0 max-w-md w-full mx-auto flex flex-col">
      {/* Image and tags */}
      <div className="relative">
        <img src={image} alt={title} className="rounded-t-2xl w-full h-48 object-cover" />
        <div className="absolute top-3 left-3 flex gap-2 z-10">
          {tags.map((tag, idx) => (
            <span key={idx} className="bg-white text-[#23253A] font-semibold text-xs px-3 py-1 rounded-lg shadow border border-gray-100">
              {tag}
            </span>
          ))}
        </div>
      </div>
      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-[#23253A] mb-2 leading-snug">{title}</h3>
        <p className="text-gray-500 text-base mb-4 line-clamp-2">{description}</p>
        <div className="flex items-center text-black font-medium text-sm mt-auto gap-4">
          <span className="flex items-center gap-1">
          <img src="/resourcesAssets/calender.svg" alt="Redirect More" className="transform scale-110"/>
            {date}
          </span>
          <span>•</span>
          <span>{readTime} min read</span>
          <a href={link} target="_blank" rel="noopener noreferrer" className="ml-auto text-[#6C6CFF] hover:underline">
            <img src="/resourcesAssets/more.svg" alt="Redirect More" />
          </a>
        </div>
      </div>
    </div>
  );
} 