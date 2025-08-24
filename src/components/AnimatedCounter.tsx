"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

interface AnimatedCounterProps {
  minValue?: number;
  maxValue?: number;
  duration?: number;
  startOnView?: boolean;
  repeatInterval?: number;
}

export default function AnimatedCounter({ 
  minValue = 80,
  maxValue = 200,
  duration = 2, 
  startOnView = true,
  repeatInterval = 4000
}: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const [showQuestions, setShowQuestions] = useState(true);
  const [currentTarget, setCurrentTarget] = useState(0);
  const counterRef = useRef<HTMLDivElement>(null);
  const [hasStarted, setHasStarted] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const getRandomValue = () => {
    return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
  };

  useEffect(() => {
    if (!counterRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) {
            startRepeatingAnimation();
            setHasStarted(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (startOnView && !hasStarted) {
      observer.observe(counterRef.current);
    } else if (!hasStarted) {
      startRepeatingAnimation();
      setHasStarted(true);
    }

    return () => {
      console.log('useEffect cleanup - clearing interval:', intervalRef.current);
      observer.disconnect();
      // Don't clear interval on cleanup in development mode
      // The interval should continue running
    };
  }, []); // Empty dependency array to prevent re-runs

  // Separate useEffect for cleanup on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        console.log('Component unmounting - clearing interval:', intervalRef.current);
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, []);

  const startRepeatingAnimation = () => {
    const runAnimation = () => {
      const newTarget = getRandomValue();
      console.log('Running animation with target:', newTarget);
      setCurrentTarget(newTarget);
      
      // Show question marks
      setShowQuestions(true);
      
      setTimeout(() => {
        setShowQuestions(false);
        
        // Reset to 0 and animate to target
        setDisplayValue(0);
        gsap.fromTo({ value: 0 }, 
          { value: 0 },
          {
            value: newTarget,
            duration: duration,
            ease: "power2.out",
            onUpdate: function() {
              setDisplayValue(Math.floor(this.targets()[0].value));
            },
            onComplete: () => {
              console.log('Animation completed, target was:', newTarget);
            }
          }
        );
      }, 1000);
    };

    console.log('Setting up repeating animation with interval:', repeatInterval);
    
    // Run the first animation
    runAnimation();
    
    // Set up repeating animation
    intervalRef.current = setInterval(() => {
      console.log('Interval triggered');
      runAnimation();
    }, repeatInterval);
    
    console.log('Interval set with ID:', intervalRef.current);
  };

  const formatNumber = (num: number) => {
    return num.toString().padStart(3, '0');
  };

  const digits = formatNumber(displayValue).split('');

  return (
    <div ref={counterRef} className="content-stretch flex gap-0.5 items-center justify-start relative shrink-0">
      {showQuestions ? (
        // Show animated question marks
        <>
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className="bg-black content-stretch flex h-[50px] items-center justify-center relative shrink-0 w-10 animate-pulse"
              style={{
                animationDelay: `${index * 0.2}s`,
                animationDuration: '0.8s'
              }}
            >
              <div className="flex flex-col font-bold justify-center leading-[0] not-italic relative shrink-0 text-[36px] text-nowrap text-white">
                <p className="leading-[57.6px] whitespace-pre">?</p>
              </div>
            </div>
          ))}
        </>
      ) : (
        // Show animated numbers
        <>
          {digits.map((digit, index) => (
            <div
              key={index}
              className="bg-black content-stretch flex h-[50px] items-center justify-center relative shrink-0 w-10 transform transition-transform duration-200"
              style={{
                animation: `digitFlip 0.3s ease-in-out ${index * 0.1}s`
              }}
            >
              <div className="flex flex-col font-bold justify-center leading-[0] not-italic relative shrink-0 text-[36px] text-nowrap text-white">
                <p className="leading-[57.6px] whitespace-pre">{digit}</p>
              </div>
            </div>
          ))}
        </>
      )}
      
      <style jsx>{`
        @keyframes digitFlip {
          0% { transform: rotateX(0deg); }
          50% { transform: rotateX(90deg); }
          100% { transform: rotateX(0deg); }
        }
      `}</style>
    </div>
  );
}