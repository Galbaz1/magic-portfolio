'use client'

import React from 'react'
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import { Arrow } from '@/once-ui/components'

export function CaseStudyCard() {
  return (
    <Card className="w-full bg-black/[0.96] relative overflow-hidden mt-0">      
      <div className="flex flex-col md:flex-row h-full">
        {/* Left content */}
        <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
        </div>

        {/* Right content - Content placeholder */}
        <div className="flex-1 relative min-h-[300px] md:min-h-0">
          {/* Removed SplineScene */}
        </div>
      </div>
    </Card>
  )
} 