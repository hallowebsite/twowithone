// 1. Import utilities from `astro:content`
import { z, defineCollection, reference } from "astro:content";
// 2. Define your collection(s)
const languagesCollection = defineCollection({
  type: "content",
  schema: z.object({
    languageName: z.string(),
    original: z.string(),
    transliteration: z.optional(z.string()),
    textDirection: z.optional(z.string()),
    meaning: z.string(),
    tags: z.array(z.string()),
    locations: z.array(z.tuple([z.number(), z.number()])).optional(),
    pubDate: z.date(),
    modifiedDate: z.date(),
    image: reference("images"),
  }),
});

const imagesCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    author: z.string(),
    date: z.string(),
    geographicalOrigin: z.optional(z.string()),
    source: z.string(),
    sourceUrl: z.string(),
    imageAlt: z.string(),
    description: z.optional(z.string()),
    copyright: z.string(),
  }),
});
//    This key should match your collection directory name in "src/content"
export const collections = {
  languages: languagesCollection,
  images: imagesCollection,
};
