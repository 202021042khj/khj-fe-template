import DesktopHeaderSection from "@/components/pages/example/detail/sections/DesktopHeaderSection";
import ContentSection from "@/components/pages/example/detail/sections/ContentSection";
import type { UsePostDetailLogicResult as PostDetailPageProps } from "@/hooks/usePostDetailLogic";

export default function DesktopPage({ post }: PostDetailPageProps) {
  if (!post) {
    return (
      <div className="mx-auto w-full max-w-3xl px-8 py-10 text-sm text-zinc-500">
        Post not found.
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-3xl">
      <DesktopHeaderSection post={post} />
      <ContentSection post={post} />
    </div>
  );
}
