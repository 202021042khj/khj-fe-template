"use client";

import { ReactNode, useEffect } from "react";
import FocusLock from "react-focus-lock";

import { overlay } from "overlay-kit";

import { cn } from "@/lib/utils";

export interface ModalProps {
  id?: string;
  children: ReactNode;
  isOpen: boolean;
  hasBackdrop?: boolean;
  className?: string;
  onBackdropClick?: () => void;
  shouldUnmountOnNavigation?: boolean;
}

const Modal = ({
  children,
  isOpen,
  hasBackdrop = true,
  onBackdropClick,
  shouldUnmountOnNavigation = true,
  className,
  id,
}: ModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [isOpen]);

  useEffect(() => {
    if (!shouldUnmountOnNavigation) return;

    const abortController = new AbortController();

    const handlePopState = () => {
      overlay.unmountAll();
    };

    window.addEventListener("popstate", handlePopState, {
      signal: abortController.signal,
      capture: true,
    });

    return () => abortController.abort();
  }, [shouldUnmountOnNavigation]);

  if (!isOpen) return null;

  const handleBackdropClick = () => {
    onBackdropClick?.();
  };

  return (
    <div
      id={id}
      className={cn(
        "fixed inset-0",
        "flex items-center justify-center",
        "z-modal",
      )}
      role="dialog"
      aria-modal="true"
    >
      <div
        className={cn(
          "fixed inset-0",
          hasBackdrop ? "bg-black/60" : "bg-transparent",
          "transition-opacity",
        )}
        onClick={handleBackdropClick}
        aria-hidden="true"
      />

      <div
        className={cn(
          "relative",
          "bg-white",
          "rounded-[10px] p-[26px]",
          className,
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <FocusLock className="w-full">{children}</FocusLock>
      </div>
    </div>
  );
};

export default Modal;
