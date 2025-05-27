"use client";

import * as React from "react";
import Image from "next/image";
import { List } from "phosphor-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { FontToggle } from "@/components/font-toggle";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const pages = [
  { name: "Home", href: "/" },
  //TODO add more pages
];

export function Header() {
  return (
    <header className="flex items-center justify-between w-full p-2 border-b bg-background">
      {/* Left: Burger menu */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" aria-label="Open navigation menu">
            <List className="size-6" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent side="bottom" align="start">
          {pages.map((page, idx) => (
            <React.Fragment key={page.href}>
              <DropdownMenuItem asChild>
                <a href={page.href}>{page.name}</a>
              </DropdownMenuItem>
              {idx < pages.length - 1 && <DropdownMenuSeparator />}
            </React.Fragment>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

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
