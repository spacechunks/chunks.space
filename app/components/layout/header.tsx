import logoImage from "~/assets/images/logo.png";
import GithubIcon from "~/components/icons/github";
import DiscordButton from "~/components/ui/discord-button";
import SmoothLink from "~/components/smooth-link";

const links = [
  { name: "About", to: "/#about" },
  { name: "Game Cup", to: "/#game-cup" },
  { name: "Team", to: "/#team" },
  { name: "FAQ", to: "/#faq" },
  { name: "Contact", to: "/#contact" },
];

export default function Header() {
  return (
    <header className="container hidden items-center justify-between px-12 text-white md:flex">
      <div className="flex items-center gap-10">
        <img className="h-12 w-auto" src={logoImage} alt="logo" />
        {links.map((link) => (
          <SmoothLink key={link.name} to={link.to}>
            {link.name}
          </SmoothLink>
        ))}
      </div>
      <div className="flex items-center gap-4">
        <a href="https://github.com/spacechunks" target="_blank">
          <GithubIcon className="text-ethereal-normal h-6 w-auto" />
        </a>
        <DiscordButton />
      </div>
    </header>
  );
}
