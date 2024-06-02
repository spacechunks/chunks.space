import { redirect } from "@remix-run/react";

export function loader() {
  return redirect("https://cdn.chunks.cloud/gamecup/rules_and_guidelines.png");
}
