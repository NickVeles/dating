"use client";

import { ArrowSquareOut } from "phosphor-react";

export function Footer() {
  return (
    <footer className="flex items-center justify-center w-full px-2 py-4 border-t bg-background">
      <span>
        Made with ❤️ by Nick. You can find this project on&nbsp;
        <a
          href="https://github.com/NickVeles/dating"
          target="_blank"
          className="text-pink-600 dark:text-pink-400 hover:underline"
        >
          Github
          <ArrowSquareOut className="inline align-text-top size-4" />
        </a>
      </span>
    </footer>
  );
}

export default Footer;
