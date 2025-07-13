"use client";

import SectionContainer from "@/components/utilities/section-container";
import { H2, H3, H4 } from "@/components/utilities/typography";
import { useTheme } from "next-themes";
import Image from "next/image";

import DarkLogoFull from "@/assets/dark-logo-full.svg";
import LightLogoFull from "@/assets/light-logo-full.svg";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Accordion, AccordionContent, AccordionTrigger, AccordionItem } from "@/components/ui/accordion";

const DefaultImage =
  "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

interface HomeProps {
  latestPosts: Post[];
}

export default function HomeClient({ latestPosts }: HomeProps) {
  const router = useRouter();
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure theme is loaded before rendering
  useEffect(() => setMounted(true), []);
  if (!mounted) {
    return null;
  }

  return (
    <main className="flex flex-col flex-1 gap-5">
      <div
        className="relative h-(--header-screen-height) w-screen flex items-center justify-center"
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

      {/* Blog */}
      <SectionContainer>
        <div className="flex flex-col lg:flex-row w-full gap-5 lg:gap-2 p-2 border border-black/20 dark:border-white/20 rounded-lg">
          <div className="relative flex justify-center items-center lg:w-[40%] h-[20vh] lg:h-[30vh] rounded overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1591711696773-c4b7fe4d3d74?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="blog image"
              width={1471}
              height={981}
              className="h-full object-cover"
            />
          </div>
          <div className="flex flex-col w-full lg:w-[60%] text-center text-wrap justify-center gap-5 mb-2">
            <H2>Guide Blog</H2>
            <p className="text-center font-serif dyslexic:font-dyslexic">
              Discover easy, practical tips and expert advice to help you
              navigate the world of dating with confidence
            </p>
            <div className="self-center">
              <Button
                onClick={() => router.push("/blog")}
                className="inline-flex text-white bg-pink-700 hover:bg-pink-600 w-auto font-sans dyslexic:font-dyslexic hover:cursor-pointer"
              >
                Browse
              </Button>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Latest Posts */}
      <SectionContainer accented className="gap-5">
        <H2>Explore Latest Blogs</H2>
        <ul className="flex flex-col xl:flex-row w-full gap-5 justify-around">
          {latestPosts.map(({ slug, thumbnail, title }) => (
            <li key={slug} className="xl:max-w-[33%]">
              <Link
                href={`/blog/${slug}`}
                className="flex flex-1 flex-col min-w-full p-2 gap-4 bg-background border border-black/20 dark:border-white/20 rounded-lg"
              >
                <Image
                  src={thumbnail ?? DefaultImage}
                  alt={title}
                  width={800}
                  height={480}
                  className="flex object-cover rounded aspect-[5/2] w-full"
                />
                <div className="flex flex-2 flex-col w-full gap-2 px-2">
                  <H4 className="font-serif dyslexic:font-dyslexic dyslexic:text-lg text-wrap font-semibold">
                    {title}
                  </H4>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </SectionContainer>

      {/* Profile */}
      <SectionContainer>
        <div className="flex flex-col lg:flex-row-reverse w-full gap-5 lg:gap-2 p-2 border border-black/20 dark:border-white/20 rounded-lg">
          <div className="relative flex justify-center items-center lg:w-[40%] h-[20vh] lg:h-[30vh] rounded overflow-hidden">
            <Image
              src="/gallery/006.jpg"
              alt="profile image"
              width={2000}
              height={1000}
              className="h-full object-cover blur"
            />
          </div>
          <div className="flex flex-col w-full lg:w-[60%] text-center text-wrap justify-center gap-5 mb-2">
            <H2>About Me</H2>
            <p className="text-center font-serif dyslexic:font-dyslexic">
              Staying in theme of dating, inspired by websites like Carrd, I
              decided to create my own centralized dating profile!
            </p>
            <div className="self-center">
              <Button
                onClick={() => router.push("/profile")}
                className="inline-flex text-white bg-pink-700 hover:bg-pink-600 w-auto font-sans dyslexic:font-dyslexic hover:cursor-pointer"
              >
                View
              </Button>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Contribute */}
      <SectionContainer accented className="gap-5">
        <p className="text-center text-wrap font-serif dyslexic:font-dyslexic">
          Your experiences matter! Whether it’s a first date gone right (or
          hilariously wrong), a lesson learned, or advice worth sharing &ndash;
          we’d love to hear from you. Join our community of real voices and help
          others simplify their dating journey.
        </p>
        <Button
          onClick={() => router.push("/contribute")}
          className="inline-flex text-white bg-pink-700 hover:bg-pink-600 w-auto font-sans dyslexic:font-dyslexic hover:cursor-pointer"
        >
          Contribute
        </Button>
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
          {/* Why did you make this website? */}
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <H4>Why did you make this website?</H4>
            </AccordionTrigger>
            <AccordionContent>{/*  */}</AccordionContent>
          </AccordionItem>
        </Accordion>
      </SectionContainer>
    </main>
  );
}
