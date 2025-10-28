"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Edit2, User, Camera } from "lucide-react"
import { CancelModal, SuccessModal } from "@/components/modals"

export default function SettingsPage() {
  const [isEditing, setIsEditing] = useState(false)
  const [showCancelModal, setShowCancelModal] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [profileImage, setProfileImage] = useState<string | null>(null)
  const [previewImage, setPreviewImage] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const userData = {
    firstName: "Oluwaseyi",
    lastName: "Akeredolu", 
    email: "Oluwaseyiakeredolu2@gmail.com",
    phone: "+234 9033995310",
    country: "Nigeria",
    city: "Lagos",
    fullName: "Oluwaseyi Akeredolu",
    displayEmail: "Oluwaseyiakeredolu20@gmail.com"
  }

  const handleCancelClick = () => {
    setShowCancelModal(true)
  }

  const handleCancelProceed = () => {
    setShowCancelModal(false)
    setPreviewImage(null) // Reset preview image when canceling
    setIsEditing(false)
  }

  const handleCancelContinue = () => {
    setShowCancelModal(false)
  }

  const handleSaveChanges = () => {
    // Here you would typically save the changes to your backend
    if (previewImage) {
      setProfileImage(previewImage)
      setPreviewImage(null)
    }
    setIsEditing(false)
    setShowSuccessModal(true)
  }

  const handleSuccessContinue = () => {
    setShowSuccessModal(false)
  }

  const handleImageClick = () => {
    fileInputRef.current?.click()
  }

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const result = e.target?.result as string
        setPreviewImage(result)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleRemoveImage = () => {
    setPreviewImage(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  if (isEditing) {
    return (
      <div className="p-6">
        <div className="max-w-full mx-auto">
          <div className="bg-white rounded-lg p-8">
            <h1 className="text-2xl font-semibold text-gray-700 mb-8">Personal Information</h1>
            
            {/* Profile Picture Section */}
            <div className="flex items-center mb-8">
              <div className="relative">
                <Avatar className="w-24 h-24 cursor-pointer" onClick={handleImageClick}>
                  <AvatarImage 
                    src={previewImage || profileImage || "/api/placeholder/96/96"} 
                    alt="Profile" 
                  />
                  <AvatarFallback className="bg-orange-500 text-white text-2xl">
                    <User className="w-12 h-12" />
                  </AvatarFallback>
                </Avatar>
                <div 
                  className="absolute -bottom-1 -right-1 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-600 transition-colors"
                  onClick={handleImageClick}
                >
                  <Camera className="w-4 h-4 text-white" />
                </div>
              </div>
              
              {/* Hidden file input */}
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
              
              {/* Image upload info */}
              <div className="ml-6">
                <h3 className="text-lg font-medium text-gray-700 mb-2">Profile Picture</h3>
                <p className="text-sm text-gray-500 mb-3">
                  Click on the image or camera icon to upload a new profile picture
                </p>
                {previewImage && (
                  <div className="flex space-x-2">
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={handleRemoveImage}
                      className="text-red-600 border-red-200 hover:bg-red-50"
                    >
                      Remove
                    </Button>
                  </div>
                )}
              </div>
            </div>

            {/* Form Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Left Column */}
              <div className="space-y-8">
                <div>
                  <Label htmlFor="firstName" className="text-sm font-medium text-gray-600 mb-2 block">
                    First Name
                  </Label>
                  <Input
                    id="firstName"
                    defaultValue={userData.firstName}
                    className="bg-white border-gray-300 rounded-lg h-16"
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone" className="text-sm font-medium text-gray-600 mb-2 block">
                    Phone
                  </Label>
                  <Input
                    id="phone"
                    defaultValue={userData.phone}
                    className="bg-white border-gray-300 rounded-lg h-16"
                  />
                </div>
                
                <div>
                  <Label htmlFor="country" className="text-sm font-medium text-gray-600 mb-2 block">
                    Country
                  </Label>
                  <Input
                    id="country"
                    defaultValue={userData.country}
                    className="bg-white border-gray-300 rounded-lg h-16"
                  />
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-8">
                <div>
                  <Label htmlFor="lastName" className="text-sm font-medium text-gray-600 mb-2 block">
                    Last Name
                  </Label>
                  <Input
                    id="lastName"
                    defaultValue={userData.lastName}
                    className="bg-white border-gray-300 rounded-lg h-16"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-gray-600 mb-2 block">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    defaultValue={userData.email}
                    className="bg-white border-gray-300 rounded-lg h-16"
                  />
                </div>
                
                <div>
                  <Label htmlFor="city" className="text-sm font-medium text-gray-600 mb-2 block">
                    City/State
                  </Label>
                  <Input
                    id="city"
                    defaultValue={userData.city}
                    className="bg-white border-gray-300 rounded-lg h-16"
                  />
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end space-x-4">
              <Button
                variant="outline"
                onClick={handleCancelClick}
                className="px-6 py-4 border-gray-300 text-gray-700 rounded-lg bg-gray-100 h-[48px]"
              >
                Cancel
              </Button>
              <Button
                onClick={handleSaveChanges}
                className="px-6 py-4 bg-[#2B6CB0] text-white rounded-lg hover:bg-blue-600 h-[48px]"
              >
                Save Changes
              </Button>
            </div>
          </div>
        </div>
        
        {/* Modals */}
        <CancelModal
          isOpen={showCancelModal}
          onClose={handleCancelContinue}
          onProceed={handleCancelProceed}
        />
        <SuccessModal
          isOpen={showSuccessModal}
          onClose={handleSuccessContinue}
        />
      </div>
    )
  }

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-full mx-auto">
        <div className="bg-white rounded-lg p-8">
          <h1 className="text-2xl font-semibold text-gray-700 mb-8">My Profile</h1>
          
          {/* Profile Header Section */}
          <div className="flex items-start justify-between mb-8">
            <div className="flex items-center space-x-6">
              <div className="relative">
                <Avatar className="w-20 h-20">
                  <AvatarImage 
                    src={profileImage || "/api/placeholder/80/80"} 
                    alt="Profile" 
                  />
                  <AvatarFallback className="bg-orange-500 text-white text-xl">
                    <User className="w-10 h-10" />
                  </AvatarFallback>
                </Avatar>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                  <Edit2 className="w-3 h-3 text-white" />
                </div>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-gray-700">{userData.fullName}</h2>
                <p className="text-gray-600 mt-1">{userData.displayEmail}</p>
                <p className="text-gray-600">Admin</p>
              </div>
            </div>
            
            <Button
              onClick={() => setIsEditing(true)}
              variant="outline"
              className="px-6 py-2 border-gray-300 text-gray-700 rounded-lg"
            >
              Edit
            </Button>
          </div>

          {/* Personal Information Section */}
          <div className="mb-8">
            <h3 className="text-lg font-medium text-gray-700 mb-4">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-4">
                <p className="text-sm font-medium text-gray-600">First Name:</p>
                <p className="text-gray-500">{userData.firstName}</p>
              </div>
              <div className="space-y-4">
                <p className="text-sm font-medium text-gray-600">Last Name:</p>
                <p className="text-gray-500">{userData.lastName}</p>
              </div>
              <div className="space-y-4">
                <p className="text-sm font-medium text-gray-600">Email Address:</p>
                <p className="text-gray-500">{userData.email}</p>
              </div>
              <div className="space-y-4">
                <p className="text-sm font-medium text-gray-600">Phone:</p>
                <p className="text-gray-500">{userData.phone}</p>
              </div>
            </div>
          </div>

          {/* Location Section */}
          <div>
            <h3 className="text-lg font-medium text-gray-700 mb-4">Location</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-4">
                <p className="text-sm font-medium text-gray-600">Country:</p>
                <p className="text-gray-500">{userData.country}</p>
              </div>
              <div className="space-y-4">
                <p className="text-sm font-medium text-gray-600">City/State:</p>
                <p className="text-gray-500">{userData.city}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Modals */}
      <CancelModal
        isOpen={showCancelModal}
        onClose={handleCancelContinue}
        onProceed={handleCancelProceed}
      />
      <SuccessModal
        isOpen={showSuccessModal}
        onClose={handleSuccessContinue}
      />
    </div>
  )
}
