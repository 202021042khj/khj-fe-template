"use client";

import { type ReactNode } from "react";
import { usePathname } from "next/navigation";

import AsyncBoundary, {
  type AsyncBoundaryProps,
} from "@/components/common/async-boundary";
import { cn } from "@/lib/utils";
import ChevronIcon from "@/components/ui/icons/chevron-icon";

interface AsyncComboboxBoundaryProps
  extends Omit<
    AsyncBoundaryProps,
    "pendingFallback" | "errorFallback" | "delay"
  > {
  placeholder: string;
  className?: string;
}

const AsyncComboboxBoundary = ({
  children,
  placeholder,
  className,
}: AsyncComboboxBoundaryProps) => {
  const pathname = usePathname();

  return (
    <AsyncBoundary
      delay={0}
      pendingFallback={
        <ComboboxFallback className={className}>{placeholder}</ComboboxFallback>
      }
      errorFallback={
        <ComboboxFallback className={className}>{placeholder}</ComboboxFallback>
      }
      resetKeys={[pathname]}
    >
      {children}
    </AsyncBoundary>
  );
};

interface ComboboxFallbackProps {
  children: ReactNode;
  className?: string;
}

const ComboboxFallback = ({ children, className }: ComboboxFallbackProps) => {
  return (
    <div
      className={cn(
        "relative",
        "h-[50px] w-full",
        "flex items-center",
        "bg-white",
        "rounded-[8px] border border-gray-300",
        "text-font-16-400 text-gray-600",
        "px-[16px]",
        className,
      )}
    >
      {children}
      <div className="absolute right-[16px] top-1/2 -translate-y-1/2">
        <ChevronIcon direction="bottom" color="#D6D6D6" />
      </div>
    </div>
  );
};

export default AsyncComboboxBoundary;
