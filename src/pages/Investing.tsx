
import { Header } from "@/components/Header";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Footer } from "@/components/Footer";
import { TrendingUp } from "lucide-react";
import { BlogTile } from "@/components/BlogTile";

const investingBlogs = [
  {
    id: "investing-fundamentals",
    title: "Investing Fundamentals: Building Long-Term Wealth",
    excerpt: "Essential knowledge to start your investing journey with confidence.",
    category: "Investing",
    date: "2024-01-22",
    readTime: "10 min read",
    categoryColor: "bg-sage-green"
  }
];

const Investing = () => {
  return (
    <div className="min-h-screen bg-background">
      <ThemeToggle />
      <Header />
      
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="flex justify-center mb-6 animate-fade-in">
              <div className="w-16 h-16 bg-gradient-to-br from-forest-green to-sage-green rounded-xl flex items-center justify-center">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-forest-green to-sage-green bg-clip-text text-transparent animate-fade-in">
              Investing Basics
            </h1>
            
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed animate-fade-in">
              Start your investment journey with confidence. Learn the fundamentals of building wealth through smart investing strategies.
            </p>
          </div>

          {/* Blog Tiles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {investingBlogs.map((blog) => (
              <BlogTile key={blog.id} {...blog} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Investing;
