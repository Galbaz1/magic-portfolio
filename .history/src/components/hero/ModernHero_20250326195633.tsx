"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heading, Flex, Text, Column } from "@/once-ui/components";
import { GradientText } from "./GradientText";

interface ModernHeroProps {
  title: string;
  subtitle: string;
}

export const ModernHero: React.FC<ModernHeroProps> = ({
  title,
  subtitle,
}) => {
  return (
    <Flex 
      position="relative" 
      fillWidth 
      paddingY="l" 
      gap="m" 
      overflow="hidden"
      className="min-h-[250px]"
    >
      {/* Background gradient */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-indigo-800/20 to-blue-800/30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ duration: 1.2 }}
      />

      {/* Animated particles in background (optional decoration) */}
      <motion.div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/10 blur-sm"
            style={{
              width: Math.random() * 8 + 2,
              height: Math.random() * 8 + 2,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 30 - 15, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: Math.random() * 5 + 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>

      <Column 
        maxWidth="s" 
        position="relative" 
        horizontal="center"
        className="z-10 px-6 text-center mx-auto"
      >
        {/* Main heading with slide/fade animation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-4"
        >
          <Heading 
            wrap="balance" 
            variant="display-strong-xl"
            className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent"
          >
            {title}
          </Heading>
        </motion.div>
        
        {/* Subtitle with delayed animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="max-w-2xl mx-auto"
        >
          <Text 
            wrap="balance" 
            onBackground="neutral-weak" 
            variant="heading-default-xl"
            className="leading-relaxed text-center"
          >
            {subtitle}
          </Text>
        </motion.div>
      </Column>
    </Flex>
  );
}; 