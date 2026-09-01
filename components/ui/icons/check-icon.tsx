import type { SVGProps } from "react";

interface CheckIconProps extends SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
}

const CheckIcon = ({
  className,
  width = 20,
  height = 20,
  color,
  ...props
}: CheckIconProps) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      color={color}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5 10.2543L8.18899 14L15 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CheckIcon;
