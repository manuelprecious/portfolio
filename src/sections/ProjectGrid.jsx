import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import KineticText from '../components/KineticText';

const PROJECTS = [
  { 
    id: 1, 
    folder: "long-form", 
    title: "The Problem With The Diary of a CEO", 
    category: "Investigative Narrative", 
    videoUrl: "https://www.youtube.com/watch?v=II8aZQar7XM", 
    aspect: "aspect-video", 
    thumb: "https://img.youtube.com/vi/II8aZQar7XM/0.jpg",
    client: "Josh Brett",
    role: "Lead Editing, Narrative Pacing, Asset Assembly",
    software: ["Premiere Pro", "After Effects", "Photoshop"],
    highlights: ["Rhythmic Narrative Pacing", "Multi-Source Document Assembly", "Dynamic Structural Flow"]
  },
  { 
    id: 2, 
    folder: "long-form", 
    title: "Desert Storm: The Gulf War 1990-1991", 
    category: "Historical Documentary", 
    videoUrl: "https://www.youtube.com/watch?v=jS-g2JjQSJ4", 
    aspect: "aspect-video", 
    thumb: "https://img.youtube.com/vi/jS-g2JjQSJ4/0.jpg",
    client: "Real Time History",
    role: "Documentary Editing, Archival Management, Lumetri Color Grading",
    software: ["Premiere Pro", "Audition", "Photoshop"],
    highlights: ["Archival Restorations", "Chronological Structural Flow", "Historical Photo Animating"]
  },
  { 
    id: 3, 
    folder: "long-form", 
    title: "The Rise of Nitazenes in Europe", 
    category: "Broadcast Journalism", 
    videoUrl: "https://www.youtube.com/watch?v=j0qUvvzvryc", 
    aspect: "aspect-video", 
    thumb: "https://img.youtube.com/vi/j0qUvvzvryc/0.jpg",
    client: "Bellingcat OSINT",
    role: "Investigative Montage, Audio Restoration, Dynamic Graphic Overlays",
    software: ["Premiere Pro", "After Effects", "Audition"],
    highlights: ["Anonymity Protection Visuals", "Immersive Audio Mastering", "Data-Driven Overlay"]
  },
  { 
    id: 4, 
    folder: "long-form", 
    title: "Why The 2-State Solution Is Impossible Now", 
    category: "Geopolitical Video Essay", 
    videoUrl: "https://www.youtube.com/watch?v=A-2bCKakP7c", 
    aspect: "aspect-video", 
    thumb: "https://img.youtube.com/vi/A-2bCKakP7c/0.jpg",
    client: "RealLifeLore",
    role: "Motion Graphics Design, Kinetic Cartography",
    software: ["After Effects", "Premiere Pro", "Photoshop"],
    highlights: ["Complex Vector Data Rendering", "Fluid Virtual Camera Tracking", "Dynamic Map Matte Masking"]
  },
  { 
    id: 5, 
    folder: "short-form", 
    title: "Sony Brand Spec Commercial", 
    category: "Commercial Showcase", 
    videoUrl: "https://www.youtube.com/watch?v=oYmU8Av_e84", 
    aspect: "aspect-video", 
    thumb: "https://img.youtube.com/vi/oYmU8Av_e84/0.jpg",
    client: "Quiet Noise x Wild Card",
    role: "Cinematography, Advanced Compositing, Commercial Color Match",
    software: ["Premiere Pro", "After Effects", "Photoshop"],
    highlights: ["High-End Luxury Spec B-Roll", "Dynamic Match Cutting", "Sleek Commercial Pacing"]
  },
  { 
    id: 6, 
    folder: "short-form", 
    title: "Guessing Salish's Favorite Artist", 
    category: "High-Retention Short", 
    videoUrl: "https://www.youtube.com/watch?v=096X2CDthvQ", 
    aspect: "aspect-[9/16]", 
    thumb: "https://img.youtube.com/vi/096X2CDthvQ/0.jpg",
    client: "Jordan Matter",
    role: "Retention Strategy Editing, Micro-Animation Asset Design",
    software: ["Premiere Pro", "After Effects"],
    highlights: ["Millisecond Retention Pacing", "High-Contrast Title Pops", "Sound Effect Interjections"]
  },
  { 
    id: 7, 
    folder: "short-form", 
    title: "Losing Muscle While Cutting?", 
    category: "Educational Health Reel", 
    videoUrl: "https://www.youtube.com/watch?v=S4rL5RDYTfw", 
    aspect: "aspect-[9/16]", 
    thumb: "https://img.youtube.com/vi/S4rL5RDYTfw/0.jpg",
    client: "Sean Nalewanyj",
    role: "Vertical Sequence Optimization, Kinetic Typography Engine",
    software: ["Premiere Pro", "After Effects"],
    highlights: ["Aesthetic Text Highlighting", "No-Nonsense Direct Hooking", "Audio Essential Sound Leveling"]
  }
];

export default function ProjectGrid() {
  const [activeFolder, setActiveFolder] = useState('long-form');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const filteredProjects = PROJECTS.filter(p => p.folder === activeFolder);
  const [activeId, setActiveId] = useState(filteredProjects[0].id);
  const active = PROJECTS.find(p => p.id === activeId);

  const handleProjectSelect = (id) => {
    setActiveId(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <section id="portfolio-projects" className="py-12 md:py-24 px-4 md:px-8 min-h-screen bg-[#1e1e1e]">
      <div className="max-w-[1700px] mx-auto">
        
        {/* Section Title Header */}
        <div className="mb-10 border-b border-zinc-800 pb-6 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <KineticText>
            <h2 className="text-4xl md:text-6xl font-black text-zinc-100 uppercase tracking-tight">Selected Work</h2>
            <p className="text-zinc-400 mt-2 tracking-[0.25em] uppercase text-xs font-bold">Production Editing Suite</p>
          </KineticText>

          {/* Mobile Category Trigger */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden w-full p-4 bg-zinc-900 border border-zinc-800 rounded-xl flex items-center justify-between text-white active:bg-zinc-800 transition-colors shadow-lg"
          >
            <div className="flex items-center gap-3 text-left font-mono">
              <span className="text-[11px] uppercase tracking-wider text-sky-400 font-bold">📁 SWITCH SEQUENCE:</span>
              <span className="text-xs font-black tracking-wide text-zinc-100">
                {activeFolder === 'long-form' ? 'Long Form' : 'Shorts & Reels'}
              </span>
            </div>
            <div className="flex items-center justify-center bg-zinc-800 w-6 h-6 rounded-md border border-zinc-700">
              <span className="text-zinc-400 text-[10px]">▼</span>
            </div>
          </button>
        </div>

        {/* UNIFIED VIDEO EDITOR WORKSPACE BOX */}
        <div className="bg-[#141414] border border-[#2c2c2c] rounded-xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-12 select-none">
          
          {/* PANEL 1: PROJECT BIN / ASSETS (Left Side) */}
          <div className="hidden md:flex md:col-span-3 border-r border-[#2c2c2c] flex-col h-[780px] bg-[#1a1a1a]">
            <div className="flex border-b border-[#2c2c2c] bg-[#222222]">
              <button 
                onClick={() => { setActiveFolder('long-form'); handleProjectSelect(PROJECTS.find(p => p.folder === 'long-form').id); }} 
                className={`flex-1 py-4 text-xs font-bold uppercase tracking-[0.15em] transition-all relative ${activeFolder === 'long-form' ? 'bg-[#141414] text-white font-extrabold' : 'text-zinc-400 hover:text-zinc-200'}`}
              >
                📁 Long Form
                {activeFolder === 'long-form' && <div className="absolute bottom-0 inset-x-0 h-[2.5px] bg-[#1473e6]"></div>}
              </button>
              <button 
                onClick={() => { setActiveFolder('short-form'); handleProjectSelect(PROJECTS.find(p => p.folder === 'short-form').id); }} 
                className={`flex-1 py-4 text-xs font-bold uppercase tracking-[0.15em] transition-all relative ${activeFolder === 'short-form' ? 'bg-[#141414] text-white font-extrabold' : 'text-zinc-400 hover:text-zinc-200'}`}
              >
                📁 Short Form
                {activeFolder === 'short-form' && <div className="absolute bottom-0 inset-x-0 h-[2px] bg-[#1473e6]"></div>}
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-4 space-y-2 bg-[#141414]">
              <p className="text-[11px] uppercase font-mono font-bold tracking-wider text-zinc-500 px-1 pb-1">Project Bin / Media Pool</p>
              {filteredProjects.map(p => (
                <button 
                  key={p.id} 
                  onClick={() => handleProjectSelect(p.id)} 
                  className={`w-full flex items-center gap-3.5 p-2 rounded transition-all border ${activeId === p.id ? 'bg-[#262626] border-[#3e3e3e] text-white shadow-md' : 'border-transparent text-zinc-300 hover:bg-[#1d1d1d] hover:text-white'}`}
                >
                  <img src={p.thumb} className="w-16 h-11 object-cover rounded border border-zinc-800 flex-shrink-0" />
                  <div className="text-left overflow-hidden">
                    <p className="text-xs font-bold truncate tracking-tight">{p.title}</p>
                    <p className="text-[10px] text-zinc-400 font-mono mt-0.5 truncate">{p.client}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* PANELS 2 & 3: SOURCE MONITOR & TIMELINE RUN (Center Column) */}
          <div className="col-span-1 md:col-span-6 flex flex-col h-[780px] border-r border-[#2c2c2c] bg-[#1a1a1a] relative z-10">
            
            {/* Monitor Title Header Bar */}
            <div className="bg-[#222222] px-5 py-3 flex justify-between items-center border-b border-[#2c2c2c] z-10">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
                <span className="text-xs font-mono font-bold text-zinc-200 uppercase tracking-wider truncate max-w-[280px] md:max-w-none">{active.title}</span>
              </div>
              <span className="hidden sm:block text-[10px] font-mono font-bold text-zinc-400 tracking-widest">PROGRAM MONITOR</span>
            </div>
            
            {/* Main Program Playback Output */}
            <div className="flex-grow flex items-center justify-center p-4 sm:p-8 bg-[#141414] overflow-hidden relative z-20 pointer-events-auto">
              <div className={`relative w-full shadow-2xl rounded overflow-hidden border border-[#2c2c2c] bg-black ${active.aspect === 'aspect-[9/16]' ? 'max-w-[260px] mx-auto' : ''}`}>
                <ProjectCard videoUrl={active.videoUrl} aspect={active.aspect} />
              </div>
            </div>

            {/* INTEGRATED NLE TIMELINE COMPONENT */}
            <div className="bg-[#222222] border-t border-[#2c2c2c] p-4 pb-6 font-mono selection:bg-transparent overflow-hidden relative z-0">
              
              <div className="overflow-x-auto w-full scrollbar-none pb-2">
                <div className="min-w-[620px] md:min-w-0">

                  {/* Timeline Header Track Controls */}
                  <div className="grid grid-cols-[55px_1fr] items-center mb-3 border-b border-[#2c2c2c] pb-2 px-1">
                    <div className="text-xs text-sky-400 font-bold tracking-wider">00:00</div>
                    <div className="relative w-full h-4 flex items-end">
                      <div className="absolute inset-x-0 bottom-0 h-2 border-b border-zinc-700 flex justify-between px-2 text-[10px] text-zinc-500 font-bold">
                        <span>|</span><span>.</span><span>.</span><span>|</span><span>.</span><span>.</span><span>|</span><span>.</span><span>.</span><span>|</span>
                      </div>
                      {/* Premiere Blue Playhead Tracker */}
                      <div className="absolute left-[35%] bottom-0 w-0.5 h-4 bg-[#1473e6] z-10">
                        <div className="absolute -top-1 -left-1 w-2.5 h-2.5 bg-[#1473e6] rotate-45 rounded-[1px]"></div>
                      </div>
                    </div>
                  </div>

                  {/* Multi-Track Sequencer Rows */}
                  <div className="space-y-1 text-[11px]">
                    
                    {/* Track V2 - Title FX */}
                    <div className="grid grid-cols-[55px_1fr] gap-2 items-center">
                      <div className="text-zinc-400 font-bold text-center border-r border-zinc-700 text-xs bg-[#1a1a1a] py-0.5 rounded-l">V2</div>
                      <div className="relative h-6 flex gap-1 w-full bg-[#1c1c1c] rounded-r border border-[#2d2d2d] overflow-hidden">
                        <div className="w-[25%] h-full bg-[#5d4a35] border-r border-zinc-800 text-amber-200 flex items-center px-2 truncate font-bold">
                          [T] Title Overlays
                        </div>
                        <div className="w-[15%]"></div>
                        <div className="w-[35%] h-full bg-[#2a4454] border-x border-zinc-800 text-sky-200 flex items-center px-2 truncate font-bold">
                          B-ROLL_Sony_Cut02.mov
                        </div>
                      </div>
                    </div>

                    {/* Track V1 - Primary Video Sequence */}
                    <div className="grid grid-cols-[55px_1fr] gap-2 items-center">
                      <div className="text-white font-bold text-center border-r border-zinc-700 text-xs bg-[#1473e6] py-0.5 rounded-l">V1</div>
                      <div className="relative h-6 flex gap-0.5 w-full bg-[#1c1c1c] rounded-r border border-[#2d2d2d] overflow-hidden">
                        <div className="absolute left-[35%] top-0 bottom-0 w-0.5 bg-[#1473e6]/40 z-10 pointer-events-none"></div>
                        
                        <div className="w-[35%] h-full bg-[#3c3c3c] border-r border-zinc-900 text-zinc-100 flex items-center px-2 truncate font-bold">
                          A-ROLL_Interview_Main
                        </div>
                        <div className="w-[30%] h-full bg-[#4a4a4a] border-r border-zinc-900 text-zinc-100 flex items-center px-2 truncate font-bold">
                          A-ROLL_Angle_B
                        </div>
                        <div className="w-[35%] h-full bg-[#3c3c3c] text-zinc-300 flex items-center px-2 truncate font-bold">
                          Outro_Sequence
                        </div>
                      </div>
                    </div>

                    <div className="h-[2px] bg-[#141414] my-1"></div>

                    {/* Track A1 - Voice Mix */}
                    <div className="grid grid-cols-[55px_1fr] gap-2 items-center">
                      <div className="text-white font-bold text-center border-r border-zinc-700 text-xs bg-[#1473e6] py-0.5 rounded-l">A1</div>
                      <div className="relative h-6 flex gap-0.5 w-full bg-[#1c1c1c] rounded-r border border-[#2d2d2d] overflow-hidden">
                        <div className="w-[35%] h-full bg-[#2a4d3a] border-r border-zinc-900 text-emerald-200 flex items-center px-2 truncate font-bold">
                          🔊 Dialogue_Normalized.wav
                        </div>
                        <div className="w-[30%] h-full bg-[#213b2c] border-r border-zinc-900 text-emerald-300/90 flex items-center px-2 truncate font-bold">
                          🔊 Dialogue_P2.wav
                        </div>
                        <div className="w-[35%] h-full bg-[#2a4d3a] text-emerald-200 flex items-center px-2 truncate font-bold">
                          🔊 Outro_VO.wav
                        </div>
                      </div>
                    </div>

                    {/* Track A2 - Foley Design & Score */}
                    <div className="grid grid-cols-[55px_1fr] gap-2 items-center">
                      <div className="text-zinc-400 font-bold text-center border-r border-zinc-700 text-xs bg-[#1a1a1a] py-0.5 rounded-l">A2</div>
                      <div className="w-full h-6 bg-[#1c1c1c] rounded-r border border-[#2d2d2d] flex items-center overflow-hidden">
                        <div className="w-[85%] h-full bg-[#1f3f42] text-teal-200 flex items-center px-2 truncate font-bold">
                          🎵 Background_Bed_Stereo.mp3 (Muted Mix)
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* PANEL 4: METADATA INSPECTOR (Right Side Panel) */}
          <div className="hidden md:flex md:col-span-3 bg-[#1a1a1a] flex-col h-[780px] p-5 overflow-y-auto">
            <div className="relative mb-5 border border-[#2c2c2c] rounded overflow-hidden shadow-inner">
              <img src={active.thumb} className="w-full h-32 object-cover opacity-90" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              <span className="absolute bottom-2 left-3 text-[10px] font-mono font-bold bg-zinc-900 text-sky-400 border border-zinc-800 px-1.5 py-0.5 rounded">
                METADATA
              </span>
            </div>
            
            <div className="space-y-5 flex-grow">
              <div>
                <p className="text-[11px] font-mono font-bold text-zinc-500 uppercase tracking-wider mb-1">Project / Client</p>
                <p className="text-xl text-white font-black tracking-tight leading-tight">{active.client}</p>
              </div>

              <div>
                <p className="text-[11px] font-mono font-bold text-zinc-500 uppercase tracking-wider mb-1.5">Core Function</p>
                <div className="bg-[#141414] border border-[#2c2c2c] px-3.5 py-2.5 rounded text-xs text-zinc-200 font-medium leading-relaxed shadow-inner">
                  {active.role}
                </div>
              </div>

              <div>
                <p className="text-[11px] font-mono font-bold text-zinc-500 uppercase tracking-wider mb-1.5">Engine Pipeline</p>
                <div className="flex flex-wrap gap-1.5">
                  {active.software.map((tool, index) => (
                    <span key={index} className="bg-[#262626] border border-[#3a3a3a] text-zinc-200 text-[10px] font-mono px-2.5 py-1 rounded shadow-sm">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-[11px] font-mono font-bold text-zinc-500 uppercase tracking-wider mb-1.5">Key Performance Markers</p>
                <ul className="space-y-2">
                  {active.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-2.5 text-xs text-zinc-300 font-medium leading-snug">
                      <span className="text-sky-500 mt-0.5 text-xs">▪</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="mt-5 pt-4 border-t border-[#2c2c2c]">
              <div className="grid grid-cols-2 gap-2 text-center text-white font-mono text-[10px]">
                <div className="bg-[#141414] border border-[#2c2c2c] p-2 rounded">
                  <span className="block text-zinc-500 text-[9px] uppercase font-bold mb-0.5">Output</span> 
                  {active.aspect === 'aspect-[9/16]' ? '9:16 Vertical' : '16:9 Master'}
                </div>
                <div className="bg-[#141414] border border-[#2c2c2c] p-2 rounded">
                  <span className="block text-zinc-500 text-[9px] uppercase font-bold mb-0.5">Render Profile</span> 
                  ProRes 422
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Mobile Asset Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-end justify-center p-4 md:hidden">
          <div className="bg-[#1a1a1a] w-full max-h-[80vh] rounded-t-2xl border-t border-[#2c2c2c] flex flex-col overflow-hidden shadow-2xl">
            <div className="p-4 border-b border-[#2c2c2c] flex justify-between items-center bg-[#222222]">
              <span className="text-xs font-mono text-zinc-300 uppercase tracking-widest font-bold">Select Source File</span>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-8 h-8 rounded-full bg-zinc-800 border border-zinc-700 text-zinc-200 flex items-center justify-center font-bold text-xs"
              >
                ✕
              </button>
            </div>

            <div className="flex border-b border-[#2c2c2c] bg-[#222222]">
              {/* FIXED: Replaced handleProjectSelect with setActiveId to swap categories without instantly closing drawer */}
              <button 
                onClick={() => { setActiveFolder('long-form'); setActiveId(PROJECTS.find(p => p.folder === 'long-form').id); }} 
                className={`flex-1 py-4 text-xs font-bold uppercase tracking-[0.1em] relative ${activeFolder === 'long-form' ? 'text-white font-black' : 'text-zinc-400'}`}
              >
                Long Form
                {activeFolder === 'long-form' && <div className="absolute bottom-0 inset-x-0 h-[2px] bg-[#1473e6]"></div>}
              </button>
              <button 
                onClick={() => { setActiveFolder('short-form'); setActiveId(PROJECTS.find(p => p.folder === 'short-form').id); }} 
                className={`flex-1 py-4 text-xs font-bold uppercase tracking-[0.1em] relative ${activeFolder === 'short-form' ? 'text-white font-black' : 'text-zinc-400'}`}
              >
                Short Form
                {activeFolder === 'short-form' && <div className="absolute bottom-0 inset-x-0 h-[2px] bg-[#1473e6]"></div>}
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-2 bg-[#141414]">
              {PROJECTS.filter(p => p.folder === activeFolder).map(p => (
                <button 
                  key={p.id} 
                  onClick={() => handleProjectSelect(p.id)} 
                  className={`w-full flex items-center gap-4 p-2 rounded border ${activeId === p.id ? 'bg-[#262626] border-[#3a3a3a] text-white' : 'border-[#222222] bg-[#1a1a1a] text-zinc-300'}`}
                >
                  <img src={p.thumb} className="w-16 h-11 object-cover rounded border border-zinc-800 flex-shrink-0" />
                  <div className="text-left overflow-hidden">
                    <p className="text-xs font-bold truncate">{p.title}</p>
                    <p className="text-[10px] text-zinc-400 font-mono mt-0.5 truncate">{p.client}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}