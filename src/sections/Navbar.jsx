import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Button from '../components/Button';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Portfolio', href: '#portfolio-projects' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' }
  ];

  // Function to handle smooth scrolling to the contact section
  const scrollToContact = () => {
    const section = document.getElementById('contact');
    section?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false); // Close menu if open
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="border-b border-zinc-900/80 sticky top-0 bg-[#0A0A0A]/80 backdrop-blur-md z-50"
    >
      <div className="px-6 py-4 max-w-7xl mx-auto flex justify-between items-center relative z-20">
        
        {/* Stylized Typographic Logo */}
        <a href="/" className="flex items-baseline gap-1.5 select-none group">
          <span className="text-lg font-black tracking-tighter uppercase text-white transition-colors">
            Manuel
          </span>
          <span className="text-xl font-serif italic text-zinc-400 group-hover:text-white transition-colors">
            Precious
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-xs font-bold uppercase tracking-widest text-zinc-400">
          {navItems.map((item) => (
            <a 
              key={item.name}
              href={item.href} 
              className="hover:text-white transition-colors relative group py-1"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 ease-out group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-5">
          
          {/* Availability Badge */}
          <div className="hidden sm:flex items-center gap-2.5 text-[10px] text-zinc-300 font-bold uppercase tracking-widest border border-zinc-800 bg-[#121212] px-3.5 py-1.5 rounded-full shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Available — 2026
          </div>

          {/* CTA Button (Desktop) - Updated with onClick */}
          <div className="hidden md:block">
             <Button onClick={scrollToContact}>Let's Talk</Button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 z-50 group"
          >
            <motion.span 
              animate={isMobileMenuOpen ? { rotate: 45, y: 7.5 } : { rotate: 0, y: 0 }}
              className="w-5 h-[1.5px] bg-zinc-400 group-hover:bg-white transition-colors origin-center"
            />
            <motion.span 
              animate={isMobileMenuOpen ? { rotate: -45, y: -7.5 } : { rotate: 0, y: 0 }}
              className="w-5 h-[1.5px] bg-zinc-400 group-hover:bg-white transition-colors origin-center"
            />
          </button>
          
        </div>
      </div>

      {/* Mobile Menu Dropdown Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-full left-0 w-full bg-[#0A0A0A] border-b border-zinc-900 md:hidden overflow-hidden z-10"
          >
            <div className="flex flex-col px-6 pt-12 pb-8 gap-8">
              <nav className="flex flex-col gap-6 text-2xl font-black uppercase tracking-tighter text-zinc-400">
                {navItems.map((item, i) => (
                  <motion.a 
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 + 0.2 }}
                    href={item.href} 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="hover:text-white transition-colors"
                  >
                    {item.name}
                  </motion.a>
                ))}
              </nav>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="pt-8 border-t border-zinc-900"
              >
                <Button className="w-full justify-center" onClick={scrollToContact}>
                  Let's Talk
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}