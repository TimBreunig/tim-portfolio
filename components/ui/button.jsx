import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils"


const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-lg font-semibold tracking-wider ring-offset-white hover:cursor-pointer transition-colors duration-300 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",
  {
    variants: {
      variant: {
        default: "bg-primary-100 text-primary-900 hover:bg-purple-500 hover:text-primary-100",
        light: "bg-purple-500 text-primary-100 hover:bg-purple-500 hover:text-primary-900",
        primary: "bg-linear-to-br from-accent-600 to-accent-400 text-primary-900 hover:text-primary-200",
        outline: "box-border border border-primary-700 text-primary-900 hover:bg-primary-900 hover:border-primary-900 hover:text-primary-300",
      },
      size: {
        default: "h-14 px-6 py-4",
        md: "h-12 px-6 py-3",
        lg: "h-16 px-7 py-4 text-sm uppercase tracking-[2px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)


const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    (<Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props} />)
  );
})

Button.displayName = "Button"

export { Button, buttonVariants }
