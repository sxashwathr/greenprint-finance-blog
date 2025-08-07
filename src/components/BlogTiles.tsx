import { BlogTile } from "./BlogTile";

const recentBlogs = [
  {
    id: "budgeting-basics",
    title: "Budgeting Basics: Your First Step to Financial Freedom",
    excerpt: "Learn how to create and stick to a budget that actually works for your lifestyle.",
    category: "Budgeting",
    date: "2024-01-15",
    readTime: "5 min read",
    categoryColor: "bg-forest-green"
  },
  {
    id: "market-volatility-strategies",
    title: "Market Volatility Strategies: Staying Calm When Markets Go Crazy",
    excerpt: "Develop strategies to navigate market ups and downs without panic.",
    category: "Investing",
    date: "2024-01-15",
    readTime: "9 min read",
    categoryColor: "bg-sage-green"
  },
  {
    id: "credit-card-rewards-optimization",
    title: "Credit Card Rewards Optimization: Earning Money Without Debt",
    excerpt: "Maximize credit card rewards while maintaining excellent financial habits.",
    category: "Credit & Debt",
    date: "2024-01-15",
    readTime: "7 min read",
    categoryColor: "bg-green-600"
  },
  {
    id: "networking-for-career-growth",
    title: "Networking for Career Growth: Building Relationships That Pay",
    excerpt: "Transform networking into genuine relationship building that accelerates careers.",
    category: "Career & Income",
    date: "2024-01-15",
    readTime: "8 min read",
    categoryColor: "bg-teal-600"
  },
  {
    id: "subscription-audit-guide",
    title: "Subscription Audit Guide: Reclaim Hundreds from Hidden Costs",
    excerpt: "Uncover forgotten subscriptions and learn strategies to optimize recurring expenses.",
    category: "Budgeting",
    date: "2024-01-15",
    readTime: "8 min read",
    categoryColor: "bg-forest-green"
  },
  {
    id: "investment-portfolio-basics",
    title: "Investment Portfolio Basics: Building Your Wealth Foundation",
    excerpt: "Learn fundamental portfolio construction and asset allocation principles.",
    category: "Investing",
    date: "2024-01-15",
    readTime: "8 min read",
    categoryColor: "bg-sage-green"
  }
];

export function BlogTiles() {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6 text-foreground animate-fade-in">Recently Published</h2>
        <p className="text-lg text-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
  Stay informed with our latest insights on budgeting, investing, and building wealth
</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentBlogs.map((blog) => (
            <BlogTile key={blog.id} {...blog} />
          ))}
        </div>
      </div>
    </section>
  );
}
