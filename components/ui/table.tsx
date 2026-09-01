import {
  type ComponentPropsWithoutRef,
  forwardRef,
  type HTMLAttributes,
  type RefObject,
  type TdHTMLAttributes,
  type ThHTMLAttributes,
} from "react";

import { cn } from "@/lib/utils";

/* -------------------------------------------------------------------------------------------------
 * Table
 * -----------------------------------------------------------------------------------------------*/
export const Table = forwardRef<
  HTMLTableElement,
  HTMLAttributes<HTMLTableElement> & {
    wrapperClassName?: string;
    wrapperRef?: RefObject<HTMLDivElement>;
  }
>(({ className, ...props }, ref) => (
  <table
    ref={ref}
    className={cn("w-full caption-bottom", className)}
    {...props}
  />
));
Table.displayName = "Table";

/* -------------------------------------------------------------------------------------------------
 * TableHeader
 * -----------------------------------------------------------------------------------------------*/
export const TableHeader = forwardRef<
  HTMLTableSectionElement,
  HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead
    ref={ref}
    className={cn("bg-primary-sub-blue-100", className)}
    {...props}
  />
));
TableHeader.displayName = "TableHeader";

/* -------------------------------------------------------------------------------------------------
 * TableBody
 * -----------------------------------------------------------------------------------------------*/
export const TableBody = forwardRef<
  HTMLTableSectionElement,
  HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody ref={ref} className={cn("", className)} {...props} />
));
TableBody.displayName = "TableBody";

/* -------------------------------------------------------------------------------------------------
 * TableFooter
 * -----------------------------------------------------------------------------------------------*/
export const TableFooter = forwardRef<
  HTMLTableSectionElement,
  HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn(
      "bg-muted/50 border-t font-medium [&>tr]:last:border-b-0",
      className,
    )}
    {...props}
  />
));
TableFooter.displayName = "TableFooter";

/* -------------------------------------------------------------------------------------------------
 * TableHeaderRow
 * -----------------------------------------------------------------------------------------------*/
export const TableHeaderRow = forwardRef<
  HTMLTableRowElement,
  HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn("border-b border-b-gray-300", className)}
    {...props}
  />
));
TableHeaderRow.displayName = "TableHeaderRow";

/* -------------------------------------------------------------------------------------------------
 * TableRow
 * -----------------------------------------------------------------------------------------------*/
export const TableRow = forwardRef<
  HTMLTableRowElement,
  HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(
      "group",
      "border-b border-b-gray-300 transition-colors hover:bg-gray-100 data-[state=selected]:bg-gray-100",
      className,
    )}
    {...props}
  />
));
TableRow.displayName = "TableRow";

/* -------------------------------------------------------------------------------------------------
 * TableHead
 * -----------------------------------------------------------------------------------------------*/
export const TableHead = forwardRef<
  HTMLTableCellElement,
  ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      "h-[50px]",
      "text-left align-middle text-font-14-500 text-gray-700",
      "px-[16px]",
      "[&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      className,
    )}
    {...props}
  />
));
TableHead.displayName = "TableHead";

/* -------------------------------------------------------------------------------------------------
 * TableCell
 * -----------------------------------------------------------------------------------------------*/
export const TableCell = forwardRef<
  HTMLTableCellElement,
  TdHTMLAttributes<HTMLTableCellElement>
>(({ className, children, ...props }, ref) => (
  <td
    ref={ref}
    className={cn(
      "align-middle text-font-14-400",
      "p-[16px]",
      "[&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      className,
    )}
    {...props}
  >
    {children}
  </td>
));
TableCell.displayName = "TableCell";

/* -------------------------------------------------------------------------------------------------
 * TableCaption
 * -----------------------------------------------------------------------------------------------*/
const TableCaption = forwardRef<
  HTMLTableCaptionElement,
  HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={cn("text-muted-foreground mt-4 text-sm", className)}
    {...props}
  />
));
TableCaption.displayName = "TableCaption";

/* -------------------------------------------------------------------------------------------------
 * TableScrollArea
 * -----------------------------------------------------------------------------------------------*/
type TableScrollAreaProps = ComponentPropsWithoutRef<"div">;

export const TableScrollArea = forwardRef<HTMLDivElement, TableScrollAreaProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("relative w-full", className)} {...props}>
        {children}
      </div>
    );
  },
);
TableScrollArea.displayName = "TableScrollArea";

/* -------------------------------------------------------------------------------------------------
 * TableScrollAreaViewport
 * -----------------------------------------------------------------------------------------------*/
type TableScrollAreaViewport = ComponentPropsWithoutRef<"div">;

export const TableScrollAreaViewport = forwardRef<
  HTMLDivElement,
  TableScrollAreaViewport
>(({ children, className, ...props }, ref) => {
  return (
    <div ref={ref} className={cn("w-full overflow-auto", className)} {...props}>
      {children}
    </div>
  );
});
TableScrollAreaViewport.displayName = "TableScrollAreaViewport";

/* -------------------------------------------------------------------------------------------------
 * TableScrollAreaEmpty
 * -----------------------------------------------------------------------------------------------*/
type TableScrollAreaEmptyProps = ComponentPropsWithoutRef<"div">;

export const TableScrollAreaEmpty = forwardRef<
  HTMLDivElement,
  TableScrollAreaEmptyProps
>(({ children, className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "absolute",
        "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
        "inline-flex items-center justify-center",
        "bg-transparent",
        "whitespace-nowrap",
        "text-font-14-400",
        className,
      )}
      data-testid="txt_noresult"
      {...props}
    >
      {children}
    </div>
  );
});
TableScrollAreaEmpty.displayName = "TableScrollAreaEmpty";

/* -------------------------------------------------------------------------------------------------
 * TableSideShadow
 * -----------------------------------------------------------------------------------------------*/
interface TableSideShadowProps
  extends Omit<ComponentPropsWithoutRef<"div">, "children"> {
  direction: "left" | "right";
  topOffset?: number;
  leftOffset?: number;
  rightOffset?: number;
  bottomOffset?: number;
}

export const TableSideShadow = forwardRef<HTMLDivElement, TableSideShadowProps>(
  (
    {
      className,
      direction,
      topOffset,
      leftOffset,
      rightOffset,
      bottomOffset,
      style,
      ...props
    },
    ref,
  ) => {
    const isLeft = direction === "left";
    return (
      <div
        ref={ref}
        className={cn(
          "z-table",
          "w-[60px]",
          "absolute bottom-0 right-0 top-[50px]",
          "bg-gradient-to-l from-gray-200/50 to-transparent",
          "pointer-events-none",
          isLeft && ["left-0", "bg-gradient-to-r"],
          className,
        )}
        style={{
          top: topOffset !== undefined ? `${topOffset}px` : undefined,
          left: leftOffset !== undefined ? `${leftOffset}px` : undefined,
          right: rightOffset !== undefined ? `${rightOffset}px` : undefined,
          bottom: bottomOffset !== undefined ? `${bottomOffset}px` : undefined,
          ...style,
        }}
        {...props}
      />
    );
  },
);
TableSideShadow.displayName = "TableSideShadow";
