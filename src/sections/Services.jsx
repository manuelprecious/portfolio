import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Import images from assets/images using the exact filenames from your tree
import VideoEditingImg from '../assets/images/Efficient-Video-Editing-Workflow.webp';
import MotionDesignImg from '../assets/images/Motion Design.jpg';
import AudioPostImg from '../assets/images/Audio Post production.jpg';

const SERVICES = [
  {
    num: "01",
    title: "Video Editing",
    tag: "Narrative & Flow",
    image: VideoEditingImg
  },
  {
    num: "02",
    title: "Motion Graphics",
    tag: "Visual Impact",
    image: MotionDesignImg
  },
  {
    num: "03",
    title: "Audio Post-Production",
    tag: "Sonic Precision",
    image: AudioPostImg
  }
];

export default function Services() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="services" className="py-28 bg-[#0A0A0A] w-full border-t border-zinc-900/60 snap-start">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-5xl font-black uppercase tracking-tighter text-white">Services</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Navigation with Subtle Tab Indicators */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {SERVICES.map((service, index) => (
              <button
                key={service.num}
                onClick={() => setActiveTab(index)}
                className="group relative flex items-center gap-6 text-left p-6 transition-all duration-300"
              >
                {/* Active Tab Background Border */}
                <div className={`absolute left-0 top-6 bottom-6 w-[2px] transition-all duration-300 ${activeTab === index ? 'bg-white shadow-[0_0_10px_white]' : 'bg-zinc-800'}`}></div>
                
                {/* Glow Container */}
                <div className={`absolute inset-0 bg-white/[0.02] rounded-sm transition-opacity duration-500 ${activeTab === index ? 'opacity-100' : 'opacity-0'}`}></div>
                <div className={`absolute -inset-[1px] bg-gradient-to-r from-zinc-800 to-zinc-900 rounded-sm blur-sm transition-all ${activeTab === index ? 'opacity-100' : 'opacity-0'}`}></div>
                
                {/* Radio Indicator */}
                <div className={`relative w-4 h-4 rounded-full border border-zinc-600 flex items-center justify-center ${activeTab === index ? 'border-white' : ''}`}>
                  {activeTab === index && <div className="w-2 h-2 bg-white rounded-full shadow-[0_0_10px_white]"></div>}
                </div>
                
                <div className="relative">
                  <span className={`block text-xs font-mono mb-1 uppercase tracking-widest ${activeTab === index ? 'text-white' : 'text-zinc-500'}`}>{service.num}</span>
                  <h3 className={`text-2xl font-bold uppercase ${activeTab === index ? 'text-white' : 'text-zinc-600'}`}>{service.title}</h3>
                </div>
              </button>
            ))}
          </div>

          {/* Active Content Display */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="relative"
              >
                {/* Glowing Border Wrapper */}
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-br from-zinc-700 to-zinc-900 rounded-sm blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
                  <div className="relative w-full aspect-video bg-zinc-900 overflow-hidden">
                    <img 
                      src={SERVICES[activeTab].image} 
                      alt={SERVICES[activeTab].title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-6 left-6">
                      <span className="px-3 py-1 bg-black/50 backdrop-blur text-white text-xs font-bold uppercase tracking-widest border border-white/10">
                        {SERVICES[activeTab].tag}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}