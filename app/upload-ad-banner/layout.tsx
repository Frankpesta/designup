"use client"

import { Check } from "lucide-react"
import { usePathname, useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"

const steps = [
  {
    id: "placement",
    title: "Placement",
    number: 1,
    path: "/upload-ad-banner/placement"
  },
  {
    id: "duration", 
    title: "Duration",
    number: 2,
    path: "/upload-ad-banner/duration"
  },
  {
    id: "upload",
    title: "Upload Ad",
    number: 3,
    path: "/upload-ad-banner/upload"
  }
]

function UploadSidebar() {
  const pathname = usePathname()
  
  const getStepStatus = (stepPath: string) => {
    if (pathname === stepPath) {
      return "active"
    }
    
    // Check if we're on a later step
    const currentStepIndex = steps.findIndex(step => step.path === pathname)
    const stepIndex = steps.findIndex(step => step.path === stepPath)
    
    if (currentStepIndex > stepIndex) {
      return "completed"
    }
    
    return "pending"
  }

  return (
    <div className="w-80 bg-white h-screen flex flex-col border-r border-gray-200">
      {/* Header */}
      <div className="px-8 pt-8 pb-16">
        <Image src="/logow.svg" alt="DesignUpp Logo" width={211} height={50} className="object-cover" />
      </div>

      {/* Steps - Positioned higher up */}
      <div className="px-8 space-y-8">
        {steps.map((step) => {
          const status = getStepStatus(step.path)
          
          return (
            <Link key={step.id} href={step.path} className="block">
              <div className={`flex items-center gap-4 transition-all duration-200 ${
                status === "active" 
                  ? "bg-blue-50 border-l-4 border-blue-600 -ml-8 pl-10 py-4" 
                  : "hover:bg-gray-50 p-2"
              }`}>
                {/* Step indicator */}
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  status === "active"
                    ? "bg-blue-100"
                    : status === "completed"
                    ? "bg-white border-2 border-gray-900"
                    : "bg-white border-2 border-gray-300"
                }`}>
                  {status === "completed" ? (
                    <Check className="w-4 h-4 text-gray-900" />
                  ) : (
                    <span className={`text-sm font-medium ${
                      status === "active" ? "text-blue-600" : "text-gray-500"
                    }`}>
                      {status === "active" ? "" : ""}
                    </span>
                  )}
                </div>
                
                {/* Step title */}
                <span className={`font-medium flex-1 ${
                  status === "active" ? "text-blue-600" : "text-gray-700"
                }`}>
                  {step.title}
                </span>
                
                {/* Step number badge */}
                <div className={`w-7 h-7 rounded-full flex items-center justify-center ${
                  status === "active"
                    ? "bg-blue-600"
                    : "bg-white border-2 border-gray-300"
                }`}>
                  <span className={`text-sm font-medium ${
                    status === "active" ? "text-white" : "text-gray-500"
                  }`}>
                    {step.number}
                  </span>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
      
      {/* Ad Summary section - positioned in center bottom area */}
      <div className="flex-1 flex items-center justify-center px-8">
        <Link href="/upload-ad-banner" className="text-center hover:text-blue-600 transition-colors">
          <h3 className="text-xl font-medium text-gray-800">Ad Summary</h3>
        </Link>
      </div>
    </div>
  )
}

export default function UploadBannerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-white flex">
      <UploadSidebar />
      <div className="flex-1">
        {children}
      </div>
    </div>
  )
}
