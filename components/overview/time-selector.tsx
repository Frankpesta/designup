"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

const timeRanges = [
  { label: "Today", value: "today" },
  { label: "Last 7 Days", value: "7days" },
  { label: "Last 30 Days", value: "30days" },
  { label: "All Time", value: "all" },
]

interface TimeSelectorProps {
  className?: string
}

export function TimeSelector({ className }: TimeSelectorProps) {
  const [selectedRange, setSelectedRange] = useState("30days")

  return (
    <div className={cn("flex items-center space-x-1", className)}>
      {timeRanges.map((range) => (
        <button
          key={range.value}
          onClick={() => setSelectedRange(range.value)}
          className={cn(
            "text-sm font-medium rounded-md transition-colors px-4 py-2",
            selectedRange === range.value
              ? "text-primary shadow-sm border-none px-4 py-2 bg-blue-50"
              : "text-black-400 hover:text-black-300 px-4 py-2"
          )}
        >
          {range.label}
        </button>
      ))}
    </div>
  )
}
