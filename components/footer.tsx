"use client";

import TextLink from "./utilities/text-link";

export function Footer() {
  return (
    <footer className="flex items-center justify-center text-center w-full px-2 py-4 border-t bg-background">
      <span>
        Made with ❤️ by Nick. You can find this project on&nbsp;
        <TextLink href="https://github.com/NickVeles/dating" blank={true}>
          Github
        </TextLink>
      </span>
    </footer>
  );
}

export default Footer;
