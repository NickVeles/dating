"use client";

import SectionContainer from "@/components/utilities/section-container";
import TextLink from "@/components/utilities/text-link";
import { Bold, P, Ul } from "@/components/utilities/typography";
import { useTheme } from "next-themes";
import Image from "next/image";

import DarkLogoFull from "@/assets/dark-logo-full.svg";
import LightLogoFull from "@/assets/light-logo-full.svg";

export default function Home() {
  const { theme } = useTheme();

  // Ensure theme is loaded before rendering
  if (typeof theme === "undefined") return null;

  return (
    <main className="flex flex-col flex-1">
      <div
        className="relative h-screen w-screen flex items-center justify-center"
        style={{
          backgroundImage: `url(${
            theme === "dark"
              ? "https://images.unsplash.com/photo-1467810160588-c86c0deb5d16?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              : "https://images.unsplash.com/photo-1504753930079-4c0b71580d40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          })`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Image
          src={theme === "dark" ? DarkLogoFull : LightLogoFull}
          alt="Logo"
          width={0}
          height={0}
          className="h-[30vh] w-full bg-background/50 p-4"
          priority
        />
      </div>
      <SectionContainer>
        <P>
          This site is a <Bold>WORK IN PROGRESS</Bold> (WIP).
        </P>
        <P>
          You can check the <TextLink href="/profile">Dating Profile</TextLink>{" "}
          page though. It's already finished.
        </P>
        <P>The following will be added in the future updates:</P>
        <Ul>
          <li><TextLink href="/blog">Blog</TextLink> page with dating guide articles. (working on it right now)</li>
          <li>Content for the home page (the one you're currently seeing).</li>
          <li>Improved accessiblity features.</li>
          <li>Bugfixes.</li>
        </Ul>
      </SectionContainer>
    </main>
  );
}
