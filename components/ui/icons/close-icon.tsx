interface CloseIconProps {
  className?: string;
  width?: number;
  height?: number;
  color?: string;
}

const CloseIcon = ({
  className,
  width = 20,
  height = 20,
  color = "#000000",
}: CloseIconProps) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 6C6 6 14.3325 14.6572 14.6572 14.6572"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.6572 6C14.6572 6 6.32471 14.6572 6 14.6572"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CloseIcon;
