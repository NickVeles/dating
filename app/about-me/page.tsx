"use client";

import SectionContainer from "@/components/utilities/section-container";
import TitleContainer from "@/components/utilities/title-container";
import { useTheme } from "next-themes";
import { UserCircle } from "phosphor-react";

export default function AboutMe() {
  const { theme } = useTheme();

  // Ensure theme is loaded before rendering
  if (typeof theme === "undefined") return null;

  return (
    <main className="flex flex-col flex-1 gap-8">
      <TitleContainer Icon={UserCircle}>About Me</TitleContainer>
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
