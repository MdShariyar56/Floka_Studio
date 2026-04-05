import React from "react";
import { motion } from "framer-motion";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      image:
        "https://i.ibb.co/QFJtdBGp/2010-i123-005-car-headlights-AD-composition.jpg",
      brandName: "Aldan Branding",
      tags: ["Branding", "UK"],
      year: "2025",
      isLarge: false,
    },
    {
      id: 2,
      image:
        "https://i.ibb.co/jNCqWp1/3d-rendering-cartoon-person-with-vr-glasses.jpg",
      brandName: "Aldan Branding",
      tags: ["Logo Design", "USA"],
      year: "2025",
      isLarge: false,
    },
    {
      id: 3,
      image: "https://i.ibb.co/Kp308x6d/home1-bg-img3.webp",
      brandName: "Aldan Branding",
      tags: ["Creative Direction"],
      year: "2025",
      isLarge: true,
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=600&auto=format&fit=crop",
      brandName: "Aldan Branding",
      tags: ["Web Design"],
      year: "2025",
      isLarge: false,
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=600&auto=format&fit=crop",
      brandName: "Aldan Branding",
      tags: ["Development"],
      year: "2025",
      isLarge: false,
    },
  ];

  return (
    <section className="bg-white py-20 px-6 md:px-16 text-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-gray-500 text-xs uppercase tracking-widest font-bold mb-6 border-b pb-2"
          >
            Portfolio
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-4xl md:text-5xl font-semibold leading-tight max-w-2xl tracking-tight"
          >
            Strategy to build powerful digital solutions.
          </motion.h2>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={{
                hidden: { opacity: 0, y: 60 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col gap-6 group ${
                project.isLarge ? "md:col-span-2" : ""
              }`}
            >
              <div
                className="relative overflow-hidden rounded-3xl"
                onMouseMove={(e) => {
                  const { left, top, width, height } =
                    e.currentTarget.getBoundingClientRect();

                  const x = (e.clientX - left - width / 2) / 20;
                  const y = (e.clientY - top - height / 2) / 20;

                  e.currentTarget.querySelector("img").style.transform =
                    `scale(1.1) translate(${x}px, ${y}px)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.querySelector("img").style.transform =
                    "scale(1)";
                }}
              >
                <img
                  src={project.image}
                  alt={project.brandName}
                  className="w-full h-[350px] md:h-[420px] object-cover transition-transform duration-300 ease-out"
                />

                <div className="absolute top-91 left-6 flex gap-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-white backdrop-blur px-4 py-1.5  rounded-full text-[10px] font-bold uppercase tracking-wider shadow "
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition"></div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: false, amount: 0.3 }}
                className="flex items-center justify-between border-b border-gray-100 pb-4 text-sm font-semibold text-gray-800"
              >
                <p className="uppercase tracking-widest text-[11px] font-black">
                  {project.brandName}
                </p>

                <div className="w-1.5 h-1.5 bg-gray-300 rounded-full hidden md:block"></div>

                <p className="tracking-widest text-[11px] font-bold text-gray-400">
                  {project.year}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className="mt-10 flex justify-center"
        >
          <button className="flex items-center gap-3 bg-black text-white px-8 py-3.5 rounded-full font-semibold hover:bg-gray-900 hover:scale-105 transition-all text-sm uppercase tracking-wider font-bold">
            <div className="w-4 h-4 rounded-full border border-white flex items-center justify-center">
              <span className="text-[10px]">+</span>
            </div>
            More Works
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
