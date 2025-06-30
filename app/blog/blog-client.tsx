"use client";

import Link from "next/link";
import { HeartStraight } from "phosphor-react";
import TitleContainer from "@/components/utilities/title-container";
import SectionContainer from "@/components/utilities/section-container";
import Image from "next/image";
import { H4 } from "@/components/utilities/typography";
import { Badge } from "@/components/ui/badge";

const DefaultImage =
  "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

type Post = {
  slug: string;
  title: string;
  date: string;
  description?: string;
  image?: string;
};

interface BlogClientProps {
  posts: Post[];
}

export default function BlogClient({ posts }: BlogClientProps) {
  return (
    <main className="flex flex-col flex-1 gap-4">
      <TitleContainer Icon={HeartStraight}>Guide Blog</TitleContainer>
      <SectionContainer accented>
        <ul className="flex flex-col w-full gap-4">
          {posts.map(({ slug, title, date, description, image }) => (
            <li key={slug} className="w-full">
              <Link
                href={`/blog/${slug}`}
                className="flex flex-col lg:flex-row min-w-full p-2 gap-4 bg-background border border-black/20 dark:border-white/20 rounded-lg"
              >
                <div className="relative lg:w-[33%]">
                  <Image
                    src={image ?? DefaultImage}
                    alt={title}
                    width={800}
                    height={480}
                    className="flex object-cover rounded aspect-[5/2] lg:aspect-[5/3] w-full"
                  />
                  <div className="absolute inset-0 flex justify-start items-start top-1 left-1">
                    <Badge variant="secondary" className="p-1 font-sans dyslexic:font-dyslexic text-sm dyslexic:text-xs shadow">
                      {date}
                    </Badge>
                  </div>
                </div>
                <div className="flex flex-2 flex-col w-full gap-2 px-2 lg:py-2 lg:px-0">
                  <H4 className="font-serif dyslexic:font-dyslexic dyslexic:text-lg text-wrap font-semibold">
                    {title}
                  </H4>
                  <p className="pt-2 font-sans dyslexic:font-dyslexic text-sm dyslexic:text-xs text-gray-700 dark:text-gray-300 px-2">
                    {description}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </SectionContainer>
    </main>
  );
}
