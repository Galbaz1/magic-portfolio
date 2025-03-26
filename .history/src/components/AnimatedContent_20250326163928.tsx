"use client";

import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { person } from "@/app/resources/content";

export function AnimatedContent() {
  return (
    <ContainerScroll
      titleComponent={
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white text-center mb-6">
            Nice to Meet You
          </h1>
          <p className="text-lg md:text-xl text-neutral-300 text-center max-w-3xl mb-8">
            I am Fausto, AI Engineer at Step Into Liquid and Community Lead of the AI Builders Club Amsterdam.
          </p>
          <Link 
            href="/about" 
            className="flex items-center gap-2 bg-white text-black px-6 py-2 rounded-full text-base font-medium shadow-md hover:shadow-xl transition"
          >
            {person.avatar && (
              <div className="w-6 h-6 rounded-full overflow-hidden">
                <Image 
                  src={person.avatar} 
                  alt="Profile picture" 
                  width={24} 
                  height={24}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            About me
          </Link>
        </div>
      }
    >
      <div className="h-full w-full flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative w-full h-full"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-800/20 via-violet-800/20 to-blue-800/30 rounded-xl" />
          <div className="relative h-full w-full flex flex-col items-center justify-center p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
              {contentBlocks.map((block, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="p-6 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10 flex flex-col"
                >
                  <div className="text-2xl font-semibold mb-2 text-white">{block.title}</div>
                  <p className="text-neutral-300">{block.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </ContainerScroll>
  );
}

const contentBlocks = [
  {
    title: "AI Engineering",
    description: "Specializing in building AI-powered applications and tools for businesses and individuals."
  },
  {
    title: "Community Building",
    description: "Leading the AI Builders Club Amsterdam, connecting AI enthusiasts and professionals."
  },
  {
    title: "Innovation",
    description: "Constantly exploring new technologies and methodologies in the AI space."
  },
  {
    title: "Collaboration",
    description: "Working with teams to implement AI solutions that drive real business value."
  },
  {
    title: "Education",
    description: "Sharing knowledge and insights about AI and machine learning with the community."
  },
  {
    title: "Problem Solving",
    description: "Using AI to tackle complex challenges and create innovative solutions."
  }
]; 