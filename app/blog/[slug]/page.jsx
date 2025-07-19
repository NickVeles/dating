import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import ImageContainer from "@/components/utilities/image-container";
import TextLink from "@/components/utilities/text-link";
import PostPageClient from "./page-client";
import React from "react";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import {
  H1,
  H2,
  H3,
  H4,
  P,
  Blockquote,
  Ol,
  Ul,
  Code,
  Italic,
  Bold,
  CodeBlock,
} from "@/components/utilities/typography";
import { DefaultThumbnail } from "@/constants/default-thumbnail";

// React.ComponentProps<typeof MDXProvider>["components"]
const components = {
  h1: (props) => <H1 {...props} />,
  h2: (props) => <H2 className="mt-6 text-center" {...props} />,
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
  ul: (props) => <Ul className="pb-0" {...props} />,
  ol: (props) => <Ol className="pb-0" {...props} />,
  code: (props) => <Code {...props} />,
  pre: (props) => {
    // MDX passes the actual <code> as props.children.props
    const codeProps = props.children?.props || {};
    return <CodeBlock {...codeProps} />;
  },
  em: (props) => <Italic {...props} />,
  strong: (props) => <Bold {...props} />,
  a: (props) => <TextLink blank hideIcon {...props} />,
  img: (props) => <ImageContainer {...props} />,
  sup: (props) => <sup className="align-super text-xs" {...props} />,
};

async function getSource(params, fallback = null) {
  const { slug } = await params;
  const postsDir = path.join(process.cwd(), "posts");
  const fullPath = path.join(postsDir, `${slug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    return fallback || notFound();
  }

  return fs.readFileSync(fullPath, "utf8");
}

export async function generateMetadata({ params }) {
  const source = await getSource(params, {});
  const { data: frontmatter } = matter(source);

  return {
    title: `${frontmatter.title || "Blog Post"} | DatingSimplified`,
    description: frontmatter.description || "",
    openGraph: {
      title: frontmatter.title,
      description: frontmatter.description,
      images: frontmatter.thumbnail ? [frontmatter.thumbnail] : [DefaultThumbnail],
    },
    twitter: {
      card: "summary_large_image",
      title: `${frontmatter.title || "Blog Post"} | DatingSimplified`,
      description: frontmatter.description || "",
    },
  };
}

export default async function PostPage({ params }) {
  const source = await getSource(params);
  // Read frontmatter & content
  const { content } = matter(source);

  return (
    <PostPageClient source={source}>
      <MDXRemote source={content} components={components} />
    </PostPageClient>
  );
}
