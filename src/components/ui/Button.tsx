import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { HTMLAttributes, forwardRef } from "react";
import { Loader2 } from "lucide-react";

export const buttonVariants = cva(
  "inline-flex items-center justify-center flex-grow-0 rounded-md cursor-pointer transition-all focus:outline-none disabled:opacity-50 disabled:cursor-inherit disabled:pointer-events-none leading-none",
  {
    variants: {
      size: {
        default: "text-base sm:text-large px-6 py-3",
        sm: "text-sm sm:text-sm px-4 py-2",
        lg: "text-lg sm:text-xl px-8 py-4 flex-row-reverse",
      },
      variant: {
        default:
          "bg-white/0 dark:bg-slate-900/0 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-slate-50",
        invert:
          "bg-slate-900/0 dark:bg-slate-50/0 hover:bg-slate-700 dark:hover:bg-slate-200 text-slate-50 dark:text-slate-900",
        outline:
          "bg-slate-50 hover:bg-sky-100 text-sky-500 border border-sky-500",
        blue: "bg-sky-600 hover:bg-sky-500 text-white",
        red: "bg-red-600 hover:bg-red-500",
        green: "bg-green-600 hover:bg-green-500",
      },
      animate: {
        none: "",
        click: "active:scale-95",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      animate: "click",
    },
  }
);

interface ButtonProps
  extends HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, size, children, variant, animate, isLoading, ...props },
    ref
  ) => {
    return (
      <button
        ref={ref}
        {...props}
        className={cn(buttonVariants({ size, className, variant, animate }))}
      >
        {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
