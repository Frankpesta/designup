import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Logo } from "@/components/auth/logo"
import {
  LayoutDashboard,
  BarChart3,
  Users,
  Settings,
  LogOut,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const menuItems = [
  {
    title: "Overview",
    url: "/dashboard",
    icon: LayoutDashboard,
    isActive: true,
  },
  {
    title: "Ad Management",
    url: "/dashboard/ad-management",
    icon: BarChart3,
    isActive: false,
  },
  {
    title: "Advertisers",
    url: "/dashboard/advertisers",
    icon: Users,
    isActive: false,
  },
  {
    title: "Settings",
    url: "/dashboard/settings",
    icon: Settings,
    isActive: false,
  },
]

export function AppSidebar() {
  return (
    <Sidebar className="bg-gray-50 border-r border-gray-200">
      <SidebarHeader className="p-6">
        <Image src="/logow.svg" alt="DesignUpp Logo" width={211} height={50} className="object-cover" />
      </SidebarHeader>
      
      <SidebarContent className="px-3">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-6">
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild 
                    className={`w-full justify-start h-12 px-4 ${
                      item.isActive 
                        ? 'bg-blue-100 text-blue-600 border border-blue-100 rounded-xl' 
                        : 'text-gray-700 hover:bg-gray-100 rounded-'
                    }`}
                  >
                    <Link href={item.url}>
                      <item.icon className={`mr-3 h-5 w-5 ${
                        item.isActive ? 'text-blue-600' : 'text-gray-600'
                      }`} />
                      <span className={`font-medium ${
                        item.isActive ? 'text-blue-600' : 'text-gray-700'
                      }`}>
                        {item.title}
                      </span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter className="p-3">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton 
              className="w-full justify-start h-10 px-3 text-red-600 hover:bg-red-50 rounded-md"
            >
              <LogOut className="mr-3 h-5 w-5" />
              <span className="font-medium">Logout</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
