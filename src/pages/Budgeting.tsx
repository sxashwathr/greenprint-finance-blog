import { Header } from "@/components/Header";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Footer } from "@/components/Footer";
import { Calculator } from "lucide-react";
import { BlogTile } from "@/components/BlogTile";

const budgetingBlogs = [
  {
    id: "budgeting-basics",
    title: "Budgeting Basics: Your First Step to Financial Freedom",
    excerpt: "Learn how to create and stick to a budget that actually works for your lifestyle.",
    category: "Budgeting",
    date: "2024-01-20",
    readTime: "7 min read",
    categoryColor: "bg-forest-green"
  },
  {
    id: "money-psychology",
    title: "The Psychology of Money: Why We Spend and How to Change It",
    excerpt: "Discover the triggers that drive spending habits and learn useful strategies to overcome them.",
    category: "Budgeting",
    date: "2024-01-20",
    readTime: "11 min read",
    categoryColor: "bg-forest-green"
  },
  {
    id: "emergency-fund-essentials",
    title: "Emergency Fund Essentials: Your Financial Safety Net",
    excerpt: "Build a financial cushion that protects you from needless expenses and gives you peace of mind.",
    category: "Budgeting",
    date: "2024-01-20",
    readTime: "8 min read",
    categoryColor: "bg-forest-green"
  },
  {
    id: "expense-tracking-mastery",
    title: "Expense Tracking Mastery: The Simple System That Actually Works",
    excerpt: "Discover a sustainable approach to expense tracking that gives you complete spending control.",
    category: "Budgeting",
    date: "2024-01-20",
    readTime: "6 min read",
    categoryColor: "bg-forest-green"
  },
  {
    id: "subscription-audit-guide",
    title: "Subscription Audit Guide: Reclaim Hundreds from Hidden Costs",
    excerpt: "Uncover forgotten subscriptions and learn strategies to optimize recurring expenses.",
    category: "Budgeting",
    date: "2024-01-20",
    readTime: "5 min read",
    categoryColor: "bg-forest-green"
  },
  {
    id: "budgeting-for-irregular-income",
    title: "Budgeting with Irregular Income: A Practical Guide",
    excerpt: "Master budgeting strategies for freelancers and anyone with variable income.",
    category: "Budgeting",
    date: "2024-01-20",
    readTime: "7 min read",
    categoryColor: "bg-forest-green"
  }
];

const Budgeting = () => {
  return (
    <div className="min-h-screen bg-background">
      <ThemeToggle />
      <Header />
      
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="flex justify-center mb-8 animate-fade-in">
              <div className="w-16 h-16 bg-gradient-to-br from-forest-green to-sage-green rounded-xl flex items-center justify-center">
                <Calculator className="h-8 w-8 text-white" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-forest-green to-sage-green bg-clip-text text-transparent animate-fade-in">
              Budgeting Mastery
            </h1>
            
            {/* CHANGED: Main description text to dark forest green */}
            <p className="text-xl text-emerald-700 mb-12 leading-relaxed animate-fade-in">
              Learn how to create, manage, and stick to budgets that actually work for your lifestyle and future financial goals.
            </p>
          </div>

          {/* Blog Tiles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {budgetingBlogs.map((blog) => (
              <BlogTile key={blog.id} {...blog} />
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Budgeting;
