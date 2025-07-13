import fs from "fs";
import path from "path";
import matter from "gray-matter";

export function getPosts(): Post[] {
  const postsDirectory = path.join(process.cwd(), "posts");
  const filenames = fs.readdirSync(postsDirectory);

  const posts: Post[] = filenames.map((filename) => {
    const fullPath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);
    return {
      slug: filename.replace(/\.mdx$/, ""),
      title: data.title as string,
      createdAt: data.createdAt as string,
      description: data.description as string,
      thumbnail: data.thumbnail as string,
    };
  });

  return posts;
}