"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronDown, Calendar } from "lucide-react"
import { useRouter } from "next/navigation"

const durationOptions = [
  {
    label: "7 Days",
    dateRange: "(16/09/2025-23/09/2025)"
  },
  {
    label: "2 Weeks", 
    dateRange: "(16/09/2025-23/09/2025)"
  },
  {
    label: "1 Month",
    dateRange: "(16/09/2025-23/10/2025)"
  },
  {
    label: "2 Months",
    dateRange: "(16/09/2025-23/09/2025)"
  },
  {
    label: "6 Months",
    dateRange: "(16/09/2025-23/09/2025)"
  }
]

export default function DurationPage() {
  const router = useRouter()
  const [selectedDuration, setSelectedDuration] = useState("")
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const handleDurationSelect = (duration: string) => {
    setSelectedDuration(duration)
    setIsDropdownOpen(false)
  }

  const handleCustomDuration = () => {
    router.push("/upload-ad-banner/duration/custom")
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto p-8">
        {/* Header Section */}
        <div className="mb-12">
          <div className="text-orange-500 text-sm font-medium mb-2">STEP TWO</div>
          <h1 className="text-4xl font-bold text-blue-600 mb-4">Set Ad Duration</h1>
          <p className="text-lg text-gray-600">
            Choose the timeframe for the ad.
          </p>
        </div>

        {/* Duration Selection */}
        <div className="mb-12">
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-gray-900">Select Duration</h2>
            
            {/* Dropdown */}
            <div className="relative">
              <div
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full p-4 bg-white border border-gray-300 rounded-lg cursor-pointer flex items-center justify-between hover:border-gray-400 transition-colors"
              >
                <span className={selectedDuration ? "text-gray-900" : "text-gray-500"}>
                  {selectedDuration || "Choose timeframe"}
                </span>
                <ChevronDown className="w-5 h-5 text-gray-400" />
              </div>
              
              {/* Dropdown Options */}
              {isDropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                  <div className="p-4 border-b border-gray-200">
                    <h3 className="font-bold text-gray-900 mb-3">Select Duration</h3>
                    {durationOptions.map((option) => (
                      <div
                        key={option.label}
                        onClick={() => handleDurationSelect(option.label)}
                        className="p-3 hover:bg-gray-50 cursor-pointer rounded-lg"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-gray-900">{option.label}</span>
                          <span className="text-sm text-gray-500">{option.dateRange}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Custom Duration Button */}
                  <div className="p-4">
                    <Button
                      onClick={handleCustomDuration}
                      className="w-full flex items-center justify-center gap-2 bg-transparent border border-gray-300 text-blue-600 hover:bg-blue-50 rounded-lg py-3"
                    >
                      <Calendar className="w-4 h-4" />
                      Choose Custom
                    </Button>
                  </div>
                </div>
              )}
            </div>
            
            {/* Note */}
            <p className="text-sm text-gray-500">
              Ads unpublish automatically upon expiry.
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-4 justify-end">
          <Button
            variant="ghost"
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800 bg-transparent hover:bg-transparent p-0"
          >
            <ChevronLeft className="w-4 h-4" />
            Back
          </Button>
          
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium">
            Next Step
          </Button>
        </div>
      </div>
    </div>
  )
}
