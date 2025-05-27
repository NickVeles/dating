"use client";

//TODO add message to seriously contact before the site goes down!
//TODO finish discord copy functionality

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  DiscordLogo,
  InstagramLogo,
  TwitterLogo,
  LinkedinLogo,
  GithubLogo,
  GoogleLogo,
  CopySimple,
  ArrowSquareOut,
  Heart,
  CaretUp,
} from "phosphor-react";
import { toast } from "sonner";
import { Toaster } from "./ui/sonner";

const links = [
  {
    icon: InstagramLogo,
    name: "@nick.veles",
    href: "https://www.instagram.com/nick.veles/",
  },
  { icon: TwitterLogo, name: "NickVeles", href: "https://x.com/NickVeles" },
  {
    icon: LinkedinLogo,
    name: "in/nickveles",
    href: "https://www.linkedin.com/in/nickveles/",
  },
  {
    icon: GithubLogo,
    name: "NickVeles",
    href: "https://github.com/NickVeles/",
  },
  {
    icon: GoogleLogo,
    name: "forms.gle",
    href: "https://forms.gle/4YNLofEUcJ6YVA3a9",
  },
];

export default function ContactDrawer() {
  const handleDiscordCopy = async (username: string) => {
    try {
      await navigator.clipboard.writeText(username);
      toast("Nickname copied successfully!");
    } catch (err) {
      toast("Oops!", {
        description: JSON.stringify(err),
      });
    }
  };

  return (
    <>
      <Toaster />
      <Drawer>
        <DrawerTrigger asChild>
          <div className="fixed flex gap-4 justify-center intems-center w-full bottom-0 p-4 text-2xl hover:cursor-pointer border-t bg-background">
            <Heart className="size-8 text-pink-600" />
            Contact Me
            <CaretUp className="size-8" />
          </div>
        </DrawerTrigger>
        <DrawerContent className="dyslexic:font-[family-name:var(--font-dyslexic)]">
          <DrawerHeader className="p-4">
            <DrawerTitle className="flex items-center justify-center gap-4 text-2xl">
              <Heart className="size-8 text-pink-600" />
              Contact Me
              <Heart className="size-8 text-pink-600" />
            </DrawerTitle>
          </DrawerHeader>
          <ul className="flex-1 flex flex-col gap-2 p-4 w-full items-stretch">
            <li className="w-full rounded hover:bg-accent transition-colors">
              <button
                type="button"
                onClick={() => handleDiscordCopy("nickveles")}
                className="flex items-center justify-center hover:cursor-pointer p-2 gap-[2rem] w-full"
              >
                <DiscordLogo className="w-[6vh] h-[6vh]" />
                <span className="text-[3vh] w-full max-w-[8vw] dyslexic:max-w-[12vw] text-left">
                  nickveles
                </span>
                <div className="flex items-center justify-center w-[6vh] h-[6vh]">
                  <CopySimple className="w-[3vh] h-[3vh] text-muted-foreground" />
                </div>
              </button>
            </li>
            {links.map((link) => (
              <li
                key={link.href}
                className="w-full rounded hover:bg-accent transition-colors"
              >
                <a
                  href={link.href}
                  target="_blank"
                  className="flex items-center justify-center p-2 gap-[2rem]"
                >
                  {link.icon ? (
                    <link.icon className="w-[6vh] h-[6vh]" />
                  ) : (
                    <div className="w-[6vh] h-[6vh]" />
                  )}
                  <span className="text-[3vh] w-full max-w-[8vw] dyslexic:max-w-[12vw] text-left">
                    {link.name}
                  </span>

                  <div className="flex items-center justify-center w-[6vh] h-[6vh]">
                    <ArrowSquareOut className="w-[3vh] h-[3vh] text-muted-foreground" />
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </DrawerContent>
      </Drawer>
    </>
  );
}
