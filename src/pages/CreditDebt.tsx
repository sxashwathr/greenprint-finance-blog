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
    readTime: "10 min read",
    categoryColor: "bg-green-700" 
  },
  {
    id: "debt-payoff-strategies",
    title: "Debt Payoff Strategies: Finding Your Path to Freedom",
    excerpt: "Explore proven methods to eliminate debt and regain control of your financial future.",
    category: "Credit & Debt",
    date: "2024-01-25",
    readTime: "10 min read",
    categoryColor: "bg-green-700" 
  },
  {
    id: "credit-score-myths",
    title: "Credit Score Myths: Separating Fact from Fiction",
    excerpt: "Debunk common credit score misconceptions that could be hurting your financial progress",
    category: "Credit & Debt",
    date: "2024-01-25",
    readTime: "7 min read",
    categoryColor: "bg-green-700" 
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
            <div className="flex justify-center mb-8 animate-fade-in">
              <div className="w-16 h-16 bg-gradient-to-br from-forest-green to-sage-green rounded-xl flex items-center justify-center">
                <CreditCard className="h-8 w-8 text-white" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-forest-green to-sage-green bg-clip-text text-transparent animate-fade-in">
              Credit & Debt Management
            </h1>
            
            {/* CHANGED: Main description text to dark forest green */}
            <p className="text-xl text-emerald-700 mb-12 leading-relaxed animate-fade-in">
              Master your credit score, manage debt effectively, and build a strong financial foundation for your future.
            </p>
          </div>

          {/* Blog Tiles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
