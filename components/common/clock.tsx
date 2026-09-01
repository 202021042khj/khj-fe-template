"use client";

import { memo, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface ClockProps {
  className?: string;
}

const Clock = memo(({ className }: ClockProps) => {
  const [currentTime, setCurrentTime] = useState(() => renderClock());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(renderClock());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <span className={cn("text-font-14-400 text-black", className)}>
      {currentTime}
    </span>
  );
});

const renderClock = () => {
  const time = new Date();
  const hour = String(time.getHours()).padStart(2, "0");
  const min = String(time.getMinutes()).padStart(2, "0");
  const sec = String(time.getSeconds()).padStart(2, "0");
  return `${hour}:${min}:${sec}`;
};

Clock.displayName = "Clock";

export default Clock;
