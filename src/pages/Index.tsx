
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
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="text-center lg:text-left mb-12">
                <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-gold-500 bg-clip-text text-transparent mb-6 animate-fade-in">
                  Your Blueprint to Financial Success
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Master the art of financial literacy with expert guidance, practical tips, 
                  and actionable strategies to build wealth and secure your future.
                </p>
              </div>
              
              {/* Featured Slideshow */}
              <BlogSlideshow />
            </div>

            {/* Newsletter Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-32">
                <NewsletterSignup />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Blog Tiles */}
      <BlogTiles />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
