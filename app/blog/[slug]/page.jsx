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

const components = {
  h1: (props) => <H1 {...props} />,
  h2: (props) => <H2 {...props} />,
  h3: (props) => <H3 {...props} />,
  h4: (props) => <H4 {...props} />,
  p: (props) => <P {...props} />,
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

  // Get file stats
  const stats = fs.statSync(fullPath);
  const fileCreatedAt = stats.birthtime;

  return (
    <article>
      <TitleContainer>{data.title ?? ""}</TitleContainer>
      <SectionContainer accented>
        <MDXRemote source={content} components={components} />
      </SectionContainer>
      <SectionContainer>
        <P className="mt-0 italic font-sans dyslexic:font-dyslexic">
          <time dateTime={fileCreatedAt.toISOString()}>
            {articleDateTime(fileCreatedAt)}
          </time>
        </P>
      </SectionContainer>
    </article>
  );
}
