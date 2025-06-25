import React, { useState, useEffect, useRef } from "react";

interface CountdownProps {
  targetDate: Date;
  offsetX?: number;
  offsetY?: number;
}

function isTouchDevice() {
  return (
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0
  );
}

const MouseFollowCountdown: React.FC<CountdownProps> = ({
  targetDate,
  offsetX = 10,
  offsetY = 10,
}) => {
  const [timeLeft, setTimeLeft] = useState<string>("");
  const touchDevice = isTouchDevice();
  const timerRef = useRef<HTMLDivElement>(null);

  if (touchDevice) return null;

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();
      if (diff <= 0) {
        setTimeLeft("00:00:00");
        return;
      }
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
      setTimeLeft(
        [days, hours, minutes, seconds]
          .map((n) => n.toString().padStart(2, "0"))
          .join(":")
      );
    };

    update();
    const intervalId = window.setInterval(update, 1000);
    return () => window.clearInterval(intervalId);
  }, [targetDate]);

  useEffect(() => {
    let frameId: number;
    const handleMouseMove = (e: MouseEvent) => {
      if (!timerRef.current) return;
      if (frameId) cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(() => {
        const x = e.clientX + offsetX;
        const y = e.clientY + offsetY;
        timerRef.current!.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      });
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, [offsetX, offsetY, isTouchDevice]);

  return (
    <div
      ref={timerRef}
      style={{
        position: "fixed",
        top: -20,
        left: 5,
        transform: "translate3d(0, 0, 0)",
        pointerEvents: "none",
        color: "#fff",
        padding: "4px 8px",
        borderRadius: "4px",
        fontSize: "16px",
        fontFamily: "monospace",
        zIndex: 9999,
        userSelect: "none",
      }}
    >
      {timeLeft}
    </div>
  );
};

export default MouseFollowCountdown;
