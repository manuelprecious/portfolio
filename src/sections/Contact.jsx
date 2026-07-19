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
    <div className="w-full min-h-screen flex flex-col bg-[#050505] relative font-sans selection:bg-zinc-700 selection:text-white">
      
      {/* Top Spacing for Fixed Nav */}
      <div className="h-28 md:h-32 shrink-0" />
      
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

      {/* Content Wrapper */}
      <div className="max-w-[1700px] mx-auto px-4 md:px-8 w-full flex flex-col gap-3 md:gap-4 relative z-10 flex-1 pb-6 md:pb-8">
        
        {/* Balanced Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-4 items-start w-full">
          
          {/* Left Side: Profile Photo */}
          <div className="lg:col-span-4 w-full hidden lg:block relative">
            <div className="w-full aspect-[3/4] bg-[#080808] border border-zinc-800 overflow-hidden rounded-2xl shadow-lg relative group">
              <img 
                src={PLACEHOLDER_IMG} 
                alt="Profile" 
                className="w-full h-full object-cover object-center transition-all duration-700 opacity-80 brightness-90 group-hover:brightness-100 group-hover:scale-105 select-none"
              />
              {/* Subtle overlay gradient for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/60 via-transparent to-transparent pointer-events-none" />
              
              {/* Decorative corner accents */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-[#ff9500]/40 rounded-tl-lg" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-[#ff9500]/40 rounded-br-lg" />
            </div>
          </div>

          {/* Right Side: Identity + Form */}
          <div className="lg:col-span-8 flex flex-col w-full">
            
            {/* Identity Text */}
            <div className="mb-8 md:mb-10 w-full">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white tracking-tight">
                Start a <br />
                <span className="text-[#ff9500]">conversation.</span>
              </h2>
              <p className="text-zinc-400 mt-4 md:mt-5 tracking-[0.25em] text-base font-normal max-w-2xl">
                We're building products shaped by research, engineering, and long-term thinking. If our interests overlap, we'd love to hear from you.
              </p>
            </div>

            {/* Form Container - NLE Console Styling */}
            <div className="w-full bg-[#0d0d0d] border border-zinc-800 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.5)] p-2 sm:p-3 lg:p-4">
              
              {/* Top Panel Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#121212] border-b border-zinc-800 rounded-t-2xl shrink-0 select-none">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="text-sm font-normal text-zinc-400 uppercase tracking-wider">
                    System Status:
                  </span>
                  <span 
                    className={`text-sm font-normal uppercase px-3 py-1 rounded-lg transition-colors duration-300 border ${
                      status === 'SUCCESS' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' :
                      status === 'ERROR' ? 'bg-rose-500/10 text-rose-400 border-rose-500/20' :
                      status === 'SENDING' ? 'bg-[#ff9500]/10 text-[#ff9500] border-[#ff9500]/20 animate-pulse' :
                      'bg-zinc-800/50 text-[#ff9500] border-[#ff9500]/30'
                    }`}
                  >
                    {status === 'IDLE' ? '• Ready' : `• ${status}`}
                  </span>
                </div>
              </div>

              {/* Form Workspace */}
              <form ref={formRef} onSubmit={handleDispatch} className="p-4 lg:p-5 flex flex-col gap-5 text-left bg-[#080808] rounded-b-2xl border border-t-0 border-zinc-800">
                
                {/* Field Row 1: Full Name & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-base font-normal text-[#ff9500] tracking-wider uppercase">
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
                      className="w-full px-4 py-3.5 text-base font-normal rounded-xl border border-zinc-800 bg-[#121212] text-white placeholder:text-zinc-500 focus:outline-none focus:border-[#ff9500]/50 focus:bg-[#1a1a1a] transition-all duration-150 disabled:opacity-50"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-base font-normal text-[#ff9500] tracking-wider uppercase">
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
                      className="w-full px-4 py-3.5 text-base font-normal rounded-xl border border-zinc-800 bg-[#121212] text-white placeholder:text-zinc-500 focus:outline-none focus:border-[#ff9500]/50 focus:bg-[#1a1a1a] transition-all duration-150 disabled:opacity-50"
                    />
                  </div>
                </div>

                {/* Field Row 2: Message */}
                <div className="flex flex-col gap-2">
                  <label className="text-base font-normal text-[#ff9500] tracking-wider uppercase">
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
                    className="w-full px-4 py-3.5 text-base font-normal rounded-xl border border-zinc-800 bg-[#121212] text-white placeholder:text-zinc-500 focus:outline-none focus:border-[#ff9500]/50 focus:bg-[#1a1a1a] transition-all duration-150 disabled:opacity-50 resize-none min-h-[140px]"
                  />
                </div>

                {/* Bottom Actions and Status Logs */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-4 border-t border-zinc-800 mt-2">
                  
                  {/* Dynamic Status Log */}
                  <div 
                    className={`text-base font-normal flex items-center gap-3 transition-colors duration-200 ${
                      status === 'SUCCESS' ? 'text-emerald-400' :
                      status === 'ERROR' ? 'text-rose-400' :
                      status === 'SENDING' ? 'text-[#ff9500]' :
                      'text-[#ff9500]'
                    }`}
                  >
                    <span 
                      className={`w-2 h-2 rounded-full block transition-colors duration-200 ${
                        status === 'SUCCESS' ? 'bg-emerald-500' :
                        status === 'ERROR' ? 'bg-rose-500' :
                        status === 'SENDING' ? 'bg-[#ff9500] animate-pulse' :
                        'bg-[#ff9500]'
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
                    className="px-6 py-3.5 rounded-xl bg-white text-black text-base font-normal tracking-wider uppercase hover:bg-[#ff9500] transition-all duration-150 flex items-center justify-center gap-2 shadow-lg hover:shadow-[0_0_20px_rgba(255,149,0,0.4)] disabled:opacity-50 disabled:cursor-not-allowed shrink-0 group"
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
      <div className="w-full relative z-10 mt-auto">
        <Footer />
      </div>
    </div>
  );
}