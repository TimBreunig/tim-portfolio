import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils"


const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full ring-offset-white hover:cursor-pointer transition-colors duration-300 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",
  {
    variants: {
      variant: {
        default: "bg-primary-100 text-primary-900 hover:bg-purple-500 hover:text-primary-100",
        primary: "bg-purple-500 text-primary-100 hover:bg-purple-500 hover:text-primary-900",
        light: "text-primary-100 hover:text-purple-500",
        icon: "",
      },
      size: {
        default: "px-7 py-4 font-semibold text-xl",
        lg: "px-6 xl:px-8 py-4 xl:py-5 font-semibold text-xl xl:text-2xl",
        xl: "px-8 py-5 font-medium text-2xl xl:text-3xl",
        icon: "p-2",
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
