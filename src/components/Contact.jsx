import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Instagram } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Thanks! Your message has been noted.');
  };

  return (
    <section id="contact" className="py-20 bg-[linear-gradient(180deg,#f7fbff_0%,#ffffff_100%)]">
      <div className="mx-auto w-full max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-900"
        >
          Contact
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          <form onSubmit={handleSubmit} className="rounded-2xl border border-white/40 bg-white/70 backdrop-blur p-6 shadow-sm">
            <div className="grid grid-cols-1 gap-4">
              <input required type="text" placeholder="Your name" className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0b1220]" />
              <input required type="email" placeholder="Email address" className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0b1220]" />
              <textarea required placeholder="Your message" rows={4} className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0b1220]" />
              <button type="submit" className="rounded-full bg-[#0b1220] text-white px-6 py-3 font-semibold hover:bg-[#0e1730] transition">Send Message</button>
              {status && <p className="text-green-600 text-sm">{status}</p>}
            </div>
          </form>

          <div className="rounded-2xl border border-white/40 bg-white/70 backdrop-blur p-6 shadow-sm">
            <div className="space-y-4">
              <a href="mailto:richojayandika@example.com" className="flex items-center gap-3 text-gray-800 hover:text-gray-900 transition">
                <Mail size={20} /> richojayandika@example.com
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-gray-800 hover:text-gray-900 transition">
                <Linkedin size={20} /> LinkedIn
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-gray-800 hover:text-gray-900 transition">
                <Instagram size={20} /> Instagram
              </a>
            </div>
            <p className="mt-6 text-gray-600 text-sm">Open to opportunities in digital marketing, e-commerce, and growth-focused roles.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
