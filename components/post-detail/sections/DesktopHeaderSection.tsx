import Link from "next/link";
import Badge from "@/components/common/Badge";
import { formatDate } from "@/lib/formatDate";
import { Post } from "@/types/post";

interface DesktopHeaderSectionProps {
  post: Post;
}

export default function DesktopHeaderSection({
  post,
}: DesktopHeaderSectionProps) {
  return (
    <div className="flex flex-col gap-3 border-b border-zinc-200 px-8 py-10">
      <Link href="/" className="text-sm text-indigo-600 hover:underline">
        ← Back to posts
      </Link>
      <div className="flex items-center gap-3">
        <Badge label={post.category} />
        <span className="text-xs text-zinc-400">
          {formatDate(post.publishedAt)}
        </span>
      </div>
      <h1 className="text-3xl font-semibold text-zinc-900">{post.title}</h1>
      <p className="text-sm text-zinc-500">By {post.author}</p>
    </div>
  );
}
