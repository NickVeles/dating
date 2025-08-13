"use client";

//TODO: Add "skip to content"
//TODO: Add "back to top" button

import Image from "next/image";
import { ListIcon, HouseIcon, HeartIcon, HandHeartIcon, UserIcon } from "@phosphor-icons/react";
import { ThemeToggle } from "@/components/theme-toggle";
import { FontToggle } from "@/components/font-toggle";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import Link from "next/link";
import DarkLogo from "@/assets/dark-logo.svg";
import LightLogo from "@/assets/light-logo.svg";
import { useEffect, useState } from "react";

const pages = [
  { icon: HouseIcon, name: "Home", href: "/" },
  { icon: HeartIcon, name: "Guide Blog", href: "/blog" },
  { icon: UserIcon, name: "Meet Me", href: "/profile" },
  { icon: HandHeartIcon, name: "Contribute", href: "/contribute" },
];

export function Header() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Ensure theme is loaded before rendering
  useEffect(() => setMounted(true), []);
  if (!mounted) {
    return null;
  }

  return (
    <header
      className={cn(
        "sticky top-0 z-50 duration-300 h-(--header-height) transition-shadow flex items-center justify-between w-full py-2 px-4 bg-background",
        scrolled ? "shadow-md" : ""
      )}
    >
      {/* Left: Burger menu */}
      <div className="flex flex-1 justify-start">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Open navigation menu"
              className="hover:cursor-pointer"
            >
              <ListIcon className="size-7" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="p-0 w-full max-w-xs sm:max-w-md md:max-w-sm lg:max-w-md dyslexic:font-[family-name:var(--font-dyslexic)]"
          >
            <nav className="flex flex-col h-full">
              <SheetHeader className="flex px-4 py-3 border-b">
                <SheetTitle>
                  <span className="font-bold text-lg">Menu</span>
                </SheetTitle>
              </SheetHeader>
              <ul className="flex-1 flex flex-col gap-1 p-4">
                {pages.map((page) => (
                  <li key={page.href}>
                    <SheetClose asChild>
                      <Link
                        href={page.href}
                        className="flex items-center gap-2 p-2 rounded hover:bg-accent transition-colors"
                      >
                        {page.icon ? (
                          <page.icon className="w-[1.6rem] h-[1.6rem]" />
                        ) : (
                          <div className="w-[1.6rem] h-[1.6rem]" />
                        )}
                        {page.name}
                      </Link>
                    </SheetClose>
                  </li>
                ))}
              </ul>
            </nav>
          </SheetContent>
        </Sheet>
      </div>

      {/* Center: Logo */}
      <div className="flex flex-1 justify-center">
        <Link href="/" className="flex items-center">
          <Image
            src={resolvedTheme === "dark" ? DarkLogo : LightLogo}
            alt="Logo"
            width={120}
            height={32}
            priority
            className="h-8 w-auto"
          />
        </Link>
      </div>

      {/* Right: Accessibility toggles */}
      <div className="flex flex-1 justify-end place-items-end gap-2">
        <ThemeToggle />
        <FontToggle />
      </div>
    </header>
  );
}

export default Header;
