import { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import Footer from './Footer'; 

const PLACEHOLDER_IMG = "https://placehold.co/600x800/18181b/71717a?text=Profile";

export default function Contact() {
  const formRef = useRef();
  const timeoutRef = useRef(null);
  
  // System States
  const [status, setStatus] = useState('IDLE'); 
  const [formData, setFormData] = useState({
    sender_name: '',
    sender_email: '',
    message_payload: ''
  });

  // Cleanup timeout on unmount to prevent memory leaks
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDispatch = async (e) => {
    e.preventDefault();
    if (!formData.sender_name || !formData.sender_email || !formData.message_payload) return;

    setStatus('SENDING');

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      
      setStatus('SUCCESS');
      setFormData({ sender_name: '', sender_email: '', message_payload: '' });
      
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setStatus('IDLE'), 5000);
      
    } catch (error) {
      console.error('Email Send Error:', error);
      setStatus('ERROR');
      
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setStatus('IDLE'), 5000);
    }
  };

  return (
    // Root container: Full height, matching the site's core #050505 background
    <div className="w-full h-full flex flex-col bg-[#050505] pt-12 lg:pt-20 relative">
      
      {/* Subtle Grid Overlay (Matching other sections) */}
      <div 
        className="absolute inset-x-0 top-0 h-[40vh] z-0 pointer-events-none select-none opacity-[0.25]"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
        }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>

      {/* Content Wrapper */}
      <div className="flex-1 flex flex-col justify-end w-full max-w-[1800px] mx-auto z-10 px-6 md:px-12 lg:px-16 pb-16 lg:pb-24 relative">
        
        {/* Balanced Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-24 items-start w-full">
          
          {/* Left Side: Profile Photo */}
          <div className="lg:col-span-5 w-full hidden lg:block relative">
            <div className="w-full aspect-[3/4] bg-[#0a0a0a] border border-zinc-800 overflow-hidden rounded-2xl shadow-2xl relative group">
              <img 
                src={PLACEHOLDER_IMG} 
                alt="Profile" 
                className="w-full h-full object-cover object-center transition-all duration-700 opacity-80 brightness-90 group-hover:brightness-100 group-hover:scale-105 select-none"
              />
              {/* Subtle overlay gradient for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/60 via-transparent to-transparent pointer-events-none" />
              
              {/* Decorative corner accents */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-white/20 rounded-tl-lg" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-white/20 rounded-br-lg" />
            </div>
          </div>

          {/* Right Side: Identity + Form */}
          <div className="lg:col-span-7 flex flex-col w-full">
            
            {/* Identity Text */}
            <div className="space-y-6 mb-10">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-white leading-[0.95]">
                Start a <br />
                <span className="text-zinc-600">conversation.</span>
              </h2>
              <p className="text-zinc-400 font-medium text-base lg:text-lg leading-relaxed max-w-2xl">
                We're building products shaped by research, engineering, and long-term thinking. If our interests overlap, we'd love to hear from you.
              </p>
            </div>

            {/* Form Container - NLE Console Styling */}
            <div className="w-full bg-[#0d0d0d] border border-zinc-800 rounded-2xl shadow-[0_12px_32px_rgba(0,0,0,0.6)] overflow-hidden">
              
              {/* Top Panel Bar */}
              <div className="flex items-center justify-between px-6 py-4 bg-[#121212] border-b border-zinc-800 shrink-0 select-none">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase font-bold">
                    System Status:
                  </span>
                  <span 
                    className={`text-[10px] font-mono font-black uppercase px-2.5 py-1 rounded transition-colors duration-300 ${
                      status === 'SUCCESS' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' :
                      status === 'ERROR' ? 'bg-rose-500/10 text-rose-400 border border-rose-500/20' :
                      status === 'SENDING' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20 animate-pulse' :
                      'bg-zinc-800/50 text-zinc-400 border border-zinc-700'
                    }`}
                  >
                    {status === 'IDLE' ? '• Ready' : `• ${status}`}
                  </span>
                </div>
              </div>

              {/* Form Workspace */}
              <form ref={formRef} onSubmit={handleDispatch} className="p-6 md:p-8 flex flex-col gap-6 text-left">
                
                {/* Field Row 1: Full Name & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2.5">
                    <label className="font-mono text-[10px] tracking-[0.15em] text-zinc-500 font-bold uppercase">
                      Full Name
                    </label>
                    <input 
                      type="text"
                      name="sender_name"
                      value={formData.sender_name}
                      onChange={handleChange}
                      required
                      disabled={status === 'SENDING'}
                      placeholder="Enter your name"
                      className="w-full px-4 py-3.5 font-mono text-sm rounded-xl border border-zinc-800 bg-[#0a0a0a] text-white placeholder:text-zinc-600 focus:outline-none focus:border-zinc-600 focus:bg-[#121212] transition-all duration-150 disabled:opacity-50"
                    />
                  </div>

                  <div className="flex flex-col gap-2.5">
                    <label className="font-mono text-[10px] tracking-[0.15em] text-zinc-500 font-bold uppercase">
                      Email Address
                    </label>
                    <input 
                      type="email"
                      name="sender_email"
                      value={formData.sender_email}
                      onChange={handleChange}
                      required
                      disabled={status === 'SENDING'}
                      placeholder="name@example.com"
                      className="w-full px-4 py-3.5 font-mono text-sm rounded-xl border border-zinc-800 bg-[#0a0a0a] text-white placeholder:text-zinc-600 focus:outline-none focus:border-zinc-600 focus:bg-[#121212] transition-all duration-150 disabled:opacity-50"
                    />
                  </div>
                </div>

                {/* Field Row 2: Message */}
                <div className="flex flex-col gap-2.5">
                  <label className="font-mono text-[10px] tracking-[0.15em] text-zinc-500 font-bold uppercase">
                    Your Message
                  </label>
                  <textarea 
                    name="message_payload"
                    rows="5"
                    value={formData.message_payload}
                    onChange={handleChange}
                    required
                    disabled={status === 'SENDING'}
                    placeholder="Type your message here..."
                    className="w-full px-4 py-3.5 font-mono text-sm rounded-xl border border-zinc-800 bg-[#0a0a0a] text-white placeholder:text-zinc-600 focus:outline-none focus:border-zinc-600 focus:bg-[#121212] transition-all duration-150 disabled:opacity-50 resize-none min-h-[140px]"
                  />
                </div>

                {/* Bottom Actions and Status Logs */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-6 pt-6 border-t border-zinc-800 mt-2">
                  
                  {/* Dynamic Status Log */}
                  <div 
                    className={`font-mono text-xs tracking-wide font-medium flex items-center gap-2.5 transition-colors duration-200 ${
                      status === 'SUCCESS' ? 'text-emerald-400' :
                      status === 'ERROR' ? 'text-rose-400' :
                      status === 'SENDING' ? 'text-amber-400' :
                      'text-zinc-500'
                    }`}
                  >
                    <span 
                      className={`w-2 h-2 rounded-full block transition-colors duration-200 ${
                        status === 'SUCCESS' ? 'bg-emerald-500' :
                        status === 'ERROR' ? 'bg-rose-500' :
                        status === 'SENDING' ? 'bg-amber-500 animate-pulse' :
                        'bg-zinc-700'
                      }`} 
                    />
                    {status === 'IDLE' && 'Ready to transmit.'}
                    {status === 'SENDING' && 'Transmitting payload...'}
                    {status === 'SUCCESS' && 'Payload delivered successfully.'}
                    {status === 'ERROR' && 'Transmission failed. Retry.'}
                  </div>

                  {/* Action Button */}
                  <button
                    type="submit"
                    disabled={status === 'SENDING'}
                    className="px-6 py-3.5 rounded-xl bg-white text-black hover:bg-zinc-200 font-mono text-xs tracking-wider uppercase font-black transition-all duration-150 active:scale-[0.98] flex items-center justify-center gap-2 shadow-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] disabled:opacity-50 disabled:cursor-not-allowed group shrink-0"
                  >
                    {status === 'SENDING' ? 'Sending...' : 'Send Message'}
                    <span className="text-black group-hover:translate-x-1 transition-transform duration-150">→</span>
                  </button>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer: Full width, sits at the very bottom edge */}
      <div className="w-full shrink-0 relative z-10">
        <Footer />
      </div>
    </div>
  );
}