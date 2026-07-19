export default function VideoPlayer({ src = "", ratio = 'w-full h-full' }) {
  if (!src || src.includes("example.com")) {
    return (
      <div className={`relative w-full overflow-hidden bg-[#0a0a0a] border border-zinc-800 flex items-center justify-center ${ratio}`}>
        <img 
          src="https://placehold.co/150x100/18181b/71717a?text=Model" 
          alt="Model Preview Placeholder" 
          className="absolute inset-0 w-full h-full object-cover opacity-20 select-none pointer-events-none"
        />
        <div className="relative z-10 bg-[#121212]/90 backdrop-blur-sm border border-zinc-700 px-4 py-2 rounded-lg shadow-sm">
          <p className="text-zinc-400 text-sm font-sans font-normal uppercase tracking-wider text-center">
            Offline / Demo Run
          </p>
        </div>
      </div>
    );
  }

  let cleanSrc = src.includes('embed/') ? src : src.replace('watch?v=', 'embed/');
  const hasParams = cleanSrc.includes('?');
  const finalUrl = `${cleanSrc}${hasParams ? '&' : '?'}mute=0&autoplay=0`;

  return (
    <div className={`relative overflow-hidden pointer-events-auto ${ratio}`}>
      <iframe
        className="absolute top-0 left-0 w-full h-full border-0"
        src={finalUrl}
        title="Video Player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}