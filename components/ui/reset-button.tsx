"use client";

import { forwardRef, type MouseEvent, useState } from "react";

import Button, { type ButtonProps } from "@/components/ui/button";
import RefreshIcon from "@/components/ui/icons/refresh-icon";
import { cn } from "@/lib/utils";

const COLORS = {
  gray600: "#9F9F9F",
  primaryMainBlue: "#476cff",
};

type ResetButtonProps = Omit<ButtonProps, "asChild">;

const ResetButton = forwardRef<HTMLButtonElement, ResetButtonProps>(
  ({ className, disabled, onClick, ...props }, ref) => {
    const [isSpinning, setIsSpinning] = useState(false);

    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
      if (isSpinning) {
        return;
      }

      setIsSpinning(true);
      setTimeout(() => setIsSpinning(false), 1000);

      onClick?.(e);
    };

    return (
      <Button
        ref={ref}
        type="button"
        variant="outlined"
        color="black"
        className={cn(
          "group h-[50px] w-[50px]",
          !disabled &&
            "hover:border-primary-sub-blue-500 hover:bg-primary-sub-blue-100",
          className,
        )}
        onClick={handleClick}
        disabled={disabled}
        data-testid="btn_reset"
        {...props}
      >
        <RefreshIcon
          color={disabled ? COLORS.gray600 : COLORS.primaryMainBlue}
          className={cn(
            "transition-transform",
            isSpinning && "animate-spin-once",
          )}
        />
      </Button>
    );
  },
);

ResetButton.displayName = "ResetButton";

export default ResetButton;
