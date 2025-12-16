import { ButtonHTMLAttributes, forwardRef } from 'react'
import { Loader2 } from 'lucide-react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'link'
  size?: 'lg' | 'md' | 'sm'
  isLoading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      className = '',
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'

    const variants = {
      primary:
        'bg-accent text-white hover:bg-accent-hover active:scale-[0.98] rounded-lg',
      secondary:
        'bg-surface text-text-primary border border-border hover:bg-gray-50 active:scale-[0.98] rounded-lg',
      ghost:
        'bg-transparent text-text-secondary hover:bg-gray-100 hover:text-text-primary rounded-lg',
      link: 'bg-transparent text-accent hover:underline p-0',
    }

    const sizes = {
      lg: 'px-6 py-3 text-base gap-2',
      md: 'px-4 py-2 text-sm gap-2',
      sm: 'px-3 py-1.5 text-xs gap-1.5',
    }

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${variant !== 'link' ? sizes[size] : ''} ${className}`}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : (
          <>
            {leftIcon && <span className="flex-shrink-0">{leftIcon}</span>}
            {children}
            {rightIcon && <span className="flex-shrink-0">{rightIcon}</span>}
          </>
        )}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
