import React from "react";
import { Plus } from "lucide-react";

const Card = ({ tag, date, title, image, isDark = false, reverse = false }) => {
  return (
    <div className={`flex flex-col gap-3 group cursor-pointer h-full`}>
      <div
        className={`
        ${isDark ? "bg-[#0E0E10] text-white" : "bg-white text-black"} 
        ${reverse ? "order-last" : "order-first"}
        p-8 rounded-[24px] flex flex-col justify-between min-h-[160px] transition-all duration-500
      `}
      >
        <div className="flex gap-3 items-center opacity-60">
          <span className="text-[10px] font-bold tracking-[0.2em]">{tag}</span>
          <span className="text-[10px] font-medium">{date}</span>
        </div>
        <h3 className="text-xl md:text-[22px] font-medium leading-[1.3] mt-4">
          {title}
        </h3>
      </div>

      <div
        className={`relative overflow-hidden rounded-[24px] flex-grow ${reverse ? "h-[380px]" : "h-[420px]"}`}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
          <div className="bg-white text-black p-4 rounded-full shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
            <Plus size={24} strokeWidth={2.5} />
          </div>
        </div>
      </div>
    </div>
  );
};

const InsightsSection = () => {
  return (
    <div className="bg-[#F2F2F2] min-h-screen p-6 md:p-16 flex items-center justify-center">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-3 gap-5">
        <Card
          tag="WEB3"
          date="NOV 07, 2025"
          title="Seamless user interfaces, crafted with intent."
          image="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=600"
          isDark={true}
        />

        <Card
          tag="WEB3"
          date="NOV 07, 2025"
          title="Creative web platforms, designed for growth."
          image="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600"
          isDark={false}
          reverse={true} // Text niche thakar jonno
        />

        <Card
          tag="WEB3"
          date="NOV 07, 2025"
          title="Immersive virtual journeys, built with precision"
          image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000"
          isDark={true}
        />
      </div>
    </div>
  );
};

export default InsightsSection;
