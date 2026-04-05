import React from "react";
import { motion } from "framer-motion";

const rewards = [
  { title: "BEST DESIGNER AWARDS", platform: "AWWWARDS", year: "2025" },
  { title: "PEAKY UI DESIGNER", platform: "GOOGLE", year: "2024" },
  { title: "GREAT IN UX", platform: "APPLE", year: "2023" },
  { title: "BEST WEBSITE PICK", platform: "MICROSOFT", year: "2022" },
  { title: "NELSON UI & UX DESIGNER", platform: "SAMSUNG", year: "2021" },
];

const InnovationSection = () => {
  return (
    <section className="bg-[#f8f8f8] py-24 px-6 font-sans">
      <div className="mb-12 flex justify-center">
        <div className="text-gray-300 text-3xl">
          <img src="https://imglink.cc/cdn/GFPSj7kepF.png" alt="" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
        <div className="lg:col-span-4 space-y-8">
          <motion.div
            whileHover={{ scale: 1.05, y: -8 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="rounded-[32px] overflow-hidden shadow-sm"
          >
            <img
              src="https://imglink.cc/cdn/DIkpis6rFW.png"
              alt="Team"
              className="w-full aspect-[4/5] object-cover"
            />
          </motion.div>

          <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-600">
            GET REWARDS
          </p>
        </div>

        <div className="lg:col-span-8 flex flex-col">
          <h2 className="text-4xl md:text-5xl lg:text-[80px] font-sm leading-[1] tracking-tight text-[#1a1a1a] mb-16 max-w-4xl">
            Driven by passion and grounded in expertise, our team turns bold
            ideas into reality.
          </h2>

          <div className="border-t border-gray-200">
            {rewards.map((reward, index) => (
              <motion.div
                key={index}
                whileHover={{ x: 12 }}
                transition={{ type: "spring", stiffness: 250 }}
                className="group flex flex-row gap-4 justify-between items-start md:items-center py-6 border-b border-gray-200 cursor-pointer"
              >
                <span className="text-[11px] font-bold tracking-widest text-[#1a1a1a] md:w-1/3 mb-2 md:mb-0">
                  {reward.title}
                </span>

                <span className="text-[11px] font-bold tracking-widest text-gray-400 group-hover:text-black transition md:w-1/3 text-left md:text-center">
                  {reward.platform}
                </span>

                <span className="text-[11px] font-bold tracking-widest text-gray-400 group-hover:text-black transition md:w-1/3 text-right">
                  {reward.year}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovationSection;
