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
        "text-mystical-normal dark:text-ethereal-normal scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
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
        "text-mystical-normal dark:text-ethereal-normal scroll-m-20 text-3xl font-semibold tracking-tight transition-colors first:mt-0",
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
        "text-mystical-normal dark:text-ethereal-normal scroll-m-20 text-2xl font-bold tracking-tight",
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
        "text-mystical-normal dark:text-ethereal-normal scroll-m-20 text-xl font-semibold tracking-tight",
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
        "text-mystical-subtle dark:text-ethereal-subtle leading-7",
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
        "text-mystical-normal dark:text-ethereal-normal text-xl font-normal",
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
        "text-mystical-normal dark:text-ethereal-normal text-lg font-semibold",
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
