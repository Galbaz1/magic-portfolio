'use client'

import React from 'react'
import { SplineScene } from '@/components/ui/splite'
import { Card } from '@/components/ui/card'
import { Spotlight } from '@/components/ui/spotlight'
import Link from 'next/link'
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

        {/* Right content - 3D scene or image */}
        <div className="flex-1 relative min-h-[300px] md:min-h-0">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </Card>
  )
} 