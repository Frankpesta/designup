"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, Edit, ExternalLink, ShoppingCart } from "lucide-react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { EditSuccessModal, EditFailureModal } from "@/components/modals"

export default function UploadBannerPage() {
  const router = useRouter()
  const [showUploadSuccess, setShowUploadSuccess] = useState(false)
  const [showUploadFailure, setShowUploadFailure] = useState(false)
  const [isUploading, setIsUploading] = useState(false)

  const handleUpload = async () => {
    setIsUploading(true)
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // Simulate random success/failure for demo
      const isSuccess = Math.random() > 0.3 // 70% success rate
      
      if (isSuccess) {
        setShowUploadSuccess(true)
      } else {
        setShowUploadFailure(true)
      }
    } catch (error) {
      setShowUploadFailure(true)
    } finally {
      setIsUploading(false)
    }
  }

  const handleSuccessClose = () => {
    setShowUploadSuccess(false)
    router.push("/dashboard/ad-management")
  }

  const handleFailureClose = () => {
    setShowUploadFailure(false)
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto p-8">
        {/* Header Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-blue-600 mb-4">Ad Summary</h1>
          <p className="text-lg text-gray-600">
            Upload the ad and assign it to advertiser.
          </p>
        </div>

        {/* Banner Preview */}
        <div className="mb-12">
          <div className="relative w-full h-48 bg-orange-100 rounded-lg overflow-hidden">
            <Image
              src="/banner-img.png"
              alt="Banner Preview"
              fill
              className="object-cover"
            />
            
            {/* Banner Content Overlay */}
            <div className="absolute inset-0 flex items-center justify-between p-6">
              {/* Left Side */}
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 border-2 border-white rounded-sm flex items-center justify-center">
                  <ShoppingCart className="w-4 h-4 text-white" />
                </div>
                <div className="text-white">
                  <p className="text-sm opacity-90 mb-1">Made with real wood</p>
                  <h3 className="text-lg font-bold">HOME FURNITURE</h3>
                </div>
              </div>
              
              {/* Center */}
              <div className="flex-1 flex justify-center">
                <div className="bg-orange-500 text-white px-6 py-2 rounded-lg font-bold">
                  SHOP NOW
                </div>
              </div>
              
              {/* Right Side */}
              <div className="text-white text-right">
                <p className="text-sm mb-2">We are the solution for your Home</p>
                <div className="bg-orange-400 text-white px-3 py-1 rounded-full text-sm font-bold">
                  up to 30% OFF
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Summary Sections */}
        <div className="space-y-6 mb-12">
          {/* Ad Details */}
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Ad Details</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Ad Name:</span>
                <div className="flex items-center gap-2">
                  <span className="font-medium text-gray-900">Home Furniture Sales</span>
                  <Edit className="w-4 h-4 text-gray-400 cursor-pointer hover:text-gray-600" />
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Price:</span>
                <span className="font-medium text-gray-900">$200</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Advertiser:</span>
                <span className="font-medium text-gray-900">Oluwaseyi Akeredolu</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Destination Url:</span>
                <div className="flex items-center gap-2">
                  <span className="font-medium text-gray-900">https://www.bigseasonsale.com/couponsales-offers</span>
                  <ExternalLink className="w-4 h-4 text-gray-400" />
                </div>
              </div>
            </div>
          </div>

          {/* Duration */}
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Duration</h3>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Duration:</span>
              <div className="flex items-center gap-2">
                <span className="font-medium text-gray-900">2 Weeks (16/09/2025-23/09/2025)</span>
                <Edit className="w-4 h-4 text-gray-400 cursor-pointer hover:text-gray-600" />
              </div>
            </div>
          </div>

          {/* Placement */}
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Placement</h3>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Placement:</span>
              <div className="flex items-center gap-2">
                <span className="font-medium text-gray-900">Home Page (Top-Large)</span>
                <Edit className="w-4 h-4 text-gray-400 cursor-pointer hover:text-gray-600" />
              </div>
            </div>
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
            onClick={handleUpload}
            disabled={isUploading}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-lg font-medium"
          >
            {isUploading ? "Uploading..." : "Upload"}
          </Button>
        </div>
      </div>

      {/* Modals */}
      <EditSuccessModal
        isOpen={showUploadSuccess}
        onClose={handleSuccessClose}
      />
      
      <EditFailureModal
        isOpen={showUploadFailure}
        onClose={handleFailureClose}
      />
    </div>
  )
}
