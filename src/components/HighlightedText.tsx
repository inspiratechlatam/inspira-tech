
import React from "react";

interface HighlightedTextProps {
  children: React.ReactNode;
}

const HighlightedText = ({ children }: HighlightedTextProps) => {
  return (
    <span className="relative inline-block">
      {children}
      <svg className="absolute -bottom-1 left-0 w-full h-4 opacity-50" viewBox="0 0 100 20" preserveAspectRatio="none">
        <path d="M0,10 Q25,5 50,10 T100,10" stroke="url(#gradient)" strokeWidth="4" fill="none" className="animate-pulse" />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2ae5dc" />
            <stop offset="100%" stopColor="#09a78b" />
          </linearGradient>
        </defs>
      </svg>
    </span>
  );
};

export default HighlightedText;
