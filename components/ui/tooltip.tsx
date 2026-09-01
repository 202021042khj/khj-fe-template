"use client";

import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { cn } from "@/lib/utils";

export type TooltipProviderProps = React.ComponentPropsWithoutRef<
  typeof TooltipPrimitive.Provider
>;

const TooltipProvider = ({
  delayDuration = 100,
  ...props
}: TooltipProviderProps) => {
  return <TooltipPrimitive.Provider delayDuration={delayDuration} {...props} />;
};

const Tooltip = TooltipPrimitive.Root;

const TooltipTrigger = TooltipPrimitive.Trigger;

export type TooltipContentProps = React.ComponentPropsWithoutRef<
  typeof TooltipPrimitive.Content
>;

const TooltipContent = React.forwardRef<
  React.ComponentRef<typeof TooltipPrimitive.Content>,
  TooltipContentProps
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Portal>
    <TooltipPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "origin-[--radix-tooltip-content-transform-origin]",
        "rounded-md",
        "bg-[rgba(34,41,67,0.7)]",
        "text-font-14-400 leading-[22px] text-white",
        "animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 overflow-hidden",
        "px-[16px] py-[10px]",
        "z-50",
        className,
      )}
      {...props}
    />
  </TooltipPrimitive.Portal>
));

TooltipContent.displayName = TooltipPrimitive.Content.displayName;

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
