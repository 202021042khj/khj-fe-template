import HeaderSection from "@/components/pages/example/list/sections/HeaderSection";
import PostListSection from "@/components/pages/example/list/sections/PostListSection";
import type { UsePostsListLogicResult as PostsListPageProps } from "@/hooks/usePostsListLogic";

export default function DesktopPage({
  posts,
  searchTerm,
  setSearchTerm,
}: PostsListPageProps) {
  return (
    <div className="mx-auto w-full max-w-5xl">
      <HeaderSection searchTerm={searchTerm} onSearchTermChange={setSearchTerm} />
      <PostListSection posts={posts} />
    </div>
  );
}
