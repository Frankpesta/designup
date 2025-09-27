"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, Calendar, ChevronRight } from "lucide-react"
import { useRouter } from "next/navigation"

const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
]

const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]

export default function CustomDurationPage() {
  const router = useRouter()
  const [currentMonth, setCurrentMonth] = useState(8) // September (0-indexed)
  const [currentYear, setCurrentYear] = useState(2025)
  const [startDate, setStartDate] = useState("07/09/2025")
  const [endDate, setEndDate] = useState("21/09/2025")
  const [selectedStart, setSelectedStart] = useState(7)
  const [selectedEnd, setSelectedEnd] = useState(21)

  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (month: number, year: number) => {
    return new Date(year, month, 1).getDay()
  }

  const handleDateSelect = (day: number) => {
    if (!selectedStart || (selectedStart && selectedEnd)) {
      setSelectedStart(day)
      setSelectedEnd(0)
      setStartDate(`${day.toString().padStart(2, '0')}/${(currentMonth + 1).toString().padStart(2, '0')}/${currentYear}`)
    } else if (selectedStart && !selectedEnd) {
      if (day > selectedStart) {
        setSelectedEnd(day)
        setEndDate(`${day.toString().padStart(2, '0')}/${(currentMonth + 1).toString().padStart(2, '0')}/${currentYear}`)
      } else {
        setSelectedStart(day)
        setSelectedEnd(0)
        setStartDate(`${day.toString().padStart(2, '0')}/${(currentMonth + 1).toString().padStart(2, '0')}/${currentYear}`)
      }
    }
  }

  const isInRange = (day: number) => {
    if (selectedStart && selectedEnd) {
      return day >= Math.min(selectedStart, selectedEnd) && day <= Math.max(selectedStart, selectedEnd)
    }
    return false
  }

  const isSelected = (day: number) => {
    return day === selectedStart || day === selectedEnd
  }

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentMonth, currentYear)
    const firstDay = getFirstDayOfMonth(currentMonth, currentYear)
    const days = []

    // Previous month days
    const prevMonth = currentMonth === 0 ? 11 : currentMonth - 1
    const prevYear = currentMonth === 0 ? currentYear - 1 : currentYear
    const daysInPrevMonth = getDaysInMonth(prevMonth, prevYear)
    
    for (let i = firstDay - 1; i >= 0; i--) {
      days.push(
        <div key={`prev-${i}`} className="text-gray-400 text-center py-2">
          {daysInPrevMonth - i}
        </div>
      )
    }

    // Current month days
    for (let day = 1; day <= daysInMonth; day++) {
      const inRange = isInRange(day)
      const selected = isSelected(day)
      
      days.push(
        <div
          key={day}
          onClick={() => handleDateSelect(day)}
          className={`text-center py-2 cursor-pointer relative ${
            inRange ? 'bg-blue-100' : ''
          } ${selected ? 'bg-blue-600 text-white rounded-full mx-1' : 'hover:bg-gray-100 rounded-full mx-1'}`}
        >
          {day}
        </div>
      )
    }

    // Next month days
    const remainingDays = 42 - days.length
    for (let day = 1; day <= remainingDays; day++) {
      days.push(
        <div key={`next-${day}`} className="text-gray-400 text-center py-2">
          {day}
        </div>
      )
    }

    return days
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto p-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button
            variant="ghost"
            onClick={() => router.back()}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800 bg-transparent hover:bg-transparent p-0"
          >
            <ChevronLeft className="w-4 h-4" />
            Back
          </Button>
          <h1 className="text-2xl font-bold text-gray-900">Set Custom Duration</h1>
        </div>

        {/* Date Inputs */}
        <div className="mb-8 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">Start</label>
            <div className="relative">
              <input
                type="text"
                value={startDate}
                readOnly
                className="w-full p-4 bg-white border border-gray-300 rounded-lg pr-12"
              />
              <Calendar className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-orange-500" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">Stop</label>
            <div className="relative">
              <input
                type="text"
                value={endDate}
                readOnly
                className="w-full p-4 bg-white border border-gray-300 rounded-lg pr-12"
              />
              <Calendar className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-orange-500" />
            </div>
          </div>
        </div>

        {/* Calendar */}
        <div className="mb-8">
          <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-6">
            {/* Calendar Header */}
            <div className="flex items-center justify-between mb-6">
              <Button
                variant="ghost"
                onClick={() => setCurrentMonth(prev => prev === 0 ? 11 : prev - 1)}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <h2 className="text-lg font-semibold text-gray-900">
                {months[currentMonth]} {currentYear}
              </h2>
              <Button
                variant="ghost"
                onClick={() => setCurrentMonth(prev => prev === 11 ? 0 : prev + 1)}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>

            {/* Days of Week */}
            <div className="grid grid-cols-7 gap-1 mb-2">
              {daysOfWeek.map((day) => (
                <div key={day} className="text-center text-sm font-medium text-gray-500 py-2">
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-1">
              {renderCalendar()}
            </div>
          </div>
        </div>

        {/* Continue Button */}
        <div className="flex justify-center">
          <Button 
            onClick={() => router.push("/upload-ad-banner/upload")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-3 rounded-lg font-medium"
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  )
}
