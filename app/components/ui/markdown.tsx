import Markdoc from "@markdoc/markdoc";
import * as React from "react";
import { TypographyProse } from "~/components/ui/typography";

export function Markdown({ content }: { content: string }) {
  return (
    <TypographyProse>
      {Markdoc.renderers.react(
        Markdoc.transform(Markdoc.parse(content)),
        React,
      )}
    </TypographyProse>
  );
}
