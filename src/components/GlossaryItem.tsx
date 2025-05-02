
import React from "react";
import { ExternalLink } from "lucide-react";

interface GlossaryItemProps {
  number: string;
  term: string;
  definition: string;
  example: string;
  videoUrl: string;
}

const GlossaryItem = ({ number, term, definition, example, videoUrl }: GlossaryItemProps) => {
  return (
    <div className="border-b border-gray-200 pb-4 mb-4 last:border-0">
      <div className="flex gap-3 items-center mb-2">
        <div className="bg-gradient-to-br from-inspira-blue to-inspira-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
          {number}
        </div>
        <h4 className="font-bold text-lg">{term}</h4>
      </div>
      
      <div className="pl-11">
        <p className="mb-2">
          <span className="font-medium">Definición:</span> {definition}
        </p>
        <p className="mb-2">
          <span className="font-medium">Ejemplo:</span> {example}
        </p>
        <a 
          href={videoUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-inspira-blue hover:text-inspira-purple inline-flex items-center gap-1"
        >
          Ver video
          <ExternalLink className="h-3 w-3" />
        </a>
      </div>
    </div>
  );
};

export default GlossaryItem;
