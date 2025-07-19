import { getPosts } from "@/lib/server-utils";
import BlogClient from "./page-client";
import { Suspense } from "react";
import Loading from "@/components/utilities/loading";
import { Metadata } from "next";
import { DefaultThumbnail } from "@/constants/default-thumbnail";

export const metadata: Metadata = {
  title: "Search Dating Advice Articles | DatingSimplified",
  description:
    "Browse expert tips, strategies, and articles on dating and relationships. Find the best dating advice tailored to your needs.",
  keywords: [
    "dating advice",
    "relationship tips",
    "online dating",
    "dating strategies",
    "love advice",
    "first date tips",
    "relationship advice articles",
  ],
  openGraph: {
    title: "Search Dating Advice Articles | YourBlogName",
    description:
      "Explore curated dating advice articles to improve your relationships and dating life.",
    images: [DefaultThumbnail],
  },
  twitter: {
    card: "summary_large_image",
    title: "Search Dating Advice Articles | DatingSimplified",
    description:
      "Read expert articles on dating and relationships. Find what you're looking for in our dating advice section.",
    images: [DefaultThumbnail],
  },
};

export default function BlogIndex() {
  const posts = getPosts();

  return (
    <Suspense fallback={<Loading />}>
      <BlogClient posts={posts} />
    </Suspense>
  );
}
