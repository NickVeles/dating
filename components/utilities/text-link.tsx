import { ArrowSquareOut } from "phosphor-react";

interface TextLinkProps {
  href: string;
  children: string;
  blank?: boolean;
}

export function TextLink({ href, children, blank = false }: TextLinkProps) {
  return (
    <a
      href={href}
      target={blank ? "_blank" : undefined}
      rel={blank ? "noopener noreferrer" : undefined}
      className="text-pink-600 dark:text-pink-400 hover:underline"
    >
      {children}
      {blank && <ArrowSquareOut className="inline align-text-top size-4" />}
    </a>
  );
}

export default TextLink;