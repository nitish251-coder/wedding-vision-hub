import { useState } from "react";
import { Search, Filter, Heart, Share2, MapPin, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MainNavbar } from "@/components/MainNavbar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const realWeddings = [
  {
    id: 1,
    title: "Priya & Rahul's Royal Palace Wedding",
    couple: "Priya & Rahul",
    location: "Udaipur, Rajasthan",
    date: "December 2023",
    theme: "Royal Heritage",
    guests: "500 guests",
    image: "👑",
    description: "A magnificent 3-day celebration at a heritage palace with traditional Rajasthani customs and royal grandeur",
    highlights: ["Palace Venue", "Royal Decor", "Traditional Ceremonies", "Destination Wedding"],
    photographer: "Heritage Lens Co.",
    budget: "₹25-30 Lakhs"
  },
  {
    id: 2,
    title: "Anjali & Vikram's Beach Paradise Wedding",
    couple: "Anjali & Vikram",
    location: "Goa",
    date: "February 2024",
    theme: "Beach Romance",
    guests: "150 guests",
    image: "🏖️",
    description: "An intimate beachside ceremony followed by a sunset reception with barefoot dancing on the sand",
    highlights: ["Beach Ceremony", "Sunset Reception", "Tropical Decor", "Live Music"],
    photographer: "Dream Catchers Studio",
    budget: "₹12-15 Lakhs"
  },
  {
    id: 3,
    title: "Kavya & Arjun's Garden Affair",
    couple: "Kavya & Arjun",
    location: "Bangalore, Karnataka",
    date: "January 2024",
    theme: "Garden Party",
    guests: "300 guests",
    image: "🌸",
    description: "A charming outdoor wedding in a lush garden setting with fairy lights and floral arrangements",
    highlights: ["Garden Venue", "Floral Decor", "Fairy Lights", "Eco-Friendly"],
    photographer: "Eternal Moments Photography",
    budget: "₹18-22 Lakhs"
  },
  {
    id: 4,
    title: "Riya & Sameer's Modern Minimalist Wedding",
    couple: "Riya & Sameer",
    location: "Mumbai, Maharashtra",
    date: "March 2024",
    theme: "Modern Minimalist",
    guests: "200 guests",
    image: "🤍",
    description: "A contemporary celebration with clean lines, neutral tones, and sophisticated elegance",
    highlights: ["Modern Decor", "Minimalist Design", "City Venue", "Contemporary Style"],
    photographer: "Royal Frame Studios",
    budget: "₹20-25 Lakhs"
  }
];

const RealWeddingsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTheme, setSelectedTheme] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  return (
    <div className="min-h-screen bg-background">
      <MainNavbar />
      
      {/* Header */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold text-foreground mb-4">
              Real
              <span className="text-gradient ml-3">Weddings</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get inspired by real couples who celebrated their love in unique and beautiful ways. Discover themes, venues, and ideas for your perfect day
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
                        placeholder="Search by couple names or theme..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  
                  <Select value={selectedTheme} onValueChange={setSelectedTheme}>
                    <SelectTrigger>
                      <SelectValue placeholder="Wedding Theme" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="traditional">Traditional</SelectItem>
                      <SelectItem value="royal">Royal Heritage</SelectItem>
                      <SelectItem value="beach">Beach</SelectItem>
                      <SelectItem value="garden">Garden</SelectItem>
                      <SelectItem value="modern">Modern</SelectItem>
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
                    Season
                  </Button>
                  <Button variant="outline" size="sm">
                    Guest Count
                  </Button>
                  <Badge variant="secondary">{realWeddings.length} weddings featured</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Real Weddings Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {realWeddings.map((wedding) => (
              <Card key={wedding.id} className="group hover:shadow-romantic transition-romantic overflow-hidden">
                <CardHeader className="p-0">
                  <div className="h-64 bg-gradient-to-r from-primary/20 to-accent/20 flex items-center justify-center text-9xl relative">
                    {wedding.image}
                    <div className="absolute top-4 right-4 flex space-x-2">
                      <Button variant="glass" size="icon" className="text-white">
                        <Heart className="w-4 h-4" />
                      </Button>
                      <Button variant="glass" size="icon" className="text-white">
                        <Share2 className="w-4 h-4" />
                      </Button>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <Badge variant="secondary" className="bg-white/90 text-primary">
                        {wedding.theme}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-romantic mb-2">
                      {wedding.title}
                    </h3>
                    <p className="text-lg font-semibold text-primary">{wedding.couple}</p>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{wedding.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{wedding.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{wedding.guests}</span>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4">
                    {wedding.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {wedding.highlights.map((highlight, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Photographer:</span>
                      <span className="font-medium">{wedding.photographer}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Budget Range:</span>
                      <span className="font-medium text-primary">{wedding.budget}</span>
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <Button variant="outline" className="flex-1">
                      View Full Story
                    </Button>
                    <Button variant="default" className="flex-1">
                      Get Similar Vendors
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Wedding Stories
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Share Your
            <span className="text-gradient ml-3">Wedding Story</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Inspire other couples by sharing your beautiful wedding moments with our community
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              Submit Your Wedding
            </Button>
            <Button variant="outline" size="lg">
              Photography Guidelines
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RealWeddingsPage;