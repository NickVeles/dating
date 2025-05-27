"use client";

import Image from "next/image";
import { List, House } from "phosphor-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { FontToggle } from "@/components/font-toggle";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
  SheetHeader,
} from "@/components/ui/sheet";

const pages = [
  { icon: House, name: "Home", href: "/" },
  //TODO add more pages
];

export function Header() {
  return (
    <header className="flex items-center justify-between w-full py-2 px-4 border-b bg-background">
      {/* Left: Burger menu */}
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Open navigation menu"
            className="hover:cursor-pointer"
          >
            <List className="size-7" />
          </Button>
        </SheetTrigger>
        <SheetContent
          side="left"
          className="p-0 w-full max-w-xs sm:max-w-md md:max-w-sm lg:max-w-md"
        >
          <nav className="flex flex-col h-full">
            <SheetHeader className="flex px-4 py-3 border-b">
              <span className="font-bold text-lg">Menu</span>
            </SheetHeader>
            <ul className="flex-1 flex flex-col gap-1 p-4">
              {pages.map((page) => (
                <li key={page.href}>
                  <SheetClose asChild>
                    <a
                      href={page.href}
                      className="flex items-center gap-2 p-2 rounded hover:bg-accent transition-colors"
                    >
                      {page.icon ? (
                        <page.icon className="w-[1.6rem] h-[1.6rem]" />
                      ) : (
                        <div className="w-[1.6rem] h-[1.6rem]" />
                      )}
                      {page.name}
                    </a>
                  </SheetClose>
                </li>
              ))}
            </ul>
          </nav>
        </SheetContent>
      </Sheet>

      {/* Center: Logo */}
      <div className="flex-1 flex justify-center">
        <a href="/" className="flex items-center">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={120}
            height={32}
            priority
            className="h-8 w-auto dark:invert"
          />
        </a>
      </div>

      {/* Right: Accessibility toggles */}
      <div className="flex items-center gap-2">
        <ThemeToggle />
        <FontToggle />
      </div>
    </header>
  );
}

export default Header;
