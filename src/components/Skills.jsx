import React from 'react';
import { motion } from 'framer-motion';
import { Code, Rocket, BarChart3, Globe, Megaphone, ShoppingBag } from 'lucide-react';

const skills = [
  { icon: Code, title: 'Web Development', items: ['HTML', 'CSS/Tailwind', 'JavaScript', 'React'] },
  { icon: BarChart3, title: 'SEO & Analytics', items: ['On-Page SEO', 'Keyword Research', 'Google Analytics', 'Search Console'] },
  { icon: Megaphone, title: 'Performance Marketing', items: ['Facebook Ads', 'Instagram Ads', 'TikTok Ads', 'A/B Testing'] },
  { icon: ShoppingBag, title: 'E-Commerce Ops', items: ['Shopify', 'Storefront UX', 'Conversion Optimization', 'Email Marketing'] },
  { icon: Globe, title: 'Content & Social', items: ['Content Strategy', 'Social Media', 'Branding', 'Copywriting'] },
  { icon: Rocket, title: 'Growth Mindset', items: ['Data-Driven', 'Creative', 'Problem Solving', 'Collaboration'] },
];

const Card = ({ icon: Icon, title, items }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5 }}
    className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
  >
    <div className="flex items-center gap-3">
      <div className="rounded-xl bg-gray-900 text-white p-3">
        <Icon size={22} />
      </div>
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
    </div>
    <ul className="mt-4 space-y-1 text-gray-700">
      {items.map((item) => (
        <li key={item} className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-gray-900 inline-block" />
          {item}
        </li>
      ))}
    </ul>
  </motion.div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="mx-auto w-full max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-900"
        >
          Skills
        </motion.h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((s) => (
            <Card key={s.title} icon={s.icon} title={s.title} items={s.items} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
