import { useState } from 'react';
import { Shield, DollarSign, Calendar, Target } from 'lucide-react';

export function EmergencyFundCalculator() {
  const [monthlyExpenses, setMonthlyExpenses] = useState('');
  const [currentSavings, setCurrentSavings] = useState('');
  const [targetMonths, setTargetMonths] = useState('6');
  const [monthlySavings, setMonthlySavings] = useState('');
  const [result, setResult] = useState<{target: number, remaining: number, monthsToGoal: number} | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const handleNumberInput = (value: string, setter: (value: string) => void) => {
    const numbersOnly = value.replace(/[^0-9.]/g, '');
    setter(numbersOnly);
  };

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
    <div className="bg-white p-8 rounded-2xl border border-border shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="flex items-center mb-6">
        <div className="p-3 bg-blue-100 rounded-xl mr-4">
          <Shield className="h-6 w-6 text-blue-500" />
        </div>
        <div>
          <h3 className="text-xl font-bold" style={{ color: '#6B5B47' }}>Emergency Fund Calculator</h3>
          <p className="text-sm" style={{ color: '#6B5B47' }}>Build your financial safety net</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="space-y-2">
          <label className="flex items-center text-sm font-medium mb-2" style={{ color: '#6B5B47' }}>
            <DollarSign className="h-4 w-4 mr-2 text-blue-500" />
            Monthly Expenses
          </label>
          <div className="relative">
            <input
              type="text"
              value={monthlyExpenses}
              onChange={(e) => handleNumberInput(e.target.value, setMonthlyExpenses)}
              className="w-full px-4 py-3 pl-8 border border-border rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200"
              placeholder="3,000"
              style={{ color: '#6B5B47' }}
            />
            <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4" style={{ color: '#6B5B47' }} />
          </div>
        </div>
        
        <div className="space-y-2">
          <label className="flex items-center text-sm font-medium mb-2" style={{ color: '#6B5B47' }}>
            <Shield className="h-4 w-4 mr-2 text-blue-500" />
            Current Savings
          </label>
          <div className="relative">
            <input
              type="text"
              value={currentSavings}
              onChange={(e) => handleNumberInput(e.target.value, setCurrentSavings)}
              className="w-full px-4 py-3 pl-8 border border-border rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200"
              placeholder="1,000"
              style={{ color: '#6B5B47' }}
            />
            <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4" style={{ color: '#6B5B47' }} />
          </div>
        </div>
        
        <div className="space-y-2">
          <label className="flex items-center text-sm font-medium mb-2" style={{ color: '#6B5B47' }}>
            <Calendar className="h-4 w-4 mr-2 text-blue-500" />
            Target Months of Expenses
          </label>
          <select
            value={targetMonths}
            onChange={(e) => setTargetMonths(e.target.value)}
            className="w-full px-4 py-3 border border-border rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200"
            style={{ color: '#6B5B47' }}
          >
            <option value="3">3 months (Minimum)</option>
            <option value="6">6 months (Recommended)</option>
            <option value="9">9 months (Secure)</option>
            <option value="12">12 months (Very Secure)</option>
          </select>
        </div>
        
        <div className="space-y-2">
          <label className="flex items-center text-sm font-medium mb-2" style={{ color: '#6B5B47' }}>
            <Target className="h-4 w-4 mr-2 text-blue-500" />
            Monthly Savings Amount
          </label>
          <div className="relative">
            <input
              type="text"
              value={monthlySavings}
              onChange={(e) => handleNumberInput(e.target.value, setMonthlySavings)}
              className="w-full px-4 py-3 pl-8 border border-border rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200"
              placeholder="500"
              style={{ color: '#6B5B47' }}
            />
            <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4" style={{ color: '#6B5B47' }} />
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
        <div className="mt-6 p-6 bg-blue-50 rounded-xl border border-blue-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="text-center md:text-left">
              <p className="text-sm font-medium mb-1" style={{ color: '#6B5B47' }}>Target Emergency Fund</p>
              <p className="text-2xl font-bold" style={{ color: '#6B5B47' }}>
                ${result.target.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm font-medium mb-1" style={{ color: '#6B5B47' }}>Amount Still Needed</p>
              <p className="text-2xl font-bold text-blue-600">
                ${result.remaining.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </p>
            </div>
          </div>
          {result.monthsToGoal > 0 && (
            <div className="pt-4 border-t border-blue-200">
              <div className="flex justify-between items-center text-sm" style={{ color: '#6B5B47' }}>
                <span>Time to Goal</span>
                <span className="font-semibold text-blue-600">
                  {result.monthsToGoal} months
                </span>
              </div>
              <div className="mt-2 w-full bg-blue-100 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-500"
                  style={{ 
                    width: `${Math.min(100, ((parseFloat(currentSavings) || 0) / result.target) * 100)}%` 
                  }}
                ></div>
              </div>
              <div className="flex justify-between items-center text-xs mt-1" style={{ color: '#6B5B47' }}>
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
