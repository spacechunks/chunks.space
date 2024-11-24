import { isRouteErrorResponse, useRouteError } from "react-router";
import HeaderLinks from "~/components/layout/header-links";
import starsImage from "~/assets/images/stars.png";
import textLogoImage from "~/assets/images/text-logo.png";
import { motion } from "framer-motion";
import * as React from "react";
import { TypographyH1 } from "~/components/ui/typography";
import { Link } from "react-router";
import { Button } from "~/components/ui/button";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="dark relative h-screen w-full rounded-b-[2.5rem] bg-[#171023] py-8">
      <div className="relative z-50">
        <HeaderLinks />
      </div>
      <div className="absolute top-0 h-full w-full rounded-b-[2.5rem] bg-gradient-to-t from-[#5229CA] to-transparent opacity-20" />
      <div className="absolute top-0 h-full w-full bg-gradient-radial from-[#FF00F5] via-[#BD00FF]/15 to-[#BD00FF]/0 opacity-20" />
      <div className="absolute bottom-12 flex items-center justify-center px-12">
        <img src={starsImage} alt="Stars" className="h-full" />
      </div>
      <div className="relative z-10 flex h-full flex-col items-center justify-center gap-8 py-8">
        <div className="relative">
          <div
            className="relative h-96 w-full overflow-hidden"
            style={{
              WebkitMaskImage: `url(${textLogoImage})`,
              maskImage: `url(${textLogoImage})`,
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
              WebkitMaskPosition: "center",
              maskPosition: "center",
              maskSize: "contain",
            }}
          >
            <motion.img
              src={textLogoImage}
              alt="Space Chunks"
              className="relative z-10 h-full w-full object-contain"
            />
            <div
              className="absolute inset-0 z-10 overflow-hidden"
              style={{
                WebkitMaskImage: `url(https://i.imgur.com/xyRRwOa.png)`,
                maskImage: `url(https://i.imgur.com/xyRRwOa.png)`,
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
                WebkitMaskPosition: "center",
                maskPosition: "center",
              }}
            >
              <motion.div
                className="pointer-events-none absolute inset-0 opacity-40 mix-blend-color-burn"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  duration: 2.5,
                }}
                style={{
                  background:
                    "linear-gradient(120deg, rgba(255, 255, 255, 0) 30%, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0) 70%)",
                }}
              />
            </div>
          </div>
        </div>

        <TypographyH1>
          {isRouteErrorResponse(error)
            ? `${error.status} ${error.statusText}`
            : error instanceof Error
              ? error.message
              : "Unknown Error"}
        </TypographyH1>
        <Button size="lg" variant="secondary">
          <Link to="/">Go back home</Link>
        </Button>
      </div>
    </div>
  );
}
