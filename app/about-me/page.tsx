"use client";

import { useTheme } from "next-themes";
import { UserCircle } from "phosphor-react";

export default function AboutMe() {
  const { theme } = useTheme();

  // Ensure theme is loaded before rendering
  if (typeof theme === "undefined") return null;

  return (
    <main className="flex flex-col flex-1 gap-8">
      <div className="flex flex-col gap-2 mt-[5rem]">
        <UserCircle className="w-24 h-24 mx-auto text-primary" />
        <h1 className="text-4xl text-center font-bold font-serif">About Me</h1>
      </div>
      <div className="w-screen bg-accent relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw]">
        <div className="sm:max-w-sm md:max-w-md xl:max-w-xl 2xl:max-w-2xl mx-auto w-full p-[1rem] flex flex-col items-center justify-center">
          <p className="text-lg text-justify">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore quo reiciendis suscipit voluptates tenetur ab soluta quibusdam inventore, atque quas nulla blanditiis eligendi temporibus maxime? Possimus architecto quam fuga delectus.
          </p>
          <p className="text-lg text-justify mt-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum inventore magnam, nam accusantium maxime sequi odio repellendus, at cumque veniam non voluptates error, assumenda ea! Reiciendis explicabo sunt recusandae quisquam!
          </p>
        </div>
      </div>
    </main>
  );
}
