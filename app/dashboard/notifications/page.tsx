"use client"

import { useState } from "react"
import { Bell, MousePointer, Clock, Sparkles, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface Notification {
  id: string
  title: string
  subtitle: string
  timestamp: string
  isRead: boolean
  icon: "click" | "expire" | "user"
  timeAgo: string
}

const notifications: Notification[] = [
  {
    id: "1",
    title: "Ad Clicked",
    subtitle: "Big Season Sale ad banner was clicked.",
    timestamp: "Just now",
    isRead: false,
    icon: "click",
    timeAgo: "Just now"
  },
  {
    id: "2",
    title: "Expiring Ad",
    subtitle: "Big Season Sale ad banner will be expiring in 2 days.",
    timestamp: "1h ago",
    isRead: true,
    icon: "expire",
    timeAgo: "1h ago"
  },
  {
    id: "3",
    title: "Expiring Ad",
    subtitle: "Big Season Sale ad banner will be expiring in 2 days.",
    timestamp: "1h ago",
    isRead: true,
    icon: "expire",
    timeAgo: "1h ago"
  },
  {
    id: "4",
    title: "Expiring Ad",
    subtitle: "Big Season Sale ad banner will be expiring in 2 days.",
    timestamp: "1h ago",
    isRead: true,
    icon: "expire",
    timeAgo: "1h ago"
  },
  {
    id: "5",
    title: "Advertiser Login",
    subtitle: "Oluwaseyi Akeredolu just logged in to their dashboard.",
    timestamp: "2h ago",
    isRead: true,
    icon: "user",
    timeAgo: "2h ago"
  },
  {
    id: "6",
    title: "Advertiser Login",
    subtitle: "Oluwaseyi Akeredolu just logged in to their dashboard.",
    timestamp: "2h ago",
    isRead: true,
    icon: "user",
    timeAgo: "2h ago"
  }
]

const timeFilters = [
  { id: "today", label: "Today", active: true },
  { id: "week", label: "This Week", active: false },
  { id: "all", label: "All Time", active: false }
]

export default function NotificationsPage() {
  const [activeFilter, setActiveFilter] = useState("today")
  const [notificationList, setNotificationList] = useState(notifications)

  const handleMarkAllAsRead = () => {
    setNotificationList(prev => 
      prev.map(notification => ({ ...notification, isRead: true }))
    )
  }

  const getNotificationIcon = (icon: string, isRead: boolean) => {
    if (icon === "click") {
      return (
        <div className="relative">
          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
            <MousePointer className="w-5 h-5 text-white" />
          </div>
          <Sparkles className="w-3 h-3 text-blue-500 absolute -top-1 -right-1" />
        </div>
      )
    } else if (icon === "expire") {
      return (
        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
          <Clock className="w-5 h-5 text-white" />
        </div>
      )
    } else if (icon === "user") {
      return (
        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
          <User className="w-5 h-5 text-white" />
        </div>
      )
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-gray-200">
        <h1 className="text-2xl font-semibold text-gray-900">Notification Center</h1>
        <button 
          onClick={handleMarkAllAsRead}
          className="text-orange-500 hover:text-orange-600 text-sm font-medium"
        >
          Mark all as read
        </button>
      </div>

      {/* Time Filter Tabs */}
      <div className="flex items-center space-x-12 p-6 pb-4">
        {timeFilters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            className={cn(
              "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
              activeFilter === filter.id
                ? "bg-white text-gray-900 border border-gray-200 shadow-sm"
                : "bg-gray-100 text-gray-500 hover:bg-gray-200"
            )}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Notifications List */}
      <div className="px-6 pb-6">
        <div className="space-y-0">
          {notificationList.map((notification, index) => (
            <div key={notification.id} className="relative">
              {index > 0 && (
                <div className="absolute top-0 left-0 right-0 h-px bg-gray-200" />
              )}
              <div className="flex items-start space-x-4 py-4">
                {/* Notification Icon */}
                {getNotificationIcon(notification.icon, notification.isRead)}
                
                {/* Notification Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-2">
                      {!notification.isRead && (
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2" />
                      )}
                      <h3 className={cn(
                        "text-sm font-semibold",
                        notification.isRead ? "text-gray-900" : "text-gray-900"
                      )}>
                        {notification.title}
                      </h3>
                    </div>
                    <span className={cn(
                      "text-xs font-medium",
                      notification.isRead ? "text-gray-500" : "text-orange-500"
                    )}>
                      {notification.timeAgo}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    {notification.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
