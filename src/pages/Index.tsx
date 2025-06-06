
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
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-forest-green via-emerald-green to-forest-green bg-clip-text text-transparent mb-6 animate-fade-in">
              Your Blueprint to Financial Success
            </h1>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
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
      <BlogTiles />

      {/* Newsletter Signup */}
      <NewsletterSignup />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
