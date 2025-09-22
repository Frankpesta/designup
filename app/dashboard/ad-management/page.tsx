"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, ChevronDown, Upload, MoreVertical, Flag, ShoppingCart, Eye, Edit } from "lucide-react"
import Link from "next/link"

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
    <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
            <Flag className="w-4 h-4 text-blue-600" />
          </div>
          <span className="text-sm font-medium text-gray-900">{ad.placement}</span>
        </div>
        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
          <MoreVertical className="w-4 h-4 text-gray-400" />
        </Button>
      </div>

      {/* Main Content - Two Column Layout */}
      <div className="flex gap-4 mb-4">
        {/* Left Panel - Ad Creative Preview */}
        <div className="flex-shrink-0">
          <div className="w-32 h-24 bg-orange-500 rounded-lg relative overflow-hidden flex items-center">
            {/* Shopping Cart Icon - Top Left */}
            <div className="absolute top-2 left-2">
              <div className="w-5 h-5 border-2 border-white rounded-sm flex items-center justify-center">
                <ShoppingCart className="w-3 h-3 text-white" />
              </div>
            </div>
            
            {/* Text Content - Centered */}
            <div className="flex-1 flex flex-col justify-center items-center text-white">
              <p className="text-xs opacity-90 mb-1">Made with real wood</p>
              <div className="text-center">
                <h3 className="text-sm font-bold leading-tight">HOME</h3>
                <h3 className="text-sm font-bold leading-tight">FURNITURE</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel - Ad Details */}
        <div className="flex-1 space-y-2">
          <div className="flex justify-between">
            <span className="text-sm text-gray-500">Ad Title:</span>
            <span className="text-sm font-medium text-gray-900">{ad.title}</span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">Status:</span>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <span className="text-green-600 text-sm">Active (until {ad.endDate})</span>
            </div>
          </div>
          
          <div className="flex justify-between">
            <span className="text-sm text-gray-500">Clicks:</span>
            <span className="text-sm font-medium text-gray-900">{ad.clicks}</span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-sm text-gray-500">Impressions:</span>
            <span className="text-sm font-medium text-gray-900">{ad.impressions}</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <Link href={`/dashboard/ad-management/${ad.id}`}>
          <Button className="bg-blue-100 text-blue-600 hover:bg-blue-200 px-6 py-3 rounded-lg text-sm font-medium">
            <Eye className="w-4 h-4 mr-2" />
            View
          </Button>
        </Link>
        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
          <Edit className="w-4 h-4 text-gray-400" />
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
                <Button className="bg-white text-[#2B6CB0] hover:bg-blue-50 px-6 py-3 rounded-lg font-medium">
                  <Upload className="w-5 h-5 mr-2" />
                  Upload New Ad
                </Button>
              </Link>
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
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8 flex-1">
              <h2 className="text-2xl font-semibold text-gray-900">Ad Management</h2>
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search by title, advertiser, placement"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500 rounded-lg h-10"
                />
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Button 
                  onClick={() => setActiveFilter("All 6")}
                  className={`px-4 py-2 rounded-lg text-sm ${
                    activeFilter === "All 6" 
                      ? "bg-blue-100 text-gray-800" 
                      : "bg-white text-gray-600 border border-gray-300"
                  }`}
                >
                  All 6
                </Button>
                <Button 
                  onClick={() => setActiveFilter("Active 5")}
                  className={`px-4 py-2 rounded-lg text-sm ${
                    activeFilter === "Active 5" 
                      ? "bg-blue-100 text-gray-800" 
                      : "bg-white text-gray-600 border border-gray-300"
                  }`}
                >
                  Active 5
                </Button>
                <Button 
                  onClick={() => setActiveFilter("Expired 1")}
                  className={`px-4 py-2 rounded-lg text-sm ${
                    activeFilter === "Expired 1" 
                      ? "bg-blue-100 text-gray-800" 
                      : "bg-white text-gray-600 border border-gray-300"
                  }`}
                >
                  Expired 1
                </Button>
                <Button className="bg-white text-gray-600 hover:bg-gray-50 px-4 py-2 rounded-lg text-sm border border-gray-300 flex items-center gap-2">
                  Filter by
                  <ChevronDown className="w-4 h-4" />
                </Button>
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