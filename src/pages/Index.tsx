import { MainNavbar } from "@/components/MainNavbar";
import { HeroSection } from "@/components/HeroSection";
import { CategoriesSection } from "@/components/CategoriesSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <MainNavbar />
      <main>
        <HeroSection />
        <CategoriesSection />
      </main>
    </div>
  );
};

export default Index;
