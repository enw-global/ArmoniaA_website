import { useState, useEffect, useRef } from "react";
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

const Hero = ({ targetDate, onScrollDown }: HeroProps) => {
  const [video, setVideo] = useState<string | null>(null);
  const videoRef1 = useRef<HTMLVideoElement>(null);
  const videoRef2 = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    sanityClient
      .fetch<VideoAsset[]>(
        `*[_type == "videoAsset"]{ title, "url": videoFile.asset->url }`
      )
      .then((results) => {
        if (results.length > 0) setVideo(results[0].url);
      })
      .catch((err) => console.error("Sanity failed to fetch data:", err));
  }, []);

  useEffect(() => {
    if (!video) return;
    const v1 = videoRef1.current;
    const v2 = videoRef2.current;

    const onLoaded = () => {
      v1?.play().catch(() => {});
      v2?.play().catch(() => {});
    };

    v1?.addEventListener("loadedmetadata", onLoaded);
    return () => {
      v1?.removeEventListener("loadedmetadata", onLoaded);
    };
  }, [video]);

  if (!video) return <p className="text-center text-white">Loading video…</p>;

  return (
    <div className="relative flex flex-col justify-center items-center min-h-screen bg-black">
      <section className="hidden lg:flex flex-grow justify-center py-10 items-center">
        <video
          ref={videoRef1}
          src={video}
          autoPlay
          loop
          muted
          controlsList="nodownload nofullscreen noremoteplayback"
          disablePictureInPicture
          className="max-w-full max-h-full object-contain"
        />
      </section>

      <section className="relative flex flex-col gap-10 md:gap-20 lg:hidden flex-grow justify-center  items-center px-3 py-20 text-center">
        <div>
          <video
            ref={videoRef1}
            src={video}
            muted
            loop
            autoPlay
            controlsList="nodownload nofullscreen noremoteplayback"
            disablePictureInPicture
            className="w-full max-w-lg object-cover rounded"
          />
          <video
            ref={videoRef2}
            src={video}
            muted
            loop
            autoPlay
            controlsList="nodownload nofullscreen noremoteplayback"
            disablePictureInPicture
            className="w-full max-w-lg object-cover rounded"
          />
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
