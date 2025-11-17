import { Suspense, useRef } from "react";
import Footer from "../footer/Footer";
import ProjectInfo from "../info/ProjectInfo";
// import MouseFollowCountdown from "../MouseFollowCountdown";
import { ToastContainer } from "react-toastify";
import { lazy } from "react";
import Loading from "../Loading";

const Hero = lazy(() => import("../hero/Hero"));

const Home = () => {
  const target = new Date("2025-09-02T00:00:00");
  const projectInfoRef = useRef<HTMLDivElement>(null);

  const scrollToProjectInfo = () => {
    projectInfoRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <ToastContainer position="top-center" />
      {/* <MouseFollowCountdown targetDate={target} /> */}
      <Suspense fallback={<Loading />}>
        <Hero targetDate={target} onScrollDown={scrollToProjectInfo} />
      </Suspense>
      <div ref={projectInfoRef}>
        <ProjectInfo/>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Home;