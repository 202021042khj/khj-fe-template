/**
 * // 기본 수평 구분선
 * <Divider />
 *
 * // 수직 구분선 (부모에 높이 지정 필요)
 * <div className="h-40">
 *   <Divider direction="vertical" color="bg-blue-500" thickness="2px" />
 * </div>
 *
 * - 수직 구분선(direction="vertical")은 부모 요소에 반드시 높이가 지정되어 있어야 합니다.
 * - 부모 요소에 높이가 없으면 수직 구분선이 보이지 않습니다.
 * - thickness는 선의 두께를 지정합니다 (예: "1px", "2px", "0.5rem").
 */

import { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

interface DividerProps extends ComponentPropsWithoutRef<"div"> {
  children?: never;
  direction?: "horizontal" | "vertical";
  color?: string;
  thickness?: string;
}

const Divider = ({
  className = "",
  direction = "horizontal",
  color = "bg-gray-200",
  thickness = "1px",
  style,
  ...props
}: DividerProps) => {
  return (
    <div
      className={cn(color, className)}
      style={{
        height: direction === "horizontal" ? thickness : "100%",
        width: direction === "vertical" ? thickness : "100%",
        ...style,
      }}
      {...props}
    />
  );
};

export default Divider;
