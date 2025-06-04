
import { Header } from "@/components/Header";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Footer } from "@/components/Footer";
import { Calendar, ArrowRight, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const investingBlogs = [
  {
    id: 1,
    title: "Stock Market Basics for Beginners",
    excerpt: "Essential knowledge to start your investing journey with confidence.",
    category: "Investing",
    date: "2024-01-22",
    readTime: "10 min read",
    categoryColor: "bg-sage-green"
  },
  {
    id: 2,
    title: "Index Funds vs ETFs",
    excerpt: "Understanding the differences and which investment vehicle suits you best.",
    category: "Investing",
    date: "2024-01-20",
    readTime: "7 min read",
    categoryColor: "bg-sage-green"
  },
  {
    id: 3,
    title: "Dollar-Cost Averaging Strategy",
    excerpt: "How to reduce risk and build wealth consistently over time.",
    category: "Investing",
    date: "2024-01-18",
    readTime: "8 min read",
    categoryColor: "bg-sage-green"
  },
  {
    id: 4,
    title: "Diversification Fundamentals",
    excerpt: "Learn how to spread risk across different asset classes effectively.",
    category: "Investing",
    date: "2024-01-15",
    readTime: "9 min read",
    categoryColor: "bg-sage-green"
  },
  {
    id: 5,
    title: "Retirement Account Options",
    excerpt: "401(k), IRA, Roth IRA - understanding your retirement investment choices.",
    category: "Investing",
    date: "2024-01-12",
    readTime: "11 min read",
    categoryColor: "bg-sage-green"
  },
  {
    id: 6,
    title: "Risk Tolerance Assessment",
    excerpt: "How to determine your investment risk profile and portfolio allocation.",
    category: "Investing",
    date: "2024-01-10",
    readTime: "6 min read",
    categoryColor: "bg-sage-green"
  }
];

const Investing = () => {
  return (
    <div className="min-h-screen bg-background">
      <ThemeToggle />
      
      {/* Greenprint Brand */}
      <div className="fixed top-4 left-4 z-50">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-forest-green to-sage-green rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">G</span>
          </div>
          <span className="font-bold text-lg text-foreground">Greenprint</span>
        </div>
      </div>
      
      <Header />
      
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-forest-green to-sage-green rounded-xl flex items-center justify-center">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-forest-green to-sage-green bg-clip-text text-transparent">
              Investing Basics
            </h1>
            
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Start your investment journey with confidence. Learn the fundamentals of building wealth through smart investing strategies.
            </p>
          </div>

          {/* Blog Tiles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {investingBlogs.map((blog) => (
              <Card key={blog.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-sage-green/20 bg-card">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs font-semibold text-white ${blog.categoryColor} px-4 py-2 rounded-full`}>
                      {blog.category}
                    </span>
                    <div className="flex items-center text-muted-foreground text-xs">
                      <Calendar className="h-3 w-3 mr-1" />
                      {new Date(blog.date).toLocaleDateString()}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-3 group-hover:text-forest-green transition-colors text-foreground">
                    {blog.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {blog.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{blog.readTime}</span>
                    <Button variant="ghost" size="sm" className="text-forest-green hover:text-forest-green/80 hover:bg-sage-green/20 rounded-full transition-all duration-300">
                      Read More
                      <ArrowRight className="h-3 w-3 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Investing;
