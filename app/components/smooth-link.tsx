import { Link, useLocation } from "@remix-run/react";
import * as React from "react";
import { RemixLinkProps } from "@remix-run/react/dist/components";

export default function SmoothLink({
  children,
  delay = 15,
  ...props
}: RemixLinkProps &
  React.RefAttributes<HTMLAnchorElement> & {
    delay?: number;
  }) {
  const location = useLocation();
  const toPath =
    typeof props.to === "string" && props.to.includes("#")
      ? {
          pathname: props.to.split("#")[0],
          hash: props.to.split("#")[1],
        }
      : undefined;
  const toLinkWithoutHash =
    typeof props.to === "string" ? props.to.split("#")[0] : props.to;
  const isCurrentPage = location.pathname === toLinkWithoutHash;

  if (isCurrentPage && !!toPath) {
    return (
      <Link
        {...props}
        to={toLinkWithoutHash}
        onClick={(event) => {
          const element = document.getElementById(toPath.hash);
          if (!element) {
            return;
          }

          if (event.defaultPrevented) {
            return;
          }

          if (
            event.button !== 0 ||
            event.altKey ||
            event.ctrlKey ||
            event.metaKey ||
            event.shiftKey
          ) {
            return;
          }

          if (props.target && props.target.toLowerCase() !== "_self") {
            event.preventDefault();
          }

          if (props.onClick) {
            props.onClick(event);
          }

          setTimeout(() => {
            element.scrollIntoView({ behavior: "smooth" });
          }, delay);
        }}
      >
        {children}
      </Link>
    );
  }

  return <Link {...props}>{children}</Link>;
}
