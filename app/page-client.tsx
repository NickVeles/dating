"use client";

import SectionContainer from "@/components/utilities/section-container";
import { Bold, H2, H3, H4, P, Ul } from "@/components/utilities/typography";
import { useTheme } from "next-themes";
import Image from "next/image";

import DarkLogoFull from "@/assets/dark-logo-full.svg";
import LightLogoFull from "@/assets/light-logo-full.svg";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionTrigger,
  AccordionItem,
} from "@/components/ui/accordion";
import TextLink from "@/components/utilities/text-link";
import { DefaultThumbnail } from "@/constants/default-thumbnail";

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
                translate="no"
              >
                <Image
                  src={thumbnail ?? DefaultThumbnail}
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
            <H2>Meet The Creator</H2>
            <p className="text-center font-serif dyslexic:font-dyslexic">
              My personal profile for people interesting in knowing me as a
              person &ndash; not necessarily in the context of dating.
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
            <AccordionContent>
              <P>There are a few reasons why I created this website:</P>
              <Ul>
                <li>
                  As a portfolio project to showcase my web development skills.
                </li>
                <li>I've always wanted to start a blog of some kind.</li>
                <li>
                  This year, I’ve spent a lot of time learning about dating and
                  searching for "the one."
                </li>
              </Ul>
              <P forceFirst>
                Putting all those pieces together, creating a dating guide blog
                just made perfect sense.
              </P>
            </AccordionContent>
          </AccordionItem>

          {/* Can I trust this guide? */}
          <AccordionItem value="item-2">
            <AccordionTrigger>
              <H4>Can I trust this website?</H4>
            </AccordionTrigger>
            <AccordionContent>
              <P>
                It’s important to remember that there’s no one-size-fits-all
                approach to dating. Everyone’s journey is unique, and what works
                for one person might not work for another. By trusting this
                site, you're essentially trusting that the advice and insights
                that have worked for us might work for you too.
              </P>
              <P>
                That said, all of our contributors are expected to have a solid
                level of dating experience&mdash;and a good understanding of the
                do’s and don’ts of meaningful communication.
              </P>
              <P>
                If you consider yourself experienced in the dating world and
                have something valuable to share, we’d love to hear from you.
                You're always welcome to{" "}
                <TextLink href="/contribute">contribute</TextLink>.
              </P>
            </AccordionContent>
          </AccordionItem>

          {/* Who is this website for? */}
          <AccordionItem value="item-3">
            <AccordionTrigger>
              <H4>Who is this website for?</H4>
            </AccordionTrigger>
            <AccordionContent>
              <P>
                This website is for anyone looking to improve their dating
                life—whether you're just starting out, getting back into the
                game, or looking to level up your relationship skills.
              </P>
              <P>
                We write for people who are genuinely interested in building
                better connections, understanding the dating landscape, and
                becoming more confident in who they are. If you're tired of
                shallow advice and want real, practical insights based on
                experience, you’re in the right place.
              </P>
              <P>
                Whether you're swiping on apps, navigating first dates, or
                wondering how to keep things exciting long-term, there’s
                something here for you.
              </P>
            </AccordionContent>
          </AccordionItem>

          {/* What do I get for contributing? */}
          <AccordionItem value="item-4">
            <AccordionTrigger>
              <H4>What do I get for contributing?</H4>
            </AccordionTrigger>
            <AccordionContent>
              <P>
                This project is currently non-profit and open-source, so
                unfortunately I cannot give you any monetary compensation for
                any form of contribution.
              </P>
              <P>
                However, there is one other remaining form of appreciation for
                your hard work: if you decide to contribute a new post or help
                edit an existing one,{" "}
                <Bold>
                  you will be written down as this post's author/editor
                </Bold>
                , unless otherwise requested (you can stay anonymous if you
                want) &ndash; everyone will see your name and photo, as well as
                a link to your GitHub account under the post. You will also
                appear in the special "Thank You" section on this page!
              </P>
              <P>
                If you're seriously considering contributing, then definitely
                check the official{" "}
                <TextLink href="/contribute">How To Contribute</TextLink> guide.
              </P>
            </AccordionContent>
          </AccordionItem>

          {/* I have more questions */}
          <AccordionItem value="item-99">
            <AccordionTrigger>
              <H4>I have more questions!</H4>
            </AccordionTrigger>
            <AccordionContent>
              <P>
                The contact links are right below this FAQ. Be welcome to
                message me at any time. I'll try to respond as quickly as
                possible!
              </P>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </SectionContainer>
    </main>
  );
}
