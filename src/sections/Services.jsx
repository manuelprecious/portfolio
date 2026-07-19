import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PLACEHOLDER_IMG = "https://placehold.co/800x500/18181b/71717a?text=MODEL";

const SERVICES = [
  {
    num: "01",
    title: "Machine Learning",
    tag: "Machine Learning",
    image: PLACEHOLDER_IMG,
    desc: "Research focused on designing learning systems that improve how machines perceive, predict, and make decisions from complex data.",
    tools: ["PyTorch", "Scikit-learn", "MLflow"],
    capabilities: ["Predictive Modeling", "Representation Learning", "Time-Series & Sequential Learning"]
  },
  {
    num: "02",
    title: "Computer Vision",
    tag: "Computer Vision",
    image: PLACEHOLDER_IMG,
    desc: "Using perception, localization, segmentation, and multimodal reasoning to enable advanced computer vision systems.",
    tools: ["OpenCV", "PyTorch", "ONNX Runtime"],
    capabilities: ["Image Understanding", "Object Detection & Tracking", "Multimodal Vision Systems"]
  },
  {
    num: "03",
    title: "Autonomous Robotics",
    tag: "Autonomous Robotics",
    image: PLACEHOLDER_IMG,
    desc: "Reasoning, planning, and interaction in dynamic environments via advanced software and robotic control systems.",
    tools: ["ROS 2", "Python", "Docker"],
    capabilities: ["BioMimicry", "Path Planning", "Sensor Fusion & SLAM"]
  }
];

export default function Services() {
  const [activeTab, setActiveTab] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const scrollContainerRef = useRef(null);

  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScrollPosition();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollPosition);
      return () => container.removeEventListener('scroll', checkScrollPosition);
    }
  }, []);

  const handleTabClick = (index, event) => {
    setActiveTab(index);
    
    // Scroll the clicked tab into view on mobile
    if (window.innerWidth < 1024 && scrollContainerRef.current) {
      const tabElement = event.currentTarget;
      const container = scrollContainerRef.current;
      const tabRect = tabElement.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      
      // Calculate scroll position to center the tab
      const scrollLeft = container.scrollLeft + (tabRect.left - containerRect.left) - (containerRect.width / 2) + (tabRect.width / 2);
      
      container.scrollTo({
        left: scrollLeft,
        behavior: 'smooth'
      });
    }
  };

  const scrollTabs = (direction) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = direction === 'left' ? -200 : 200;
      container.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="research" 
      className="relative block clear-both z-10 pt-28 md:pt-32 pb-6 md:pb-8 bg-[#050505] w-full font-sans selection:bg-zinc-700 selection:text-white"
    >
      {/* Subtle Grid Overlay */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none select-none opacity-[0.15]"
        style={{
          maskImage: 'radial-gradient(circle at center, rgba(255,255,255,1) 20%, rgba(255,255,255,0.4) 60%, transparent 85%)',
          WebkitMaskImage: 'radial-gradient(circle at center, rgba(255,255,255,1) 20%, rgba(255,255,255,0.4) 60%, transparent 85%)'
        }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>

      {/* Ambient Glow Bleed */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[800px] bg-[radial-gradient(circle,rgba(255,149,0,0.25)_0%,rgba(255,149,0,0.1)_65%,transparent_100%)] blur-[140px] z-0 pointer-events-none select-none" />

      <div className="max-w-[1700px] mx-auto px-4 md:px-8 w-full flex flex-col gap-3 md:gap-4 relative z-10">
        
        {/* Header Block */}
        <div className="mb-8 md:mb-10 w-full">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white tracking-tight">
            Research & Engineering
          </h2>
          <p className="text-zinc-400 mt-4 md:mt-5 tracking-[0.25em] text-base font-normal">
            Core competencies // v2.0
          </p>
        </div>

        {/* Structural Matrix Split */}
        <div className="bg-[#0d0d0d] border border-zinc-800 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.5)] p-2 sm:p-3 lg:p-4 grid grid-cols-1 lg:grid-cols-12 gap-2 lg:gap-3 select-none w-full">
          
          {/* Left Side: Compact Navigation Links */}
          <div className="lg:col-span-3 relative w-full">
            
            {/* Top navigation bar with arrows */}
            <div className="lg:hidden flex items-center justify-between mb-2 px-1">
              <button 
                onClick={() => scrollTabs('left')}
                className={`p-1.5 bg-[#121212] border border-zinc-700 rounded-lg text-zinc-400 hover:text-white hover:border-zinc-600 transition-colors ${!canScrollLeft ? 'opacity-30 cursor-not-allowed' : ''}`}
                disabled={!canScrollLeft}
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button 
                onClick={() => scrollTabs('right')}
                className={`p-1.5 bg-[#121212] border border-zinc-700 rounded-lg text-zinc-400 hover:text-white hover:border-zinc-600 transition-colors ${!canScrollRight ? 'opacity-30 cursor-not-allowed' : ''}`}
                disabled={!canScrollRight}
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            
            <div 
              ref={scrollContainerRef}
              className="flex flex-row lg:flex-col gap-1.5 w-full overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0 scrollbar-none snap-x snap-mandatory pr-16 lg:pl-0 lg:pr-0 scroll-smooth"
            >
              {SERVICES.map((service, index) => (
                <button
                  key={service.num}
                  onClick={(e) => handleTabClick(index, e)}
                  className={`group relative flex items-center gap-4 text-left p-3 lg:p-4 transition-all duration-300 rounded-xl w-[82%] sm:w-[55%] lg:w-full shrink-0 snap-start outline-none border ${
                    activeTab === index 
                      ? 'bg-[#121212] border-zinc-700 shadow-sm' 
                      : 'border-transparent bg-[#080808] hover:bg-[#121212] hover:border-zinc-800'
                  }`}
                >
                  <div className={`w-3 h-3 rounded-full border transition-colors flex items-center justify-center shrink-0 ${activeTab === index ? 'border-[#ff9500] bg-[#ff9500]' : 'border-zinc-600 bg-transparent'}`}>
                    {activeTab === index && (
                      <div className="w-1.5 h-1.5 bg-white rounded-full" />
                    )}
                  </div>
                  
                  <div className="min-w-0 flex-1">
                    <span className={`block text-xs font-normal mb-0.5 uppercase tracking-wider transition-colors ${activeTab === index ? 'text-[#ff9500]' : 'text-zinc-500'}`}>
                      {service.num}
                    </span>
                    <h3 className={`text-lg font-normal tracking-tight transition-colors truncate ${activeTab === index ? 'text-white' : 'text-zinc-400'}`}>
                      {service.title}
                    </h3>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right Side: Showcase Terminal Expanded */}
          <div className="lg:col-span-9 w-full min-w-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="w-full bg-[#080808] border border-zinc-800 rounded-2xl shadow-lg overflow-hidden"
              >
                {/* Terminal Header Bar */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800 bg-[#121212]">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#ff9500] animate-pulse" />
                    <span className="text-sm font-normal text-zinc-400 uppercase tracking-wider">
                      MODULE_{SERVICES[activeTab].num}.json
                    </span>
                  </div>
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-zinc-700" />
                    <div className="w-2 h-2 rounded-full bg-zinc-700" />
                  </div>
                </div>

                <div className="p-4 lg:p-5 grid grid-cols-1 xl:grid-cols-12 gap-4 lg:gap-5 items-start">
                  
                  {/* Left inner side: Panoramic Image Frame */}
                  <div className="xl:col-span-7 relative w-full aspect-video bg-black border border-zinc-800 rounded-xl overflow-hidden group shadow-sm">
                    <img 
                      src={SERVICES[activeTab].image} 
                      alt={SERVICES[activeTab].title}
                      className="w-full h-full object-cover object-center select-none transition-transform duration-700 group-hover:scale-105 opacity-80"
                    />
                    <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black via-black/40 to-transparent flex items-center justify-start pointer-events-none">
                      <span className="px-3 py-1.5 bg-[#121212] backdrop-blur-md text-white text-sm font-normal uppercase tracking-wider border border-zinc-700 rounded-lg shadow-sm">
                        {SERVICES[activeTab].tag}
                      </span>
                    </div>
                  </div>

                  {/* Right inner side: Wide Text Details Engine */}
                  <div className="xl:col-span-5 flex flex-col gap-5 justify-between min-h-full">
                    
                    {/* Description Module */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="w-2 h-2 bg-[#ff9500] rounded-full animate-pulse" />
                        <h4 className="text-zinc-400 uppercase font-normal text-sm tracking-wider">
                          System Module // 0{SERVICES[activeTab].num}
                        </h4>
                      </div>
                      <p className="text-zinc-300 text-lg leading-relaxed font-normal">
                        {SERVICES[activeTab].desc}
                      </p>
                    </div>

                    {/* Capabilities Cluster */}
                    <div className="border-t border-zinc-800 pt-4">
                      <h5 className="text-sm font-normal text-zinc-400 uppercase tracking-wider mb-3">
                        Core Scope
                      </h5>
                      <ul className="space-y-2.5">
                        {SERVICES[activeTab].capabilities.map((capability, i) => (
                          <li key={i} className="text-lg text-white font-normal pl-3 border-l-2 border-[#ff9500]">
                            {capability}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Production Pipeline Stack */}
                    <div className="border-t border-zinc-800 pt-4">
                      <h5 className="text-sm font-normal text-zinc-400 uppercase tracking-wider mb-3">
                        Production Pipeline
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {SERVICES[activeTab].tools.map((tool, i) => (
                          <span 
                            key={i} 
                            className="px-3 py-1.5 bg-[#121212] border border-zinc-800 text-zinc-300 text-base font-normal rounded-lg transition-colors hover:border-zinc-600 hover:text-white cursor-default"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>

                </div>
              </motion.div>
            </AnimatePresence>

            {/* Bottom Stats & CTA Bar */}
            <div className="mt-4 pt-4 border-t border-zinc-800">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
                <div className="flex items-center gap-4 p-4 bg-[#080808] border border-zinc-800 rounded-xl shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-[#121212] border border-zinc-800 flex items-center justify-center">
                    <span className="text-2xl font-normal text-white">5+</span>
                  </div>
                  <div>
                    <p className="text-xs font-normal text-zinc-400 uppercase tracking-wider">Years Active</p>
                    <p className="text-base font-normal text-zinc-300">Research & Development</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-[#080808] border border-zinc-800 rounded-xl shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-[#121212] border border-zinc-800 flex items-center justify-center">
                    <span className="text-2xl font-normal text-white">50+</span>
                  </div>
                  <div>
                    <p className="text-xs font-normal text-zinc-400 uppercase tracking-wider">Models Deployed</p>
                    <p className="text-base font-normal text-zinc-300">Production Systems</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-[#080808] border border-zinc-800 rounded-xl shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-[#121212] border border-zinc-800 flex items-center justify-center">
                    <span className="text-2xl font-normal text-white">12</span>
                  </div>
                  <div>
                    <p className="text-xs font-normal text-zinc-400 uppercase tracking-wider">Active Projects</p>
                    <p className="text-base font-normal text-zinc-300">In Development</p>
                  </div>
                </div>
              </div>
              
              {/* CTA to Projects */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 bg-[#121212] border border-zinc-800 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#ff9500] animate-pulse" />
                  <p className="text-base text-zinc-400 font-normal">
                    Want to see these systems in action?
                  </p>
                </div>
                <button 
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-6 py-3 bg-white text-black text-base font-normal tracking-wider rounded-xl hover:bg-zinc-200 transition-all duration-150 flex items-center gap-2 shadow-lg"
                >
                  View Deployed Models
                  <span className="text-black transition-transform duration-150">→</span>
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Background Extender to prevent gaps at the bottom */}
      <div className="absolute left-0 right-0 bottom-0 h-[100vh] bg-[#050505] -z-10 pointer-events-none"></div>
    </section>
  );
}