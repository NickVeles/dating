import { MagnifyingGlass } from "phosphor-react";
import { JSX, ReactNode } from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

interface TextLookupProps {
  text: string;
  children: JSX.Element | ReactNode;
  className?: string;
}

export function TextLookup({
  text,
  children,
  className = "hover:underline",
}: TextLookupProps) {
  return (
    <Tooltip>
      <TooltipContent>{children}</TooltipContent>
      <TooltipTrigger className={`inline underline hover:cursor-pointer ${className}`}>
        {text}
        <MagnifyingGlass className="inline align-text-top size-4" />
      </TooltipTrigger>
    </Tooltip>
  );
}

export default TextLookup;
