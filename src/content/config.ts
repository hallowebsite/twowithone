// 1. Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// 2. Define your collection(s)
const languagesCollection = defineCollection({
  type: "content",
  schema: z.object({
    languageName: z.string(),
    original: z.string(),
    transliteration: z.optional(z.string()),
    meaning: z.string(),
    tags: z.array(z.string()),
    image: z.string().optional(),
    flags: z.array(z.string()),
    location: z.array(z.number()).optional(),
    pubDate: z.date(),
    modifiedDate: z.date(),
  }),
});
//    This key should match your collection directory name in "src/content"
export const collections = {
  languages: languagesCollection,
};
