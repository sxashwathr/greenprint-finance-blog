import { useState } from 'react';
import { TrendingUp, DollarSign, Calendar, Percent } from 'lucide-react';

export function CompoundInterestCalculator() {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [time, setTime] = useState('');
  const [compounding, setCompounding] = useState('12');
  const [result, setResult] = useState<number | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const calculate = async () => {
    setIsCalculating(true);
    
    // Add a small delay for smooth UX
    await new Promise(resolve => setTimeout(resolve, 300));
    
    const p = parseFloat(principal);
    const r = parseFloat(rate) / 100;
    const t = parseFloat(time);
    const n = parseFloat(compounding);
    
    const amount = p * Math.pow((1 + r/n), (n * t));
    setResult(amount);
    setIsCalculating(false);
  };

  const isValid = principal && rate && time && parseFloat(principal) > 0 && parseFloat(rate) >= 0 && parseFloat(time) > 0;

  return (
    <div className="bg-gradient-to-br from-card to-card/80 p-8 rounded-2xl border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="flex items-center mb-6">
        <div className="p-3 bg-primary/10 rounded-xl mr-4">
          <TrendingUp className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-foreground">Compound Interest Calculator</h3>
          <p className="text-sm text-muted-foreground">See how your money grows over time</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="space-y-2">
          <label className="flex items-center text-sm font-medium text-foreground mb-2">
            <DollarSign className="h-4 w-4 mr-2 text-primary" />
            Initial Amount
          </label>
          <div className="relative">
            <input
              type="number"
              value={principal}
              onChange={(e) => setPrincipal(e.target.value)}
              className="w-full px-4 py-3 pl-8 border border-border rounded-xl bg-background/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
              placeholder="10,000"
            />
            <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          </div>
        </div>
        
        <div className="space-y-2">
          <label className="flex items-center text-sm font-medium text-foreground mb-2">
            <Percent className="h-4 w-4 mr-2 text-primary" />
            Annual Interest Rate
          </label>
          <div className="relative">
            <input
              type="number"
              step="0.01"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              className="w-full px-4 py-3 pr-8 border border-border rounded-xl bg-background/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
              placeholder="8.00"
            />
            <Percent className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          </div>
        </div>
        
        <div className="space-y-2">
          <label className="flex items-center text-sm font-medium text-foreground mb-2">
            <Calendar className="h-4 w-4 mr-2 text-primary" />
            Time Period (years)
          </label>
          <input
            type="number"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full px-4 py-3 border border-border rounded-xl bg-background/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
            placeholder="10"
          />
        </div>
        
        <div className="space-y-2">
          <label className="block text-sm font-medium text-foreground mb-2">
            Compounding Frequency
          </label>
          <select
            value={compounding}
            onChange={(e) => setCompounding(e.target.value)}
            className="w-full px-4 py-3 border border-border rounded-xl bg-background/50 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
          >
            <option value="1">Annually</option>
            <option value="4">Quarterly</option>
            <option value="12">Monthly</option>
            <option value="365">Daily</option>
          </select>
        </div>
      </div>
      
      <button
        onClick={calculate}
        disabled={!isValid || isCalculating}
        className="w-full bg-gradient-to-r from-primary to-primary/90 text-primary-foreground py-4 px-6 rounded-xl font-semibold hover:from-primary/90 hover:to-primary transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
      >
        {isCalculating ? (
          <>
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary-foreground"></div>
            <span>Calculating...</span>
          </>
        ) : (
          <>
            <TrendingUp className="h-4 w-4" />
            <span>Calculate Growth</span>
          </>
        )}
      </button>
      
      {result && (
        <div className="mt-6 p-6 bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl border border-primary/20 animate-in fade-in-50 duration-500">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="text-center md:text-left">
              <p className="text-sm font-medium text-muted-foreground mb-1">Future Value</p>
              <p className="text-2xl font-bold text-foreground">
                ${result.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm font-medium text-muted-foreground mb-1">Total Interest Earned</p>
              <p className="text-2xl font-bold text-primary">
                ${(result - parseFloat(principal)).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </p>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-primary/20">
            <div className="flex justify-between items-center text-sm text-muted-foreground">
              <span>Growth Multiple</span>
              <span className="font-semibold">{(result / parseFloat(principal)).toFixed(2)}x</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
