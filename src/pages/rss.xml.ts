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
    items: englishLanguages.map((language) => {
      let languageName = language.slug.replace("en/", "");
      languageName =
        languageName.charAt(0).toUpperCase() + languageName.slice(1);
      return {
        title: language.data.languageName.toUpperCase(),
        pubDate: language.data.pubDate,
        content: `![CDATA[In ${languageName} we say:
<br/>
${language.data.original}${language.data.transliteration !== undefined && language.data.transliteration !== "" ? ` (${language.data.transliteration})` : ""},
<br/>
which means literally:
<br/>
]]
${language.data.meaning}`,
        link: `/${language.slug.replace("en/", "")}/`,
      };
    }),
  });
}
