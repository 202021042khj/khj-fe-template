"use client";

import Spacing from "@/components/ui/spacing";
import Modal, { ModalProps } from "@/components/ui/modal/modal";

import CloseIcon from "@/components/ui/icons/close-icon";
import { cn } from "@/lib/utils";

interface BaseModalProps extends ModalProps {
  title?: string;
  titleTestId?: string;
  description?: string;
  onClose: () => void;
  hasCloseButton?: boolean;
  shouldCloseOnBackdropClick?: boolean;
  shouldUnmountOnNavigation?: boolean;
  titleClassName?: string;
}

const BaseModal = ({
  title,
  titleTestId = "txt_title",
  description,
  hasCloseButton = true,
  children,
  onClose,
  shouldCloseOnBackdropClick = false,
  titleClassName,
  ...props
}: BaseModalProps) => {
  const handleBackdropClick = () => {
    if (shouldCloseOnBackdropClick) {
      onClose();
    }
  };

  return (
    <Modal {...props} onBackdropClick={handleBackdropClick}>
      <header className="flex items-start justify-between">
        <div className="flex flex-col gap-[10px]">
          {title && (
            <h2
              className={cn("text-font-16-700", titleClassName)}
              data-testid={titleTestId}
            >
              {title}
            </h2>
          )}
          {description && (
            <p className="text-font-14-500 text-primary-main-blue">
              *{description}
            </p>
          )}
        </div>
        {hasCloseButton && (
          <button type="button" data-testid="btn_close" onClick={onClose}>
            <CloseIcon width={20} height={20} />
          </button>
        )}
      </header>
      <Spacing size={26} />
      {children}
    </Modal>
  );
};

export default BaseModal;
