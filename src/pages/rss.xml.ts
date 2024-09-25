import rss from "@astrojs/rss";
import { getImage } from "astro:assets";
import { getCollection } from "astro:content";

function capitalize(word: string) {
  if (!word) return '';
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

export async function GET(context: any): Promise<Response> {
  const englishLanguages = await getCollection("languages", ({ id }) => id.startsWith("en/"));
  const imagesData = await getCollection("images", ({ id }) => id.startsWith("en/"));
  const images = import.meta.glob<{ default: ImageMetadata }>("/src/images/*.{jpeg,jpg,png,gif}");

  const imageSources = await Promise.all(
    imagesData.map(async (image) => {
      const imagePath = `/src/images/${image.slug.replace("en/", "")}.jpg`;
      const imageObject = await images[imagePath]();
      const imageSource = await getImage({ src: imageObject.default, format: "jpg", width: 800, height: 800 });
      return {
        lang: image.slug.replace("en/", ""),
        source: imageSource.src,
      };
    })
  );

  const formatLanguageName = (slug: string) => {
    return slug.replace("en/", "");
  };

  const generateContent = (language: any, imageSource: string | undefined, imageData: any, languageName: string) => `
<article>
    <section>
${imageSource && `<img src="https://twowithone.com${imageSource}" width="800" height="800" alt="${imageData?.imageAlt}"/>`}
      <h1>In ${languageName} we say:</h1>
      <p>
        <b>${language.data.original}${language.data.transliteration ? ` (${language.data.transliteration})` : ""}</b>,
      </p>
      <p>which means literally:
        <b>${language.data.meaning}</b>
      </p>
    </section>
    <section>
      <h2>Information about the image:</h2>
      <p><b>Title:</b> ${imageData?.title}</p>
      <p><b>Author:</b> ${imageData?.author}</p>
      <p><b>Date:</b> ${imageData?.date}</p>
      <p><b>Description:</b> ${imageData?.description}</p>
      <p><b>Geographical origin:</b> ${imageData?.geographicalOrigin}</p>
      <p><b>Source:</b> <a href="${imageData?.sourceUrl}">${imageData?.source}</a></p>
      <p><b>Copyright:</b> ${imageData?.copyright}</p>
    </section>
<article>
  `;

  return await rss({
    title: `To kill two birds with one stone`,
    description: "Variants of the saying in different languages",
    site: context.site,
    items: englishLanguages.map((language) => {
      const languageName = formatLanguageName(language.slug);
      const imageSource = imageSources.find((image) => image.lang === languageName)?.source;
      const imageData = imagesData.find((image) => image.slug === language.slug)?.data;

      return {
        title: capitalize(language.data.languageName),
        pubDate: language.data.pubDate,
        link: `/${language.slug.replace("en/", "")}/`,
        content: generateContent(language, imageSource, imageData, languageName),
      };
    }),
  });
}
