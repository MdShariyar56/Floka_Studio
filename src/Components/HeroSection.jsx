import React from "react";
import { GoPlus } from "react-icons/go";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden text-white px-6 md:px-16 -mt-2">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[95%] h-[95%] rounded-3xl overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source
              src="/PixVerse_V5.5_Image_Text_360P_A_grumpy_cat_wit.mp4"
              type="video/mp4"
            />
          </video>

          <div className="absolute inset-0 bg-base-100/0"></div>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-10 items-end pb-20 mt-40 md:mt-90">
        <div className="flex flex-col">
          <h1 className="text-[80px] md:text-[250px] font-semibold leading-none tracking-tighter">
            Floka
          </h1>
          <h2 className="text-5xl md:text-7xl font-semibold text-gray-400 opacity-50 leading-none -mt-4 md:-mt-8 ml-4 md:ml-80 pt-4">
            Studio
          </h2>
        </div>

        <div className="flex flex-col items-start md:items-end space-y-6">
          <div className="bg-white text-black p-4 rounded-3xl flex items-center gap-4 w-full max-w-[350px] shadow-2xl">
            <img
              src="https://i.ibb.co/Cp9dWKTJ/home-1-img-slide-300x300.jpg" 
              alt="Profile"
              className="w-20 h-24 object-cover rounded-2xl hover:scale-110 bg-gray-200"
            />
            <div className="flex flex-col">
              <span className="text-[10px] uppercase font-bold text-gray-500 tracking-widest">
                Head of Idea
              </span>
              <h3 className="text-xl font-bold leading-tight">
                Almond D. Nelsi
              </h3>
              <button className="mt-4 flex items-center gap-2 group">
                <div className="bg-black text-white p-1 rounded-full group-hover:scale-110 transition-transform">
                 <GoPlus />
                </div>
                <span className="text-xs font-black tracking-tighter uppercase">
                  Let's Talk
                </span>
              </button>
            </div>
          </div>

          <div className="max-w-[400px] text-left md:text-right">
            <p className="text-lg font-semibold leading-snug">
              No cookie-cutter websites. No fluff.
            </p>
            <p className="text-xl text-gray-300 mt-2">
              Just real tools and smart strategies to grow your business and
              elevate your brand.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
