import React from "react";
import { cn } from "~/lib/utils";
import { motion } from "framer-motion";

type TypographyProps = {
  children: React.ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLElement>;

export function TypographyH1({
  children,
  className,
  ...props
}: TypographyProps) {
  return (
    <h1
      {...props}
      className={cn(
        "scroll-m-20 font-fira-sans text-3xl font-extrabold tracking-wide text-mystical-normal dark:text-ethereal-normal md:text-4xl lg:text-5xl",
        className,
      )}
    >
      {children}
    </h1>
  );
}

export function TypographyH2({
  children,
  className,
  ...props
}: TypographyProps) {
  return (
    <h2
      {...props}
      className={cn(
        "scroll-m-20 font-fira-sans text-3xl font-semibold tracking-tight text-mystical-normal transition-colors first:mt-0 dark:text-ethereal-normal",
        className,
      )}
    >
      {children}
    </h2>
  );
}

export function TypographyH3({
  children,
  className,
  ...props
}: TypographyProps) {
  return (
    <h3
      {...props}
      className={cn(
        "scroll-m-20 font-fira-sans text-2xl font-bold tracking-tight text-mystical-normal dark:text-ethereal-normal",
        className,
      )}
    >
      {children}
    </h3>
  );
}

export function TypographyH4({
  children,
  className,
  ...props
}: TypographyProps) {
  return (
    <h4
      {...props}
      className={cn(
        "scroll-m-20 font-fira-sans text-xl font-semibold tracking-tight text-mystical-normal dark:text-ethereal-normal",
        className,
      )}
    >
      {children}
    </h4>
  );
}

export const MotionTypographyP = motion(TypographyP);

export function TypographyP({
  children,
  className,
  topMargin = true,
  ...props
}: TypographyProps & {
  topMargin?: boolean;
}) {
  return (
    <p
      {...props}
      className={cn(
        "leading-7 text-mystical-subtle dark:text-ethereal-subtle",
        topMargin && "[&:not(:first-child)]:mt-6",
        className,
      )}
    >
      {children}
    </p>
  );
}

export function TypographyBlockquote({
  children,
  className,
  ...props
}: TypographyProps) {
  return (
    <blockquote
      {...props}
      className={cn("mt-6 border-l-2 pl-6 italic", className)}
    >
      {children}
    </blockquote>
  );
}

export function TypographyInlineCode({
  children,
  className,
  ...props
}: TypographyProps) {
  return (
    <code
      {...props}
      className={cn(
        "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
        className,
      )}
    >
      {children}
    </code>
  );
}

export function TypographyLead({
  children,
  className,
  ...props
}: TypographyProps) {
  return (
    <p
      {...props}
      className={cn(
        "text-xl font-normal text-mystical-normal dark:text-ethereal-normal",
        className,
      )}
    >
      {children}
    </p>
  );
}

export function TypographyLarge({
  children,
  className,
  ...props
}: TypographyProps) {
  return (
    <div
      {...props}
      className={cn(
        "font-fira-sans text-lg font-semibold text-mystical-normal dark:text-ethereal-normal",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function TypographySmall({
  children,
  className,
  ...props
}: TypographyProps) {
  return (
    <small
      {...props}
      className={cn("text-sm font-medium leading-none", className)}
    >
      {children}
    </small>
  );
}

export function TypographyMuted({
  children,
  className,
  ...props
}: TypographyProps) {
  return (
    <p {...props} className={cn("text-sm text-muted-foreground", className)}>
      {children}
    </p>
  );
}

export function TypographyProse({
  children,
  className,
  ...props
}: TypographyProps) {
  return (
    <p
      {...props}
      className={cn(
        "prose prose-headings:text-mystical-normal prose-a:text-primary prose-figcaption:flex prose-figcaption:justify-center prose-img:rounded-xl prose-hr:mx-auto prose-hr:max-w-lg",
        className,
      )}
    >
      {children}
    </p>
  );
}
