import { useParams } from "react-router-dom";
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
  "entrepreneurship-starters": {
    title: "Entrepreneurship Starters: From Idea to Income",
    category: "Entrepreneurship"
  },
  "career-growth": {
    title: "Career Growth: Maximizing Your Earning Potential",
    category: "Career & Income"
  },
};

const BlogPost = () => {
  const { slug } = useParams();

  if (!slug || !blogPosts[slug]) {
    return <Navigate to="/not-found" replace />;
  }

  const post = blogPosts[slug];

  // ADD YOUR BLOG CONTENT HERE - Replace the content based on the slug
  const renderContent = () => {
    switch(slug) {
      case "budgeting-basics":
        return (
          <div className="prose prose-lg max-w-4xl mx-auto">
            <p className="text-lg text-emerald-700 mb-6">
              Creating and sticking to a budget is the foundation of financial success. Let's break down how to build a budget that actually works for your lifestyle.
            </p>

            <p className="mb-6 text-foreground">
              A budget gives you control over your money instead of wondering where it went. It helps you track your income and expenses, identify areas where you can save money, and plan for future goals and emergencies.
            </p>

            <p className="mb-6 text-foreground">
              The 50/30/20 rule is a simple budgeting framework to get started. This approach divides your after-tax income into three categories: 50% for needs like rent and groceries, 30% for wants like entertainment and dining out, and 20% for savings and debt repayment including your emergency fund and retirement contributions.
            </p>

            <p className="mb-6 text-foreground">
              Getting started is easier than you think.
            </p>

            <p className="mb-6 text-foreground">
              Common budgeting mistakes include being too restrictive with your wants category, not planning for irregular expenses, giving up after one bad month, and not adjusting as your life changes. Remember, the best budget is one you'll actually stick to, so start simple and adjust as you learn what works for your lifestyle.
            </p>

            <ul className="list-disc pl-6 mb-6 text-foreground">
              <li>Calculate your monthly after-tax income</li>
              <li>Track your expenses for a month</li>
              <li>Categorize your spending into needs, wants, and savings</li>
              <li>Set realistic goals for each category</li>
              <li>Review and adjust monthly based on your actual spending</li>
            </ul>
          </div>
        );

      case "investing-fundamentals":
        return (
          <div className="prose prose-lg max-w-4xl mx-auto">
            {/* Add your investing content here */}
          </div>
        );

      // ADD MORE CASES FOR OTHER BLOG POSTS HERE
      case "credit-essentials":
        return (
          <div className="prose prose-lg max-w-4xl mx-auto">
            {/* Add your credit content here */}
          </div>
        );

      case "entrepreneurship-starters":
        return (
          <div className="prose prose-lg max-w-4xl mx-auto">
            {/* Add your entrepreneurship content here */}
          </div>
        );

      case "career-growth":
        return (
          <div className="prose prose-lg max-w-4xl mx-auto">
            {/* Add your career content here */}
          </div>
        );

      default:
        return (
          <div className="prose prose-lg max-w-4xl mx-auto">
            {/* Content area - add your blog content here */}
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <ThemeToggle />
      <Header />
      
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold mb-8 text-foreground animate-fade-in">
              {post.title}
            </h1>
          </div>

          {renderContent()}
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default BlogPost;
