import { Post } from "@/types/post";

interface ContentSectionProps {
  post: Post;
}

export default function ContentSection({ post }: ContentSectionProps) {
  return (
    <div className="flex flex-col gap-4 px-4 py-6 md:px-8 md:py-10">
      {post.body.map((paragraph, index) => (
        <p
          key={index}
          className="text-sm leading-relaxed text-zinc-700 md:text-base"
        >
          {paragraph}
        </p>
      ))}
    </div>
  );
}
