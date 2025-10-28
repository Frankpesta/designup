"use client"

import { useState, use } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { UploadedAdsCard } from "@/components/ads"
import { Edit, BarChart3, MoreVertical, Flag, ShoppingCart } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface AdvertiserDetailsProps {
  params: Promise<{
    id: string
  }>
}

interface Ad {
  id: string
  title: string
  placement: string
  status: "Active" | "Expired"
  clicks: number
  impressions: number
  endDate: string
  startDate: string
}

const ads: Ad[] = [
  {
    id: "1",
    title: "Home Furniture Sale",
    placement: "Homepage/01 - Large Banner",
    status: "Active",
    clicks: 200,
    impressions: 980,
    endDate: "Sept 20",
    startDate: "Sept 1"
  },
  {
    id: "2",
    title: "Home Furniture Sale",
    placement: "Homepage/01 - Large Banner",
    status: "Expired",
    clicks: 200,
    impressions: 980,
    endDate: "Sept 6",
    startDate: "Aug 20"
  },
]

const AdCard = ({ ad }: { ad: Ad }) => (
  <div className="bg-gray-50 rounded-3xl p-6 border border-gray-100">
    {/* Header */}
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-blue-100 rounded-2xl flex items-center justify-center">
          <Flag className="w-4 h-4 text-blue-600" />
        </div>
        <span className="text-sm text-gray-900">{ad.placement}</span>
      </div>
      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
        <MoreVertical className="w-4 h-4 text-gray-400" />
      </Button>
    </div>

    {/* Main Content - Two Column Layout */}
    <div className="flex gap-6 mb-8">
      {/* Left Panel - Ad Creative Preview */}
      <div className="flex-shrink-0">
        <div className="w-48 h-48 bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl relative overflow-hidden flex flex-col justify-center items-center text-white p-4">
          {/* Shopping Cart Icon - Top Left */}
          <div className="absolute top-3 left-3">
            <div className="w-6 h-6 border-2 border-white rounded flex items-center justify-center">
              <ShoppingCart className="w-4 h-4 text-white" />
            </div>
          </div>
          
          {/* Text Content */}
          <div className="text-center">
            <p className="text-sm opacity-90 mb-2">Made with real wood</p>
            <div className="space-y-1">
              <h3 className="text-xl font-bold tracking-wide">HOME</h3>
              <h3 className="text-xl font-bold tracking-wide">FURNITURE</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel - Ad Details */}
      <div className="flex-1 space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-gray-500">Ad Title:</span>
          <span className="font-semibold text-gray-900">{ad.title}</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-500">Status:</span>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-gray-900 font-medium">Active (until {ad.endDate})</span>
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-500">Clicks:</span>
          <span className="font-semibold text-gray-900">{ad.clicks}</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-500">Impressions:</span>
          <span className="font-semibold text-gray-900">{ad.impressions}</span>
        </div>
      </div>
    </div>

    {/* Footer */}
    <div className="flex items-center justify-between rounded-2xl px-6 py-2">
      <Link href={`/dashboard/ad-management/${ad.id}`} className="flex items-center justify-center bg-blue-50">
        <Button className="flex items-center justify-center bg-blue-50 text-blue-600 hover:bg-blue-100 w-full py-6 px-46 text-sm border-none shadow-none font-semibold">
          View
        </Button>
      </Link>
      <Button variant="ghost" size="sm">
        <Image src={'/edit.svg'} alt="edit-icon" width={100} height={100} objectFit="cover" className="w-8 h-8" />
      </Button>
    </div>
  </div>
)


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
  const resolvedParams = use(params)
  const advertiser = getAdvertiserData(resolvedParams.id)
  const [showSuspendModal, setShowSuspendModal] = useState(false)
  const [showRemoveModal, setShowRemoveModal] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  
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

  const filteredAds = ads.filter(ad =>
    ad.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    ad.placement.toLowerCase().includes(searchQuery.toLowerCase())
  )

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
              className="bg-white text-[#2B6CB0] font-semibold text-base flex items-center gap-2"
            >
              <Image src={'/edit-blue.svg'} alt="edit" width={100} height={100} className="w-6 h-6" />
              Edit
            </Button>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto p-6">
        <div className="space-y-8">
        {/* Personal Information */}
<div className="bg-gray-50 rounded-lg p-6">
  <h2 className="text-lg font-semibold text-gray-900 mb-8">Personal Information</h2>
  
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
            className="bg-white border-gray-300 rounded-lg h-11"
          />
        </div>
        
        <div>
          <Label htmlFor="email" className="text-sm text-gray-500 mb-1 block">Email Address</Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className="bg-white border-gray-300 rounded-lg h-11"
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
            className="bg-white border-gray-300 rounded-lg h-11"
          />
        </div>
        
        <div>
          <Label htmlFor="phone" className="text-sm text-gray-500 mb-1 block">Phone</Label>
          <Input
            id="phone"
            value={formData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            className="bg-white border-gray-300 rounded-lg h-11"
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
            className="bg-white border-gray-300 rounded-lg h-11"
          />
        </div>
        
        <div>
          <Label htmlFor="status" className="text-sm text-gray-500 mb-1 block">Status</Label>
          <select
            id="status"
            value={formData.status}
            onChange={(e) => handleInputChange('status', e.target.value)}
            className="w-full h-11 px-3 py-2 bg-white border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="Active">Active</option>
            <option value="Expired">Expired</option>
          </select>
        </div>
      </div>
    </div>
  ) : (
    /* View Mode - Large Profile Image Layout */
    <div className="flex items-start gap-8">
      {/* Profile Image */}
      <div className="flex-shrink-0">
        <Avatar className="w-36 h-36 border-4 border-white shadow-sm">
          <AvatarImage src={advertiser.profileImage} alt={`${advertiser.firstName} ${advertiser.lastName}`} />
          <AvatarFallback className="bg-orange-500 text-white text-3xl">
            {advertiser.firstName[0]}{advertiser.lastName[0]}
          </AvatarFallback>
        </Avatar>
      </div>

      {/* Details Grid */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-8">
        <div>
          <p className="text-sm text-gray-400 mb-2">First Name</p>
          <p className="text-base text-gray-900 font-medium">{advertiser.firstName}</p>
        </div>
        
        <div>
          <p className="text-sm text-gray-400 mb-2">Last Name</p>
          <p className="text-base text-gray-900 font-medium">{advertiser.lastName}</p>
        </div>
        
        <div>
          <p className="text-sm text-gray-400 mb-2">Email Address</p>
          <p className="text-base text-gray-900 font-medium">{advertiser.email}</p>
        </div>
        
        <div>
          <p className="text-sm text-gray-400 mb-2">Phone</p>
          <p className="text-base text-gray-900 font-medium">{advertiser.phone}</p>
        </div>
        
        <div>
          <p className="text-sm text-gray-400 mb-2">Advertiser ID</p>
          <p className="text-base text-gray-900 font-medium">{advertiser.advertiserId}</p>
        </div>
        
        <div>
          <p className="text-sm text-gray-400 mb-2">Status</p>
          <p className="text-base text-gray-900 font-medium">{advertiser.status}</p>
        </div>
      </div>
    </div>
  )}
  
  {/* Send Traffic Metrics Button - Bottom Right */}
  <div className="flex justify-end mt-8">
    <Button 
      onClick={handleSendTrafficMetrics}
      className="bg-blue-100 text-blue-600 hover:bg-blue-100 px-6 py-2.5 rounded-lg flex items-center gap-2 font-medium shadow-sm h-[48px]"
    >
      <BarChart3 className="w-5 h-5" />
      Send traffic metrics
    </Button>
  </div>
</div>

{/* Action Buttons */}
<div className="flex gap-4 justify-end">
  {/* <Button 
    onClick={handleSuspend}
    className="bg-yellow-100 hover:bg-yellow-200 text-yellow-700 px-8 py-2.5 rounded-lg font-medium border border-yellow-200"
  >
    Suspend
  </Button> */}
  <Button 
    onClick={handleRemove}
    className="bg-red-200 hover:bg-red-200 text-red-600 px-8 py-2.5 rounded-lg font-medium border border-red-400 h-[48px]"
  >
    Remove
  </Button>
</div>

          {/* Uploaded Ads Section */}
          <div className="bg-white rounded-lg p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">
              Uploaded Ads ({advertiser.uploadedAds.length})
            </h2>
            
            <div className="space-y-6 max-w-xl">
            {filteredAds.map((ad) => (
              <AdCard key={ad.id} ad={ad} />
            ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
