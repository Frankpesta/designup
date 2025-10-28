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
  const maxCount = Math.max(...geographyData.map(item => item.count))
  
  return (
    <div className={`bg-white rounded-lg p-6 shadow-sm border ${className}`}>
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Geography</h3>
      
      <div className="space-y-3">
        {geographyData.map((item, index) => {
          const widthPercentage = (item.count / maxCount) * 100
          
          return (
            <div key={index} className="flex items-center gap-3">
              <div 
                className="flex items-center gap-3 bg-gray-100 rounded-full px-4 py-3 transition-all"
                style={{ width: `${widthPercentage}%`, minWidth: '50%' }}
              >
                <img 
                  src={`https://flagcdn.com/w40/${item.flag === '🇺🇸' ? 'us' : item.flag === '🇳🇬' ? 'ng' : 'ca'}.png`}
                  alt={`${item.country} flag`}
                  className="w-4 h-4 rounded object-cover"
                />
                <span className="text-sm font-light text-gray-900 whitespace-nowrap">{item.country}</span>
              </div>
              <span className="text-sm font-semibold text-gray-600 ml-auto">{item.count}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default GeographyPanel