import { readdir, readFile } from 'node:fs/promises';
import { marked } from 'marked';
import matter from 'gray-matter';


export async function getFeaturedReview() {
  const posts = await getPosts();
  return posts[0];
}

export async function getPostsFromFiles(slug) {
  const text = await readFile(`./app/content/blog/${slug}.md`, 'utf8');
  const { content, data:{ title, date, image} } = matter(text);
  const body = marked(content, { headerIds: false, mangle: false });
  return { slug, title, date, image, body };
}

export async function getPosts() {
    const slugs = await getSlugs();
    const posts = [];
    for (const slug of slugs) {
      const post = await getPostsFromFiles(slug);
      posts.push(post);
    }
    posts.sort((a, b) => b.date.localeCompare(a.date));
    return posts;
}

export async function getSlugs() {
  const files = await readdir('./app/content/blog/');
  return files.filter((file)=>file.endsWith('.md'))
    .map((file)=>file.slice(0,-'.md'.length));
}