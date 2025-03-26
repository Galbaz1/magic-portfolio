'use client'

import { cn } from '@/lib/utils'

interface SpotlightProps {
  className?: string
  fill?: string
}

export function Spotlight({ className, fill = "white" }: SpotlightProps) {
  return (
    <svg
      className={cn(
        "absolute z-0 opacity-20 blur-3xl", 
        className
      )}
      width="400"
      height="400"
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="200" cy="200" r="200" fill={fill} />
    </svg>
  )
} 