import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import {
  Dialog,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import { GiHamburgerMenu as Hamburger } from "react-icons/gi";
import { getCopyrightYear } from "@/utils/utils";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isNavMenuOpen, setIsNavMenuOpen] = useState<boolean>(false);
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 100,
    y: 100,
  });
  const [velocity, setVelocity] = useState<{ x: number; y: number }>({
    x: 2,
    y: 2,
  });
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isModalOpen) return;

    let animationFrame: number;

    const move = () => {
      const dialog = dialogRef.current;
      if (!dialog) return;

      const { innerWidth, innerHeight } = window;

      const rect = dialog.getBoundingClientRect();

      let newX = position.x + velocity.x;
      let newY = position.y + velocity.y;

      if (newX <= 0 || newX + rect.width >= innerWidth) {
        setVelocity((v) => ({ ...v, x: -v.x }));
      }
      if (newY <= 0 || newY + rect.height >= innerHeight) {
        setVelocity((v) => ({ ...v, y: -v.y }));
      }
      setPosition((prev) => ({
        x: prev.x + velocity.x,
        y: prev.y + velocity.y,
      }));

      animationFrame = requestAnimationFrame(move);
    };
    animationFrame = requestAnimationFrame(move);
    return () => cancelAnimationFrame(animationFrame);
  }, [isModalOpen, position, velocity]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsModalOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen]);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  return (
    <header className="bg-gradient-to-b from-black to-transparent fixed h-16 flex flex-col justify-center w-full z-50">
      <nav className=" w-full" aria-label="Main navigation">
        <div className="px-5 flex flex-row justify-between items-center">
          <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
            <DialogTrigger asChild>
              <button
                className="p-0 border-0 bg-transparent a-mother-spark-button cursor-pointer"
                aria-label="Open a_Mother information"
              >
                <img src="/a_Mother_Spark_Button_2.svg" alt="a Mother" />
              </button>
            </DialogTrigger>
            {isModalOpen && (
              <div
                className="fixed inset-0 bg-black/50 z-50"
                onClick={() => setIsModalOpen(false)}
                role="presentation"
              >
                {isMobile ? (
                  <div
                    ref={dialogRef}
                    style={{
                      position: "fixed",
                      width: "100%",
                      height: "100dvh",
                      color: "white",
                      zIndex: 50,
                      background: "#E63D3A",
                      boxShadow: "0 0 15px rgba(0,0,0,0.3)",
                      display: "flex",
                      flexDirection: "column",
                      paddingTop: "max(env(safe-area-inset-top, 0px), 16px)",
                      paddingLeft: "max(env(safe-area-inset-left, 0px), 16px)",
                      paddingRight:
                        "max(env(safe-area-inset-right, 0px), 16px)",
                      overflow: "hidden",
                    }}
                    className="w-full"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <DialogHeader className="flex flex-row justify-between items-start mb-4 flex-shrink-0">
                      <DialogTitle className="text-start text-sm leading-tight flex-1 pr-2 items-center pt-2">
                        5% of all proceeds go to a_Mother
                      </DialogTitle>
                      <button
                        onClick={() => setIsModalOpen(false)}
                        aria-label="Close a_Mother modal"
                        className="hover:bg-white/10 rounded transition p-1 flex-shrink-0"
                        style={{
                          background: "transparent",
                          border: "none",
                          cursor: "pointer",
                        }}
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                        >
                          <line
                            x1="6"
                            y1="6"
                            x2="18"
                            y2="18"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                          <line
                            x1="6"
                            y1="18"
                            x2="18"
                            y2="6"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                      </button>
                    </DialogHeader>
                    <DialogDescription
                      className="flex-1 flex flex-col justify-end items-center"
                      style={{
                        minHeight: 0,
                        paddingBottom:
                          "max(calc(env(safe-area-inset-bottom, 0px) + 24px), 24px)",
                      }}
                    >
                      <img
                        src="/a_Mother.svg"
                        alt="a_Mother Logo"
                        className="invert w-full object-contain"
                      />
                    </DialogDescription>
                  </div>
                ) : (
                  <div
                    ref={dialogRef}
                    style={{
                      position: "fixed",
                      padding: "20px 10px",
                      color: "white",
                      top: position.y,
                      left: position.x,
                      width: "550px",
                      height: "375px",
                      zIndex: 50,
                      background: "#E63D3A",
                      boxShadow: "0 0 15px rgba(0,0,0,0.3)",
                    }}
                  >
                    <DialogHeader>
                      <DialogTitle className="mx-3">
                        5% of all proceeds go to a_Mother
                      </DialogTitle>
                    </DialogHeader>
                    <DialogDescription className="relative h-full">
                      <img
                        src="/a_Mother.svg"
                        alt="a_Mother Logo"
                        className="invert absolute bottom-0 w-[95%] mb-5 left-1/2 transform -translate-x-1/2"
                      />
                    </DialogDescription>
                  </div>
                )}
              </div>
            )}
          </Dialog>

          <div>
            <Link
              to="/"
              className="flex justify-center"
              aria-label="Armonia A home"
            >
              <img
                src="/Armonia_A_Logo_Header.svg"
                alt="Armonia A"
                className="w-40 lg:w-80  transition duration-200 "
              />
            </Link>
          </div>
          <div className="cursor-pointer">
            <Dialog open={isNavMenuOpen} onOpenChange={setIsNavMenuOpen}>
              <DialogTrigger asChild>
                <button
                  className="p-0 border-0 bg-transparent cursor-pointer"
                  aria-label="Open navigation menu"
                >
                  <Hamburger
                    size={24}
                    aria-hidden="true"
                    className="text-armonia-sand"
                  />
                </button>
              </DialogTrigger>
              {isNavMenuOpen && (
                <>
                  <div className="fixed inset-0 bg-black/100 z-50 w-full h-dvh flex flex-col overflow-hidden lg:grid lg:grid-cols-2 lg:grid-rows-1 xl:grid-cols-[0.75fr_2fr]">
                    <aside
                      id="about-armonia_a"
                      className="bg-black h-1/2 lg:h-full order-2 lg:order-1 overflow-y-scroll scrollbar-hide"
                      aria-label="About Armonia A"
                      style={{
                        scrollbarWidth: "none",
                        msOverflowStyle: "none",
                      }}
                    >
                      <div className="h-full flex flex-col justify-between">
                        <div
                          id="about-armonia_a-content"
                          className="py-2 lg:py-4 px-5 space-y-7 text-armonia-sand "
                        >
                          <div className="space-y-7 hidden lg:block">
                            <h2 className="text-armonia-sand font-bold text-2xl">
                              About Us
                            </h2>
                            <img
                              src="/aa_logo.svg"
                              alt="Armonia A aa logo"
                              className="w-24 h-12 sm:w-36 sm:h-auto md:w-40 md:h-20 transition duration-200"
                            />
                          </div>
                          <p>
                            <strong className="font-bold">Armonia A</strong> is
                            the future advance studio where ideas become
                            expressions, offering new forms of meaning and
                            possibility.
                          </p>
                          <img
                            src="/Insignia.svg"
                            alt="Insignia"
                            className="w-full transition duration-200"
                          />
                          <p className="mb-5">
                            European New Wave (ENW) is a cultural movement and
                            creative ecosystem, building one of the most vital
                            communities of our generation.
                          </p>
                        </div>
                        <footer className="py-4 px-5 space-y-7 text-armonia-sand">
                          <div className="hidden lg:flex flex-col">
                            <small>Powered by European New Wave</small>
                            <small>
                              &copy; {getCopyrightYear()} armonia-a.com
                            </small>
                          </div>
                        </footer>
                        <footer className="flex w-full lg:hidden border-t-2 border-stone-500">
                          <div className=" flex-1 flex items-center justify-start gap-2 px-5">
                            <div>
                              <img
                                src="/Armonia.svg"
                                alt="Armonia A logo"
                                className="w-24 h-12 md:w-32 md:h-15 transition duration-200  flex-1"
                              />
                            </div>
                            <div className=" flex-1 flex items-center justify-end  gap-2">
                              <img
                                src="/A.svg"
                                alt="Armonia A logo"
                                className=" h-3.5 md:h-5 transition duration-200 "
                              />
                            </div>
                          </div>
                          <div className="flex-1 justify-center md:justify-start items-center flex px-5 border-l-2 border-stone-500">
                            <p className="text-sm md:text-md font-light text-armonia-sand">
                              &copy; {getCopyrightYear()} armonia-a.com
                            </p>
                          </div>
                        </footer>
                      </div>
                    </aside>
                    <div className="flex flex-col h-1/2 lg:h-full order-1 lg:order-2">
                      <section
                        id="nav-menu"
                        className="p-4 px-5 bg-armonia-sand h-5/6 flex flex-col items-end overflow-y-auto"
                        aria-label="Main menu"
                      >
                        <div className="flex flex-row justify-between">
                          <button
                            onClick={() => setIsNavMenuOpen(false)}
                            aria-label="Close navigation menu"
                            className="hover:bg-black rounded transition p-1 flex-shrink-0"
                            style={{
                              background: "transparent",
                              border: "none",
                              cursor: "pointer",
                            }}
                          >
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="black"
                              xmlns="http://www.w3.org/2000/svg"
                              aria-hidden="true"
                            >
                              <line
                                x1="6"
                                y1="6"
                                x2="18"
                                y2="18"
                                stroke="black"
                                strokeWidth="2"
                                strokeLinecap="round"
                              />
                              <line
                                x1="6"
                                y1="18"
                                x2="18"
                                y2="6"
                                stroke="black"
                                strokeWidth="2"
                                strokeLinecap="round"
                              />
                            </svg>
                          </button>
                        </div>
                        {/* Navbar Links */}
                        <nav className="flex-1" aria-label="Primary navigation">
                          <ul className="flex flex-col gap-3 text-black items-end uppercase text-5xl lg:text-7xl">
                            <li>
                              <Link
                                to="/"
                                className=" font-bold hover:text-gray-800 transition-colors"
                                onClick={() => setIsNavMenuOpen(false)}
                              >
                                Home
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/archive"
                                className=" font-bold hover:text-gray-800 transition-colors"
                                onClick={() => setIsNavMenuOpen(false)}
                              >
                                Archive
                              </Link>
                            </li>
                          </ul>
                        </nav>
                      </section>
                      <section className="hidden lg:flex bg-black h-1/6 w-full justify-end items-end px-5 border-l-1 border-armonia-sand">
                        <div className=" h-full flex items-end justify-end">
                          <img
                            src="/Armonia.svg"
                            alt="Armonia A logo"
                            className="w-24 h-12 md:w-32 md:h-15 lg:w-52 transition duration-200 flex-1 "
                          />
                        </div>
                        <div className="h-full flex-1 flex items-end justify-end py-4">
                          <img
                            src="/A.svg"
                            alt="Armonia A logo"
                            className=" h-3.5 md:h-5 lg:h-8 transition duration-200"
                          />
                        </div>
                      </section>
                    </div>
                  </div>
                </>
              )}
            </Dialog>
          </div>
          {/* <div className="bg-black"></div> */}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
