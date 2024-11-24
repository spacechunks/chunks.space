import React, { forwardRef } from "react";
import { cn } from "~/lib/utils";
import { motion } from "framer-motion";

type TypographyProps = {
  children: React.ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLElement>;

export const TypographyH1 = forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <h1
        ref={ref}
        {...props}
        className={cn(
          "scroll-m-20 font-fira-sans text-3xl font-extrabold tracking-wide text-mystical-normal dark:text-ethereal-normal md:text-4xl lg:text-5xl",
          className,
        )}
      >
        {children}
      </h1>
    );
  },
);
TypographyH1.displayName = "TypographyH1";

export const TypographyH2 = forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <h2
        ref={ref}
        {...props}
        className={cn(
          "scroll-m-20 font-fira-sans text-3xl font-semibold tracking-tight text-mystical-normal transition-colors first:mt-0 dark:text-ethereal-normal",
          className,
        )}
      >
        {children}
      </h2>
    );
  },
);
TypographyH2.displayName = "TypographyH2";

export const TypographyH3 = forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <h3
        ref={ref}
        {...props}
        className={cn(
          "scroll-m-20 font-fira-sans text-2xl font-bold tracking-tight text-mystical-normal dark:text-ethereal-normal",
          className,
        )}
      >
        {children}
      </h3>
    );
  },
);
TypographyH3.displayName = "TypographyH3";

export const TypographyH4 = forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <h4
        ref={ref}
        {...props}
        className={cn(
          "scroll-m-20 font-fira-sans text-xl font-semibold tracking-tight text-mystical-normal dark:text-ethereal-normal",
          className,
        )}
      >
        {children}
      </h4>
    );
  },
);
TypographyH4.displayName = "TypographyH4";

type TypographyPProps = TypographyProps & {
  topMargin?: boolean;
};

export const TypographyP = forwardRef<HTMLParagraphElement, TypographyPProps>(
  ({ children, className, topMargin = true, ...props }, ref) => {
    return (
      <p
        ref={ref}
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
  },
);
TypographyP.displayName = "TypographyP";

export const TypographyBlockquote = forwardRef<
  HTMLQuoteElement,
  TypographyProps
>(({ children, className, ...props }, ref) => {
  return (
    <blockquote
      ref={ref}
      {...props}
      className={cn("mt-6 border-l-2 pl-6 italic", className)}
    >
      {children}
    </blockquote>
  );
});
TypographyBlockquote.displayName = "TypographyBlockquote";

export const TypographyInlineCode = forwardRef<HTMLElement, TypographyProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <code
        ref={ref}
        {...props}
        className={cn(
          "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
          className,
        )}
      >
        {children}
      </code>
    );
  },
);
TypographyInlineCode.displayName = "TypographyInlineCode";

export const TypographyLead = forwardRef<HTMLParagraphElement, TypographyProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <p
        ref={ref}
        {...props}
        className={cn(
          "text-xl font-normal text-mystical-normal dark:text-ethereal-normal",
          className,
        )}
      >
        {children}
      </p>
    );
  },
);
TypographyLead.displayName = "TypographyLead";

export const TypographyLarge = forwardRef<HTMLDivElement, TypographyProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        {...props}
        className={cn(
          "font-fira-sans text-lg font-semibold text-mystical-normal dark:text-ethereal-normal",
          className,
        )}
      >
        {children}
      </div>
    );
  },
);
TypographyLarge.displayName = "TypographyLarge";

export const TypographySmall = forwardRef<HTMLElement, TypographyProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <small
        ref={ref}
        {...props}
        className={cn("text-sm font-medium leading-none", className)}
      >
        {children}
      </small>
    );
  },
);
TypographySmall.displayName = "TypographySmall";

export const TypographyMuted = forwardRef<
  HTMLParagraphElement,
  TypographyProps
>(({ children, className, ...props }, ref) => {
  return (
    <p
      ref={ref}
      {...props}
      className={cn("text-sm text-muted-foreground", className)}
    >
      {children}
    </p>
  );
});
TypographyMuted.displayName = "TypographyMuted";

export const TypographyProse = forwardRef<
  HTMLParagraphElement,
  TypographyProps
>(({ children, className, ...props }, ref) => {
  return (
    <p
      ref={ref}
      {...props}
      className={cn(
        "prose prose-headings:text-mystical-normal prose-a:text-primary prose-figcaption:flex prose-figcaption:justify-center prose-img:rounded-xl prose-hr:mx-auto prose-hr:max-w-lg",
        className,
      )}
    >
      {children}
    </p>
  );
});
TypographyProse.displayName = "TypographyProse";

export const MotionTypographyH1 = motion(TypographyH1);
export const MotionTypographyH2 = motion(TypographyH2);
export const MotionTypographyH3 = motion(TypographyH3);
export const MotionTypographyH4 = motion(TypographyH4);
export const MotionTypographyP = motion(TypographyP);
