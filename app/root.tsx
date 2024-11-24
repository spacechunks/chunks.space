import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
import stylesheet from "~/tailwind.css?url";
import firaSans from "~/fira-sans.css?url";
import sonner from "~/sonner.css?url";
import { LinksFunction } from "react-router";
import { getDiscordGuildInfo } from "~/service/discord.server";
import ErrorPage from "~/components/layout/error-page";
import { Toaster } from "sonner";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
  { rel: "stylesheet", href: firaSans },
  { rel: "stylesheet", href: sonner },
  { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
  {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "/favicon-32x32.png",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "/favicon-16x16.png",
  },
  // { rel: "manifest", href: "/site.webmanifest" },
];

export async function loader() {
  const guildData = getDiscordGuildInfo();
  return { guildData };
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-[#171323]">
        <Toaster
          toastOptions={{
            unstyled: true,
            className:
              "bg-ethereal-normal  text-mystical-normal flex items-center gap-4 p-4 rounded-lg border border-ethereal-subtle",
          }}
        />
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export function ErrorBoundary() {
  return <ErrorPage />;
}

export default function App() {
  return <Outlet />;
}
