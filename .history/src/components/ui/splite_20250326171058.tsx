'use client'

import React, { Suspense } from 'react'
import Image from 'next/image'

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  // This is a simplified version that renders a placeholder 3D scene visualization
  // instead of using the @splinetool/runtime which is causing dependency issues
  return (
    <div className={`relative w-full h-full ${className || ''}`}>
      {/* Dark themed browser mockup for Once UI */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 flex flex-col">
        {/* Browser Controls */}
        <div className="h-7 bg-black/30 flex items-center px-4 space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
          <div className="flex-1 mx-4 h-5 rounded bg-slate-700" />
        </div>
        
        {/* Content Area */}
        <div className="flex-1 p-4 flex items-center justify-center">
          <div className="relative group">
            <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-indigo-500 to-blue-500 opacity-75 blur group-hover:opacity-100 transition duration-200" />
            <div className="relative px-5 py-4 bg-slate-800 rounded-lg flex flex-col items-center">
              <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-blue-400">Once UI</div>
              <div className="text-sm text-slate-400 mt-1">Customizable Design System</div>
              <div className="mt-3 flex gap-4">
                <div className="w-16 h-6 rounded bg-indigo-500/50" />
                <div className="w-16 h-6 rounded bg-blue-500/50" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 