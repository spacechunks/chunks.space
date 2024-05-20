import { Link } from "@remix-run/react";
import { Button } from "~/components/ui/button";
import logoImage from "~/assets/images/logo.png";

const links = [
  { name: "About", to: "#about" },
  { name: "Game Cup", to: "#game-cup" },
  { name: "Team", to: "#team" },
  { name: "FAQ", to: "#faq" },
  { name: "Contact", to: "#contact" },
];

export default function Header() {
  return (
    <header className="container flex items-center justify-between px-12 text-white">
      <div className="flex items-center gap-10">
        <img className="h-12 w-auto" src={logoImage} alt="logo" />
        {links.map((link) => (
          <Link to={link.to} key={link.name}>
            {link.name}
          </Link>
        ))}
      </div>
      <div>
        <Button>Discord</Button>
      </div>
    </header>
  );
}
