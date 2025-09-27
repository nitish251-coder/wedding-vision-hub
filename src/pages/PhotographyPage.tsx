import { useState } from "react";
import { Search, Filter, Star, MapPin, Phone, Heart, Share2, Camera, Users, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MainNavbar } from "@/components/MainNavbar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const photographers = [
  {
    id: 1,
    name: "Eternal Moments Photography",
    speciality: "Candid Wedding Photography",
    location: "Mumbai, Maharashtra",
    rating: 4.9,
    reviews: 287,
    price: "₹1,50,000 - ₹4,00,000",
    experience: "8+ years",
    image: "📸",
    description: "Award-winning photographers specializing in candid moments and cinematic storytelling",
    verified: true,
    services: ["Pre-Wedding", "Wedding Day", "Reception", "Albums", "Videography"]
  },
  {
    id: 2,
    name: "Royal Frame Studios",
    speciality: "Traditional + Candid",
    location: "Delhi, NCR",
    rating: 4.8,
    reviews: 234,
    price: "₹2,00,000 - ₹6,00,000",
    experience: "12+ years",
    image: "👑",
    description: "Luxury wedding photography with traditional poses and candid emotions perfectly balanced",
    verified: true,
    services: ["Traditional Portraits", "Candid", "Destination", "Same Day Edit"]
  },
  {
    id: 3,
    name: "Dream Catchers Studio",
    speciality: "Pre-Wedding Specialists",
    location: "Goa",
    rating: 4.7,
    reviews: 156,
    price: "₹80,000 - ₹2,50,000",
    experience: "6+ years",
    image: "💝",
    description: "Romantic pre-wedding shoots with beach and destination themes, creating dreamy love stories",
    verified: true,
    services: ["Beach Shoots", "Destination Pre-Wedding", "Couple Portraits", "Engagement"]
  },
  {
    id: 4,
    name: "Heritage Lens Co.",
    speciality: "Heritage & Palace Weddings",
    location: "Udaipur, Rajasthan",
    rating: 4.8,
    reviews: 189,
    price: "₹3,00,000 - ₹8,00,000",
    experience: "10+ years",
    image: "🏰",
    description: "Specialists in grand heritage weddings with royal palace backdrops and traditional ceremonies",
    verified: false,
    services: ["Heritage Venues", "Royal Portraits", "Traditional Ceremonies", "Aerial Shots"]
  }
];

const PhotographyPage = () => {
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
              <span className="text-gradient ml-3">Photography</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Capture your precious moments with India's most talented wedding photographers. From candid shots to cinematic stories, preserve your memories forever
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
                        placeholder="Search photographers by name or style..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  
                  <Select value={selectedStyle} onValueChange={setSelectedStyle}>
                    <SelectTrigger>
                      <SelectValue placeholder="Photography Style" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="candid">Candid</SelectItem>
                      <SelectItem value="traditional">Traditional</SelectItem>
                      <SelectItem value="cinematic">Cinematic</SelectItem>
                      <SelectItem value="pre-wedding">Pre-Wedding</SelectItem>
                      <SelectItem value="destination">Destination</SelectItem>
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
                      <SelectItem value="bangalore">Bangalore</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  <Button variant="outline" size="sm">
                    <Filter className="w-4 h-4 mr-2" />
                    Budget Range
                  </Button>
                  <Button variant="outline" size="sm">
                    <PlayCircle className="w-4 h-4 mr-2" />
                    Videography
                  </Button>
                  <Button variant="outline" size="sm">
                    Same Day Edit
                  </Button>
                  <Badge variant="secondary">{photographers.length} photographers found</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Photographers Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {photographers.map((photographer) => (
              <Card key={photographer.id} className="group hover:shadow-romantic transition-romantic overflow-hidden">
                <CardHeader className="p-0">
                  <div className="h-56 bg-gradient-to-r from-purple-100 to-blue-100 flex items-center justify-center text-8xl relative">
                    {photographer.image}
                    <div className="absolute top-4 right-4 flex space-x-2">
                      <Button variant="glass" size="icon" className="text-purple-600">
                        <Heart className="w-4 h-4" />
                      </Button>
                      <Button variant="glass" size="icon" className="text-purple-600">
                        <Share2 className="w-4 h-4" />
                      </Button>
                    </div>
                    <div className="absolute bottom-4 right-4">
                      <Badge variant="secondary" className="bg-white/90 text-purple-600">
                        View Portfolio
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-romantic">
                        {photographer.name}
                      </h3>
                      <p className="text-muted-foreground text-sm">{photographer.speciality}</p>
                    </div>
                    {photographer.verified && (
                      <Badge variant="secondary" className="text-green-600">
                        ✓ Verified
                      </Badge>
                    )}
                  </div>

                  <div className="flex items-center space-x-4 mb-3">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold">{photographer.rating}</span>
                      <span className="text-muted-foreground text-sm">({photographer.reviews} reviews)</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-1 mb-3">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{photographer.location}</span>
                  </div>

                  <div className="flex items-center space-x-1 mb-3">
                    <Camera className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Experience: {photographer.experience}</span>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4">
                    {photographer.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {photographer.services.map((service, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {service}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Package starts from</p>
                      <p className="font-bold text-primary">{photographer.price}</p>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <PlayCircle className="w-4 h-4 mr-1" />
                        Portfolio
                      </Button>
                      <Button variant="default" size="sm">
                        Book Now
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
              Load More Photographers
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PhotographyPage;