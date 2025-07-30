import { useState } from 'react';
import { Shield, DollarSign, Calendar, Target } from 'lucide-react';

export function EmergencyFundCalculator() {
  const [monthlyExpenses, setMonthlyExpenses] = useState('');
  const [currentSavings, setCurrentSavings] = useState('');
  const [targetMonths, setTargetMonths] = useState('6');
  const [monthlySavings, setMonthlySavings] = useState('');
  const [result, setResult] = useState<{target: number, remaining: number, monthsToGoal: number} | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const calculate = async () => {
    setIsCalculating(true);
    await new Promise(resolve => setTimeout(resolve, 300));
    
    const expenses = parseFloat(monthlyExpenses);
    const current = parseFloat(currentSavings) || 0;
    const months = parseFloat(targetMonths);
    const savings = parseFloat(monthlySavings) || 0;
    
    const targetAmount = expenses * months;
    const remaining = Math.max(0, targetAmount - current);
    const monthsToGoal = savings > 0 ? Math.ceil(remaining / savings) : 0;
    
    setResult({
      target: targetAmount,
      remaining: remaining,
      monthsToGoal: monthsToGoal
    });
    setIsCalculating(false);
  };

  const isValid = monthlyExpenses && parseFloat(monthlyExpenses) > 0;

  return (
    <div className="bg-gradient-to-br from-card to-card/80 p-8 rounded-2xl border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="flex items-center mb-6">
        <div className="p-3 bg-blue-500/10 rounded-xl mr-4">
          <Shield className="h-6 w-6 text-blue-500" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-foreground">Emergency Fund Calculator</h3>
          <p className="text-sm text-muted-foreground">Build your financial safety net</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="space-y-2">
          <label className="flex items-center text-sm font-medium text-foreground mb-2">
            <DollarSign className="h-4 w-4 mr-2 text-blue-500" />
            Monthly Expenses
          </label>
          <div className="relative">
            <input
              type="number"
              value={monthlyExpenses}
              onChange={(e) => setMonthlyExpenses(e.target.value)}
              className="w-full px-4 py-3 pl-8 border border-border rounded-xl bg-background/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200"
              placeholder="3,000"
            />
            <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          </div>
        </div>
        
        <div className="space-y-2">
          <label className="flex items-center text-sm font-medium text-foreground mb-2">
            <Shield className="h-4 w-4 mr-2 text-blue-500" />
            Current Savings
          </label>
          <div className="relative">
            <input
              type="number"
              value={currentSavings}
              onChange={(e) => setCurrentSavings(e.target.value)}
              className="w-full px-4 py-3 pl-8 border border-border rounded-xl bg-background/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200"
              placeholder="1,000"
            />
            <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          </div>
        </div>
        
        <div className="space-y-2">
          <label className="flex items-center text-sm font-medium text-foreground mb-2">
            <Calendar className="h-4 w-4 mr-2 text-blue-500" />
            Target Months of Expenses
          </label>
          <select
            value={targetMonths}
            onChange={(e) => setTargetMonths(e.target.value)}
            className="w-full px-4 py-3 border border-border rounded-xl bg-background/50 text-foreground focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200"
          >
            <option value="3">3 months (Minimum)</option>
            <option value="6">6 months (Recommended)</option>
            <option value="9">9 months (Secure)</option>
            <option value="12">12 months (Very Secure)</option>
          </select>
        </div>
        
        <div className="space-y-2">
          <label className="flex items-center text-sm font-medium text-foreground mb-2">
            <Target className="h-4 w-4 mr-2 text-blue-500" />
            Monthly Savings Amount
          </label>
          <div className="relative">
            <input
              type="number"
              value={monthlySavings}
              onChange={(e) => setMonthlySavings(e.target.value)}
              className="w-full px-4 py-3 pl-8 border border-border rounded-xl bg-background/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200"
              placeholder="500"
            />
            <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          </div>
        </div>
      </div>
      
      <button
        onClick={calculate}
        disabled={!isValid || isCalculating}
        className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-4 px-6 rounded-xl font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
      >
        {isCalculating ? (
          <>
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
            <span>Calculating...</span>
          </>
        ) : (
          <>
            <Shield className="h-4 w-4" />
            <span>Calculate Emergency Fund</span>
          </>
        )}
      </button>
      
      {result && (
        <div className="mt-6 p-6 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl border border-blue-200 dark:border-blue-800 animate-in fade-in-50 duration-500">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="text-center md:text-left">
              <p className="text-sm font-medium text-muted-foreground mb-1">Target Emergency Fund</p>
              <p className="text-2xl font-bold text-foreground">
                ${result.target.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm font-medium text-muted-foreground mb-1">Amount Still Needed</p>
              <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                ${result.remaining.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </p>
            </div>
          </div>
          {result.monthsToGoal > 0 && (
            <div className="pt-4 border-t border-blue-200 dark:border-blue-800">
              <div className="flex justify-between items-center text-sm text-muted-foreground">
                <span>Time to Goal</span>
                <span className="font-semibold text-blue-600 dark:text-blue-400">
                  {result.monthsToGoal} months
                </span>
              </div>
              <div className="mt-2 w-full bg-blue-100 dark:bg-blue-900/30 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-500"
                  style={{ 
                    width: `${Math.min(100, ((parseFloat(currentSavings) || 0) / result.target) * 100)}%` 
                  }}
                ></div>
              </div>
              <div className="flex justify-between items-center text-xs text-muted-foreground mt-1">
                <span>Progress</span>
                <span>{Math.min(100, Math.round(((parseFloat(currentSavings) || 0) / result.target) * 100))}%</span>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
