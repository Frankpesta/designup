import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

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
        <button className="text-sm text-gray-600 hover:text-blue-600 font-medium">
          View all
        </button>
      </div>
      
      <Table className="w-full overflow-x-none text-xs font-light">
        <TableHeader>
          <TableRow>
            <TableHead className="text-gray-600">S/N</TableHead>
            <TableHead className="text-gray-600">Ad Title</TableHead>
            <TableHead className="text-gray-600">Time Left</TableHead>
            <TableHead className="text-gray-600">Price</TableHead>
            <TableHead className="text-gray-600">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {expiringAds.map((ad, index) => (
            <TableRow key={ad.id}>
              <TableCell className="text-xs text-gray-900">{index + 1}</TableCell>
              <TableCell className="text-xs font-semibold text-gray-900">{ad.name}</TableCell>
              <TableCell className="text-xs text-gray-900">{ad.daysLeft} days</TableCell>
              <TableCell className="text-xs text-gray-900">{ad.price}</TableCell>
              <TableCell>
                <Button size="sm" variant="outline" className="h-8 px-3 rounded-full bg-blue-100 text-blue-600">
                  view
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default ExpiringAdsTable