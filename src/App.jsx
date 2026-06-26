import { useEffect, useRef } from 'react';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import ProjectGrid from './sections/ProjectGrid';
import Services from './sections/Services';
import Footer from './sections/Footer';

export default function App() {
  const containerRef = useRef(null);
  const isScrolling = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let currentSectionIndex = 0;
    // This grabs the immediate top-level sections you want to step through
    const sections = container.querySelectorAll('.snap-section');

    // FIX: Updates the internal JS index if an external click or link moves the container
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
      // Stop standard instant browser jump
      e.preventDefault();
      
      if (isScrolling.current) return;

      // Determine directional step based on trackpad / mousewheel velocity
      if (e.deltaY > 0) {
        if (currentSectionIndex < sections.length - 1) currentSectionIndex++;
      } else {
        if (currentSectionIndex > 0) currentSectionIndex--;
      }

      const targetSection = sections[currentSectionIndex];
      if (targetSection) {
        isScrolling.current = true;
        
        // Custom animated scroll interpolation
        container.scrollTo({
          top: targetSection.offsetTop,
          behavior: 'smooth' // Controlled by the browser's hardware-accelerated smooth rendering loop
        });

        // Timeout acts as a debounce/cooldown tracker to match the physical duration of the scroll glide
        setTimeout(() => {
          isScrolling.current = false;
        }, 800); // 👈 TUNING KNOB: Change this ms duration to match your perfect velocity feel!
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
    <div className="min-h-screen bg-[#0A0A0A] text-zinc-100 antialiased selection:bg-white selection:text-black h-screen overflow-hidden relative">
      {/* 1. Minimal Navigation Header */}
      <Navbar />

      {/* Main Content Assembly Container - Managed smoothly via JS scroll intercept */}
      {/* Added 'scroll-smooth' here so your Navbar click animations actually glide instead of jumping */}
      <main ref={containerRef} className="h-full overflow-y-auto scrollbar-none scroll-smooth">
        
        {/* 2. Hook section holding desktop/mobile showreels */}
        <div id="hero" className="snap-section w-full h-screen">
          <Hero />
        </div>
        
        {/* 3. The asymmetric grid mapping out the projects */}
        <div id="portfolio-projects" className="snap-section w-full h-screen">
          <ProjectGrid />
        </div>
        
        {/* 4. Technical services with micro-loop text backgrounds */}
        <div id="services" className="snap-section w-full h-screen">
          <Services />
        </div>

        {/* 5. Contact CTA section with the final midnight loop */}
        <div id="contact" className="snap-section w-full h-screen">
          <Footer />
        </div>

      </main>
    </div>
  );
}