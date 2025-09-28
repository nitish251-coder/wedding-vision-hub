import { useState } from "react";
import {
  Users,
  Building2,
  BarChart3,
  Settings,
  Shield,
  DollarSign,
  TrendingUp,
  Activity,
  CheckCircle,
  XCircle,
  Clock,
  Eye,
  Edit,
  Trash2,
  FileText,
  LogOut
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import VendorManagement from "@/components/admin/VendorManagement";
import ContentManagement from "@/components/admin/ContentManagement";
import UserManagement from "@/components/admin/UserManagement";

const AdminDashboard = () => {
  const [pendingVendors] = useState([
    { id: 1, name: "Royal Catering Services", type: "Caterer", location: "Mumbai", submittedAt: "2024-01-15", status: "pending" },
    { id: 2, name: "Dream Decorators", type: "Decorator", location: "Delhi", submittedAt: "2024-01-14", status: "pending" },
    { id: 3, name: "Lens & Light Studio", type: "Photography", location: "Bangalore", submittedAt: "2024-01-13", status: "pending" }
  ]);

  const stats = [
    { title: "Total Users", value: "12,456", change: "+15%", icon: Users, color: "text-blue-600" },
    { title: "Active Vendors", value: "2,847", change: "+8%", icon: Building2, color: "text-green-600" },
    { title: "Monthly Revenue", value: "₹45,67,890", change: "+22%", icon: DollarSign, color: "text-purple-600" },
    { title: "Platform Growth", value: "+12.5%", change: "+2.1%", icon: TrendingUp, color: "text-orange-600" }
  ];

  const recentActivities = [
    { id: 1, action: "New vendor registration", details: "Eternal Moments Photography registered", time: "2 minutes ago", type: "vendor" },
    { id: 2, action: "User complaint resolved", details: "Issue with venue booking resolved", time: "15 minutes ago", type: "support" },
    { id: 3, action: "Payment processed", details: "Monthly subscription from Premium Venues", time: "1 hour ago", type: "payment" }
  ];

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Sidebar */}
      <div className="flex">
        <aside className="w-64 bg-white shadow-soft h-screen sticky top-0">
          <div className="p-6">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 romantic-gradient rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="font-bold text-foreground">Admin Panel</h2>
                <p className="text-sm text-muted-foreground">Platform Management</p>
              </div>
            </div>

            <nav className="space-y-2">
              <Button variant="ghost" className="w-full justify-start bg-primary/10 text-primary">
                <BarChart3 className="w-4 h-4 mr-3" />
                Dashboard
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Users className="w-4 h-4 mr-3" />
                User Management
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Building2 className="w-4 h-4 mr-3" />
                Vendor Management
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <FileText className="w-4 h-4 mr-3" />
                Content Management
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <DollarSign className="w-4 h-4 mr-3" />
                Payments
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Activity className="w-4 h-4 mr-3" />
                Analytics
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
              <h1 className="text-3xl font-bold text-foreground">Admin Dashboard</h1>
              <p className="text-muted-foreground">Monitor and manage your wedding marketplace platform</p>
            </div>
            <Button variant="default">
              <Activity className="w-4 h-4 mr-2" />
              System Health
            </Button>
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
            <TabsList className="grid grid-cols-6 w-fit">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="vendors">Vendors</TabsTrigger>
              <TabsTrigger value="users">Users</TabsTrigger>
              <TabsTrigger value="content">Content</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>

            <TabsContent value="overview">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Pending Vendor Approvals */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      Pending Vendor Approvals
                      <Badge variant="secondary">{pendingVendors.length} pending</Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {pendingVendors.map((vendor) => (
                        <div key={vendor.id} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                          <div>
                            <p className="font-medium">{vendor.name}</p>
                            <p className="text-sm text-muted-foreground">{vendor.type} • {vendor.location}</p>
                          </div>
                          <div className="flex space-x-2">
                            <Button size="sm" variant="default">
                              <CheckCircle className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="destructive">
                              <XCircle className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Recent Activity */}
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Platform Activity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {recentActivities.map((activity) => (
                        <div key={activity.id} className="flex items-start space-x-3 p-3 bg-muted/30 rounded-lg">
                          <div className={`p-1 rounded-full ${
                            activity.type === 'vendor' ? 'bg-blue-100 text-blue-600' :
                            activity.type === 'support' ? 'bg-green-100 text-green-600' :
                            'bg-purple-100 text-purple-600'
                          }`}>
                            <Clock className="w-3 h-3" />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-medium">{activity.action}</p>
                            <p className="text-xs text-muted-foreground">{activity.details}</p>
                            <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="vendors">
              <VendorManagement />
            </TabsContent>

            <TabsContent value="users">
              <UserManagement />
            </TabsContent>

            <TabsContent value="content">
              <ContentManagement />
            </TabsContent>

            <TabsContent value="analytics">
              <Card>
                <CardHeader>
                  <CardTitle>Platform Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Analytics dashboard would go here...</p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="settings">
              <Card>
                <CardHeader>
                  <CardTitle>Platform Settings</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Settings interface would go here...</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;