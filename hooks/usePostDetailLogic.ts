import { POSTS } from "@/constants/posts";
import { Post } from "@/types/post";

export interface UsePostDetailLogicResult {
  post: Post | undefined;
}

export function usePostDetailLogic(id: string): UsePostDetailLogicResult {
  const post = POSTS.find((p) => p.id === id);
  return { post };
}
