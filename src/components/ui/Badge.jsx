import * as React from "react";
import { cva } from "class-variance-authority";
import PropTypes from "prop-types";
import { cn } from "@/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-(--color-accent) text-(--color-bg-primary) hover:opacity-90",
        secondary:
          "border-transparent bg-(--color-bg-secondary) text-(--color-text-primary) hover:bg-(--color-bg-tertiary)",
        success:
          "border-transparent bg-emerald-500 text-white hover:bg-emerald-600",
        warning:
          "border-transparent bg-amber-500 text-white hover:bg-amber-600",
        danger:
          "border-transparent bg-red-500 text-white hover:bg-red-600",
        info: "border-transparent bg-blue-500 text-white hover:bg-blue-600",
        outline:
          "border-(--color-border) text-(--color-text-secondary) hover:bg-(--color-surface)",
        gradient:
          "border-0 bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-600",
      },
      size: {
        sm: "px-2 py-0.5 text-[10px]",
        default: "px-2.5 py-0.5 text-xs",
        lg: "px-3 py-1 text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Badge = React.forwardRef(
  ({ className, variant, size, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(badgeVariants({ variant, size }), className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Badge.displayName = "Badge";

Badge.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf([
    "default",
    "secondary",
    "success",
    "warning",
    "danger",
    "info",
    "outline",
    "gradient",
  ]),
  size: PropTypes.oneOf(["sm", "default", "lg"]),
  children: PropTypes.node,
};

export default Badge;
