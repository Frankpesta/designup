"use client"

import { useState, useRef, use } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowDownToLine, ShoppingCart, ChevronDown } from "lucide-react"
import { useRouter } from "next/navigation"
import { EditSuccessModal, EditFailureModal } from "@/components/modals"
import Image from "next/image"

interface EditAdBannerProps {
  params: Promise<{
    id: string
  }>
}

// Mock function to get ad data
function getAdData(id: string) {
  return {
    id,
    title: "Abstract 3D Design",
    advertiser: "Oluwaseyi Akeredolu",
    price: "$100",
    duration: "3 months",
    section: "Home-page/01",
    destinationUrl: "www.bigseasonsale.com/couponsales-offers",
    bannerImage: "/banner-img.png"
  }
}

export default function EditAdBannerPage({ params }: EditAdBannerProps) {
  const router = useRouter()
  const resolvedParams = use(params)
  const ad = getAdData(resolvedParams.id)
  const [showEditSuccess, setShowEditSuccess] = useState(false)
  const [showEditFailure, setShowEditFailure] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [bannerImage, setBannerImage] = useState<string | null>(ad.bannerImage)
  const [formData, setFormData] = useState({
    name: ad.title,
    advertiser: ad.advertiser,
    price: ad.price,
    duration: ad.duration,
    section: ad.section,
    destinationUrl: ad.destinationUrl
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

  const handleSaveChanges = async () => {
    setIsSaving(true)
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // Simulate random success/failure for demo
      const isSuccess = Math.random() > 0.3 // 70% success rate
      
      if (isSuccess) {
        setShowEditSuccess(true)
      } else {
        setShowEditFailure(true)
      }
    } catch (error) {
      setShowEditFailure(true)
    } finally {
      setIsSaving(false)
    }
  }

  const handleSuccessClose = () => {
    setShowEditSuccess(false)
    router.push(`/dashboard/ad-management/${resolvedParams.id}`)
  }

  const handleFailureClose = () => {
    setShowEditFailure(false)
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
            
            {/* Banner Preview */}
            <div className="relative w-full max-w-4xl mx-auto">
              {bannerImage ? (
                <div className="relative">
                  <Image
                    src={bannerImage}
                    alt="Banner Preview"
                    width={800}
                    height={200}
                    objectFit="cover"
                    className="w-full h-auto rounded-lg"
                  />
                  {/* Overlay with file info */}
                  <div className="absolute inset-0 bg-black/50 rounded-lg p-4">
                    <div className="text-white text-center flex flex-col items-center justify-center h-full">
                      <p className="text-sm mb-1">Banner size: 800px by 200px</p>
                      <p className="text-sm mb-2">Max: 120MB, PNG, JPEG</p>
                      <input
                        type="file"
                        ref={fileInputRef}
                        accept="image/png, image/jpeg"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                      <Button
                        onClick={() => fileInputRef.current?.click()}
                        className="bg-[#2B6CB0] hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm"
                      >
                        Browse File
                      </Button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center p-8 border-2 border-dashed border-gray-300 rounded-lg min-h-[200px]">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <ArrowDownToLine className="w-8 h-8 text-blue-600" />
                    </div>
                    <p className="text-lg font-medium text-gray-700 mb-2">Upload Banner</p>
                    <p className="text-sm text-gray-500 mb-2">Banner size: 800px by 200px</p>
                    <p className="text-sm text-gray-500 mb-6">Max: 120MB, PNG, JPEG</p>
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
                    className="bg-[#2B6CB0] hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
                  >
                    Browse File
                  </Button>
                </div>
              )}
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
                      value={formData.duration}
                      onChange={(e) => handleInputChange('duration', e.target.value)}
                      className="bg-gray-50 border-gray-300 rounded-lg h-12 pr-10"
                    />
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="section" className="text-sm font-medium text-gray-700 mb-2 block">
                    Section
                  </Label>
                  <div className="relative">
                    <Input
                      id="section"
                      value={formData.section}
                      onChange={(e) => handleInputChange('section', e.target.value)}
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
                disabled={isSaving}
              >
                Cancel
              </Button>
              <Button
                onClick={handleSaveChanges}
                className="px-6 py-2 bg-[#2B6CB0] text-white rounded-lg hover:bg-blue-700"
                disabled={isSaving}
              >
                {isSaving ? "Saving..." : "Save Changes"}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      <EditSuccessModal
        isOpen={showEditSuccess}
        onClose={handleSuccessClose}
      />
      
      <EditFailureModal
        isOpen={showEditFailure}
        onClose={handleFailureClose}
      />
    </div>
  )
}
