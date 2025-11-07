import { Mail, Linkedin, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="relative w-full bg-gradient-to-b from-[#edf4ff] via-[#e9f3ff] to-white py-20">
      <div className="relative mx-auto max-w-5xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold text-[#0b1220] sm:text-4xl"
        >
          Get in touch
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-8 rounded-2xl border border-[#4f86c6]/20 bg-white/60 p-6 shadow-sm backdrop-blur-md"
        >
          <form className="grid grid-cols-1 gap-4 sm:grid-cols-2" onSubmit={(e) => e.preventDefault()}>
            <label className="block">
              <span className="sr-only">Name</span>
              <input
                type="text"
                placeholder="Your name"
                className="w-full rounded-xl border border-black/10 bg-white/80 px-4 py-3 text-sm outline-none placeholder:text-black/50 focus:ring-2 focus:ring-[#4f86c6]"
              />
            </label>
            <label className="block">
              <span className="sr-only">Email</span>
              <input
                type="email"
                placeholder="Email address"
                className="w-full rounded-xl border border-black/10 bg-white/80 px-4 py-3 text-sm outline-none placeholder:text-black/50 focus:ring-2 focus:ring-[#4f86c6]"
              />
            </label>
            <label className="block sm:col-span-2">
              <span className="sr-only">Message</span>
              <textarea
                placeholder="Tell me about your project..."
                rows={4}
                className="w-full rounded-xl border border-black/10 bg-white/80 px-4 py-3 text-sm outline-none placeholder:text-black/50 focus:ring-2 focus:ring-[#4f86c6]"
              />
            </label>
            <div className="sm:col-span-2">
              <button
                type="submit"
                className="w-full rounded-xl bg-gradient-to-r from-[#4f86c6] to-[#163060] px-5 py-3 text-sm font-medium text-white shadow-lg shadow-black/20 transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-[#4f86c6]/60"
              >
                Send Message
              </button>
            </div>
          </form>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1.5 text-sm text-[#0b1220] ring-1 ring-black/10">
              <Mail size={16} /> Email
            </a>
            <a href="#" className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1.5 text-sm text-[#0b1220] ring-1 ring-black/10">
              <Linkedin size={16} /> LinkedIn
            </a>
            <a href="#" className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1.5 text-sm text-[#0b1220] ring-1 ring-black/10">
              <Instagram size={16} /> Instagram
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
