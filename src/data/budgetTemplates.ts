export interface BudgetTemplate {
  id: string;
  name: string;
  description: string;
  downloadUrl: string;
  type: 'pdf' | 'excel' | 'sheets';
  category: string;
}

export const budgetTemplates: BudgetTemplate[] = [
  {
    id: 'basic-budget',
    name: 'Basic Monthly Budget',
    description: 'Simple income and expense tracker for beginners',
    downloadUrl: '/templates/basic-budget.pdf',
    type: 'pdf',
    category: 'Beginner'
  },
  {
    id: 'zero-based-budget',
    name: 'Zero-Based Budget Template',
    description: 'Assign every dollar a purpose with this comprehensive template',
    downloadUrl: '/templates/zero-based-budget.xlsx',
    type: 'excel',
    category: 'Advanced'
  },
  {
    id: '50-30-20-budget',
    name: '50/30/20 Budget Rule',
    description: 'Simple percentage-based budgeting method',
    downloadUrl: 'https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/copy',
    type: 'sheets',
    category: 'Simple'
  },
  {
    id: 'debt-snowball',
    name: 'Debt Snowball Tracker',
    description: 'Track your debt payoff progress using the snowball method',
    downloadUrl: '/templates/debt-snowball.xlsx',
    type: 'excel',
    category: 'Debt Management'
  },
  {
    id: 'investment-tracker',
    name: 'Investment Portfolio Tracker',
    description: 'Monitor your investment portfolio performance',
    downloadUrl: '/templates/investment-tracker.xlsx',
    type: 'excel',
    category: 'Investing'
  }
];
