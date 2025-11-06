import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  return (
    <div className="font-inter text-gray-900 antialiased">
      <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b border-gray-100">
        <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <a href="#home" className="text-sm font-bold tracking-tight">RJ</a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
            <a href="#about" className="hover:text-gray-900">About</a>
            <a href="#skills" className="hover:text-gray-900">Skills</a>
            <a href="#portfolio" className="hover:text-gray-900">Portfolio</a>
            <a href="#contact" className="hover:text-gray-900">Contact</a>
          </nav>
          <a href="#contact" className="rounded-full bg-gray-900 text-white px-4 py-2 text-sm font-semibold">Hire Me</a>
        </div>
      </header>

      <main className="pt-16">
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
      </main>

      <footer className="py-8 text-center text-sm text-gray-500 bg-white border-t border-gray-100">
        © {new Date().getFullYear()} Richo Jayandika. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
