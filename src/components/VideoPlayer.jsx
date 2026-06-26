export default function VideoPlayer({ src = "", ratio = 'w-full h-full' }) {
  if (!src) {
    return (
      <div className={`relative w-full overflow-hidden bg-zinc-900 flex items-center justify-center ${ratio}`}>
        <p className="text-zinc-600 text-[10px] uppercase tracking-widest">No source available</p>
      </div>
    );
  }

  let cleanSrc = src.includes('embed/') ? src : src.replace('watch?v=', 'embed/');
  const hasParams = cleanSrc.includes('?');
  const finalUrl = `${cleanSrc}${hasParams ? '&' : '?'}mute=0&autoplay=0`;

  return (
    /* FIXED: Switched from pointer-events-none to pointer-events-auto */
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