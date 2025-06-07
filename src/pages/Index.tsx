
import { Header } from "@/components/Header";
import { ThemeToggle } from "@/components/ThemeToggle";
import { BlogSlideshow } from "@/components/BlogSlideshow";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { BlogTiles } from "@/components/BlogTiles";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ThemeToggle />
      
      {/* Greenprint Brand */}
      <div className="fixed top-4 left-4 z-50">
        <div className="flex items-center space-x-2">
          <div className="w-12 h-12 flex items-center justify-center">
            {/* Light mode logo */}
            <img 
              src="/lovable-uploads/35e0da6e-dd7f-48b4-a642-6c83cf81e214.png" 
              alt="Greenprint Logo" 
              className="w-10 h-10 dark:hidden"
            />
            {/* Dark mode logo */}
            <img 
              src="/lovable-uploads/a531e1d6-a935-436f-b382-470a5a357338.png" 
              alt="Greenprint Logo" 
              className="w-10 h-10 hidden dark:block"
            />
          </div>
          <span className="font-bold text-lg text-foreground">Greenprint</span>
        </div>
      </div>
      
      // ... keep existing code (Header, Hero Section, BlogSlideshow, BlogTiles, NewsletterSignup, Footer)
    </div>
  );
};

export default Index;
