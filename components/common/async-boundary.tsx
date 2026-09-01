"use client";

import { type ReactNode, Suspense, type SuspenseProps } from "react";
import { ErrorBoundary, type ErrorBoundaryProps } from "react-error-boundary";

import DeferredComponent from "@/components/common/deferred-component";

export interface AsyncBoundaryProps
  extends Omit<
    ErrorBoundaryProps,
    "fallback" | "FallbackComponent" | "fallbackRender"
  > {
  children: ReactNode;
  pendingFallback?: SuspenseProps["fallback"];
  delay?: number;
  errorFallback?: ErrorBoundaryProps["fallback"];
}

const AsyncBoundary = ({
  children,
  pendingFallback = null,
  errorFallback = null,
  delay,
  ...props
}: AsyncBoundaryProps) => {
  return (
    <ErrorBoundary fallback={errorFallback} {...props}>
      <Suspense
        fallback={
          <DeferredComponent delay={delay}>{pendingFallback}</DeferredComponent>
        }
      >
        {children}
      </Suspense>
    </ErrorBoundary>
  );
};

export default AsyncBoundary;
