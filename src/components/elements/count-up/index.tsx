"use client";
import React, { useEffect, useState } from "react";

interface CountUpProps {
  from?: number;
  to: number;
  duration?: number;
  format?: (n: number) => string;
  className?: string;
}

const CountUp: React.FC<CountUpProps> = ({
  from = 0,
  to,
  duration = 2000,
  format = (n) => Math.floor(n).toLocaleString(),
  className = "",
}) => {
  const [count, setCount] = useState(from);

  useEffect(() => {
    let start: number | null = null;

    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = from + (to - from) * eased;
      setCount(current);

      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [from, to, duration]);

  return (
    <h2 className={`font-bold text-main-green ${className}`}>
      {format(count)}
    </h2>
  );
};

export default CountUp;
