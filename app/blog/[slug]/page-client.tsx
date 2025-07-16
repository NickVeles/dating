"use client";

import TitleContainer from "@/components/utilities/title-container";
import SectionContainer from "@/components/utilities/section-container";
import ImageContainer from "@/components/utilities/image-container";
import { articleDateTime } from "@/lib/utils";
import { ArticleAuthors } from "@/components/article-authors";
import { DefaultThumbnail } from "@/constants/default-thumbnail";
import Share from "@/components/utilities/share";
import { ReactNode, useEffect, useState } from "react";
import matter from "gray-matter";
import { usePathname } from "next/navigation";
import { H4 } from "@/components/utilities/typography";

interface PostPageProps {
  source: string;
  children: ReactNode | Promise<ReactNode>;
}

export default function PostPageClient({ source, children }: PostPageProps) {
  const { data } = matter(source);
  const pathname = usePathname() ?? "";
  const [fullUrl, setFullUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setFullUrl(`${window.location.origin}${pathname}`);
    }
  }, [pathname]);

  return (
    <main className="flex flex-col flex-1 gap-4">
      <SectionContainer className="py-0">
        <ImageContainer
          src={data.thumbnail ?? DefaultThumbnail}
          alt="Post thumbnail"
          aspectRatio={7 / 2}
        />
      </SectionContainer>
      <div className="flex items-center justify-center">
        <Share url={fullUrl} smallTitle/>
      </div>
      <TitleContainer>{data.title ?? ""}</TitleContainer>
      <article>
        <SectionContainer accented className="flex flex-col gap-5 mt-4">
          {children}
        </SectionContainer>
      </article>
      <SectionContainer className="gap-6">
        <Share url={fullUrl} className="w-full" />
        {data.authorIds && (
          <div className="w-full">
            <H4 className="w-full mb-2 font-semibold">
              Author{data.authorIds?.length > 1 ? "s" : ""}
            </H4>
            <ArticleAuthors ids={data.authorIds} className="w-full" />
          </div>
        )}
        {data.editorIds && (
          <div className="w-full">
            <H4 className="w-full mb-2 font-semibold">
              Editor{data.editorIds?.length > 1 ? "s" : ""}
            </H4>
            <ArticleAuthors ids={data.editorIds} className="w-full" />
          </div>
        )}
        {data.updatedAt && (
          <div className="w-full">
            <H4 className="w-full mb-2 font-semibold">Edited at</H4>
            <p className="mt-0 w-full font-sans dyslexic:font-dyslexic text-wrap text-muted-foreground">
              <time dateTime={data.updatedAt}>
                {articleDateTime(data.updatedAt)}
              </time>
            </p>
          </div>
        )}
        {data.createdAt && (
          <div className="w-full">
            <H4 className="w-full mb-2 font-semibold">Created at</H4>
            <p className="mt-0 w-full font-sans dyslexic:font-dyslexic text-wrap text-muted-foreground">
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
