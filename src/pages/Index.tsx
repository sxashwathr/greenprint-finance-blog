
import { Header } from "@/components/Header";
import { ThemeToggle } from "@/components/ThemeToggle";
import { BlogSlideshow } from "@/components/BlogSlideshow";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { BlogTiles } from "@/components/BlogTiles";
import { Footer } from "@/components/Footer";

const Index = () => {
  console.log("Index component is rendering");
  console.log("Current location:", window.location.href);
  console.log("Base URL from import.meta.env:", import.meta.env.BASE_URL);
  console.log("Mode:", import.meta.env.MODE);
  
  return (
    <div className="min-h-screen bg-background">
      <ThemeToggle />
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-3">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-forest-green via-emerald-green to-forest-green bg-clip-text text-transparent mb-6 animate-fade-in">
              Your Blueprint to Financial Success
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
              Master the art of financial literacy with expert guidance, practical tips, 
              and actionable strategies to build wealth and secure your future.
            </p>
          </div>
          
          {/* Featured Slideshow - Full Width */}
          <div className="w-full">
            <BlogSlideshow />
          </div>
        </div>
      </section>

      {/* Recent Blog Tiles */}
      <div className="py-8">
        <BlogTiles />
      </div>

      {/* Newsletter Signup */}
      <div className="py-8">
        <NewsletterSignup />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
