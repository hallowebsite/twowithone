import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

// add type
export async function GET(context: any): Promise<Response> {
  const germanLanguages = await getCollection("languages", ({ id }) => {
    return id.startsWith("de/");
  });
  return await rss({
    title: `To kill two birds wih one stone`,
    description: "Variants of the saying in different languages",
    site: context.site,
    items: germanLanguages.map((language) => ({
      title: language.data.languageName.toUpperCase(),
      pubDate: language.data.pubDate,
      content: `In ${language.slug.replace("en/", "")} we say:
${language.data.original}${language.data.transliteration !== undefined && language.data.transliteration !== "" ? ` (${language.data.transliteration})` : ""}
which means literally:
${language.data.meaning}`,
      link: `/${language.slug}/`,
    })),
  });
}
