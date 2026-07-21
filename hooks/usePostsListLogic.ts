"use client";

import { useMemo, useState } from "react";
import { POSTS } from "@/constants/posts";
import { Post } from "@/types/post";

export interface UsePostsListLogicResult {
  posts: Post[];
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}

export function usePostsListLogic(): UsePostsListLogicResult {
  const [searchTerm, setSearchTerm] = useState("");

  const posts = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    if (!term) return POSTS;
    return POSTS.filter((post) => post.title.toLowerCase().includes(term));
  }, [searchTerm]);

  return { posts, searchTerm, setSearchTerm };
}
