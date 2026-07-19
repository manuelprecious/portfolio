import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import KineticText from '../components/KineticText';

const PROJECTS = [
  {
    id: 1,
    folder: "long-form",
    title: "CrossEncoder-BERT-v2",
    category: "Dense Vector Retrieval",
    videoUrl: "https://example.com/placeholder-video-1.mp4",
    aspect: "aspect-video",
    thumb: "https://placehold.co/150x100/18181b/71717a?text=ML",
    client: "Internal Research",
    role: "Cross-attention semantic ranking, pairwise relevance optimization",
    software: ["PyTorch", "Sentence Transformers", "FastAPI"],
    highlights: [
      "Cross-attention scoring",
      "Pairwise ranking optimization",
      "Semantic document retrieval"
    ]
  },

  {
    id: 2,
    folder: "long-form",
    title: "SparseAutoEncoder-v3",
    category: "Latent Representation Learning",
    videoUrl: "https://example.com/placeholder-video-2.mp4",
    aspect: "aspect-video",
    thumb: "https://placehold.co/150x100/18181b/71717a?text=ML",
    client: "Internal Research",
    role: "Sparse latent encoding and compressed feature reconstruction",
    software: ["PyTorch", "NumPy", "CUDA"],
    highlights: [
      "Sparse feature encoding",
      "Latent space compression",
      "Reconstruction optimization"
    ]
  },

  {
    id: 3,
    folder: "long-form",
    title: "VisionTransformer-L16",
    category: "Self-Supervised Vision Learning",
    videoUrl: "https://example.com/placeholder-video-3.mp4",
    aspect: "aspect-video",
    thumb: "https://placehold.co/150x100/18181b/71717a?text=ML",
    client: "Internal Research",
    role: "Patch embedding, multi-head attention, visual representation learning",
    software: ["PyTorch", "OpenCV", "Albumentations"],
    highlights: [
      "Patch tokenization",
      "Multi-head attention",
      "Transfer learning"
    ]
  },

  {
    id: 4,
    folder: "long-form",
    title: "CLIP-EmbeddingModel",
    category: "Vision-Language Modeling",
    videoUrl: "https://example.com/placeholder-video-4.mp4",
    aspect: "aspect-video",
    thumb: "https://placehold.co/150x100/18181b/71717a?text=ML",
    client: "Internal Research",
    role: "Joint image-text embedding optimization using contrastive learning",
    software: ["PyTorch", "Transformers", "OpenCLIP"],
    highlights: [
      "Contrastive objectives",
      "Multimodal embeddings",
      "Zero-shot retrieval"
    ]
  },

  {
    id: 5,
    folder: "short-form",
    title: "TemporalFusionNetwork",
    category: "Sequence Forecasting",
    videoUrl: "https://example.com/placeholder-video-5.mp4",
    aspect: "aspect-video",
    thumb: "https://placehold.co/150x100/18181b/71717a?text=ML",
    client: "Internal Research",
    role: "Multi-horizon forecasting with temporal attention mechanisms",
    software: ["TensorFlow", "Pandas", "NumPy"],
    highlights: [
      "Temporal attention",
      "Multi-horizon prediction",
      "Sequence modeling"
    ]
  },

  {
    id: 6,
    folder: "short-form",
    title: "GraphAttentionNetwork",
    category: "Graph Representation Learning",
    videoUrl: "https://example.com/placeholder-video-6.mp4",
    aspect: "aspect-video",
    thumb: "https://placehold.co/150x100/18181b/71717a?text=ML",
    client: "Internal Research",
    role: "Node embedding via masked neighborhood attention",
    software: ["PyTorch Geometric", "NetworkX", "CUDA"],
    highlights: [
      "Attention aggregation",
      "Graph embeddings",
      "Node classification"
    ]
  },

  {
    id: 7,
    folder: "short-form",
    title: "DiffusionPolicy-v2",
    category: "Policy Optimization",
    videoUrl: "https://example.com/placeholder-video-7.mp4",
    aspect: "aspect-video",
    thumb: "https://placehold.co/150x100/18181b/71717a?text=ML",
    client: "Internal Research",
    role: "Diffusion-based trajectory generation for robotic control policies",
    software: ["PyTorch", "ROS 2", "Isaac Sim"],
    highlights: [
      "Trajectory diffusion",
      "Policy optimization",
      "Robot control"
    ]
  }
];

export default function ProjectGrid() {
  const [activeFolder, setActiveFolder] = useState('long-form');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState(PROJECTS[0].id);
  
  const filteredProjects = PROJECTS.filter(p => p.folder === activeFolder);
  const active = PROJECTS.find(p => p.id === activeId) || filteredProjects[0] || PROJECTS[0];

  const handleProjectSelect = (id) => {
    setActiveId(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <section 
      id="projects" 
      className="relative z-10 w-full pt-20 md:pt-24 pb-16 md:pb-24 px-4 md:px-8 bg-[#050505] font-sans selection:bg-zinc-700 selection:text-white"
    >
      {/* Dynamic Grid Overlay System */}
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

      <div className="max-w-[1700px] mx-auto relative z-10">
        
        {/* Section Title Header */}
        <div className="mb-8 md:mb-10 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-3 md:gap-4">
          <KineticText>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white tracking-tight font-sans">Deployed models</h2>
            <p className="text-zinc-400 mt-4 md:mt-5 tracking-[0.25em] text-base font-normal font-sans">MLOps suite // v2.0</p>
          </KineticText>

          {/* Mobile & Tablet Category Trigger */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden w-full sm:w-auto sm:min-w-[280px] p-3.5 bg-[#121212] border border-zinc-800 rounded-xl flex items-center justify-between text-zinc-400 active:bg-[#0a0a0a] transition-colors shadow-sm"
          >
            <div className="flex items-center gap-3 text-left font-sans">
              <span className="text-base tracking-wider text-zinc-400 font-normal">Pipeline:</span>
              <span className="text-lg font-normal tracking-wide text-white">
                {activeFolder === 'long-form' ? 'Supervised' : 'Unsupervised'}
              </span>
            </div>
            <div className="flex items-center justify-center bg-[#0a0a0a] w-8 h-8 rounded-full border border-zinc-800 ml-4">
              <span className="text-zinc-400 text-base">▼</span>
            </div>
          </button>
        </div>

        {/* WORKSPACE FRAME SHELL */}
        <div className="bg-[#0d0d0d] border border-zinc-800 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.5)] p-2 sm:p-3 lg:p-4 grid grid-cols-1 lg:grid-cols-12 gap-2 lg:gap-3 select-none min-h-0 w-full">
          
          {/* PANEL 1: MEDIA BIN (Left - Desktop Only) */}
          <div className="hidden lg:flex lg:col-span-3 bg-[#080808] border border-zinc-800 rounded-2xl flex-col lg:min-h-[320px] xl:min-h-[360px] overflow-hidden shadow-lg">
            <div className="flex border-b border-zinc-800 bg-[#121212] flex-shrink-0">
              <button 
                onClick={() => { setActiveFolder('long-form'); handleProjectSelect(PROJECTS.find(p => p.folder === 'long-form').id); }} 
                className={`flex-1 py-2.5 text-base font-normal tracking-wider transition-all relative font-sans ${activeFolder === 'long-form' ? 'bg-[#080808] text-white' : 'text-zinc-500 hover:text-zinc-300'}`}
              >
                Supervised
                {activeFolder === 'long-form' && <div className="absolute bottom-0 inset-x-0 h-0.5 bg-[#ff9500]"></div>}
              </button>
              <button 
                onClick={() => { setActiveFolder('short-form'); handleProjectSelect(PROJECTS.find(p => p.folder === 'short-form').id); }} 
                className={`flex-1 py-2.5 text-base font-normal tracking-wider transition-all relative font-sans ${activeFolder === 'short-form' ? 'bg-[#080808] text-white' : 'text-zinc-500 hover:text-zinc-300'}`}
              >
                Unsupervised
                {activeFolder === 'short-form' && <div className="absolute bottom-0 inset-x-0 h-0.5 bg-[#ff9500]"></div>}
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-2.5 space-y-1.5 bg-[#080808]">
              <p className="text-sm font-sans font-normal tracking-widest text-[#ff9500] px-1 pb-1">Model registry / dataset pool</p>
              {filteredProjects.map(p => (
                <button 
                  key={p.id} 
                  onClick={() => handleProjectSelect(p.id)} 
                  className={`w-full flex items-center gap-3 p-2 rounded-lg transition-all border ${activeId === p.id ? 'bg-[#121212] border-zinc-700 text-white shadow-sm' : 'border-transparent text-zinc-500 hover:bg-[#121212] hover:border-zinc-700'}`}
                >
                  <img src={p.thumb} className="w-14 h-10 object-cover rounded border border-zinc-800 flex-shrink-0" />
                  <div className="text-left overflow-hidden">
                    <p className="text-lg font-normal truncate tracking-tight text-white">{p.title}</p>
                    <p className="text-sm text-zinc-500 font-sans mt-0.5 truncate font-normal">{p.client}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* PANELS 2 & 3: MONITOR & TIMELINE ENGINE (Center) */}
          <div className="col-span-1 lg:col-span-6 flex flex-col bg-[#080808] border border-zinc-800 rounded-2xl overflow-hidden relative z-10 min-h-0 lg:min-h-[320px] xl:min-h-[360px] w-full shadow-lg">
            
            {/* Monitor Title Header Bar */}
            <div className="bg-[#121212] px-3 md:px-4 py-2 md:py-2.5 flex justify-between items-center border-b border-zinc-800 flex-shrink-0">
              <div className="flex items-center gap-2 min-w-0">
                <span className="w-2 h-2 rounded-full bg-red-500 flex-shrink-0 animate-pulse"></span>
                <span className="text-base md:text-lg font-sans font-normal text-white tracking-wide truncate block">{active.title}</span>
              </div>
              <span className="hidden sm:block text-sm md:text-base font-sans font-normal text-[#ff9500] tracking-widest flex-shrink-0">Run monitor</span>
            </div>
            
            {/* Main Program Playback Output */}
            <div className="flex-1 flex items-center justify-center p-2 md:p-3 bg-[#080808] min-h-0 relative z-20">
              <div className="relative w-full shadow-sm rounded-lg md:rounded-xl overflow-hidden border border-zinc-800 bg-black max-w-4xl">
                <ProjectCard videoUrl={active.videoUrl} aspect={active.aspect} />
              </div>
            </div>

            {/* TIMELINE COMPONENT CONTAINER */}
            <div className="bg-[#121212] border-t border-zinc-800 p-2 md:p-3 font-sans selection:bg-transparent overflow-hidden relative z-10 w-full flex-shrink-0 block">
              <div className="overflow-x-auto w-full pb-1 min-h-0">
                <div className="min-w-[500px] lg:min-w-0 w-full flex flex-col gap-1 md:gap-1.5">

                  {/* Timeline Header Track Controls */}
                  <div className="grid grid-cols-[40px_1fr] items-center mb-8 border-b border-zinc-800 pb-6 px-1">
                    <div className="text-sm md:text-base text-zinc-500 font-normal tracking-wider">00:00</div>
                    <div className="relative w-full h-3 md:h-4 flex items-end">
                      <div className="absolute inset-x-0 bottom-0 h-1.5 border-b border-zinc-800 flex justify-between px-2 text-sm text-zinc-500 font-normal pointer-events-none">
                        <span>|</span><span>.</span><span>|</span><span>.</span><span>|</span><span>.</span><span>|</span>
                      </div>
                      <div className="absolute left-[35%] bottom-0 w-0.5 h-3 md:h-4 bg-[#ff9500] z-10">
                        <div className="absolute -top-1 -left-1 w-2 h-2 bg-[#ff9500] rotate-45 rounded-sm"></div>
                      </div>
                    </div>
                  </div>

                  {/* Multi-Track Sequencer Rows */}
                  <div className="space-y-1 text-base w-full">
                    
                    {/* Track L1 */}
                    <div className="grid grid-cols-[40px_1fr] gap-1.5 md:gap-2 items-center">
                      <div className="text-zinc-500 font-normal text-center border-r border-zinc-800 text-sm md:text-base bg-[#121212] py-0.5 rounded select-none">L1</div>
                      <div className="relative h-6 md:h-7 flex gap-0.5 w-full bg-[#080808] rounded border border-zinc-800 overflow-hidden shadow-sm">
                        <div className="w-[30%] h-full bg-zinc-800 border-r border-zinc-700 text-zinc-300 flex items-center px-2 truncate font-normal text-sm md:text-base">
                          tokenizer_embedding
                        </div>
                        <div className="w-[10%]"></div>
                        <div className="w-[45%] h-full bg-zinc-800 border-x border-zinc-700 text-zinc-300 flex items-center px-2 truncate font-normal text-sm md:text-base">
                          multi_head_attention.weights
                        </div>
                      </div>
                    </div>

                    {/* Track L2 */}
                    <div className="grid grid-cols-[40px_1fr] gap-1.5 md:gap-2 items-center">
                      <div className="text-zinc-500 font-normal text-center border-r border-zinc-800 text-sm md:text-base bg-[#121212] py-0.5 rounded select-none">L2</div>
                      <div className="relative h-6 md:h-7 flex gap-0.5 w-full bg-[#080808] rounded border border-zinc-800 overflow-hidden shadow-sm">
                        <div className="w-[40%] h-full bg-zinc-800 border-r border-zinc-700 text-zinc-300 flex items-center px-2 truncate font-normal text-sm md:text-base">
                          transformer_block_01_forward
                        </div>
                        <div className="w-[25%] h-full bg-zinc-800 border-r border-zinc-700 text-zinc-300 flex items-center px-2 truncate font-normal text-sm md:text-base">
                          transformer_block_02_attention
                        </div>
                        <div className="w-[35%] h-full bg-zinc-800 text-zinc-300 flex items-center px-2 truncate font-normal text-sm md:text-base">
                          layer_norm_output_heads
                        </div>
                      </div>
                    </div>

                    <div className="h-px bg-zinc-800 my-0.5 w-full"></div>

                    {/* Track D1 */}
                    <div className="grid grid-cols-[40px_1fr] gap-1.5 md:gap-2 items-center">
                      <div className="text-zinc-500 font-normal text-center border-r border-zinc-800 text-sm md:text-base bg-[#121212] py-0.5 rounded select-none">D1</div>
                      <div className="relative h-6 md:h-7 flex gap-0.5 w-full bg-[#080808] rounded border border-zinc-800 overflow-hidden shadow-sm">
                        <div className="w-[40%] h-full bg-zinc-800 border-r border-zinc-700 text-zinc-300 flex items-center px-2 truncate font-normal text-sm md:text-base">
                          train_split_chunk_a.parquet
                        </div>
                        <div className="w-[25%] h-full bg-zinc-800 border-r border-zinc-700 text-zinc-300 flex items-center px-2 truncate font-normal text-sm md:text-base">
                          train_split_chunk_b.parquet
                        </div>
                        <div className="w-[35%] h-full bg-zinc-800 text-zinc-300 flex items-center px-2 truncate font-normal text-sm md:text-base">
                          evaluation_outros.parquet
                        </div>
                      </div>
                    </div>

                    {/* Track D2 */}
                    <div className="grid grid-cols-[40px_1fr] gap-1.5 md:gap-2 items-center">
                      <div className="text-zinc-500 font-normal text-center border-r border-zinc-800 text-sm md:text-base bg-[#121212] py-0.5 rounded select-none">D2</div>
                      <div className="w-full h-6 md:h-7 bg-[#080808] rounded border border-zinc-800 flex items-center overflow-hidden shadow-sm">
                        <div className="w-[90%] h-full bg-zinc-800 text-zinc-300 flex items-center px-2 truncate font-normal text-sm md:text-base">
                          evaluation_validation_set.jsonl
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            {/* MOBILE / TABLET INJECTED INFOSPECTOR SYSTEM */}
            <div className="lg:hidden w-full bg-[#080808] border-t border-zinc-800 p-3 md:p-4 space-y-4">
              <div className="bg-[#121212] border border-zinc-800 rounded-xl p-3 shadow-sm">
                <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-[#ff9500]/10 text-[#ff9500] text-sm font-normal tracking-wide mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ff9500]"></span>
                  Metadata inspector // status live
                </span>
                <p className="text-base font-normal text-zinc-500 tracking-widest mb-1">Model architecture / owner</p>
                <p className="text-3xl text-white font-normal tracking-tight">{active.client}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-[#121212] border border-zinc-800 rounded-xl p-3 shadow-sm">
                  <p className="text-base font-normal text-zinc-500 tracking-widest mb-2">Objective & loss function</p>
                  <p className="text-lg text-zinc-400 leading-relaxed font-normal">{active.role}</p>
                </div>

                <div className="bg-[#121212] border border-zinc-800 rounded-xl p-3 shadow-sm">
                  <p className="text-base font-normal text-zinc-500 tracking-widest mb-2">Stack / framework</p>
                  <div className="flex flex-wrap gap-1.5">
                    {active.software.map((tool, index) => (
                      <span key={index} className="bg-[#080808] border border-zinc-800 text-zinc-300 text-base font-normal px-2.5 py-1 rounded-md">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-[#121212] border border-zinc-800 rounded-xl p-3 shadow-sm">
                <p className="text-base font-normal text-zinc-500 tracking-widest mb-2">Evaluation metrics</p>
                <ul className="space-y-2">
                  {active.highlights.map((highlight, index) => (
                    <li key={index} className="text-lg text-white font-normal pl-3 border-l-2 border-[#ff9500]">
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div className="bg-[#121212] border border-zinc-800 rounded-xl p-2.5 text-center shadow-sm">
                  <span className="block text-zinc-500 text-sm font-normal mb-0.5">Format</span> 
                  <span className="text-white text-base font-normal">FP16 Tensor</span>
                </div>
                <div className="bg-[#121212] border border-zinc-800 rounded-xl p-2.5 text-center shadow-sm">
                  <span className="block text-zinc-500 text-sm font-normal mb-0.5">Runtime profile</span> 
                  <span className="text-emerald-500 text-base font-normal">CUDA Kernels</span>
                </div>
              </div>
            </div>

          </div>

          {/* PANEL 4: METADATA INSPECTOR (Right - Desktop Only) */}
          <div className="hidden lg:flex lg:col-span-3 bg-[#080808] border border-zinc-800 rounded-2xl flex-col overflow-hidden shadow-lg">
            
            {/* Scrollable Content Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              
              {/* Asset Preview Window */}
              <div className="relative rounded-xl overflow-hidden border border-zinc-800 shadow-sm bg-[#121212]">
                <img src={active.thumb} className="w-full h-24 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              {/* Badge */}
              <div>
                <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-[#ff9500]/10 text-[#ff9500] text-sm tracking-wide font-normal">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ff9500]"></span>
                  Hyperparameter engine
                </span>
              </div>

              {/* Owner Section */}
              <div>
                <p className="text-base font-normal text-zinc-400 tracking-wider mb-1">Model architecture / owner</p>
                <p className="text-3xl font-normal text-white tracking-tight">{active.client}</p>
              </div>

              {/* Objective Section */}
              <div>
                <p className="text-base font-normal text-zinc-400 tracking-wider mb-2">Objective & loss function</p>
                <div className="bg-[#121212] border border-zinc-800 rounded-xl p-3 text-lg font-normal text-zinc-300 leading-relaxed shadow-sm">
                  {active.role}
                </div>
              </div>

              {/* Stack Section */}
              <div>
                <p className="text-base font-normal text-zinc-400 tracking-wider mb-2">Stack / framework</p>
                <div className="flex flex-wrap gap-2">
                  {active.software.map((tool, index) => (
                    <span key={index} className="bg-[#121212] border border-zinc-800 text-zinc-300 text-base font-normal px-3 py-1.5 rounded-lg shadow-sm">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Metrics Section - Clean List */}
              <div>
                <p className="text-base font-normal text-zinc-400 tracking-wider mb-2">Evaluation metrics</p>
                <ul className="space-y-2">
                  {active.highlights.map((highlight, index) => (
                    <li key={index} className="text-lg font-normal text-white pl-3 border-l-2 border-[#ff9500]">
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Footer Data Grid */}
            <div className="p-3 border-t border-zinc-800 bg-[#121212]/50 backdrop-blur-sm">
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-[#121212] border border-zinc-800 rounded-lg p-2.5 text-center shadow-sm">
                  <span className="block text-zinc-400 text-sm font-normal mb-0.5">Format</span>
                  <span className="text-white text-base font-normal">FP16 Tensor</span>
                </div>
                <div className="bg-[#121212] border border-zinc-800 rounded-lg p-2.5 text-center shadow-sm">
                  <span className="block text-zinc-400 text-sm font-normal mb-0.5">Runtime profile</span>
                  <span className="text-emerald-500 text-base font-normal">CUDA Kernels</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* FLOATING ISLAND MODAL */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 lg:hidden">
          <div className="bg-[#121212] w-full max-w-xl max-h-[80vh] rounded-2xl border border-zinc-800 flex flex-col overflow-hidden shadow-2xl my-auto mx-2">
            <div className="p-3 md:p-4 border-b border-zinc-800 flex justify-between items-center bg-[#080808]">
              <span className="text-base font-sans text-white tracking-wider font-normal">Select configuration file</span>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-8 h-8 rounded-full bg-[#121212] border border-zinc-800 text-white flex items-center justify-center font-normal text-base hover:bg-zinc-800 transition-colors shadow-sm"
              >
                ×
              </button>
            </div>

            <div className="flex border-b border-zinc-800 bg-[#121212]">
              <button 
                onClick={() => { setActiveFolder('long-form'); setActiveId(PROJECTS.find(p => p.folder === 'long-form').id); }} 
                className={`flex-1 py-3 md:py-3.5 text-base font-normal tracking-wider font-sans relative ${activeFolder === 'long-form' ? 'text-white bg-[#080808]' : 'text-zinc-500'}`}
              >
                Supervised
                {activeFolder === 'long-form' && <div className="absolute bottom-0 inset-x-0 h-0.5 bg-[#ff9500]"></div>}
              </button>
              <button 
                onClick={() => { setActiveFolder('short-form'); setActiveId(PROJECTS.find(p => p.folder === 'short-form').id); }} 
                className={`flex-1 py-3 md:py-3.5 text-base font-normal tracking-wider font-sans relative ${activeFolder === 'short-form' ? 'text-white bg-[#080808]' : 'text-zinc-500'}`}
              >
                Unsupervised
                {activeFolder === 'short-form' && <div className="absolute bottom-0 inset-x-0 h-0.5 bg-[#ff9500]"></div>}
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-3 space-y-1.5 bg-[#080808]">
              {PROJECTS.filter(p => p.folder === activeFolder).map(p => (
                <button 
                  key={p.id} 
                  onClick={() => handleProjectSelect(p.id)} 
                  className={`w-full flex items-center gap-3 p-2 rounded-lg border transition-all ${activeId === p.id ? 'bg-[#121212] border-zinc-700 text-white shadow-sm' : 'border-zinc-800 bg-[#121212] text-zinc-500 hover:bg-[#080808]'}`}
                >
                  <img src={p.thumb} className="w-14 h-10 object-cover rounded border border-zinc-800 flex-shrink-0" />
                  <div className="text-left overflow-hidden">
                    <p className="text-lg font-normal truncate text-white">{p.title}</p>
                    <p className="text-sm text-zinc-500 font-sans mt-0.5 truncate font-normal">{p.client}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Background Extender to prevent gaps at the bottom */}
      <div className="absolute left-0 right-0 bottom-0 h-[100vh] bg-[#050505] -z-10 pointer-events-none"></div>
    </section>
  );
}