import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Nicolas K. Ellington",
    role: "IT Specialist",
    text: "As we continued to use their tool and found more use cases, our feature requests quickly found their way into their backlog.",
    tag: "GREAT DESIGN SOLUTIONS",
  },
  {
    id: 2,
    name: "Julian T. Beaumont",
    role: "IT Specialist",
    text: "As we continued to use their tool and found more use cases, our feature requests quickly found their way into their backlog.",
    tag: "GREAT DESIGN SOLUTIONS",
  },
  {
    id: 3,
    name: "Felipe D. Hawthorne",
    role: "IT Specialist",
    text: "As we continued to use their tool and found more use cases, our feature requests quickly found their way into their backlog.",
    tag: "GREAT DESIGN SOLUTIONS",
  },
];

const TestimonialCard = ({ item, index }) => {
  const isSecond = index === 1;

  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="group flex flex-col gap-4"
    >
      <div
        className={`rounded-2xl p-6 border border-gray-100 transition-all duration-500
        ${isSecond ? "order-2" : "order-1"}
        bg-white group-hover:bg-black group-hover:text-white`}
      >
        <h3 className="font-semibold text-lg">{item.name}</h3>
        <p className="text-gray-500 text-sm group-hover:text-gray-300">
          {item.role}
        </p>
      </div>

      <div
        className={`rounded-2xl p-8 min-h-[300px] flex flex-col justify-between border border-gray-100 shadow-sm transition-all duration-500
        ${isSecond ? "order-1" : "order-2"}
        bg-white group-hover:bg-black group-hover:text-white`}
      >
        <div>
          <div className="flex gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                className="fill-orange-500 text-orange-500"
              />
            ))}
          </div>

          <p className="text-xl leading-relaxed font-medium">"{item.text}"</p>
        </div>

        <span className="text-[10px] font-bold tracking-widest text-gray-400 mt-8 uppercase group-hover:text-gray-300">
          "{item.tag}"
        </span>
      </div>
    </motion.div>
  );
};

const UserFeedbacks = () => {
  return (
    <section className="bg-[#f8f8f8] py-2 md:py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between mb-16 border-gray-200 pt-4">
          <p className="text-[11px] font-bold uppercase tracking-widest text-gray-700 mb-6">
            USER FEEDBACKS
          </p>

          <h2 className="text-4xl md:text-[40px] font-medium max-w-2xl leading-tight tracking-tight">
            Accelerating growth, and unlocking new potential.
            <span className="inline-flex items-center mx-2 -space-x-3">
              <div className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white overflow-hidden">
                <img src="https://i.pravatar.cc/100?u=1" alt="u1" />
              </div>
              <div className="w-10 h-10 rounded-full bg-gray-400 border-2 border-white overflow-hidden">
                <img src="https://i.pravatar.cc/100?u=2" alt="u2" />
              </div>
              <div className="w-10 h-10 rounded-full bg-gray-500 border-2 border-white overflow-hidden">
                <img src="https://i.pravatar.cc/100?u=3" alt="u3" />
              </div>
            </span>
            Let's build your brand—together.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <TestimonialCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserFeedbacks;
