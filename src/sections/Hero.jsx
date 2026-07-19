import { motion } from 'framer-motion';
import { useRef, useEffect } from 'react';
import KineticText from '../components/KineticText';
// import Button from '../components/Button'; // Uncomment if needed

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

  // FIX 1: Safely extract the string URL whether the bundler returns a string or an object
  const logos = [
    { name: 'A24', src: a24Logo?.src || a24Logo },
    { name: 'Hayward', src: haywardLogo?.src || haywardLogo },
    { name: 'Carhartt', src: carharttLogo?.src || carharttLogo },
    { name: 'Giants', src: giantsLogo?.src || giantsLogo },
    { name: 'Nike', src: nikeLogo?.src || nikeLogo }
  ];

  // Helper component for the water bubble highlight effect
  const HighlightedText = ({ text }) => (
    <span style={{ 
      display: 'inline-block', 
      background: 'rgba(255, 255, 255, 0.08)',
      backdropFilter: 'blur(8px)',
      WebkitBackdropFilter: 'blur(8px)',
      borderRadius: '8px', 
      padding: '4px 12px', 
      margin: '6px 4px',
      border: '1px solid rgba(255, 255, 255, 0.15)',
      borderBottom: '2px solid rgba(255, 149, 0, 0.8)',
      fontWeight: '500',
      color: '#ffffff',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
      transition: 'all 0.3s ease'
    }}>
      {text}
    </span>
  );

  return (
    <section 
      id="home"
      className="relative min-h-screen lg:h-screen w-full bg-[#050505] flex flex-col justify-start lg:justify-center px-6 sm:px-12 md:px-16 overflow-x-hidden pt-20 pb-4"
    >
      {/* SVG Filter for Rough Paper Edges */}
      <svg className="absolute w-0 h-0">
        <defs>
          <filter id="paper-edge">
            <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>

      {/* Ambient Background Video Frame */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0">
        <video
          ref={videoRef}
          src="https://cdn.prod.website-files.com/5dabd332d26b0a27c9d3ef10/64c1077687b72a3a653990bc_Website-BG-Video-transcode.mp4"
          autoPlay muted loop playsInline
          className="absolute inset-0 w-full h-full object-cover object-center opacity-30 filter brightness-100"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/70 via-transparent to-[#050505]/70" />
      </div>

      {/* CONTENT INNER GRID LAYER */}
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 lg:gap-16 items-start lg:items-center relative z-10 mt-8 sm:mt-12 lg:my-auto py-0 overflow-visible">

        {/* Left Column: Typography Stack */}
        <div className="lg:col-span-6 flex flex-col items-start w-full">
          <div className="relative w-full bg-transparent rounded-2xl p-3 sm:p-4">
            <div className="relative z-10 p-5 lg:p-6">
              <KineticText className="text-[11px] uppercase tracking-[0.3em] mb-2 lg:mb-6">
                <span className="bg-white/90 text-black font-bold px-2 py-0.5 rounded">research // products // engineering</span>
              </KineticText>

              <KineticText delay={0.1} className="w-full">
                <h1 className="text-[28px] sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tighter uppercase leading-[1.4] mb-6 md:mb-8 lg:mb-10">
                  <span className="text-white">from concept</span>
                  <br className="mb-2" />
                  <span className="text-zinc-400">to product.</span>
                </h1>
              </KineticText>

              <KineticText delay={0.2}>
                <p className="text-sm sm:text-base lg:text-lg text-zinc-300 max-w-xl font-medium leading-relaxed mb-8 lg:mb-12">
                  A <HighlightedText text="research" /> & <HighlightedText text="engineering" /> lab building products across <HighlightedText text="AI" />, <HighlightedText text="machine learning" />, <HighlightedText text="robotics" />, and other <HighlightedText text="emerging technologies" />.
                </p>
              </KineticText>

              <KineticText delay={0.3}>
                <button
                  onClick={scrollToWork}
                  className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-mono text-sm font-bold uppercase tracking-widest rounded-lg border-2 border-white shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.5)] hover:bg-zinc-100 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  <span className="relative z-10 flex items-center gap-3">
                    <span className="w-2.5 h-2.5 bg-black rounded-full group-hover:animate-pulse" />
                    Browse Projects
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </span>
                </button>
              </KineticText>
            </div>
          </div>
        </div>

        {/* Right Column: NLE Showreel Console Block */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end w-full pb-4 lg:pb-0">
          <div className="w-full max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-none bg-black/50 backdrop-blur-sm border border-white/10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] rounded-xl p-3 sm:p-4 select-none">
            <div className="bg-black/60 border border-white/10 rounded-lg overflow-hidden w-full">
              {/* NLE Window Header bar */}
              <div className="bg-black/70 px-4 py-3 flex items-center justify-between border-b border-white/10">
                <div className="flex gap-4 sm:gap-6">
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">File</span>
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Edit</span>
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Experiment</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]"></div>
                  <span className="text-[9px] font-mono text-zinc-300 uppercase tracking-widest font-bold">MODEL_PIPELINE.json</span>
                </div>
              </div>

              {/* Video Monitor Box */}
              <div className="relative aspect-video bg-black/80 flex items-center justify-center overflow-hidden">
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
              <div className="bg-black/70 border-t border-white/10 p-4 relative">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-3 sm:mb-4">
                  <div className="flex gap-4 items-center font-mono uppercase">
                    <div className="flex gap-3 text-zinc-500 text-[10px] font-bold">
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
                    className="w-full sm:w-auto bg-zinc-800/80 hover:bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 transition-all border border-zinc-700 rounded-sm shadow-sm"
                  >
                    View Experiments
                  </button>
                </div>

                {/* Structural Multi-track Layers */}
                <div className="space-y-2">
                  <div className="h-8 w-full bg-black/60 rounded border border-white/10 flex items-center px-1.5 relative overflow-hidden">
                    <div className="h-5 w-[42%] bg-zinc-800/80 border border-zinc-700/60 rounded-sm flex items-center px-2">
                      <span className="text-[9px] text-zinc-300 font-mono font-bold truncate">TRAIN_SET.csv</span>
                    </div>
                    <div className="absolute top-0 left-[42%] w-[2px] h-full bg-blue-500 z-10 shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
                  </div>

                  <div className="h-8 w-full bg-black/60 rounded border border-white/10 flex items-center px-1.5 overflow-hidden">
                    <div className="h-5 w-[65%] bg-zinc-900/80 border border-zinc-800 rounded-sm flex items-center px-2">
                      <span className="text-[9px] text-zinc-400 font-mono font-bold truncate">TEST_SET.csv</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Infinite Logo Ticker - With Text and Increased Size */}
      <div className="w-full flex flex-col items-center justify-end mt-auto pb-2 relative z-10">
        <p style={{ color: 'white', fontSize: '14px', fontWeight: '400', textTransform: 'uppercase', letterSpacing: '0.3em', marginBottom: '24px' }}>
          Trusted by 200+ engineering teams
        </p>

        {/* Marquee Container */}
        <div
          className="w-full max-w-7xl overflow-hidden border-y border-white/10 bg-gradient-to-r from-[#050505]/80 via-black/60 to-[#050505]/80 backdrop-blur-sm py-8"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
          }}
        >
          {/* FIX 2: Added `w-max` to ensure the container expands to fit all logos in a single row, 
              allowing the -50% translation to calculate correctly for a seamless loop. */}
          <motion.div
            className="flex items-center whitespace-nowrap w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 40, ease: "linear", repeat: Infinity }}
          >
            {/* First set of logos */}
            <div className="flex items-center">
              {logos.map((logo, index) => (
                <div key={index} className="px-16 flex items-center">
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="h-14 object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
                    style={{ filter: 'brightness(0) invert(1)' }}
                  />
                </div>
              ))}
            </div>
            
            {/* Duplicate set for seamless loop */}
            <div className="flex items-center">
              {logos.map((logo, index) => (
                <div key={`dup-${index}`} className="px-16 flex items-center">
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="h-14 object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
                    style={{ filter: 'brightness(0) invert(1)' }}
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}