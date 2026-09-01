"use client";

import { ReactNode, useEffect, useState } from "react";

interface DeferredComponentProps {
  delay?: number;
  children: ReactNode;
}

const DeferredComponent = ({
  delay = 200,
  children,
}: DeferredComponentProps) => {
  const [isDeferred, setIsDeferred] = useState(delay === 0);

  useEffect(() => {
    if (delay === 0) {
      setIsDeferred(true);
      return;
    }

    const timeoutId = setTimeout(() => {
      setIsDeferred(true);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [delay]);

  if (!isDeferred) {
    return null;
  }

  return <>{children}</>;
};

export default DeferredComponent;
