"use client";

//TODO add message to seriously contact before the site goes down!

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
  CaretUp,
} from "phosphor-react";

const links = [
  { icon: DiscordLogo, name: "nickveles", href: "/", copy: true },
  { icon: InstagramLogo, name: "@nick.veles", href: "https://www.instagram.com/nick.veles/" },
  { icon: TwitterLogo, name: "NickVeles", href: "https://x.com/NickVeles" },
  { icon: LinkedinLogo, name: "in/nickveles", href: "https://www.linkedin.com/in/nickveles/" },
  { icon: GithubLogo, name: "NickVeles", href: "https://github.com/NickVeles/" },
  { icon: GoogleLogo, name: "forms.gle", href: "https://forms.gle/4YNLofEUcJ6YVA3a9" },
];

export default function ContactDrawer() {
  return (
    <>
      {/* Spacer to prevent content from being hidden behind the trigger */}
      <div />
      <Drawer>
        <DrawerTrigger asChild>
          <div className="fixed flex gap-2 justify-center intems-center w-full bottom-0 p-4 text-2xl hover:cursor-pointer border-t bg-background">
            Contact Me
            <CaretUp className="w-[2rem] h-[2rem]" />
          </div>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader className="p-4">
            <DrawerTitle className="text-center text-2xl">
              Contact Me
            </DrawerTitle>
          </DrawerHeader>
          <ul className="flex-1 flex flex-col gap-2 p-4 w-full items-stretch">
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
                  <span className="text-[3vh] w-full max-w-[16vh] text-left">
                    {link.name}
                  </span>

                  <div className="flex items-center justify-center w-[6vh] h-[6vh]">
                    {link.copy ? (
                      <CopySimple className="w-[3vh] h-[3vh] text-muted-foreground" />
                    ) : (
                      <ArrowSquareOut className="w-[3vh] h-[3vh] text-muted-foreground" />
                    )}
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
