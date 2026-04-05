import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaPlus } from "react-icons/fa";

const MotionImage = ({ src, alt }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 120, damping: 15 });
  const springY = useSpring(y, { stiffness: 120, damping: 15 });

  const rotateX = useTransform(springY, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-10, 10]);

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    x.set(mouseX / rect.width - 0.5);
    y.set(mouseY / rect.height - 0.5);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{ rotateX, rotateY, perspective: 1000 }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="w-full h-full overflow-hidden"
    >
      <motion.img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        whileHover={{ scale: 1.08 }}
        transition={{ duration: 0.4 }}
      />
    </motion.div>
  );
};

const SocialIcon = ({ Icon }) => (
  <div className="p-2 bg-white rounded-lg border border-gray-100 cursor-pointer hover:bg-black hover:text-white transition-all duration-300">
    <Icon size={14} />
  </div>
);

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Nicolas K. Ellington",
      role: "FOUNDER",
      img: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
    },
    {
      name: "Carlos E. Ashcroft",
      role: "CEO",
      img: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
    },
    {
      name: "Leonardo F. Ashton",
      role: "UX DESIGNER",
      img: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg",
    },
    {
      name: "Ricardo P. Winslow",
      role: "UI DESIGNER",
      img: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg",
    },
  ];

  return (
    <section className="bg-gray-50 min-h-screen py-20 px-2 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 bg-white p-8 rounded-3xl shadow-sm">
        <div className="lg:col-span-4 flex flex-col justify-between">
          <div>
            <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">
              Our Avengers
            </span>

            <h1 className="text-5xl font-semibold text-gray-900 mt-4 leading-tight">
              Meet with our team member
            </h1>

            <div className="flex gap-6 mt-8 border-b border-gray-100 pb-4">
              <button className="text-sm font-bold border-b-2 border-black pb-4">
                DESIGN TEAM
              </button>
              <button className="text-sm font-bold text-gray-300 pb-4">
                DEVELOPMENT TEAM
              </button>
            </div>

            <p className="text-gray-500 text-[18px] mt-8 leading-relaxed">
              What began over coffee-fueled brainstorming sessions has grown
              into a thriving digital agency dedicated to helping brands stand
              out.
            </p>

            <button className="flex items-center gap-3 mt-10 group">
              <div className="bg-black p-2 rounded-full text-white">
                <FaPlus size={16} />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest">
                Join With Us
              </span>
            </button>
          </div>

          <div className="mt-4 mb-2 md:mb-36 h-48 rounded-3xl overflow-hidden">
            <MotionImage
              src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg"
              alt="Team meeting"
            />
          </div>
        </div>

        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-gray-50 p-2 rounded-[2rem] flex flex-col gap-4"
            >
              <div className="bg-[#D9C4A9] rounded-2xl h-64 overflow-hidden">
                <MotionImage src={member.img} alt={member.name} />
              </div>

              <div className="px-2">
                <h3 className="text-lg font-bold text-gray-800">
                  {member.name}
                </h3>

                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">
                  {member.role}
                </p>

                <div className="flex gap-2 mt-4">
                  {[FaFacebookF, FaTwitter, FaLinkedinIn].map((Icon, i) => (
                    <SocialIcon key={i} Icon={Icon} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
