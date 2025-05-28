"use client";

import { useTheme } from "next-themes";
import Image from "next/image";

export default function Home() {
  const { theme } = useTheme();

  // Ensure theme is loaded before rendering
  if (typeof theme === "undefined") return null;

  return (
    <div>
      <main className="flex flex-1">
        <div
          className="relative h-screen w-screen flex items-center justify-center"
          style={{
            backgroundImage: `url(${
              theme === "dark"
                ? "https://images.unsplash.com/photo-1467810160588-c86c0deb5d16?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                : "https://images.unsplash.com/photo-1504753930079-4c0b71580d40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            })`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Image
            src={
              theme === "dark" ? "/dark-logo-full.svg" : "/light-logo-full.svg"
            }
            alt="Logo"
            width={0}
            height={0}
            className="h-[30vh] w-full bg-background/50 p-4"
            priority
          />
        </div>
      </main>
    </div>
  );
}
