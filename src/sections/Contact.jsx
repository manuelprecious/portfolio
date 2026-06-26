import ContactImage from '../assets/images/myprofile.jpg';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto w-full bg-[#0A0A0A] border-t border-zinc-900/60 snap-start">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* Left Side: Photo + Identification */}
        <div className="flex flex-col gap-8">
          <div className="w-full aspect-[4/3] bg-zinc-900 border border-zinc-800 overflow-hidden">
            <img 
              src={ContactImage} 
              alt="Manuel Precious Profile" 
              className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-700 brightness-90 hover:brightness-100"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-4xl font-black uppercase tracking-tighter text-white leading-none">
              Let's work <br />
              <span className="text-zinc-600">together.</span>
            </h2>
            <p className="text-zinc-400 font-light text-lg leading-relaxed max-w-sm">
              Manuel Precious. Video editor and motion designer. Focused on high-retention storytelling and technical precision.
            </p>
          </div>
        </div>

        {/* Right Side: Action Interface */}
        <div className="flex flex-col gap-6 pt-0 lg:pt-12">
          
          <a 
            href="mailto:devmanuelprecious@gmail.com" 
            className="group flex flex-col p-8 border border-zinc-800 hover:border-white transition-all duration-300"
          >
            <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold mb-2">
              Inquiry
            </span>
            <span className="text-2xl font-bold text-white tracking-tight">
              Send a Message
            </span>
          </a>

          <a 
            href="https://www.facebook.com/manuel.n.precious/" 
            target="_blank" 
            rel="noreferrer"
            className="p-8 border border-zinc-800 hover:border-white transition-all duration-300 flex justify-between items-center"
          >
            <span className="text-2xl font-bold text-white tracking-tight">Facebook</span>
            <span className="text-zinc-600">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}