import { useState } from "react";
import { Plus, Edit, Trash2, Eye, Upload, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const VendorManagement = () => {
  const [vendors, setVendors] = useState([
    {
      id: 1,
      name: "Grand Palace Hotel",
      type: "Venues",
      city: "Mumbai",
      rating: 4.8,
      reviews: 245,
      verified: true,
      startingPrice: "₹80,000",
      status: "active"
    },
    {
      id: 2,
      name: "Royal Caterers",
      type: "Catering", 
      city: "Delhi",
      rating: 4.6,
      reviews: 189,
      verified: true,
      startingPrice: "₹850/plate",
      status: "active"
    }
  ]);

  const [newVendor, setNewVendor] = useState({
    name: "",
    type: "",
    city: "",
    phone: "",
    email: "",
    description: "",
    services: "",
    startingPrice: "",
    address: "",
    website: "",
    portfolio: "",
    specialties: ""
  });

  const vendorTypes = ["Venues", "Catering", "Photography", "Makeup", "Decorators", "Entertainment"];
  const cities = ["Mumbai", "Delhi", "Bangalore", "Chennai", "Hyderabad", "Pune", "Kolkata", "Ahmedabad"];

  const handleAddVendor = () => {
    const vendor = {
      id: vendors.length + 1,
      name: newVendor.name,
      type: newVendor.type,
      city: newVendor.city,
      rating: 0,
      reviews: 0,
      verified: false,
      startingPrice: newVendor.startingPrice,
      status: "pending"
    };
    setVendors([...vendors, vendor]);
    setNewVendor({
      name: "", type: "", city: "", phone: "", email: "", description: "",
      services: "", startingPrice: "", address: "", website: "", portfolio: "", specialties: ""
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Vendor Management</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Add New Vendor
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Add New Vendor</DialogTitle>
            </DialogHeader>
            <Tabs defaultValue="basic" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="basic">Basic Info</TabsTrigger>
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="services">Services</TabsTrigger>
                <TabsTrigger value="media">Media</TabsTrigger>
              </TabsList>
              
              <TabsContent value="basic" className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Business Name</Label>
                    <Input
                      id="name"
                      value={newVendor.name}
                      onChange={(e) => setNewVendor({...newVendor, name: e.target.value})}
                      placeholder="Enter business name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="type">Vendor Type</Label>
                    <Select value={newVendor.type} onValueChange={(value) => setNewVendor({...newVendor, type: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select vendor type" />
                      </SelectTrigger>
                      <SelectContent>
                        {vendorTypes.map((type) => (
                          <SelectItem key={type} value={type}>{type}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="city">City</Label>
                    <Select value={newVendor.city} onValueChange={(value) => setNewVendor({...newVendor, city: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select city" />
                      </SelectTrigger>
                      <SelectContent>
                        {cities.map((city) => (
                          <SelectItem key={city} value={city}>{city}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      value={newVendor.phone}
                      onChange={(e) => setNewVendor({...newVendor, phone: e.target.value})}
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={newVendor.email}
                      onChange={(e) => setNewVendor({...newVendor, email: e.target.value})}
                      placeholder="contact@business.com"
                    />
                  </div>
                  <div>
                    <Label htmlFor="startingPrice">Starting Price</Label>
                    <Input
                      id="startingPrice"
                      value={newVendor.startingPrice}
                      onChange={(e) => setNewVendor({...newVendor, startingPrice: e.target.value})}
                      placeholder="₹50,000 or ₹500/plate"
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="details" className="space-y-4">
                <div>
                  <Label htmlFor="address">Full Address</Label>
                  <Textarea
                    id="address"
                    value={newVendor.address}
                    onChange={(e) => setNewVendor({...newVendor, address: e.target.value})}
                    placeholder="Complete business address"
                  />
                </div>
                <div>
                  <Label htmlFor="description">Business Description</Label>
                  <Textarea
                    id="description"
                    value={newVendor.description}
                    onChange={(e) => setNewVendor({...newVendor, description: e.target.value})}
                    placeholder="Describe the business, experience, and unique selling points"
                    rows={4}
                  />
                </div>
                <div>
                  <Label htmlFor="specialties">Specialties</Label>
                  <Input
                    id="specialties"
                    value={newVendor.specialties}
                    onChange={(e) => setNewVendor({...newVendor, specialties: e.target.value})}
                    placeholder="Wedding themes, cuisine types, photography styles (comma separated)"
                  />
                </div>
                <div>
                  <Label htmlFor="website">Website URL</Label>
                  <Input
                    id="website"
                    value={newVendor.website}
                    onChange={(e) => setNewVendor({...newVendor, website: e.target.value})}
                    placeholder="https://www.business.com"
                  />
                </div>
              </TabsContent>

              <TabsContent value="services" className="space-y-4">
                <div>
                  <Label htmlFor="services">Services Offered</Label>
                  <Textarea
                    id="services"
                    value={newVendor.services}
                    onChange={(e) => setNewVendor({...newVendor, services: e.target.value})}
                    placeholder="List all services offered (one per line)"
                    rows={6}
                  />
                </div>
              </TabsContent>

              <TabsContent value="media" className="space-y-4">
                <div>
                  <Label>Profile Images</Label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <Upload className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                    <p className="text-sm text-gray-500">Upload vendor profile images</p>
                    <Button variant="outline" className="mt-2">Choose Files</Button>
                  </div>
                </div>
                <div>
                  <Label htmlFor="portfolio">Portfolio Links</Label>
                  <Textarea
                    id="portfolio"
                    value={newVendor.portfolio}
                    onChange={(e) => setNewVendor({...newVendor, portfolio: e.target.value})}
                    placeholder="Instagram, Facebook, or other portfolio links (one per line)"
                    rows={3}
                  />
                </div>
              </TabsContent>
            </Tabs>
            <div className="flex justify-end space-x-2 mt-6">
              <Button variant="outline">Cancel</Button>
              <Button onClick={handleAddVendor}>
                <Save className="w-4 h-4 mr-2" />
                Save Vendor
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Vendors</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Business Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>City</TableHead>
                <TableHead>Rating</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Starting Price</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {vendors.map((vendor) => (
                <TableRow key={vendor.id}>
                  <TableCell className="font-medium">
                    <div className="flex items-center space-x-2">
                      <span>{vendor.name}</span>
                      {vendor.verified && <Badge variant="default" className="text-xs">Verified</Badge>}
                    </div>
                  </TableCell>
                  <TableCell>{vendor.type}</TableCell>
                  <TableCell>{vendor.city}</TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-1">
                      <span className="text-yellow-500">★</span>
                      <span>{vendor.rating}</span>
                      <span className="text-sm text-muted-foreground">({vendor.reviews})</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge 
                      variant={vendor.status === 'active' ? 'default' : 'secondary'}
                      className="capitalize"
                    >
                      {vendor.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{vendor.startingPrice}</TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="ghost">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="ghost">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="ghost">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default VendorManagement;