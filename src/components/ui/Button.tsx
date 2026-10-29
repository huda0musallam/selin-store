import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router'
import type { LinkProps } from 'react-router'
import './Button.css'

type ButtonVariant = 'primary' | 'secondary' | 'text'
type ButtonSize = 'md' | 'lg'

interface ButtonStyleProps {
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
  children: ReactNode
}

function buttonClassName({
  variant = 'primary',
  size = 'md',
  className,
}: Omit<ButtonStyleProps, 'children'>) {
  return ['button', `button--${variant}`, `button--${size}`, className]
    .filter(Boolean)
    .join(' ')
}

type ButtonProps = ButtonStyleProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'>

/** A <button> for actions on the current page. */
export function Button({
  variant,
  size,
  className,
  type = 'button',
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      type={type}
      className={buttonClassName({ variant, size, className })}
      {...rest}
    >
      {children}
    </button>
  )
}

type ButtonLinkProps = ButtonStyleProps & Omit<LinkProps, 'className' | 'children'>

/** A link that looks like a button, for navigating to another page. */
export function ButtonLink({
  variant,
  size,
  className,
  children,
  ...rest
}: ButtonLinkProps) {
  return (
    <Link className={buttonClassName({ variant, size, className })} {...rest}>
      {children}
    </Link>
  )
}
