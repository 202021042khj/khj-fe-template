"use client";

import * as React from "react";
import { forwardRef } from "react";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandProps,
} from "@/components/ui/command";

import CheckIcon from "@/components/ui/icons/check-icon";
import ChevronIcon from "@/components/ui/icons/chevron-icon";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Button, ButtonProps } from "@/components/ui/button";

export interface BaseOption {
  id: number;
  name: string;
  nameEn: string;
}
export interface ComboboxOption {
  value: string;
  label: string;
  selectedLabel?: string;
  className?: string;
  keywords?: string[];
}

interface ComboBoxCommonProps extends Omit<ButtonProps, "value" | "onChange"> {
  classNames?: {
    input?: string;
    item?: string;
  };
  options: ComboboxOption[];
  hasAllOption?: boolean;
  hasSearch?: boolean;
  placeholder?: string;
  renderOption?: (option: {
    value: string;
    label: string;
    className?: string;
  }) => React.ReactNode;
  filter?: CommandProps["filter"];
  hasCheckIcon?: boolean;
  testId?: string;
  autoInputFocus?: boolean;
  emptyText?: string;
}

export interface ComboBoxMultiProps extends ComboBoxCommonProps {
  value?: string[] | null;
  onValueChange: (value: string[]) => void;
  multiSelect: true;
}

export interface ComboBoxSingleProps extends ComboBoxCommonProps {
  value: string;
  onValueChange: (value: string) => void;
  multiSelect?: false;
}

type ComboBoxProps = ComboBoxMultiProps | ComboBoxSingleProps;

const ComboBox = forwardRef<HTMLButtonElement, ComboBoxProps>(
  (
    {
      classNames,
      options,
      value: defaultValue,
      onValueChange,
      multiSelect,
      hasAllOption = true,
      hasSearch = true,
      placeholder,
      className,
      testId,
      filter,
      disabled,
      hasCheckIcon = true,
      autoInputFocus = true,
      emptyText = "일치하는 항목이 없습니다",
      ...props
    },
    ref,
  ) => {
    const [open, setOpen] = React.useState<boolean>(false);
    const [value, setValue] = React.useState<string | string[]>(
      defaultValue || (multiSelect ? [] : ""),
    );
    const [inputValue, setInputValue] = React.useState("");

    const placeholderText = placeholder || "선택";

    React.useEffect(() => {
      if (defaultValue !== undefined) {
        setValue(defaultValue || (multiSelect ? [] : ""));
      }
    }, [defaultValue, multiSelect]);

    // 다중 선택 처리
    const handleMultiSelect = (currentValue: string) => {
      if (!multiSelect) {
        return;
      }

      const handleValueChange = (newValue: string[]) => {
        onValueChange(newValue);
        setValue(newValue);
      };

      const isCurrentValueSelected =
        (Array.isArray(value) && value.includes(currentValue)) ||
        value === currentValue;

      if (currentValue === "default") {
        const newValues = isCurrentValueSelected ? [] : ["default"];
        handleValueChange(newValues);
        return;
      }

      if (value.includes("default")) {
        const allValues = options.map((option: ComboboxOption) => option.value);
        const newValues = allValues.filter((v: string) => v !== currentValue);
        handleValueChange(newValues);
        return;
      }

      const values = Array.isArray(value) ? value : [value];
      const updatedValues = isCurrentValueSelected
        ? values.filter((v) => v !== currentValue)
        : [...values, currentValue];
      const isAllSelected = updatedValues.length === options.length;

      handleValueChange(
        isAllSelected && hasAllOption ? ["default"] : updatedValues,
      );
    };

    // 단일 선택 처리
    const handleSingleSelect = (currentValue: string) => {
      if (!multiSelect) {
        const newValue = value === currentValue ? "" : currentValue;
        onValueChange(newValue);
      }

      setOpen(false);
    };

    const handleSelect = (currentValue: string) => {
      if (multiSelect) {
        handleMultiSelect(currentValue);
        return;
      }

      handleSingleSelect(currentValue);
    };

    const getDisplayValue = () => {
      if (
        multiSelect &&
        Array.isArray(value) &&
        value.includes("default") &&
        hasAllOption
      ) {
        return "전체";
      }
      if (multiSelect && Array.isArray(value)) {
        return value.length > 0
          ? options
              .filter((option: ComboboxOption) => value.includes(option.value))
              .map((option: ComboboxOption) => option.label)
              .join(", ")
          : placeholderText;
      } else {
        const selectedOption = options.find(
          (option: ComboboxOption) => option.value === value,
        );

        return typeof value === "string" && value
          ? selectedOption?.selectedLabel || selectedOption?.label || value
          : placeholderText;
      }
    };

    const handlePopoverOpenChange = (open: boolean) => {
      setOpen(open);

      if (open && hasSearch) {
        setInputValue("");
      }
    };

    return (
      <Popover open={open} onOpenChange={handlePopoverOpenChange}>
        <PopoverTrigger asChild>
          <Button
            {...props}
            ref={ref}
            variant="outlined"
            role="combobox"
            color="black"
            aria-expanded={open}
            className={cn(
              "data-[state=open]:border-primary-main-blue",
              "h-[50px] w-full justify-between gap-4",
              "text-font-16-400",
              "px-4",
              "truncate",
              className,
            )}
            type="button"
            disabled={disabled}
            data-testid={`${testId}_trigger`}
          >
            <span
              className={cn(
                "truncate",
                (multiSelect ? Array.isArray(value) && value.length > 0 : value)
                  ? "text-black"
                  : "text-gray-600",
                disabled && "text-gray-600",
              )}
            >
              {getDisplayValue()}
            </span>
            <ChevronIcon
              direction={open ? "top" : "bottom"}
              color={disabled ? "#D6D6D6" : "#9F9F9F"}
              className="flex-shrink-0"
            />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="popover-content-width-same-as-its-trigger p-0"
          onWheel={(e) => {
            e.stopPropagation();
          }}
          onOpenAutoFocus={
            autoInputFocus ? undefined : (e) => e.preventDefault()
          }
        >
          <Command
            className="w-full"
            filter={
              filter ??
              ((_, search, keywords) => {
                return keywords?.some((keyword) =>
                  keyword.toLowerCase().includes(search.toLowerCase()),
                )
                  ? 1
                  : 0;
              })
            }
          >
            {hasSearch && (
              <CommandInput
                value={inputValue}
                onValueChange={setInputValue}
                placeholder="검색어를 입력해주세요"
                className={cn("h-[41px]", classNames?.input)}
                data-testid={`${testId}_search`}
              />
            )}
            <CommandList className="w-full p-0">
              <CommandEmpty>{emptyText}</CommandEmpty>
              <CommandGroup data-testid={`${testId}_item`}>
                {multiSelect && hasAllOption && (
                  <CommandItem
                    value="전체"
                    onSelect={() => handleSelect("default")}
                    className={cn(
                      value === "default" ||
                        (Array.isArray(value) && value.includes("default"))
                        ? "bg-primary-sub-blue-100 text-font-16-500 text-primary-main-blue"
                        : "",
                      classNames?.item,
                    )}
                  >
                    전체
                    <CheckIcon
                      strokeWidth={2}
                      className={cn(
                        "ml-auto h-5 w-5 flex-shrink-0",
                        value === "default" ||
                          (Array.isArray(value) && value.includes("default"))
                          ? "opacity-100"
                          : "hidden",
                      )}
                    />
                  </CommandItem>
                )}
                {options.map((option: ComboboxOption, idx: number) => (
                  <CommandItem
                    key={option.value}
                    value={option.value}
                    onSelect={() => handleSelect(option.value)}
                    keywords={option.keywords}
                    className={cn(
                      "flex h-full items-start gap-4",
                      "break-all",
                      multiSelect
                        ? (Array.isArray(value) &&
                            value.includes(option.value)) ||
                          value.includes("default")
                          ? "bg-primary-sub-blue-100 text-font-16-500 text-primary-main-blue"
                          : option.className
                        : value === option.value
                          ? "bg-primary-sub-blue-100 text-font-16-500 text-primary-main-blue"
                          : option.className,
                      classNames?.item,
                    )}
                    data-testid={`${testId}_${idx + 1}`}
                  >
                    {option.label}
                    {hasCheckIcon && multiSelect && (
                      <CheckIcon
                        strokeWidth={2}
                        className={cn(
                          "ml-auto h-5 w-5 flex-shrink-0",
                          (Array.isArray(value) &&
                            value.includes(option.value)) ||
                            value.includes("default")
                            ? "opacity-100"
                            : "hidden",
                        )}
                      />
                    )}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    );
  },
);

ComboBox.displayName = "ComboBox";

export { ComboBox, type ComboBoxProps };
