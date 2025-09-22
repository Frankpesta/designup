"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Search, ChevronDown, Download, MoreVertical, RotateCcw, Bell, CheckCircle, AlertTriangle, Headphones } from "lucide-react"

interface Invoice {
  id: string
  invoiceId: string
  advertiser: string
  email: string
  issueDate: string
  dueDate: string
  amount: string
  status: "Pending" | "Paid" | "Overdue" | "Cancelled"
}

const invoices: Invoice[] = [
  {
    id: "1",
    invoiceId: "#INV2854086",
    advertiser: "Oluwaseyi Akeredolu",
    email: "Oluwaseyiakeredolu2@gmail.com",
    issueDate: "Sep 12, 2025",
    dueDate: "Sep 12, 2025",
    amount: "$200.00",
    status: "Pending"
  },
  {
    id: "2",
    invoiceId: "#INV2854086",
    advertiser: "Oluwaseyi Akeredolu",
    email: "Oluwaseyiakeredolu2@gmail.com",
    issueDate: "Sep 12, 2025",
    dueDate: "Sep 12, 2025",
    amount: "$200.00",
    status: "Paid"
  },
  {
    id: "3",
    invoiceId: "#INV2854086",
    advertiser: "Oluwaseyi Akeredolu",
    email: "Oluwaseyiakeredolu2@gmail.com",
    issueDate: "Sep 12, 2025",
    dueDate: "Sep 12, 2025",
    amount: "$200.00",
    status: "Paid"
  },
  {
    id: "4",
    invoiceId: "#INV2854086",
    advertiser: "Oluwaseyi Akeredolu",
    email: "Oluwaseyiakeredolu2@gmail.com",
    issueDate: "Sep 12, 2025",
    dueDate: "Sep 12, 2025",
    amount: "$200.00",
    status: "Overdue"
  },
  {
    id: "5",
    invoiceId: "#INV2854086",
    advertiser: "Oluwaseyi Akeredolu",
    email: "Oluwaseyiakeredolu2@gmail.com",
    issueDate: "Sep 12, 2025",
    dueDate: "Sep 12, 2025",
    amount: "$200.00",
    status: "Paid"
  },
  {
    id: "6",
    invoiceId: "#INV2854086",
    advertiser: "Oluwaseyi Akeredolu",
    email: "Oluwaseyiakeredolu2@gmail.com",
    issueDate: "Sep 12, 2025",
    dueDate: "Sep 12, 2025",
    amount: "$200.00",
    status: "Cancelled"
  },
  {
    id: "7",
    invoiceId: "#INV2854086",
    advertiser: "Oluwaseyi Akeredolu",
    email: "Oluwaseyiakeredolu2@gmail.com",
    issueDate: "Sep 12, 2025",
    dueDate: "Sep 12, 2025",
    amount: "$200.00",
    status: "Paid"
  },
  {
    id: "8",
    invoiceId: "#INV2854086",
    advertiser: "Oluwaseyi Akeredolu",
    email: "Oluwaseyiakeredolu2@gmail.com",
    issueDate: "Sep 12, 2025",
    dueDate: "Sep 12, 2025",
    amount: "$200.00",
    status: "Paid"
  },
  {
    id: "9",
    invoiceId: "#INV2854086",
    advertiser: "Oluwaseyi Akeredolu",
    email: "Oluwaseyiakeredolu2@gmail.com",
    issueDate: "Sep 12, 2025",
    dueDate: "Sep 12, 2025",
    amount: "$200.00",
    status: "Pending"
  },
  {
    id: "10",
    invoiceId: "#INV2854086",
    advertiser: "Oluwaseyi Akeredolu",
    email: "Oluwaseyiakeredolu2@gmail.com",
    issueDate: "Sep 12, 2025",
    dueDate: "Sep 12, 2025",
    amount: "$200.00",
    status: "Cancelled"
  }
]

export default function InvoicesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedInvoices, setSelectedInvoices] = useState<string[]>([])
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [hasError, setHasError] = useState(false)

  const filteredInvoices = invoices.filter(invoice =>
    invoice.invoiceId.toLowerCase().includes(searchQuery.toLowerCase()) ||
    invoice.advertiser.toLowerCase().includes(searchQuery.toLowerCase()) ||
    invoice.email.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedInvoices(filteredInvoices.map(invoice => invoice.id))
    } else {
      setSelectedInvoices([])
    }
  }

  const handleSelectInvoice = (id: string, checked: boolean) => {
    if (checked) {
      setSelectedInvoices([...selectedInvoices, id])
    } else {
      setSelectedInvoices(selectedInvoices.filter(invoiceId => invoiceId !== id))
    }
  }

  const isAllSelected = selectedInvoices.length === filteredInvoices.length && filteredInvoices.length > 0

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Pending":
        return (
          <Badge className="bg-orange-100 text-orange-800 border-orange-200">
            {status}
          </Badge>
        )
      case "Paid":
        return (
          <Badge className="bg-green-100 text-green-800 border-green-200">
            {status}
          </Badge>
        )
      case "Overdue":
        return (
          <Badge className="bg-red-100 text-red-800 border-red-200">
            {status}
          </Badge>
        )
      case "Cancelled":
        return (
          <Badge className="bg-gray-100 text-gray-600 border-gray-200">
            {status}
          </Badge>
        )
      default:
        return null
    }
  }

  const getActionMenu = (invoice: Invoice) => {
    if (openDropdown !== invoice.id) return null

    const menuItems = []
    
    if (invoice.status === "Pending") {
      menuItems.push(
        { icon: <CheckCircle className="w-4 h-4" />, label: "Mark as paid", action: "mark-paid" },
        { icon: <RotateCcw className="w-4 h-4" />, label: "Resend", action: "resend" },
        { icon: <Download className="w-4 h-4" />, label: "Download", action: "download" }
      )
    } else if (invoice.status === "Overdue") {
      menuItems.push(
        { icon: <RotateCcw className="w-4 h-4" />, label: "Resend", action: "resend" },
        { icon: <Bell className="w-4 h-4" />, label: "Send Reminder", action: "reminder" },
        { icon: <Download className="w-4 h-4" />, label: "Download", action: "download" }
      )
    } else {
      menuItems.push(
        { icon: <RotateCcw className="w-4 h-4" />, label: "Resend", action: "resend" },
        { icon: <Download className="w-4 h-4" />, label: "Download", action: "download" }
      )
    }

    return (
      <div className="absolute right-0 top-8 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-10 min-w-[160px]">
        {menuItems.map((item, index) => (
          <button
            key={index}
            className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-3 text-gray-600"
            onClick={() => {
              console.log(`${item.action} for invoice ${invoice.id}`)
              setOpenDropdown(null)
            }}
          >
            <span className="text-blue-500">{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </div>
    )
  }

  // Empty State Component
  const EmptyState = () => (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <div className="w-20 h-20 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-6">
          <AlertTriangle className="w-10 h-10 text-blue-600" />
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">No invoices found yet.</h3>
        <p className="text-gray-600">Invoices will be generated here when you assign ad slots to advertisers.</p>
      </div>
    </div>
  )

  // Error State Component
  const ErrorState = () => (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <div className="relative w-20 h-20 bg-pink-100 rounded-lg flex items-center justify-center mx-auto mb-6">
          <Headphones className="w-10 h-10 text-red-600" />
          <div className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-2 py-1 rounded-full font-semibold">
            SUPPORT
          </div>
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">We couldn't load invoices at the moment.</h3>
        <p className="text-gray-600">Please retry or contact support.</p>
      </div>
    </div>
  )

  // Show error state if there's an error
  if (hasError) {
    return <ErrorState />
  }

  // Show empty state if no invoices
  if (filteredInvoices.length === 0 && !isLoading) {
    return <EmptyState />
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto p-6">
        <div className="space-y-6">
        

          {/* Search and Filter Controls */}
          <div className="flex items-center justify-between">
              {/* Header */}
          <div className="flex items-center space-x-8 flex-1">
            <h1 className="text-2xl font-semibold text-gray-900">Invoices</h1>
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search by Invoice ID, Advertiser, Email"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500 rounded-lg h-10"
              />
            </div>
          </div>
            
            
           <div className="flex items-center space-x-8">
             <Button className="bg-white text-gray-900 hover:bg-gray-100 px-4 py-2 rounded-lg flex items-center gap-2 h-10 border border-gray-300">
              Filter by
              <ChevronDown className="w-4 h-4" />
            </Button>
            
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 h-10">
              <Download className="w-4 h-4" />
              Export
            </Button>
           </div>
          </div>

          {/* Invoices Table */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <Table>
              <TableHeader>
                <TableRow className="bg-gray-50 border-b border-gray-200">
                  <TableHead className="px-4 py-4 text-left text-sm font-medium text-gray-600 w-12">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        checked={isAllSelected}
                        onCheckedChange={handleSelectAll}
                        className="border-gray-400"
                      />
                    </div>
                  </TableHead>
                  <TableHead className="px-4 py-4 text-left text-sm font-medium text-gray-600 min-w-[120px]">
                    Invoice ID
                  </TableHead>
                  <TableHead className="px-4 py-4 text-left text-sm font-medium text-gray-600 min-w-[150px]">
                    Advertiser
                  </TableHead>
                  <TableHead className="px-4 py-4 text-left text-sm font-medium text-gray-600 min-w-[200px]">
                    Email
                  </TableHead>
                  <TableHead className="px-4 py-4 text-left text-sm font-medium text-gray-600 min-w-[100px]">
                    Issue Date
                  </TableHead>
                  <TableHead className="px-4 py-4 text-left text-sm font-medium text-gray-600 min-w-[100px]">
                    Due Date
                  </TableHead>
                  <TableHead className="px-4 py-4 text-left text-sm font-medium text-gray-600 min-w-[100px]">
                    Amount
                  </TableHead>
                  <TableHead className="px-4 py-4 text-left text-sm font-medium text-gray-600 min-w-[100px]">
                    Status
                  </TableHead>
                  <TableHead className="px-4 py-4 text-left text-sm font-medium text-gray-600 w-20">
                    Actions
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredInvoices.map((invoice, index) => (
                  <TableRow 
                    key={invoice.id} 
                    className={`hover:bg-gray-50 ${
                      index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                    }`}
                  >
                    <TableCell className="px-4 py-4 whitespace-nowrap w-12">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          checked={selectedInvoices.includes(invoice.id)}
                          onCheckedChange={(checked: boolean) => handleSelectInvoice(invoice.id, checked)}
                          className="border-gray-400"
                        />
                      </div>
                    </TableCell>
                    <TableCell className="px-4 py-4 whitespace-nowrap text-sm text-gray-900 min-w-[120px]">
                      {invoice.invoiceId}
                    </TableCell>
                    <TableCell className="px-4 py-4 whitespace-nowrap text-sm text-gray-900 min-w-[150px]">
                      {invoice.advertiser}
                    </TableCell>
                    <TableCell className="px-4 py-4 whitespace-nowrap text-sm text-gray-900 min-w-[200px]">
                      {invoice.email}
                    </TableCell>
                    <TableCell className="px-4 py-4 whitespace-nowrap text-sm text-gray-900 min-w-[100px]">
                      {invoice.issueDate}
                    </TableCell>
                    <TableCell className="px-4 py-4 whitespace-nowrap text-sm text-gray-900 min-w-[100px]">
                      {invoice.dueDate}
                    </TableCell>
                    <TableCell className="px-4 py-4 whitespace-nowrap text-sm font-semibold text-gray-900 min-w-[100px]">
                      {invoice.amount}
                    </TableCell>
                    <TableCell className="px-4 py-4 whitespace-nowrap min-w-[100px]">
                      {getStatusBadge(invoice.status)}
                    </TableCell>
                    <TableCell className="px-4 py-4 whitespace-nowrap w-20">
                      <div className="relative">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0 text-gray-400 hover:text-gray-600 hover:bg-gray-100"
                          onClick={() => setOpenDropdown(openDropdown === invoice.id ? null : invoice.id)}
                        >
                          <MoreVertical className="w-4 h-4" />
                        </Button>
                        {getActionMenu(invoice)}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">
              Showing {filteredInvoices.length} of {filteredInvoices.length}
            </span>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" className="h-8 w-8 p-0 border-gray-300 text-gray-600 hover:bg-gray-50">
                <span className="sr-only">Previous</span>
                &lt;
              </Button>
              <Button size="sm" className="h-8 w-8 p-0 bg-orange-500 text-white border-orange-500">
                1
              </Button>
              <Button variant="outline" size="sm" className="h-8 w-8 p-0 border-gray-300 text-gray-600 hover:bg-gray-50">
                <span className="sr-only">Next</span>
                &gt;
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
