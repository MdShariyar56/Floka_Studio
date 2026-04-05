import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FAQData = [
  {
    id: 1,
    question: "What is artificial intelligence (AI)?",
    content:
      "Explore how we transform ideas into extraordinary digital experiences. Each case study is a testament to our design thinking, strategic approach, and creative execution.",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: 2,
    question: "How does AI improve business efficiency?",
    content:
      "AI automates repetitive tasks, analyzes large datasets for insights, and optimizes workflows, allowing your team to focus on high-value strategic work.",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: 3,
    question: "How long does AI implementation take?",
    content:
      "Timeline varies based on complexity, typically ranging from 4 weeks for simple integrations to 6+ months for custom enterprise solutions.",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: 4,
    question: "What industries can benefit from AI?",
    content:
      "Almost every industry including Healthcare, Finance, E-commerce, and Manufacturing can leverage AI for better decision making.",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: 5,
    question: "What are the costs of AI solutions?",
    content:
      "Pricing is tailored to the project scope, technical requirements, and integration needs. Contact us for a detailed quote.",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=400",
  },
];

const FAQSection = () => {
  const [openId, setOpenId] = useState(1);

  return (
    <div className="min-h-screen bg-[#F8F8F8] p-6 md:p-16 font-sans">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto mb-16"
      >
        <p className="text-xs font-medium uppercase tracking-widest text-gray-500 mb-10 md:mb-20">
          FAQ & GET ANSWER
        </p>

        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-medium leading-tight">
            Have more questions?
            <br />
            We’ve answers.
          </h1>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-4">
          <div className="block">
            <p className="text-gray-500 mb-4 max-w-[250px]">
              Don’t found anything yet. Feel free to ask anything.
              <a href="#" className="text-black border-b border-black ml-1">
                Let's Talk
              </a>
            </p>

            <div className="mt-8 rounded-2xl overflow-hidden w-full md:w-64 h-80">
              <img
                src="https://imglink.cc/cdn/6SFlSP8Dsx.png"
                alt="Professional"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="md:col-span-8 flex flex-col gap-4">
          {FAQData.map((faq) => (
            <div key={faq.id} className="bg-white rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span
                  className={`text-lg font-medium transition-colors ${
                    openId === faq.id ? "text-black" : "text-gray-800"
                  }`}
                >
                  {faq.question}
                </span>

                <div className="bg-black rounded-full p-1">
                  {openId === faq.id ? (
                    <Minus className="w-5 h-5 text-white" />
                  ) : (
                    <Plus className="w-5 h-5 text-white" />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {openId === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-8 flex flex-col md:flex-row gap-6">
                      {faq.image && (
                        <div className="w-full md:w-1/3 h-40 rounded-xl overflow-hidden">
                          <img
                            src={faq.image}
                            alt="AI visualization"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}

                      <div className="flex-1">
                        <p className="text-gray-600 leading-relaxed mb-6">
                          {faq.content}
                        </p>

                        <button className="flex items-center gap-3 bg-black text-white px-5 py-2.5 rounded-full text-xs font-medium hover:bg-gray-800 transition-colors uppercase tracking-wider">
                          <div className="bg-white rounded-full p-0.5 text-black">
                            <Plus size={14} />
                          </div>
                          Get In Touch
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20 flex justify-between items-center px-4 max-w-7xl mx-auto opacity-20">
        {[...Array(25)].map((_, i) => (
          <div key={i} className="h-4 w-[1px] bg-black"></div>
        ))}
      </div>

      <div className="text-center mt-8 pt-12 text-[10px] tracking-[0.3em] text-gray-400 font-bold uppercase">
        Insights
      </div>
    </div>
  );
};

export default FAQSection;
