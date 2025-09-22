"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import Image from "next/image"
import { RedirectModal } from "@/components/modals"

interface SearchedItem {
  id: string
  name: string
  advertiser: string
  price: string
  image: string
}

const searchedItems: SearchedItem[] = [
  { 
    id: "1", 
    name: "Rutary Table", 
    advertiser: "Chairish", 
    price: "$149.00",
    image: "/api/placeholder/60/60"
  },
  { 
    id: "2", 
    name: "Blue Fabric Sofa", 
    advertiser: "1stDibs", 
    price: "$149.00",
    image: "/api/placeholder/60/60"
  },
  { 
    id: "3", 
    name: "Tufted Sofa", 
    advertiser: "Selency", 
    price: "$149.00",
    image: "/api/placeholder/60/60"
  },
  { 
    id: "4", 
    name: "Tufted Sofa", 
    advertiser: "Selency", 
    price: "$149.00",
    image: "/api/placeholder/60/60"
  },
]

interface TopSearchedItemsProps {
  className?: string
}

export function TopSearchedItems({ className }: TopSearchedItemsProps) {
  const [showRedirectModal, setShowRedirectModal] = useState(false)
  const [selectedItem, setSelectedItem] = useState<SearchedItem | null>(null)

  const handleGoToClick = (item: SearchedItem) => {
    setSelectedItem(item)
    setShowRedirectModal(true)
  }

  const handleRedirectProceed = () => {
    if (selectedItem) {
      // This would typically redirect to the actual item page
      window.open(`https://example.com/item/${selectedItem.id}`, '_blank')
    }
    setShowRedirectModal(false)
    setSelectedItem(null)
  }

  const handleRedirectCancel = () => {
    setShowRedirectModal(false)
    setSelectedItem(null)
  }

  return (
    <div className={`bg-white rounded-lg p-6 shadow-sm border ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Top Searched Items</h3>
        <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
          View all
        </button>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-2 text-sm font-medium text-gray-600">S/N</th>
              <th className="text-left py-3 px-2 text-sm font-medium text-gray-600">Image</th>
              <th className="text-left py-3 px-2 text-sm font-medium text-gray-600">Item Name</th>
              <th className="text-left py-3 px-2 text-sm font-medium text-gray-600">Advertiser</th>
              <th className="text-left py-3 px-2 text-sm font-medium text-gray-600">Price</th>
              <th className="text-left py-3 px-2 text-sm font-medium text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {searchedItems.map((item, index) => (
              <tr key={item.id} className="border-b border-gray-100">
                <td className="py-3 px-2 text-sm text-gray-900">{index + 1}</td>
                <td className="py-3 px-2">
                  <div className="w-12 h-12 bg-orange-200 rounded-lg flex items-center justify-center">
                    <div className="w-8 h-8 bg-orange-400 rounded-sm"></div>
                  </div>
                </td>
                <td className="py-3 px-2 text-sm text-gray-900">{item.name}</td>
                <td className="py-3 px-2 text-sm text-gray-900">{item.advertiser}</td>
                <td className="py-3 px-2 text-sm text-gray-900">{item.price}</td>
                <td className="py-3 px-2">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="h-8 px-3"
                    onClick={() => handleGoToClick(item)}
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Go to
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Redirect Modal */}
      <RedirectModal
        isOpen={showRedirectModal}
        onClose={handleRedirectCancel}
        onProceed={handleRedirectProceed}
        itemName={selectedItem?.name}
      />
    </div>
  )
}
