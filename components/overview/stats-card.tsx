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
    <div className={cn("bg-white rounded-lg py-5 px-2 shadow-sm border", className)}>
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-center space-x-3">
          {icon && (
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
              <Image src="/stat-icon.svg" alt="Stat Icon" width={28} height={29} />
            </div>
          )}
          <div>
            <h3 className="text-sm font-light text-gray-600 pb-1">{title}</h3>
            
          </div>
        </div>
        </div>
        <div className="flex items-center justify-center space-x-6">
<div>
<p className="text-xl font-bold text-gray-900">{value}</p>
</div>
<div className={cn(
          "flex items-center space-x-1 text-xs font-medium",
          trend.direction === "up" ? "text-green-600 bg-green-50 rounded-full px-2 py-1" : "text-red-600 bg-red-50 rounded-full px-2 py-1"
        )}>
       
          <span>{trend.value}</span>
        </div>
        </div>
  
      
    </div>
  )
}
