import { Header } from "@/components/Header";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Footer } from "@/components/Footer";
import { Calendar, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const entrepreneurshipBlogs = [
  {
    id: 1,
    title: "Starting a Side Hustle in 2024",
    excerpt: "Profitable side business ideas you can launch with minimal investment.",
    category: "Entrepreneurship",
    date: "2024-01-28",
    readTime: "12 min read",
    categoryColor: "bg-emerald-green"
  },
  {
    id: 2,
    title: "Business Plan Essentials",
    excerpt: "Key components every successful business plan must include.",
    category: "Entrepreneurship",
    date: "2024-01-25",
    readTime: "15 min read",
    categoryColor: "bg-emerald-green"
  },
  {
    id: 3,
    title: "Funding Your Startup",
    excerpt: "Explore different funding options from bootstrapping to venture capital.",
    category: "Entrepreneurship",
    date: "2024-01-22",
    readTime: "10 min read",
    categoryColor: "bg-emerald-green"
  },
  {
    id: 4,
    title: "E-commerce Business Models",
    excerpt: "Different ways to make money online and which might suit you best.",
    category: "Entrepreneurship",
    date: "2024-01-20",
    readTime: "9 min read",
    categoryColor: "bg-emerald-green"
  },
  {
    id: 5,
    title: "Freelancing vs Consulting",
    excerpt: "Understanding the differences and choosing the right path for you.",
    category: "Entrepreneurship",
    date: "2024-01-18",
    readTime: "8 min read",
    categoryColor: "bg-emerald-green"
  },
  {
    id: 6,
    title: "Small Business Tax Tips",
    excerpt: "Essential tax strategies every new entrepreneur should know.",
    category: "Entrepreneurship",
    date: "2024-01-15",
    readTime: "11 min read",
    categoryColor: "bg-emerald-green"
  }
];

const Entrepreneurship = () => {
  const handleTileClick = (blogId: number) => {
    console.log(`Clicked on blog ${blogId}`);
    // Navigate to blog post
  };

  return (
    <div className="min-h-screen bg-background">
      <ThemeToggle />
      <Header />
      
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-forest-green to-sage-green rounded-xl flex items-center justify-center">
                <Lightbulb className="h-8 w-8 text-white" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-forest-green to-sage-green bg-clip-text text-transparent">
              Entrepreneurship
            </h1>
            
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Turn your ideas into profitable ventures. Learn the financial fundamentals of starting and growing a successful business.
            </p>
          </div>

          {/* Blog Tiles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {entrepreneurshipBlogs.map((blog) => (
              <Card 
                key={blog.id} 
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-sage-green/20 bg-card cursor-pointer"
                onClick={() => handleTileClick(blog.id)}
              >
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
                    <span className="text-xs text-forest-green font-medium">
                      Click to read more →
                    </span>
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

export default Entrepreneurship;
