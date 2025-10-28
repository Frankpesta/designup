"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { ExternalLink } from "lucide-react"
import { useRouter } from "next/navigation"

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
  const router = useRouter()
  const [showRedirectModal, setShowRedirectModal] = useState(false)
  const [selectedItem, setSelectedItem] = useState<SearchedItem | null>(null)

  const handleGoToClick = (item: SearchedItem) => {
    setSelectedItem(item)
    setShowRedirectModal(true)
  }

  const handleRedirectProceed = () => {
    if (selectedItem) {
      // Redirect to the item detail page using Next.js router
      router.push(`/items/${selectedItem.id}`)
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
      
      <Table className="overflow-x-none">
        <TableHeader>
          <TableRow>
            <TableHead className="text-sm font-light text-gray-600">S/N</TableHead>
            <TableHead className="text-sm font-light text-gray-600">Image</TableHead>
            <TableHead className="text-sm font-light text-gray-600">Item Name</TableHead>
            <TableHead className="text-sm font-light text-gray-600">Advertiser</TableHead>
            <TableHead className="text-sm font-light text-gray-600">Price</TableHead>
            <TableHead className="text-sm font-light text-gray-600">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="overflow-x-none">
          {searchedItems.map((item, index) => (
            <TableRow key={item.id} >
              <TableCell className="text-sm text-gray-900">{index + 1}</TableCell>
              <TableCell>
                <div className="w-12 h-12 bg-orange-200 rounded-lg flex items-center justify-center">
                  <div className="w-8 h-8 bg-orange-400 rounded-sm"></div>
                </div>
              </TableCell>
              <TableCell className="text-gray-900">{item.name}</TableCell>
              <TableCell className="text-gray-900">{item.advertiser}</TableCell>
              <TableCell className="text-gray-900">{item.price}</TableCell>
              <TableCell>
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="p-3 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 hover:text-blue-700"
                  onClick={() => handleGoToClick(item)}
                >
                  Go to
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      
      {/* Redirect Modal */}
      {showRedirectModal && selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <h3 className="text-lg font-semibold mb-2">Redirect Confirmation</h3>
            <p className="text-gray-600 mb-4">
              You are about to view details for "{selectedItem.name}". Continue?
            </p>
            <div className="flex gap-3 justify-end">
              <Button variant="outline" onClick={handleRedirectCancel}>
                Cancel
              </Button>
              <Button onClick={handleRedirectProceed}>
                Proceed
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}