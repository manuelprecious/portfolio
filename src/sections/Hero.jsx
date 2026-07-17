import { motion } from 'framer-motion';
import { useRef, useEffect } from 'react';
import KineticText from '../components/KineticText';
import Button from '../components/Button';

// Import logos directly from your file system
import a24Logo from '../assets/logos/a24-logo.svg';
import haywardLogo from '../assets/logos/hayward.svg';
import carharttLogo from '../assets/logos/logo-carhartt.svg';
import giantsLogo from '../assets/logos/new-york-giants-1.svg';
import nikeLogo from '../assets/logos/nike-6.svg';

export default function Hero() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch(e => console.error("Background autoplay blocked:", e));
    }
  }, []);

  const scrollToWork = () => {
    const section = document.getElementById('projects');
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  const logos = [
    { name: 'A24', src: a24Logo },
    { name: 'Hayward', src: haywardLogo },
    { name: 'Carhartt', src: carharttLogo },
    { name: 'Giants', src: giantsLogo },
    { name: 'Nike', src: nikeLogo },
    { name: 'A24', src: a24Logo },
    { name: 'Hayward', src: haywardLogo },
    { name: 'Carhartt', src: carharttLogo },
    { name: 'Giants', src: giantsLogo },
    { name: 'Nike', src: nikeLogo }
  ];

  return (
    <section className="relative min-h-screen lg:h-screen w-full bg-[#050505] flex flex-col justify-start lg:justify-center px-6 sm:px-12 md:px-16 overflow-x-hidden pt-20 pb-12 lg:py-24">

      {/* Ambient Background Video Frame */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0">
        <video
          ref={videoRef}
          src="https://cdn.prod.website-files.com/5dabd332d26b0a27c9d3ef10/64c1077687b72a3a653990bc_Website-BG-Video-transcode.mp4"
          autoPlay muted loop playsInline
          className="absolute inset-0 w-full h-full object-cover object-center opacity-20 filter brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/90 via-transparent to-[#050505]/90" />
      </div>

      {/* CONTENT INNER GRID LAYER */}
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 lg:gap-16 items-start lg:items-center relative z-10 mt-8 sm:mt-12 lg:my-auto py-0 overflow-visible">

        {/* Left Column: Typography Stack */}
        <div className="lg:col-span-6 flex flex-col items-start w-full">
          
          {/* Content Block with Criss-Cross Pattern Background */}
          <div className="relative w-full bg-[#0a0a0a] border border-zinc-800/50 rounded-2xl p-3 sm:p-4">
            {/* Criss-Cross Pattern Background */}
            <div 
              className="absolute inset-0 z-0 pointer-events-none select-none rounded-2xl opacity-25"
              style={{
                backgroundImage: `
                  linear-gradient(45deg, rgba(255,255,255,0.05) 25%, transparent 25%, transparent 75%, rgba(255,255,255,0.05) 75%, rgba(255,255,255,0.05)),
                  linear-gradient(45deg, rgba(255,255,255,0.05) 25%, transparent 25%, transparent 75%, rgba(255,255,255,0.05) 75%, rgba(255,255,255,0.05)),
                  linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px),
                  linear-gradient(0deg, rgba(255,255,255,0.04) 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px, 40px 40px, 20px 20px, 20px 20px'
              }}
            />
            
            {/* Content */}
            <div className="relative z-10 p-5 lg:p-6">
              <KineticText className="text-[11px] uppercase tracking-[0.3em] mb-2 lg:mb-6">
                <span className="bg-white text-black font-bold px-2 py-0.5 rounded">research // products // engineering</span>
              </KineticText>

              <KineticText delay={0.1} className="w-full">
                <h1 className="text-[28px] sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tighter uppercase leading-[1.4] mb-6 md:mb-8 lg:mb-10">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-500">from concept</span>
                  <br className="mb-2" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 via-zinc-500 to-zinc-700">to product.</span>
                </h1>
              </KineticText>

              <KineticText delay={0.2}>
                <p className="text-sm sm:text-base lg:text-lg text-zinc-400 max-w-xl font-medium leading-relaxed mb-8 lg:mb-12">
                  A <span className="inline-block bg-[#FFE93C] text-black font-bold px-2.5 py-1 -rotate-1 transform mx-1 mb-2">research</span> & <span className="inline-block bg-[#FFE93C] text-black font-bold px-2.5 py-1 rotate-1 transform mx-1 mb-2">engineering</span> lab building products across <span className="inline-block bg-[#FFE93C] text-black font-bold px-2.5 py-1 -rotate-1 transform mx-1 mb-2">AI</span>, <span className="inline-block bg-[#FFE93C] text-black font-bold px-2.5 py-1 rotate-1 transform mx-1 mb-2">machine learning</span>, <span className="inline-block bg-[#FFE93C] text-black font-bold px-2.5 py-1 -rotate-1 transform mx-1 mb-2">robotics</span>, and <span className="inline-block bg-[#FFE93C] text-black font-bold px-2.5 py-1 rotate-1 transform mx-1 mb-2">emerging technologies</span>.
                </p>
              </KineticText>

              <KineticText delay={0.3}>
                <button
                  onClick={scrollToWork}
                  className="group relative px-8 py-4 bg-transparent border border-zinc-700 rounded-lg overflow-hidden transition-all duration-500 hover:border-zinc-500"
                >
                  {/* Animated gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-800 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-zinc-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-zinc-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-zinc-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-zinc-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Glow effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </div>
                  
                  {/* Content */}
                  <span className="relative z-10 flex items-center gap-3 text-zinc-300 group-hover:text-white font-mono text-xs font-bold uppercase tracking-widest transition-colors duration-500">
                    <span className="w-2 h-2 bg-zinc-600 rounded-full group-hover:bg-white group-hover:animate-pulse transition-colors duration-500" />
                    Browse Projects
                    <span className="group-hover:translate-x-2 transition-transform duration-500">→</span>
                  </span>
                </button>
              </KineticText>
            </div>
          </div>
        </div>

        {/* Right Column: NLE Showreel Console Block */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end w-full pb-4 lg:pb-0">
          <div className="w-full max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-none bg-[#0d0d0d] border border-zinc-800/80 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] rounded-xl p-3 sm:p-4 select-none">

            <div className="bg-[#0a0a0a] border border-zinc-900 rounded-lg overflow-hidden w-full">
              {/* NLE Window Header bar */}
              <div className="bg-[#121212] px-4 py-3 flex items-center justify-between border-b border-zinc-900">
                <div className="flex gap-4 sm:gap-6">
                  <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">File</span>
                  <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Edit</span>
                  <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Experiment</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]"></div>
                  <span className="text-[9px] font-mono text-zinc-400 uppercase tracking-widest font-bold">MODEL_PIPELINE.json</span>
                </div>
              </div>

              {/* Video Monitor Box */}
              <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden">
                <iframe
                  id="vimeo-showreel"
                  src="https://player.vimeo.com/video/1204862002?autoplay=1&loop=1&badge=0&autopause=0&player_id=0&app_id=58479&title=0&byline=0&portrait=0"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  className="absolute top-0 left-0 w-full h-full z-10"
                  title="My Show Reel"
                />

                <div className="absolute top-3 left-3 flex flex-col gap-1 z-20 pointer-events-none">
                  <span className="text-[10px] font-mono font-bold text-white/70 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded border border-white/5 tracking-wider">
                    EPOCH: 12 / 100
                  </span>
                </div>
              </div>

              {/* NLE Core Timeline Section */}
              <div className="bg-[#121212] border-t border-zinc-900 p-4 relative">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-3 sm:mb-4">
                  <div className="flex gap-4 items-center font-mono uppercase">
                    <div className="flex gap-3 text-zinc-600 text-[10px] font-bold">
                      <span>V1</span>
                      <span>A1</span>
                    </div>
                    <div className="flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded text-blue-400 text-[10px] font-bold tracking-widest font-sans">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                      ACTIVE_RUN
                    </div>
                  </div>

                  <button
                    onClick={scrollToWork}
                    className="w-full sm:w-auto bg-zinc-800 hover:bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 transition-all border border-zinc-750 rounded-sm shadow-sm"
                  >
                    View Experiments
                  </button>
                </div>

                {/* Structural Multi-track Layers */}
                <div className="space-y-2">
                  <div className="h-8 w-full bg-[#050505] rounded border border-zinc-900 flex items-center px-1.5 relative overflow-hidden">
                    <div className="h-5 w-[42%] bg-zinc-800 border border-zinc-700/60 rounded-sm flex items-center px-2">
                      <span className="text-[9px] text-zinc-400 font-mono font-bold truncate">TRAIN_SET.csv</span>
                    </div>
                    <div className="absolute top-0 left-[42%] w-[2px] h-full bg-blue-500 z-10 shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
                  </div>

                  <div className="h-8 w-full bg-[#050505] rounded border border-zinc-900 flex items-center px-1.5 overflow-hidden">
                    <div className="h-5 w-[65%] bg-zinc-900 border border-zinc-800 rounded-sm flex items-center px-2">
                      <span className="text-[9px] text-zinc-500 font-mono font-bold truncate">TEST_SET.csv</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Infinite Logo Ticker - With Borders */}
      <div className="w-full hidden lg:flex justify-center pt-8 mt-auto pb-4">
        <div
          className="w-full max-w-5xl overflow-hidden border-y border-zinc-800/60 bg-gradient-to-r from-[#050505] via-[#0a0a0a] to-[#050505] py-4"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
          }}
        >
          <motion.div
            className="flex gap-24 items-center whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 40, ease: "linear", repeat: Infinity }}
          >
            {logos.map((logo, index) => (
              <img
                key={index}
                src={logo.src}
                alt={logo.name}
                className="h-11 object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}