"use client";

import { use } from "react";
import { usePostDetailLogic } from "@/hooks/usePostDetailLogic";
import DesktopPage from "@/components/post-detail/DesktopPage";
import MobilePage from "@/components/post-detail/MobilePage";

interface PostDetailRouteProps {
  params: Promise<{ id: string }>;
}

export default function PostDetailPage({ params }: PostDetailRouteProps) {
  const { id } = use(params);
  const logic = usePostDetailLogic(id);

  return (
    <div className="flex flex-1 flex-col">
      <div className="hidden md:flex md:flex-1">
        <DesktopPage {...logic} />
      </div>
      <div className="flex flex-1 md:hidden">
        <MobilePage {...logic} />
      </div>
    </div>
  );
}
