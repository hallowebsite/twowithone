import rss from "@astrojs/rss";
import { getImage } from "astro:assets";
import { getCollection } from "astro:content";

function capitalize(word: string) {
  if (!word) return '';
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

export async function GET(context: any): Promise<Response> {
  const germanLanguages = await getCollection("languages", ({ id }) => id.startsWith("de/"));
  const imagesData = await getCollection("images", ({ id }) => id.startsWith("de/"));
  const images = import.meta.glob<{ default: ImageMetadata }>("/src/images/*.{jpeg,jpg,png,gif}");

  const imageSources = await Promise.all(
    imagesData.map(async (image) => {
      const imagePath = `/src/images/${image.slug.replace("de/", "")}.jpg`;
      const imageObject = await images[imagePath]();
      const imageSource = await getImage({ src: imageObject.default, format: "jpg", width: 800, height: 800 });
      return {
        lang: image.slug.replace("de/", ""),
        source: imageSource.src,
      };
    })
  );

  const formatLanguageName = (slug: string) => {
    return slug.replace("de/", "");
  };

  const generateContent = (language: any, imageSource: string | undefined, imageData: any, languageName: string) => `
    <section>
${imageSource && `<img src="https://twowithone.com${imageSource}" width="800" height="800" alt="${imageData?.imageAlt}"/>`}
      <h1>Auf ${languageName} sagen wir:</h1>
      <p>
        <b>${language.data.original}${language.data.transliteration ? ` (${language.data.transliteration})` : ""}</b>,
      </p>
      <p>was wörtlich bedeutet:
        <b>${language.data.meaning}</b>
      </p>
    </section>
    <h2>Informationen zum Bild:</h2>
      <p><b>Titel:</b> ${imageData?.title}</p>
      <p><b>Autor:</b> ${imageData?.author}</p>
      <p><b>Datum:</b> ${imageData?.date}</p>
      <p><b>Beschreibung:</b> ${imageData?.description}</p>
      <p><b>Geographische Herkunft:</b> ${imageData?.geographicalOrigin}</p>
      <p><b>Quelle:</b> <a href="${imageData?.sourceUrl}">${imageData?.source}</a></p>
      <p><b>Urheberrecht:</b> ${imageData?.copyright}</p>
    </section>
  `;

  return await rss({
    title: `Zwei Fliegen mit einer Klappe schlagen`,
    description: "Varianten des Sprichworts in verschiedenen Sprachen",
    site: context.site,
    items: germanLanguages.map((language) => {
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
