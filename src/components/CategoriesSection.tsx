import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, MapPin, Star, Users, Camera, Palette, Utensils, Music } from "lucide-react";
import { useNavigate } from "react-router-dom";

const categories = [
  {
    id: "venues",
    title: "Wedding Venues",
    description: "Banquet halls, hotels, resorts & destination venues",
    icon: <MapPin className="w-8 h-8" />,
    count: "2,500+ venues",
    image: "🏰",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    id: "photographers", 
    title: "Wedding Photography",
    description: "Pre-wedding, wedding & post-wedding shoots",
    icon: <Camera className="w-8 h-8" />,
    count: "1,800+ photographers",
    image: "📸",
    gradient: "from-blue-500 to-purple-500"
  },
  {
    id: "makeup",
    title: "Bridal Makeup",
    description: "Bridal makeup artists & hair stylists",
    icon: <Palette className="w-8 h-8" />,
    count: "1,200+ artists",
    image: "💄", 
    gradient: "from-pink-500 to-rose-500"
  },
  {
    id: "catering",
    title: "Wedding Catering", 
    description: "Caterers, bakers & food specialists",
    icon: <Utensils className="w-8 h-8" />,
    count: "950+ caterers",
    image: "🍽️",
    gradient: "from-orange-500 to-red-500"
  },
  {
    id: "decorators",
    title: "Wedding Decorators",
    description: "Mandap, stage & venue decoration",
    icon: <Star className="w-8 h-8" />,
    count: "900+ decorators", 
    image: "🌸",
    gradient: "from-green-500 to-teal-500"
  },
  {
    id: "entertainment",
    title: "Entertainment",
    description: "DJ, live bands & entertainment services",
    icon: <Music className="w-8 h-8" />,
    count: "750+ artists",
    image: "🎵",
    gradient: "from-indigo-500 to-purple-500"
  }
];

export const CategoriesSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Find Your Perfect
            <span className="text-gradient ml-3">Wedding Vendors</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Browse through our curated collection of top-rated wedding professionals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {categories.map((category, index) => (
            <Card 
              key={category.id}
              className="group hover:shadow-romantic transition-romantic cursor-pointer card-gradient border-primary/10"
              onClick={() => navigate(`/${category.id}`)}
            >
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${category.gradient} rounded-2xl flex items-center justify-center text-white transform group-hover:scale-110 transition-romantic`}>
                  {category.icon}
                </div>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-romantic">
                  {category.title}
                </CardTitle>
                <p className="text-muted-foreground text-sm">
                  {category.description}
                </p>
              </CardHeader>
              
              <CardContent className="text-center space-y-4">
                <Badge variant="secondary" className="text-primary font-semibold">
                  {category.count}
                </Badge>
                
                <Button 
                  variant="ghost"
                  className="w-full group-hover:text-primary transition-romantic"
                >
                  Explore {category.title}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-romantic" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="max-w-4xl mx-auto romantic-gradient text-white overflow-hidden">
            <CardContent className="p-12">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="text-left mb-6 md:mb-0">
                  <h3 className="text-3xl font-bold mb-2">Ready to Plan Your Dream Wedding?</h3>
                  <p className="text-white/90 text-lg">Get personalized vendor recommendations</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    variant="elegant" 
                    size="lg"
                    onClick={() => navigate("/get-started")}
                  >
                    Get Started
                  </Button>
                  <Button 
                    variant="glass" 
                    size="lg"
                    onClick={() => navigate("/vendors")}
                  >
                    Browse All Vendors
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};