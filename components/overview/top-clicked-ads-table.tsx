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
import { Eye } from "lucide-react"
import { useRouter } from "next/navigation"
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
  const router = useRouter()
  const [showRedirectModal, setShowRedirectModal] = useState(false)
  const [selectedAd, setSelectedAd] = useState<TopClickedAd | null>(null)

  const handleViewClick = (ad: TopClickedAd) => {
    setSelectedAd(ad)
    setShowRedirectModal(true)
  }

  const handleRedirectProceed = () => {
    if (selectedAd) {
      // Redirect to the ad detail page using Next.js router
      router.push(`/ads/${selectedAd.id}`)
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
      
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-sm font-medium text-gray-600">S/N</TableHead>
            <TableHead className="text-sm font-medium text-gray-600">Ad Title</TableHead>
            <TableHead className="text-sm font-medium text-gray-600">Clicks</TableHead>
            <TableHead className="text-sm font-medium text-gray-600">Section Uploaded</TableHead>
            <TableHead className="text-sm font-medium text-gray-600">Price</TableHead>
            <TableHead className="text-sm font-medium text-gray-600">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {topClickedAds.map((ad, index) => (
            <TableRow key={ad.id}>
              <TableCell className="text-sm text-gray-900">{index + 1}</TableCell>
              <TableCell className="text-sm text-gray-900">{ad.name}</TableCell>
              <TableCell className="text-sm text-gray-900">{ad.clicks.toLocaleString()}</TableCell>
              <TableCell className="text-sm text-gray-900">{ad.section}</TableCell>
              <TableCell className="text-sm text-gray-900">{ad.price}</TableCell>
              <TableCell>
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="p-3 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 hover:text-blue-700"
                  onClick={() => handleViewClick(ad)}
                >
                  view
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      
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