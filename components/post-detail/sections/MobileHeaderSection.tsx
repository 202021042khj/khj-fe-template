import Link from "next/link";
import Badge from "@/components/common/Badge";
import { formatDate } from "@/lib/formatDate";
import { Post } from "@/types/post";

interface MobileHeaderSectionProps {
  post: Post;
}

export default function MobileHeaderSection({
  post,
}: MobileHeaderSectionProps) {
  return (
    <div className="flex flex-col">
      <header className="flex h-14 flex-shrink-0 items-center gap-3 border-b border-zinc-200 px-4">
        <Link href="/" aria-label="Back to posts" className="text-lg text-zinc-600">
          ←
        </Link>
        <h1 className="truncate text-base font-semibold text-zinc-900">
          {post.title}
        </h1>
      </header>
      <div className="flex items-center gap-3 px-4 py-3">
        <Badge label={post.category} />
        <span className="text-xs text-zinc-400">
          {formatDate(post.publishedAt)}
        </span>
      </div>
      <p className="px-4 pb-3 text-sm text-zinc-500">By {post.author}</p>
    </div>
  );
}
