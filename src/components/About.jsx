import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative w-full bg-gradient-to-b from-[#e9f3ff] to-white py-20">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#e9f3ff] via-white/40 to-[#edf4ff]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold text-[#0b1220] sm:text-4xl"
        >
          About Richo
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 max-w-3xl text-base leading-relaxed text-[#163060]/90"
        >
          With a strong foundation in Software Engineering and hands-on experience in Digital Marketing & E‑Commerce, I merge technical execution with growth strategy. My focus is building user-centric products, high-converting funnels, and data-driven campaigns.
        </motion.p>
      </div>
    </section>
  );
}
