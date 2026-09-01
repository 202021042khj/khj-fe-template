"use client";

import { cn } from "@/lib/utils";

interface TabButtonProps {
  variant: "selected" | "default";
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

const TabButton = ({
  variant = "default",
  children,
  onClick,
  disabled = false,
  ...props
}: TabButtonProps) => {
  return (
    <button
      type="button"
      className={cn(
        "flex items-center justify-center",
        "h-[50px] w-[142px]",
        "text-font-14-400",
        TAB_BUTTON_VARIANT_MAP[variant],
        disabled && "cursor-not-allowed",
      )}
      onClick={onClick}
      disabled={disabled}
      aria-pressed={variant === "selected"}
      role="button"
      {...props}
    >
      {children}
    </button>
  );
};

export default TabButton;

type Variant = "selected" | "default";

const TAB_BUTTON_VARIANT_MAP: Record<Variant, string> = {
  selected: cn(
    "bg-primary-sub-blue-100 border border-primary-sub-blue-500 text-primary-main-blue",
    "hover:bg-primary-sub-blue-300 rounded-[8px]",
    "disabled:bg-primary-sub-blue-100 disabled:border-primary-sub-blue-500 disabled:text-primary-main-blue",
  ),
  default: cn(
    "bg-white border border-gray-300 text-gray-600 rounded-[8px]",
    "hover:bg-gray-100",
    "disabled:bg-white disabled:border-gray-300 disabled:text-gray-600",
  ),
};
