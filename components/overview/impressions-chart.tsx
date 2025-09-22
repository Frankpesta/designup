interface ImpressionsChartProps {
  className?: string
}

export function ImpressionsChart({ className }: ImpressionsChartProps) {
  return (
    <div className={`bg-white rounded-lg p-6 shadow-sm border ${className}`}>
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Impressions vs Clicks per ad</h3>
      <div className="h-64 flex items-center justify-center">
        <div className="text-center">
          <div className="w-full h-48 bg-gray-50 rounded-lg flex items-end justify-center space-x-1 p-4">
            {/* Simple bar chart representation */}
            <div className="flex items-end space-x-1">
              <div className="w-6 bg-blue-500 rounded-t" style={{ height: '60%' }}></div>
              <div className="w-6 bg-orange-500 rounded-t" style={{ height: '40%' }}></div>
              <div className="w-6 bg-blue-500 rounded-t" style={{ height: '70%' }}></div>
              <div className="w-6 bg-orange-500 rounded-t" style={{ height: '50%' }}></div>
              <div className="w-6 bg-blue-500 rounded-t" style={{ height: '80%' }}></div>
              <div className="w-6 bg-orange-500 rounded-t" style={{ height: '60%' }}></div>
              <div className="w-6 bg-blue-500 rounded-t" style={{ height: '65%' }}></div>
              <div className="w-6 bg-orange-500 rounded-t" style={{ height: '55%' }}></div>
              <div className="w-6 bg-blue-500 rounded-t" style={{ height: '75%' }}></div>
              <div className="w-6 bg-orange-500 rounded-t" style={{ height: '65%' }}></div>
            </div>
          </div>
          <div className="flex justify-center space-x-6 mt-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded"></div>
              <span className="text-sm text-gray-600">Impressions</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-orange-500 rounded"></div>
              <span className="text-sm text-gray-600">Clicks</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
