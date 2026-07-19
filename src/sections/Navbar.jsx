import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../components/Button';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('#projects');

  const navItems = [
    { id: '01', name: 'Projects', href: '#projects' },
    { id: '02', name: 'Research', href: '#research' },
    { id: '03', name: 'Contact', href: '#contact' }
  ];

  const scrollToContact = () => {
    const section = document.getElementById('contact');
    section?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  // Handle header background contrast change on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll Spy: Dynamic section highlight tracking
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px',
      threshold: 0
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(`#${entry.target.id}`);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    navItems.forEach((item) => {
      const id = item.href.replace('#', '');
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#0A0A0A]/95 backdrop-blur-xl border-b border-zinc-800' 
          : 'bg-[#0A0A0A]/80 backdrop-blur-md border-b border-zinc-900/80'
      }`}
    >
      <div className="px-6 py-4 max-w-7xl mx-auto flex justify-between items-center relative z-20">
        
        {/* Logo - Icon + Text like Cursor */}
        <a href="/" className="flex items-center gap-3 select-none group">
          <img 
            src="/macsterlin.png" 
            alt="" 
            className="h-9 w-9 object-contain"
            aria-hidden="true"
          />
          <span className="text-lg font-black tracking-tighter uppercase text-white leading-none">
            Mac Sterlin
          </span>
        </a>

        {/* Desktop Navigation (lg and up) */}
        <nav className="hidden lg:flex items-center space-x-8 text-xs font-bold uppercase tracking-widest text-zinc-400">
          {navItems.map((item) => {
            const isActive = activeSection === item.href;
            return (
              <a 
                key={item.name}
                href={item.href} 
                className={`relative group py-1 transition-colors ${isActive ? 'text-white' : 'hover:text-white'}`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-0 h-[1px] bg-white transition-all duration-300 ease-out ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </a>
            );
          })}
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-5">
          
          {/* Availability Badge (Visible on md and up) */}
          <div className="hidden md:flex items-center gap-2.5 text-[10px] text-zinc-300 font-bold uppercase tracking-widest border border-zinc-800 bg-zinc-900/50 px-3.5 py-1.5 rounded-full shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff9500] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff9500]"></span>
            </span>
            Research Ongoing
          </div>

          {/* Partner With Us Button (Desktop Only) */}
          <div className="hidden lg:block">
             <Button onClick={scrollToContact}>Partner With Us</Button>
          </div>

          {/* Mobile & Tablet Hamburger Button (lg:hidden) */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 z-50 relative rounded-full bg-zinc-900/40 border border-zinc-800/60 hover:bg-zinc-800 transition-colors"
            aria-label="Toggle Menu"
          >
            <motion.span 
              animate={isMobileMenuOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
              className="w-5 h-[1.5px] bg-white origin-center"
            />
            <motion.span 
              animate={isMobileMenuOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
              className="w-5 h-[1.5px] bg-white origin-center"
            />
          </button>
          
        </div>
      </div>

      {/* Full-Screen Mobile & Tablet Menu Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 h-screen w-screen z-40 bg-[#0A0A0A] px-6 pt-28 pb-12 lg:hidden flex flex-col justify-start overflow-y-auto"
          >
            {/* Explicit Close Button inside the menu */}
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-5 right-6 p-2 text-zinc-400 hover:text-white transition-colors z-50"
              aria-label="Close menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Status Indicator inside menu drawer */}
            <div className="mb-6 flex items-center gap-2 bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-xl font-mono text-[10px] tracking-wider text-zinc-300 font-bold uppercase select-none shadow-sm self-start">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff9500] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff9500]"></span>
              </span>
              Research Ongoing
            </div>

            {/* Dynamic Navigation Stack Links */}
            <nav className="flex flex-col gap-2 mb-8 w-full">
              {navItems.map((item) => {
                const isActive = activeSection === item.href;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`py-4 px-5 rounded-xl font-mono text-base font-bold tracking-wide transition-all block w-full text-left ${
                      isActive
                        ? 'bg-zinc-900 text-white border-l-4 border-zinc-700'
                        : 'text-zinc-500 hover:text-zinc-200 hover:bg-zinc-900/50'
                    }`}
                  >
                    <span className="text-zinc-600 mr-2">{item.id}</span>
                    {item.name}
                  </a>
                );
              })}
            </nav>
            
            {/* Mobile Action Button (Pushed to bottom) */}
            <div className="mt-auto w-full">
              <button 
                onClick={scrollToContact}
                className="w-full py-4 rounded-xl bg-white text-black font-mono text-base font-bold tracking-wide flex items-center justify-center gap-2 border border-white shadow-md shadow-white/10 hover:bg-zinc-200 transition-colors select-none cursor-pointer"
              >
                Partner With Us
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}