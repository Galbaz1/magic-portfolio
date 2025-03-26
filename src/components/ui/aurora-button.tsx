"use client"

import * as React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface AuroraButtonProps {
  className?: string;
  children: React.ReactNode;
  glowClassName?: string;
  href?: string;
  variant?: "primary" | "secondary";
  arrowIcon?: boolean;
}

export function AuroraButton({
  className,
  children,
  glowClassName,
  href,
  variant = "primary",
  arrowIcon = false,
  ...props
}: AuroraButtonProps) {
  const buttonContent = (
    <div className="relative inline-flex">
      {/* Gradient border container */}
      <div
        className={cn(
          "absolute -inset-[2px] rounded-lg opacity-75 blur-lg transition-all duration-300",
          "group-hover:opacity-100 group-hover:blur-xl",
          variant === "primary"
            ? "bg-gradient-to-r from-indigo-400 via-purple-500 to-blue-500"
            : "bg-gradient-to-r from-neutral-400 via-neutral-300 to-neutral-500",
          glowClassName
        )}
      />

      {/* Button */}
      <span
        className={cn(
          "relative rounded-lg px-6 py-3 text-base font-medium",
          "shadow-xl transition-all duration-300",
          "group border flex items-center gap-2 justify-center",
          variant === "primary" 
            ? "bg-slate-950/90 text-white border-indigo-800/40 hover:bg-slate-900/80" 
            : "bg-slate-800/80 text-neutral-200 border-neutral-700 hover:bg-slate-800/60",
          className
        )}
        {...props}
      >
        {children}
        {arrowIcon && (
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 16 16" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="ml-1 transition-transform duration-300 group-hover:translate-x-0.5"
          >
            <path 
              d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z" 
              fill="currentColor"
            />
            <path 
              d="M1.75 8H11" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round"
            />
          </svg>
        )}
      </span>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="group">
        {buttonContent}
      </Link>
    );
  }

  return (
    <button className="group">
      {buttonContent}
    </button>
  );
} 