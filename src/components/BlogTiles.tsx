
import { Calendar, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const recentBlogs = [
  {
    id: 1,
    title: "Emergency Fund Essentials",
    excerpt: "Why every budget needs an emergency fund and how to build one.",
    category: "Budgeting",
    date: "2024-01-15",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Index Funds vs ETFs",
    excerpt: "Understanding the differences and which might be right for you.",
    category: "Investing",
    date: "2024-01-12",
    readTime: "7 min read"
  },
  {
    id: 3,
    title: "Debt Snowball Method",
    excerpt: "A proven strategy to pay off debt faster and stay motivated.",
    category: "Credit & Debt",
    date: "2024-01-10",
    readTime: "6 min read"
  },
  {
    id: 4,
    title: "Side Hustle Ideas for 2024",
    excerpt: "Explore profitable side hustles you can start this weekend.",
    category: "Entrepreneurship",
    date: "2024-01-08",
    readTime: "8 min read"
  },
  {
    id: 5,
    title: "Negotiating Your Salary",
    excerpt: "Proven techniques to increase your earning potential at work.",
    category: "Career & Income",
    date: "2024-01-05",
    readTime: "9 min read"
  },
  {
    id: 6,
    title: "Understanding Credit Scores",
    excerpt: "Everything you need to know about credit scores and how to improve them.",
    category: "Credit & Debt",
    date: "2024-01-03",
    readTime: "6 min read"
  }
];

export function BlogTiles() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Recently Published</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentBlogs.map((blog) => (
            <Card key={blog.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {blog.category}
                  </span>
                  <div className="flex items-center text-muted-foreground text-xs">
                    <Calendar className="h-3 w-3 mr-1" />
                    {new Date(blog.date).toLocaleDateString()}
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">
                  {blog.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {blog.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{blog.readTime}</span>
                  <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
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
  );
}
