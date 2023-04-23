import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { HTMLAttributes, forwardRef } from "react";

export const headingVarants = cva("leading-none  w-fit text-center", {
  variants: {
    size: {
      default: "text-2xl font-bold",
      sm: "text-xl font-semibold",
      lg: "text-3xl font-bold",
    },
    variant: {
      default: "text-slate-900 dark:text-slate-300",
      invert: "text-slate-50 dark:text-slate-700",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

interface HeadingProps
  extends HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVarants> {}

const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, size, children, variant, ...props }, ref) => {
    return (
      <h2
        ref={ref}
        {...props}
        className={cn(headingVarants({ size, className, variant }))}
      >
        {children}
      </h2>
    );
  }
);

Heading.displayName = "Heading";

export default Heading;
