import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import VendorPage from "./pages/VendorPage";
import VendorDashboard from "./pages/VendorDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import VenuesPage from "./pages/VenuesPage";
import CateringPage from "./pages/CateringPage";
import PhotographyPage from "./pages/PhotographyPage";
import MakeupPage from "./pages/MakeupPage";
import RealWeddingsPage from "./pages/RealWeddingsPage";
import LoginPage from "./pages/LoginPage";
import BlogPage from "./pages/BlogPage";
import RegisterPage from "./pages/RegisterPage";
import DecoratorsPage from "./pages/DecoratorsPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/vendors" element={<VendorPage />} />
          <Route path="/venues" element={<VenuesPage />} />
          <Route path="/photographers" element={<PhotographyPage />} />
          <Route path="/catering" element={<CateringPage />} />
          <Route path="/makeup" element={<MakeupPage />} />
          <Route path="/decorators" element={<DecoratorsPage />} />
          <Route path="/real-weddings" element={<RealWeddingsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/search" element={<VendorPage />} />
          
          {/* Vendor Panel Routes */}
          <Route path="/vendor" element={<VendorDashboard />} />
          <Route path="/vendor/dashboard" element={<VendorDashboard />} />
          
          {/* Admin Panel Routes */}
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
