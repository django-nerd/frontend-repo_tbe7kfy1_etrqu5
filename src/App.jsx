import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  return (
    <div className="font-inter text-gray-900 antialiased bg-white">
      {/* Header with subtle Arctic Flow gradient */}
      <header className="fixed top-0 left-0 right-0 z-40 border-b border-white/30 bg-[linear-gradient(90deg,#0b1220_0%,#163060_50%,#4f86c6_100%)] text-white">
        <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <a href="#home" className="text-sm font-bold tracking-tight">RJ</a>
          <nav className="hidden md:flex items-center gap-6 text-sm/relaxed opacity-90">
            <a href="#about" className="hover:opacity-100 transition">About</a>
            <a href="#skills" className="hover:opacity-100 transition">Skills</a>
            <a href="#portfolio" className="hover:opacity-100 transition">Portfolio</a>
            <a href="#contact" className="hover:opacity-100 transition">Contact</a>
          </nav>
          <a href="#contact" className="rounded-full bg-white text-[#0b1220] px-4 py-2 text-sm font-semibold shadow-sm hover:bg-slate-100 transition">Hire Me</a>
        </div>
      </header>

      <main className="pt-16">
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
      </main>

      <footer className="py-8 text-center text-sm text-gray-600 bg-[linear-gradient(90deg,#eaf3ff_0%,#f7fbff_100%)] border-t border-white/50">
        © {new Date().getFullYear()} Richo Jayandika. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
