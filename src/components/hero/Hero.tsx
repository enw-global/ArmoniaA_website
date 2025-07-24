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
  const [isPlaying, setIsPlaying] = useState(false);
  
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    

    const playVideo = async () => {
      try {
        await video.play();
        setIsPlaying(true);
      } catch (error) {
        console.log("Autoplay blocked, will try on user interaction:", error);
        setIsPlaying(false);
      }
    };
    

    const handleCanPlayThrough = () => {
      playVideo();
    };
    

    const handleLoadedData = () => {
      playVideo();
    };
    

    const handleUserInteraction = () => {
      if (!isPlaying) {
        playVideo();
      }
    };
    

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !isPlaying) {
          playVideo();
        }
      });
    };
    

    video.addEventListener('canplaythrough', handleCanPlayThrough);
    video.addEventListener('loadeddata', handleLoadedData);
    

    document.addEventListener('touchstart', handleUserInteraction, { once: true });
    document.addEventListener('click', handleUserInteraction, { once: true });
    document.addEventListener('scroll', handleUserInteraction, { once: true });
    

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1
    });
    observer.observe(video);
    

    playVideo();
    

    return () => {
      video.removeEventListener('canplaythrough', handleCanPlayThrough);
      video.removeEventListener('loadeddata', handleLoadedData);
      document.removeEventListener('touchstart', handleUserInteraction);
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('scroll', handleUserInteraction);
      observer.disconnect();
    };
  }, [isPlaying]);
  
  return (
    <video
      ref={videoRef}
      src={src}
      muted
      loop
      playsInline
      preload="auto"
      autoPlay
      controls={false}
      controlsList="nodownload nofullscreen noremoteplayback"
      disablePictureInPicture
      disableRemotePlayback
      webkit-playsinline="true"
      className={className}
      style={{ 
        WebkitTransform: 'translateZ(0)',
        transform: 'translateZ(0)'
      }}
    />
  );
});

VideoPlayer.displayName = 'VideoPlayer';

const Hero = ({ targetDate, onScrollDown }: HeroProps) => {
  const [video, setVideo] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
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
      });

    return () => {
      controller.abort();
    };
  }, []);

  if (error) return <p className="text-center text-white">Error: {error}</p>;
  if (!video) return <p className="text-center text-white">No video available</p>;

  return (
    <div className="relative flex flex-col justify-center items-center min-h-screen bg-black">
      <a
        target="_blank"
        href="https://www.youtube.com/channel/UCpaFxqAl9XVtBVAAdfKx3hw"
        className="rounded-3xl transition duration-400 border-white/30 w-full lg:w-[80%] max-w-5xl ease-in-out"
        rel="noopener noreferrer"
        aria-label="Watch on YouTube"
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
            aria-label="Watch on YouTube"
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
        <button className="cursor-pointer" onClick={onScrollDown} aria-label="Scroll down">
          <FaChevronDown className="text-white text-3xl" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
