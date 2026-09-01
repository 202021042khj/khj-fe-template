"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Spacing from "@/components/ui/spacing";

const CommonError = () => {
  const router = useRouter();

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="text-font-40-500 text-primary-main-blue">
        서비스 접속이 원활하지 않습니다
      </h1>
      <Spacing size={26} />
      <p className="whitespace-pre-line text-center text-font-24-400 text-gray-700">
        {`현재 서버 문제로 인해 서비스 이용이 원활하지 않습니다.
        불편을 드린 점 사과드리며 신속히 해결 중입니다. 잠시 후 다시 이용해 주세요.`}
      </p>
      <Spacing size={60} />
      <Button
        variant="filled"
        className="h-[60px] px-[42px] text-font-16-500"
        onClick={() => router.push("/")}
      >
        이전 페이지로 돌아가기
      </Button>
    </div>
  );
};

export default CommonError;
