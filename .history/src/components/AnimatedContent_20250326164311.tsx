"use client";

import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Link from "next/link";
import Image from "next/image";
import { person } from "@/app/resources/content";

export function AnimatedContent() {
  return (
    <div className="flex flex-col overflow-hidden pb-[300px]">
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
        {/* Using a card background with embedded content blocks */}
        <div className="relative w-full h-full">
          {/* Background with gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 via-purple-900/30 to-blue-900/30 rounded-xl" />
          
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:30px_30px] rounded-xl" />
          
          {/* Dashboard-like interface that will be shown in the scrolling card */}
          <div className="relative w-full h-full flex flex-col p-6 md:p-8">
            {/* Header */}
            <div className="flex justify-between items-center mb-8 bg-white/10 p-4 rounded-lg backdrop-blur-sm border border-white/5">
              <div className="text-white font-semibold text-xl">AI Projects Dashboard</div>
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
            </div>
            
            {/* Main content */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 flex-grow">
              {contentBlocks.map((block, index) => (
                <div
                  key={index}
                  className="p-5 rounded-lg bg-white/10 backdrop-blur-sm border border-white/5 flex flex-col h-full hover:bg-white/20 transition-colors duration-300"
                >
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center text-white mr-3">
                      {index + 1}
                    </div>
                    <div className="text-xl font-semibold text-white">{block.title}</div>
                  </div>
                  <p className="text-neutral-300 text-sm">{block.description}</p>
                  <div className="mt-auto pt-3 flex justify-between items-center">
                    <div className="text-xs text-indigo-300">Updated recently</div>
                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Bottom stats */}
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Projects", value: "12", trend: "+3", up: true },
                { label: "Clients", value: "8", trend: "+2", up: true },
                { label: "Success Rate", value: "94%", trend: "+6%", up: true },
                { label: "AI Models", value: "5+", trend: "New", up: null }
              ].map((stat, index) => (
                <div key={index} className="bg-white/10 p-4 rounded-lg backdrop-blur-sm text-center border border-white/5 hover:bg-white/20 transition-colors duration-300">
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-neutral-300 text-sm mb-1">{stat.label}</div>
                  {stat.trend && (
                    <div className={`text-xs ${stat.up ? 'text-green-400' : stat.up === false ? 'text-red-400' : 'text-blue-400'}`}>
                      {stat.trend}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </ContainerScroll>
    </div>
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