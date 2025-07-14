import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import ImageContainer from "@/components/utilities/image-container";
import TextLink from "@/components/utilities/text-link";
import PostPageClient from "./page-client";
import React, { Suspense } from "react";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import Loading from "@/components/utilities/loading";
import { H1, H2, H3, H4, P, Blockquote, Ul, Code, Italic, Bold } from "@/components/utilities/typography"

// React.ComponentProps<typeof MDXProvider>["components"]
const components = {
  h1: (props) => <H1 {...props} />,
  h2: (props) => <H2 {...props} />,
  h3: (props) => <H3 {...props} />,
  h4: (props) => <H4 {...props} />,
  p: (props) => {
    const { children } = props;

    // Exclude images (children with 'src' prop)
    // imma be real i could check for children.type,
    // but I have no idea what type [Function: img] is.
    // `children.type === '[Function: img]'` is always false.
    if (
      React.isValidElement(children) &&
      typeof children.props === "object" &&
      children.props &&
      "src" in children.props
    ) {
      return children;
    }

    return <P {...props} />;
  },
  blockquote: (props) => <Blockquote {...props} />,
  ul: (props) => <Ul {...props} />,
  code: (props) => <Code {...props} />,
  em: (props) => <Italic {...props} />,
  strong: (props) => <Bold {...props} />,
  a: (props) => <TextLink {...props} />,
  img: (props) => <ImageContainer {...props} />,
};

export default async function PostPage({ params }) {
  const { slug } = await params;
  const postsDir = path.join(process.cwd(), "posts");
  const fullPath = path.join(postsDir, `${slug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    return notFound();
  }

  // Read frontmatter & content
  const source = fs.readFileSync(fullPath, "utf8");
  const { content } = matter(source);

  return (
    <Suspense fallback={<Loading />}>
      <PostPageClient source={source}>
        <MDXRemote source={content} components={components} />
      </PostPageClient>
    </Suspense>
  );
}
