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
    readTime: "8 min read",
    categoryColor: "bg-sage-green"
  },
  {
    id: "retirement-planning",
    title: "Retirement Planning in Your 20s: The Ultimate Advantage",
    excerpt: "Why starting retirement planning early is the smartest financial decision you'll ever make.",
    category: "Investing",
    date: "2024-01-22",
    readTime: "6 min read",
    categoryColor: "bg-sage-green"
  },
  {
    id: "dollar-cost-averaging",
    title: "Dollar-Cost Averaging vs. Lump Sum Investing: Which Strategy Wins?",
    excerpt: "Compare two investment strategies to determine the one that works better for your financial situation.",
    category: "Investing",
    date: "2024-01-22",
    readTime: "9 min read",
    categoryColor: "bg-sage-green"
  },
  {
    id: "investment-portfolio-basics",
    title: "Investment Portfolio Basics: Building Your Wealth Foundation",
    excerpt: "Learn fundamental portfolio construction and asset allocation principles.",
    category: "Investing",
    date: "2024-01-22",
    readTime: "8 min read",
    categoryColor: "bg-sage-green"
  },
  {
    id: "tax-advantaged-investing",
    title: "Tax-Advantaged Investing: Maximize Returns While Minimizing Taxes",
    excerpt: "Navigate 401(k)s, IRAs, and other accounts to keep more of your gains.",
    category: "Investing",
    date: "2024-01-22",
    readTime: "9 min read",
    categoryColor: "bg-sage-green"
  },
  {
    id: "market-volatility-strategies",
    title: "Market Volatility Strategies: Staying Calm When Markets Go Crazy",
    excerpt: "Develop strategies to navigate market ups and downs without panic",
    category: "Investing",
    date: "2024-01-22",
    readTime: "7 min read",
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
            <div className="flex justify-center mb-8 animate-fade-in">
              <div className="w-16 h-16 bg-gradient-to-br from-forest-green to-sage-green rounded-xl flex items-center justify-center">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-forest-green to-sage-green bg-clip-text text-transparent animate-fade-in">
              Investing Basics
            </h1>
            
            {/* CHANGED: Main description text to dark forest green */}
            <p className="text-xl text-emerald-700 mb-12 leading-relaxed animate-fade-in">
              Start your investment journey with confidence. Learn the fundamentals of building wealth through smart investing strategies.
            </p>
          </div>

          {/* Blog Tiles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
