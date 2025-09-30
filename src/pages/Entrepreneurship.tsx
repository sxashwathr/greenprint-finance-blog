import { Header } from "@/components/Header";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Footer } from "@/components/Footer";
import { Lightbulb } from "lucide-react";
import { BlogTile } from "@/components/BlogTile";

const entrepreneurshipBlogs = [
  {
    id: "entrepreneurship-starters",
    title: "Entrepreneurship Starters: From Idea to Income",
    excerpt: "Profitable business ideas you can launch with minimal investment.",
    category: "Entrepreneurship",
    date: "2024-01-28",
    readTime: "12 min read",
    categoryColor: "bg-emerald-green"
  },
  {
    id: "side-hustle-revolution",
    title: "The Side Hustle Revolution: Building Income Outside the 9-to-5",
    excerpt: "Transform your spare time into profitable income streams that fit around your schedule.",
    category: "Entrepreneurship",
    date: "2024-01-28",
    readTime: "7 min read",
    categoryColor: "bg-emerald-green"
  },
  {
    id: "scaling-your-business",
    title: "Scaling Your Business: From Solo Act to Sustainable Growth",
    excerpt: "Learn key strategies and tools needed to grow your business beyond what you can handle alone.",
    category: "Entrepreneurship",
    date: "2024-01-28",
    readTime: "10 min read",
    categoryColor: "bg-emerald-green"
  },
  {
    id: "e-commerce-business-models",
    title: "E-Commerce Business Models: Finding Your Path to Online Success",
    excerpt: "Explore different e-commerce approaches and find the right model for you.",
    category: "Entrepreneurship",
    date: "2024-01-28",
    readTime: "9 min read",
    categoryColor: "bg-emerald-green"
  },
  {
    id: "business-funding-options",
    title: "Business Funding Options: From Bootstrapping to Venture Capital",
    excerpt: "Understand funding sources and choose the right capital strategy.",
    category: "Entrepreneurship",
    date: "2024-01-28",
    readTime: "9 min read",
    categoryColor: "bg-emerald-green"
  },
  {
    id: "intellectual-property-basics",
    title: "Intellectual Property Basics: Protecting Your Business Assets",
    excerpt: "Learn to protect your innovations through trademarks, copyrights, and more.",
    category: "Entrepreneurship",
    date: "2024-01-28",
    readTime: "8 min read",
    categoryColor: "bg-emerald-green"
  }
];

const Entrepreneurship = () => {
  return (
    <div className="min-h-screen bg-background">
      
      <Header />
      
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="flex justify-center mb-8 animate-fade-in">
              <div className="w-16 h-16 bg-gradient-to-br from-forest-green to-sage-green rounded-xl flex items-center justify-center">
                <Lightbulb className="h-8 w-8 text-white" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-forest-green to-sage-green bg-clip-text text-transparent animate-fade-in">
              Entrepreneurship
            </h1>
            
            {/* CHANGED: Main description text to dark forest green */}
            <p className="text-xl text-emerald-700 mb-12 leading-relaxed animate-fade-in">
              Turn your ideas into profitable ventures. Learn the financial fundamentals of starting and growing a successful business.
            </p>
          </div>

          {/* Blog Tiles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {entrepreneurshipBlogs.map((blog) => (
              <BlogTile key={blog.id} {...blog} />
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Entrepreneurship;
