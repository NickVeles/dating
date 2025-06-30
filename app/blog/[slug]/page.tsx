import { MDXRemote } from "next-mdx-remote/rsc";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import TitleContainer from "@/components/utilities/title-container";

export default async function PostPage({ params }: { params: { slug: string }}) {
  // @ts-expect-error STOP EXPECTING THIS AS A PROMISE
  const { slug } = await params;
  const postsDir = path.join(process.cwd(), "posts");
  const fullPath = path.join(postsDir, `${slug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    return notFound();
  }

  const source = fs.readFileSync(fullPath, "utf8");
  const { data } = matter(source);

  return (
    <article>
      <TitleContainer>{data.title}</TitleContainer>
      <time>{data.date}</time>
      <MDXRemote source={source} />
    </article>
  );
}
