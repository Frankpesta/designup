"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowDownToLine, ChevronDown } from "lucide-react"
import { useRouter } from "next/navigation"

export default function UploadBannerPage() {
  const router = useRouter()
  const [bannerImage, setBannerImage] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    advertiser: "",
    price: "",
    duration: "",
    uploadSection: "",
    destinationUrl: "www.bigseasonsale.com/couponsales-offers"
  })
  const fileInputRef = useRef<HTMLInputElement>(null)

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

  const handleCancel = () => {
    router.back()
  }

  const handleContinue = () => {
    console.log("Continuing with banner upload:", formData)
    router.push("/dashboard/ad-management/upload/preview")
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto p-6">
        <div className="space-y-8">
          {/* Header */}
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold text-gray-900">Upload Banner</h1>
          </div>

          {/* Upload Banner Section - Top Center */}
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

          {/* Upload Banner Section */}
          <div className="bg-white rounded-lg border border-gray-200 p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Upload Banner</h2>
            
            <div className="flex flex-col items-center justify-center p-8 border-2 border-dashed border-gray-300 rounded-lg min-h-[300px]">
              {bannerImage ? (
                <div className="relative w-full max-w-md">
                  <img 
                    src={bannerImage} 
                    alt="Banner Preview" 
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              ) : (
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ArrowDownToLine className="w-8 h-8 text-blue-600" />
                  </div>
                  <p className="text-lg font-medium text-gray-700 mb-2">Upload Banner</p>
                  <p className="text-sm text-gray-500 mb-2">Banner size: 800px by 200px</p>
                  <p className="text-sm text-gray-500 mb-6">Max: 120MB, PNG, JPEG</p>
                </div>
              )}
              
              <input
                type="file"
                ref={fileInputRef}
                accept="image/png, image/jpeg"
                onChange={handleFileChange}
                className="hidden"
              />
              <Button
                onClick={() => fileInputRef.current?.click()}
                className="bg-[#2B6CB0] hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
              >
                Browse File
              </Button>
            </div>
          </div>

          {/* Banner Details Section */}
          <div className="bg-white rounded-lg border border-gray-200 p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Banner Details</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Column 1 */}
              <div className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-sm font-medium text-gray-700 mb-2 block">
                    Name
                  </Label>
                  <Input
                    id="name"
                    placeholder="Enter the name of the banner."
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="bg-gray-50 border-gray-300 rounded-lg h-12"
                  />
                </div>

                <div>
                  <Label htmlFor="advertiser" className="text-sm font-medium text-gray-700 mb-2 block">
                    Advertiser
                  </Label>
                  <div className="relative">
                    <Input
                      id="advertiser"
                      placeholder="Select Advertiser"
                      value={formData.advertiser}
                      onChange={(e) => handleInputChange('advertiser', e.target.value)}
                      className="bg-gray-50 border-gray-300 rounded-lg h-12 pr-10"
                    />
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="price" className="text-sm font-medium text-gray-700 mb-2 block">
                    Price
                  </Label>
                  <Input
                    id="price"
                    placeholder="Enter Price"
                    value={formData.price}
                    onChange={(e) => handleInputChange('price', e.target.value)}
                    className="bg-gray-50 border-gray-300 rounded-lg h-12"
                  />
                </div>
              </div>

              {/* Column 2 */}
              <div className="space-y-6">
                <div>
                  <Label htmlFor="duration" className="text-sm font-medium text-gray-700 mb-2 block">
                    Duration
                  </Label>
                  <div className="relative">
                    <Input
                      id="duration"
                      placeholder="Select Duration"
                      value={formData.duration}
                      onChange={(e) => handleInputChange('duration', e.target.value)}
                      className="bg-gray-50 border-gray-300 rounded-lg h-12 pr-10"
                    />
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="uploadSection" className="text-sm font-medium text-gray-700 mb-2 block">
                    Upload Section
                  </Label>
                  <div className="relative">
                    <Input
                      id="uploadSection"
                      placeholder="Select Section on website"
                      value={formData.uploadSection}
                      onChange={(e) => handleInputChange('uploadSection', e.target.value)}
                      className="bg-gray-50 border-gray-300 rounded-lg h-12 pr-10"
                    />
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="destinationUrl" className="text-sm font-medium text-gray-700 mb-2 block">
                    Destination Url
                  </Label>
                  <Input
                    id="destinationUrl"
                    value={formData.destinationUrl}
                    onChange={(e) => handleInputChange('destinationUrl', e.target.value)}
                    className="bg-gray-50 border-gray-300 rounded-lg h-12"
                  />
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end space-x-4 mt-8">
              <Button
                variant="outline"
                onClick={handleCancel}
                className="px-6 py-2 border-gray-300 text-gray-700 rounded-lg bg-gray-100"
              >
                Cancel
              </Button>
              <Button
                onClick={handleContinue}
                className="px-6 py-2 bg-[#2B6CB0] text-white rounded-lg hover:bg-blue-700"
              >
                Continue
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
