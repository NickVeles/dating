"use client";

import Image from "next/image";
import { ArrowSquareOut, CopySimple, X } from "phosphor-react";
import { toast } from "sonner";
import { Toaster } from "./ui/sonner";
import TextLink from "./utilities/text-link";
import Link from "next/link";
import path from "path";

// Icons
import DiscordIcon from "@/assets/icons/discord-logo.svg";
import InstagramIcon from "@/assets/icons/instagram-logo.svg"
import XIcon from "@/assets/icons/x-logo.svg"
import LinkedInIcon from "@/assets/icons/linkedin-logo.svg"
import GitHubIcon from "@/assets/icons/github-logo.svg"
import GoogleIcon from "@/assets/icons/google-logo.svg"

const links = [
  {
    icon: InstagramIcon,
    name: "Instagram",
    href: "https://www.instagram.com/nick.veles/",
  },
  {
    icon: XIcon,
    name: "Twitter",
    href: "https://x.com/nickveles",
  },
  {
    icon: LinkedInIcon,
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/nickveles/",
  },
  {
    icon: GitHubIcon,
    name: "GitHub",
    href: "https://github.com/nickveles/",
  },
  {
    icon: GoogleIcon,
    name: "Google Forms",
    href: "https://forms.gle/4YNLofEUcJ6YVA3a9",
  },
];

export function Footer() {
  const handleDiscordCopy = async (username: string) => {
    try {
      await navigator.clipboard.writeText(username);
      toast("Nickname copied successfully!", {
        action: { label: <X />, onClick: () => {} },
      });
    } catch (err) {
      toast("Oops!", {
        description: JSON.stringify(err),
        action: { label: <X />, onClick: () => {} },
      });
      console.error(err);
    }
  };

  return (
    <footer className="flex-row items-center justify-center text-center w-full px-2 py-4 mt-4 border-t bg-background">
      <div className="mb-8">
        <h4 className="mb-2 text-lg font-semibold tracking-wide text-primary">
          Contact
        </h4>
        <ul className="flex flex-wrap gap-8 items-center justify-center text-sm dyslexic:text-xs">
          <li key="discord">
            <span
              onClick={() => handleDiscordCopy("nickveles")}
              className="flex items-center gap-2 hover:cursor-pointer hover:underline"
            >
              <Image
                src={DiscordIcon}
                alt="Discord logo"
                width={0}
                height={0}
                className="size-6 align-middle dark:invert"
              />
              <span className="flex flex-1 truncate">
                discord
                <CopySimple className="inline align-top size-4" />
              </span>
            </span>
          </li>
          {links.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:underline"
              >
                <Image
                  src={link.icon}
                  alt={`${link.name} logo`}
                  width={0}
                  height={0}
                  className="size-6 align-middle dark:invert"
                />
                <span className="flex flex-1 truncate">
                  {link.name}
                  <ArrowSquareOut className="inline align-top size-4" />
                </span>
              </Link>
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
      <Toaster />
    </footer>
  );
}

export default Footer;
