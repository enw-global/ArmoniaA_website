import { useState, useEffect, useRef, memo } from "react";
import { sanityClient } from "../../lib/sanity";
import { FaChevronDown } from "react-icons/fa6";
import CountdownTimer from "../CountdownTimer";

interface VideoAsset {
  _id: string;
  title: string;
  url: string;
}

interface HeroProps {
  targetDate: Date;
  onScrollDown: () => void;
}

const VideoPlayer = memo(({ src, className }: { src: string; className: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    
    // Play video when it's loaded and handle any errors silently
    const handleCanPlay = () => {
      video.play().catch((error) => {
        console.log("Video play error:", error);
      });
    };
    
    video.addEventListener('canplaythrough', handleCanPlay);
    
    // Force play attempt in case the video is already cached
    video.play().catch(() => {});
    
    return () => {
      video.removeEventListener('canplaythrough', handleCanPlay);
    };
  }, []);
  
  return (
    <video
      ref={videoRef}
      src={src}
      muted
      loop
      playsInline
      preload="auto"
      autoPlay
      controlsList="nodownload nofullscreen noremoteplayback"
      disablePictureInPicture
      className={className}
    />
  );
});

VideoPlayer.displayName = 'VideoPlayer';

const Hero = ({ targetDate, onScrollDown }: HeroProps) => {
  const [video, setVideo] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    
    const controller = new AbortController();
    
    sanityClient
      .fetch<VideoAsset[]>(
        `*[_type == "videoAsset"]{ title, "url": videoFile.asset->url }`
      )
      .then((results) => {
        if (results.length > 0) {
          setVideo(results[0].url);
        } else {
          setError("No video assets found");
        }
      })
      .catch((err) => {
        console.error("Sanity failed to fetch data:", err);
        setError("Failed to load video");
      })
      .finally(() => {
        setIsLoading(false);
      });

    return () => {
      controller.abort();
    };
  }, []);

  if (isLoading) return <p className="text-center text-white">Loading video…</p>;
  if (error) return <p className="text-center text-white">Error: {error}</p>;
  if (!video) return <p className="text-center text-white">No video available</p>;

  return (
    <div className="relative flex flex-col justify-center items-center min-h-screen bg-black">
      <a
        target="_blank"
        href="https://www.youtube.com/channel/UCpaFxqAl9XVtBVAAdfKx3hw"
        className="rounded-3xl transition duration-400 border-white/30 w-full lg:w-[80%] max-w-5xl ease-in-out"
        rel="noopener noreferrer"
      >
        <section className="hidden lg:flex flex-grow justify-center py-6 items-center">
          <VideoPlayer 
            src={video} 
            className="max-w-full max-h-full object-contain" 
          />
        </section>
      </a>

      <section className="relative flex flex-col gap-10 md:gap-20 lg:hidden flex-grow justify-center items-center px-3 py-20 text-center">
        <div>
          <a
            target="_blank"
            href="https://www.youtube.com/channel/UCpaFxqAl9XVtBVAAdfKx3hw"
            className="hover:border-2 rounded-3xl transition duration-400 border-white/20 hover:border-white/50 w-full lg:w-[80%] max-w-5xl ease-in-out"
            rel="noopener noreferrer"
          >
            <VideoPlayer
              src={video}
              className="w-full max-w-lg object-cover rounded"
            />
          </a>
        </div>
        <div>
          <CountdownTimer targetDate={targetDate} />
        </div>
      </section>

      <div className="absolute bottom-0 flex justify-center py-6">
        <button className="cursor-pointer" onClick={onScrollDown}>
          <FaChevronDown className="text-white text-3xl" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
