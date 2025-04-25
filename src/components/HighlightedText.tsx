
import React from "react";

interface HighlightedTextProps {
  children: React.ReactNode;
}

const HighlightedText = ({ children }: HighlightedTextProps) => {
  return (
    <span className="relative inline-block">
      {children}
      <span className="absolute bottom-0 left-0 w-full h-[6px] bg-gradient-to-r from-inspira-turquoise to-inspira-teal opacity-50 animate-pulse"></span>
    </span>
  );
};

export default HighlightedText;
