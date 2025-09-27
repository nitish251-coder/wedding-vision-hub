import { useState } from "react";
import { Search, Calendar, User, ArrowRight, Clock, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MainNavbar } from "@/components/MainNavbar";

const blogPosts = [
  {
    id: 1,
    title: "10 Must-Have Wedding Photography Poses for Every Couple",
    excerpt: "Discover the essential poses that will make your wedding album truly magical and capture every precious moment of your special day.",
    author: "Priya Sharma",
    date: "March 15, 2024",
    readTime: "5 min read",
    category: "Photography Tips",
    image: "📸",
    featured: true
  },
  {
    id: 2,
    title: "Budget-Friendly Wedding Decoration Ideas That Look Expensive",
    excerpt: "Transform your venue without breaking the bank with these creative and affordable decoration ideas that create stunning visual impact.",
    author: "Rajesh Kumar",
    date: "March 12, 2024",
    readTime: "7 min read",
    category: "Decoration",
    image: "🌸"
  },
  {
    id: 3,
    title: "Complete Guide to Pre-Wedding Skincare Routine",
    excerpt: "Get that perfect bridal glow with our expert-recommended skincare routine starting 6 months before your wedding day.",
    author: "Dr. Kavya Reddy",
    date: "March 10, 2024",
    readTime: "6 min read",
    category: "Beauty & Wellness",
    image: "✨"
  },
  {
    id: 4,
    title: "Choosing the Perfect Wedding Venue: A Complete Checklist",
    excerpt: "Everything you need to consider when selecting your dream wedding venue, from capacity to catering and beyond.",
    author: "Arjun Malhotra",
    date: "March 8, 2024",
    readTime: "8 min read",
    category: "Planning Guide",
    image: "🏰"
  },
  {
    id: 5,
    title: "Traditional vs Modern: Blending Wedding Styles Perfectly",
    excerpt: "Learn how to seamlessly combine traditional customs with contemporary elements for a wedding that honors heritage while embracing modernity.",
    author: "Meera Joshi",
    date: "March 5, 2024",
    readTime: "6 min read",
    category: "Wedding Trends",
    image: "👑"
  },
  {
    id: 6,
    title: "Destination Wedding Planning: Everything You Need to Know",
    excerpt: "From legal requirements to guest logistics, master the art of planning an unforgettable destination wedding experience.",
    author: "Vikram Singh",
    date: "March 3, 2024",
    readTime: "10 min read",
    category: "Destination Weddings",
    image: "✈️"
  }
];

const categories = [
  "All Posts", "Planning Guide", "Photography Tips", "Beauty & Wellness", 
  "Decoration", "Wedding Trends", "Destination Weddings", "Real Stories"
];

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Posts");

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All Posts" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-background">
      <MainNavbar />
      
      {/* Header */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold text-foreground mb-4">
              Wedding
              <span className="text-gradient ml-3">Blog</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Expert advice, inspiration, and tips to help you plan the perfect wedding. From planning guides to real stories, find everything you need here.
            </p>
          </div>

          {/* Search */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-4 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search articles, tips, and guides..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 h-12 text-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-foreground mb-6">Featured Article</h2>
            <Card className="overflow-hidden shadow-romantic hover:shadow-xl transition-romantic">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="h-64 lg:h-auto bg-gradient-to-r from-primary/20 to-accent/20 flex items-center justify-center text-8xl">
                  {featuredPost.image}
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <Badge variant="secondary" className="w-fit mb-3">
                    {featuredPost.category}
                  </Badge>
                  <h3 className="text-2xl font-bold text-foreground mb-3 hover:text-primary transition-romantic cursor-pointer">
                    {featuredPost.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  <Button variant="hero" className="w-fit">
                    Read Full Article
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="py-8 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="transition-romantic"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Card key={post.id} className="group hover:shadow-romantic transition-romantic overflow-hidden cursor-pointer">
                <CardHeader className="p-0">
                  <div className="h-48 bg-gradient-to-r from-primary/10 to-accent/10 flex items-center justify-center text-6xl relative">
                    {post.image}
                    <div className="absolute top-4 right-4">
                      <Button variant="glass" size="icon" className="text-primary">
                        <Heart className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="p-6">
                  <Badge variant="outline" className="mb-3 text-xs">
                    {post.category}
                  </Badge>
                  
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-romantic mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <div className="flex items-center space-x-1">
                      <User className="w-3 h-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                    <Button variant="ghost" size="sm" className="p-0 h-auto">
                      Read More
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No articles found matching your search.</p>
            </div>
          )}

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Stay Updated with
            <span className="text-gradient ml-3">Wedding Tips</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest wedding planning tips, trends, and exclusive offers directly in your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              placeholder="Enter your email address"
              className="flex-1"
            />
            <Button variant="hero">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;