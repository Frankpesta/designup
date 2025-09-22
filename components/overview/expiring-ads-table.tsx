import { Button } from "@/components/ui/button"
import { Eye } from "lucide-react"

interface ExpiringAd {
  id: string
  name: string
  daysLeft: number
  price: string
}

const expiringAds: ExpiringAd[] = [
  { id: "1", name: "Big Season Sale", daysLeft: 3, price: "$120" },
  { id: "2", name: "Big Season Sale", daysLeft: 3, price: "$120" },
  { id: "3", name: "Big Season Sale", daysLeft: 3, price: "$120" },
  { id: "4", name: "Big Season Sale", daysLeft: 3, price: "$120" },
]

interface ExpiringAdsTableProps {
  className?: string
}

export function ExpiringAdsTable({ className }: ExpiringAdsTableProps) {
  return (
    <div className={`bg-white rounded-lg p-6 shadow-sm border ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Expiring Ads</h3>
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
              <th className="text-left py-3 px-2 text-sm font-medium text-gray-600">Time Left</th>
              <th className="text-left py-3 px-2 text-sm font-medium text-gray-600">Price</th>
              <th className="text-left py-3 px-2 text-sm font-medium text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {expiringAds.map((ad, index) => (
              <tr key={ad.id} className="border-b border-gray-100">
                <td className="py-3 px-2 text-sm text-gray-900">{index + 1}</td>
                <td className="py-3 px-2 text-sm text-gray-900">{ad.name}</td>
                <td className="py-3 px-2 text-sm text-gray-900">{ad.daysLeft} days</td>
                <td className="py-3 px-2 text-sm text-gray-900">{ad.price}</td>
                <td className="py-3 px-2">
                  <Button size="sm" variant="outline" className="h-8 px-3">
                    <Eye className="w-4 h-4 mr-1" />
                    view
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
