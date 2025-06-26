import { useParams } from "react-router-dom";
import { Header } from "@/components/Header";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Footer } from "@/components/Footer";

const blogPosts = {
  "budgeting-basics": {
    title: "Budgeting Basics: Your First Step to Financial Freedom",
    category: "Budgeting"
  },
  "money-psychology": {
    title: "The Psychology of Money: Why We Spend and How to Change It",
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
             Have you ever felt like your money disappears before you even realize where it went? You're definitely not alone in this struggle. Building a solid budget isn't just about restricting yourself—it's about taking control and making intentional choices with every dollar you earn.
            </p>

            <p className="mb-6 text-foreground">
              The truth is, most people approach budgeting all wrong. They create these rigid, unrealistic plans that fall apart within weeks. But what if I told you there's a better way?
            </p>

            <p className="mb-6 text-foreground">
              Start by tracking your actual spending for two weeks. Don't change anything yet, just observe. Write down every coffee purchase, every streaming subscription, every grocery run. This isn't about judgment—it's about awareness.
            </p>

            <p className="mb-6 text-foreground">
              Once you see where your money really goes, you can start making smarter decisions. Maybe you'll discover you're spending $200 a month on takeout without realizing it. Or perhaps those small subscription services are adding up to more than your car payment.
            </p>

            <p className="mb-6 text-foreground">
              The key is creating categories that make sense for your life. Your budget should reflect your values and priorities. If travel is important to you, build it in. If you love dining out with friends, allocate money for that experience. Here is an example of some such categories:
            </p>
            <ul className="list-disc pl-6 mb-6 text-foreground">
              <li>Calculate your monthly after-tax income</li>
              <li>Track your expenses for a month</li>
              <li>Categorize your spending into needs, wants, and savings</li>
              <li>Set realistic goals for each category</li>
              <li>Review and adjust monthly based on your actual spending</li>
            </ul>
             <p className="mb-6 text-foreground">
              Remember, your budget is a living document. It should evolve as your income changes, as your goals shift, and as you learn more about your spending patterns. The perfect budget is the one you actually follow, not the one that looks impressive on paper.
            </p>
             <p className="mb-6 text-foreground">
              Start small. Pick just three categories to focus on this month. Master those, then gradually add more structure. Before you know it, budgeting will feel less like a chore and more like a roadmap to your financial goals.
            </p>
          </div>
        );
       case "investing-fundamentals":
        return (
          <div className="prose prose-lg max-w-4xl mx-auto">
            {/* Add your career content here */}
          </div>
        );
      case "money-psychology":
        return (
          <div className="prose prose-lg max-w-4xl mx-auto">
            <p className="text-lg text-emerald-700 mb-6">
            Understanding why we make certain financial decisions can be the difference between building wealth and living paycheck to paycheck.
            </p>
             <p className="mb-6 text-foreground"> 
            Have you ever bought something you didn't really need, then wondered why you made that purchase? Our relationship with money goes much deeper than simple math—it's rooted in psychology, emotions, and often unconscious patterns we've developed over years.
            </p>
             <p className="mb-6 text-foreground"> 
               Think about the last time you made an impulse purchase. Were you stressed? Celebrating something? Feeling left out? Most spending decisions aren't really about the item itself—they're about how we're feeling in that moment.
                </p>
             <p className="mb-6 text-foreground"> 
               Retailers understand this psychology better than we do. They design stores to trigger specific emotions. The bright lights, the strategic placement of sale items, the limited-time offers—it's all calculated to bypass our rational thinking and tap into our emotional responses.
                </p>
             <p className="mb-6 text-foreground"> 
               But here's the empowering part: once you understand these triggers, you can start to recognize them in real time. That moment of pause before you buy something? That's your opportunity to ask yourself what you're really trying to accomplish with this purchase.
                </p>
             <p className="mb-6 text-foreground"> 
               One powerful technique is the 24-hour rule for non-essential purchases over $50. When you want something, write it down instead of buying it immediately. Come back to it the next day and see if you still feel the same way. You'll be surprised how often that intense desire fades.
                </p>
             <p className="mb-6 text-foreground"> 
               Social media plays a huge role in our spending psychology too. We see friends traveling, buying new clothes, or dining at expensive restaurants, and suddenly we feel like we need to keep up. But remember—you're seeing their highlight reel, not their credit card statements.
                </p>
             <p className="mb-6 text-foreground"> 
               Creating awareness around your spending triggers is the first step toward financial freedom. Start paying attention to your emotions before, during, and after purchases. Keep a spending journal for a week and note how you were feeling each time you spent money.
                </p>
              <p className="mb-6 text-foreground"> 
                The goal isn't to eliminate all emotional spending—it's to make conscious choices that align with your values and long-term goals.
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
      case "investing-fundamentals":
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
