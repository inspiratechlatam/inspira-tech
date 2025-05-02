
import React, { useState } from "react";
import { ChevronDown, ChevronUp, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface Resource {
  title: string;
  url: string;
  type: "video" | "podcast" | "article";
}

interface ResourceBlockProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  resources: Resource[];
}

const ResourceBlock = ({ icon, title, description, resources }: ResourceBlockProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Card className="hover:shadow-lg transition-all duration-300">
      <CardHeader 
        className="cursor-pointer flex flex-row items-center justify-between p-6"
        onClick={toggleExpand}
      >
        <div className="flex items-center gap-4">
          <div className="bg-gradient-to-br from-inspira-blue to-inspira-purple text-white rounded-full p-3">
            {icon}
          </div>
          <h3 className="font-bold text-xl">{title}</h3>
        </div>
        {isExpanded ? (
          <ChevronUp className="h-5 w-5 text-gray-500" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500" />
        )}
      </CardHeader>
      
      {isExpanded && (
        <CardContent className="px-6 pb-6">
          <p className="mb-6 text-gray-600">{description}</p>
          
          <ul className="space-y-3">
            {resources.map((resource, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-inspira-turquoise mt-1">•</span>
                <a 
                  href={resource.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-inspira-blue hover:text-inspira-purple flex items-center gap-1"
                >
                  {resource.title}
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
            ))}
          </ul>
        </CardContent>
      )}
    </Card>
  );
};

export default ResourceBlock;
