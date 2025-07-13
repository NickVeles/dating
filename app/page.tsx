import { getPosts } from "@/lib/server-utils";
import { sortPostsByDate } from "@/lib/utils";
import HomeClient from "./page-client";

export default function Home() {
  const posts = getPosts();
  const curatedPosts = sortPostsByDate(posts, true).slice(0, 3)

  return <HomeClient latestPosts={curatedPosts} />;
}
