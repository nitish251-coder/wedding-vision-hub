import { useState } from "react";
import { Search, Filter, Star, MapPin, Phone, Mail, Heart, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MainNavbar } from "@/components/MainNavbar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Mock vendor data
const vendors = [
  {
    id: 1,
    name: "Royal Palace Banquets",
    type: "Wedding Venue",
    location: "Mumbai, Maharashtra", 
    rating: 4.8,
    reviews: 245,
    price: "₹2,50,000 - ₹5,00,000",
    image: "🏰",
    description: "Luxurious banquet hall with royal architecture and premium amenities",
    verified: true
  },
  {
    id: 2,
    name: "Eternal Moments Photography",
    type: "Wedding Photography",
    location: "Delhi, NCR",
    rating: 4.9,
    reviews: 180,
    price: "₹1,50,000 - ₹3,00,000",
    image: "📸", 
    description: "Award-winning wedding photographers specializing in candid moments",
    verified: true
  },
  {
    id: 3,
    name: "Glamour Studio by Priya",
    type: "Bridal Makeup",
    location: "Bangalore, Karnataka",
    rating: 4.7,
    reviews: 156,
    price: "₹25,000 - ₹75,000",
    image: "💄",
    description: "Professional bridal makeup artist with 8+ years experience",
    verified: false
  }
];

const VendorPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  return (
    <div className="min-h-screen bg-background">
      <MainNavbar />
      
      {/* Header */}
      <section className="bg-muted/30 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Find Your Perfect
              <span className="text-gradient ml-3">Wedding Vendors</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Browse through thousands of trusted wedding professionals
            </p>
          </div>

          {/* Search and Filters */}
          <div className="max-w-5xl mx-auto">
            <Card className="shadow-soft">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="md:col-span-2">
                    <div className="relative">
                      <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Search vendors, venues, services..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  
                  <Select value={selectedType} onValueChange={setSelectedType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Vendor Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="venue">Wedding Venues</SelectItem>
                      <SelectItem value="photography">Photography</SelectItem>
                      <SelectItem value="makeup">Bridal Makeup</SelectItem>
                      <SelectItem value="catering">Catering</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                    <SelectTrigger>
                      <SelectValue placeholder="Location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mumbai">Mumbai</SelectItem>
                      <SelectItem value="delhi">Delhi</SelectItem>
                      <SelectItem value="bangalore">Bangalore</SelectItem>
                      <SelectItem value="pune">Pune</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  <Button variant="outline" size="sm">
                    <Filter className="w-4 h-4 mr-2" />
                    More Filters
                  </Button>
                  <Badge variant="secondary">250+ results</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Vendors Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {vendors.map((vendor) => (
              <Card key={vendor.id} className="group hover:shadow-romantic transition-romantic overflow-hidden">
                <CardHeader className="p-0">
                  <div className="h-48 bg-gradient-to-r from-primary/20 to-accent/20 flex items-center justify-center text-6xl">
                    {vendor.image}
                  </div>
                </CardHeader>
                
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-romantic">
                        {vendor.name}
                      </h3>
                      <p className="text-muted-foreground text-sm">{vendor.type}</p>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="icon">
                        <Heart className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Share2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 mb-3">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold">{vendor.rating}</span>
                      <span className="text-muted-foreground text-sm">({vendor.reviews} reviews)</span>
                    </div>
                    {vendor.verified && (
                      <Badge variant="secondary" className="text-green-600">
                        ✓ Verified
                      </Badge>
                    )}
                  </div>

                  <div className="flex items-center space-x-1 mb-3">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{vendor.location}</span>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4">
                    {vendor.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Starting from</p>
                      <p className="font-bold text-primary">{vendor.price}</p>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Phone className="w-4 h-4 mr-1" />
                        Call
                      </Button>
                      <Button variant="default" size="sm">
                        View Details
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Vendors
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VendorPage;