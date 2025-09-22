import React from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
  variant?: "default" | "compact"
}

export function Logo({ className, variant = "default" }: LogoProps) {
  if (variant === "compact") {
    return (
      <div className={cn("flex items-center gap-2", className)}>
        <Image
          src="/logo.svg"
          alt="DesignUpp Logo"
          width={100}
          height={100}
          className="w-8 h-8"
        />
        <span className="text-lg font-semibold text-white">DesignUpp</span>
      </div>
    )
  }

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <Image
        src="/logo.svg"
        alt="DesignUpp Logo"
        width={100}
        height={100}
        className="w-10 h-10"
      />
      
    </div>
  )
}
