"use client"

import { useState, useRef, useEffect } from "react"
import { MousePointer, Clock, User, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import Image from "next/image"

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
  }
]

export function NotificationDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const [notificationList, setNotificationList] = useState(notifications)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

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
    <div className="relative" ref={dropdownRef}>
      {/* Notification Bell Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors"
      >
        <Image src={'/bell.svg'} alt="bell" width={100} height={100} className="w-6 h-6" />
      </button>
      
      {/* Notification Badge */}
      <div className="absolute -top-1 -right-1 h-5 w-5 bg-red-500 rounded-full flex items-center justify-center text-xs text-white font-medium">
        2
      </div>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900">Notification Center</h3>
            <Link 
              href="/dashboard/notifications"
              className="text-gray-500 hover:text-gray-700 text-sm"
              onClick={() => setIsOpen(false)}
            >
              See All
            </Link>
          </div>

          {/* Time Filter Tabs */}
          <div className="flex items-center space-x-2 p-4 pb-4">
            <button className="px-4 py-2 rounded-lg text-sm font-medium bg-white text-gray-900 border border-gray-200 shadow-sm">
              Today
            </button>
            <button className="px-4 py-2 rounded-lg text-sm font-medium bg-gray-100 text-gray-500 hover:bg-gray-200">
              This Week
            </button>
            <button className="px-4 py-2 rounded-lg text-sm font-medium bg-gray-100 text-gray-500 hover:bg-gray-200">
              All Time
            </button>
          </div>

          {/* Notifications List */}
          <div className="max-h-96 overflow-y-auto">
            <div className="space-y-0">
              {notificationList.map((notification, index) => (
                <div key={notification.id} className="relative">
                  {index > 0 && (
                    <div className="absolute top-0 left-0 right-0 h-px bg-gray-200" />
                  )}
                  <div className="flex items-start space-x-4 py-4 px-6 hover:bg-gray-50">
                    {/* Notification Icon */}
                    {getNotificationIcon(notification.icon, notification.isRead)}
                    
                    {/* Notification Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-2">
                          {!notification.isRead && (
                            <div className="w-2 h-2 bg-orange-500 rounded-full mt-2" />
                          )}
                          <h4 className={cn(
                            "text-sm font-semibold",
                            notification.isRead ? "text-gray-900" : "text-gray-900"
                          )}>
                            {notification.title}
                          </h4>
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

          {/* Footer */}
          <div className="p-6">
            <button 
              onClick={handleMarkAllAsRead}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-4 rounded-lg transition-colors"
            >
              Mark all as read
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
