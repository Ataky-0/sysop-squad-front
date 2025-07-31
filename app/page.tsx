"use client"

import * as React from "react"
import {
  Bell,
  ChevronDown,
  FileText,
  Home,
  MapPin,
  Plus,
  Search,
  Star,
  Ticket,
  AlertTriangle,
  Clock,
  CheckCircle,
  XCircle,
  Upload,
  Send,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Textarea } from "@/components/ui/textarea"

const navigationItems = [
  {
    title: "Dashboard",
    icon: Home,
    id: "dashboard",
  },
  {
    title: "Create Ticket",
    icon: Plus,
    id: "create-ticket",
  },
  {
    title: "My Tickets",
    icon: Ticket,
    id: "my-tickets",
  },
  {
    title: "Consultant Map",
    icon: MapPin,
    id: "consultant-map",
  },
  {
    title: "Notifications",
    icon: Bell,
    id: "notifications",
  },
  {
    title: "Evaluation",
    icon: Star,
    id: "evaluation",
  },
]

const recentTickets = [
  {
    id: "TK-001",
    customer: "John Smith",
    problem: "Laptop won't boot after Windows update",
    status: "In Progress",
    priority: "High",
    consultant: "Sarah Johnson",
    created: "2 hours ago",
  },
  {
    id: "TK-002",
    customer: "Maria Garcia",
    problem: "Printer connectivity issues",
    status: "Open",
    priority: "Medium",
    consultant: "Unassigned",
    created: "4 hours ago",
  },
  {
    id: "TK-003",
    customer: "David Chen",
    problem: "Email synchronization problems",
    status: "Resolved",
    priority: "Low",
    consultant: "Mike Wilson",
    created: "1 day ago",
  },
  {
    id: "TK-004",
    customer: "Lisa Anderson",
    problem: "Software installation failure",
    status: "Escalated",
    priority: "Critical",
    consultant: "Sarah Johnson",
    created: "30 minutes ago",
  },
]

export default function SysopSquad() {
  const [activeSection, setActiveSection] = React.useState("dashboard")
  const [rating, setRating] = React.useState(0)

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Open":
        return <Clock className="h-4 w-4 text-blue-500" />
      case "In Progress":
        return <AlertTriangle className="h-4 w-4 text-yellow-500" />
      case "Resolved":
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case "Escalated":
        return <XCircle className="h-4 w-4 text-red-500" />
      default:
        return <Clock className="h-4 w-4 text-gray-500" />
    }
  }

  const getStatusBadge = (status: string) => {
    const variants: Record<string, "default" | "secondary" | "destructive" | "outline"> = {
      Open: "outline",
      "In Progress": "secondary",
      Resolved: "default",
      Escalated: "destructive",
    }
    return <Badge variant={variants[status] || "outline"}>{status}</Badge>
  }

  const renderContent = () => {
    switch (activeSection) {
      case "dashboard":
        return (
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-white">Dashboard</h1>
              <p className="text-gray-400">Overview of your ticket management system</p>
            </div>

            {/* Statistics Cards */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-200">Total Tickets</CardTitle>
                  <FileText className="h-4 w-4 text-purple-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">1,234</div>
                  <p className="text-xs text-gray-400">+12% from last month</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border-gray-700">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-200">Open Tickets</CardTitle>
                  <Clock className="h-4 w-4 text-blue-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">89</div>
                  <p className="text-xs text-gray-400">-5% from yesterday</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border-gray-700">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-200">In Progress</CardTitle>
                  <AlertTriangle className="h-4 w-4 text-yellow-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">45</div>
                  <p className="text-xs text-gray-400">+8% from yesterday</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border-gray-700">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-200">Resolved Today</CardTitle>
                  <CheckCircle className="h-4 w-4 text-green-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">23</div>
                  <p className="text-xs text-gray-400">+15% from yesterday</p>
                </CardContent>
              </Card>
            </div>

            {/* Alerts */}
            <Card className="bg-red-900/20 border-red-800">
              <CardHeader>
                <CardTitle className="text-red-400 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  Critical Alerts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-200">Ticket TK-004 escalated - Software installation failure</span>
                    <Badge variant="destructive">Critical</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-200">System maintenance scheduled for tonight</span>
                    <Badge variant="outline">Info</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Tickets */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Recent Tickets</CardTitle>
                <CardDescription className="text-gray-400">Latest customer support requests</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow className="border-gray-700">
                      <TableHead className="text-gray-300">Ticket ID</TableHead>
                      <TableHead className="text-gray-300">Customer</TableHead>
                      <TableHead className="text-gray-300">Problem</TableHead>
                      <TableHead className="text-gray-300">Status</TableHead>
                      <TableHead className="text-gray-300">Consultant</TableHead>
                      <TableHead className="text-gray-300">Created</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentTickets.map((ticket) => (
                      <TableRow key={ticket.id} className="border-gray-700">
                        <TableCell className="font-medium text-purple-400">{ticket.id}</TableCell>
                        <TableCell className="text-gray-200">{ticket.customer}</TableCell>
                        <TableCell className="text-gray-200 max-w-xs truncate">{ticket.problem}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            {getStatusIcon(ticket.status)}
                            {getStatusBadge(ticket.status)}
                          </div>
                        </TableCell>
                        <TableCell className="text-gray-200">{ticket.consultant}</TableCell>
                        <TableCell className="text-gray-400">{ticket.created}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        )

      case "create-ticket":
        return (
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-white">Create New Ticket</h1>
              <p className="text-gray-400">Submit a new support request</p>
            </div>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Ticket Information</CardTitle>
                <CardDescription className="text-gray-400">
                  Please provide detailed information about the issue
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="customer-name" className="text-gray-200">
                      Customer Name
                    </Label>
                    <Input
                      id="customer-name"
                      placeholder="Enter customer name"
                      className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="category" className="text-gray-200">
                      Category
                    </Label>
                    <Select>
                      <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-700 border-gray-600">
                        <SelectItem value="hardware">Hardware Issues</SelectItem>
                        <SelectItem value="software">Software Problems</SelectItem>
                        <SelectItem value="network">Network Connectivity</SelectItem>
                        <SelectItem value="email">Email Support</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="problem-description" className="text-gray-200">
                    Problem Description
                  </Label>
                  <Textarea
                    id="problem-description"
                    placeholder="Describe the issue in detail..."
                    className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 min-h-[120px]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="priority" className="text-gray-200">
                    Priority Level
                  </Label>
                  <Select>
                    <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                      <SelectValue placeholder="Select priority" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-700 border-gray-600">
                      <SelectItem value="low">Low</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="high">High</SelectItem>
                      <SelectItem value="critical">Critical</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="image-upload" className="text-gray-200">
                    Upload Image (Optional)
                  </Label>
                  <div className="border-2 border-dashed border-gray-600 rounded-lg p-6 text-center">
                    <Upload className="mx-auto h-12 w-12 text-gray-400" />
                    <div className="mt-4">
                      <Button variant="outline" className="bg-gray-700 border-gray-600 text-white hover:bg-gray-600">
                        Choose File
                      </Button>
                      <p className="mt-2 text-sm text-gray-400">PNG, JPG, GIF up to 10MB</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white flex items-center gap-2">
                    <Send className="h-4 w-4" />
                    Submit Ticket
                  </Button>
                  <Button variant="outline" className="bg-gray-700 border-gray-600 text-white hover:bg-gray-600">
                    Save as Draft
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )

      case "evaluation":
        return (
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-white">Service Evaluation</h1>
              <p className="text-gray-400">Rate your consultant's service</p>
            </div>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Evaluate Consultant Service</CardTitle>
                <CardDescription className="text-gray-400">
                  Your feedback helps us improve our service quality
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label className="text-gray-200">Ticket Information</Label>
                    <div className="bg-gray-700 p-4 rounded-lg">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="text-white font-medium">Ticket #TK-003</p>
                          <p className="text-gray-400">Email synchronization problems</p>
                          <p className="text-sm text-gray-500">Consultant: Mike Wilson</p>
                        </div>
                        <Badge className="bg-green-600">Resolved</Badge>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-gray-200">Overall Rating</Label>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          onClick={() => setRating(star)}
                          className={`p-1 ${star <= rating ? "text-yellow-400" : "text-gray-600"}`}
                        >
                          <Star className="h-8 w-8 fill-current" />
                        </button>
                      ))}
                    </div>
                    <p className="text-sm text-gray-400">
                      {rating === 0 && "Click to rate"}
                      {rating === 1 && "Poor"}
                      {rating === 2 && "Fair"}
                      {rating === 3 && "Good"}
                      {rating === 4 && "Very Good"}
                      {rating === 5 && "Excellent"}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="feedback" className="text-gray-200">
                      Additional Feedback
                    </Label>
                    <Textarea
                      id="feedback"
                      placeholder="Share your experience with the consultant's service..."
                      className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 min-h-[100px]"
                    />
                  </div>

                  <div className="space-y-4">
                    <Label className="text-gray-200">Rate Specific Aspects</Label>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-gray-300">Response Time</span>
                          <div className="flex gap-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star key={star} className="h-4 w-4 text-yellow-400 fill-current" />
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-gray-300">Technical Knowledge</span>
                          <div className="flex gap-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star key={star} className="h-4 w-4 text-yellow-400 fill-current" />
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-gray-300">Communication</span>
                          <div className="flex gap-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star key={star} className="h-4 w-4 text-yellow-400 fill-current" />
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-gray-300">Problem Resolution</span>
                          <div className="flex gap-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star key={star} className="h-4 w-4 text-yellow-400 fill-current" />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white">Submit Evaluation</Button>
                  <Button variant="outline" className="bg-gray-700 border-gray-600 text-white hover:bg-gray-600">
                    Skip for Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )

      default:
        return (
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-white mb-2">Coming Soon</h2>
              <p className="text-gray-400">This section is under development</p>
            </div>
          </div>
        )
    }
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <SidebarProvider>
        <Sidebar className="bg-gray-800 border-gray-700">
          <SidebarHeader>
            <SidebarMenu>
              <SidebarMenuItem>
                <div className="flex items-center gap-3 px-2 py-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-600">
                    <FileText className="h-4 w-4 text-white" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-white text-lg">Sysop Squad</span>
                    <span className="text-xs text-gray-400">Ticket Management</span>
                  </div>
                </div>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarHeader>

          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel className="text-gray-400">Navigation</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {navigationItems.map((item) => (
                    <SidebarMenuItem key={item.id}>
                      <SidebarMenuButton
                        asChild
                        isActive={activeSection === item.id}
                        onClick={() => setActiveSection(item.id)}
                        className="text-gray-300 hover:text-white hover:bg-gray-700 data-[active=true]:bg-purple-600 data-[active=true]:text-white"
                      >
                        <button className="flex items-center gap-2 w-full">
                          <item.icon className="h-4 w-4" />
                          <span>{item.title}</span>
                        </button>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          <SidebarRail />
        </Sidebar>

        <SidebarInset className="bg-gray-900">
          <header className="flex h-16 shrink-0 items-center gap-2 border-b border-gray-700 px-4 bg-gray-800">
            <SidebarTrigger className="-ml-1 text-gray-300 hover:text-white" />
            <Separator orientation="vertical" className="mr-2 h-4 bg-gray-600" />

            <div className="flex flex-1 items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                  <Input
                    placeholder="Search tickets..."
                    className="pl-8 w-64 bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
                  />
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white hover:bg-gray-700">
                  <Bell className="h-4 w-4" />
                </Button>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className="flex items-center gap-2 text-gray-300 hover:text-white hover:bg-gray-700"
                    >
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="/placeholder.svg?height=32&width=32" />
                        <AvatarFallback className="bg-purple-600 text-white">JD</AvatarFallback>
                      </Avatar>
                      <span>John Doe</span>
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="bg-gray-800 border-gray-700">
                    <DropdownMenuItem className="text-gray-300 hover:text-white hover:bg-gray-700">
                      Profile Settings
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-gray-300 hover:text-white hover:bg-gray-700">
                      Preferences
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-gray-300 hover:text-white hover:bg-gray-700">
                      Sign Out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </header>

          <div className="flex flex-1 flex-col gap-4 p-6">{renderContent()}</div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  )
}
