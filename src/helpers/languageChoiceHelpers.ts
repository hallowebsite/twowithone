export function reorderSlugs(slugs: string[]): string[] {
  // Reorders an array of strings in a deterministic way based on the current date.
  const today = new Date();
  const seed = today.getDate(); // Use day of month as seed

  // Use the seed to create a deterministic permutation
  const permutation = [...Array(slugs.length).keys()];
  for (let i = 0; i < slugs.length; i++) {
    const j = (i + seed) % slugs.length;
    [permutation[i], permutation[j]] = [permutation[j], permutation[i]];
  }

  // Reorder the array using the permutation
  return slugs.map((value, index) => slugs[permutation[index]]);
}

// get next language from the array based on current slug
export function getNextSlug(slugs: string[], currentSlug: string): string {
  const currentIndex = slugs.indexOf(currentSlug);
  const nextIndex = (currentIndex + 1) % slugs.length;
  return slugs[nextIndex].replace("en/", "");
}
