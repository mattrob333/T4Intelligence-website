import Link from "next/link"
import { CustomButton, CustomButtonProps } from "./custom-button"

interface LinkButtonProps extends CustomButtonProps {
  href: string
}

export function LinkButton({ href, children, ...buttonProps }: LinkButtonProps) {
  return (
    <Link href={href}>
      <CustomButton {...buttonProps}>{children}</CustomButton>
    </Link>
  )
}