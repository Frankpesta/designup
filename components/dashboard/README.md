# Dashboard Components

This directory contains the main dashboard components for the DesignUpp Admin application.

## Components

### AppSidebar
A responsive sidebar navigation component built with shadcn/ui sidebar components. Features:
- DesignUpp logo at the top
- Navigation menu with active state highlighting
- Menu items: Overview, Ad Management, Advertisers, Settings
- Logout button at the bottom with red styling
- Light gray background (#F8F8F8) matching the design
- Active state with blue background and border

### Header
A clean header component with:
- Page title on the left
- Centered search bar with magnifying glass icon
- Right section with notification bell (badge showing "2")
- User profile with avatar and name "Oluwaseyi Akeredolu"
- Admin role indicator below the name

## Layout Structure

### Dashboard Layout (`app/dashboard/layout.tsx`)
- Uses `SidebarProvider` for responsive sidebar behavior
- `AppSidebar` for navigation
- `SidebarInset` for main content area
- `Header` component at the top
- Main content area with proper spacing

### Pages
- `/dashboard` - Overview page with stats cards
- `/dashboard/ad-management` - Ad management page
- `/dashboard/advertisers` - Advertisers management page
- `/dashboard/settings` - Settings page

## Design Features
- **Colors**: Uses the established color scheme with primary blue (#2B6CB0) and secondary orange (#F6AD55)
- **Typography**: Manrope font throughout
- **Icons**: Lucide React icons for consistency
- **Responsive**: Mobile-friendly with collapsible sidebar
- **Active States**: Clear visual feedback for current page

## Usage

The dashboard is automatically accessible at `/dashboard` and the main page redirects there. The layout is applied to all dashboard routes through the layout.tsx file.

```tsx
// Access dashboard pages
/dashboard              // Overview
/dashboard/ad-management // Ad Management
/dashboard/advertisers   // Advertisers
/dashboard/settings      // Settings
```
