'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  children: React.ReactNode
}

export function Card({ className, children, ...props }: CardProps) {
  return (
    <div 
      className={cn(
        "rounded-lg border border-border bg-card shadow-sm overflow-hidden", 
        className
      )} 
      {...props}
    >
      {children}
    </div>
  )
} 