import fs from "fs";
import path from "path";
import matter from "gray-matter";
import BlogClient from "./page-client";

const postsDirectory = path.join(process.cwd(), "posts");

type Post = {
  slug: string;
  title: string;
  date: string;
};

export default function BlogIndex() {
  const filenames = fs.readdirSync(postsDirectory);

  const posts: Post[] = filenames.map((filename) => {
    const fullPath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);
    return {
      slug: filename.replace(/\.mdx$/, ""),
      title: data.title as string,
      date: data.createdAt as string,
    };
  });

  return <BlogClient posts={posts} />;
}
