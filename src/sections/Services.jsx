import { useState } from 'react';
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

  return (
    <section 
      id="research" 
      className="relative block clear-both z-10 pt-24 lg:pt-32 pb-16 lg:pb-24 bg-[#050505] w-full border-t border-zinc-900/60 snap-start"
    >
      {/* Subtle Grid Overlay */}
      <div 
        className="absolute inset-x-0 top-0 h-[30vh] z-0 pointer-events-none select-none opacity-[0.25]"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
        }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>

      {/* Ambient Glow Bleed */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[800px] bg-[radial-gradient(circle,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0.01)_65%,transparent_100%)] blur-[140px] z-0 pointer-events-none select-none" />

      <div className="max-w-[1800px] mx-auto px-6 lg:px-16 w-full flex flex-col gap-10 lg:gap-14 relative z-10">
        
        {/* Header Block */}
        <div className="w-full border-b border-zinc-800/60 pb-5">
          <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
            Research & Engineering
          </h2>
        </div>

        {/* Structural Matrix Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start w-full">
          
          {/* Left Side: Compact Navigation Links */}
          <div className="lg:col-span-3 relative w-full">
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#050505] to-transparent pointer-events-none z-20 lg:hidden" />
            
            <div className="flex flex-row lg:flex-col gap-3 w-full overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 scrollbar-none snap-x snap-mandatory pr-10 lg:pr-0">
              {SERVICES.map((service, index) => (
                <button
                  key={service.num}
                  onClick={() => setActiveTab(index)}
                  className={`group relative flex items-center gap-5 text-left p-5 lg:p-6 transition-all duration-300 border-l-2 rounded-r-md w-[82%] sm:w-[55%] lg:w-full shrink-0 snap-start outline-none ${
                    activeTab === index 
                      ? 'border-white bg-white/[0.03] shadow-[0_0_20px_rgba(255,255,255,0.15)]' 
                      : 'border-zinc-800 bg-transparent hover:border-zinc-700 hover:bg-white/[0.01]'
                  }`}
                >
                  <div className={`w-4 h-4 rounded-full border transition-colors flex items-center justify-center shrink-0 ${activeTab === index ? 'border-white shadow-[0_0_10px_rgba(255,255,255,0.8)]' : 'border-zinc-800 group-hover:border-zinc-600'}`}>
                    {activeTab === index && (
                      <div className="w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,1)]" />
                    )}
                  </div>
                  
                  <div className="min-w-0 flex-1">
                    <span className={`block text-[11px] font-mono mb-0.5 uppercase tracking-widest transition-colors ${activeTab === index ? 'text-zinc-300' : 'text-zinc-600'}`}>
                      {service.num}
                    </span>
                    <h3 className={`text-lg lg:text-xl font-black uppercase tracking-tight transition-colors truncate ${activeTab === index ? 'text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]' : 'text-zinc-500 group-hover:text-zinc-300'}`}>
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
                className="w-full bg-[#0d0d0d] border border-zinc-700 rounded-2xl shadow-[0_0_40px_rgba(255,255,200,0.15),0_8px_30px_rgba(0,0,0,0.5)] overflow-hidden"
              >
                {/* Terminal Header Bar */}
                <div className="flex items-center justify-between px-5 py-3 border-b border-zinc-800 bg-[#121212]">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
                    <span className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-widest">
                      MODULE_{SERVICES[activeTab].num}.json
                    </span>
                  </div>
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-zinc-700" />
                    <div className="w-2 h-2 rounded-full bg-zinc-700" />
                  </div>
                </div>

                <div className="p-6 lg:p-8 grid grid-cols-1 xl:grid-cols-12 gap-8 lg:gap-10 items-start">
                  
                  {/* Left inner side: Panoramic Image Frame */}
                  <div className="xl:col-span-7 relative w-full aspect-video bg-black border border-zinc-700 rounded-lg overflow-hidden group shadow-[0_0_30px_rgba(255,255,200,0.1)]">
                    <img 
                      src={SERVICES[activeTab].image} 
                      alt={SERVICES[activeTab].title}
                      className="w-full h-full object-cover object-center select-none transition-transform duration-700 group-hover:scale-105 opacity-80"
                    />
                    <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black via-black/40 to-transparent flex items-center justify-start pointer-events-none">
                      <span className="px-3.5 py-1.5 bg-black/80 backdrop-blur-md text-white text-[11px] font-mono font-bold uppercase tracking-widest border border-zinc-600 rounded-sm shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                        {SERVICES[activeTab].tag}
                      </span>
                    </div>
                  </div>

                  {/* Right inner side: Wide Text Details Engine */}
                  <div className="xl:col-span-5 flex flex-col gap-6 justify-between min-h-full">
                    
                    {/* Description Module */}
                    <div>
                      <div className="flex items-center gap-2 mb-2.5">
                        <span className="w-2 h-2 bg-white rounded-full animate-pulse shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
                        <h4 className="text-zinc-500 uppercase font-bold text-[11px] font-mono tracking-widest">
                          System Module // 0{SERVICES[activeTab].num}
                        </h4>
                      </div>
                      <p className="text-zinc-300 text-sm lg:text-base leading-relaxed font-medium">
                        {SERVICES[activeTab].desc}
                      </p>
                    </div>

                    {/* Capabilities Cluster */}
                    <div className="border-t border-zinc-800/80 pt-5">
                      <h5 className="text-[11px] font-mono font-bold text-zinc-500 uppercase tracking-widest mb-3">
                        Core Scope
                      </h5>
                      <ul className="space-y-2.5">
                        {SERVICES[activeTab].capabilities.map((capability, i) => (
                          <li key={i} className="text-xs lg:text-sm text-zinc-200 font-medium flex items-center gap-2.5">
                            <span className="w-1.5 h-1.5 bg-white/40 rounded-full shrink-0 shadow-[0_0_5px_rgba(255,255,255,0.5)]" />
                            {capability}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Production Pipeline Stack */}
                    <div className="border-t border-zinc-800/80 pt-5">
                      <h5 className="text-[11px] font-mono font-bold text-zinc-500 uppercase tracking-widest mb-3">
                        Production Pipeline
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {SERVICES[activeTab].tools.map((tool, i) => (
                          <span 
                            key={i} 
                            className="px-3 py-1.5 bg-[#080808] border border-zinc-700 text-zinc-300 text-[11px] font-mono rounded font-medium tracking-wide transition-colors hover:border-zinc-500 hover:text-white hover:shadow-[0_0_10px_rgba(255,255,200,0.3)] cursor-default"
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
            <div className="mt-8 pt-8 border-t border-zinc-900/60">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center gap-4 p-4 bg-[#080808] border border-zinc-800 rounded-lg shadow-[0_0_20px_rgba(255,255,200,0.08)] hover:shadow-[0_0_25px_rgba(255,255,200,0.15)] transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                    <span className="text-2xl font-black text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">5+</span>
                  </div>
                  <div>
                    <p className="text-xs font-mono text-zinc-500 uppercase tracking-wider">Years Active</p>
                    <p className="text-sm font-semibold text-zinc-300">Research & Development</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-[#080808] border border-zinc-800 rounded-lg shadow-[0_0_20px_rgba(255,255,200,0.08)] hover:shadow-[0_0_25px_rgba(255,255,200,0.15)] transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                    <span className="text-2xl font-black text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">50+</span>
                  </div>
                  <div>
                    <p className="text-xs font-mono text-zinc-500 uppercase tracking-wider">Models Deployed</p>
                    <p className="text-sm font-semibold text-zinc-300">Production Systems</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-[#080808] border border-zinc-800 rounded-lg shadow-[0_0_20px_rgba(255,255,200,0.08)] hover:shadow-[0_0_25px_rgba(255,255,200,0.15)] transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                    <span className="text-2xl font-black text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">12</span>
                  </div>
                  <div>
                    <p className="text-xs font-mono text-zinc-500 uppercase tracking-wider">Active Projects</p>
                    <p className="text-sm font-semibold text-zinc-300">In Development</p>
                  </div>
                </div>
              </div>
              
              {/* CTA to Projects */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 bg-gradient-to-r from-zinc-900/50 to-transparent border border-zinc-800 rounded-xl shadow-[0_0_30px_rgba(255,255,200,0.1)]">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
                  <p className="text-sm text-zinc-400">
                    Want to see these systems in action?
                  </p>
                </div>
                <button 
                  onClick={() => document.getElementById('portfolio-projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-6 py-2.5 bg-white text-black text-xs font-mono font-bold uppercase tracking-wider rounded-lg hover:bg-zinc-200 transition-all duration-200 flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
                >
                  View Deployed Models
                  <span className="text-black group-hover:translate-x-0.5 transition-transform duration-150">→</span>
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}