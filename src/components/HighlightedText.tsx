
import React from "react";

interface HighlightedTextProps {
  children: React.ReactNode;
}

const HighlightedText = ({ children }: HighlightedTextProps) => {
  return (
    <span className="text-inspira-turquoise">
      {children}
    </span>
  );
};

export default HighlightedText;
