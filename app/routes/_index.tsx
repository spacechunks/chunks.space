import type { MetaFunction } from "@remix-run/node";
import Hero from "~/components/layout/hero";

export const meta: MetaFunction = () => {
  return [
    { title: "Space Chunks" },
    { name: "description", content: "Welcome to Space Chunks!" },
  ];
};

export default function Index() {
  return (
    <>
      <Hero />
    </>
  );
}
