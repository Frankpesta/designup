"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { UploadedAdsCard } from "@/components/ads"
import { Edit, BarChart3 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface AdvertiserDetailsProps {
  params: {
    id: string
  }
}

// Mock data - in a real app, this would come from an API
const getAdvertiserData = (id: string) => {
  return {
    id,
    firstName: "Oluwaseyi",
    lastName: "Akeredolu", 
    email: "Oluwaseyiakeredolu2@gmail.com",
    phone: "+234 9033995310",
    advertiserId: "ADV-2041",
    status: "Active" as const,
    profileImage: "/api/placeholder/120/120",
    uploadedAds: [
      {
        id: "1",
        image: "/api/placeholder/400/200",
        title: "HOME FURNITURE",
        subtitle: "Made with real wood",
        discount: "30% OFF",
        description: "We are the solution for your Home",
        buttonText: "SHOP NOW"
      },
      {
        id: "2", 
        image: "/api/placeholder/400/200",
        title: "HOME FURNITURE",
        subtitle: "Made with real wood", 
        discount: "30% OFF",
        description: "We are the solution for your Home",
        buttonText: "SHOP NOW"
      }
    ]
  }
}

export default function AdvertiserDetailsPage({ params }: AdvertiserDetailsProps) {
  const advertiser = getAdvertiserData(params.id)
  const [showSuspendModal, setShowSuspendModal] = useState(false)
  const [showRemoveModal, setShowRemoveModal] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  
  // Form state for editing
  const [formData, setFormData] = useState({
    firstName: advertiser.firstName,
    lastName: advertiser.lastName,
    email: advertiser.email,
    phone: advertiser.phone,
    advertiserId: advertiser.advertiserId,
    status: advertiser.status
  })

  const handleSuspend = () => {
    setShowSuspendModal(true)
  }

  const handleRemove = () => {
    setShowRemoveModal(true)
  }

  const handleSendTrafficMetrics = () => {
    // Handle sending traffic metrics
    console.log("Sending traffic metrics...")
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      {isEditing ? (
        <div className="bg-[#2B6CB0] text-white px-6 py-6">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            <div className="flex items-center gap-4">
              <Avatar className="w-16 h-16">
                <AvatarImage src={advertiser.profileImage} alt={`${advertiser.firstName} ${advertiser.lastName}`} />
                <AvatarFallback className="bg-white text-[#2B6CB0] text-lg font-semibold">
                  {formData.firstName[0]}{formData.lastName[0]}
                </AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-xl font-semibold">{formData.firstName} {formData.lastName}</h1>
                <p className="text-blue-100">{formData.advertiserId}</p>
              </div>
              <Badge className="bg-green-500 text-white ml-4">
                {formData.status}
              </Badge>
            </div>
            <Button 
              onClick={() => setIsEditing(false)}
              className="bg-white text-[#2B6CB0] hover:bg-blue-50 px-4 py-2 rounded-lg flex items-center gap-2"
            >
              <Edit className="w-4 h-4" />
              Edit
            </Button>
          </div>
        </div>
      ) : (
        <div className="px-6 py-4">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            <h1 className="text-xl font-semibold">Advertiser's Details</h1>
            <Button 
              onClick={() => setIsEditing(true)}
              className="bg-[#2B6CB0] hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"
            >
              <Edit className="w-4 h-4" />
              Edit
            </Button>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto p-6">
        <div className="space-y-8">
          {/* Personal Information */}
          <div className="bg-white rounded-lg p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Personal Information</h2>
            
              {isEditing ? (
                /* Edit Mode - Three Column Layout with Input Fields */
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Column 1 */}
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="firstName" className="text-sm text-gray-500 mb-1 block">First Name</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        className="bg-gray-50 border-gray-300 rounded-lg h-10"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email" className="text-sm text-gray-500 mb-1 block">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="bg-gray-50 border-gray-300 rounded-lg h-10"
                      />
                    </div>
                  </div>

                  {/* Column 2 */}
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="lastName" className="text-sm text-gray-500 mb-1 block">Last Name</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        className="bg-gray-50 border-gray-300 rounded-lg h-10"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="phone" className="text-sm text-gray-500 mb-1 block">Phone</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="bg-gray-50 border-gray-300 rounded-lg h-10"
                      />
                    </div>
                  </div>

                  {/* Column 3 */}
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="advertiserId" className="text-sm text-gray-500 mb-1 block">Advertiser ID</Label>
                      <Input
                        id="advertiserId"
                        value={formData.advertiserId}
                        onChange={(e) => handleInputChange('advertiserId', e.target.value)}
                        className="bg-gray-50 border-gray-300 rounded-lg h-10"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="status" className="text-sm text-gray-500 mb-1 block">Status</Label>
                      <select
                        id="status"
                        value={formData.status}
                        onChange={(e) => handleInputChange('status', e.target.value)}
                        className="w-full h-10 px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="Active">Active</option>
                        <option value="Expired">Expired</option>
                      </select>
                    </div>
                    
                    {/* Send Traffic Metrics Button */}
                    <div className="pt-4">
                      <Button 
                        onClick={handleSendTrafficMetrics}
                        className="bg-blue-100 text-[#2B6CB0] hover:bg-blue-200 px-4 py-2 rounded-lg flex items-center gap-2"
                      >
                        <BarChart3 className="w-4 h-4" />
                        Send traffic metrics
                      </Button>
                    </div>
                  </div>
                </div>
            ) : (
              /* View Mode - Large Profile Image Layout */
              <div className="flex items-start gap-8">
                {/* Profile Image */}
                <div className="flex-shrink-0">
                  <Avatar className="w-32 h-32">
                    <AvatarImage src={advertiser.profileImage} alt={`${advertiser.firstName} ${advertiser.lastName}`} />
                    <AvatarFallback className="bg-orange-500 text-white text-2xl">
                      {advertiser.firstName[0]}{advertiser.lastName[0]}
                    </AvatarFallback>
                  </Avatar>
                </div>

                {/* Details Grid */}
                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">First Name</p>
                    <p className="text-base text-gray-900">{advertiser.firstName}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Last Name</p>
                    <p className="text-base text-gray-900">{advertiser.lastName}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Email Address</p>
                    <p className="text-base text-gray-900">{advertiser.email}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Phone</p>
                    <p className="text-base text-gray-900">{advertiser.phone}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Advertiser ID</p>
                    <p className="text-base text-gray-900">{advertiser.advertiserId}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Status</p>
                    <Badge 
                      className={advertiser.status === "Active" 
                        ? "bg-green-100 text-green-800 border-green-200" 
                        : "bg-red-100 text-red-800 border-red-200"
                      }
                    >
                      {advertiser.status}
                    </Badge>
                  </div>
                </div>

                {/* Send Traffic Metrics Button - Right aligned below details */}
                <div className="flex-shrink-0 flex flex-col justify-end">
                  <Button 
                    onClick={handleSendTrafficMetrics}
                    className="bg-blue-100 text-[#2B6CB0] hover:bg-blue-200 px-4 py-2 rounded-lg flex items-center gap-2"
                  >
                    <BarChart3 className="w-4 h-4" />
                    Send traffic metrics
                  </Button>
                </div>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 justify-end">
            <Button 
              onClick={handleSuspend}
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-lg"
            >
              Suspend
            </Button>
            <Button 
              onClick={handleRemove}
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg"
            >
              Remove
            </Button>
          </div>

          {/* Uploaded Ads Section */}
          <div className="bg-white rounded-lg p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">
              Uploaded Ads ({advertiser.uploadedAds.length})
            </h2>
            
            <div className="space-y-6">
              {advertiser.uploadedAds.map((ad) => (
                <UploadedAdsCard key={ad.id} ad={ad} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
