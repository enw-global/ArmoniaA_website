import { useRef } from "react";

import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";

import Navbar from "./components/Navbar";

import ProjectInfo from "./components/info/ProjectInfo";

import MouseFollowCountdown from "./components/MouseFollowCountdown";

import { ToastContainer } from "react-toastify";

function App() {
  // TODO: Store data in a database per project
  const target = new Date("2025-08-02T00:00:00");
  const projectInfoRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  const scrollToProjectInfo = () => {
    projectInfoRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToFooter = () => {
    footerRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar />
      <ToastContainer position="top-center"/>
      <MouseFollowCountdown targetDate={target} />
      <Hero targetDate={target} onScrollDown={scrollToProjectInfo} />
      <div ref={projectInfoRef}>
        <ProjectInfo onScrollDown={scrollToFooter} />
      </div>
      <div ref={footerRef}>
        <Footer />
      </div>
    </>
  );
}

export default App;
