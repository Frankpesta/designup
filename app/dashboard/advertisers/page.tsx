"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Search, ChevronDown, Plus, MoreVertical, Eye } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface Advertiser {
  id: string
  name: string
  advertiserId: string
  email: string
  uploadedAds: number
  status: "Active" | "Expired"
  avatar?: string
}

const advertisers: Advertiser[] = [
  {
    id: "1",
    name: "Oluwaseyi Akeredolu",
    advertiserId: "ADV-2041",
    email: "oluwaseyiakeredolu2@gmail.com",
    uploadedAds: 1,
    status: "Active"
  },
  {
    id: "2",
    name: "Oluwaseyi Akeredolu",
    advertiserId: "ADV-2041",
    email: "oluwaseyiakeredolu2@gmail.com",
    uploadedAds: 1,
    status: "Active"
  },
  {
    id: "3",
    name: "Oluwaseyi Akeredolu",
    advertiserId: "ADV-2041",
    email: "oluwaseyiakeredolu2@gmail.com",
    uploadedAds: 1,
    status: "Active"
  },
  {
    id: "4",
    name: "Oluwaseyi Akeredolu",
    advertiserId: "ADV-2041",
    email: "oluwaseyiakeredolu2@gmail.com",
    uploadedAds: 1,
    status: "Active"
  },
  {
    id: "5",
    name: "Oluwaseyi Akeredolu",
    advertiserId: "ADV-2041",
    email: "oluwaseyiakeredolu2@gmail.com",
    uploadedAds: 1,
    status: "Active"
  },
  {
    id: "6",
    name: "Oluwaseyi Akeredolu",
    advertiserId: "ADV-2041",
    email: "oluwaseyiakeredolu2@gmail.com",
    uploadedAds: 1,
    status: "Expired"
  },
  {
    id: "7",
    name: "Oluwaseyi Akeredolu",
    advertiserId: "ADV-2041",
    email: "oluwaseyiakeredolu2@gmail.com",
    uploadedAds: 1,
    status: "Active"
  },
  {
    id: "8",
    name: "Oluwaseyi Akeredolu",
    advertiserId: "ADV-2041",
    email: "oluwaseyiakeredolu2@gmail.com",
    uploadedAds: 1,
    status: "Expired"
  },
  {
    id: "9",
    name: "Oluwaseyi Akeredolu",
    advertiserId: "ADV-2041",
    email: "oluwaseyiakeredolu2@gmail.com",
    uploadedAds: 1,
    status: "Expired"
  }
]

export default function AdvertisersPage() {
  const [activeTab, setActiveTab] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedAdvertisers, setSelectedAdvertisers] = useState<string[]>([])

  const getFilteredAdvertisers = () => {
    let filtered = advertisers

    if (activeTab === "active") {
      filtered = filtered.filter(ad => ad.status === "Active")
    } else if (activeTab === "suspended") {
      filtered = filtered.filter(ad => ad.status === "Expired")
    }

    if (searchQuery) {
      filtered = filtered.filter(ad => 
        ad.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ad.advertiserId.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ad.email.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    return filtered
  }

  const filteredAdvertisers = getFilteredAdvertisers()

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedAdvertisers(filteredAdvertisers.map(ad => ad.id))
    } else {
      setSelectedAdvertisers([])
    }
  }

  const handleSelectAdvertiser = (id: string, checked: boolean) => {
    if (checked) {
      setSelectedAdvertisers([...selectedAdvertisers, id])
    } else {
      setSelectedAdvertisers(selectedAdvertisers.filter(adId => adId !== id))
    }
  }

  const isAllSelected = selectedAdvertisers.length === filteredAdvertisers.length && filteredAdvertisers.length > 0

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="mx-auto">
        <div className="space-y-6">
          {/* Top Control Panel */}
          <div className="flex items-center justify-between">
  {/* Left Section - Title and Info Icon */}
  <div className="flex items-center space-x-3">
    <h1 className="text-xl font-semibold text-gray-900">Advertisers</h1>
    <Image src={'/i.svg'} alt="info" width={100} height={100} className="w-5 h-5 object-cover" />
  </div>

  {/* Center Section - Navigation Tabs */}
  <div className="flex items-center space-x-2">
    <button
      onClick={() => setActiveTab("all")}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
        activeTab === "all"
          ? "bg-blue-100 text-blue-600"
          : "text-gray-600 hover:bg-gray-100"
      }`}
    >
      All {advertisers.length}
    </button>
    <button
      onClick={() => setActiveTab("active")}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
        activeTab === "active"
          ? "bg-blue-100 text-blue-600"
          : "text-gray-600 hover:bg-gray-100"
      }`}
    >
      Active {advertisers.filter(ad => ad.status === "Active").length}
    </button>
    <button
      onClick={() => setActiveTab("suspended")}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
        activeTab === "suspended"
          ? "bg-blue-100 text-blue-600"
          : "text-gray-600 hover:bg-gray-100"
      }`}
    >
      Expired {advertisers.filter(ad => ad.status === "Expired").length}
    </button>
  </div>

  {/* Right Section - Filter, Search, and Add Button */}
  <div className="flex items-center space-x-4">
    <div className="relative">
      <select className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
        <option>Filter by</option>
        <option>Status</option>
        <option>Date</option>
        <option>Advertiser ID</option>
      </select>
      <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
    </div>
    <div className="relative">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
      <Input
        placeholder="Search by advertiser name, ID"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="pl-10 w-72 border-gray-300"
      />
    </div>
    <Link href="/dashboard/advertisers/add">
      <Button className="bg-[#2B6CB0] hover:bg-blue-700 text-white px-[24px] h-[48px] py-[16px] rounded-lg">
        <Image src={'/plus.svg'} alt="plus" width={100} height={100} className="w-4 h-4 mr-1" />
        Add New Advertiser
      </Button>
    </Link>
  </div>
</div>

          {/* Advertisers Table */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-50 border-b border-gray-200">
                  <TableHead className="px-6 py-4 text-sm font-medium text-gray-600">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        checked={isAllSelected}
                        onCheckedChange={handleSelectAll}
                      />
                      <span>S/N</span>
                    </div>
                  </TableHead>
                  <TableHead className="px-6 py-4 text-sm font-medium text-gray-600">
                    Advertiser Name
                  </TableHead>
                  <TableHead className="px-6 py-4 text-sm font-medium text-gray-600">
                    Advertiser ID
                  </TableHead>
                  <TableHead className="px-6 py-4 text-sm font-medium text-gray-600">
                    Email
                  </TableHead>
                  <TableHead className="px-6 py-4 text-sm font-medium text-gray-600">
                    Uploaded Ads
                  </TableHead>
                  <TableHead className="px-6 py-4 text-sm font-medium text-gray-600">
                    Status
                  </TableHead>
                  <TableHead className="px-6 py-4 text-sm font-medium text-gray-600">
                    Actions
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredAdvertisers.map((advertiser, index) => (
                  <TableRow key={advertiser.id} className="hover:bg-gray-50">
                    {/* Serial Number with Checkbox */}
                    <TableCell className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          checked={selectedAdvertisers.includes(advertiser.id)}
                          onCheckedChange={(checked: boolean) => handleSelectAdvertiser(advertiser.id, checked)}
                        />
                        <span className="text-sm text-gray-600">{index + 1}</span>
                      </div>
                    </TableCell>

                    {/* Advertiser Name with Avatar */}
                    <TableCell className="px-6 py-4">
                      <div className="flex items-center space-x-3">
                        <Avatar className="w-8 h-8">
                          <AvatarImage src="/api/placeholder/32/32" alt={advertiser.name} />
                          <AvatarFallback className="bg-gray-200 text-gray-600 text-xs">
                            {advertiser.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <span className="text-sm text-gray-900 font-semibold">{advertiser.name}</span>
                      </div>
                    </TableCell>

                    {/* Advertiser ID */}
                    <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {advertiser.advertiserId}
                    </TableCell>

                    {/* Email */}
                    <TableCell className="px-6 py-4 text-sm text-gray-600 break-all">
                      {advertiser.email}
                    </TableCell>

                    {/* Uploaded Ads */}
                    <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {advertiser.uploadedAds}
                    </TableCell>

                    {/* Status */}
                    <TableCell className="px-6 py-4">
                      <Badge 
                        variant={advertiser.status === "Active" ? "default" : "destructive"}
                        className={advertiser.status === "Active" 
                          ? "bg-green-100 text-green-800 border-green-300 rounded-full py-1 px-4" 
                          : "bg-red-100 text-red-800 border-red-300 rounded-full py-1 px-4"
                        }
                      >
                        {advertiser.status}
                      </Badge>
                    </TableCell>

                    {/* Actions */}
                    <TableCell className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-2">
                        <Link href={`/dashboard/advertisers/${advertiser.id}`}>
                          <Button size="sm" variant="outline" className="h-8 px-3 rounded-full text-[#2B6CB0] bg-blue-100 border border-blue-[#2B6CB0]">
                            view
                          </Button>
                        </Link>
                        <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                          <MoreVertical className="w-4 h-4 text-[#2B6CB0]" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Footer */}
<div className="flex items-center justify-between mt-6">
  {/* Left Section - View Sent Invoices */}
  <div className="flex items-center">
    <Button 
      variant="outline" 
      className="h-[48px] text-blue-500 border-none bg-blue-100 hover:bg-blue-200 hover:text-blue-600 font-medium"
    >
      View Sent Invoices
    </Button>
  </div>

  {/* Right Section - Pagination */}
  <div className="flex items-center space-x-4">
    <span className="text-sm text-gray-400">
      Showing {filteredAdvertisers.length} of {filteredAdvertisers.length}
    </span>
    <div className="flex items-center space-x-2">
      <Button 
        variant="outline" 
        size="sm" 
        className="h-8 w-8 p-0 border-gray-300 text-gray-400 hover:bg-gray-50"
      >
        <span className="sr-only">Previous</span>
        &lt;
      </Button>
      <Button 
        size="sm" 
        className="h-8 w-8 p-0 bg-[#F6AD55] hover:bg-orange-500 text-white border-none"
      >
        1
      </Button>
      <Button 
        variant="outline" 
        size="sm" 
        className="h-8 w-8 p-0 border-gray-300 text-gray-400 hover:bg-gray-50"
      >
        <span className="sr-only">Next</span>
        &gt;
      </Button>
    </div>
  </div>
</div>
        </div>
      </div>
    </div>
  )
}