import { cn } from "@/lib/utils";
import { Quotes } from "phosphor-react";

type TypographyProps = {
  children?: React.ReactNode;
  className?: string;
};

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
        "scroll-m-20 border-b pb-2 text-3xl dyslexic:text-2xl font-semibold tracking-tight first:mt-0",
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

export function P({ children, className }: TypographyProps) {
  return (
    <p className={cn("leading-7 w-full [&:not(:first-child)]:mt-6 font-serif dyslexic:font-dyslexic dyslexic:text-sm text-justify", className)}>
      {children}
    </p>
  );
}

export function Blockquote({ children, className }: TypographyProps) {
  return (
    <blockquote className={cn("mt-6 border-l-2 pl-6 italic flex", className)}>
      <Quotes className="size-4 text-muted-foreground" />
      {children}
    </blockquote>
  );
}

export function Ul({ children, className }: TypographyProps) {
  return (
    <ul className={cn("my-6 ml-6 list-disc font-serif dyslexic:font-dyslexic [&>li]:mt-2", className)}>
      {children}
    </ul>
  );
}

export function Code({ children, className }: TypographyProps) {
  return (
    <code
      className={cn(
        "bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
        className
      )}
    >
      {children}
    </code>
  );
}

export function Bold({ children, className }: TypographyProps) {
  return (
    <pre
      className={cn(
        "inline font-serif text-wrap dyslexic:font-dyslexic font-bold",
        className
      )}
    >
      {children}
    </pre>
  );
}

export function Italic({ children, className }: TypographyProps) {
  return (
    <pre
      className={cn(
        "inline font-serif text-wrap dyslexic:font-dyslexic italic",
        className
      )}
    >
      {children}
    </pre>
  );
}

export function BoldItalic({ children, className }: TypographyProps) {
  return (
    <pre
      className={cn(
        "inline font-serif text-wrap dyslexic:font-dyslexic font-bold italic",
        className
      )}
    >
      {children}
    </pre>
  );
}

export function Emoji({ children, className }: TypographyProps) {
  return (
    <pre
      className={cn(
        "inline font-emoji",
        className
      )}
    >
      {children}
    </pre>
  );
}