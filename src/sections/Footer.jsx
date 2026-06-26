import Contact from './Contact';

export default function Footer() {
  return (
    <>
      <Contact />

      <footer className="bg-[#0A0A0A] py-12 px-6 w-full border-t border-zinc-900 text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Minimal Navigation */}
          <div className="flex gap-8 text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-500">
            <a href="#portfolio-projects" className="hover:text-white transition-colors">Portfolio</a>
            <a href="#services" className="hover:text-white transition-colors">Services</a>
          </div>

          {/* Legal/Copyright */}
          <div className="text-right">
            <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
              © {new Date().getFullYear()} Manuel Precious
            </p>
          </div>

        </div>
      </footer>
    </>
  );
}