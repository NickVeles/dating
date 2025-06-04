"use client";

import Image from "next/image";
import { ArrowSquareOut, CopySimple } from "phosphor-react";
import { toast } from "sonner";
import TextLink from "./utilities/text-link";
import { Toaster } from "./ui/sonner";

const links = [
  {
    icon: "instagram-logo.svg",
    common: "Instagram",
    name: "@nick.veles",
    href: "https://www.instagram.com/nick.veles/",
  },
  {
    icon: "x-logo.svg",
    common: "Twitter",
    name: "NickVeles",
    href: "https://x.com/NickVeles",
  },
  {
    icon: "linkedin-logo.svg",
    common: "LinkedIn",
    name: "in/nickveles",
    href: "https://www.linkedin.com/in/nickveles/",
  },
  {
    icon: "github-logo.svg",
    common: "GitHub",
    name: "NickVeles",
    href: "https://github.com/NickVeles/",
  },
  {
    icon: "/google-logo.svg",
    common: "Google Forms",
    name: "forms.gle",
    href: "https://forms.gle/4YNLofEUcJ6YVA3a9",
  },
];

export function Footer() {
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
    <footer className="flex-row items-center justify-center text-center w-full px-2 py-4 border-t bg-background">
      <div className="mb-8">
        <h4 className="mb-2 text-lg font-semibold tracking-wide text-primary">
          Contact
        </h4>
        <Toaster />
        <ul className="flex flex-wrap flex-col sm:flex-row gap-2 sm:gap-8 items-center justify-center text-sm dyslexic:text-xs">
          <li key="discord">
            <span
              onClick={() => handleDiscordCopy("nickveles")}
              className="flex items-center gap-2 hover:cursor-pointer hover:underline"
            >
                <Image
                  src="discord-logo.svg"
                  alt="Discord logo"
                  width={0}
                  height={0}
                  className="size-6 align-middle dark:invert"
                />
              <span className="flex flex-1 truncate">
                discord <CopySimple className="inline align-top size-4" />
              </span>
            </span>
          </li>
          {links.map((link) => (
            <li key={link.common}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:underline"
              >
                <Image
                  src={link.icon}
                  alt={`${link.common} logo`}
                  width={0}
                  height={0}
                  className="size-6 align-middle dark:invert"
                />
                <span className="flex flex-1 truncate">
                  {link.common}
                  <ArrowSquareOut className="inline align-top size-4" />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <span className="text-xs text-muted-foreground">
        Made with ❤️ by Nick. You can find this project on&nbsp;
        <TextLink href="https://github.com/NickVeles/dating" blank={true}>
          Github
        </TextLink>
      </span>
    </footer>
  );
}

export default Footer;
