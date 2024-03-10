import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

// add type
export async function GET(context: any): Promise<Response> {
  const germanLanguages = await getCollection("languages", ({ id }) => {
    return id.startsWith("de/");
  });
  return await rss({
    title: `Zwei Fliegen mit einer Klappe schlagen`,
    description: "Varianten des Sprichworts in verschiedenen Sprachen",
    site: context.site,
    items: germanLanguages.map((language) => {
      let languageName = language.slug.replace("en/", "");
      languageName =
        languageName.charAt(0).toUpperCase() + languageName.slice(1);
      return {
        title: language.data.languageName.toUpperCase(),
        pubDate: language.data.pubDate,
        content: `Auf ${languageName} sagen wir:
&lt;br&gt;
${language.data.original}${language.data.transliteration !== undefined && language.data.transliteration !== "" ? ` (${language.data.transliteration})` : ""}
&lt;br&gt;
was wörtlich bedeutet:
&lt;br&gt;
${language.data.meaning}`,
        link: `/${language.slug}/`,
      };
    }),
  });
}
