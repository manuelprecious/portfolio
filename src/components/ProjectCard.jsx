import { useEffect, useState } from 'react';
import VideoPlayer from './VideoPlayer';

export default function ProjectCard({ videoUrl, aspect = 'aspect-video' }) {
  const [cleanUrl, setCleanUrl] = useState(videoUrl);

  useEffect(() => {
    if (!videoUrl) return;

    let videoId = '';
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = videoUrl.match(regExp);

    if (match && match[2].length === 11) {
      videoId = match[2];
    }

    if (videoId) {
      const params = new URLSearchParams({
        modestbranding: '1',
        rel: '0',
        controls: '1', 
        iv_load_policy: '3',
        showinfo: '0'
      });
      setCleanUrl(`https://www.youtube.com/embed/${videoId}?${params.toString()}`);
    } else {
      setCleanUrl(videoUrl);
    }
  }, [videoUrl]);

  return (
    <div className={`relative w-full overflow-hidden rounded-xl ${aspect}`}>
      
      {/* Underlying YouTube Embed Component */}
      <VideoPlayer src={cleanUrl} ratio="h-full w-full" />
      
      {/* BRANDING COVER SHIELDS:
        Slightly pulled back in size (width & height percentages) to clear the dead-center 
        of the iframe, allowing users to cleanly hit the native YouTube Play button.
      */}

      {/* 1. Top-Left Header Blocker (Channel Name & Share Area) */}
      <div 
        className="absolute top-0 left-0 w-[55%] h-[12%] z-30 bg-transparent pointer-events-auto select-none"
      />

      {/* 2. Bottom-Left Blocker (Left Control Track) */}
      <div 
        className="absolute bottom-0 left-0 w-[15%] h-[12%] z-30 bg-transparent pointer-events-auto select-none"
      />

      {/* 3. Bottom-Right Blocker (YouTube Logo Redirect Link) */}
      <div 
        className="absolute bottom-0 right-0 w-[18%] h-[12%] z-30 bg-transparent pointer-events-auto select-none"
        title="Playback Monitor"
      />
    </div>
  );
}