import { MDXRemote } from "next-mdx-remote/rsc";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import TitleContainer from "@/components/utilities/title-container";
import SectionContainer from "@/components/utilities/section-container";
import {
  Blockquote,
  Bold,
  Code,
  H1,
  H2,
  H3,
  H4,
  Italic,
  P,
  Ul,
} from "@/components/utilities/typography";
import TextLink from "@/components/utilities/text-link";
import ImageContainer from "@/components/utilities/image-container";
import { articleDateTime } from "@/lib/utils";
import { ArticleAuthors } from "@/components/article-authors";
import React from "react";

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
  const { data, content } = matter(source);

  return (
    <main>
      <TitleContainer>{data.title ?? ""}</TitleContainer>
      <article>
        <SectionContainer accented className="mt-4">
          <MDXRemote source={content} components={components} />
        </SectionContainer>
      </article>
      <SectionContainer className="gap-6">
        {data.authorIds && (
          <div className="w-full">
            <H4 className="w-full mb-2 font-semibold">
              Author{data.authorIds?.length > 1 ? "s" : ""}
            </H4>
            <ArticleAuthors ids={data.authorIds} className="w-full" />
          </div>
        )}
        {data.updatedAt && (
          <div className="w-full">
            <H4 className="w-full mb-2 font-semibold">Edited at</H4>
            <p className="mt-0 w-full font-sans dyslexic:font-dyslexic text-wrap">
            <time dateTime={data.updatedAt}>
              {articleDateTime(data.updatedAt)}
            </time>
            </p>
          </div>
        )}
        {data.createdAt && (
          <div className="w-full">
            <H4 className="w-full mb-2 font-semibold">Created at</H4>
            <p className="mt-0 w-full font-sans dyslexic:font-dyslexic text-wrap">
              <time dateTime={data.createdAt}>
                {articleDateTime(data.createdAt)}
              </time>
            </p>
          </div>
        )}
      </SectionContainer>
    </main>
  );
}
