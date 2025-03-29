"use client";

import React from 'react';

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

  return (
    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 cursor-pointer">
      <button
        onClick={scrollToSection}
        className="flex flex-col items-center animate-bounce"
        aria-label="Scroll down to see more"
      >
        <span className="text-white text-sm font-medium mb-2 tracking-widest opacity-80">Let&apos;s Go!</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="white"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
    </div>
  );
} 