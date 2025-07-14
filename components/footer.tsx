"use client";

import {
  ArrowSquareOutIcon,
  CopySimpleIcon,
  XIcon,
  InstagramLogoIcon,
  XLogoIcon,
  LinkedinLogoIcon,
  GithubLogoIcon,
  GoogleLogoIcon,
  DiscordLogoIcon,
} from "@phosphor-icons/react";
import { toast } from "sonner";
import { Toaster } from "./ui/sonner";
import TextLink from "./utilities/text-link";
import Link from "next/link";

const links = [
  {
    icon: InstagramLogoIcon,
    name: "Instagram",
    href: "https://www.instagram.com/nick.veles/",
  },
  {
    icon: XLogoIcon,
    name: "Twitter",
    href: "https://x.com/nickveles",
  },
  {
    icon: LinkedinLogoIcon,
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/nickveles/",
  },
  {
    icon: GithubLogoIcon,
    name: "GitHub",
    href: "https://github.com/nickveles/",
  },
  {
    icon: GoogleLogoIcon,
    name: "Google Forms",
    href: "https://forms.gle/4YNLofEUcJ6YVA3a9",
  },
];

export function Footer() {
  const handleDiscordCopy = async (username: string) => {
    try {
      await navigator.clipboard.writeText(username);
      toast("Nickname copied successfully!", {
        action: { label: <XIcon />, onClick: () => {} },
      });
    } catch (err) {
      toast("Oops!", {
        description: JSON.stringify(err),
        action: { label: <XIcon />, onClick: () => {} },
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
              <DiscordLogoIcon
                alt="Discord Icon"
                className="size-6 align-middle"
              />
              <span className="flex flex-1 truncate">
                discord
                <CopySimpleIcon className="inline align-top size-4" />
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
                <link.icon
                  alt={`${link.name} Icon`}
                  className="size-6 align-middle"
                />
                <span className="flex flex-1 truncate">
                  {link.name}
                  <ArrowSquareOutIcon className="inline align-top size-4" />
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
