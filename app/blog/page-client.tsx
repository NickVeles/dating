"use client";

import Link from "next/link";
import { HeartStraight } from "phosphor-react";
import TitleContainer from "@/components/utilities/title-container";
import SectionContainer from "@/components/utilities/section-container";
import Image from "next/image";
import { H4 } from "@/components/utilities/typography";
import { Badge } from "@/components/ui/badge";
import { chunkArray } from "@/lib/utils";
import {
  ReadonlyURLSearchParams,
  redirect,
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

const DefaultImage =
  "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

interface BlogClientProps {
  posts: Post[];
}

function createPageURL(
  pageNum: number,
  createdAtOrder: "asc" | "desc"
): string {
  return `?p=${pageNum}&d=${createdAtOrder}`;
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

function sortPostsByDate(posts: Post[], desc: boolean = false): Post[] {
  return posts.slice().sort((a, b) => {
    const timeA = Date.parse(a.createdAt);
    const timeB = Date.parse(b.createdAt);

    const isValidA = !isNaN(timeA);
    const isValidB = !isNaN(timeB);

    if (isValidA && isValidB) {
      return desc ? timeB - timeA : timeA - timeB;
    }

    if (isValidA && !isValidB) return -1; // A is valid, B is not -> A first
    if (!isValidA && isValidB) return 1; // B is valid, A is not -> B first
    return 0; // both invalid -> keep original order
  });
}

export default function BlogClient({ posts }: BlogClientProps) {
  const searchParams = useSearchParams();

  // Check sort order
  const createdAtOrder = getCreatedAtOrder(searchParams);
  const isOrderDesc = createdAtOrder === "desc";
  const postsSorted = sortPostsByDate(posts, isOrderDesc);

  // Chunk posts
  const chunkedPosts = chunkArray(postsSorted);
  const totalPages = chunkedPosts.length;

  // Check current page
  const page = getCurrentPage(searchParams, totalPages);
  const paginationNumbers = createPaginationArray(1, page, totalPages);

  return (
    <main className="flex flex-col flex-1 gap-4">
      <TitleContainer Icon={HeartStraight}>Guide Blog</TitleContainer>
      <SectionContainer accented className="gap-6">
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
                        src={thumbnail ?? DefaultImage}
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

        {/* Pages */}
        <Pagination className="w-full font-sans dyslexic:font-dyslexic">
          <PaginationContent>
            {/* Previous */}
            <PaginationItem>
              <PaginationPrevious
                href={
                  page > 1 ? createPageURL(page - 1, createdAtOrder) : undefined
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
                <PaginationLink href={createPageURL(1, createdAtOrder)}>
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
                  href={num === page ? undefined : createPageURL(num, createdAtOrder)}
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
                  href={createPageURL(totalPages, createdAtOrder)}
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
                    ? createPageURL(page + 1, createdAtOrder)
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
      </SectionContainer>
    </main>
  );
}
