"use client";

import { useEffect, useRef, useState, useCallback } from 'react';

interface StatCounterProps {
  target: number;
  duration?: number;
  className?: string;
}

export default function StatCounter({ target, duration = 2000, className = "" }: StatCounterProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  const animateCount = useCallback(() => {
    const startAt = Math.floor(4 * target / 5);
    const increment = (target - startAt) / (duration / 16); // 60fps
    let current = startAt;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target, duration]);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          animateCount();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [isVisible, animateCount]);

  return (
    <div ref={elementRef} className={className}>
      ${count.toLocaleString()}
    </div>
  );
}
