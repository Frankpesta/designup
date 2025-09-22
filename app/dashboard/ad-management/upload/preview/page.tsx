"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDownToLine, ShoppingCart } from "lucide-react"
import { useRouter } from "next/navigation"

export default function BannerPreviewPage() {
  const router = useRouter()
  const [isUploading, setIsUploading] = useState(false)

  const handleCancel = () => {
    router.back()
  }

  const handleUpload = () => {
    setIsUploading(true)
    // Simulate upload process
    setTimeout(() => {
      setIsUploading(false)
      router.push("/dashboard/ad-management")
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto p-6">
        <div className="space-y-8">
          {/* Header */}
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold text-gray-900">Preview Banner</h1>
          </div>

          {/* Upload Banner Section - Top Center (Keep the same as upload page) */}
          <div className="flex justify-center">
            <div className="flex items-center gap-4">
              {/* Left - Upload Icon */}
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <ArrowDownToLine className="w-8 h-8 text-blue-600" />
              </div>
              
              {/* Dashed Line */}
              <div className="w-16 h-0.5 bg-gray-300 border-dashed border-t-2"></div>
              
              {/* Right - Document Icon */}
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center border-2 border-gray-300">
                <div className="w-8 h-8 bg-gray-400 rounded flex items-center justify-center">
                  <ArrowDownToLine className="w-4 h-4 text-white rotate-180" />
                </div>
              </div>
            </div>
          </div>

          {/* Banner Preview Section */}
          <div className="bg-white rounded-lg border border-gray-200 p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Banner Preview</h2>
            
            {/* Banner Ad Display */}
            <div className="bg-gradient-to-r from-amber-100 to-orange-200 rounded-lg p-8 relative overflow-hidden">
              {/* Background Shapes */}
              <div className="absolute inset-0">
                {/* Top semi-circle */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-32 bg-amber-50 rounded-full -translate-y-16"></div>
                {/* Bottom orange strip */}
                <div className="absolute bottom-0 left-0 right-0 h-8 bg-orange-500"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 flex items-center justify-between">
                {/* Left Side - Text and Icon */}
                <div className="flex flex-col items-start">
                  {/* Shopping Cart Icon */}
                  <div className="w-8 h-8 bg-amber-800 rounded flex items-center justify-center mb-4">
                    <ShoppingCart className="w-4 h-4 text-white" />
                  </div>
                  
                  {/* Text Content */}
                  <div className="text-amber-900">
                    <p className="text-sm opacity-80 mb-2">Made with real wood</p>
                    <div className="text-2xl font-bold leading-tight">
                      <div>HOME</div>
                      <div>FURNITURE</div>
                    </div>
                  </div>
                </div>

                {/* Center - Sofa Image and Button */}
                <div className="flex flex-col items-center">
                  {/* SHOP NOW Button */}
                  <Button className="bg-amber-800 hover:bg-amber-900 text-white px-6 py-2 rounded-lg mb-4 font-semibold">
                    SHOP NOW
                  </Button>
                  
                  {/* Sofa Placeholder */}
                  <div className="w-32 h-24 bg-yellow-400 rounded-lg flex items-center justify-center">
                    <div className="text-amber-900 font-bold text-sm">Sofa Image</div>
                  </div>
                </div>

                {/* Right Side - Discount Badge */}
                <div className="flex flex-col items-end">
                  {/* Discount Circle */}
                  <div className="w-24 h-24 bg-amber-50 rounded-full flex flex-col items-center justify-center mb-4">
                    <div className="text-amber-900 text-center">
                      <div className="text-xs">up to</div>
                      <div className="text-2xl font-bold">30%</div>
                      <div className="text-sm font-semibold">OFF</div>
                    </div>
                  </div>
                  
                  {/* Tagline */}
                  <div className="text-amber-900 text-sm font-medium text-right max-w-32">
                    We are the solution for your Home
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end space-x-4 mt-8">
              <Button
                variant="outline"
                onClick={handleCancel}
                className="px-6 py-2 border-gray-300 text-gray-700 rounded-lg bg-gray-100"
                disabled={isUploading}
              >
                Cancel
              </Button>
              <Button
                onClick={handleUpload}
                className="px-6 py-2 bg-[#2B6CB0] text-white rounded-lg hover:bg-blue-700"
                disabled={isUploading}
              >
                {isUploading ? "Uploading..." : "Upload"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
