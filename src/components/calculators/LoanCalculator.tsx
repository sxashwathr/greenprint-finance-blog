import { useState } from 'react';
import { Home, Percent, Calendar, Calculator } from 'lucide-react';

export function LoanCalculator() {
  const [loanAmount, setLoanAmount] = useState('');
  const [rate, setRate] = useState('');
  const [term, setTerm] = useState('');
  const [result, setResult] = useState<{monthlyPayment: number, totalInterest: number, totalPayment: number} | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const calculate = async () => {
    setIsCalculating(true);
    await new Promise(resolve => setTimeout(resolve, 300));
    
    const principal = parseFloat(loanAmount);
    const monthlyRate = parseFloat(rate) / 100 / 12;
    const numberOfPayments = parseFloat(term) * 12;
    
    if (monthlyRate === 0) {
      const monthlyPayment = principal / numberOfPayments;
      setResult({
        monthlyPayment: monthlyPayment,
        totalInterest: 0,
        totalPayment: principal
      });
      setIsCalculating(false);
      return;
    }
    
    const monthlyPayment = principal * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
                          (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    
    const totalPayment = monthlyPayment * numberOfPayments;
    const totalInterest = totalPayment - principal;
    
    setResult({
      monthlyPayment: monthlyPayment,
      totalInterest: totalInterest,
      totalPayment: totalPayment
    });
    setIsCalculating(false);
  };

  const isValid = loanAmount && rate && term && 
    parseFloat(loanAmount) > 0 && 
    parseFloat(rate) >= 0 && 
    parseFloat(term) > 0;

  return (
    <div className="bg-gradient-to-br from-card to-card/80 p-8 rounded-2xl border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="flex items-center mb-6">
        <div className="p-3 bg-green-500/10 rounded-xl mr-4">
          <Home className="h-6 w-6 text-green-500" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-foreground">Loan Calculator</h3>
          <p className="text-sm text-muted-foreground">Calculate your loan payments</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="space-y-2">
          <label className="flex items-center text-sm font-medium text-foreground mb-2">
            <Home className="h-4 w-4 mr-2 text-green-500" />
            Loan Amount
          </label>
          <div className="relative">
            <input
              type="number"
              value={loanAmount}
              onChange={(e) => setLoanAmount(e.target.value)}
              className="w-full px-4 py-3 pl-8 border border-border rounded-xl bg-background/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all duration-200"
              placeholder="200,000"
            />
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">$</span>
          </div>
        </div>
        
        <div className="space-y-2">
          <label className="flex items-center text-sm font-medium text-foreground mb-2">
            <Percent className="h-4 w-4 mr-2 text-green-500" />
            Annual Interest Rate
          </label>
          <div className="relative">
            <input
              type="number"
              step="0.01"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              className="w-full px-4 py-3 pr-8 border border-border rounded-xl bg-background/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all duration-200"
              placeholder="6.50"
            />
            <Percent className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          </div>
        </div>
        
        <div className="md:col-span-2 space-y-2">
          <label className="flex items-center text-sm font-medium text-foreground mb-2">
            <Calendar className="h-4 w-4 mr-2 text-green-500" />
            Loan Term
          </label>
          <select
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="w-full px-4 py-3 border border-border rounded-xl bg-background/50 text-foreground focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all duration-200"
          >
            <option value="">Select loan term</option>
            <option value="15">15 years</option>
            <option value="20">20 years</option>
            <option value="25">25 years</option>
            <option value="30">30 years</option>
          </select>
        </div>
      </div>
      
      <button
        onClick={calculate}
        disabled={!isValid || isCalculating}
        className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 px-6 rounded-xl font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
      >
        {isCalculating ? (
          <>
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
            <span>Calculating...</span>
          </>
        ) : (
          <>
            <Calculator className="h-4 w-4" />
            <span>Calculate Loan Payment</span>
          </>
        )}
      </button>
      
      {result && (
        <div className="mt-6 p-6 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl border border-green-200 dark:border-green-800 animate-in fade-in-50 duration-500">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <p className="text-sm font-medium text-muted-foreground mb-1">Monthly Payment</p>
              <p className="text-2xl font-bold text-foreground">
                ${result.monthlyPayment.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </p>
            </div>
            <div className="text-center">
              <p className="text-sm font-medium text-muted-foreground mb-1">Total Payment</p>
              <p className="text-lg font-semibold text-green-600 dark:text-green-400">
                ${result.totalPayment.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </p>
            </div>
            <div className="text-center">
              <p className="text-sm font-medium text-muted-foreground mb-1">Total Interest</p>
              <p className="text-lg font-semibold text-orange-600 dark:text-orange-400">
                ${result.totalInterest.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </p>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-green-200 dark:border-green-800">
            <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
              <div className="flex justify-between">
                <span>Principal</span>
                <span className="font-semibold">{((parseFloat(loanAmount) / result.totalPayment) * 100).toFixed(1)}%</span>
              </div>
              <div className="flex justify-between">
                <span>Interest</span>
                <span className="font-semibold">{((result.totalInterest / result.totalPayment) * 100).toFixed(1)}%</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
