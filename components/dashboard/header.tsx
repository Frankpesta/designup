"use client"

import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, Bell } from "lucide-react"
import { usePathname } from "next/navigation"
import { NotificationDropdown } from "./notification-dropdown"

// Page title mapping
const getPageTitle = (pathname: string) => {
  const routes: Record<string, string> = {
    '/': 'Overview',
    '/dashboard': 'Overview',
    '/dashboard/overview': 'Overview',
    '/dashboard/ad-management': 'Ad Management',
    '/dashboard/advertisers': 'Advertisers',
    '/dashboard/settings': 'Settings',
    '/dashboard/notifications': 'Notification Center',
    '/upload-ad-banner': 'Upload Ad Banner',
    '/upload-ad-banner/placement': 'Placement',
    '/upload-ad-banner/duration': 'Duration',
    '/upload-ad-banner/duration/custom': 'Custom Duration',
    '/upload-ad-banner/upload': 'Upload Ad',
    '/upload-ad-banner/ad-summary': 'Ad Summary',
    '/upload-ad-banner/upload/preview': 'Preview Ad',
    '/dashboard/ad-management/upload': 'Upload Ad',
    '/dashboard/ad-management/edit': 'Edit Ad',
    '/dashboard/advertisers/add': 'Add Advertiser',
    '/dashboard/advertisers/invoices': 'Invoices',
    '/dashboard/overview/top-searched': 'Top Searched'
  }
  
  return routes[pathname] || 'Overview'
}

export function Header() {
  const pathname = usePathname()
  const pageTitle = getPageTitle(pathname)
  
  return (
    <header className="flex items-center justify-between px-8 py-6 bg-white border-b border-gray-100">
      {/* Page Title */}
      <div className="flex-1">
        <h1 className="text-2xl font-semibold text-gray-900">{pageTitle}</h1>
      </div>
      
      {/* Search Bar - Centered */}
      <div className="flex-1 max-w-xl mx-8">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <Input
            placeholder="Search"
            className="pl-12 pr-4 py-5 w-full bg-gray-50 border-gray-100 rounded-lg text-gray-600 placeholder-gray-400 focus:bg-white focus:border-blue-300 focus:ring-1 focus:ring-blue-300 transition-all"
          />
        </div>
      </div>
      
      {/* Right Section - Notifications and Profile */}
      <div className="flex items-center space-x-6 flex-1 justify-end">
        {/* Notification Dropdown */}
        <NotificationDropdown />
        
        {/* User Profile */}
        <div className="flex items-center space-x-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src="/api/placeholder/40/40" alt="User avatar" />
            <AvatarFallback className="bg-blue-500 text-white font-medium text-sm">
              OA
            </AvatarFallback>
          </Avatar>
          <div className="text-right">
            <p className="text-sm font-semibold text-gray-900">Oluwaseyi Akeredolu</p>
            <p className="text-xs text-gray-500">Admin</p>
          </div>
        </div>
      </div>
    </header>
  )
}