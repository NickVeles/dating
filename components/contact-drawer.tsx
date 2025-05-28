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
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

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
  const [showButton, setShowButton] = useState(false);
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

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 0);
    };

    // Listen to scroll
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Toaster />
      <Drawer>
        <DrawerTrigger asChild>
          <div
            className={cn(
              "fixed flex gap-4 justify-center intems-center w-full bottom-0 p-4 text-2xl hover:cursor-pointer border-t bg-background transition-transform duration-300 shadow",
              showButton ? "translate-y-0" : "translate-y-full"
            )}
          >
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
          <ul className="flex flex-col gap-2 p-4 items-center">
            <li className="rounded hover:bg-accent transition-colors">
              <button
                type="button"
                onClick={() => handleDiscordCopy("nickveles")}
                className="flex p-2 gap-4 text-4xl dyslexic:text-2xl hover:cursor-pointer"
              >
                <div className="flex items-center justify-center gap-4 w-75">
                  <DiscordLogo className="text-6xl" />

                  <div className="flex flex-1 p-2 truncate">
                    nickveles
                    <CopySimple className="text-muted-foreground text-xl" />
                  </div>
                </div>
              </button>
            </li>
            {links.map((link) => (
              <li
                key={link.href}
                className="rounded hover:bg-accent transition-colors"
              >
                <a
                  href={link.href}
                  target="_blank"
                  className="flex p-2 gap-4 text-4xl dyslexic:text-2xl"
                >
                  <div className="flex items-center justify-center gap-4 w-75">
                    <link.icon className="text-6xl" />

                    <div className="flex flex-1 p-2 text-left truncate">
                      {link.name}
                      <ArrowSquareOut className="text-muted-foreground text-xl" />
                    </div>
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
