import { useState, useEffect } from "react";
import { sanityClient } from "../../lib/sanity";

interface VideoAsset {
  _id: string;
  title: string;
  url: string;
}

const Hero = () => {
  const [video, setVideo] = useState<string | null>(null);

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
  if (!video) return <p>Loading video…</p>;
  return (
    <section className="h-screen bg-black flex justify-center py-20">
      <video
        controls
        autoPlay
        muted
        controlsList="nodownload nofullscreen noremoteplayback"
        disablePictureInPicture
        className="max-w-[100%]"
      >
        <source src={video} type="video/mp4" />
      </video>
    </section>
  );
};

export default Hero;
