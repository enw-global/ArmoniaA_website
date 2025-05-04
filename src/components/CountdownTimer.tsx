import React, { useState, useEffect } from "react";

interface CountdownProps {
  targetDate: Date;
}

const CountdownTimer: React.FC<CountdownProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState<string>("");

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
  return (
    <div className="flex justify-center">
      <h1 className="text-white font-bold text-3xl">{timeLeft}</h1>
    </div>
  );
};

export default CountdownTimer;
