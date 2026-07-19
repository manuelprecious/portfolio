import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#050505] border-t border-zinc-800 py-6 md:py-8 px-4 md:px-8 font-sans select-none z-20 shrink-0">
      <div className="max-w-[1700px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        
        {/* Left Side: Copyright notice */}
        <p className="text-base font-normal text-zinc-400 m-0">
          &copy; {currentYear} All Rights Reserved.
        </p>

        {/* Right Side: Logo + Brand Name + Status beacon + LinkedIn */}
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 m-0">
          
          {/* Brand Name & Logo + Status Beacon */}
          <div className="flex items-center gap-3">
            <img 
              src="/logo_bg.svg" 
              alt="Mac Sterlin Logo" 
              className="h-5 w-5 object-contain opacity-80"
              aria-hidden="true"
            />
            <span className="text-base font-normal text-white tracking-tight">
              Mac Sterlin
            </span>
            
            {/* Status Beacon - Orange */}
            <span className="relative flex h-3 w-3 ml-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff9500] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#ff9500]"></span>
            </span>
          </div>

          {/* Divider */}
          <span className="hidden md:block w-px h-4 bg-zinc-700"></span>

          {/* LinkedIn Link */}
          <a 
            href="https://www.linkedin.com/company/macsterlin" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-base font-normal text-zinc-400 hover:text-[#ff9500] transition-colors duration-200 flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            LinkedIn
          </a>
        </div>

      </div>
    </footer>
  );
}