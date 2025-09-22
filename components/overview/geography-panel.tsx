interface GeographyItem {
  country: string
  flag: string
  count: number
}

const geographyData: GeographyItem[] = [
  { country: "United States", flag: "🇺🇸", count: 16 },
  { country: "Nigeria", flag: "🇳🇬", count: 10 },
  { country: "Canada", flag: "🇨🇦", count: 5 },
]

interface GeographyPanelProps {
  className?: string
}

export function GeographyPanel({ className }: GeographyPanelProps) {
  return (
    <div className={`bg-white rounded-lg p-6 shadow-sm border ${className}`}>
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Geography</h3>
      
      <div className="space-y-3">
        {geographyData.map((item, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <span className="text-lg">{item.flag}</span>
              <span className="text-sm font-medium text-gray-900">{item.country}</span>
            </div>
            <span className="text-sm font-medium text-gray-900">{item.count}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
