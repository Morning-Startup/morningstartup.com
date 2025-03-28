'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  delay?: number;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ 
  end, 
  duration = 1500, 
  suffix = '+',
  delay = 0
}) => {
  const [count, setCount] = useState<number>(Math.floor(end * 0.95));
  const countRef = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [shouldAnimate, setShouldAnimate] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    // Delay the start of animation based on the delay prop
    const delayTimer = setTimeout(() => {
      setShouldAnimate(true);
    }, delay);
    
    return () => clearTimeout(delayTimer);
  }, [isVisible, delay]);

  useEffect(() => {
    if (!shouldAnimate) return;

    let startTime: number;
    let animationFrame: number;

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const initialValue = Math.floor(end * 0.95);
      const currentCount = Math.floor(initialValue + (progress * (end - initialValue)));
      
      setCount(currentCount);
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCount);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(updateCount);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [end, duration, shouldAnimate]);

  return (
    <span ref={countRef} className="font-semibold">
      {count.toLocaleString()}{suffix}
    </span>
  );
};

export default function Home() {
  return (
    <div className="relative min-h-screen animate-fade-in">
      {/* Hero section */}
      <div className="relative isolate px-6 pt-32 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Australia's Largest
              <br />
              <span className="block gradient-text text-5xl sm:text-7xl font-extrabold tracking-tight mt-3 whitespace-nowrap">Startup Community</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Join over 7,000 founders, entrepreneurs, and innovators building the future of tech in Western Australia.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/events"
                className="rounded-full bg-black px-8 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 transition"
              >
                View Events
              </Link>
              <Link
                href="/submit-talk"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Submit a Talk <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stats section */}
      <div className="mt-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-gray-600">Active Members</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight sm:text-5xl">
                <AnimatedCounter end={7000} delay={0} />
              </dd>
            </div>
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-gray-600">Events Hosted</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight sm:text-5xl">
                <AnimatedCounter end={200} delay={1500} />
              </dd>
            </div>
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-gray-600">Speaker Talks</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight sm:text-5xl">
                <AnimatedCounter end={500} delay={3000} />
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  )
}