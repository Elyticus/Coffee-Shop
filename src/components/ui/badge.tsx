import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/utils'

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors',
  {
    variants: {
      variant: {
        default:     'border-coffee-500/40 bg-coffee-500/20 text-coffee-300',
        secondary:   'border-white/20 bg-white/10 text-slate-300',
        destructive: 'border-red-500/40 bg-red-500/20 text-red-400',
        outline:     'border-white/20 text-slate-300',
        new:         'border-cyan-400/40 bg-cyan-400/15 text-cyan-300',
      },
    },
    defaultVariants: { variant: 'default' },
  },
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge, badgeVariants }
