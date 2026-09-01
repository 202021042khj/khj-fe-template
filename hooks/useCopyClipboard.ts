import { useEffect, useState } from "react";

export const useCopyClipboard = (delay = 2000) => {
  const [isCopied, setIsCopied] = useState(false);

  const copyHandler = async (text: string) => {
    if (isCopied) {
      return;
    }

    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
    } catch {
      setIsCopied(false);
    }
  };

  useEffect(() => {
    if (!isCopied) {
      return;
    }

    const timer = setTimeout(() => {
      setIsCopied(false);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay, isCopied]);

  return {
    isCopied,
    copy: copyHandler,
  };
};
