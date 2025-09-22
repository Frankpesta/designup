import React from "react"
import { cn } from "@/lib/utils"

import Image from "next/image"

interface AuthLayoutProps {
  children: React.ReactNode
  className?: string
}

export function AuthLayout({ children, className }: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex">
      {/* Left Column - Marketing/Branding */}
      <div className="hidden lg:flex lg:w-1/2 auth-gradient relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 auth-pattern opacity-40"></div>
        
        {/* Content */}
        <div className="relative z-10 flex flex-col justify-between p-12">
          <div className="space-y-8">
            <h1 className="text-5xl font-bold leading-tight font-manrope">
              <span className="text-white">Effortless Control.</span>
              <br />
              <span className="text-gray-300">Elegant Oversight.</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-md leading-relaxed font-manrope">
              Manage every banner, track performance, and stay on top of your platform from a single, beautifully crafted dashboard.
            </p>
          </div>
          
          <Image src="/logo.svg" alt="DesignUpp Logo" width={211} height={50} className="object-cover" />
        </div>
      </div>

      {/* Right Column - Auth Form */}
      <div className={cn("flex-1 lg:w-1/2 flex items-center justify-center p-8 bg-white", className)}>
        <div className="w-full max-w-md">
          {children}
        </div>
      </div>
    </div>
  )
}
