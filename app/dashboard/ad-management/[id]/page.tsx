"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Edit, ShoppingCart, Eye, Trash2, FileText, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { InvoiceSuccessModal } from "@/components/modals"

interface AdDetailsProps {
  params: {
    id: string
  }
}

// Mock data for a single ad
const getAdData = (id: string) => {
  return {
    id: id,
    name: "Abstract 3D Design",
    price: "$100",
    uploadSection: "Home-page/01",
    clickRate: "Home-page/01",
    startingDate: "20/08/2025",
    duration: "3 months",
    dueDate: "20/10/2025",
    impressions: 234,
    status: "Active",
    url: "www.bigseasonsale.com/couponsales-offers",
    advertiser: {
      name: "Oluwaseyi Akeredolu",
      email: "Oluwaseyiakeredolu2@gmail.com",
      profileImage: "/api/placeholder/60/60"
    }
  }
}

export default function AdDetailsPage({ params }: AdDetailsProps) {
  const ad = getAdData(params.id)
  const [showDeleteWarning, setShowDeleteWarning] = useState(false)
  const [showInvoiceSuccess, setShowInvoiceSuccess] = useState(false)

  const handleDeactivate = () => {
    console.log("Deactivating ad:", ad.id)
  }

  const handleDelete = () => {
    console.log("Deleting ad:", ad.id)
    setShowDeleteWarning(true)
  }

  const handleSendInvoice = () => {
    console.log("Sending invoice for ad:", ad.id)
    setShowInvoiceSuccess(true)
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto p-6">
        <div className="space-y-8">
          {/* Header with Edit Button */}
          <div className="flex justify-end">
            <Link href={`/dashboard/ad-management/edit/${params.id}`}>
              <Button className="bg-[#2B6CB0] hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2">
                <Edit className="w-4 h-4" />
                Edit
              </Button>
            </Link>
          </div>

          {/* Banner Ad Display */}
          <div className="rounded-lg overflow-hidden relative">
            <Image
              src="/banner-img.png"
              alt="Home Furniture Banner"
              width={1200}
              height={300}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Ad Details Section */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Ad Details</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Column 1 */}
              <div className="space-y-4">
                <div>
                  <span className="text-sm text-gray-500">Name:</span>
                  <p className="text-sm font-medium text-gray-900 mt-1">{ad.name}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-500">Price:</span>
                  <p className="text-sm font-medium text-gray-900 mt-1">{ad.price}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-500">Upload Section:</span>
                  <p className="text-sm font-medium text-gray-900 mt-1">{ad.uploadSection}</p>
                </div>
              </div>

              {/* Column 2 */}
              <div className="space-y-4">
                <div>
                  <span className="text-sm text-gray-500">Click Rate:</span>
                  <p className="text-sm font-medium text-gray-900 mt-1">{ad.clickRate}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-500">Starting Date:</span>
                  <p className="text-sm font-medium text-gray-900 mt-1">{ad.startingDate}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-500">Duration:</span>
                  <p className="text-sm font-medium text-gray-900 mt-1">{ad.duration}</p>
                </div>
              </div>

              {/* Column 3 */}
              <div className="space-y-4">
                <div>
                  <span className="text-sm text-gray-500">Due Date:</span>
                  <p className="text-sm font-medium text-gray-900 mt-1">{ad.dueDate}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-500">Impressions:</span>
                  <p className="text-sm font-medium text-gray-900 mt-1">{ad.impressions}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-500">Status:</span>
                  <div className="mt-1">
                    <Badge className="bg-green-100 text-green-800 border-green-200">
                      {ad.status}
                    </Badge>
                  </div>
                </div>
                <div>
                  <span className="text-sm text-gray-500">Url:</span>
                  <div className="mt-1">
                    <a 
                      href={`https://${ad.url}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 text-sm flex items-center gap-1"
                    >
                      {ad.url}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Advertiser Info Section */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Advertiser Info</h3>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Avatar className="w-16 h-16">
                  <AvatarImage src={ad.advertiser.profileImage} alt={ad.advertiser.name} />
                  <AvatarFallback className="bg-blue-100 text-blue-600 text-lg font-semibold">
                    {ad.advertiser.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="text-lg font-medium text-gray-900">{ad.advertiser.name}</h4>
                  <p className="text-sm text-gray-500">{ad.advertiser.email}</p>
                </div>
              </div>
              
              <Button 
                onClick={handleSendInvoice}
                className="bg-blue-100 text-[#2B6CB0] hover:bg-blue-200 px-6 py-3 rounded-lg flex items-center gap-2"
              >
                <FileText className="w-4 h-4" />
                Send Invoice
              </Button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button 
                onClick={handleDeactivate}
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg flex items-center gap-2"
              >
                <Eye className="w-4 h-4" />
                Deactivate Ad
              </Button>
              <Button 
                onClick={handleDelete}
                className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg flex items-center gap-2"
              >
                <Trash2 className="w-4 h-4" />
                Delete Ad
              </Button>
            </div>
            
            <div className="text-sm text-gray-500">
              This is an irreversible action
            </div>
          </div>
        </div>
      </div>

      {/* Invoice Success Modal */}
      <InvoiceSuccessModal
        isOpen={showInvoiceSuccess}
        onClose={() => setShowInvoiceSuccess(false)}
        advertiserId={ad.advertiser.name}
      />
    </div>
  )
}
