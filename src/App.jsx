import { useEffect, useRef } from 'react';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import ProjectGrid from './sections/ProjectGrid';
import Services from './sections/Services';
import Contact from './sections/Contact'; 

export default function App() {
  const containerRef = useRef(null);
  const isScrolling = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let currentSectionIndex = 0;
    const sections = container.querySelectorAll('.snap-section');

    const syncSectionIndex = () => {
      if (isScrolling.current) return;
      
      const scrollTop = container.scrollTop;
      let closestIndex = 0;
      let minDistance = Math.abs(sections[0].offsetTop - scrollTop);

      sections.forEach((section, index) => {
        const distance = Math.abs(section.offsetTop - scrollTop);
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      });
      currentSectionIndex = closestIndex;
    };

    const handleWheel = (e) => {
      if (window.innerWidth < 1024 || window.innerHeight < 780) return;

      e.preventDefault();
      if (isScrolling.current) return;

      if (e.deltaY > 0) {
        if (currentSectionIndex < sections.length - 1) currentSectionIndex++;
      } else {
        if (currentSectionIndex > 0) currentSectionIndex--;
      }

      const targetSection = sections[currentSectionIndex];
      if (targetSection) {
        isScrolling.current = true;
        
        container.scrollTo({
          top: targetSection.offsetTop,
          behavior: 'smooth'
        });

        setTimeout(() => {
          isScrolling.current = false;
        }, 800);
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    container.addEventListener('scroll', syncSectionIndex);

    return () => {
      container.removeEventListener('wheel', handleWheel);
      container.removeEventListener('scroll', syncSectionIndex);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-zinc-100 antialiased selection:bg-white selection:text-black lg:short:h-auto lg:h-screen lg:overflow-hidden relative flex flex-col overflow-x-hidden">
      
      {/* 1. Minimal Navigation Header */}
      <Navbar />

      {/* 2. Main scrollable area */}
      <main ref={containerRef} className="relative flex-1 overflow-y-auto overflow-x-hidden scrollbar-none scroll-smooth">
        
        {/* 2. Hook section */}
        <div id="hero" className="snap-section w-full h-full flex flex-col justify-center overflow-x-hidden">
          <Hero />
        </div>
        
        {/* 3. Projects grid */}
        <div id="portfolio-projects" className="snap-section w-full h-full overflow-x-hidden">
          <ProjectGrid />
        </div>
        
        {/* 4. Services */}
        <div id="services" className="snap-section w-full h-full overflow-x-hidden">
          <Services />
        </div>

        {/* 5. Contact CTA */}
        <div id="contact" className="snap-section w-full h-full overflow-x-hidden">
          <Contact />
        </div>

      </main>
    </div>
  );
}