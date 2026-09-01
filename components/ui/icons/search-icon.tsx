interface SearchIconProps {
  className?: string;
  width?: number;
  height?: number;
  color?: string;
}

const SearchIcon = ({
  className,
  width = 18,
  height = 18,
  color,
}: SearchIconProps) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 18 18"
      fill="none"
      color={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.522 8.055C14.522 11.6265 11.6267 14.5218 8.05518 14.5218C4.48365 14.5218 1.58836 11.6265 1.58836 8.055C1.58836 4.48352 4.48365 1.58824 8.05518 1.58824C11.6267 1.58824 14.522 4.48352 14.522 8.055Z"
        stroke="currentColor"
        strokeWidth="1.97653"
      />
      <path
        d="M13.3486 13.349L16.6619 16.6624"
        stroke="currentColor"
        strokeWidth="1.97653"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default SearchIcon;
