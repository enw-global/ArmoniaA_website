import { FaChevronDown } from "react-icons/fa6";

import BlurredRealityLogo from "../../assets/logos/Blurred_Reality_Logo.png";

const ProjectInfo = ({ onScrollDown }: { onScrollDown: () => void }) => {
  return (
    <section className="relative h-screen bg-black flex flex-col justify-center items-center text-white">
      <div className="text-center  flex flex-col justify-center items-center gap-20">
        <div className="space-y-5">
          <img
            src={BlurredRealityLogo}
            alt="Blurred Reality Logo"
            className=" w-full md:max-w-4xl lg:max-w-5xl px-10"
          />
          <h2 className="lg:text-4xl text-2xl">A Short Film</h2>
        </div>

        <div className="w-full max-w-sm sm:max-w-xs lg:max-w-5xl px-7">
          <ul className="text-start flex flex-col md:flex-col lg:flex-row gap-5">
            {[
              "Rooted in clarity, born from complexity, and shaped by honest intent.",
              "Unity without erasure, creating frameworks that honour. ",
              "Provoking dialogue where silence has lingered.",
              "Addressing blind spots with precision and care.",
            ].map((text, idx) => (
              <li
          key={idx}
          className="flex flex-row items-start gap-3 w-full lg:w-96"
              >
          <span className="flex-shrink-0 text-5xl md:text-4xl lg:text-7xl flex items-center justify-center font-bold">
            {idx + 1}
          </span>
          <span className="text-sm flex justify-center h-full items-center">
            {text}
          </span>
              </li>
            ))}
          </ul>
        </div>
        
      </div>

      <div className="absolute bottom-0 flex justify-center py-6 flex-col items-center space-y-5">
        <p>Re-Engineering the human experience.</p>
        <button className="cursor-pointer" onClick={onScrollDown} aria-label="Scroll down">
          <FaChevronDown className="text-white text-3xl" />
        </button>
      </div>
    </section>
  );
};

export default ProjectInfo;
