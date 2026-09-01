import { cn } from "@/lib/utils";

interface ChevronIconProps {
  className?: string;
  direction?: Direction;
  width?: number;
  height?: number;
  color?: string;
}

const ChevronIcon = ({
  className,
  direction = "top",
  width = 24,
  height = 24,
  color = "#9F9F9F",
}: ChevronIconProps) => {
  return (
    <svg
      className={cn(DIRECTION_MAP[direction], className)}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M17 14L12 9L7 14"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

type Direction = "top" | "right" | "bottom" | "left";

const DIRECTION_MAP: Record<Direction, string> = {
  top: "rotate-0",
  right: "rotate-90",
  bottom: "rotate-180",
  left: "-rotate-90",
};

export default ChevronIcon;
