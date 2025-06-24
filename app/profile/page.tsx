"use client";

import Flags from "@/components/profile/flags";
import Goals from "@/components/profile/goals";
import Interests from "@/components/profile/interests";
import Personality from "@/components/profile/personality";
import Gallery from "@/components/gallery";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import SectionContainer from "@/components/utilities/section-container";
import TitleContainer from "@/components/utilities/title-container";
import { H2, H3, H4, P } from "@/components/utilities/typography";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import Image from "next/image";
import { UserCircle, Cake } from "phosphor-react";
import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import SpotifyHighlights from "@/components/spotify-highlights";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import TextLink from "@/components/utilities/text-link";

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
        text: "Long-term",
        tooltip: "Relationship expectations",
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

const attributes: Record<string, React.ReactNode> = {
  interests: <Interests />,
  goals: <Goals />,
  personality: <Personality />,
  flags: <Flags />,
};

const attributeButtons = [
  {
    key: "interests",
    icon: "/icons/game-controller.svg",
    label: "Interests",
    color: "bg-sky-200 dark:bg-sky-800 hover:bg-sky-300 dark:hover:bg-sky-700",
  },
  {
    key: "goals",
    icon: "/icons/target.svg",
    label: "Goals",
    color:
      "bg-green-200 dark:bg-green-800 hover:bg-green-300 dark:hover:bg-green-700",
  },
  {
    key: "personality",
    icon: "/icons/smiley.svg",
    label: "Personality",
    color:
      "bg-fuchsia-200 dark:bg-fuchsia-800 hover:bg-fuchsia-300 dark:hover:bg-fuchsia-700",
  },
  {
    key: "flags",
    icon: "/icons/flag-pennant.svg",
    label: "Flags",
    color: "bg-red-200 dark:bg-red-800 hover:bg-red-300 dark:hover:bg-red-700",
  },
];

const attribAnimVariants = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 50 },
};

const sillyStats = [
  {
    name: "Aries",
    icon: "/icons/aries.svg",
  },
  {
    name: "INTJ (Architect)",
    icon: "/icons/strategy.svg",
  },
  {
    name: "8w7 (Challenger)",
    icon: "/icons/boxing-glove.svg",
  },
  {
    name: "Sunflower Bread Type",
    icon: "/icons/bread.svg",
  },
  {
    name: "Favorite Colors",
    icon: "/icons/color.svg",
    dontInvert: true,
  },
];

export default function Profile() {
  const { theme } = useTheme();
  const [currentAttribute, setCurrentAttribute] =
    useState<keyof typeof attributes>("interests");

  // Reference for the attribute content section to scroll into view
  const attributeSectionRef = useRef<HTMLDivElement>(null);

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
    <main className="flex flex-col flex-1 gap-4">
      <TitleContainer Icon={UserCircle}>Dating Profile</TitleContainer>

      {/* Gallery section */}
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
          <H2 className="mt-4 border-none pb-0">Nick, {age}</H2>
          <p className="flex items-center justify-center mt-0">
            <Cake alt="Birthday cake" className="size-5 mr-1" />
            March 21st, 2003
          </p>
        </div>
      </SectionContainer>

      {/* Chips */}
      <SectionContainer accented>
        {chips.map((category) => (
          <div
            className="flex flex-col font-serif dyslexic:font-dyslexic [&>:not(:first-child)]:mb-6"
            key={category.name}
          >
            <h4 className="text-lg text-center mb-2">{category.name}</h4>
            <div className="flex flex-wrap items-center justify-center text-sm dyslexic:text-xs gap-2">
              {category.items.map((item, index) => (
                <Tooltip key={index}>
                  <TooltipTrigger>
                    <p
                      className={cn(
                        "flex items-center justify-center border-1 border-black/20 dark:border-white/20 rounded-full py-2 px-3",
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

      {/* Attribute buttons section */}
      <SectionContainer>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-0.5 w-full">
          {attributeButtons.map((btn) => (
            <button
              key={btn.key}
              type="button"
              onClick={() => {
                setCurrentAttribute(btn.key as keyof typeof attributes);
                // Scroll to the attribute content section after state update
                setTimeout(() => {
                  attributeSectionRef.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }, 0);
              }}
              className={cn(
                "flex flex-col items-center justify-center gap-2 border border-black/20 dark:border-white/20 hover:cursor-pointer py-4 px-2 transition-colors first:rounded-t-lg last:rounded-b-lg sm:first:rounded-none sm:last:rounded-none sm:[&:nth-child(1)]:rounded-tl-lg sm:[&:nth-child(2)]:rounded-tr-lg sm:[&:nth-child(3)]:rounded-bl-lg sm:[&:nth-child(4)]:rounded-br-lg",
                currentAttribute === btn.key ? btn.color : "hover:bg-muted"
              )}
              aria-pressed={currentAttribute === btn.key}
            >
              <Image
                src={btn.icon}
                alt={btn.label}
                width={32}
                height={32}
                className="dark:invert"
              />
              <span className="text-xl dyslexic:text-lg uppercase font-medium font-serif dyslexic:font-dyslexic">
                {btn.label}
              </span>
            </button>
          ))}
        </div>
      </SectionContainer>

      {/* Attribute Content section */}
      <SectionContainer accented ref={attributeSectionRef}>
        <div className="min-h-[48px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentAttribute}
              variants={attribAnimVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              {attributes[currentAttribute]}
            </motion.div>
          </AnimatePresence>
        </div>
      </SectionContainer>

      {/* Music section */}
      <SectionContainer className="gap-4">
        <SpotifyHighlights />
      </SectionContainer>

      {/* Silly Stats Carousel section */}
      <SectionContainer accented className="gap-4">
        <H3>Silly Facts About Me</H3>
        <p className="font-serif dyslexic:font-dyslexic text-center">
          If you really believe these define a person, we might not click...
        </p>
        <div className="relative flex items-center justify-center">
          <Carousel
            className="w-60"
            opts={{
              loop: true,
              align: "center",
            }}
          >
            <CarouselContent className="-ml-4">
              {sillyStats.map((stat) => (
                <CarouselItem key={stat.name} className="pl-4">
                  <div className="flex flex-col gap-2 items-center justify-center p-8 border border-black/20 dark:border-white/20 rounded-lg aspect-[1/1] bg-background">
                    <Image
                      src={stat.icon}
                      alt={stat.name}
                      width={60}
                      height={60}
                      className={stat.dontInvert ? "" : "dark:invert"}
                    />
                    <span className="text-xl dyslexic:text-base font-serif dyslexic:font-dyslexic uppercase font-semibold text-center text-wrap">
                      {stat.name}
                    </span>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hover:cursor-pointer" />
            <CarouselNext className="hover:cursor-pointer" />
          </Carousel>
        </div>
      </SectionContainer>

      {/* FAQ */}
      <SectionContainer>
        <H3>FAQ</H3>
        <Accordion
          type="single"
          collapsible
          className="w-full"
          defaultValue="item-1"
        >
          {/* Why did you make this dating profile? */}
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <H4>Why did you make this dating profile?</H4>
            </AccordionTrigger>
            <AccordionContent>
              <P>
                I’ll be honest&mdash;dating has felt a bit exhausting lately.
                This page is simply a way for me to share more about who I am,
                what I enjoy, and what I’m looking for in a relationship, all in
                one place.
              </P>
              <P>
                It really says a thing when building an entire website feels
                easier than dating itself. By reading my guide you might get a
                better sense what I had to go through.
              </P>
              <P>
                Dating opportunities are pretty limited where I live—being in
                the countryside of an already small town doesn’t exactly help.
                I’ve thought about moving to a bigger city, but I’m actually
                planning to relocate abroad, which takes quite a bit of
                preparation, which you can read more about in my{" "}
                <span
                  onClick={() => {
                    setCurrentAttribute("goals");
                    // Scroll to the attribute content section after state update
                    setTimeout(() => {
                      attributeSectionRef.current?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }, 0);
                  }}
                  className="hover:cursor-pointer underline"
                >
                  Goals
                </span>
                .
              </P>
            </AccordionContent>
          </AccordionItem>

          {/* What are your preferences? */}
          <AccordionItem value="item-2">
            <AccordionTrigger>
              <H4>What are your preferences?</H4>
            </AccordionTrigger>
            <AccordionContent className="flex justify-center">
              <P></P>
            </AccordionContent>
          </AccordionItem>

          {/* You're quite mature for your age */}
          <AccordionItem value="item-3">
            <AccordionTrigger>
              <H4>
                You're quite mature for your age &ndash; shouldn't you live your
                life to the fullest in your early 20s?
              </H4>
            </AccordionTrigger>
            <AccordionContent>
              <P></P>
            </AccordionContent>
          </AccordionItem>

          {/* What will happen to this page once you find someone? */}
          <AccordionItem value="item-4">
            <AccordionTrigger>
              <H4>What will happen to this page once you find someone?</H4>
            </AccordionTrigger>
            <AccordionContent>
              <P></P>
            </AccordionContent>
          </AccordionItem>

          {/* How can I reach out to you? */}
          <AccordionItem value="item-5">
            <AccordionTrigger>
              <H4>How can I reach out to you?</H4>
            </AccordionTrigger>
            <AccordionContent>
              <P></P>
            </AccordionContent>
          </AccordionItem>

          {/* What did you use to create this website? */}
          <AccordionItem value="item-6">
            <AccordionTrigger>
              <H4>What did you use to create this website?</H4>
            </AccordionTrigger>
            <AccordionContent>
              <P>
                I created it all by myself using Next.js! You can find the repo
                for this project on my{" "}
                <TextLink
                  href="https://github.com/NickVeles/dating"
                  blank={true}
                >
                  Github
                </TextLink>
                !
              </P>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </SectionContainer>
    </main>
  );
}
