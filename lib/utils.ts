import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function articleDateTime(date: string | Date): string | null {
  const d = typeof date === "string" ? new Date(date) : date;

  if (!(d instanceof Date) || isNaN(d.getTime())) {
    return null;
  }

  return d.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
}

export function filterPostsBySearch(posts: Post[], searchQuery: string): Post[] {
  const pureSearch = searchQuery.toLowerCase().trim();

  if (pureSearch == null || pureSearch === "") return posts;

  return posts.filter(
    (post) =>
      post.title.toLowerCase().includes(pureSearch) ||
      post.description?.toLowerCase().includes(pureSearch)
  );
}

export function sortPostsByDate(posts: Post[], desc: boolean = false): Post[] {
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

export function chunkArray<T>(array: T[], chunkSize: number = 10): T[][] {
  const result: T[][] = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
}

export function getRandomItem<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}