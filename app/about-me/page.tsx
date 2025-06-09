"use client";

import Gallery from "@/components/gallery";
import SectionContainer from "@/components/utilities/section-container";
import TitleContainer from "@/components/utilities/title-container";
import { useTheme } from "next-themes";
import { UserCircle } from "phosphor-react";
import Image from "next/image";
import { Cake } from "phosphor-react";

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
      <SectionContainer className="gap-7 relative">
        <Gallery />
        {isBirthday && (
          <div
            className="absolute top-2 left-1/2 -translate-x-10 rotate-12 pointer-events-none z-10 dyslexic:top-0 dyslexic:-translate-x-1/2 dyslexic:rotate-0"
            style={{
              animation:
                "bouncy-scale 1.2s infinite",
            }}
          >
            <div className="bg-gradient-to-r from-pink-400 to-purple-500 text-white px-4 py-3 rounded-lg shadow-lg border-4 border-white">
              <div className="flex items-center gap-2 font-bold text-sm whitespace-nowrap">
                HAPPY BIRTHDAY ME!{" "}
                <Cake alt="Birthday cake" className="text-2xl" />
              </div>
            </div>
          </div>
        )}
        <div className="flex flex-col gap-2 items-center justify-center">
          <p className="text-4xl font-bold mt-4">Nick, {age}</p>
          <p className="flex items-center justify-center">
            <Cake alt="Birthday cake" className="text-xl mr-1" />
            March 21st, 2003
          </p>
        </div>
      </SectionContainer>
      <SectionContainer accented>
        <p className="text-lg text-justify">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore quo
          reiciendis suscipit voluptates tenetur ab soluta quibusdam inventore,
          atque quas nulla blanditiis eligendi temporibus maxime? Possimus
          architecto quam fuga delectus.
        </p>
        <p className="text-lg text-justify mt-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
          inventore magnam, nam accusantium maxime sequi odio repellendus, at
          cumque veniam non voluptates error, assumenda ea! Reiciendis explicabo
          sunt recusandae quisquam!
        </p>
      </SectionContainer>
    </main>
  );
}
