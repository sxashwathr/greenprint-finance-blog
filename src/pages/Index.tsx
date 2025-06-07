
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
            {/* Light mode logo - blend with light theme */}
            <img 
              src="/lovable-uploads/35e0da6e-dd7f-48b4-a642-6c83cf81e214.png" 
              alt="Greenprint Logo" 
              className="w-10 h-10 dark:hidden brightness-0 saturate-100"
              style={{
                filter: 'brightness(0) saturate(100%) invert(27%) sepia(51%) saturate(2878%) hue-rotate(346deg) brightness(104%) contrast(97%)'
              }}
            />
            {/* Dark mode logo - blend with dark theme */}
            <img 
              src="/lovable-uploads/a531e1d6-a935-436f-b382-470a5a357338.png" 
              alt="Greenprint Logo" 
              className="w-10 h-10 hidden dark:block brightness-0 saturate-100"
              style={{
                filter: 'brightness(0) saturate(100%) invert(84%) sepia(6%) saturate(67%) hue-rotate(202deg) brightness(90%) contrast(96%)'
              }}
            />
          </div>
          <span className="font-bold text-lg text-foreground">Greenprint</span>
        </div>
      </div>
      
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        // ... keep existing code (hero section content)
      </section>

      {/* Recent Blog Tiles */}
      <BlogTiles />

      {/* Newsletter Signup */}
      <NewsletterSignup />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
