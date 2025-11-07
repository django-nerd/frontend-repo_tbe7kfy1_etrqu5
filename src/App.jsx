import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b1220] text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-gradient-to-b from-[#0b1220]/85 to-transparent backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="font-semibold">Richo Jayandika</a>
          <nav className="hidden gap-6 text-sm sm:flex">
            <a href="#about" className="text-white/80 hover:text-white">About</a>
            <a href="#skills" className="text-white/80 hover:text-white">Skills</a>
            <a href="#contact" className="text-white/80 hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      {/* Sections */}
      <main id="home">
        <Hero />
        <About />
        <Skills />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="mt-16 bg-gradient-to-t from-[#0b1220] via-[#163060] to-transparent py-10 text-center text-white/70">
        <p className="text-sm">© {new Date().getFullYear()} Richo Jayandika. All rights reserved.</p>
      </footer>
    </div>
  );
}
