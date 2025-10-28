"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, ChevronDown, Upload, MoreVertical, Flag, ShoppingCart, Eye, Edit } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

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
  {
    id: "3",
    title: "Home Furniture Sale",
    placement: "Homepage/01 - Large Banner",
    status: "Active",
    clicks: 200,
    impressions: 980,
    endDate: "Sept 20",
    startDate: "Sept 1"
  },
  {
    id: "4",
    title: "Home Furniture Sale",
    placement: "Homepage/01 - Large Banner",
    status: "Active",
    clicks: 200,
    impressions: 980,
    endDate: "Sept 20",
    startDate: "Sept 1"
  },
  {
    id: "5",
    title: "Home Furniture Sale",
    placement: "Homepage/01 - Large Banner",
    status: "Expired",
    clicks: 200,
    impressions: 980,
    endDate: "Sept 6",
    startDate: "Aug 20"
  },
  {
    id: "6",
    title: "Home Furniture Sale",
    placement: "Homepage/01 - Large Banner",
    status: "Active",
    clicks: 200,
    impressions: 980,
    endDate: "Sept 20",
    startDate: "Sept 1"
  }
]

export default function AdManagementPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeFilter, setActiveFilter] = useState("All 6")

  const filteredAds = ads.filter(ad =>
    ad.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    ad.placement.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const getStatusBadge = (status: string, endDate: string) => {
    if (status === "Active") {
      return (
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
          <span className="text-green-600 text-sm">Active (until {endDate})</span>
        </div>
      )
    } else {
      return (
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-gray-400 rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
          <span className="text-gray-500 text-sm">Expired (since {endDate})</span>
        </div>
      )
    }
  }

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
  

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto p-6">
        <div className="space-y-6">
          {/* Banner */}
          <div className="bg-gradient-to-r from-[#2B6CB0] to-blue-600 rounded-lg p-8 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h1 className="text-3xl font-bold mb-4">
                Track, manage, and optimize your ad campaigns with ease.
              </h1>
              <p className="text-blue-100 text-lg mb-6 max-w-2xl">
                Keep every banner running smoothly, monitor real-time performance, and deliver visually engaging promotions — all from one dashboard.
              </p>
              <Link href="/dashboard/ad-management/upload">
                <Button className="bg-white text-[#2B6CB0] hover:bg-blue-50 px-4 py-6 rounded-xl font-medium">
                <Image src={'/upload-blue.svg'} alt="upload-icon" height={100} width={100} className="w-4 h-4" />
                  Upload New Ad
                </Button>
              </Link>
            </div>
            
            {/* Megaphone Image - Absolute positioned at far right */}
            <div className="absolute -bottom-20 -right-8">
              <Image
                src="/mic.png"
                alt="Megaphone"
                width={300}
                height={300}
                className="object-contain"
              />
            </div>
            
            {/* Close button */}
            <Button 
              variant="ghost" 
              size="sm" 
              className="absolute top-4 right-4 text-white hover:bg-white/20 h-8 w-8 p-0"
            >
              ×
            </Button>
          </div>

          {/* Search and Filter Controls */}
          <div className="bg-white p-6 border-b border-gray-200">
      <div className="max-w-7xl mx-auto">
        {/* Header with Title and Upload Button */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-medium text-gray-900">Ads Management</h1>
            <Image alt="icon" src={'/i.svg'} width={100} height={100} className="h-5 w-5" />
          </div>
          
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-lg flex items-center gap-2 text-sm font-medium">
            <Image src={'/upload.svg'} alt="upload-icon" height={100} width={100} className="w-4 h-4" />
            Upload New Ad
          </button>
        </div>

        {/* Search and Filter Section */}
        <div className="flex items-center justify-between">
          {/* Search Bar */}
          <div className="relative max-w-sm">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search by title, advertiser, placement"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2.5 w-80 bg-gray-50 border-0 rounded-full text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
            />
          </div>
          
          {/* Filter Buttons */}
          <div className="flex items-center gap-1">
            <button 
              onClick={() => setActiveFilter('All')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === 'All' 
                  ? 'bg-blue-100 text-blue-700' 
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              All <span className="text-xs">6</span>
            </button>
            <button 
              onClick={() => setActiveFilter('Active')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === 'Active' 
                  ? 'bg-blue-100 text-blue-700' 
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Active <span className="text-xs">5</span>
            </button>
            <button 
              onClick={() => setActiveFilter('Expired')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === 'Expired' 
                  ? 'bg-blue-100 text-blue-700' 
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Expired <span className="text-xs">1</span>
            </button>
            <button className="text-gray-600 hover:text-gray-800 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-1">
              Filter by
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>

          {/* Ad Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredAds.map((ad) => (
              <AdCard key={ad.id} ad={ad} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}