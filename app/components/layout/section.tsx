import { PropsWithChildren } from "react";
import { cn } from "~/lib/utils";

export default function Section({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  return (
    <section className={cn("container flex flex-col gap-12 px-12", className)}>
      {children}
    </section>
  );
}
