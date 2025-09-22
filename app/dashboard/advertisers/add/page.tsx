"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowDown, ChevronDown, Upload } from "lucide-react"

export default function AddAdvertiserPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    duration: ""
  })
  const [profileImage, setProfileImage] = useState<File | null>(null)
  const [previewImage, setPreviewImage] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setProfileImage(file)
      const reader = new FileReader()
      reader.onload = (e) => {
        const result = e.target?.result as string
        setPreviewImage(result)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleBrowseFile = () => {
    fileInputRef.current?.click()
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form data:", formData, "Profile image:", profileImage)
  }

  const handleCancel = () => {
    // Handle cancel - could redirect back to advertisers list
    window.history.back()
  }

  return (
    <div className="min-h-screen bg-white">
      <div className=" mx-auto">
        <div className="bg-white rounded-lg p-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-8">Advertiser Details</h1>
          
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="flex gap-16">
              {/* Profile Picture Section */}
              <div className="flex-shrink-0">
                <div className="w-64 h-64 border-2 border-dashed border-gray-300 rounded-full flex flex-col items-center justify-center p-6 bg-gray-50">
                  {previewImage ? (
                    <div className="relative w-full h-full">
                      <img 
                        src={previewImage} 
                        alt="Profile preview" 
                        className="w-full h-full object-cover rounded-full"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          setPreviewImage(null)
                          setProfileImage(null)
                          if (fileInputRef.current) {
                            fileInputRef.current.value = ""
                          }
                        }}
                        className="absolute top-2 right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs hover:bg-red-600"
                      >
                        ×
                      </button>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center h-full">
                      <ArrowDown className="w-8 h-8 text-gray-400 mb-4" />
                      <p className="text-sm font-medium text-gray-600 mb-2">Profile Picture</p>
                      <p className="text-xs text-gray-500 text-center mb-4">
                        Max: 120MB, PNG, JPEG
                      </p>
                      <Button
                        type="button"
                        onClick={handleBrowseFile}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm"
                      >
                        Browse File
                      </Button>
                    </div>
                  )}
                  
                  {/* Hidden file input */}
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/png,image/jpeg"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </div>
              </div>

              {/* Form Fields */}
              <div className="flex-1 space-y-6 max-w-2xl">
                {/* Name Field */}
                <div>
                  <Label htmlFor="name" className="text-sm font-medium text-gray-700 mb-2 block">
                    Name
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter advertiser's name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="w-full h-16 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700 mb-2 block">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter advertiser's email address"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="w-full h-16 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                {/* Duration Field */}
                <div>
                  <Label htmlFor="duration" className="text-sm font-medium text-gray-700 mb-2 block">
                    Duration
                  </Label>
                  <div className="relative">
                    <Input
                      id="duration"
                      type="text"
                      placeholder="Select Duration"
                      value={formData.duration}
                      onChange={(e) => handleInputChange("duration", e.target.value)}
                      className="w-full h-16 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pr-10"
                    />
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end space-x-4 pt-8 max-w-5xl">
              <Button
                type="button"
                onClick={handleCancel}
                variant="outline"
                className="px-12 py-6 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="px-12 py-6 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                Add
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
