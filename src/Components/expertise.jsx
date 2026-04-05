import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const Expertise = () => {
  const [activeId, setActiveId] = useState(1);
  const services = [
    {
      id: 1,
      title: "User Interface & Experience Design",
      description:
        "From brand strategy to immersive digital experiences, we offer end-to-end creative solutions...",
      tags: ["BRANDING", "MAGAZINE", "PRODUCT"],
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600",
    },
    {
      id: 2,
      title: "Web Development",
      description:
        "We build high-performance, scalable websites using the latest technologies.",
      tags: ["REACT", "NEXT.JS", "TAILWIND"],
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600",
    },
    {
      id: 3,
      title: "SEO Optimization",
      description:
        "Helping brands rank higher with data-driven SEO strategies.",
      tags: ["SEO", "MARKETING"],
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600",
    },
    {
      id: 4,
      title: "Low-Code Development",
      description:
        "Fast-track your product using low-code & no-code platforms.",
      tags: ["WEBFLOW", "BUBBLE"],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600",
    },
  ];

  const testimonials = [
    { text: "Great in UI/UX", img: "https://i.pravatar.cc/150?u=1" },
    { text: "Best design communicator", img: "https://i.pravatar.cc/150?u=2" },
    { text: "10/10 well recommended", img: "https://i.pravatar.cc/150?u=3" },
    { text: "Super speedy designer", img: "https://i.pravatar.cc/150?u=4" },
  ];

  return (
    <section className="bg-black text-white py-6 md:py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-9xl font-semibold">Company</h2>
          <h3 className="text-5xl md:text-9xl text-gray-500 opacity-50 -mt-2">
            expertise
          </h3>
        </div>
        <div className="border-t border-gray-800">
          {services.map((service) => (
            <div key={service.id} className="border-b border-gray-800">
              <button
                onClick={() =>
                  setActiveId(activeId === service.id ? null : service.id)
                }
                className="w-full py-6 flex justify-between items-center group"
              >
                <div className="flex items-center gap-6">
                  <div className="w-8 h-8 border border-gray-600 flex items-center justify-center rounded-full">
                    {activeId === service.id ? (
                      <Minus size={16} />
                    ) : (
                      <Plus size={16} />
                    )}
                  </div>
                  <span className="text-xl group-hover:text-gray-400 transition">
                    {service.title}
                  </span>
                </div>
              </button>
              <AnimatePresence>
                {activeId === service.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="flex flex-col md:flex-row gap-8 pb-10 px-10"
                  >
                    <div className="flex-1">
                      <p className="text-gray-400 mb-6">
                        {service.description}
                      </p>
                      <div className="flex gap-2 flex-wrap">
                        {service.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] border font-bold border-gray-700 px-3 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="w-full md:w-80 h-48 rounded-xl overflow-hidden">
                      <img
                        src={service.image}
                        alt=""
                        className="w-full h-full object-cover hover:scale-105 transition duration-500"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
        <div className="flex  mt-2 mb-2">
          <button className="flex items-center gap-3  text-white px-6 py-3 rounded-full hover:scale-105 transition">
            <div className="bg-white text-black p-4 rounded-full">
              <Plus size={14} />
            </div>
            HIRE US TODAY
          </button>
        </div>
      </div>
      <div className="relative overflow-hidden   py-4 pt-20">
        <motion.div
          className="flex w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-12 px-8">
              {testimonials.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 min-w-[250px]"
                >
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <img
                      src={item.img}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-sm italic whitespace-nowrap">
                    "{item.text}"
                  </span>
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Expertise;
