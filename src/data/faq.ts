export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const faqData: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How much should I save for an emergency fund?',
    answer: 'Generally, aim for 3-6 months of living expenses. If you have stable employment, 3 months may suffice. If you have irregular income or work in a volatile industry, consider saving 6-12 months of expenses.',
    category: 'Budgeting'
  },
  {
    id: 'faq-2',
    question: 'When should I start investing?',
    answer: 'Start investing as soon as you have an emergency fund and have paid off high-interest debt. The earlier you start, the more time your money has to compound and grow.',
    category: 'Investing'
  },
  {
    id: 'faq-3',
    question: 'What credit score do I need to buy a house?',
    answer: 'While you can get approved with a score as low as 580 for FHA loans, a score of 740+ will get you the best interest rates. Focus on building your credit before applying for a mortgage.',
    category: 'Credit'
  },
  {
    id: 'faq-4',
    question: 'Should I pay off debt or invest first?',
    answer: 'Pay off high-interest debt (above 6-7%) first, then invest. For low-interest debt like mortgages, you can often invest while making minimum payments for better long-term returns.',
    category: 'Debt'
  },
  {
    id: 'faq-5',
    question: 'What percentage of income should I save?',
    answer: 'Aim to save at least 20% of your income. This includes 10-15% for retirement and 5-10% for other goals. Start with whatever you can and gradually increase.',
    category: 'Budgeting'
  },
  {
    id: 'faq-6',
    question: 'How do I start investing with little money?',
    answer: 'Start with low-cost index funds or ETFs. Many brokers offer fractional shares with no minimums. Consider robo-advisors for automated investing with small amounts.',
    category: 'Investing'
  },
  {
    id: 'faq-7',
    question: 'What is the best way to build credit?',
    answer: 'Pay bills on time, keep credit utilization below 30%, maintain old accounts, and avoid opening too many new accounts quickly. Consider becoming an authorized user on someone else\'s account.',
    category: 'Credit'
  },
  {
    id: 'faq-8',
    question: 'Should I refinance my mortgage?',
    answer: 'Consider refinancing if you can lower your rate by at least 0.5-1%, plan to stay in the home for several years, and the closing costs make financial sense.',
    category: 'Debt'
  }
];

export const faqCategories = ['All', 'Budgeting', 'Investing', 'Credit', 'Debt', 'Career'];
