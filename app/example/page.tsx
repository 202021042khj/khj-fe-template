"use client";

import { usePostsListLogic } from "@/hooks/usePostsListLogic";
import DesktopPage from "@/components/pages/example/list/DesktopPage";
import MobilePage from "@/components/pages/example/list/MobilePage";

export default function ExampleListPage() {
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
