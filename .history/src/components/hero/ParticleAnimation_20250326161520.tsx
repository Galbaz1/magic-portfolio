"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

interface Particle {
  id: number;
  x: string;
  y: string;
  size: number;
  duration: number;
  delay: number;
}

interface ParticleAnimationProps {
  count?: number;
  color?: string;
  minSize?: number;
  maxSize?: number;
  minDuration?: number;
  maxDuration?: number;
  className?: string;
}

export const ParticleAnimation: React.FC<ParticleAnimationProps> = ({
  count = 50,
  color = "#8B5CF6", // Purple by default
  minSize = 2,
  maxSize = 6,
  minDuration = 20,
  maxDuration = 60,
  className,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  
  const generateParticles = (): Particle[] => {
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      x: `${Math.random() * 100}%`,
      y: `${Math.random() * 100}%`,
      size: Math.random() * (maxSize - minSize) + minSize,
      duration: Math.random() * (maxDuration - minDuration) + minDuration,
      delay: Math.random() * 5,
    }));
  };

  const particles = generateParticles();

  return (
    <motion.div
      ref={ref}
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className || ""}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 0.6 : 0 }}
      transition={{ duration: 1 }}
    >
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: particle.x,
            top: particle.y,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: color,
            opacity: 0.2 + Math.random() * 0.3,
          }}
          animate={{
            y: ["0%", `${Math.random() * 30 - 15}%`, "0%"],
            x: [`0%`, `${Math.random() * 30 - 15}%`, `0%`],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </motion.div>
  );
}; 