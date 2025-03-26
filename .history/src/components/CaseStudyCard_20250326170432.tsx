'use client'

import React from 'react'
import { Card } from '@/components/ui/card'
import { Spotlight } from '@/components/ui/spotlight'
import Link from 'next/link'
import Image from 'next/image'
import { Arrow } from '@/once-ui/components'

export function CaseStudyCard() {
  return (
    <Card className="w-full bg-black/[0.96] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      
      <div className="flex flex-col md:flex-row h-full">
        {/* Left content */}
        <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Building Once UI, a Customizable Design System
          </h1>
          <p className="mt-4 text-neutral-300 max-w-lg">
            Development of a flexible and highly customizable design system using Next.js for front-end 
            and Figma for design collaboration.
          </p>
          <Link 
            href="/work/once-ui" 
            className="mt-6 inline-flex items-center text-white/80 hover:text-white transition-colors"
          >
            <span>Read case study</span>
            <Arrow className="ml-2 w-4 h-4" />
          </Link>
        </div>

        {/* Right content - Using a simple image instead of Spline */}
        <div className="flex-1 relative min-h-[300px] md:min-h-0 flex items-center justify-center bg-gradient-to-br from-indigo-900/50 to-purple-900/50 p-8">
          <div className="relative w-full h-full max-h-[300px] rounded-md overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center text-white/70 backdrop-blur-sm">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="80" 
                height="80" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="opacity-60"
              >
                <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
                <path d="M3 16V8h18v8" />
                <path d="M12 6v9" />
                <path d="m9 9 3-3 3 3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
} 