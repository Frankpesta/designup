"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

interface AdItem {
  id: string
  image: string
  name: string
  advertiser: string
  price: string
}

const adItems: AdItem[] = [
  { 
    id: "1", 
    image: "/api/placeholder/60/60", 
    name: "Rutary Table", 
    advertiser: "Chairish", 
    price: "$149.00" 
  },
  { 
    id: "2", 
    image: "/api/placeholder/60/60", 
    name: "Blue Fabric Sofa", 
    advertiser: "1stDibs", 
    price: "$149.00" 
  },
  { 
    id: "3", 
    image: "/api/placeholder/60/60", 
    name: "Tufted Sofa", 
    advertiser: "Selency", 
    price: "$149.00" 
  },
  { 
    id: "4", 
    image: "/api/placeholder/60/60", 
    name: "Tufted Sofa", 
    advertiser: "Selency", 
    price: "$149.00" 
  },
]

export default function AdManagementPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const handleGoTo = (item: AdItem) => {
    // This would typically redirect to the actual item page
    console.log(`Redirecting to ${item.name} by ${item.advertiser}`)
    // For demo purposes, we'll just log the action
    window.open(`https://example.com/item/${item.id}`, '_blank')
  }

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-6">
          {/* Search Bar */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-2xl">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                placeholder="Search by title, advertiser, placement"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12 bg-gray-100 border-0 rounded-lg text-gray-700 placeholder-gray-500"
              />
            </div>
          </div>

          {/* Table */}
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            {/* Table Header */}
            <div className="bg-gray-100 px-6 py-4 rounded-t-lg">
              <div className="grid grid-cols-6 gap-4 text-sm font-medium text-gray-600">
                <div>S/N</div>
                <div>Image</div>
                <div>Item Name</div>
                <div>Advertiser</div>
                <div>Price</div>
                <div>Actions</div>
              </div>
            </div>

            {/* Table Body */}
            <div className="divide-y divide-gray-200">
              {adItems.map((item, index) => (
                <div key={item.id} className="px-6 py-4 hover:bg-gray-50">
                  <div className="grid grid-cols-6 gap-4 items-center">
                    {/* Serial Number */}
                    <div className="text-sm text-gray-600">
                      {index + 1}
                    </div>

                    {/* Image */}
                    <div className="flex justify-center">
                      <div className="w-16 h-16 bg-orange-200 rounded-lg flex items-center justify-center">
                        <div className="w-12 h-12 bg-orange-400 rounded-sm"></div>
                      </div>
                    </div>

                    {/* Item Name */}
                    <div className="text-sm text-gray-600">
                      {item.name}
                    </div>

                    {/* Advertiser */}
                    <div className="text-sm text-gray-600">
                      {item.advertiser}
                    </div>

                    {/* Price */}
                    <div className="text-sm text-gray-600">
                      {item.price}
                    </div>

                    {/* Actions */}
                    <div className="flex justify-center">
                      <Button
                        onClick={() => handleGoTo(item)}
                        className="px-4 py-2 bg-[#2B6CB0] text-white rounded-lg hover:bg-blue-600 text-sm"
                      >
                        Go to
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
