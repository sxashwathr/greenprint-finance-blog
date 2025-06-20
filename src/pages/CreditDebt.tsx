
import { Header } from "@/components/Header";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Footer } from "@/components/Footer";
import { CreditCard } from "lucide-react";
import { BlogTile } from "@/components/BlogTile";

const creditDebtBlogs = [
  {
    id: "credit-essentials",
    title: "Credit Essentials: Building and Managing Your Score",
    excerpt: "Step-by-step guide to establishing your first credit history responsibly.",
    category: "Credit & Debt",
    date: "2024-01-25",
    readTime: "8 min read",
    categoryColor: "bg-pine-green"
  }
];

const CreditDebt = () => {
  return (
    <div className="min-h-screen bg-background">
      <ThemeToggle />
      <Header />
      
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="flex justify-center mb-6 animate-fade-in">
              <div className="w-16 h-16 bg-gradient-to-br from-forest-green to-sage-green rounded-xl flex items-center justify-center">
                <CreditCard className="h-8 w-8 text-white" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-forest-green to-sage-green bg-clip-text text-transparent animate-fade-in">
              Credit & Debt Management
            </h1>
            
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed animate-fade-in">
              Master your credit score, manage debt effectively, and build a strong financial foundation for your future.
            </p>
          </div>

          {/* Blog Tiles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {creditDebtBlogs.map((blog) => (
              <BlogTile key={blog.id} {...blog} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CreditDebt;
