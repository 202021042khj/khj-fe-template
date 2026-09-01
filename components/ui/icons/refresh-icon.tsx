interface RefreshIconProps {
  className?: string;
  width?: number;
  height?: number;
  color?: string;
}

const RefreshIcon = ({
  className,
  width = 17,
  height = 17,
  color,
}: RefreshIconProps) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 17 17"
      fill="none"
      color={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.9558 4.63909C13.7356 2.19884 11.279 1 8.39616 1C4.31137 1 1 4.35781 1 8.49988C1 12.642 4.31137 15.9998 8.39616 15.9998C11.247 15.9998 13.7212 14.3642 14.9558 11.9679"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M11.5276 5.793H15.9999V1.29308"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default RefreshIcon;
