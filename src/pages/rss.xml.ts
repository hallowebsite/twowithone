import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

// add type
export async function GET(context: any): Promise<Response> {
  const englishLanguages = await getCollection("languages", ({ id }) => {
    return id.startsWith("en/");
  });
  return await rss({
    title: `To kill two birds wih one stone`,
    description: "Variants of the saying in different languages",
    site: context.site,
    items: englishLanguages.map((language) => ({
      title: language.data.languageName.toUpperCase(),
      pubDate: language.data.pubDate,
      content: `In ${language.slug.replace("en/", "")} we say:
&lt;br&gt;
${language.data.original}${language.data.transliteration !== undefined && language.data.transliteration !== "" ? ` (${language.data.transliteration})` : ""},
&lt;br&gt;
which means literally:
&lt;br&gt;
${language.data.meaning}`,
      link: `/${language.slug}/`,
    })),
  });
}
