import { useState } from "react";
import { Search, Filter, Star, MapPin, Phone, Heart, Share2, Palette, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MainNavbar } from "@/components/MainNavbar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const decorators = [
  {
    id: 1,
    name: "Floral Fantasy Decorators",
    speciality: "Floral & Theme Decoration",
    location: "Mumbai, Maharashtra",
    rating: 4.9,
    reviews: 287,
    price: "₹2,50,000 - ₹8,00,000",
    experience: "12+ years",
    image: "🌸",
    description: "Award-winning decorators specializing in luxury floral arrangements and themed mandap designs",
    verified: true,
    services: ["Mandap Decoration", "Stage Design", "Floral Arrangements", "Theme Decoration", "Lighting"]
  },
  {
    id: 2,
    name: "Royal Heritage Decorators",
    speciality: "Traditional & Royal Themes",
    location: "Jaipur, Rajasthan",
    rating: 4.8,
    reviews: 234,
    price: "₹4,00,000 - ₹12,00,000",
    experience: "15+ years",
    image: "👑",
    description: "Specialists in creating grand royal and traditional wedding setups with authentic heritage elements",
    verified: true,
    services: ["Royal Mandap", "Heritage Themes", "Palace Decoration", "Traditional Setup"]
  },
  {
    id: 3,
    name: "Modern Elegance Studios",
    speciality: "Contemporary & Minimalist",
    location: "Bangalore, Karnataka",
    rating: 4.7,
    reviews: 189,
    price: "₹1,80,000 - ₹6,00,000",
    experience: "8+ years",
    image: "✨",
    description: "Contemporary wedding decoration with clean lines, modern aesthetics and sophisticated lighting",
    verified: true,
    services: ["Modern Mandap", "Minimalist Design", "LED Decoration", "Contemporary Themes"]
  },
  {
    id: 4,
    name: "Destination Decor Co.",
    speciality: "Beach & Outdoor Weddings",
    location: "Goa",
    rating: 4.8,
    reviews: 156,
    price: "₹3,00,000 - ₹9,00,000",
    experience: "10+ years",
    image: "🏖️",
    description: "Experts in beach and outdoor wedding decorations with weather-resistant and stunning setups",
    verified: false,
    services: ["Beach Decoration", "Outdoor Setup", "Weather Resistant", "Tropical Themes"]
  }
];

const DecoratorsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStyle, setSelectedStyle] = useState("");
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
              <span className="text-gradient ml-3">Decorators</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Transform your venue into a dream with India's most creative wedding decorators. From traditional mandaps to contemporary themes, create magical moments
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
                        placeholder="Search decorators by name or style..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  
                  <Select value={selectedStyle} onValueChange={setSelectedStyle}>
                    <SelectTrigger>
                      <SelectValue placeholder="Decoration Style" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="traditional">Traditional</SelectItem>
                      <SelectItem value="royal">Royal & Heritage</SelectItem>
                      <SelectItem value="modern">Modern & Contemporary</SelectItem>
                      <SelectItem value="floral">Floral Themes</SelectItem>
                      <SelectItem value="beach">Beach & Outdoor</SelectItem>
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
                      <SelectItem value="goa">Goa</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  <Button variant="outline" size="sm">
                    <Filter className="w-4 h-4 mr-2" />
                    Budget Range
                  </Button>
                  <Button variant="outline" size="sm">
                    Mandap Specialists
                  </Button>
                  <Button variant="outline" size="sm">
                    Destination Weddings
                  </Button>
                  <Badge variant="secondary">{decorators.length} decorators found</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Decorators Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {decorators.map((decorator) => (
              <Card key={decorator.id} className="group hover:shadow-romantic transition-romantic overflow-hidden">
                <CardHeader className="p-0">
                  <div className="h-56 bg-gradient-to-r from-green-100 to-teal-100 flex items-center justify-center text-8xl relative">
                    {decorator.image}
                    <div className="absolute top-4 right-4 flex space-x-2">
                      <Button variant="glass" size="icon" className="text-green-600">
                        <Heart className="w-4 h-4" />
                      </Button>
                      <Button variant="glass" size="icon" className="text-green-600">
                        <Share2 className="w-4 h-4" />
                      </Button>
                    </div>
                    <div className="absolute bottom-4 right-4">
                      <Badge variant="secondary" className="bg-white/90 text-green-600">
                        View Portfolio
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-romantic">
                        {decorator.name}
                      </h3>
                      <p className="text-muted-foreground text-sm">{decorator.speciality}</p>
                    </div>
                    {decorator.verified && (
                      <Badge variant="secondary" className="text-green-600">
                        ✓ Verified
                      </Badge>
                    )}
                  </div>

                  <div className="flex items-center space-x-4 mb-3">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold">{decorator.rating}</span>
                      <span className="text-muted-foreground text-sm">({decorator.reviews} reviews)</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-1 mb-3">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{decorator.location}</span>
                  </div>

                  <div className="flex items-center space-x-1 mb-3">
                    <Award className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Experience: {decorator.experience}</span>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4">
                    {decorator.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {decorator.services.map((service, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {service}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Package starts from</p>
                      <p className="font-bold text-primary">{decorator.price}</p>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Palette className="w-4 h-4 mr-1" />
                        Portfolio
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
              Load More Decorators
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DecoratorsPage;