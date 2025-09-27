"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, Home, Circle } from "lucide-react"
import { useRouter } from "next/navigation"

const placementOptions = [
  {
    id: "homepage-top",
    title: "Home Page",
    subtitle: "Top-Large",
    icon: Home,
    isSelected: true
  },
  {
    id: "homepage-middle",
    title: "",
    subtitle: "",
    icon: Home,
    isSelected: false
  },
  {
    id: "homepage-bottom",
    title: "",
    subtitle: "",
    icon: Home,
    isSelected: false
  },
  {
    id: "sidebar-top",
    title: "",
    subtitle: "",
    icon: Circle,
    isSelected: false
  },
  {
    id: "sidebar-middle",
    title: "",
    subtitle: "",
    icon: Circle,
    isSelected: false
  },
  {
    id: "sidebar-bottom",
    title: "",
    subtitle: "",
    icon: Circle,
    isSelected: false
  }
]

export default function PlacementPage() {
  const [selectedOption, setSelectedOption] = useState("homepage-top")
  const router = useRouter()
  const handleOptionSelect = (optionId: string) => {
    setSelectedOption(optionId)
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto p-8">
        {/* Header Section */}
        <div className="mb-12">
          <div className="text-orange-500 text-sm font-medium mb-2">STEP ONE</div>
          <h1 className="text-4xl font-bold text-blue-600 mb-4">Choose Ad Placement</h1>
          <p className="text-lg text-gray-600">
            Select a slot. Premium placements like homepage top cost more and get higher visibility.
          </p>
        </div>

        {/* Placement Grid */}
        <div className="mb-12">
          <div className="grid grid-cols-3 gap-6">
            {placementOptions.map((option) => {
              const IconComponent = option.icon
              const isSelected = selectedOption === option.id
              
              return (
                <div
                  key={option.id}
                  onClick={() => handleOptionSelect(option.id)}
                  className={`relative p-6 rounded-lg cursor-pointer transition-all duration-200 ${
                    isSelected
                      ? "bg-white border-3 border-blue-500"
                      : "bg-white border-3 border-transparent hover:border-gray-600"
                  }`}
                >
                  <div className="flex flex-col items-center text-center">
                    <IconComponent className="w-8 h-8 text-gray-900 mb-4" />
                    {option.title && (
                      <h3 className="text-lg font-medium text-gray-900 mb-1">
                        {option.title}
                      </h3>
                    )}
                    {option.subtitle && (
                      <p className="text-sm text-gray-900">
                        {option.subtitle}
                      </p>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-end gap-4">
          <Button
            onClick={() => router.back()}
            className="flex items-center gap-4 bg-gray-400 hover:bg-gray-500 text-white px-10 py-6 rounded-lg font-medium"
          >
            <ChevronLeft className="w-4 h-4" />
            Back
          </Button>
          
          <Button 
            onClick={() => router.push("/upload-ad-banner/duration")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-lg font-medium"
          >
            Next Step
          </Button>
        </div>
      </div>
    </div>
  )
}
