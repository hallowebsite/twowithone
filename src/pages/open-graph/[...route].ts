import { getCollection } from "astro:content";
import { OGImageRoute } from "astro-og-canvas";

const collectionEntries = await getCollection("languages");

// Map the array of content collection entries to create an object.
// Converts [{ id: 'post.md', data: { title: 'Example', description: '' } }]
// to { 'post.md': { title: 'Example', description: '' } }
const pages = Object.fromEntries(
  collectionEntries.map(({ slug, data }) => [slug, data]),
);

export const { getStaticPaths, GET } = OGImageRoute({
  pages,
  param: "route",

  getImageOptions: (path, page) => ({
    title: "",
    bgImage: {
      path: `./src/images/${path.split("/")[1]}.jpg`,
      fit: "cover",
    },
  }),
});
