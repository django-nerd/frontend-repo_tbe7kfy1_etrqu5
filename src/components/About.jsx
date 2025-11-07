import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="relative py-20 bg-[#f2f7ff]">
      <div className="mx-auto w-full max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-900"
        >
          About
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 text-gray-700 text-lg leading-relaxed"
        >
          I am Richo Jayandika, a vocational high school (SMK) graduate majoring in Software Engineering (Rekayasa Perangkat Lunak). With a strong technical foundation in software development, I discovered a passion for digital marketing and e-commerce—where creativity meets data-driven strategy. I combine my coding skills with marketing expertise to build, optimize, and scale digital experiences that drive real results.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-gray-700 text-lg leading-relaxed"
        >
          My focus spans performance marketing, SEO, content strategy, social media, and storefront optimization across platforms. I love bringing ideas to life—whether through clean code, compelling campaigns, or measurable growth in online sales.
        </motion.p>
      </div>
    </section>
  );
};

export default About;
