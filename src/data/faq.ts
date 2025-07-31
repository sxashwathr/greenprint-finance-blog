export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const faqData: FAQItem[] = [
  {
    id: 'emergency-fund',
    question: 'How much should I save for an emergency fund?',
    answer: 'Generally, aim for 3-6 months of living expenses. If you have stable employment, 3 months may suffice. If you have irregular income or work in a volatile industry, consider saving 6-12 months of expenses.',
    category: 'Budgeting'
  },
  {
    id: 'start-investing',
    question: 'When should I start investing?',
    answer: 'Start investing as soon as you have a stable emergency fund and have paid off high-interest debt. The earlier you start, the more time compound interest has to work in your favor.',
    category: 'Investing'
  },
  {
    id: 'credit-score-house',
    question: 'What credit score do I need to buy a house?',
    answer: 'Most lenders prefer a credit score of at least 620 for conventional loans. However, FHA loans may be available with scores as low as 580. Higher scores typically mean better interest rates.',
    category: 'Credit & Debt'
  },
  {
    id: 'pay-off-debt',
    question: 'Should I pay off debt or invest first?',
    answer: 'Pay off high-interest debt (above 6-7%) first, then invest. For low-interest debt like mortgages, you can often invest while making minimum payments for better long-term returns.',
    category: 'Credit & Debt'
  },
  {
    id: 'budget-method',
    question: 'What budgeting method works best?',
    answer: 'The 50/30/20 rule is a good starting point: 50% for needs, 30% for wants, 20% for savings and debt repayment. However, the best budget is one you can stick to consistently.',
    category: 'Budgeting'
  },
  {
    id: 'retirement-savings',
    question: 'How much should I save for retirement?',
    answer: 'Aim to save at least 10-15% of your income for retirement. Start with your employer 401k match, then consider IRAs and additional 401k contributions.',
    category: 'Investing'
  },
  {
    id: 'side-hustle',
    question: 'How do I start a profitable side hustle?',
    answer: 'Start with skills you already have, validate demand before investing heavily, and focus on problems you can solve for others. Popular options include freelancing, tutoring, or selling products online.',
    category: 'Entrepreneurship'
  },
  {
    id: 'salary-negotiation',
    question: 'How do I negotiate a higher salary?',
    answer: 'Research market rates, document your achievements, practice your pitch, and timing matters - ask during performance reviews or after completing major projects. Always negotiate respectfully and professionally.',
    category: 'Career & Income'
  }
];

export const faqCategories = ['All', 'Budgeting', 'Investing', 'Credit & Debt', 'Entrepreneurship', 'Career & Income'];
