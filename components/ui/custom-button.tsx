"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-button text-button-text uppercase tracking-[0.05em] transition-all duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-accent-gold text-secondary-black hover:translate-y-[-2px] hover:shadow-[0_10px_30px_rgba(255,215,0,0.3)]",
        secondary:
          "bg-transparent border-2 border-primary-green text-primary-green hover:bg-primary-green hover:text-background",
        default: "bg-primary text-primary-foreground hover:bg-primary/90", // Fallback, not specified
      },
      size: {
        default: "px-8 py-4", // Primary CTA padding: 16px 32px
        secondary: "px-[30px] py-[14px]", // Secondary CTA padding
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const CustomButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    const MotionComp = motion(Comp)

    return (
      <MotionComp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        whileHover={{ y: variant === "primary" ? -2 : 0 }}
        transition={{ type: "spring", stiffness: 300 }}
        {...props}
      />
    )
  },
)
CustomButton.displayName = "CustomButton"

export { CustomButton, buttonVariants }
