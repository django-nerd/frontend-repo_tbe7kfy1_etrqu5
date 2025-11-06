import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    title: 'Fashion Store Conversion Boost',
    tag: 'E-Commerce',
    description: 'Redesigned PDP and checkout flow leading to +18% conversion rate.',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'SEO Growth for Tech Blog',
    tag: 'SEO',
    description: 'Keyword strategy and content plan growing organic traffic by 3x.',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Paid Social Campaign',
    tag: 'Ads',
    description: 'TikTok + Instagram creatives achieving 2.4 ROAS in 6 weeks.',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1200&auto=format&fit=crop',
  },
];

const Portfolio = () => {
  const [active, setActive] = useState(null);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="mx-auto w-full max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-900"
        >
          Portfolio
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl bg-gray-100 cursor-pointer"
              onClick={() => setActive(idx)}
            >
              <img src={p.image} alt={p.title} className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute bottom-0 p-4 text-white">
                <div className="text-sm font-medium opacity-80">{p.tag}</div>
                <div className="text-lg font-semibold">{p.title}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {active !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-6"
              onClick={() => setActive(null)}
            >
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 40, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 160, damping: 20 }}
                className="max-w-3xl w-full rounded-2xl bg-white overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="h-64 w-full">
                  <img src={projects[active].image} alt={projects[active].title} className="h-full w-full object-cover" />
                </div>
                <div className="p-6">
                  <div className="text-sm font-medium text-gray-500">{projects[active].tag}</div>
                  <h3 className="text-2xl font-bold text-gray-900">{projects[active].title}</h3>
                  <p className="mt-3 text-gray-700 leading-relaxed">{projects[active].description}</p>
                  <div className="mt-6 flex justify-end">
                    <button onClick={() => setActive(null)} className="rounded-full bg-gray-900 text-white px-5 py-2 font-semibold">Close</button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Portfolio;
