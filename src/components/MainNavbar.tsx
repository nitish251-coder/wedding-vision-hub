import { Heart, Search, MapPin, Calendar, Users, Star, Menu, User, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { Link, useNavigate } from "react-router-dom";

export const MainNavbar = () => {
  const navigate = useNavigate();

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-soft border-b border-primary/10 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 transition-romantic hover:scale-105">
            <div className="w-10 h-10 romantic-gradient rounded-full flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gradient">WedBliss</h1>
              <p className="text-xs text-muted-foreground -mt-1">Perfect Weddings</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/venues" 
              className="text-foreground hover:text-primary transition-romantic font-medium"
            >
              Venues
            </Link>
            <Link 
              to="/vendors" 
              className="text-foreground hover:text-primary transition-romantic font-medium"
            >
              Vendors
            </Link>
            <Link 
              to="/photographers" 
              className="text-foreground hover:text-primary transition-romantic font-medium"
            >
              Photography
            </Link>
            <Link 
              to="/real-weddings" 
              className="text-foreground hover:text-primary transition-romantic font-medium"
            >
              Real Weddings
            </Link>
            <Link 
              to="/blog" 
              className="text-foreground hover:text-primary transition-romantic font-medium"
            >
              Blog
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            {/* Vendor Login */}
            <Button 
              variant="elegant" 
              size="sm"
              onClick={() => navigate("/vendor")}
              className="hidden md:flex"
            >
              For Vendors
            </Button>

            {/* User Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <User className="w-5 h-5" />
                  <Badge 
                    className="absolute -top-2 -right-2 w-5 h-5 rounded-full p-0 flex items-center justify-center bg-primary text-xs"
                  >
                    3
                  </Badge>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem onClick={() => navigate("/login")}>
                  Sign In
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate("/register")}>
                  Create Account
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate("/admin")}>
                  Admin Panel
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="w-5 h-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48 lg:hidden">
                <DropdownMenuItem onClick={() => navigate("/venues")}>
                  Venues
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate("/vendors")}>
                  Vendors  
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate("/photographers")}>
                  Photography
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate("/real-weddings")}>
                  Real Weddings
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate("/blog")}>
                  Blog
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate("/vendor")}>
                  For Vendors
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
};