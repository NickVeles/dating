"use client";

import Gallery from "@/components/gallery";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import SectionContainer from "@/components/utilities/section-container";
import TitleContainer from "@/components/utilities/title-container";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import Image from "next/image";
import { UserCircle, Cake } from "phosphor-react";

const chips = [
  {
    name: "Core",
    color: "bg-red-200 dark:bg-red-800 hover:bg-red-300 dark:hover:bg-red-700",
    items: [
      {
        text: "6'3/190cm",
        tooltip: "Height",
        icon: "ruler",
      },
      {
        text: "Polish",
        tooltip: "Nationality",
        icon: "flag",
      },
      {
        text: "he/him",
        tooltip: "Pronouns",
        icon: "gender-male",
      },
      {
        text: "Straight",
        tooltip: "Orientation",
        icon: "hetero",
      },
    ],
  },
  {
    name: "Career",
    color: "bg-sky-200 dark:bg-sky-800 hover:bg-sky-300 dark:hover:bg-sky-700",
    items: [
      {
        text: "Software Dev",
        tooltip: "Occupation",
        icon: "suitcase",
      },
      {
        text: "Web Dev",
        tooltip: "Occupation",
        icon: "suitcase",
      },
      {
        text: "ML Specialist",
        tooltip: "Occupation",
        icon: "suitcase",
      },
      {
        text: "IT Tech",
        tooltip: "Education",
        icon: "graduation-cap",
      },
      {
        text: "Self-taught",
        tooltip: "Education",
        icon: "graduation-cap",
      },
    ],
  },
  {
    name: "Values",
    color:
      "bg-yellow-200 dark:bg-yellow-800 hover:bg-yellow-300 dark:hover:bg-yellow-700",
    items: [
      {
        text: "Atheist/Agnostic",
        tooltip: "Religion",
        icon: "hands-praying",
      },
      {
        text: "Monogamous",
        tooltip: "Relationship style",
        icon: "monogamy",
      },
      {
        text: "Serious Dater",
        tooltip: "Relationship maturity",
        icon: "lock-heart",
      },
      {
        text: "Single & Looking",
        tooltip: "Relationship status",
        icon: "magnifying-glass-heart",
      },
      {
        text: "None | Open to having",
        tooltip: "Children",
        icon: "baby-carriage",
      },
    ],
  },
  {
    name: "Lifestyle",
    color:
      "bg-emerald-200 dark:bg-emerald-800 hover:bg-emerald-300 dark:hover:bg-emerald-700",
    items: [
      {
        text: "5d/week",
        tooltip: "Workout",
        icon: "barbell",
      },
      {
        text: "Low-fat | Hates pork",
        tooltip: "Diet",
        icon: "fork-knife",
      },
      {
        text: "Never",
        tooltip: "Smoking",
        icon: "cigarette",
      },
      {
        text: "Never",
        tooltip: "Drinking",
        icon: "wine",
      },
      {
        text: "Never",
        tooltip: "Substances",
        icon: "pill",
      },
    ],
  },
  {
    name: "Other",
    color:
      "bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700",
    items: [
      {
        text: "Dog",
        tooltip: "Pet",
        icon: "paw-print",
      },
      {
        text: "Cat",
        tooltip: "Pet",
        icon: "paw-print",
      },
      {
        text: "Turtle",
        tooltip: "Pet",
        icon: "paw-print",
      },
      {
        text: "Stick-bugs",
        tooltip: "Pet",
        icon: "paw-print",
      },
    ],
  },
];

export default function AboutMe() {
  const { theme } = useTheme();
  // Calculate age based on birth date: 21st March 2003
  const birthDate = new Date(2003, 2, 21); // Month is 0-indexed (2 = March)
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  // Check if today is March 21st
  const isBirthday = today.getMonth() === 2 && today.getDate() === 21;

  // Ensure theme is loaded before rendering
  if (typeof theme === "undefined") return null;

  return (
    <main className="flex flex-col flex-1 gap-8">
      <TitleContainer Icon={UserCircle}>About Me</TitleContainer>
      <SectionContainer className="gap-8 relative">
        <Gallery />
        {isBirthday && (
          <div
            className="absolute top-2 left-1/2 -translate-x-10 rotate-12 pointer-events-none z-10 dyslexic:top-0 dyslexic:-translate-x-1/2 dyslexic:rotate-0"
            style={{
              animation: "bouncy-scale 1.2s infinite",
            }}
          >
            <div className="bg-gradient-to-r from-pink-400 to-purple-500 text-white px-4 py-3 rounded-lg shadow-lg border-4 border-white">
              <p className="flex items-center gap-2 font-bold text-sm whitespace-nowrap">
                HAPPY BIRTHDAY ME!{" "}
                <Cake alt="Birthday cake" className="text-2xl" />
              </p>
            </div>
          </div>
        )}
        <div className="flex flex-col gap-2 items-center justify-center">
          <h2 className="text-4xl font-bold mt-4">Nick, {age}</h2>
          <p className="flex items-center justify-center">
            <Cake alt="Birthday cake" className="text-xl mr-1" />
            March 21st, 2003
          </p>
        </div>
      </SectionContainer>
      <SectionContainer accented>
        <h3 className="text-2xl dyslexic:text-xl text-center font-medium">
          Quick facts about me!
        </h3>
        {chips.map((category) => (
          <div
            className="flex flex-col font-serif dyslexic:font-[family-name:var(--font-dyslexic)]"
            key={category.name}
          >
            <h4 className="text-lg text-center mt-6 mb-2">{category.name}</h4>
            <div className="flex flex-wrap items-center justify-center text-sm dyslexic:text-xs gap-2">
              {category.items.map((item, index) => (
                <Tooltip key={index}>
                  <TooltipTrigger>
                    <p
                      className={cn(
                        `flex items-center justify-center border-1 border-black/20 dark:border-white/20 rounded-full py-2 px-3 hover:cursor-pointer`,
                        category.color
                      )}
                    >
                      <Image
                        src={`/icons/${item.icon}.svg`}
                        alt={item.text}
                        height={18}
                        width={18}
                        className="dark:invert mr-2"
                      />
                      {item.text}
                    </p>
                  </TooltipTrigger>
                  <TooltipContent>{item.tooltip}</TooltipContent>
                </Tooltip>
              ))}
            </div>
          </div>
        ))}
      </SectionContainer>
    </main>
  );
}
