import { StatsCard } from "@/components/overview/stats-card"
import { ImpressionsChart } from "@/components/overview/impressions-chart"
import { ExpiringAdsTable } from "@/components/overview/expiring-ads-table"
import { TopClickedAdsTable } from "@/components/overview/top-clicked-ads-table"
import { GeographyPanel } from "@/components/overview/geography-panel"
import { PagesVisitedPanel } from "@/components/overview/pages-visited-panel"
import { TopSearchedItems } from "@/components/overview/top-searched-items"
import { TimeSelector } from "@/components/overview/time-selector"
import { Square } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Greeting and Time Selector */}
      <div className="rounded-lg px-6 py-2 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <h1 className="text-xl font-semibold">Hello Maurice</h1>
          <span className="text-xl">👋</span>
        </div>
        <TimeSelector />
      </div>
      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total Ads"
          value="6"
          trend={{ value: "50.4% ↑", direction: "up" }}
          icon={<Square className="w-4 h-4 text-gray-600" />}
        />
        <StatsCard
          title="Active Ads"
          value="20"
          trend={{ value: "50.4% ↑", direction: "up" }}
          icon={<Square className="w-4 h-4 text-gray-600" />}
        />
        <StatsCard
          title="Expired Ads"
          value="10"
          trend={{ value: "25.2% ↓", direction: "down" }}
          icon={<Square className="w-4 h-4 text-gray-600" />}
        />
        <StatsCard
          title="Advertisers"
          value="24"
          trend={{ value: "50.4% ↑", direction: "up" }}
          icon={<Square className="w-4 h-4 text-gray-600" />}
        />
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total Clicks"
          value="2,080"
          trend={{ value: "25.2% ↓", direction: "down" }}
          icon={<Square className="w-4 h-4 text-gray-600" />}
        />
        <StatsCard
          title="Bounce Rate"
          value="35.82%"
          trend={{ value: "50.4% ↑", direction: "up" }}
          icon={<Square className="w-4 h-4 text-gray-600" />}
        />
        <StatsCard
          title="Average Sessions"
          value="20s"
          trend={{ value: "50.4% ↑", direction: "up" }}
          icon={<Square className="w-4 h-4 text-gray-600" />}
        />
        <StatsCard
          title="Unique Visitors"
          value="31"
          trend={{ value: "50.4% ↑", direction: "up" }}
          icon={<Square className="w-4 h-4 text-gray-600" />}
        />
      </div>

      {/* Charts and Data Panels */}
      <div className="w-full">
        <div className="">
          <ImpressionsChart />
        </div>
       
      </div>

      {/* Geography and Pages Visited */}
      <div className="grid gap-4 lg:grid-cols-4">
  <ExpiringAdsTable className="lg:col-span-2" />
  <GeographyPanel className="lg:col-span-1" />
  <PagesVisitedPanel className="lg:col-span-1" />
</div>

      {/* Tables */}
      <div className="grid gap-6 lg:grid-cols-2">
        <TopClickedAdsTable />
        <TopSearchedItems />
      </div>
    </div>
  )
}
