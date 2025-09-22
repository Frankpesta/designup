import { TrendingUp, TrendingDown } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"

interface StatsCardProps {
  title: string
  value: string | number
  trend: {
    value: string
    direction: "up" | "down"
  }
  icon?: React.ReactNode
  className?: string
}

export function StatsCard({ title, value, trend, icon, className }: StatsCardProps) {
  return (
    <div className={cn("bg-white rounded-lg p-6 shadow-sm border", className)}>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          {icon && (
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
              <Image src="/stat-icon.svg" alt="Stat Icon" width={28} height={29} />
            </div>
          )}
          <div>
            <h3 className="text-sm font-medium text-gray-600 pb-2">{title}</h3>
            <p className="text-2xl font-bold text-gray-900">{value}</p>
          </div>
        </div>
        <div className={cn(
          "flex items-center space-x-1 text-sm font-medium",
          trend.direction === "up" ? "text-green-600" : "text-red-600"
        )}>
          {trend.direction === "up" ? (
            <TrendingUp className="w-4 h-4" />
          ) : (
            <TrendingDown className="w-4 h-4" />
          )}
          <span>{trend.value}</span>
        </div>
      </div>
    </div>
  )
}
