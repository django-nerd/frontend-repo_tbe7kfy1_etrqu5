import { motion } from 'framer-motion';

const HERO_BG = "https://cdn.dribbble.com/userupload/16537236/file/original-3c9baf8044faac370974ead6e9a41217.jpg?resize=1504x1003&vertical=center";

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden bg-[#0b1220]">
      {/* Background cover image */}
      <div className="absolute inset-0">
        <img
          src={HERO_BG}
          alt="Blue to purple mottled gradient tech background"
          className="h-full w-full object-cover"
          loading="eager"
          decoding="async"
        />
      </div>

      {/* Arctic Flow gradient overlay (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#0b1220]/70 via-[#163060]/60 to-[#4f86c6]/50" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b1220]/70 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center justify-center px-6 py-24 text-center text-white">
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-4 inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-sm backdrop-blur-md ring-1 ring-white/15"
        >
          Richo Jayandika · Software Engineering × Digital Marketing
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.05 }}
          className="text-balance text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl"
        >
          Building modern experiences at the intersection of code and commerce
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.12 }}
          className="mt-5 max-w-2xl text-pretty text-base text-white/85 sm:text-lg"
        >
          I craft performant web apps and data‑driven growth campaigns for brands in the digital economy.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.18 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#portfolio"
            className="rounded-xl bg-gradient-to-r from-[#4f86c6] to-[#163060] px-5 py-3 text-sm font-medium text-white shadow-lg shadow-black/20 transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-white/40"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="rounded-xl border border-white/25 bg-white/10 px-5 py-3 text-sm font-medium text-white backdrop-blur-md transition hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/40"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
