"use client";

import { useTheme } from "next-themes";
import Image from "next/image";

export default function Home() {
  const { theme } = useTheme();

  // Ensure theme is loaded before rendering
  if (typeof theme === "undefined") return null;

  return (
    <main className="flex flex-1">
    </main>
  );
}
