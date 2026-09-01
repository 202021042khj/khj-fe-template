interface CheckCircleIconProps {
  className?: string;
  width?: number;
  height?: number;
}

const CheckCircleIcon = ({
  className,
  width = 40,
  height = 40,
}: CheckCircleIconProps) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 40C8.954 40 0 31.046 0 20C0 8.954 8.954 0 20 0C31.046 0 40 8.956 40 20C40 31.044 31.046 40 20 40Z"
        fill="#476CFF"
      />
      <path
        d="M12 20.3815L17.1024 26L28 14"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CheckCircleIcon;
