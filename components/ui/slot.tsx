import {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  ReactElement,
  Ref,
  HTMLAttributes,
  ReactNode,
  Fragment,
  RefObject,
} from "react";

export interface SlotProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
}

const Slot = forwardRef<HTMLElement, SlotProps>(
  ({ children, ...slotProps }, ref) => {
    const childrenArray = getChildrenArray(children);

    const slottable = childrenArray.find(isSlottable);

    if (slottable) {
      const newElement = slottable.props.children;

      const newChildren = childrenArray.map((child) => {
        if (child !== slottable) {
          return child;
        }

        if (isValidElement(newElement)) {
          return (newElement.props as { children: ReactNode }).children;
        }

        return null;
      });

      return isValidElement(newElement)
        ? cloneElement(
            newElement,

            {
              ...(mergeProps(slotProps, newElement.props as AnyProps) as any),

              ref: ref
                ? composeRefs(ref, (newElement as any).ref)
                : (newElement as any).ref,
            },

            newChildren,
          )
        : null;
    }

    if (isValidElement(children)) {
      return cloneElement(children, {
        ...(mergeProps(slotProps, children.props as AnyProps) as any),

        ref: ref
          ? composeRefs(ref, (children as any).ref)
          : (children as any).ref,
      });
    }

    return null;
  },
);

Slot.displayName = "Slot";

export interface SlottableProps {
  children: ReactNode;
}

export const Slottable = ({ children }: SlottableProps) => {
  return <>{children}</>;
};

export type AsChildProps<T> = T & {
  asChild?: boolean;
};

function getChildrenArray(children: ReactNode) {
  const childrenArray = Children.toArray(children);

  if (childrenArray.length === 1 && isFragment(childrenArray[0])) {
    return Children.toArray(
      (childrenArray[0].props as { children: ReactNode }).children,
    );
  }

  return childrenArray;
}

function isSlottable(child: ReactNode): child is ReactElement<SlottableProps> {
  return isValidElement(child) && child.type === Slottable;
}

function isFragment(child: ReactNode): child is ReactElement {
  return isValidElement(child) && child.type === Fragment;
}

type PossibleRef<T> = Ref<T> | undefined;

function setRef<T>(ref: PossibleRef<T>, value: T) {
  if (typeof ref === "function") {
    ref(value);
  } else if (ref !== undefined && ref !== null) {
    (ref as RefObject<T>).current = value;
  }
}

function composeRefs<T>(...refs: PossibleRef<T>[]) {
  return (node: T) => refs.forEach((ref) => setRef(ref, node));
}

type AnyProps = Record<string, any>;

function mergeProps(slotProps: AnyProps, childProps: AnyProps) {
  const overrideProps = { ...childProps };

  for (const propName in childProps) {
    const slotPropValue = slotProps[propName];

    const childPropValue = childProps[propName];

    const isHandler = /^on[A-Z]/.test(propName);

    if (isHandler) {
      if (slotPropValue && childPropValue) {
        overrideProps[propName] = (...args: unknown[]) => {
          childPropValue(...args);

          slotPropValue(...args);
        };
      } else if (slotPropValue) {
        overrideProps[propName] = slotPropValue;
      }
    }

    if (propName === "style") {
      overrideProps[propName] = { ...slotPropValue, ...childPropValue };
    }

    if (propName === "className") {
      overrideProps[propName] = [slotPropValue, childPropValue]

        .filter(Boolean)

        .join(" ");
    }
  }

  return { ...slotProps, ...overrideProps };
}

export default Slot;
