import HeaderSection from "@/components/pages/example/list/sections/HeaderSection";
import PostListSection from "@/components/pages/example/list/sections/PostListSection";
import type { UsePostsListLogicResult as PostsListPageProps } from "@/hooks/usePostsListLogic";

export default function MobilePage({
  posts,
  searchTerm,
  setSearchTerm,
}: PostsListPageProps) {
  return (
    <div className="w-full">
      <HeaderSection searchTerm={searchTerm} onSearchTermChange={setSearchTerm} />
      <PostListSection posts={posts} />
    </div>
  );
}
