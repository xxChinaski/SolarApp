import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { HTMLAttributes, forwardRef } from "react";

export const inputVariants = cva(
  "border-2 border-slate-300 px-3 w-full focus:outline-none focus:border-sky-500 bg-slate-50 dark:bg-slate-900",
  {
    variants: {
      size: {
        default: "text-base",
        sm: "text-sm",
        lg: "text-lg",
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
  }
);

interface InputProps
  extends HTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  type: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, size, type, children, variant, ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        {...props}
        className={cn(inputVariants({ size, className, variant }))}
      >
        {children}
      </input>
    );
  }
);

Input.displayName = "Input";

export default Input;
