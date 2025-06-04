
import { Header } from "@/components/Header";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Footer } from "@/components/Footer";
import { Calendar, ArrowRight, Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const careerIncomeBlogs = [
  {
    id: 1,
    title: "Salary Negotiation Masterclass",
    excerpt: "Proven strategies to negotiate higher compensation with confidence.",
    category: "Career & Income",
    date: "2024-01-30",
    readTime: "14 min read"
  },
  {
    id: 2,
    title: "Building Multiple Income Streams",
    excerpt: "Diversify your income sources for greater financial security.",
    category: "Career & Income",
    date: "2024-01-28",
    readTime: "11 min read"
  },
  {
    id: 3,
    title: "Career Change Financial Planning",
    excerpt: "How to financially prepare for a major career transition.",
    category: "Career & Income",
    date: "2024-01-25",
    readTime: "10 min read"
  },
  {
    id: 4,
    title: "High-Income Skills to Learn",
    excerpt: "In-demand skills that can significantly boost your earning potential.",
    category: "Career & Income",
    date: "2024-01-22",
    readTime: "13 min read"
  },
  {
    id: 5,
    title: "Remote Work Opportunities",
    excerpt: "Finding and succeeding in high-paying remote positions.",
    category: "Career & Income",
    date: "2024-01-20",
    readTime: "9 min read"
  },
  {
    id: 6,
    title: "Professional Development ROI",
    excerpt: "Investing in yourself: courses, certifications, and networking.",
    category: "Career & Income",
    date: "2024-01-18",
    readTime: "8 min read"
  }
];

const CareerIncome = () => {
  return (
    <div className="min-h-screen bg-background">
      <ThemeToggle />
      <Header />
      
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-olive-drab to-dusty-gold rounded-xl flex items-center justify-center">
                <Briefcase className="h-8 w-8 text-ivory" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-olive-drab to-dusty-gold bg-clip-text text-transparent">
              Career & Income Growth
            </h1>
            
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Maximize your earning potential through strategic career moves, skill development, and smart negotiation tactics.
            </p>
          </div>

          {/* Blog Tiles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {careerIncomeBlogs.map((blog) => (
              <Card key={blog.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-sage-green/20">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-olive-drab bg-sage-green/20 px-3 py-1 rounded-full">
                      {blog.category}
                    </span>
                    <div className="flex items-center text-muted-foreground text-xs">
                      <Calendar className="h-3 w-3 mr-1" />
                      {new Date(blog.date).toLocaleDateString()}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-3 group-hover:text-olive-drab transition-colors">
                    {blog.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {blog.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{blog.readTime}</span>
                    <Button variant="ghost" size="sm" className="text-olive-drab hover:text-olive-drab/80">
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

export default CareerIncome;
