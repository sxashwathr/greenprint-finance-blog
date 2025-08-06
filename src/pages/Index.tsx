import { Header } from "@/components/Header";
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
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-8">
        <div className="container mx-auto px-3">
          <div className="text-center mb-8">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-forest-green via-emerald-green via-sage-green to-forest-green bg-[length:200%_200%] animate-gradient-x bg-clip-text text-transparent mb-8 animate-fade-in">
              Your Blueprint to Financial Success
            </h1>
            <p className="text-lg text-emerald-700 mb-12 leading-relaxed max-w-2xl mx-auto animate-fade-in">
              Master the art of financial literacy with expert guidance, practical tips,
              and actionable strategies to build wealth and secure your future.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Slideshow - Left Side with Our Mission */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex gap-8">
          {/* Slideshow - Left Side (60% width) */}
          <div className="w-3/5 animate-fade-in">
            <BlogSlideshow />
          </div>
          
          {/* Our Mission - Right Side (40% width) */}
          <div className="w-2/5 flex items-center">
            <div className="w-full">
              <h2 className="text-3xl font-bold text-center mb-12 text-foreground animate-fade-in" style={{ color: '#6B5B47' }}>
                Our Mission
              </h2>
              <p className="text-lg leading-relaxed" style={{ color: '#6B5B47' }}>
                TEXTHERE
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Blog Tiles */}
      <div className="py-8">
        <BlogTiles />
      </div>

      {/* Newsletter Signup */}
      <NewsletterSignup />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
