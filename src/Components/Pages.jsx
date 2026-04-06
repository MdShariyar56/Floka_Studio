import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const Counter = ({ end, suffix = "", className = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!start) return;

    let startValue = 0;
    const duration = 1000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      startValue += increment;

      if (startValue >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(startValue));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [start, end]);

  return (
    <div ref={ref} className={className}>
      {count.toLocaleString()}
      {suffix}
    </div>
  );
};

const Pages = () => {
  const texT = "PLAYFUL, LUXURIOUS, OR MORE / WANT IT TO SOUND ";
  const text = "combines creativity, technology ";

  return (
    <section
      id="page"
      className="bg-[#F8F8F8] pt-6 md:pt-16 pb-6 px-6 md:px-16 text-gray-900"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 mb-16 items-start">
        <div className="md:col-span-3">
          <div className="relative flex items-center justify-center w-32 h-32 mb-4">
            <div className="absolute inset-0 animate-[spin_12s_linear_infinite]">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <defs>
                  <path
                    id="circlePath"
                    d="M 50,50 m -30,0 a 30,30 0 1,1 60,0 a 30,30 0 1,1 -60,0"
                  />
                </defs>
                <text className="text-[6px] uppercase font-semibold fill-gray-400 tracking-[2px]">
                  <textPath href="#circlePath">{texT}</textPath>
                </text>
              </svg>
            </div>

            <div className="relative z-10 w-10 h-10 flex items-center justify-center">
              <img src="https://i.ibb.co/bMjKdzxD/logo.png" alt="" />
            </div>
          </div>

          <p className="text-gray-500 text-lg leading-relaxed max-w-[300px]">
            We design every project with long-term success in mind.
          </p>
        </div>

        <div className="md:col-span-9">
          <h2 className="text-4xl md:text-6xl leading-tight">
            Our approach is straightforward—prioritizing functionality, speed,
            and clarity for solutions.
          </h2>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-4">
        <div className="md:col-span-3 bg-white p-8 rounded-[40px] flex flex-col justify-between shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
          <div>
            <Counter
              end={25}
              suffix="+"
              className="text-7xl font-bold tracking-tighter"
            />

            <p className="text-gray-400 text-sm mt-2">Years of experience</p>

            <hr className="my-8 border-gray-100" />

            <p className="text-gray-500 leading-relaxed">
              Explore how we transform ideas into extraordinary digital
              experiences.
            </p>
          </div>

          <div className="mt-10">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <img
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                  src={`https://i.pravatar.cc/150?u=${i}`}
                  alt="user"
                />
              ))}
            </div>

            <Counter
              end={1200}
              suffix="+ happy users review"
              className="text-sm font-semibold mt-3"
            />
          </div>
        </div>

        <div className="md:col-span-6 relative group overflow-hidden rounded-[40px] h-[500px]">
          <img
            src="https://imglink.cc/cdn/Lce9DD6tGT.png"
            alt="CEO"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />

          <div className="absolute bottom-8 left-8 right-8 text-white">
            <p className="text-xl md:text-2xl mb-4">
              “At Floka, we merge strategy, creativity, and technology to shape
              brands that people love.”
            </p>
            <p className="text-sm">
              <span className="font-bold">Merizo H. Yelso</span>{" "}
              <span className="text-gray-400">/ CEO</span>
            </p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="md:col-span-3 flex flex-col gap-4">
          {/* SOCIAL */}
          <div className="bg-white p-8 rounded-[40px] shadow-sm flex-1">
            <p className="text-gray-400 text-xs mb-1 uppercase tracking-wider">
              Follow us
            </p>
            <h4 className="text-xl font-bold mb-6">For check updates</h4>

            <div className="flex flex-wrap gap-2">
              {["DRIBBBLE", "BEHANCE", "LINKEDIN", "X", "XING"].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 border border-gray-100 rounded-full text-[10px] font-bold text-gray-600 hover:bg-black hover:text-white transition cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-[40px] shadow-sm flex-1">
            <p className="text-gray-400 text-xs mb-6 uppercase tracking-wider">
              Impressions
            </p>

            <StatBar
              label="Solutions"
              value="100%"
              width="w-full"
              color="bg-gray-100"
              text="text-black"
            />
            <StatBar
              label="UI/UX"
              value="90%"
              width="w-[94%]"
              color="bg-black"
              text="text-white"
            />
            <StatBar
              label="Explore"
              value="72%"
              width="w-[72%]"
              color="bg-gray-100"
              text="text-black"
            />
          </div>
        </div>
      </div>
      <div className="relative w-full overflow-hidden py-12 my-6 ">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{
            x: [0, -1000],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 10,
              ease: "linear",
            },
          }}
        >
          {[...Array(6)].map((_, i) => (
            <h1
              key={i}
              className="text-4xl md:text-8xl font-semibold text-gray-800 uppercase tracking-tighter mx-4"
            >
              {text}
            </h1>
          ))}
        </motion.div>

        <div className="absolute inset-y-0 left-0 w-20  z-10"></div>
        <div className="absolute inset-y-0 right-0 w-20  z-10"></div>
      </div>
    </section>
  );
};

const StatBar = ({ label, value, width, color, text }) => (
  <div className="relative h-10 rounded-md bg-gray-50 overflow-hidden flex items-center px-4 justify-between ">
    <div
      className={`absolute left-0 top-0 h-full ${color} ${width} transition-all duration-700`}
    ></div>
    <span className={`relative z-10 text-xs font-bold ${text}`}>{label}</span>
    <span className={`relative z-10 text-xs font-bold ${text}`}>{value}</span>
  </div>
);

export default Pages;
