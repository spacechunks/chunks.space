import { redirect } from "react-router";

export function loader() {
  return redirect("https://cdn.chunks.cloud/gamecup/roadmap.png");
}
