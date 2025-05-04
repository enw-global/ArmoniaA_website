import { useState, useEffect, useRef } from "react";
import { sanityClient } from "../../lib/sanity";

import { FaChevronDown } from "react-icons/fa6";
import { FaChevronUp } from "react-icons/fa6";

import { useContext } from "react";
import { InfoContext } from "../../context/InfoContext";
import CountdownTimer from "../CountdownTimer";

interface VideoAsset {
  _id: string;
  title: string;
  url: string;
}

const Hero = ({ targetDate }: { targetDate: Date }) => {
  const [video, setVideo] = useState<string | null>(null);
  const videoRef1 = useRef<HTMLVideoElement>(null);
  const videoRef2 = useRef<HTMLVideoElement>(null);

  const { activeInfo, setActiveInfo } = useContext(InfoContext);

  useEffect(() => {
    sanityClient
      .fetch<VideoAsset[]>(
        `*[_type == "videoAsset"]{ title, "url": videoFile.asset->url }`
      )
      .then((results) => {
        if (results.length > 0) {
          setVideo(results[0].url);
        }
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
  if (!video) return <p>Loading video…</p>;

  return (
    <>
      <section className="hidden sm:flex h-[87.5vh] bg-black justify-center">
        <video
          ref={videoRef1}
          src={video}
          controls
          autoPlay
          loop
          muted
          controlsList="nodownload nofullscreen noremoteplayback"
          disablePictureInPicture
          className="max-w-full"
        />
      </section>

      <section className="flex sm:hidden flex-col h-full bg-black pb-14 px-5">
        <video
          ref={videoRef1}
          src={video}
          muted
          loop
          autoPlay
          controlsList="nodownload nofullscreen noremoteplayback"
          disablePictureInPicture
          className="w-full flex-1 object-cover pb-5"
        />
        <video
          ref={videoRef2}
          src={video}
          muted
          loop
          autoPlay
          controlsList="nodownload nofullscreen noremoteplayback"
          disablePictureInPicture
          className="w-full flex-1 object-cover"
        />
        <CountdownTimer targetDate={targetDate} />
      </section>

      <div className="bg-black flex justify-center">
        <button
          className="cursor-pointer"
          onClick={() => setActiveInfo(!activeInfo)}
        >
          {!activeInfo ? (
            <FaChevronDown className="text-white text-3xl" />
          ) : (
            <FaChevronUp className="text-white text-3xl" />
          )}
        </button>
      </div>
    </>
  );
};

export default Hero;
