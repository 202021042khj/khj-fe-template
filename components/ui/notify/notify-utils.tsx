"use client";

import { toast, type ToastOptions } from "react-toastify";
import type { NotifyMessage, NotifyType } from "@/components/ui/notify/notify-types";
import Notify from "@/components/ui/notify/notify";

interface NotifyOptions extends ToastOptions {
  testId?: string;
}

const showNotify = (
  type: NotifyType,
  message: NotifyMessage,
  options?: NotifyOptions,
) => {
  const { testId, ...restOptions } = options ?? {};

  toast.dismiss();
  toast.clearWaitingQueue();
  toast(<Notify type={type} message={message} testId={testId} />, restOptions);
};

export const notify = {
  success: (message: NotifyMessage, options?: NotifyOptions) => {
    showNotify("success", message, options);
  },
  error: (message: NotifyMessage, options?: NotifyOptions) => {
    showNotify("error", message, options);
  },
};
