import DesktopPage from "@/components/pages/main/DesktopPage";
import MobilePage from "@/components/pages/main/MobilePage";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <div className="hidden md:flex md:flex-1">
        <DesktopPage />
      </div>
      <div className="flex flex-1 md:hidden">
        <MobilePage />
      </div>
    </div>
  );
}
