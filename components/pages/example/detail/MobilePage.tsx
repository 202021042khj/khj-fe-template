import MobileHeaderSection from "@/components/pages/example/detail/sections/MobileHeaderSection";
import ContentSection from "@/components/pages/example/detail/sections/ContentSection";
import type { UsePostDetailLogicResult as PostDetailPageProps } from "@/hooks/usePostDetailLogic";

export default function MobilePage({ post }: PostDetailPageProps) {
  if (!post) {
    return (
      <div className="px-4 py-10 text-sm text-zinc-500">Post not found.</div>
    );
  }

  return (
    <div className="w-full">
      <MobileHeaderSection post={post} />
      <ContentSection post={post} />
    </div>
  );
}
