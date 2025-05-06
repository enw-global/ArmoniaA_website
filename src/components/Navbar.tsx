import { useState, useEffect, useRef } from "react";

import {
  Dialog,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 100,
    y: 100,
  });
  const [velocity, setVelocity] = useState<{ x: number; y: number }>({
    x: 2,
    y: 2,
  });
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

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
  }, [isOpen, position, velocity]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <header className="bg-black fixed h-18 flex flex-col justify-center w-full z-10">
      <nav className=" w-full">
        <div className="align-element flex flex-row justify-between items-center  px-4">
          <div className="bg-black  lg:w-12 lg:h-12"></div>
          {/* TODO: Implement a modal that will open upon clicking the a Mother Spark button */}
          <a href="/" className=" flex justify-center">
            <img
              src="/armonia_a_logo.png"
              alt="Armonia A logo"
              className="w-60 md:w-80 lg:w-full"
            />
          </a>
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <img
                src="/a_Mother_Spark_button.png"
                alt="a Mother Modal"
                className=" a-mother-spark-button cursor-pointer"
              />
            </DialogTrigger>
            {isOpen && (
              <div
                className="fixed inset-0 bg-black/50 z-40"
                onClick={() => setIsOpen(false)}
              >
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
                      src="/Logo.png"
                      alt=""
                      className="absolute bottom-0 w-[95%] mb-5 left-1/2 transform -translate-x-1/2"
                    />
                  </DialogDescription>
                </div>
              </div>
            )}
          </Dialog>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
