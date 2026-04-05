import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { Star, Plus } from "lucide-react";

const Funfacts = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div className="bg-[#f3f3f3] text-black">
      <div className="h-[20vh]" />

      <div
        ref={containerRef}
        className="relative max-w-7xl mx-auto px-6 lg:flex gap-12 items-start"
      >
        <div className="lg:sticky lg:top-20 w-full lg:w-1/2 mb-10 lg:mb-0">
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800"
              className="w-full h-[600px] object-cover"
              alt=""
            />
          </div>
        </div>

        <div className="w-full lg:w-1/2 space-y-12 pb-20">
          <div className="pt-4">
            <span className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">
              Fun Facts
            </span>

            <motion.h2
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 80 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, margin: "-100px" }}
              className="text-4xl md:text-5xl font-medium leading-tight mt-4"
            >
              Consistently delivering impactful results through a perfect blend
              of design and functionality.
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-8 rounded-2xl flex justify-between items-center shadow-sm">
              <p className="text-gray-500 text-sm">
                Successful projects <br /> completed
              </p>
              <span className="text-4xl font-bold">2k+</span>
            </div>

            <div className="row-span-2 bg-white p-8 rounded-2xl shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex gap-1 text-orange-500 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>

                <div className="flex items-baseline gap-2">
                  <span className="text-7xl font-bold">4.9/5</span>
                </div>

                <hr className="my-6 border-gray-100" />

                <p className="text-gray-500 text-sm">
                  We offer end-to-end creative solutions that make brands
                  unforgettable.
                </p>
              </div>

              <button className="mt-8 flex items-center gap-2 group">
                <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center group-hover:scale-110 transition">
                  <Plus size={16} />
                </div>
                <span className="text-[10px] font-bold uppercase">
                  Hire us now
                </span>
              </button>
            </div>

            <div className="bg-black text-white p-8 rounded-2xl flex flex-col justify-between h-80">
              <div className="flex -space-x-4">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-20 h-28 bg-gray-800 rounded-lg border-2 border-black overflow-hidden"
                  >
                    <img
                      src={`https://picsum.photos/200/300?random=${i}`}
                      className="w-full h-full object-cover"
                      alt=""
                    />
                  </div>
                ))}
              </div>

              <p className="text-sm text-gray-400">
                More than 2k+ projects completed—each crafted to deliver
                results.
              </p>
            </div>

            <div className="bg-gray-200 h-26 rounded-2xl overflow-hidden relative md:col-span-2 ">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=400"
                className="absolute inset-0 w-full h-full object-cover opacity-60"
                alt=""
              />

              <div className="absolute inset-0 p-6 flex justify-between items-end bg-gradient-to-t from-black/50 to-transparent text-white">
                <p className="text-xs font-bold uppercase w-1/2">
                  Worldwide base around the world
                </p>
                <span className="text-4xl font-bold">5+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Funfacts;
