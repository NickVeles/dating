"use client"

import Link from "next/link";
import { ArrowSquareOut } from "phosphor-react";

interface TextLinkProps {
  href: string;
  children: string;
  blank?: boolean;
  className?: string;
}

export function TextLink({
  href,
  children,
  blank = false,
  className = "text-blue-600 dark:text-blue-400 visited:text-pink-600 dark:visited:text-pink-400 hover:underline",
}: TextLinkProps) {
  return (
    <Link
      href={href}
      target={blank ? "_blank" : undefined}
      rel={blank ? "noopener noreferrer" : undefined}
      className={className}
    >
      {children}
      {blank && <ArrowSquareOut className="inline align-text-top size-4" />}
    </Link>
  );
}

export default TextLink;
