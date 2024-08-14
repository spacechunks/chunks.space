import HeaderLinks from "~/components/layout/header-links";
import * as React from "react";

export default function Header() {
  return (
    <div className="relative h-full w-full bg-[#171023] py-5">
      <div className="relative z-50">
        <HeaderLinks />
      </div>
    </div>
  );
}
