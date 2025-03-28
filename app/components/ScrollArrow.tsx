"use client";

import React, { useEffect } from 'react';

interface ScrollArrowProps {
  targetId: string;
}

export default function ScrollArrow({ targetId }: ScrollArrowProps) {
  const scrollToSection = () => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Force focus on mobile devices
  useEffect(() => {
    // Make the component more interactive for touch devices
    const handleTouchStart = () => {
      scrollToSection();
    };

    const arrow = document.getElementById('scroll-arrow-button');
    if (arrow) {
      arrow.addEventListener('touchstart', handleTouchStart);
      return () => {
        arrow.removeEventListener('touchstart', handleTouchStart);
      };
    }
  }, [targetId]);

  return (
    <div className="absolute bottom-16 sm:bottom-10 left-1/2 transform -translate-x-1/2 z-20">
      <button
        id="scroll-arrow-button"
        onClick={scrollToSection}
        className="flex flex-col items-center animate-bounce p-2 hover:opacity-80 transition-opacity active:opacity-70 focus:outline-none focus:ring-2 focus:ring-white/50 rounded-full"
        aria-label="Scroll down to see more"
      >
        <span className="text-white text-sm font-medium mb-1 sm:mb-2 tracking-widest opacity-90 text-shadow">Let&apos;s Go!</span>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="white" 
          className="w-7 h-7 sm:w-8 sm:h-8 drop-shadow-md"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2.5} 
            d="M19 9l-7 7-7-7" 
          />
        </svg>
      </button>
    </div>
  );
} 