"use client";

import { usePostsListLogic } from "@/hooks/usePostsListLogic";
import DesktopPage from "@/components/posts-list/DesktopPage";
import MobilePage from "@/components/posts-list/MobilePage";

export default function Home() {
  const logic = usePostsListLogic();

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
