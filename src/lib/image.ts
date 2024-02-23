// src/lib/image.ts
import type { LocalImageProps } from "astro:assets";
import fs from "node:fs/promises";

export const getImageAsBuffer = async (src: LocalImageProps["src"]) => {
  const ASSETS_DIR = "/src/images";

  const imageMetadata = await src;

  return await fs.readFile(
    new URL(
      import.meta.env.PROD
        ? [
            "../../dist",
            // @ts-expect-error – 'Property 'src' does not exist on type'
            imageMetadata?.default.src,
          ].join("")
        : [
            "../..",
            ASSETS_DIR,
            // @ts-expect-error – 'Property 'src' does not exist on type'
            imageMetadata?.default.src.split("?orig")[0].split(ASSETS_DIR)[1],
          ].join(""),
      import.meta.url,
    ),
  );
};
