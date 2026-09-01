"use client";

import { ComponentPropsWithoutRef, forwardRef, useState } from "react";
import { cn } from "@/lib/utils";

interface ToggleProps
  extends Omit<ComponentPropsWithoutRef<"button">, "onClick"> {
  defaultChecked?: boolean;
  checked?: boolean;
  onToggleChange?: (checked: boolean) => void;
  checkedLabel?: string;
  uncheckedLabel?: string;
}

const Toggle = forwardRef<HTMLButtonElement, ToggleProps>(
  (
    {
      className,
      defaultChecked = false,
      checked: checkedProp,
      onToggleChange,
      checkedLabel = "ON",
      uncheckedLabel = "OFF",
      disabled = false,
      ...props
    },
    ref,
  ) => {
    const [value, setValue] = useState(defaultChecked);
    const isControlled = checkedProp !== undefined;
    const checked = isControlled ? checkedProp : value;

    const handleClick = () => {
      const nextChecked = !checked;

      if (!isControlled) {
        setValue(nextChecked);
      }

      onToggleChange?.(nextChecked);
    };

    return (
      <button
        ref={ref}
        type="button"
        role="switch"
        aria-checked={checked}
        aria-label={checked ? checkedLabel : uncheckedLabel}
        data-state={checked ? "checked" : "unchecked"}
        data-disabled={disabled}
        disabled={disabled}
        className={cn(
          "relative",
          "h-[30px] w-[70px]",
          "flex items-center gap-[10px]",
          "text-font-12-500 text-white",
          "rounded-full",
          "shrink-0",
          checked ? "bg-primary-main-blue" : "bg-gray-500",
          className,
        )}
        onClick={handleClick}
        data-testid="btn_toggle"
        {...props}
      >
        <span
          className={cn(
            "absolute left-0",
            "h-[22px] w-[22px] shrink-0",
            "rounded-full bg-white",
            "transition-transform duration-500",
            checked ? "translate-x-[4px]" : "translate-x-[44px]",
          )}
        />
        <span
          className={cn(
            "absolute left-0",
            "transition-all duration-500",
            "whitespace-nowrap",
            checked ? "translate-x-[36px]" : "translate-x-[8px]",
          )}
        >
          {checked ? checkedLabel : uncheckedLabel}
        </span>
      </button>
    );
  },
);

Toggle.displayName = "Toggle";

export default Toggle;
