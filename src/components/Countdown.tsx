"use client";

import { useState, useEffect } from 'react';

interface CountdownProps {
  targetDate: string;
}

export default function Countdown({ targetDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      let timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };

      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }

      return timeLeft;
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!isMounted) {
    return null; // Avoid hydration mismatch
  }

  return (
    <div className="flex flex-col items-center justify-center mt-4">
      <div className="flex gap-4 text-center">
        <div className="flex flex-col">
          <span className="text-4xl font-bold text-white bg-primary-800/80 rounded-lg px-4 py-2 shadow-inner backdrop-blur-sm border border-primary-500/30">
            {timeLeft.days.toString().padStart(2, '0')}
          </span>
          <span className="text-xs font-medium text-primary-100 mt-1 uppercase tracking-wider">Days</span>
        </div>
        <div className="text-3xl font-bold text-primary-200 mt-2">:</div>
        <div className="flex flex-col">
          <span className="text-4xl font-bold text-white bg-primary-800/80 rounded-lg px-4 py-2 shadow-inner backdrop-blur-sm border border-primary-500/30">
            {timeLeft.hours.toString().padStart(2, '0')}
          </span>
          <span className="text-xs font-medium text-primary-100 mt-1 uppercase tracking-wider">Hours</span>
        </div>
        <div className="text-3xl font-bold text-primary-200 mt-2">:</div>
        <div className="flex flex-col">
          <span className="text-4xl font-bold text-white bg-primary-800/80 rounded-lg px-4 py-2 shadow-inner backdrop-blur-sm border border-primary-500/30">
            {timeLeft.minutes.toString().padStart(2, '0')}
          </span>
          <span className="text-xs font-medium text-primary-100 mt-1 uppercase tracking-wider">Mins</span>
        </div>
        <div className="text-3xl font-bold text-primary-200 mt-2">:</div>
        <div className="flex flex-col">
          <span className="text-4xl font-bold text-white bg-primary-800/80 rounded-lg px-4 py-2 shadow-inner backdrop-blur-sm border border-primary-500/30">
            {timeLeft.seconds.toString().padStart(2, '0')}
          </span>
          <span className="text-xs font-medium text-primary-100 mt-1 uppercase tracking-wider">Secs</span>
        </div>
      </div>
    </div>
  );
}
