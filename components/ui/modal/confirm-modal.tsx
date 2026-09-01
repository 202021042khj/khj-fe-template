"use client";

import { ReactNode } from "react";

import Modal, { ModalProps } from "@/components/ui/modal/modal";
import Spacing from "@/components/ui/spacing";

import CheckIcon from "@/components/ui/icons/check-circle-icon";
import WarningIcon from "@/components/ui/icons/warning-icon";
import { cn } from "@/lib/utils";
import { Button, ButtonProps } from "@/components/ui/button";

interface ConfirmModalButtonProps extends ButtonProps {
  label?: ReactNode;
}

interface ConfirmModalProps extends Omit<ModalProps, "children"> {
  title: string;
  description: string;
  variant?: "warning" | "check";
  extraContent?: ReactNode;
  leftButton?: ConfirmModalButtonProps;
  rightButton?: ConfirmModalButtonProps;
  dataTestId?: string;
  dataTestIdCancel?: string;
  titleTestId?: string;
  descriptionTestId?: string;
  shouldUnmountOnNavigation?: boolean;
}

const ConfirmModal = ({
  title,
  description,
  extraContent,
  variant = "warning",
  leftButton,
  rightButton,
  dataTestId = "btn_confirm",
  dataTestIdCancel = "btn_cancel",
  titleTestId = "title",
  descriptionTestId = "subtitle",
  ...props
}: ConfirmModalProps) => {
  const {
    label: leftButtonLabel,
    className: leftButtonClassName,
    ...leftButtonProps
  } = leftButton ?? {};
  const {
    label: rightButtonLabel,
    className: rightButtonClassName,
    ...rightButtonProps
  } = rightButton ?? {};

  return (
    <Modal {...props}>
      <div className="min-w-[444px]">
        <div className="flex items-center justify-center">
          {variant === "warning" ? (
            <WarningIcon width={40} height={40} />
          ) : (
            <CheckIcon width={40} height={40} />
          )}
        </div>
        <Spacing size={26} />
        <div className="flex flex-col items-center gap-[10px]">
          <h2 className="text-font-18-700" data-testid={titleTestId}>
            {title}
          </h2>
          {extraContent}
          <p className="text-font-16-400" data-testid={descriptionTestId}>
            {description}
          </p>
        </div>
        <Spacing size={42} />
        <div className="flex gap-[16px]">
          <Button
            type="button"
            variant="outlined"
            size="lg"
            color="black"
            className={cn("w-full text-font-18-500", leftButtonClassName)}
            data-testid={dataTestIdCancel}
            autoFocus={true}
            {...leftButtonProps}
          >
            {leftButtonLabel ?? "취소"}
          </Button>
          <Button
            type="button"
            variant="filled"
            size="lg"
            color={variant === "warning" ? "red" : "blue"}
            className={cn("w-full text-font-18-500", rightButtonClassName)}
            data-testid={dataTestId}
            {...rightButtonProps}
          >
            {rightButtonLabel ?? "확인"}
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default ConfirmModal;
