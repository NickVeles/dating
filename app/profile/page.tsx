"use client";

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
import {
  Bold,
  H2,
  H3,
  P,
} from "@/components/utilities/typography";
import { cn } from "@/lib/utils";
import Image from "next/image";
import {
  UserCircleIcon,
  CakeIcon,
  GameControllerIcon,
  TargetIcon,
  SmileyIcon,
  InfoIcon,
} from "@phosphor-icons/react";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import SpotifyHighlights from "@/components/spotify-highlights";
import { chips } from "@/constants/chips";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import AriesIcon from "@/assets/icons/aries.svg";
import StrategyIcon from "@/assets/icons/strategy.svg";
import BoxingGloveIcon from "@/assets/icons/boxing-glove.svg";
import BreadIcon from "@/assets/icons/bread.svg";
import ColorIcon from "@/assets/icons/color.svg";

const attributes: Record<string, React.ReactNode> = {
  interests: <Interests />,
  goals: <Goals />,
  personality: <Personality />,
};

const attributeButtons = [
  {
    key: "interests",
    icon: GameControllerIcon,
    label: "Interests",
    color: "bg-sky-200 dark:bg-sky-800 hover:bg-sky-300 dark:hover:bg-sky-700",
  },
  {
    key: "goals",
    icon: TargetIcon,
    label: "Goals",
    color:
      "bg-green-200 dark:bg-green-800 hover:bg-green-300 dark:hover:bg-green-700",
  },
  {
    key: "personality",
    icon: SmileyIcon,
    label: "Personality",
    color:
      "bg-fuchsia-200 dark:bg-fuchsia-800 hover:bg-fuchsia-300 dark:hover:bg-fuchsia-700",
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
    icon: AriesIcon,
  },
  {
    name: "INTJ (Architect)",
    icon: StrategyIcon,
  },
  {
    name: "8w7 (Challenger)",
    icon: BoxingGloveIcon,
  },
  {
    name: "Sunflower Bread Type",
    icon: BreadIcon,
  },
  {
    name: "Favorite Colors",
    icon: ColorIcon,
    dontInvert: true,
  },
];

const countries = [
  {
    emoji: "🇦🇺",
    name: "Australia",
  },
  {
    emoji: "🇨🇦",
    name: "Canada ⭐",
  },
  {
    emoji: "🇩🇪",
    name: "Germany",
  },
  {
    emoji: "🇯🇵",
    name: "Japan",
  },
  {
    emoji: "🇳🇱",
    name: "Netherlands",
  },
  {
    emoji: "🇳🇿",
    name: "New Zealand",
  },
  {
    emoji: "🇰🇷",
    name: "South Korea",
  },
  {
    emoji: "🇹🇼",
    name: "Taiwan",
  },
];

export default function Profile() {
  const [currentAttribute, setCurrentAttribute] =
    useState<keyof typeof attributes>("interests");
  const [mounted, setMounted] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [dontShowAgainChB, setDontShowAgainChB] = useState(false);

  // Reference for the attribute content section to scroll into view
  const attributeSectionRef = useRef<HTMLDivElement>(null);

  // Calculate age based on birth date: 21st March 2003
  const birthDate = new Date(2003, 2, 21);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  // Check if today is March 21st
  const isBirthday = today.getMonth() === 2 && today.getDate() === 21;

  // Handle dialog close
  const handleCloseDialog = () => {
    if (dontShowAgainChB) {
      localStorage.setItem("skipWelcomeDialog", "true");
    }
    setOpenDialog(false);
  };

  // Check if dialog should open
  useEffect(() => {
    const skipDialog = localStorage.getItem("skipWelcomeDialog");
    if (!skipDialog) {
      setOpenDialog(true);
    }
  }, []);

  // Ensure theme is loaded before rendering
  useEffect(() => setMounted(true), []);
  if (!mounted) {
    return null;
  }

  return (
    <main className="flex flex-col flex-1 gap-4">
      <TitleContainer Icon={UserCircleIcon}>Profile</TitleContainer>

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
                <CakeIcon alt="Birthday cake" className="text-2xl" />
              </p>
            </div>
          </div>
        )}
        <div className="flex flex-col gap-2 items-center justify-center">
          <H2 className="mt-4 border-none pb-0">Nick, {age}</H2>
          <p className="flex items-center justify-center mt-0">
            <CakeIcon alt="Birthday cake" className="size-5 mr-1" />
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
                        "flex items-center justify-center border border-black/20 dark:border-white/20 rounded-full py-2 px-3",
                        category.color
                      )}
                    >
                      <Image
                        src={item.icon}
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
                "flex flex-col items-center justify-center gap-2 border border-black/20 dark:border-white/20 hover:cursor-pointer py-4 px-2 transition-colors first:rounded-t-lg last:rounded-b-lg sm:last:col-span-2 sm:first:rounded-none sm:[&:nth-child(1)]:rounded-tl-lg sm:[&:nth-child(2)]:rounded-tr-lg",
                currentAttribute === btn.key ? btn.color : "hover:bg-muted"
              )}
              aria-pressed={currentAttribute === btn.key}
            >
              <btn.icon alt={btn.label} className="size-8" />
              <span className="text-xl dyslexic:text-lg uppercase font-medium font-serif dyslexic:font-dyslexic">
                {btn.label}
              </span>
            </button>
          ))}
        </div>
      </SectionContainer>

      {/* Attribute Content section */}
      <SectionContainer accented ref={attributeSectionRef}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentAttribute}
            variants={attribAnimVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            {attributes[currentAttribute]}
          </motion.div>
        </AnimatePresence>
      </SectionContainer>

      {/* Music section */}
      <SectionContainer className="gap-4">
        <SpotifyHighlights />
      </SectionContainer>

      {/* Silly Stats Carousel section */}
      <SectionContainer accented className="gap-4">
        <H3>Bogus Facts About Me</H3>
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
                  <div className="flex flex-col gap-2 items-center justify-center p-8 border border-black/20 dark:border-white/20 rounded-lg aspect-[1/1] bg-background hover:cursor-grab active:cursor-grabbing">
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

      {/* Info dialog */}
      <Dialog
        open={openDialog}
        onOpenChange={(val) => val === false && handleCloseDialog()}
      >
        <DialogContent className="sm:max-w-sm md:max-w-md xl:max-w-xl 2xl:max-w-2xl max-h-[90vh] mx-auto w-full px-[1rem] py-[2rem] flex flex-col items-center justify-center">
          <DialogHeader>
            <DialogTitle className="flex font-sans dyslexic:font-dyslexic items-center">
              <InfoIcon className="text-2xl mr-2 -mt-0.5" />
              Hi! Just a notice
            </DialogTitle>
          </DialogHeader>
          <div className="p-2 overflow-y-auto">
            <P>
              This page isn't really about dating advice nor dating itself
              &ndash; it's my custom profile designed for people who want to
              meet me personally (inspired by webpages like Carrd). If you're
              looking for friends or people to talk to, you can look around this
              page and decided for yourself if you want to message me.
            </P>
            <P>
              This individual page doesn't belong here, so{" "}
              <Bold>
                it will be moved soon, and when that happens, entering this page
                is going to redirect you to its new location
              </Bold>{" "}
              (likely on my personal website, sometime after 2025-09-01).
            </P>
          </div>

          <div className="flex items-center gap-2 font-sans dyslexic:font-dyslexic">
            <Checkbox
              id="nopersist"
              className="-mt-0.5"
              checked={dontShowAgainChB}
              onCheckedChange={(checked: boolean | "indeterminate") =>
                setDontShowAgainChB(checked === true)
              }
            />
            <Label htmlFor="nopersist">Don't show this again</Label>
          </div>
          <DialogFooter className="flex flex-col font-sans dyslexic:font-dyslexic">
            <Button
              onClick={() => handleCloseDialog()}
              className="text-white bg-pink-700 hover:bg-pink-600 w-auto hover:cursor-pointer"
            >
              Sure thing!
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </main>
  );
}
