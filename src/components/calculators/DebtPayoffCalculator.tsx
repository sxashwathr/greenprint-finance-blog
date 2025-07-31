import { useState } from 'react';
import { CreditCard, Percent, Calendar, Target } from 'lucide-react';

export function DebtPayoffCalculator() {
  const [balance, setBalance] = useState('');
  const [rate, setRate] = useState('');
  const [payment, setPayment] = useState('');
  const [result, setResult] = useState<{months: number, totalInterest: number} | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const handleNumberInput = (value: string, setter: (value: string) => void) => {
    const numbersOnly = value.replace(/[^0-9.]/g, '');
    setter(numbersOnly);
  };

  const calculate = async () => {
    setIsCalculating(true);
    await new Promise(resolve => setTimeout(resolve, 300));
    
    const b = parseFloat(balance);
    const r = parseFloat(rate) / 100 / 12;
    const p = parseFloat(payment);
    
    if (r === 0) {
      const months = b / p;
      setResult({ months: Math.ceil(months), totalInterest: 0 });
      setIsCalculating(false);
      return;
    }
    
    const months = -Math.log(1 - (b * r) / p) / Math.log(1 + r);
    const totalInterest = (p * months) - b;
    
    setResult({ 
      months: Math.ceil(months), 
      totalInterest: Math.max(0, totalInterest)
    });
    setIsCalculating(false);
  };

  const isValid = balance && rate && payment && 
    parseFloat(balance) > 0 && 
    parseFloat(rate) >= 0 && 
    parseFloat(payment) > 0 &&
    parseFloat(payment) > (parseFloat(balance) * parseFloat(rate) / 100 / 12);

  return (
    <div className="bg-white p-8 rounded-2xl border border-border shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="flex items-center mb-6">
        <div className="p-3 bg-red-100 rounded-xl mr-4">
          <CreditCard className="h-6 w-6 text-red-500" />
        </div>
        <div>
          <h3 className="text-xl font-bold" style={{ color: '#6B5B47' }}>Debt Payoff Calculator</h3>
          <p className="text-sm" style={{ color: '#6B5B47' }}>Plan your path to debt freedom</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 gap-6 mb-6">
        <div className="space-y-2">
          <label className="flex items-center text-sm font-medium mb-2" style={{ color: '#6B5B47' }}>
            <CreditCard className="h-4 w-4 mr-2 text-red-500" />
            Current Balance
          </label>
          <div className="relative">
            <input
              type="text"
              value={balance}
              onChange={(e) => handleNumberInput(e.target.value, setBalance)}
              className="w-full px-4 py-3 pl-8 border border-border rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all duration-200"
              placeholder="5,000"
              style={{ color: '#6B5B47' }}
            />
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2" style={{ color: '#6B5B47' }}>$</span>
          </div>
        </div>
        
        <div className="space-y-2">
          <label className="flex items-center text-sm font-medium mb-2" style={{ color: '#6B5B47' }}>
            <Percent className="h-4 w-4 mr-2 text-red-500" />
            Annual Interest Rate
          </label>
          <div className="relative">
            <input
              type="text"
              value={rate}
              onChange={(e) => handleNumberInput(e.target.value, setRate)}
              className="w-full px-4 py-3 pr-8 border border-border rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all duration-200"
              placeholder="18.00"
              style={{ color: '#6B5B47' }}
            />
            <Percent className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4" style={{ color: '#6B5B47' }} />
          </div>
        </div>
        
        <div className="space-y-2">
          <label className="flex items-center text-sm font-medium mb-2" style={{ color: '#6B5B47' }}>
            <Target className="h-4 w-4 mr-2 text-red-500" />
            Monthly Payment
          </label>
          <div className="relative">
            <input
              type="text"
              value={payment}
              onChange={(e) => handleNumberInput(e.target.value, setPayment)}
              className="w-full px-4 py-3 pl-8 border border-border rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all duration-200"
              placeholder="200"
              style={{ color: '#6B5B47' }}
            />
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2" style={{ color: '#6B5B47' }}>$</span>
          </div>
        </div>
      </div>
      
      <button
        onClick={calculate}
        disabled={!isValid || isCalculating}
        className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-4 px-6 rounded-xl font-semibold hover:from-red-600 hover:to-red-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
      >
        {isCalculating ? (
          <>
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
            <span>Calculating...</span>
          </>
        ) : (
          <>
            <Calendar className="h-4 w-4" />
            <span>Calculate Payoff Time</span>
          </>
        )}
      </button>
      
      {result && (
        <div className="mt-6 p-6 bg-green-50 rounded-xl border border-green-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="text-center md:text-left">
              <p className="text-sm font-medium mb-1" style={{ color: '#6B5B47' }}>Payoff Time</p>
              <p className="text-2xl font-bold" style={{ color: '#6B5B47' }}>
                {result.months} months
              </p>
              <p className="text-sm" style={{ color: '#6B5B47' }}>
                ({Math.floor(result.months / 12)} years, {result.months % 12} months)
              </p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm font-medium mb-1" style={{ color: '#6B5B47' }}>Total Interest</p>
              <p className="text-2xl font-bold text-red-600">
                ${result.totalInterest.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </p>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-green-200">
            <div className="flex justify-between items-center text-sm" style={{ color: '#6B5B47' }}>
              <span>Debt-Free Date</span>
              <span className="font-semibold text-green-600">
                {new Date(Date.now() + result.months * 30 * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', { 
                  month: 'long', 
                  year: 'numeric' 
                })}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
