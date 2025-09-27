import { useState } from "react";
import { Search, Filter, Star, MapPin, Phone, Heart, Share2, Utensils, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MainNavbar } from "@/components/MainNavbar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const caterers = [
  {
    id: 1,
    name: "Royal Feast Catering",
    speciality: "North Indian & Punjabi Cuisine",
    location: "Delhi, NCR",
    rating: 4.8,
    reviews: 324,
    price: "₹800 - ₹1,500 per plate",
    minOrder: "100 plates",
    image: "🍛",
    description: "Premium catering service specializing in authentic North Indian delicacies with live counters",
    verified: true,
    services: ["Live Counters", "Buffet", "A-la-carte", "Desserts"]
  },
  {
    id: 2,
    name: "Spice Garden Caterers",
    speciality: "Multi-Cuisine",
    location: "Mumbai, Maharashtra",
    rating: 4.7,
    reviews: 198,
    price: "₹650 - ₹1,200 per plate",
    minOrder: "150 plates",
    image: "🌶️",
    description: "Expert in Indian, Chinese, and Continental cuisines with customizable menu options",
    verified: true,
    services: ["Indian", "Chinese", "Continental", "Jain Food"]
  },
  {
    id: 3,
    name: "Traditional Tiffin Co.",
    speciality: "South Indian Cuisine",
    location: "Bangalore, Karnataka",
    rating: 4.9,
    reviews: 267,
    price: "₹500 - ₹900 per plate",
    minOrder: "75 plates",
    image: "🥘",
    description: "Authentic South Indian vegetarian catering with traditional recipes and fresh ingredients",
    verified: true,
    services: ["Vegetarian Only", "Traditional", "Live Dosa", "Filter Coffee"]
  },
  {
    id: 4,
    name: "Maharaja Feast",
    speciality: "Rajasthani Cuisine",
    location: "Jaipur, Rajasthan",
    rating: 4.6,
    reviews: 145,
    price: "₹750 - ₹1,400 per plate",
    minOrder: "200 plates",
    image: "👑",
    description: "Royal Rajasthani cuisine with traditional dal-baati-churma and authentic flavors",
    verified: false,
    services: ["Royal Thali", "Dal Baati", "Sweets", "Beverages"]
  }
];

const CateringPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCuisine, setSelectedCuisine] = useState("");
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
              <span className="text-gradient ml-3">Catering</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Delight your guests with exquisite cuisine from our trusted catering partners. From traditional to contemporary, find the perfect menu for your celebration
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
                        placeholder="Search caterers by name or cuisine..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  
                  <Select value={selectedCuisine} onValueChange={setSelectedCuisine}>
                    <SelectTrigger>
                      <SelectValue placeholder="Cuisine Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="north-indian">North Indian</SelectItem>
                      <SelectItem value="south-indian">South Indian</SelectItem>
                      <SelectItem value="multi-cuisine">Multi-Cuisine</SelectItem>
                      <SelectItem value="gujarati">Gujarati</SelectItem>
                      <SelectItem value="rajasthani">Rajasthani</SelectItem>
                      <SelectItem value="bengali">Bengali</SelectItem>
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
                      <SelectItem value="jaipur">Jaipur</SelectItem>
                      <SelectItem value="pune">Pune</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  <Button variant="outline" size="sm">
                    <Filter className="w-4 h-4 mr-2" />
                    Budget Range
                  </Button>
                  <Button variant="outline" size="sm">
                    Vegetarian Only
                  </Button>
                  <Button variant="outline" size="sm">
                    Live Counters
                  </Button>
                  <Badge variant="secondary">{caterers.length} caterers found</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Caterers Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caterers.map((caterer) => (
              <Card key={caterer.id} className="group hover:shadow-romantic transition-romantic overflow-hidden">
                <CardHeader className="p-0">
                  <div className="h-48 bg-gradient-to-r from-orange-100 to-red-100 flex items-center justify-center text-6xl relative">
                    {caterer.image}
                    <div className="absolute top-4 right-4 flex space-x-2">
                      <Button variant="glass" size="icon" className="text-orange-600">
                        <Heart className="w-4 h-4" />
                      </Button>
                      <Button variant="glass" size="icon" className="text-orange-600">
                        <Share2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-romantic">
                        {caterer.name}
                      </h3>
                      <p className="text-muted-foreground text-sm">{caterer.speciality}</p>
                    </div>
                    {caterer.verified && (
                      <Badge variant="secondary" className="text-green-600">
                        ✓ Verified
                      </Badge>
                    )}
                  </div>

                  <div className="flex items-center space-x-4 mb-3">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold">{caterer.rating}</span>
                      <span className="text-muted-foreground text-sm">({caterer.reviews} reviews)</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-1 mb-3">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{caterer.location}</span>
                  </div>

                  <div className="flex items-center space-x-1 mb-3">
                    <Users className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Minimum order: {caterer.minOrder}</span>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4">
                    {caterer.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {caterer.services.map((service, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {service}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Price per plate</p>
                      <p className="font-bold text-primary">{caterer.price}</p>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Utensils className="w-4 h-4 mr-1" />
                        Menu
                      </Button>
                      <Button variant="default" size="sm">
                        Get Quote
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
              Load More Caterers
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CateringPage;