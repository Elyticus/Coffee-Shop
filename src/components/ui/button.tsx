import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coffee-400 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-coffee-500 text-white border border-coffee-400/50 hover:bg-coffee-400 hover:shadow-[0_0_30px_rgba(200,147,95,0.45)] hover:scale-105',
        outline:
          'border border-white/30 bg-transparent text-white hover:bg-white/10 hover:border-white/60 hover:scale-105',
        ghost:
          'text-slate-300 hover:text-white hover:bg-white/10',
        link:
          'text-coffee-400 underline-offset-4 hover:underline p-0',
      },
      size: {
        default: 'h-10 px-8 py-2',
        sm:      'h-8 px-5 text-xs',
        lg:      'h-12 px-10 text-base',
        icon:    'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size:    'default',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button ref={ref} className={cn(buttonVariants({ variant, size, className }))} {...props} />
  ),
)
Button.displayName = 'Button'

export { Button, buttonVariants }
