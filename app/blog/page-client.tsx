"use client";

import Link from "next/link";
import { HeartIcon, MagnifyingGlassIcon } from "@phosphor-icons/react";
import TitleContainer from "@/components/utilities/title-container";
import SectionContainer from "@/components/utilities/section-container";
import Image from "next/image";
import { Bold, H4 } from "@/components/utilities/typography";
import { Badge } from "@/components/ui/badge";
import { filterPostsBySearch, sortPostsByDate, chunkArray } from "@/lib/utils";
import {
  ReadonlyURLSearchParams,
  useRouter,
  useSearchParams,
} from "next/navigation";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { DefaultThumbnail } from "@/constants/default-thumbnail";

interface BlogClientProps {
  posts: Post[];
}

function createPageURL(
  pageNum: number,
  createdAtOrder: "asc" | "desc",
  search?: string
): string {
  return `?p=${pageNum}&d=${createdAtOrder}${search ? `&s=${search}` : ""}`;
}

function createPaginationArray(
  min: number,
  middle: number,
  max: number
): number[] {
  if (min > middle || middle > max) {
    throw new Error("Invalid input: must satisfy min <= middle <= max");
  }

  const range: number[] = [];

  for (let i = middle - 2; i <= middle + 2; i++) {
    if (i >= min && i <= max) range.push(i);
  }

  return range;
}

function getCreatedAtOrder(
  searchParams: ReadonlyURLSearchParams | null
): "asc" | "desc" {
  const order = searchParams?.get("d") ?? "desc";

  if (order === "asc" || order === "desc") return order;
  return "desc";
}

function getCurrentPage(
  searchParams: ReadonlyURLSearchParams | null,
  totalPages: number
): number {
  const page = parseInt(searchParams?.get("p") ?? "1", 10);

  if (Number.isNaN(page) || page < 1) return 1;
  if (page > totalPages) return totalPages;
  return page;
}

export default function BlogClient({ posts }: BlogClientProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Check search query
  const searchQuery = searchParams?.get("s") ?? "";
  const [searchText, setSearchText] = useState(searchQuery);

  // Check sort order
  const createdAtOrder = getCreatedAtOrder(searchParams);
  const isOrderDesc = createdAtOrder === "desc";
  const postsFiltered = filterPostsBySearch(posts, searchQuery);
  const postsSorted = sortPostsByDate(postsFiltered, isOrderDesc);

  // Chunk posts
  const chunkedPosts = chunkArray(postsSorted);
  const totalPages = chunkedPosts.length;

  // Check current page
  const page = getCurrentPage(searchParams, totalPages);
  const paginationNumbers =
    page > 0 && page < totalPages
      ? createPaginationArray(1, page, totalPages)
      : [1];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(createPageURL(page, createdAtOrder, searchText ?? ""));
  };
  
  return (
    <main className="flex flex-col flex-1 gap-4">
      <TitleContainer Icon={HeartIcon}>Guide Blog</TitleContainer>
      <SectionContainer accented className="gap-6">
        {/* Search filters */}
        <div className="flex w-full flex-col lg:flex-row gap-2">
          <form onSubmit={handleSubmit} className="flex w-full items-center">
            <Input
              type="search"
              placeholder="Search"
              className="w-full bg-background rounded-none rounded-l-md"
              value={searchText ?? ""}
              onChange={(e) => setSearchText(e.target.value ?? "")}
            />
            <Button
              type="submit"
              variant="outline"
              className="hover:cursor-pointer rounded-none rounded-r-md border-l-0"
            >
              <MagnifyingGlassIcon />
            </Button>
          </form>
          <Select
            onValueChange={(value: "asc" | "desc") =>
              router.push(createPageURL(page, value, searchText ?? ""))
            }
            defaultValue={createdAtOrder}
          >
            <SelectTrigger className="w-full sm:w-[180px] bg-background hover:cursor-pointer">
              <SelectValue placeholder="Post order" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Date</SelectLabel>
                <SelectItem value="asc" className="hover:cursor-pointer">
                  Oldest first
                </SelectItem>
                <SelectItem value="desc" className="hover:cursor-pointer">
                  Newest first
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        {/* Blog posts */}
        {totalPages > 0 && (
          <ul className="flex flex-col w-full gap-4">
            {chunkedPosts.length > 0 &&
              chunkedPosts[page - 1].map(
                ({ slug, title, createdAt, description, thumbnail }) => (
                  <li key={slug} className="w-full">
                    <Link
                      href={`/blog/${slug}`}
                      className="flex flex-col lg:flex-row min-w-full p-2 gap-4 bg-background border border-black/20 dark:border-white/20 rounded-lg"
                    >
                      <div className="relative lg:w-[33%]">
                        <Image
                          src={thumbnail ?? DefaultThumbnail}
                          alt={title}
                          width={800}
                          height={480}
                          className="flex object-cover rounded aspect-[5/2] lg:aspect-[5/3] w-full"
                        />
                        <div className="absolute inset-0 flex justify-start items-start top-1 left-1">
                          <Badge
                            variant="secondary"
                            className="p-1 font-sans dyslexic:font-dyslexic text-sm dyslexic:text-xs shadow rounded-xs"
                          >
                            {new Date(createdAt).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
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
                )
              )}
          </ul>
        )}

        {/* Pages */}
        {totalPages > 0 && (
          <Pagination className="w-full font-sans dyslexic:font-dyslexic">
            <PaginationContent>
              {/* Previous */}
              <PaginationItem>
                <PaginationPrevious
                  href={
                    page > 1
                      ? createPageURL(
                          page - 1,
                          createdAtOrder,
                          searchText ?? ""
                        )
                      : undefined
                  }
                  aria-disabled={page <= 1}
                  tabIndex={page <= 1 ? -1 : undefined}
                  className={
                    page <= 1 ? "pointer-events-none opacity-50" : undefined
                  }
                />
              </PaginationItem>

              {/* First */}
              {page > 4 && (
                <PaginationItem>
                  <PaginationLink
                    href={createPageURL(1, createdAtOrder, searchText ?? "")}
                  >
                    1
                  </PaginationLink>
                </PaginationItem>
              )}

              {/* Left Ellipsis */}
              {page > 4 && (
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
              )}

              {/* Pages = -2, -1, 0, +1, +2 */}
              {paginationNumbers.map((num) => (
                <PaginationItem key={num}>
                  <PaginationLink
                    href={
                      num === page
                        ? undefined
                        : createPageURL(num, createdAtOrder, searchText ?? "")
                    }
                    isActive={num === page}
                  >
                    {num}
                  </PaginationLink>
                </PaginationItem>
              ))}

              {/* Right Ellipsis */}
              {page < totalPages - 3 && (
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
              )}

              {/* Last */}
              {page < totalPages - 3 && (
                <PaginationItem>
                  <PaginationLink
                    href={createPageURL(
                      totalPages,
                      createdAtOrder,
                      searchText ?? ""
                    )}
                  >
                    {totalPages}
                  </PaginationLink>
                </PaginationItem>
              )}

              {/* Next */}
              <PaginationItem>
                <PaginationNext
                  href={
                    page < totalPages
                      ? createPageURL(
                          page + 1,
                          createdAtOrder,
                          searchText ?? ""
                        )
                      : undefined
                  }
                  aria-disabled={page >= totalPages}
                  tabIndex={page >= totalPages ? -1 : undefined}
                  className={
                    page >= totalPages
                      ? "pointer-events-none opacity-50"
                      : undefined
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        )}

        {/* No search results fallback */}
        {totalPages <= 0 && (
          <div className="flex flex-col m-6 gap-2 font-serif dyslexic:font-dyslexic text-center">
            <p className="text-xl">
              <Bold>No search results!</Bold>
            </p>
            <p>Maybe try searching for something else?</p>
          </div>
        )}
      </SectionContainer>
    </main>
  );
}
