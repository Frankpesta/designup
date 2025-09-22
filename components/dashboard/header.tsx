import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, Bell } from "lucide-react"

export function Header() {
  return (
    <header className="flex items-center justify-between p-6 bg-white border-b border-gray-200">
      {/* Page Title */}
      <div className="flex-1">
        <h1 className="text-xl font-semibold text-gray-900">Overview</h1>
      </div>
      
      {/* Search Bar */}
      <div className="flex-1 max-w-full mx-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search"
            className="pl-10 py-5 w-full"
          />
        </div>
      </div>
      
      {/* Right Section - Notifications and Profile */}
      <div className="flex items-center space-x-4 justify-end">
        {/* Notification Bell */}
        <div className="relative">
          <button className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors">
            <Bell className="h-5 w-5 text-gray-600" />
          </button>
          <Badge 
            variant="destructive" 
            className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs"
          >
            2
          </Badge>
        </div>
        
        {/* User Profile */}
        <div className="flex items-center space-x-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src="/api/placeholder/40/40" alt="User avatar" />
            <AvatarFallback className="bg-blue-100 text-blue-600 font-medium">
              OA
            </AvatarFallback>
          </Avatar>
          <div className="hidden md:block">
            <p className="text-sm font-medium text-gray-900">Oluwaseyi Akeredolu</p>
            <p className="text-xs text-gray-500">Admin</p>
          </div>
        </div>
      </div>
    </header>
  )
}
