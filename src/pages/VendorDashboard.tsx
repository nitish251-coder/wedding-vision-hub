import { useState } from "react";
import { 
  BarChart3, 
  Users, 
  Calendar, 
  DollarSign, 
  TrendingUp, 
  Plus,
  Edit,
  Eye,
  Settings,
  Bell,
  LogOut
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const VendorDashboard = () => {
  const [notifications] = useState([
    { id: 1, message: "New inquiry for wedding photography", time: "2 hours ago", unread: true },
    { id: 2, message: "Booking confirmed for December 15th", time: "1 day ago", unread: true },
    { id: 3, message: "Review received - 5 stars!", time: "3 days ago", unread: false }
  ]);

  const stats = [
    { title: "Total Bookings", value: "24", change: "+12%", icon: Calendar, color: "text-blue-600" },
    { title: "Monthly Revenue", value: "₹4,50,000", change: "+18%", icon: DollarSign, color: "text-green-600" },
    { title: "Profile Views", value: "1,248", change: "+8%", icon: Eye, color: "text-purple-600" },
    { title: "Customer Rating", value: "4.9", change: "+0.2", icon: TrendingUp, color: "text-orange-600" }
  ];

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Sidebar */}
      <div className="flex">
        <aside className="w-64 bg-white shadow-soft h-screen sticky top-0">
          <div className="p-6">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 romantic-gradient rounded-full flex items-center justify-center">
                <span className="text-white font-bold">VP</span>
              </div>
              <div>
                <h2 className="font-bold text-foreground">Vendor Panel</h2>
                <p className="text-sm text-muted-foreground">Manage your business</p>
              </div>
            </div>

            <nav className="space-y-2">
              <Button variant="ghost" className="w-full justify-start bg-primary/10 text-primary">
                <BarChart3 className="w-4 h-4 mr-3" />
                Dashboard
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Calendar className="w-4 h-4 mr-3" />
                Bookings
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Users className="w-4 h-4 mr-3" />
                Inquiries
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Edit className="w-4 h-4 mr-3" />
                Profile
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Settings className="w-4 h-4 mr-3" />
                Settings
              </Button>
            </nav>

            <div className="absolute bottom-6 left-6 right-6">
              <Button variant="outline" className="w-full justify-start">
                <LogOut className="w-4 h-4 mr-3" />
                Logout
              </Button>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Welcome back, Priya!</h1>
              <p className="text-muted-foreground">Here's what's happening with your business today</p>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="relative">
                <Bell className="w-4 h-4" />
                <Badge className="absolute -top-2 -right-2 w-5 h-5 rounded-full p-0 flex items-center justify-center bg-primary text-xs">
                  2
                </Badge>
              </Button>
              <Button variant="default">
                <Plus className="w-4 h-4 mr-2" />
                Add Service
              </Button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <Card key={index} className="shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                      <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                      <p className="text-xs text-green-600 flex items-center">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        {stat.change} from last month
                      </p>
                    </div>
                    <div className={`p-2 rounded-lg bg-muted ${stat.color}`}>
                      <stat.icon className="w-5 h-5" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Main Tabs */}
          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="grid grid-cols-4 w-fit">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="bookings">Bookings</TabsTrigger>
              <TabsTrigger value="inquiries">Inquiries</TabsTrigger>
              <TabsTrigger value="profile">Profile</TabsTrigger>
            </TabsList>

            <TabsContent value="overview">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Recent Activity */}
                <Card className="lg:col-span-2">
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {notifications.map((notification) => (
                        <div key={notification.id} className="flex items-start space-x-3 p-3 bg-muted/30 rounded-lg">
                          <div className={`w-2 h-2 rounded-full mt-2 ${notification.unread ? 'bg-primary' : 'bg-muted-foreground'}`} />
                          <div className="flex-1">
                            <p className="text-sm font-medium">{notification.message}</p>
                            <p className="text-xs text-muted-foreground">{notification.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Actions */}
                <Card>
                  <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                      <Plus className="w-4 h-4 mr-3" />
                      Add New Service
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Edit className="w-4 h-4 mr-3" />
                      Update Profile
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Calendar className="w-4 h-4 mr-3" />
                      Check Availability
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Eye className="w-4 h-4 mr-3" />
                      View Public Profile
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="bookings">
              <Card>
                <CardHeader>
                  <CardTitle>Your Bookings</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Booking management interface would go here...</p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="inquiries">
              <Card>
                <CardHeader>
                  <CardTitle>Customer Inquiries</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Inquiry management interface would go here...</p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="profile">
              <Card>
                <CardHeader>
                  <CardTitle>Profile Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Profile editing interface would go here...</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
};

export default VendorDashboard;