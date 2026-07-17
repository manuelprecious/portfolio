import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-zinc-900 border-t border-zinc-700 py-4 px-4 font-mono select-none z-20 m-0 shrink-0">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        
        {/* Left Side: Copyright notice */}
        <p className="text-xs text-zinc-300 font-medium m-0">
          &copy; {currentYear} All Rights Reserved.
        </p>

        {/* Right Side: Logo + Status beacon */}
        <div className="flex items-center gap-3 text-[11px] tracking-wider text-zinc-100 font-bold uppercase m-0">
          
          {/* Small Logo Icon */}
          <img 
            src="/macsterlin.png" 
            alt="" 
            className="h-5 w-5 object-contain opacity-80"
            aria-hidden="true"
          />
          
          {/* Brand Name */}
          <span className="tracking-tighter">
            Mac Sterlin
          </span>

          {/* Status Beacon */}
          <span className="relative flex h-2 w-2 ml-1">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
        </div>

      </div>
    </footer>
  );
}