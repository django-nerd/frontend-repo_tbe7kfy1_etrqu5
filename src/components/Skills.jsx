import { Code, BarChart3, Megaphone, ShoppingBag, Globe, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const skills = [
  {
    icon: Code,
    title: 'Web Engineering',
    desc: 'React, Next.js, Node, REST — building robust, scalable web apps with clean architectures.',
  },
  {
    icon: BarChart3,
    title: 'Analytics & CRO',
    desc: 'GA4, Looker, A/B testing — turning insights into meaningful conversion lifts.',
  },
  { icon: Megaphone, title: 'Performance Marketing', desc: 'Meta, Google, TikTok — full-funnel campaigns, creative testing, and ROAS focus.' },
  { icon: ShoppingBag, title: 'E‑Commerce', desc: 'Shopify/WA flows, catalog ops, and automation for growth-ready stores.' },
  { icon: Globe, title: 'SEO & Content', desc: 'Technical SEO, content systems, and modern publishing workflows.' },
  { icon: Rocket, title: 'Go‑to‑Market', desc: 'Positioning, messaging, and launches that resonate with target users.' },
];

export default function Skills() {
  return (
    <section id="skills" className="relative w-full bg-gradient-to-b from-white via-[#e9f3ff] to-[#edf4ff] py-20">
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold text-[#0b1220] sm:text-4xl"
        >
          Skills & Focus
        </motion.h2>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="rounded-2xl border border-white/60 bg-gradient-to-b from-[#e6f0ff] to-white p-6 shadow-sm shadow-[#0b1220]/5"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#0b1220] text-white shadow-md shadow-black/20">
                    <Icon size={20} />
                  </span>
                  <h3 className="text-lg font-semibold text-[#0b1220]">{s.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-[#163060]/90">{s.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
