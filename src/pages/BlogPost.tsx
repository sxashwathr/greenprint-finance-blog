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
            <h1 className="text-4xl font-bold mb-8 text-foreground">Budgeting Basics: Your First Step to Financial Freedom</h1>
            
            <p className="text-lg text-emerald-700 mb-6">
              Creating and sticking to a budget is the foundation of financial success. Let's break down how to build a budget that actually works for your lifestyle.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">Why Budgeting Matters</h2>
            <p className="mb-4 text-foreground">
              A budget gives you control over your money instead of wondering where it went. It helps you:
            </p>
            <ul className="list-disc pl-6 mb-6 text-foreground">
              <li>Track your income and expenses</li>
              <li>Identify areas where you can save money</li>
              <li>Plan for future goals and emergencies</li>
              <li>Reduce financial stress</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">The 50/30/20 Rule</h2>
            <p className="mb-4 text-foreground">
              A simple budgeting framework to get started:
            </p>
            <ul className="list-disc pl-6 mb-6 text-foreground">
              <li><strong>50% for needs:</strong> Rent, groceries, utilities, minimum debt payments</li>
              <li><strong>30% for wants:</strong> Entertainment, dining out, hobbies</li>
              <li><strong>20% for savings and debt repayment:</strong> Emergency fund, retirement, extra debt payments</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">Getting Started</h2>
            <ol className="list-decimal pl-6 mb-6 text-foreground">
              <li>Calculate your monthly after-tax income</li>
              <li>Track your expenses for a month</li>
              <li>Categorize your spending</li>
              <li>Set realistic goals for each category</li>
              <li>Review and adjust monthly</li>
            </ol>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">Common Budgeting Mistakes</h2>
            <ul className="list-disc pl-6 mb-6 text-foreground">
              <li>Being too restrictive with your "wants" category</li>
              <li>Not planning for irregular expenses</li>
              <li>Giving up after one bad month</li>
              <li>Not adjusting as your life changes</li>
            </ul>

            <p className="text-lg text-emerald-700 mt-8">
              Remember, the best budget is one you'll actually stick to. Start simple and adjust as you learn what works for your lifestyle.
            </p>
          </div>
        );

      case "investing-fundamentals":
        return (
          <div className="prose prose-lg max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-foreground">Investing Fundamentals: Building Long-Term Wealth</h1>
            
            <p className="text-lg text-emerald-700 mb-6">
              Investing can seem intimidating, but understanding the basics is your first step toward building long-term wealth.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">Why Invest?</h2>
            <p className="mb-6 text-foreground">
              Your money loses value over time due to inflation. Investing helps your money grow faster than inflation, building real wealth over time.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">Key Investment Types</h2>
            <ul className="list-disc pl-6 mb-6 text-foreground">
              <li><strong>Stocks:</strong> Ownership shares in companies</li>
              <li><strong>Bonds:</strong> Loans to companies or governments</li>
              <li><strong>Index Funds:</strong> Diversified baskets of stocks or bonds</li>
              <li><strong>ETFs:</strong> Exchange-traded funds that track indices</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">Getting Started</h2>
            <ol className="list-decimal pl-6 mb-6 text-foreground">
              <li>Build an emergency fund first (3-6 months of expenses)</li>
              <li>Pay off high-interest debt</li>
              <li>Open a brokerage account</li>
              <li>Start with low-cost index funds</li>
              <li>Invest consistently, regardless of market conditions</li>
            </ol>

            <p className="text-lg text-emerald-700 mt-8">
              Time in the market beats timing the market. Start early, stay consistent, and let compound growth work for you.
            </p>
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
