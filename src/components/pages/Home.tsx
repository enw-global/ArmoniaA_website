import { Suspense, useRef } from "react";
import Footer from "../footer/Footer";
import ProjectInfo from "../info/ProjectInfo";
import MouseFollowCountdown from "../MouseFollowCountdown";
import { ToastContainer } from "react-toastify";
import { lazy } from "react";
import Loading from "../Loading";

const Hero = lazy(() => import("../hero/Hero"));

const Home = () => {
  // TODO: Store data in a database per project
  const target = new Date("2025-09-02T00:00:00");
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
      <ToastContainer position="top-center" />
      <MouseFollowCountdown targetDate={target} />
      <Suspense fallback={<Loading />}>
        <Hero targetDate={target} onScrollDown={scrollToProjectInfo} />
      </Suspense>
      <div ref={projectInfoRef}>
        <ProjectInfo onScrollDown={scrollToFooter} />
      </div>
      <div ref={footerRef}>
        <Footer />
      </div>
    </>
  );
};

export default Home;