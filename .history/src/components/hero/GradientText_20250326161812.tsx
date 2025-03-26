"use client";

import React from "react";
import { motion } from "framer-motion";

interface GradientTextProps {
  children: React.ReactNode;
  fromColor?: string;
  toColor?: string;
  className?: string;
  animate?: boolean;
}

export const GradientText: React.FC<GradientTextProps> = ({
  children,
  fromColor = "from-purple-600",
  toColor = "to-blue-500",
  className = "",
  animate = false,
}) => {
  const baseClasses = `bg-clip-text text-transparent bg-gradient-to-r ${fromColor} ${toColor} ${className}`;
  
  return animate ? (
    <motion.span
      className={baseClasses}
      initial={{ backgroundPosition: "0% 50%" }}
      animate={{ 
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      }}
      transition={{ 
        duration: 15, 
        repeat: Infinity,
        ease: "linear"
      }}
      style={{
        backgroundSize: "200% auto"
      }}
    >
      {children}
    </motion.span>
  ) : (
    <span className={baseClasses}>
      {children}
    </span>
  );
}; 