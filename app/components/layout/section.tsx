import { PropsWithChildren } from "react";
import { cn } from "~/lib/utils";

export default function Section({
  id,
  children,
  className,
}: PropsWithChildren<{
  id?: string;
  className?: string;
}>) {
  return (
    <section
      id={id}
      className={cn("container flex flex-col gap-12 px-12 py-8", className)}
    >
      {children}
    </section>
  );
}
