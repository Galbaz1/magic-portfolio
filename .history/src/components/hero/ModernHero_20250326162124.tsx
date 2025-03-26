"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heading, Flex, Text, Column } from "@/once-ui/components";
import { GradientText } from "./GradientText";
import { GlowButton } from "./GlowButton";
import Link from "next/link";

interface ModernHeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaHref: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
}

export const ModernHero: React.FC<ModernHeroProps> = ({
  title,
  subtitle,
  ctaText,
  ctaHref,
  secondaryCtaText,
  secondaryCtaHref,
}) => {
  return (
    <Flex 
      position="relative" 
      fillWidth 
      paddingY="xl" 
      gap="l" 
      overflow="hidden"
      className="h-[85vh] min-h-[600px]"
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
        className="z-10 px-6 text-center"
      >
        {/* Main heading with slide/fade animation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6"
        >
          <Heading wrap="balance" variant="display-strong-xl">
            <GradientText 
              fromColor="from-indigo-400" 
              toColor="to-purple-600" 
              animate
            >
              {title}
            </GradientText>
          </Heading>
        </motion.div>
        
        {/* Subtitle with delayed animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mb-8"
        >
          <Text 
            wrap="balance" 
            onBackground="neutral-weak" 
            variant="heading-default-xl"
            className="leading-relaxed"
          >
            {subtitle}
          </Text>
        </motion.div>
        
        {/* CTA buttons with staggered animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          {/* Primary CTA */}
          <GlowButton
            href={ctaHref}
            variant="primary"
            size="l"
            arrowIcon
          >
            {ctaText}
          </GlowButton>
          
          {/* Secondary CTA (if provided) */}
          {secondaryCtaText && secondaryCtaHref && (
            <GlowButton
              href={secondaryCtaHref}
              variant="secondary"
              size="l"
              arrowIcon={false}
            >
              {secondaryCtaText}
            </GlowButton>
          )}
        </motion.div>
        
        {/* Optional decorative element */}
        <motion.div
          className="absolute -bottom-24 left-1/2 h-40 w-1 -translate-x-1/2 bg-gradient-to-b from-purple-500/50 to-transparent"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 160, opacity: 0.7 }}
          transition={{ duration: 1, delay: 1, ease: "easeOut" }}
        />
      </Column>
    </Flex>
  );
}; 