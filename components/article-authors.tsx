import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { writers } from "@/constants/writers";
import { cn } from "@/lib/utils";

interface WriterAvatarsProps {
  ids: number[];
  className?: string;
}

const getInitials = (name: string) => {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();
};

export const ArticleAuthors: React.FC<WriterAvatarsProps> = ({ ids, className }) => {
  const filteredWriters = writers.filter((writer) => ids.includes(writer.id));
 
  if (filteredWriters.length === 0) return null;

  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2">
        {filteredWriters.map((writer) => (
          <Avatar key={writer.id}>
            <AvatarImage
              src={`https://github.com/${writer.github}.png`}
              alt={`@${writer.github}`}
            />
            <AvatarFallback>{getInitials(writer.name)}</AvatarFallback>
          </Avatar>
        ))}
      </div>
      <div className="text-sm font-sans dyslexic:dont-dyslexic dyslexic:text-xs text-muted-foreground">
        {filteredWriters.map((writer) => writer.name).join(", ")}
      </div>
    </div>
  );
};
