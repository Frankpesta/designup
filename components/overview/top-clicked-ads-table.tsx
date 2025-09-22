"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Eye } from "lucide-react"
import { RedirectModal } from "@/components/modals"

interface TopClickedAd {
  id: string
  name: string
  clicks: number
  section: string
  price: string
}

const topClickedAds: TopClickedAd[] = [
  { id: "1", name: "Big Season Sale", clicks: 1000, section: "home-page/01", price: "$120" },
  { id: "2", name: "Big Season Sale", clicks: 800, section: "home-page/02", price: "$120" },
  { id: "3", name: "Big Season Sale", clicks: 750, section: "home-page/03", price: "$120" },
  { id: "4", name: "Big Season Sale", clicks: 600, section: "home-page/04", price: "$120" },
  { id: "5", name: "Big Season Sale", clicks: 500, section: "home-page/05", price: "$120" },
]

interface TopClickedAdsTableProps {
  className?: string
}

export function TopClickedAdsTable({ className }: TopClickedAdsTableProps) {
  const [showRedirectModal, setShowRedirectModal] = useState(false)
  const [selectedAd, setSelectedAd] = useState<TopClickedAd | null>(null)

  const handleViewClick = (ad: TopClickedAd) => {
    setSelectedAd(ad)
    setShowRedirectModal(true)
  }

  const handleRedirectProceed = () => {
    if (selectedAd) {
      // This would typically redirect to the actual ad page
      window.open(`https://example.com/ad/${selectedAd.id}`, '_blank')
    }
    setShowRedirectModal(false)
    setSelectedAd(null)
  }

  const handleRedirectCancel = () => {
    setShowRedirectModal(false)
    setSelectedAd(null)
  }

  return (
    <div className={`bg-white rounded-lg p-6 shadow-sm border ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Top Clicked Ads</h3>
        <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
          View all
        </button>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-2 text-sm font-medium text-gray-600">S/N</th>
              <th className="text-left py-3 px-2 text-sm font-medium text-gray-600">Ad Title</th>
              <th className="text-left py-3 px-2 text-sm font-medium text-gray-600">Clicks</th>
              <th className="text-left py-3 px-2 text-sm font-medium text-gray-600">Section Uploaded</th>
              <th className="text-left py-3 px-2 text-sm font-medium text-gray-600">Price</th>
              <th className="text-left py-3 px-2 text-sm font-medium text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {topClickedAds.map((ad, index) => (
              <tr key={ad.id} className="border-b border-gray-100">
                <td className="py-3 px-2 text-sm text-gray-900">{index + 1}</td>
                <td className="py-3 px-2 text-sm text-gray-900">{ad.name}</td>
                <td className="py-3 px-2 text-sm text-gray-900">{ad.clicks.toLocaleString()}</td>
                <td className="py-3 px-2 text-sm text-gray-900">{ad.section}</td>
                <td className="py-3 px-2 text-sm text-gray-900">{ad.price}</td>
                <td className="py-3 px-2">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="h-8 px-3"
                    onClick={() => handleViewClick(ad)}
                  >
                    <Eye className="w-4 h-4 mr-1" />
                    view
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
        itemName={selectedAd?.name}
      />
    </div>
  )
}
