interface MoreIconProps {
  className?: string;
  width?: number;
  height?: number;
}

const MoreIcon = ({ className, width = 19, height = 19 }: MoreIconProps) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="9.49996" cy="3.16667" r="1.58333" fill="#9F9F9F" />
      <circle cx="9.49996" cy="9.5" r="1.58333" fill="#9F9F9F" />
      <ellipse cx="9.49996" cy="15.8333" rx="1.58333" ry="1.58333" fill="#9F9F9F" />
    </svg>
  );
};

export default MoreIcon;
