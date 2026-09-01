import { cn } from "@/lib/utils";

interface ArrowIconProps {
  className?: string;
  direction?: Direction;
  width?: number;
  height?: number;
  color?: string;
}

const ArrowIcon = ({
  className,
  direction = "left",
  width = 32,
  height = 32,
  color = "#000000",
}: ArrowIconProps) => {
  return (
    <svg
      className={cn(DIRECTION_MAP[direction], className)}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
    >
      <g id="Icn/arrow/L/2px/left">
        <g id="Group 4861">
          <path
            id="Path 2"
            d="M15 8L6 16L15 24"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="Vector 1"
            d="M7 16H26.0066"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
          />
        </g>
      </g>
    </svg>
  );
};

type Direction = "top" | "right" | "bottom" | "left";

const DIRECTION_MAP: Record<Direction, string> = {
  top: "rotate-90",
  right: "rotate-180",
  bottom: "-rotate-90",
  left: "rotate-0",
};

export default ArrowIcon;
