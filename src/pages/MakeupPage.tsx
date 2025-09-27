import { useState } from "react";
import { Search, Filter, Star, MapPin, Phone, Heart, Share2, Palette, Users, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MainNavbar } from "@/components/MainNavbar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const makeupArtists = [
  {
    id: 1,
    name: "Glamour Studio by Priya",
    speciality: "Bridal Makeup & Hair",
    location: "Mumbai, Maharashtra",
    rating: 4.9,
    reviews: 298,
    price: "₹35,000 - ₹85,000",
    experience: "10+ years",
    image: "💄",
    description: "Celebrity makeup artist specializing in HD bridal makeup with airbrush techniques and traditional looks",
    verified: true,
    services: ["Bridal Makeup", "Hair Styling", "Draping", "Trial Available", "Airbrush"]
  },
  {
    id: 2,
    name: "Royal Beauty Lounge",
    speciality: "Traditional & Contemporary",
    location: "Delhi, NCR",
    rating: 4.8,
    reviews: 234,
    price: "₹25,000 - ₹65,000",
    experience: "8+ years",
    image: "👸",
    description: "Expert in both traditional Indian and modern western bridal looks with premium cosmetic brands",
    verified: true,
    services: ["Traditional Looks", "Modern Styles", "Party Makeup", "Family Makeup"]
  },
  {
    id: 3,
    name: "Blush & Glow Academy",
    speciality: "HD Bridal Makeup",
    location: "Bangalore, Karnataka",
    rating: 4.7,
    reviews: 187,
    price: "₹20,000 - ₹50,000",
    experience: "6+ years",
    image: "✨",
    description: "Professional HD makeup artist trained from top academies, specializing in flawless bridal transformations",
    verified: true,
    services: ["HD Makeup", "Pre-Wedding Shoot", "Engagement", "Reception"]
  },
  {
    id: 4,
    name: "Heritage Beauty Studio",
    speciality: "Regional Traditional Looks",
    location: "Chennai, Tamil Nadu",
    rating: 4.6,
    reviews: 156,
    price: "₹15,000 - ₹40,000",
    experience: "12+ years",
    image: "🌺",
    description: "Specialist in South Indian traditional bridal looks with authentic temple jewelry and classical styles",
    verified: false,
    services: ["South Indian Bridal", "Temple Jewelry", "Classical Styles", "Mehendi Makeup"]
  }
];

const MakeupPage = () => {
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
              Bridal
              <span className="text-gradient ml-3">Makeup Artists</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Look absolutely stunning on your special day with India's most talented makeup artists. From traditional to contemporary, find your perfect bridal look
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
                        placeholder="Search makeup artists by name or style..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  
                  <Select value={selectedStyle} onValueChange={setSelectedStyle}>
                    <SelectTrigger>
                      <SelectValue placeholder="Makeup Style" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="traditional">Traditional</SelectItem>
                      <SelectItem value="contemporary">Contemporary</SelectItem>
                      <SelectItem value="hd-makeup">HD Makeup</SelectItem>
                      <SelectItem value="airbrush">Airbrush</SelectItem>
                      <SelectItem value="party">Party Makeup</SelectItem>
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
                      <SelectItem value="chennai">Chennai</SelectItem>
                      <SelectItem value="kolkata">Kolkata</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  <Button variant="outline" size="sm">
                    <Filter className="w-4 h-4 mr-2" />
                    Budget Range
                  </Button>
                  <Button variant="outline" size="sm">
                    Trial Available
                  </Button>
                  <Button variant="outline" size="sm">
                    Hair Styling
                  </Button>
                  <Badge variant="secondary">{makeupArtists.length} artists found</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Makeup Artists Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {makeupArtists.map((artist) => (
              <Card key={artist.id} className="group hover:shadow-romantic transition-romantic overflow-hidden">
                <CardHeader className="p-0">
                  <div className="h-56 bg-gradient-to-r from-pink-100 to-rose-100 flex items-center justify-center text-8xl relative">
                    {artist.image}
                    <div className="absolute top-4 right-4 flex space-x-2">
                      <Button variant="glass" size="icon" className="text-pink-600">
                        <Heart className="w-4 h-4" />
                      </Button>
                      <Button variant="glass" size="icon" className="text-pink-600">
                        <Share2 className="w-4 h-4" />
                      </Button>
                    </div>
                    <div className="absolute bottom-4 right-4">
                      <Badge variant="secondary" className="bg-white/90 text-pink-600">
                        View Work
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-romantic">
                        {artist.name}
                      </h3>
                      <p className="text-muted-foreground text-sm">{artist.speciality}</p>
                    </div>
                    {artist.verified && (
                      <Badge variant="secondary" className="text-green-600">
                        ✓ Verified
                      </Badge>
                    )}
                  </div>

                  <div className="flex items-center space-x-4 mb-3">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold">{artist.rating}</span>
                      <span className="text-muted-foreground text-sm">({artist.reviews} reviews)</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-1 mb-3">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{artist.location}</span>
                  </div>

                  <div className="flex items-center space-x-1 mb-3">
                    <Palette className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Experience: {artist.experience}</span>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4">
                    {artist.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {artist.services.map((service, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {service}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Package starts from</p>
                      <p className="font-bold text-primary">{artist.price}</p>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Camera className="w-4 h-4 mr-1" />
                        Portfolio
                      </Button>
                      <Button variant="default" size="sm">
                        Book Trial
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
              Load More Artists
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MakeupPage;