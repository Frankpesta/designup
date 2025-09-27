"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ChevronLeft, ChevronDown, ArrowDownToLine } from "lucide-react"
import { useRouter } from "next/navigation"

export default function UploadPage() {
  const router = useRouter()
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [bannerImage, setBannerImage] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    url: "",
    advertiser: ""
  })

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      if (file.size > 120 * 1024 * 1024) { // 120MB limit
        alert("File size exceeds 120MB limit.")
        return
      }
      if (!["image/png", "image/jpeg"].includes(file.type)) {
        alert("Only PNG and JPEG files are allowed.")
        return
      }
      const reader = new FileReader()
      reader.onloadend = () => {
        setBannerImage(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto p-8">
        {/* Header Section */}
        <div className="mb-12">
          <div className="text-orange-500 text-sm font-medium mb-2">STEP THREE</div>
          <h1 className="text-4xl font-bold text-blue-600 mb-4">Upload Ad Info</h1>
          <p className="text-lg text-gray-600">
            Upload the ad and assign it to advertiser.
          </p>
        </div>

        {/* Banner Upload Section */}
        <div className="mb-12">
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 bg-gray-50">
            <div className="flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-6">
                <ArrowDownToLine className="w-8 h-8 text-gray-400" />
              </div>
              
              <div className="space-y-2 mb-6">
                <p className="text-gray-600">Banner size: 800px by 200px</p>
                <p className="text-gray-600">Max: 120MB, PNG, JPEG</p>
              </div>
              
              <input
                type="file"
                ref={fileInputRef}
                accept="image/png, image/jpeg"
                onChange={handleFileChange}
                className="hidden"
              />
              <Button
                onClick={() => fileInputRef.current?.click()}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium"
              >
                Browse File
              </Button>
            </div>
          </div>
        </div>

        {/* Form Fields */}
        <div className="mb-12 space-y-8">
          {/* Name of Ad */}
          <div>
            <Label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-3">
              Name of Ad
            </Label>
            <Input
              id="name"
              placeholder="Enter the ad name"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className="w-full p-4 h-14 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500"
            />
          </div>

          {/* Ad URL */}
          <div>
            <Label htmlFor="url" className="block text-sm font-medium text-gray-900 mb-3">
              Ad url
            </Label>
            <Input
              id="url"
              placeholder="Enter ad destination url"
              value={formData.url}
              onChange={(e) => handleInputChange('url', e.target.value)}
              className="w-full p-4 h-14 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500"
            />
            <p className="text-sm text-orange-500 mt-2">Must start with https://</p>
          </div>

          {/* Advertiser */}
          <div>
            <Label htmlFor="advertiser" className="block text-sm font-medium text-gray-900 mb-3">
              Advertiser
            </Label>
            <div className="relative">
              <Input
                id="advertiser"
                placeholder="Select Advertiser"
                value={formData.advertiser}
                onChange={(e) => handleInputChange('advertiser', e.target.value)}
                className="w-full p-4 h-14 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 pr-12"
              />
              <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
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
            onClick={() => router.push("/upload-ad-banner/ad-summary")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-lg font-medium"
          >
            Next Step
          </Button>
        </div>
      </div>
    </div>
  )
}
