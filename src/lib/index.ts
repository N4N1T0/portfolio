import { getCollection } from "astro:content";

export const urlNames = (name: string) => {
  return name.split(' ').join('-')
}

// Get all the posts
export async function getPosts(lang: string) {
  const posts = (await getCollection("blog", ({ id }) => { return id.startsWith(lang) })).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );

  return posts;
}