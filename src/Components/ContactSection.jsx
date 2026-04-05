import React from "react";
import { Plus, MessageSquare, MapPin, ChevronDown } from "lucide-react";

const ContactSection = () => {
  return (
    <section className=" bg-[#0a0a0a] text-white mt-16 mb-6 py-8 px-6 mx-4 flex items-center justify-center relative overflow-hidden rounded-3xl">
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="space-y-12">
          <div className="space-y-6">
            <span className="text-[11px] font-bold tracking-[0.2em] text-gray-500 uppercase">
              Get in touch
            </span>

            <h2 className="text-4xl md:text-[44px] font-medium leading-[1.1] tracking-tight max-w-lg">
              Tell us about your project — whether it's a website, SEO, or
              marketing.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-8 border-t border-white/10">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-gray-400">
                <MessageSquare size={14} />
                Talk to us
              </div>
              <div className="text-gray-400 text-sm">
                <p>Work and general inquiries</p>
                <p className="text-white mt-1 font-semibold">+123 456 789 00</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-gray-400">
                <MapPin size={14} />
                Post Address
              </div>
              <div className="text-gray-400 text-sm">
                <p>541 Melville Ave, Palo Alto, CA</p>
                <p>94301, United States</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-[32px] p-8 md:p-12 text-black shadow-2xl">
          <h3 className="text-2xl font-semibold mb-8">
            Have a project in mind?
          </h3>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="YOUR NAME"
                className="input-style"
              />
              <input
                type="email"
                placeholder="BUSINESS EMAIL"
                className="input-style"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <label className="label-style">Budget</label>
                <select className="select-style">
                  <option>$1000 - $5000</option>
                  <option>$5000 - $10000</option>
                  <option>$10000+</option>
                </select>
                <ChevronDown
                  size={16}
                  className="absolute right-4 top-[42px] text-gray-500 pointer-events-none"
                />
              </div>

              <div className="relative">
                <label className="label-style">Service</label>
                <select className="select-style">
                  <option>CONSULTANCY</option>
                  <option>WEB DESIGN</option>
                  <option>SEO</option>
                </select>
                <ChevronDown
                  size={16}
                  className="absolute right-4 top-[42px] text-gray-500 pointer-events-none"
                />
              </div>
            </div>

            <textarea
              placeholder="MESSAGE"
              rows="4"
              className="input-style resize-none"
            ></textarea>

            <button
              type="submit"
              className="group flex items-center gap-4 pt-4"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-black rounded-full scale-0 group-hover:scale-125 transition duration-300 opacity-20"></div>

                <div className="bg-black text-white w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-90">
                  <Plus size={20} />
                </div>
              </div>

              <span className="text-[11px] font-black tracking-[0.2em] uppercase group-hover:translate-x-1 transition">
                Let's Talk
              </span>
            </button>
          </form>
        </div>
      </div>

      <style jsx>{`
        .input-style {
          width: 100%;
          background: #f4f4f4;
          border-radius: 12px;
          padding: 14px;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.1em;
          outline: none;
          transition: 0.3s;
        }

        .input-style:focus {
          box-shadow: 0 0 0 1px black;
          background: #fff;
        }

        .select-style {
          width: 100%;
          background: #f4f4f4;
          border-radius: 12px;
          padding: 14px;
          appearance: none;
          cursor: pointer;
          font-weight: 500;
        }

        .label-style {
          font-size: 10px;
          font-weight: 700;
          color: #9ca3af;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-left: 4px;
          display: block;
          margin-bottom: 6px;
        }
      `}</style>
    </section>
  );
};

export default ContactSection;
