import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-[#3b82f6] text-white hover:bg-[#2563eb] shadow-sm shadow-blue-500/10",
        black: "bg-black text-white hover:bg-black/90",
        white: "bg-white border border-gray-200 text-[#151C62] hover:bg-gray-50",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-gray-200 bg-white hover:bg-gray-50 text-[#151C62]",
        secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",
        ghost: "hover:bg-gray-50 hover:text-[#151C62] text-gray-600",
        link: "text-[#3b82f6] underline-offset-4 hover:underline",
        cta: "bg-[#3b82f6] text-white hover:bg-[#2563eb] shadow-md shadow-blue-500/10 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#3b82f6]",
        ctaSecondary: "bg-white border border-gray-200 text-[#151C62] hover:bg-gray-50 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#3b82f6]",
        accent: "bg-[#3b82f6] text-white hover:bg-[#2563eb] shadow-md shadow-blue-500/10",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-12 rounded-lg px-8 text-base",
        xl: "h-14 rounded-lg px-10 text-base font-semibold",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    const isPrimary = variant === "default" || variant === "cta" || variant === "accent" || !variant;

    if (isPrimary) {
      return (
        <Comp
          className={cn(buttonVariants({ variant, size, className }), "relative overflow-hidden")}
          ref={ref}
          {...props}
        >
          <span className="relative z-20 flex items-center justify-center gap-2">
            {children}
          </span>
        </Comp>
      );
    }

    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props}>
        {children}
      </Comp>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
