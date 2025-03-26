"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button as OnceButton } from "@/once-ui/components";
import Link from "next/link";

interface GlowButtonProps {
  children: React.ReactNode;
  href: string;
  className?: string;
  variant?: "primary" | "secondary";
  size?: "s" | "m" | "l";
  arrowIcon?: boolean;
}

export const GlowButton: React.FC<GlowButtonProps> = ({
  children,
  href,
  className = "",
  variant = "primary",
  size = "m",
  arrowIcon = true,
}) => {
  return (
    <motion.div
      className="relative group"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      {/* Glow effect */}
      <motion.div 
        className={`absolute -inset-0.5 rounded-lg opacity-0 group-hover:opacity-75 transition duration-300
          ${variant === "primary" 
            ? "bg-gradient-to-r from-purple-600 to-blue-500" 
            : "bg-gradient-to-r from-gray-500 to-gray-600"
          } blur-md`}
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 0.7 }}
        transition={{ duration: 0.2 }}
      />
      
      {/* Button */}
      <div className="relative">
        <OnceButton
          href={href}
          variant={variant}
          size={size}
          arrowIcon={arrowIcon}
          className={`relative ${className}`}
          data-border="rounded"
        >
          {children}
        </OnceButton>
      </div>
    </motion.div>
  );
}; 