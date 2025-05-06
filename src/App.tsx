import { useRef } from "react";

import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";

import Navbar from "./components/Navbar";

import ProjectInfo from "./components/info/ProjectInfo";

import MouseFollowCountdown from "./components/MouseFollowCountdown";

function App() {
  // TODO: Store data in a database per project
  const target = new Date("2025-06-02T00:00:00");
  const projectInfoRef = useRef<HTMLDivElement>(null);

  const scrollToProjectInfo = () => {
    projectInfoRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar />
      <MouseFollowCountdown targetDate={target} />
      <Hero targetDate={target} onScrollDown={scrollToProjectInfo} />
      <div ref={projectInfoRef}>
        <ProjectInfo />
      </div>
      <Footer />
    </>
  );
}

export default App;
