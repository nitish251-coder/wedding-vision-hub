import { useState } from "react";
import { Search, Filter, Star, MapPin, Phone, Mail, Heart, Share2, Users, Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MainNavbar } from "@/components/MainNavbar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const venues = [
  {
    id: 1,
    name: "The Royal Palace Banquet",
    type: "Banquet Hall",
    location: "Juhu, Mumbai",
    rating: 4.8,
    reviews: 245,
    price: "₹2,50,000 - ₹5,00,000",
    capacity: "300-800 guests",
    image: "🏰",
    description: "Luxurious banquet hall with royal architecture, premium amenities and valet parking",
    verified: true,
    amenities: ["AC", "Parking", "Catering", "Decoration"]
  },
  {
    id: 2,
    name: "Seaside Resort & Spa",
    type: "Resort",
    location: "Goa",
    rating: 4.9,
    reviews: 189,
    price: "₹8,00,000 - ₹15,00,000",
    capacity: "150-500 guests", 
    image: "🏖️",
    description: "Beachfront resort with stunning ocean views and luxury spa facilities",
    verified: true,
    amenities: ["Beach Access", "Spa", "Pool", "Rooms"]
  },
  {
    id: 3,
    name: "Heritage Palace Hotel",
    type: "Heritage Hotel",
    location: "Udaipur, Rajasthan",
    rating: 4.7,
    reviews: 156,
    price: "₹12,00,000 - ₹25,00,000",
    capacity: "200-1000 guests",
    image: "🏛️",
    description: "Historic palace converted to luxury hotel with traditional Rajasthani architecture",
    verified: true,
    amenities: ["Heritage", "Luxury", "Garden", "Multiple Halls"]
  },
  {
    id: 4,
    name: "Garden View Farmhouse",
    type: "Farmhouse",
    location: "Lonavala, Maharashtra",
    rating: 4.6,
    reviews: 98,
    price: "₹3,50,000 - ₹7,00,000",
    capacity: "100-400 guests",
    image: "🌿",
    description: "Scenic farmhouse with lush gardens, perfect for outdoor ceremonies",
    verified: false,
    amenities: ["Garden", "Outdoor", "Pool", "Parking"]
  }
];

const VenuesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  return (
    <div className="min-h-screen bg-background">
      <MainNavbar />
      
      {/* Header */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold text-foreground mb-4">
              Wedding
              <span className="text-gradient ml-3">Venues</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find the perfect venue for your special day from our curated collection of banquet halls, hotels, and destination venues
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
                        placeholder="Search venues by name or location..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  
                  <Select value={selectedType} onValueChange={setSelectedType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Venue Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="banquet">Banquet Halls</SelectItem>
                      <SelectItem value="hotel">Hotels</SelectItem>
                      <SelectItem value="resort">Resorts</SelectItem>
                      <SelectItem value="farmhouse">Farmhouses</SelectItem>
                      <SelectItem value="heritage">Heritage Venues</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                    <SelectTrigger>
                      <SelectValue placeholder="Location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mumbai">Mumbai</SelectItem>
                      <SelectItem value="delhi">Delhi</SelectItem>
                      <SelectItem value="goa">Goa</SelectItem>
                      <SelectItem value="udaipur">Udaipur</SelectItem>
                      <SelectItem value="jaipur">Jaipur</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  <Button variant="outline" size="sm">
                    <Filter className="w-4 h-4 mr-2" />
                    Capacity
                  </Button>
                  <Button variant="outline" size="sm">
                    Budget Range
                  </Button>
                  <Button variant="outline" size="sm">
                    Amenities
                  </Button>
                  <Badge variant="secondary">{venues.length} venues found</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Venues Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {venues.map((venue) => (
              <Card key={venue.id} className="group hover:shadow-romantic transition-romantic overflow-hidden">
                <CardHeader className="p-0">
                  <div className="h-56 bg-gradient-to-r from-primary/20 to-accent/20 flex items-center justify-center text-8xl relative">
                    {venue.image}
                    <div className="absolute top-4 right-4 flex space-x-2">
                      <Button variant="glass" size="icon" className="text-white">
                        <Heart className="w-4 h-4" />
                      </Button>
                      <Button variant="glass" size="icon" className="text-white">
                        <Share2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-romantic">
                        {venue.name}
                      </h3>
                      <p className="text-muted-foreground text-sm">{venue.type}</p>
                    </div>
                    {venue.verified && (
                      <Badge variant="secondary" className="text-green-600">
                        ✓ Verified
                      </Badge>
                    )}
                  </div>

                  <div className="flex items-center space-x-4 mb-3">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold">{venue.rating}</span>
                      <span className="text-muted-foreground text-sm">({venue.reviews} reviews)</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-1 mb-3">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{venue.location}</span>
                  </div>

                  <div className="flex items-center space-x-1 mb-3">
                    <Users className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{venue.capacity}</span>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4">
                    {venue.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {venue.amenities.map((amenity, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {amenity}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Package starts from</p>
                      <p className="font-bold text-primary">{venue.price}</p>
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
              Load More Venues
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VenuesPage;