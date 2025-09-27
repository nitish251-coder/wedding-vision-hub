import { useState } from "react";
import { Search, MapPin, Calendar, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import heroImage from "@/assets/hero-wedding-couple.jpg";
import { useNavigate } from "react-router-dom";

const vendorTypes = [
  "Wedding Venues",
  "Photographers", 
  "Makeup Artists",
  "Decorators",
  "Caterers",
  "Wedding Planners",
  "Mehendi Artists",
  "DJ/Music",
  "Transportation",
  "Wedding Cards"
];

const cities = [
  "Mumbai", "Delhi", "Bangalore", "Chennai", "Kolkata", "Hyderabad", 
  "Pune", "Ahmedabad", "Jaipur", "Goa", "Udaipur", "Jodhpur"
];

const categories = [
  {
    title: "Wedding Venues",
    description: "Find the perfect venue for your special day",
    image: "🏰",
    count: "2,500+ venues"
  },
  {
    title: "Wedding Photography",
    description: "Capture your precious moments",
    image: "📸",
    count: "1,800+ photographers"
  },
  {
    title: "Bridal Makeup",
    description: "Look stunning on your wedding day",
    image: "💄",
    count: "1,200+ artists"
  },
  {
    title: "Wedding Decorators", 
    description: "Transform your venue into a dream",
    image: "🌸",
    count: "900+ decorators"
  }
];

export const HeroSection = () => {
  const [selectedVendor, setSelectedVendor] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    const searchParams = new URLSearchParams();
    if (selectedVendor) searchParams.set("type", selectedVendor);
    if (selectedCity) searchParams.set("city", selectedCity);
    navigate(`/search?${searchParams.toString()}`);
  };

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 hero-gradient"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Hero Text */}
          <div className="animate-fade-up">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Your Wedding,
              <br />
              <span className="text-gradient bg-gradient-to-r from-white to-accent-glow bg-clip-text text-transparent">
                Your Way
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-12 font-light">
              Find the best wedding vendors with thousands of trusted reviews
            </p>
          </div>

          {/* Search Card */}
          <Card className="glass-effect shadow-romantic max-w-3xl mx-auto animate-scale-in">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Vendor Type</label>
                  <Select value={selectedVendor} onValueChange={setSelectedVendor}>
                    <SelectTrigger className="bg-white/90 border-white/30">
                      <SelectValue placeholder="Select vendor type" />
                    </SelectTrigger>
                    <SelectContent>
                      {vendorTypes.map((vendor) => (
                        <SelectItem key={vendor} value={vendor}>
                          {vendor}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">City</label>
                  <Select value={selectedCity} onValueChange={setSelectedCity}>
                    <SelectTrigger className="bg-white/90 border-white/30">
                      <SelectValue placeholder="Select city" />
                    </SelectTrigger>
                    <SelectContent>
                      {cities.map((city) => (
                        <SelectItem key={city} value={city}>
                          {city}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground opacity-0 md:opacity-100">Search</label>
                  <Button 
                    onClick={handleSearch}
                    variant="hero" 
                    size="lg" 
                    className="w-full md:h-10"
                  >
                    <Search className="w-4 h-4 mr-2" />
                    Get Started
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Popular Searches */}
          <div className="mt-8 animate-fade-in">
            <p className="text-white/70 mb-3">Popular Searches:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {["Wedding Photographers", "Bridal Makeup", "Wedding Venues", "Decorators"].map((search) => (
                <Button 
                  key={search}
                  variant="glass" 
                  size="sm"
                  onClick={() => navigate(`/search?type=${search}`)}
                  className="text-sm"
                >
                  {search}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 text-white/20 animate-romantic-float">
        <Calendar className="w-8 h-8" />
      </div>
      <div className="absolute bottom-20 right-10 text-white/20 animate-romantic-float" style={{ animationDelay: "1s" }}>
        <Star className="w-6 h-6" />
      </div>
    </section>
  );
};