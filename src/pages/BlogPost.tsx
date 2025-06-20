
import { useParams, Navigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Footer } from "@/components/Footer";

const blogPosts = {
  "budgeting-basics": {
    title: "Budgeting Basics: Your First Step to Financial Freedom",
    category: "Budgeting"
  },
  "investing-fundamentals": {
    title: "Investing Fundamentals: Building Long-Term Wealth",
    category: "Investing"
  },
  "credit-essentials": {
    title: "Credit Essentials: Building and Managing Your Score",
    category: "Credit & Debt"
  },
  "entrepreneurship-starter": {
    title: "Entrepreneurship Starter: From Idea to Income",
    category: "Entrepreneurship"
  },
  "career-growth": {
    title: "Career Growth: Maximizing Your Earning Potential",
    category: "Career & Income"
  }
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug || !blogPosts[slug as keyof typeof blogPosts]) {
    return <Navigate to="/not-found" replace />;
  }

  const post = blogPosts[slug as keyof typeof blogPosts];

  return (
    <div className="min-h-screen bg-background">
      <ThemeToggle />
      <Header />
      
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-8 text-foreground animate-fade-in">
              {post.title}
            </h1>
            
            <div className="bg-card border border-border rounded-lg p-8 animate-fade-in">
              <p className="text-muted-foreground text-lg">
                This is where the blog content will go. You can add your content here for {post.category.toLowerCase()}.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPost;
