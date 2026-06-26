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
    const section = document.getElementById('portfolio-projects');
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
    <section className="relative min-h-[95vh] w-full bg-[#050505] flex flex-col justify-center px-6 sm:px-12 md:px-16 overflow-hidden pt-4">
      
      {/* Ambient Background Video */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0">
        <video
          ref={videoRef}
          src="https://cdn.prod.website-files.com/5dabd332d26b0a27c9d3ef10/64c1077687b72a3a653990bc_Website-BG-Video-transcode.mp4"
          autoPlay muted loop playsInline
          className="absolute inset-0 w-full h-full object-cover object-center opacity-20 filter brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/80 via-transparent to-[#050505]/80" />
      </div>

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10 -mt-20">
        {/* Left Column: Copy & Text */}
        <div className="lg:col-span-6 flex flex-col items-start">
          <KineticText className="text-[11px] uppercase tracking-[0.3em] text-zinc-500 font-bold mb-6">editing // motion // color</KineticText>
          <KineticText delay={0.1} className="w-full">
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter uppercase text-white leading-[0.9] mb-8">
              I make sharp, <br /> catchy <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-300 to-zinc-600">videos.</span>
            </h1>
          </KineticText>
          <KineticText delay={0.2}>
            <p className="text-base sm:text-lg text-zinc-400 max-w-lg font-medium leading-relaxed mb-10">
              Video Editing, Motion graphics, and Color for your projects. My goal is to keep things moving fast and sounding great so people stay focused on your work from start to finish.
            </p>
          </KineticText>
          <KineticText delay={0.3}><Button onClick={scrollToWork}>See My Work</Button></KineticText>
        </div>

        {/* Right Column: The NLE Showreel Interface Container */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end">
          <div className="w-full max-w-[580px] bg-[#0a0a0a] border border-zinc-800 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.8)] rounded-lg overflow-hidden select-none">
            
            {/* NLE Header Tab */}
            <div className="bg-[#121212] px-4 py-3 flex items-center justify-between border-b border-zinc-800">
              <div className="flex gap-6">
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">File</span>
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Edit</span>
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Sequence</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-blue-500/80 shadow-[0_0_8px_rgba(59,130,246,0.6)]"></div>
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">SHOWREEL.seq</span>
              </div>
            </div>
            
            {/* Main Video Monitor Window */}
            <div className="relative aspect-video bg-black flex items-center justify-center group overflow-hidden">
              {/* Vimeo Iframe Embed:
                - Added 'title=0', 'byline=0', and 'portrait=0' parameters to strip profile elements.
              */}
              <iframe 
                id="vimeo-showreel"
                src="https://player.vimeo.com/video/1204862002?autoplay=1&loop=1&badge=0&autopause=0&player_id=0&app_id=58479&title=0&byline=0&portrait=0" 
                frameBorder="0" 
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                className="absolute top-0 left-0 w-full h-full z-10"
                title="My Show Reel"
              />

              {/* Aesthetic Non-interactive Timecode Track Overlaid above Iframe */}
              <div className="absolute top-4 left-4 flex flex-col gap-1 z-20 pointer-events-none">
                <span className="text-[11px] font-mono text-white/60 bg-black/50 backdrop-blur-md px-2 py-1 border border-white/5">TC: 00:00:12:04</span>
              </div>
            </div>

            {/* NLE Timeline Track UI Section */}
            <div className="bg-[#121212] border-t border-zinc-800 p-4 relative">
              <div className="flex justify-between items-center mb-4">
                {/* Left Side: Track layout with upscaled, symmetric Showreel status badge */}
                <div className="flex gap-5 items-center font-mono uppercase">
                  <div className="flex gap-4 text-zinc-500 text-[10px]">
                    <span>V1</span>
                    <span>A1</span>
                  </div>
                  <div className="flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 px-5 py-2 rounded text-blue-400 text-[11px] font-bold tracking-widest shadow-[0_0_12px_rgba(59,130,246,0.15)] font-sans">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                    SHOWREEL
                  </div>
                </div>
                {/* Right Side: Action Button */}
                <button 
                  onClick={scrollToWork}
                  className="bg-zinc-800 hover:bg-blue-600 text-white text-[11px] font-bold uppercase tracking-widest px-5 py-2 transition-all duration-300 border border-zinc-700"
                >
                  View Projects
                </button>
              </div>
              
              <div className="space-y-2">
                <div className="h-8 w-full bg-[#050505] rounded-[2px] border border-zinc-800 flex items-center px-2 relative">
                  <div className="h-5 w-[40%] bg-zinc-700 border border-zinc-600 rounded-[2px] flex items-center justify-center">
                    <span className="text-[9px] text-zinc-300 font-mono">B-ROLL_CUT.mp4</span>
                  </div>
                  <div className="absolute top-0 left-[40%] w-[3px] h-full bg-blue-500 z-10 shadow-[0_0_15px_rgba(59,130,246,0.6)]"></div>
                </div>
                <div className="h-8 w-full bg-[#050505] rounded-[2px] border border-zinc-800 flex items-center px-2">
                  <div className="h-5 w-[60%] bg-zinc-800 border border-zinc-700 rounded-[2px] flex items-center justify-center">
                    <span className="text-[9px] text-zinc-500 font-mono">AUDIO_SFX.wav</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Infinite Scrolling Logo Ticker Footer */}
      <div className="absolute bottom-12 left-0 w-full hidden lg:flex justify-center opacity-30">
        <div 
          className="w-full max-w-5xl overflow-hidden"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
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
                className="h-14 object-contain" 
                style={{ filter: 'brightness(0) invert(1)' }} 
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}