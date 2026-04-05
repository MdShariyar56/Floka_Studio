import React from "react";
import { Play } from "lucide-react";

const CaseThemes = () => {
  const logos = [
    { id: 1, name: "Logoipsum", icon: "🔷" },
    { id: 2, name: "LOGOIPSUM", icon: "🔋" },
    { id: 3, name: "Logoipsum", icon: "✨" },
    { id: 4, name: "Logoipsum", icon: "🌀" },
    { id: 5, name: "logoipsum", icon: "🐻" },
    { id: 6, name: "Logoipsum", icon: "🔗" },
    { id: 7, name: "Logoipsum", icon: "🔺" },
  ];

  return (
    <div className="bg-gray-100 pt-2 md:pt-20  py-10 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center text-[10px] md:text-[15px] uppercase tracking-widest text-gray-500 mb-4 px-2">
          <span>Happy Users</span>
          <span>
            ©2025 <span className="text-black">Case-Themes™</span> Studio
          </span>
        </div>

        <div className="bg-white rounded-3xl overflow-hidden ">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
            {logos.map((logo) => (
              <div
                key={logo.id}
                className="flex items-center justify-center p-8 md:p-20  hover:bg-gray-50 transition"
              >
                <div className="flex items-center gap-2">
                  <span className="text-xl md:text-2xl">{logo.icon}</span>
                  <span className="font-bold text-lg md:text-xl text-gray-800">
                    {logo.name}
                  </span>
                </div>
              </div>
            ))}

            <div className="flex flex-col items-center justify-center p-8 md:p-10  text-center">
              <p className="text-[10px] text-gray-400 mb-1 uppercase">
                Next can be you.
              </p>
              <button className="text-[11px] font-bold uppercase border-b border-black hover:text-gray-600 transition">
                Let's Talk
              </button>
            </div>
          </div>
        </div>

        <div className="relative mt-6 group overflow-hidden rounded-3xl cursor-pointer">
          <img
            src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=2071"
            alt=""
            className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-all duration-500" />

          <button
            className="
      absolute bottom-8 left-8
      bg-white text-black px-6 py-3 rounded-full flex items-center gap-3 shadow-lg
      
      transition-all duration-500 ease-in-out
      
      group-hover:bottom-1/2 
      group-hover:left-1/2 
      group-hover:-translate-x-1/2 
      group-hover:-translate-y-1/2
    "
          >
            <div className="bg-black rounded-full p-1">
              <Play size={14} className="text-white fill-current" />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest">
              Play Reel
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CaseThemes;
