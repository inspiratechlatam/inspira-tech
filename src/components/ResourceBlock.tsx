
import React from "react";
import { ExternalLink } from "lucide-react";

export type ResourceType = "video" | "podcast" | "article";

export interface Resource {
  title: string;
  url: string;
  type: ResourceType;
}

interface ResourceBlockProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  resources: Resource[];
}

const ResourceBlock = ({ icon, title, description, resources }: ResourceBlockProps) => {
  const getResourceIcon = (type: ResourceType) => {
    switch (type) {
      case "video":
        return "🎬";
      case "podcast":
        return "🎙️";
      case "article":
        return "📝";
      default:
        return "📚";
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center gap-4 mb-4">
        <div className="bg-gradient-to-br from-inspira-blue to-inspira-purple text-white rounded-full p-3">
          {icon}
        </div>
        <h3 className="font-bold text-xl">{title}</h3>
      </div>
      
      <p className="mb-6 text-gray-600">
        {description}
      </p>
      
      <div className="space-y-4">
        {resources.map((resource, index) => (
          <a 
            key={index} 
            href={resource.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors"
          >
            <span>{getResourceIcon(resource.type)}</span>
            <span className="flex-1">{resource.title}</span>
            <ExternalLink className="h-4 w-4 text-gray-400" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default ResourceBlock;
