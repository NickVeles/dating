"use client";

import { cn } from "@/lib/utils";
import { QuotesIcon } from "@phosphor-icons/react";

interface TypographyProps {
  children?: React.ReactNode;
  className?: string;
};

interface ParagraphProps extends TypographyProps {
  forceFirst?: boolean;
}

interface OlProps extends TypographyProps {
  useLetters?: boolean;
}

export function H1({ children, className }: TypographyProps) {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-center text-4xl dyslexic:text-3xl font-extrabold tracking-tight text-balance",
        className
      )}
    >
      {children}
    </h1>
  );
}

export function H2({ children, className }: TypographyProps) {
  return (
    <h2
      className={cn(
        "scroll-m-20 text-3xl dyslexic:text-2xl font-semibold tracking-tight first:mt-0",
        className
      )}
    >
      {children}
    </h2>
  );
}

export function H3({ children, className }: TypographyProps) {
  return (
    <h3
      className={cn(
        "scroll-m-20 text-2xl dyslexic:text-xl font-medium tracking-tight",
        className
      )}
    >
      {children}
    </h3>
  );
}

export function H4({ children, className }: TypographyProps) {
  return (
    <h4
      className={cn(
        "scroll-m-20 text-xl dyslexic:text-lg tracking-tight",
        className
      )}
    >
      {children}
    </h4>
  );
}

export function P({ children, className, forceFirst = false }: ParagraphProps) {
  return (
    <p
      className={cn(
        "leading-7 w-full font-serif dyslexic:font-dyslexic dyslexic:text-sm text-justify",
        forceFirst ? "" : "[&:not(:first-child)]:mt-6",
        className
      )}
    >
      {children}
    </p>
  );
}

export function Blockquote({ children, className }: TypographyProps) {
  return (
    <blockquote className={cn("mt-6 border-l-2 pl-6 italic flex", className)}>
      <QuotesIcon className="size-4 text-muted-foreground" />
      {children}
    </blockquote>
  );
}

export function Ul({ children, className }: TypographyProps) {
  return (
    <ul
      className={cn(
        "py-6 pl-6 list-disc w-full font-serif dyslexic:font-dyslexic text-justify [&>:not(:first-child)]:mt-2",
        className
      )}
    >
      {children}
    </ul>
  );
}

export function Ol({ children, className, useLetters }: OlProps) {
  return (
    <ol
      style={useLetters ? { listStyleType: 'lower-alpha' } : undefined}
      className={cn(
        "py-6 pl-6 w-full font-serif dyslexic:font-dyslexic text-justify [&>:not(:first-child)]:mt-2",
        useLetters ? "list-[lower-alpha]" : "list-decimal",
        className
      )}
    >
      {children}
    </ol>
  );
}

export function Code({ children, className }: TypographyProps) {
  return (
    <code
      className={cn(
        "bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono dyslexic:font-dyslexic-mono text-sm font-semibold",
        className
      )}
    >
      {children}
    </code>
  );
}

export function CodeBlock({ children, className, forceFirst }: ParagraphProps) {
  return (
    <pre
      className={cn(
        "bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono dyslexic:font-dyslexic-mono text-sm font-semibold w-full text-wrap",
        forceFirst ? "" : "[&:not(:first-child)]:mt-6",
        className
      )}
    >
      <code>{children}</code>
    </pre>
  );
}

export function Bold({ children, className }: TypographyProps) {
  return (
    <span className={cn("dyslexic:font-dyslexic font-bold", className)}>
      {children}
    </span>
  );
}

export function Italic({ children, className }: TypographyProps) {
  return (
    <span className={cn("dyslexic:font-dyslexic italic", className)}>
      {children}
    </span>
  );
}

export function BoldItalic({ children, className }: TypographyProps) {
  return (
    <span className={cn("dyslexic:font-dyslexic font-bold italic", className)}>
      {children}
    </span>
  );
}

export function Emoji({ children, className }: TypographyProps) {
  return <span className={cn("font-emoji", className)}>{children}</span>;
}
