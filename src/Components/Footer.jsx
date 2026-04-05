import React from "react";
import { ArrowRight } from "lucide-react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaBehance,
} from "react-icons/fa";

const Footer = () => {
  const socialIcons = [FaFacebookF, FaTwitter, FaLinkedinIn, FaBehance];

  return (
    <>
      <footer className="bg-[#0A0A0A] text-white px-6 md:px-20 mx-4 py-16 md:py-24 mb-4 relative overflow-hidden rounded-2xl ">
        <div className="flex flex-col items-center text-center mb-20 md:mb-32 relative">
          <h1 className="text-[60px] sm:text-[90px] md:text-[140px] lg:text-[180px] font-medium leading-none tracking-tight">
            <span className="block opacity-70 text-gray-400">Let's</span>

            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white/40 to-white/10">
              talk now
            </span>
          </h1>

          <div className="absolute top-[55%] md:top-70 left-1/2 transform -translate-x-1/2">
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-46 md:h-46 flex items-center justify-center group cursor-pointer">
              <div className="absolute inset-0 animate-[spin_10s_linear_infinite]">
                <svg viewBox="0 0 100 100" className="w-full h-full p-2">
                  <path
                    id="circlePath"
                    d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    fill="transparent"
                  />
                  <text className="text-[10px] fill-white/60 tracking-widest uppercase">
                    <textPath xlinkHref="#circlePath">
                      GET IN TOUCH • GET IN TOUCH •
                    </textPath>
                  </text>
                </svg>
              </div>

              <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4 relative flex justify-center md:justify-start">
            <div className="rounded-2xl overflow-hidden w-full max-w-sm md:max-w-none aspect-[4/5]">
              <img
                src="https://imglink.cc/cdn/ZTewfrjto6.png"
                alt="Team"
                className="w-full h-full object-cover grayscale"
              />
            </div>

            <div
              className="absolute -bottom-10 md:-bottom-40 left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0 text-[80px] sm:text-[120px] md:text-[160px] font-bold text-transparent opacity-10 pointer-events-none select-none"
              style={{ WebkitTextStroke: "1px white" }}
            >
              Floka
            </div>
          </div>

          <div className="md:col-span-4 flex flex-col gap-4 md:gap-8 items-center md:items-start">
            {["About Us", "Journal", "Faq", "Get In Touch", "Careers"].map(
              (link) => (
                <a
                  key={link}
                  href={`#${link}`}
                  className="text-lg md:text-2xl font-medium hover:opacity-50 transition-opacity"
                >
                  {link}
                </a>
              ),
            )}
          </div>

          <div className="md:col-span-4 flex flex-col gap-6 md:gap-8 items-center md:items-start text-center md:text-left">
            <p className="text-gray-400 text-lg leading-relaxed max-w-xs">
              At <span className="text-white font-bold">Floka</span>, we believe
              furniture should be more than just functional—it should tell your
              story. With a focus on timeless design, sustainable materials, and
              expert craftsmanship, we create pieces that feel personal.
            </p>

            <div className="space-y-1">
              <p className="text-lg font-medium">info@floka-design.com</p>
              <p className="text-lg font-medium">+123 (456 789 00)</p>
              <p className="text-lg text-gray-500">12/A, Booston Tower, NYC</p>
            </div>

            <div className="flex gap-4 mt-2">
              {socialIcons.map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="border border-white/20 p-4 rounded-full hover:bg-white hover:text-black transition-all"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
      <footer className="footer sm:footer-horizontal footer-center text-lg bg-base-100 text-base-content p-4">
        <aside>
          <p className="text-black">
            <span className="text-gray-600">
              Copyright © {new Date().getFullYear()}
            </span>{" "}
            - Case-Themes
          </p>
        </aside>
      </footer>
    </>
  );
};

export default Footer;
