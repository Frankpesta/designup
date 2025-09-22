import { FileText } from "lucide-react"

interface PageVisited {
  name: string
  count: number
}

const pagesData: PageVisited[] = [
  { name: "Home-page", count: 16 },
  { name: "About-us", count: 10 },
  { name: "Contact-us", count: 10 },
]

interface PagesVisitedPanelProps {
  className?: string
}

export function PagesVisitedPanel({ className }: PagesVisitedPanelProps) {
  return (
    <div className={`bg-white rounded-lg p-6 shadow-sm border ${className}`}>
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Pages Visited</h3>
      
      <div className="space-y-3">
        {pagesData.map((page, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <FileText className="w-4 h-4 text-gray-500" />
              <span className="text-sm font-medium text-gray-900">{page.name}</span>
            </div>
            <span className="text-sm font-medium text-gray-900">{page.count}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
