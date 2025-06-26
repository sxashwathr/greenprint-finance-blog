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
  "retirement-planning": {
    title: "Retirement Planning in Your 20s: The Ultimate Advantage",
    category: "Investing"
  },
  "credit-essentials": {
    title: "Credit Essentials: Building and Managing Your Score",
    category: "Credit & Debt"
  },
  "debt-payoff-strategies": {
    title: "Debt Payoff Strategies: Finding Your Path to Freedom",
    category: "Credit & Debt"
  },
  "entrepreneurship-starters": {
    title: "Entrepreneurship Starters: From Idea to Income",
    category: "Entrepreneurship"
  },
   "entrepreneurship-starters": {
    title: "Entrepreneurship Starters: From Idea to Income",
    category: "Entrepreneurship"
  },
  "career-growth": {
    title: "Career Growth: Maximizing Your Earning Potential",
    category: "Career & Income"
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

 const renderContent = () => {
  switch(slug) {
    case "budgeting-basics":
      return (
        <div className="prose prose-lg max-w-4xl mx-auto">
          <p className="text-lg text-emerald-700 mb-6">
            Creating and sticking to a budget is the foundation of financial success. Let's break down how to build a budget that actually works for your lifestyle.
          </p>

          <p className="mb-6 text-foreground">
            Have you ever reached the end of the month wondering where all your money went? You're not alone—most people struggle with this exact problem.
          </p>

          <p className="mb-6 text-foreground">
            The truth is, traditional budgeting advice often fails because it's too rigid and doesn't account for real life. You can't just tell yourself "don't spend money on coffee" and expect that to solve everything.
          </p>

          <h3 className="text-xl font-semibold mb-4 text-white">Why Most Budgets Fail</h3>

          <p className="mb-6 text-foreground">
            Most budgets fail because they're built on restriction rather than intention. They're created in a moment of financial panic and abandoned when life gets complicated.
          </p>

          <p className="mb-6 text-foreground">
            The key is building a system that adapts to your actual spending patterns while helping you make progress toward your goals.
          </p>

          <h3 className="text-xl font-semibold mb-4 text-white">The Zero-Based Budgeting Method</h3>

          <p className="mb-6 text-foreground">
            Zero-based budgeting means every dollar has a job before you spend it. If you earn $3,000 this month, you assign all $3,000 to specific categories: rent, groceries, savings, entertainment, and so on.
          </p>

          <p className="mb-6 text-foreground">
            This doesn't mean you spend every penny. Money assigned to savings or emergency funds is still "assigned"—it's just assigned to your future self.
          </p>

          <h4 className="text-lg font-medium mb-3 text-white">Getting Started: Track Before You Budget</h4>

          <p className="mb-6 text-foreground">
            Before creating any budget, spend two weeks tracking every expense. Use your bank statements, credit card statements, and cash receipts.
          </p>

          <p className="mb-6 text-foreground">
            Don't judge your spending during this phase—just observe. You might discover you're spending $150 monthly on subscription services you forgot about.
          </p>

          <h4 className="text-lg font-medium mb-3 text-white">The Four Budget Categories</h4>

          <p className="mb-6 text-foreground">
            Group your expenses into these main categories:
          </p>

          <div className="mb-6 text-foreground">
            <p className="mb-2"><em>Fixed necessities:</em> Rent, insurance, minimum debt payments</p>
            <p className="mb-2"><em>Variable necessities:</em> Groceries, utilities, gas</p>
            <p className="mb-2"><em>Financial goals:</em> Savings, extra debt payments, investments</p>
            <p className="mb-2"><em>Lifestyle choices:</em> Entertainment, dining out, hobbies</p>
          </div>

          <p className="mb-6 text-foreground">
            This framework helps you see where your money goes and which areas have flexibility.
          </p>

          <h4 className="text-lg font-medium mb-3 text-white">Making Your Budget Work</h4>

          <p className="mb-6 text-foreground">
            Set realistic targets—don't try to cut your grocery budget from $600 to $300 overnight. Start with small, achievable changes like reducing it to $550.
          </p>

          <p className="mb-6 text-foreground">
            Create a "miscellaneous" category for unexpected expenses. When you overspend in one area, you can pull from this buffer rather than abandoning your entire budget.
          </p>

          <p className="mb-6 text-foreground">
            The perfect budget is the one you actually follow consistently, not the one that looks impressive on paper.
          </p>
        </div>
      );

    case "money-psychology":
      return (
        <div className="prose prose-lg max-w-4xl mx-auto">
          <p className="text-lg text-emerald-700 mb-6">
            Understanding why we make certain financial decisions can be the difference between building wealth and living paycheck to paycheck.
          </p>

          <p className="mb-6 text-foreground">
            Have you ever bought something you didn't need, then immediately regretted the purchase? That moment of buyer's remorse reveals something important about how our brains handle money decisions.
          </p>

          <h3 className="text-xl font-semibold mb-4 text-white">Money Decisions Aren't Rational</h3>

          <p className="mb-6 text-foreground">
            Despite what economics textbooks suggest, we don't make purely logical financial choices. Our spending is influenced by emotions, social pressure, and psychological triggers we're often unaware of.
          </p>

          <p className="mb-6 text-foreground">
            Retailers understand this better than most consumers do. Every aspect of store design—from lighting to music to product placement—is calculated to influence your spending behavior.
          </p>

          <h3 className="text-xl font-semibold mb-4 text-white">The Emotional Triggers Behind Spending</h3>

          <div className="mb-6 text-foreground">
            <p className="mb-4"><em>Stress spending:</em> Many people shop when overwhelmed as a way to feel control over their environment. The temporary excitement of a purchase provides a brief escape from anxiety.</p>
            
            <p className="mb-4"><em>Social comparison spending:</em> Social media makes it easy to compare our lives to others' highlight reels. Seeing friends travel or buy new things can trigger a desire to "keep up."</p>
            
            <p className="mb-4"><em>Celebration spending:</em> Good news often leads to reward purchases. Got a raise? Time to celebrate with an expensive dinner or shopping spree.</p>
            
            <p className="mb-4"><em>Boredom spending:</em> Online shopping has made it incredibly easy to spend money when we're understimulated or looking for entertainment.</p>
          </div>

          <h3 className="text-xl font-semibold mb-4 text-white">How Retailers Manipulate Your Psychology</h3>

          <div className="mb-6 text-foreground">
            <p className="mb-4"><em>Limited-time offers:</em> Creating artificial urgency pushes people to buy before they've fully considered the purchase.</p>
            
            <p className="mb-4"><em>Anchoring prices:</em> Showing a high "original price" next to a lower "sale price" makes the deal seem better than it is.</p>
            
            <p className="mb-4"><em>Subscription pricing:</em> $9.99 per month feels more manageable than $120 per year, even though they're identical.</p>
            
            <p className="mb-4"><em>Free shipping thresholds:</em> Adding one more item to qualify for "free" shipping often costs more than just paying for shipping.</p>
          </div>

          <h3 className="text-xl font-semibold mb-4 text-white">The Social Media Effect</h3>

          <p className="mb-6 text-foreground">
            Instagram, TikTok, and Facebook have turned social comparison into a constant stream. We see curated versions of others' lives and feel pressure to match their apparent lifestyle.
          </p>

          <p className="mb-6 text-foreground">
            Influencer marketing has made advertising more subtle and personal. When someone you follow recommends a product, it feels like advice from a friend rather than an advertisement.
          </p>

          <h4 className="text-lg font-medium mb-3 text-white">Building Awareness of Your Triggers</h4>

          <p className="mb-6 text-foreground">
            The first step to changing spending behavior is recognizing your personal triggers. Keep a spending journal for two weeks, noting what you bought, how you were feeling, and what prompted the decision.
          </p>

          <p className="mb-6 text-foreground">
            Patterns will emerge. Maybe you overspend when stressed about work, or you're vulnerable to deals when scrolling social media late at night.
          </p>

          <h4 className="text-lg font-medium mb-3 text-white">Practical Strategies to Change Your Habits</h4>

          <div className="mb-6 text-foreground">
            <p className="mb-4"><em>The 48-hour rule:</em> For any non-essential purchase over $50, wait 48 hours. This cooling-off period allows rational thinking to override emotional impulses.</p>
            
            <p className="mb-4"><em>Unsubscribe from retailer emails:</em> Those "flash sale" notifications are designed to create urgency and bypass thoughtful consideration.</p>
            
            <p className="mb-4"><em>Curate your social media:</em> Unfollow accounts that consistently make you feel inadequate or trigger spending desires.</p>
            
            <p className="mb-4"><em>Find alternative activities:</em> If you shop when bored or stressed, develop other outlets like walking, calling a friend, or pursuing a hobby.</p>
          </div>

          <p className="mb-6 text-foreground">
            Understanding your psychology around money isn't about eliminating all emotion from financial decisions. It's about making conscious choices that support your long-term well-being rather than just responding to immediate impulses.
          </p>
        </div>
      );

    case "investing-fundamentals":
      return (
        <div className="prose prose-lg max-w-4xl mx-auto">
          <p className="text-lg text-emerald-700 mb-6">
            The world of investing might seem intimidating, but understanding a few key principles can set you on the path to building real wealth over time.
          </p>

          <p className="mb-6 text-foreground">
            Have you ever wondered how some people build substantial wealth while working regular jobs? The secret often lies not in earning extraordinary incomes, but in understanding how to make money work for them through investing.
          </p>

          <h3 className="text-xl font-semibold mb-4 text-white">What Investing Really Means</h3>

          <p className="mb-6 text-foreground">
            Investing is essentially lending your money to companies, governments, or other entities with the expectation that they'll pay you back with interest or share their profits with you.
          </p>

          <p className="mb-6 text-foreground">
            When you buy a stock, you're purchasing a tiny piece of a company. When you buy a bond, you're lending money to a company or government that promises to pay you back with interest.
          </p>

          <h3 className="text-xl font-semibold mb-4 text-white">The Power of Compound Growth</h3>

          <p className="mb-6 text-foreground">
            Compound growth means earning returns not just on your original investment, but on all the previous returns as well. A $1,000 investment earning 8% annually becomes $1,080 after one year. But in year two, you earn 8% on $1,080, not just the original $1,000.
          </p>

          <p className="mb-6 text-foreground">
            Over long periods, this compounding effect becomes incredibly powerful. That same $1,000, growing at 8% annually, becomes over $21,000 in 40 years.
          </p>

          <h3 className="text-xl font-semibold mb-4 text-white">Time Is Your Greatest Asset</h3>

          <p className="mb-6 text-foreground">
            The most important factor in building wealth through investing isn't how much money you start with—it's how much time you give your investments to grow.
          </p>

          <p className="mb-6 text-foreground">
            Someone who invests $2,000 annually from age 25 to 35 and then stops will likely have more money at retirement than someone who starts at age 35 and continues until age 65.
          </p>

          <h4 className="text-lg font-medium mb-3 text-white">Understanding Risk and Return</h4>

          <p className="mb-6 text-foreground">
            All investments involve some level of risk—the possibility that you might lose money or earn less than expected. Generally, investments with higher potential returns also carry higher risks.
          </p>

          <p className="mb-6 text-foreground">
            The key is matching your risk tolerance with your timeline. Money you need within the next five years shouldn't be invested in stocks, which can be unpredictable in the short term.
          </p>

          <h4 className="text-lg font-medium mb-3 text-white">Index Funds: Instant Diversification</h4>

          <p className="mb-6 text-foreground">
            Index funds solve the diversification challenge by pooling money from many investors to buy hundreds or thousands of different stocks or bonds.
          </p>

          <p className="mb-6 text-foreground">
            An S&P 500 index fund owns pieces of the 500 largest U.S. companies. When you buy shares of this fund, you instantly own a tiny piece of Apple, Microsoft, Amazon, and 497 other companies.
          </p>

          <h4 className="text-lg font-medium mb-3 text-white">Dollar-Cost Averaging</h4>

          <p className="mb-6 text-foreground">
            Dollar-cost averaging is a simple strategy: invest a fixed amount regularly, regardless of market conditions. When prices are high, your money buys fewer shares. When prices are low, the same money buys more shares.
          </p>

          <p className="mb-6 text-foreground">
            Over time, this approach helps smooth out market volatility and removes the emotional stress of trying to time your investments perfectly.
          </p>

          <h4 className="text-lg font-medium mb-3 text-white">Getting Started</h4>

          <p className="mb-6 text-foreground">
            You don't need thousands of dollars to begin investing. Many brokerages now allow you to start with as little as $25, and some offer fractional shares that let you buy pieces of expensive stocks.
          </p>

          <p className="mb-6 text-foreground">
            The most important step is to start. Even small amounts, invested consistently over time, can grow into substantial sums thanks to compounding.
          </p>
        </div>
      );

    case "retirement-planning":
      return (
        <div className="prose prose-lg max-w-4xl mx-auto">
          <p className="text-lg text-emerald-700 mb-6">
            Your 20s might feel too early to think about retirement, but this decade offers you the most powerful wealth-building tool available: time.
          </p>

          <p className="mb-6 text-foreground">
            Have you ever calculated what starting retirement savings 10 years earlier could mean for your future? The numbers might shock you into action.
          </p>

          <h3 className="text-xl font-semibold mb-4 text-white">The Power of Starting Early</h3>

          <p className="mb-6 text-foreground">
            Consider two people: Sarah starts investing $200 monthly at age 25, while Mike waits until 35 to start investing $300 monthly. Both earn 8% annual returns and retire at 65.
          </p>

          <p className="mb-6 text-foreground">
            Sarah invests for 40 years ($96,000 total) and retires with approximately $700,000. Mike invests for 30 years ($108,000 total) and retires with approximately $680,000.
          </p>

          <p className="mb-6 text-foreground">
            Even though Mike invested more money each month, Sarah ends up with more because she started earlier.
          </p>

          <h4 className="text-lg font-medium mb-3 text-white">Why Time Matters More Than Amount</h4>

          <p className="mb-6 text-foreground">
            This happens because of exponential growth. Early contributions have decades to compound, while later contributions have less time to grow.
          </p>

          <p className="mb-6 text-foreground">
            Every dollar you invest in your 20s has the potential to become $15-20 by retirement. Every dollar you invest in your 40s might only become $3-4.
          </p>

          <h3 className="text-xl font-semibold mb-4 text-white">Your Retirement Account Options</h3>

          <div className="mb-6 text-foreground">
            <p className="mb-4"><em>401(k) Plans:</em> If your employer offers a 401(k), especially with matching contributions, prioritize this first. Employer matching is literally free money.</p>
            
            <p className="mb-4"><em>Roth IRA:</em> With a Roth IRA, you pay taxes upfront but withdraw everything tax-free in retirement. This is often advantageous for young people who expect to be in higher tax brackets later.</p>
          </div>

          <h4 className="text-lg font-medium mb-3 text-white">The Beauty of Aggressive Investing</h4>

          <p className="mb-6 text-foreground">
            When you're young, you have decades to ride out market volatility. This means you can invest more aggressively in stocks, which historically provide higher returns than bonds.
          </p>

          <p className="mb-6 text-foreground">
            A portfolio that's 80-90% stocks might be too risky for someone nearing retirement, but it's often appropriate for someone with 40+ years until retirement.
          </p>

          <h4 className="text-lg font-medium mb-3 text-white">Overcoming Common Excuses</h4>

          <div className="mb-6 text-foreground">
            <p className="mb-4"><em>"I don't earn enough":</em> Even $25 monthly makes a difference over 40 years. Start with whatever you can afford and increase contributions as your income grows.</p>
            
            <p className="mb-4"><em>"I have student loans":</em> If your employer offers 401(k) matching, contribute enough to get the full match even while paying off loans.</p>
          </div>

          <h4 className="text-lg font-medium mb-3 text-white">Making It Automatic</h4>

          <p className="mb-6 text-foreground">
            Set up automatic transfers to retirement accounts so you don't have to think about it. Many 401(k) plans offer automatic escalation features that increase your contribution by 1% annually.
          </p>

          <p className="mb-6 text-foreground">
            The habits you build now will serve you for decades. Start where you are, use the tools available to you, and be patient. Time is one of your greatest allies in building wealth.
          </p>
        </div>
      );

    case "credit-essentials":
      return (
        <div className="prose prose-lg max-w-4xl mx-auto">
          <p className="text-lg text-emerald-700 mb-6">
            Building good credit early opens doors to better interest rates, rental opportunities, and financial flexibility throughout your life.
          </p>

          <p className="mb-6 text-foreground">
            Have you ever been surprised by how much of your financial life depends on three little numbers? Your credit score affects everything from apartment rentals to insurance rates to job opportunities.
          </p>

          <h3 className="text-xl font-semibold mb-4 text-white">What Credit Scores Actually Measure</h3>

          <p className="mb-6 text-foreground">
            Credit scores attempt to predict how likely you are to repay borrowed money on time. They're based on your history of managing credit, not your income or assets.
          </p>

          <p className="mb-6 text-foreground">
            This means someone earning $30,000 annually with perfect payment history might have a higher credit score than someone earning $100,000 who's missed several payments.
          </p>

          <h3 className="text-xl font-semibold mb-4 text-white">The Five Factors That Determine Your Score</h3>

          <div className="mb-6 text-foreground">
            <p className="mb-4"><em>Payment History (35%):</em> This is the most important factor. Even one missed payment can significantly impact your score, while consistent on-time payments build strong credit.</p>
            
            <p className="mb-4"><em>Credit Utilization (30%):</em> This is how much of your available credit you're actually using. Using more than 30% of your available credit can hurt your score.</p>
            
            <p className="mb-4"><em>Length of Credit History (15%):</em> Longer credit histories generally result in higher scores. This is why closing old credit cards can sometimes hurt your score.</p>
            
            <p className="mb-4"><em>Types of Credit (10%):</em> Having a mix of credit types—credit cards, car loans, mortgages—can slightly improve your score.</p>
            
            <p className="mb-4"><em>New Credit Inquiries (10%):</em> Applying for lots of credit in a short time can temporarily lower your score.</p>
          </div>

          <h4 className="text-lg font-medium mb-3 text-white">Starting from Zero: Your First Credit Card</h4>

          <p className="mb-6 text-foreground">
            If you have no credit history, getting your first credit card can feel impossible. Here are the most common strategies:
          </p>

          <div className="mb-6 text-foreground">
            <p className="mb-4"><em>Secured Credit Cards:</em> You put down a cash deposit that becomes your credit limit. Use the card responsibly, and most companies will eventually convert it to a regular card.</p>
            
            <p className="mb-4"><em>Student Credit Cards:</em> If you're in college, many companies offer credit cards designed for students with no credit history.</p>
            
            <p className="mb-4"><em>Authorized User:</em> Ask a family member with good credit to add you as an authorized user on their account.</p>
          </div>

          <h4 className="text-lg font-medium mb-3 text-white">Using Your First Credit Card Responsibly</h4>

          <p className="mb-6 text-foreground">
            The biggest mistake new credit users make is treating their credit card like extra money. It's borrowed money that must be repaid.
          </p>

          <p className="mb-6 text-foreground">
            Use your credit card for purchases you'd make anyway and pay the full balance every month. Never charge more than you can afford to pay off immediately.
          </p>

          <h4 className="text-lg font-medium mb-3 text-white">Understanding Credit Utilization</h4>

          <p className="mb-6 text-foreground">
            Even if you pay your balance in full each month, your credit utilization ratio affects your score. Aim for utilization below 10% for the best scores.
          </p>

          <p className="mb-6 text-foreground">
            You can manage this by making multiple payments throughout the month or requesting credit limit increases without increasing your spending.
          </p>

          <h4 className="text-lg font-medium mb-3 text-white">The Never-Close-Your-First-Card Rule</h4>

          <p className="mb-6 text-foreground">
            Your first credit card will likely become the foundation of your credit history. Even if you get better cards later, keep this first card open and use it occasionally.
          </p>

          <p className="mb-6 text-foreground">
            Closing it would reduce your total available credit and potentially shorten your average account age—both factors that can lower your score.
          </p>

          <p className="mb-6 text-foreground">
            Building excellent credit is a marathon, not a sprint. Focus on developing good habits: pay on time, keep balances low, and avoid unnecessary credit applications.
          </p>
        </div>
      );

    case "debt-payoff-strategies":
      return (
        <div className="prose prose-lg max-w-4xl mx-auto">
          <p className="text-lg text-emerald-700 mb-6">
            Whether you're dealing with student loans, credit cards, or other debts, having a clear strategy can accelerate your path to financial freedom.
          </p>

          <p className="mb-6 text-foreground">
            Have you ever felt overwhelmed by multiple debts, unsure which one to tackle first? You're facing a challenge that millions of Americans navigate daily—the average household carries over $6,000 in credit card debt alone.
          </p>

          <h3 className="text-xl font-semibold mb-4 text-white">The Psychology of Debt Payoff</h3>

          <p className="mb-6 text-foreground">
            Before diving into strategies, it's important to understand that debt payoff is as much psychological as it is mathematical. The "best" strategy on paper might not be the best strategy for your personality.
          </p>

          <p className="mb-6 text-foreground">
            Some people are energized by quick wins, while others are motivated by saving the most money possible. Choose an approach that matches how you stay motivated.
          </p>

          <h3 className="text-xl font-semibold mb-4 text-white">The Debt Snowball Method</h3>

          <p className="mb-6 text-foreground">
            This strategy focuses on paying off your smallest debt first while making minimum payments on everything else. Once the smallest debt is eliminated, you roll that payment into the next smallest debt.
          </p>

          <div className="mb-6 text-foreground">
            <p className="mb-4"><em>Advantages:</em> Quick psychological wins keep you motivated. Eliminating debts entirely feels more rewarding than slowly chipping away at large balances.</p>
            
            <p className="mb-4"><em>Disadvantages:</em> You'll pay more in interest overall if your smallest debts don't have the highest interest rates.</p>
          </div>

          <h3 className="text-xl font-semibold mb-4 text-white">The Debt Avalanche Method</h3>

          <p className="mb-6 text-foreground">
            This approach targets the debt with the highest interest rate first, regardless of balance size. You make minimum payments on all debts but put any extra money toward the highest-rate debt.
          </p>

          <div className="mb-6 text-foreground">
            <p className="mb-4"><em>Advantages:</em> Mathematically optimal—you'll pay the least interest overall and become debt-free faster.</p>
            
            <p className="mb-4"><em>Disadvantages:</em> It may take longer to see the first debt disappear, which can be discouraging.</p>
          </div>

          <h4 className="text-lg font-medium mb-3 text-white">Debt Consolidation Options</h4>

          <div className="mb-6 text-foreground">
            <p className="mb-4"><em>Personal Loans:</em> If you qualify for a personal loan with a lower interest rate than your credit cards, you can pay off all your cards and focus on one monthly payment.</p>
            
            <p className="mb-4"><em>Balance Transfer Cards:</em> Many credit cards offer promotional 0% interest rates on balance transfers for 12-21 months.</p>
          </div>

          <p className="mb-6 text-foreground">
            Watch out for balance transfer fees and ensure you can pay off the balance before the promotional rate expires.
          </p>

          <h4 className="text-lg font-medium mb-3 text-white">The Minimum Payment Trap</h4>

          <p className="mb-6 text-foreground">
            Credit card minimum payments are designed to keep you in debt as long as possible. On a $5,000 credit card balance at 18% interest, making only minimum payments would take over 30 years to pay off.
          </p>

          <h4 className="text-lg font-medium mb-3 text-white">Creating Your Debt Payoff Plan</h4>

          <div className="mb-6 text-foreground">
            <p className="mb-2">1. List all your debts with current balances, minimum payments, and interest rates</p>
            <p className="mb-2">2. Choose your strategy (snowball or avalanche) based on your personality</p>
            <p className="mb-2">3. Find extra money to accelerate payoff through budgeting or side hustles</p>
            <p className="mb-2">4. Automate payments to avoid missed payments</p>
            <p className="mb-2">5. Track your progress visually to stay motivated</p>
          </div>

          <h4 className="text-lg font-medium mb-3 text-white">Finding Extra Money for Debt Payments</h4>

          <div className="mb-6 text-foreground">
            <p className="mb-4"><em>Temporary budget cuts:</em> Cancel subscriptions, eat out less, find free entertainment options.</p>
            
            <p className="mb-4"><em>Sell items you don't need:</em> Electronics, clothes, or furniture gathering dust can become debt payments.</p>
            
            <p className="mb-4"><em>Use windfalls strategically:</em> Tax refunds, bonuses, or gifts should go directly to debt rather than lifestyle inflation.</p>
          </div>

          <p className="mb-6 text-foreground">
            Remember that every payment brings you closer to freedom. The discipline you develop during debt payoff will serve you well in building wealth later.
          </p>
        </div>
      );

    // ADD MORE CASES FOR OTHER BLOG POSTS HERE
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
