import { Post } from "@/types/post";

export const POSTS: Post[] = [
  {
    id: "getting-started-with-app-router",
    title: "Getting Started with the App Router",
    category: "Guides",
    excerpt:
      "A quick tour of Next.js's App Router and how routes are organized.",
    body: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    ],
    author: "Jamie Lee",
    publishedAt: "2026-06-01",
  },
  {
    id: "why-we-split-desktop-and-mobile",
    title: "Why We Split Desktop and Mobile Components",
    category: "Architecture",
    excerpt:
      "A placeholder post about structuring device-specific views.",
    body: [
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
    ],
    author: "Alex Kim",
    publishedAt: "2026-06-10",
  },
  {
    id: "composing-pages-from-sections",
    title: "Composing Pages from Sections",
    category: "Architecture",
    excerpt:
      "A placeholder post about breaking pages into section components.",
    body: [
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa.",
      "Qui officia deserunt mollit anim id est laborum.",
    ],
    author: "Jamie Lee",
    publishedAt: "2026-06-15",
  },
];
