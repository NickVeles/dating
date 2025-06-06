"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

import { Toggle } from "@/components/ui/toggle";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function FontToggle() {
  const [isDyslexic, setIsDyslexic] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("isDyslexic");
    if (stored !== null) {
      setIsDyslexic(stored === "true");
    }
  }, []);

  useEffect(() => {
    if (isDyslexic) {
      document.body.classList.add("dyslexic");
    } else {
      document.body.classList.remove("dyslexic");
    }
    localStorage.setItem("isDyslexic", JSON.stringify(isDyslexic));
  }, [isDyslexic]);

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Toggle
          className="hover:cursor-pointer"
          variant="outline"
          aria-label="Toggle dyslexic font"
          pressed={isDyslexic}
          onPressedChange={setIsDyslexic}
        >
          <Image
            className="dark:invert w-[1.2rem] h-[1.2rem]"
            width={0}
            height={0}
            src="dyslexic.svg"
            alt="dyslexia toggle"
            priority
          />
        </Toggle>
      </TooltipTrigger>
      <TooltipContent side="top" className="text-xs">
        Toggle dyslexic font
      </TooltipContent>
    </Tooltip>
  );
}
