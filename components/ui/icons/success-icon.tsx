interface SuccessIconProps {
  className?: string;
  width?: number;
  height?: number;
}

const SuccessIcon = ({
  className,
  width = 24,
  height = 24,
}: SuccessIconProps) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        fill="#476CFF"
        stroke="#476CFF"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M8 12.1908L10.5512 15L16 9.00002"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SuccessIcon;
