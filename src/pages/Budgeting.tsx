import { Header } from "@/components/Header";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Footer } from "@/components/Footer";
import { Calendar, Calculator } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const budgetingBlogs = [
  {
    id: 1,
    title: "The 50/30/20 Budget Rule Explained",
    excerpt: "Learn how to allocate your income using this simple and effective budgeting method.",
    category: "Budgeting",
    date: "2024-01-20",
    readTime: "6 min read",
    categoryColor: "bg-forest-green"
  },
  {
    id: 2,
    title: "Emergency Fund Essentials",
    excerpt: "Why every budget needs an emergency fund and how to build one step by step.",
    category: "Budgeting",
    date: "2024-01-18",
    readTime: "5 min read",
    categoryColor: "bg-forest-green"
  },
  {
    id: 3,
    title: "Zero-Based Budgeting Guide",
    excerpt: "Master the art of giving every dollar a purpose with zero-based budgeting.",
    category: "Budgeting",
    date: "2024-01-15",
    readTime: "8 min read",
    categoryColor: "bg-forest-green"
  },
  {
    id: 4,
    title: "Budget Tracking Apps Review",
    excerpt: "Compare the best budgeting apps to find the perfect fit for your lifestyle.",
    category: "Budgeting",
    date: "2024-01-12",
    readTime: "7 min read",
    categoryColor: "bg-forest-green"
  },
  {
    id: 5,
    title: "Envelope Method for Beginners",
    excerpt: "Traditional cash envelope system adapted for modern digital banking.",
    category: "Budgeting",
    date: "2024-01-10",
    readTime: "5 min read",
    categoryColor: "bg-forest-green"
  },
  {
    id: 6,
    title: "Budgeting for Irregular Income",
    excerpt: "Strategies for managing finances when your income varies month to month.",
    category: "Budgeting",
    date: "2024-01-08",
    readTime: "9 min read",
    categoryColor: "bg-forest-green"
  }
];

const Budgeting = () => {
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
                <Calculator className="h-8 w-8 text-white" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-forest-green to-sage-green bg-clip-text text-transparent">
              Budgeting Mastery
            </h1>
            
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Learn how to create, manage, and stick to budgets that actually work for your lifestyle and financial goals.
            </p>
          </div>

          {/* Blog Tiles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {budgetingBlogs.map((blog) => (
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

export default Budgeting;
