import { type ComponentPropsWithoutRef, memo } from "react";

interface SpacingProps extends ComponentPropsWithoutRef<"div"> {
  children?: never;
  direction?: "vertical" | "horizontal";
  size: number;
}

const Spacing = memo(
  ({ direction = "vertical", size, style, ...props }: SpacingProps) => {
    return (
      <div
        style={{
          flex: "none",
          width: direction === "horizontal" ? `${size}px` : undefined,
          height: direction === "vertical" ? `${size}px` : undefined,
          ...style,
        }}
        {...props}
      />
    );
  },
);

Spacing.displayName = "Spacing";

export default Spacing;
