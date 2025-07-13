import { getPosts } from "@/lib/server-utils";
import BlogClient from "./page-client";

export default function BlogIndex() {
  const posts = getPosts();
  return <BlogClient posts={posts} />;
}
