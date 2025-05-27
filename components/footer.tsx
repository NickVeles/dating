"use client";

import { Heart } from "phosphor-react";

export function Footer() {
  return (
    <footer className="flex items-center justify-center w-full p-2 border-t bg-background">
      <span className="flex">
        Made with ❤️ by Nick. You can find this project on&nbsp;
        <a
          href="https://github.com/NickVeles/dating"
          target="_blank"
          className="text-pink-600 dark:text-blue-400 hover:underline"
        >
          Github
        </a>
      </span>
    </footer>
  );
}

export default Footer;
