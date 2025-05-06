import { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa6";

const ProjectInfo = ({ onScrollDown }: { onScrollDown: () => void }) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkIsMobile = () => setIsMobile(window.innerWidth <= 1024);
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, [isMobile]);

  return (
    <section className="relative h-screen bg-black flex flex-col justify-center items-center text-white">
      {!isMobile ? (
        <div className="text-center  flex flex-col justify-center items-center gap-10">
          <div>
            <h1 className="text-white druk-title text-[102px] leading-20">
              BLURRED REALITY
            </h1>
            <h2 className="text-3xl">A short Film</h2>
          </div>
          <div>
            <img src="/armonia_a_logo.png" alt="" width={225} />
            <p>Re-Engineering the human experience.</p>
          </div>
          <div>
            <ul className="text-start list-disc">
              <li>Creative self-sufficiency</li>
              <li>Reshaping connotations associated to the foreign body. </li>
              <li>
                In a futuristic setting, the vibrant accent tones conveyed
                through chrome and silver detailing.
              </li>
              <li>Looking at the world through an Afrofuturist lens</li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="text-center flex flex-col justify-center items-center  align-element">
          <div>
            <h1 className="text-white text-3xl leading-20">BLURRED REALITY</h1>
          </div>

          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur temporibus numquam iste id illum dolores itaque unde?
              Harum provident voluptas cupiditate pariatur hic repudiandae
              tenetur! Beatae dicta eligendi fuga odio, ea doloribus neque
              possimus ex magni, cupiditate et minima officiis harum repudiandae
              tenetur dolores rerum voluptatum veritatis aliquam nostrum!
              Voluptates?
            </p>
          </div>
        </div>
      )}
      <div className="absolute bottom-0 flex justify-center py-6">
        <button className="cursor-pointer" onClick={onScrollDown}>
          <FaChevronDown className="text-white text-3xl" />
        </button>
      </div>
    </section>
  );
};

export default ProjectInfo;
