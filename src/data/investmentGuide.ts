export interface GuideSection {
  id: string;
  title: string;
  content: string;
  subsections?: GuideSubsection[];
}

export interface GuideSubsection {
  id: string;
  title: string;
  content: string;
}

export const investmentGuideData: GuideSection[] = [
  {
    id: 'basics',
    title: 'Investment Basics',
    content: 'Understanding the fundamentals of investing is crucial for building long-term wealth. Investing involves putting your money to work in assets that have the potential to grow in value over time.',
    subsections: [
      {
        id: 'what-is-investing',
        title: 'What is Investing?',
        content: 'Investing is the process of putting money to work in order to start or expand a business or project or to purchase an asset or interest with the expectation of receiving an income or profit. Unlike saving, which preserves your money, investing aims to grow your wealth over time through compound returns.'
      },
      {
        id: 'risk-vs-return',
        title: 'Risk vs Return',
        content: 'All investments carry some level of risk, and generally, higher potential returns come with higher risk. Understanding this relationship helps you make informed decisions about your investment portfolio. Diversification can help manage risk while still pursuing growth.'
      },
      {
        id: 'compound-interest',
        title: 'The Power of Compound Interest',
        content: 'Compound interest is earning interest on both your original investment and previously earned interest. This creates exponential growth over time, making it one of the most powerful forces in investing. Starting early, even with small amounts, can lead to significant wealth accumulation.'
      }
    ]
  },
  {
    id: 'getting-started',
    title: 'Getting Started',
    content: 'Before you begin investing, ensure you have a solid financial foundation. This includes having an emergency fund and a clear understanding of your financial goals.',
    subsections: [
      {
        id: 'emergency-fund',
        title: 'Build Emergency Fund First',
        content: 'Before investing, ensure you have 3-6 months of expenses saved in a high-yield savings account. This provides financial security and prevents you from having to sell investments during emergencies, which could lock in losses.'
      },
      {
        id: 'choose-broker',
        title: 'Choosing a Broker',
        content: 'Select a reputable broker with low fees, good customer service, and the investment options you need. Consider factors like account minimums, commission fees, research tools, and mobile app functionality. Popular options include Fidelity, Vanguard, and Charles Schwab.'
      },
      {
        id: 'set-goals',
        title: 'Setting Investment Goals',
        content: 'Define clear, specific goals for your investments. Are you saving for retirement, a home down payment, or your children\'s education? Different goals may require different investment strategies and time horizons.'
      }
    ]
  },
  {
    id: 'investment-types',
    title: 'Types of Investments',
    content: 'Understanding different investment vehicles helps you build a diversified portfolio that matches your risk tolerance and goals.',
    subsections: [
      {
        id: 'stocks',
        title: 'Stocks',
        content: 'Stocks represent ownership shares in companies. They offer potential for high returns but come with higher volatility. You can invest in individual stocks or stock funds for diversification.'
      },
      {
        id: 'bonds',
        title: 'Bonds',
        content: 'Bonds are loans you make to governments or corporations. They typically provide steady income and are less volatile than stocks, making them good for portfolio balance and income generation.'
      },
      {
        id: 'index-funds',
        title: 'Index Funds and ETFs',
        content: 'Index funds and ETFs provide instant diversification by tracking market indexes. They offer low fees, broad market exposure, and are ideal for beginning investors who want a hands-off approach.'
      },
      {
        id: 'real-estate',
        title: 'Real Estate Investment',
        content: 'Real estate can provide both income and appreciation. You can invest directly in property or through REITs (Real Estate Investment Trusts) for easier, more liquid exposure to real estate markets.'
      }
    ]
  },
  {
    id: 'strategies',
    title: 'Investment Strategies',
    content: 'Different strategies suit different investors based on their goals, timeline, and risk tolerance.',
    subsections: [
      {
        id: 'dollar-cost-averaging',
        title: 'Dollar-Cost Averaging',
        content: 'Invest a fixed amount regularly regardless of market conditions. This strategy reduces the impact of market volatility and removes the temptation to time the market, which is notoriously difficult even for professionals.'
      },
      {
        id: 'asset-allocation',
        title: 'Asset Allocation',
        content: 'Divide your investments among different asset classes (stocks, bonds, real estate) based on your age, goals, and risk tolerance. A common rule of thumb is to subtract your age from 100 to determine your stock allocation percentage.'
      },
      {
        id: 'rebalancing',
        title: 'Portfolio Rebalancing',
        content: 'Periodically adjust your portfolio back to your target allocation. As different investments perform differently, your allocation will drift. Rebalancing forces you to sell high and buy low, maintaining your desired risk level.'
      }
    ]
  },
  {
    id: 'retirement',
    title: 'Retirement Investing',
    content: 'Retirement accounts offer tax advantages that can significantly boost your long-term wealth building.',
    subsections: [
      {
        id: '401k',
        title: '401(k) Plans',
        content: 'Employer-sponsored retirement plans often include company matching, which is free money. Contribute at least enough to get the full match, then consider maxing out the account if possible. Choose low-cost index funds when available.'
      },
      {
        id: 'ira',
        title: 'IRAs (Individual Retirement Accounts)',
        content: 'IRAs provide tax-advantaged retirement savings. Traditional IRAs offer tax deductions now with taxed withdrawals later. Roth IRAs use after-tax money but provide tax-free growth and withdrawals in retirement.'
      },
      {
        id: 'retirement-timeline',
        title: 'Retirement Timeline Planning',
        content: 'Start saving for retirement as early as possible. Aim to save 10-15% of your income. The earlier you start, the less you need to save monthly due to compound interest. Consider increasing contributions with raises and bonuses.'
      }
    ]
  }
];
