import { getPosts } from "@/lib/server-utils";
import BlogClient from "./page-client";
import { Suspense } from "react";
import Loading from "@/components/utilities/loading";

export default function BlogIndex() {
  const posts = getPosts();

  return (
    <Suspense fallback={<Loading />}>
      <BlogClient posts={posts} />;
    </Suspense>
  );
}
