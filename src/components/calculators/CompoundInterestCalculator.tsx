import { useState } from 'react';
import { TrendingUp, DollarSign, Calendar, Percent } from 'lucide-react';

export function CompoundInterestCalculator() {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [time, setTime] = useState('');
  const [compounding, setCompounding] = useState('12');
  const [result, setResult] = useState<number | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const handleNumberInput = (value: string, setter: (value: string) => void) => {
    const numbersOnly = value.replace(/[^0-9.]/g, '');
    setter(numbersOnly);
  };

  const calculate = async () => {
    setIsCalculating(true);
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
    <div className="bg-white p-8 rounded-2xl border border-border shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="flex items-center mb-6">
        <div className="p-3 bg-green-100 rounded-xl mr-4">
          <TrendingUp className="h-6 w-6 text-green-600" />
        </div>
        <div>
          <h3 className="text-xl font-bold" style={{ color: '#6B5B47' }}>Compound Interest Calculator</h3>
          <p className="text-sm" style={{ color: '#6B5B47' }}>See how your money grows over time</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="space-y-2">
          <label className="flex items-center text-sm font-medium mb-2" style={{ color: '#6B5B47' }}>
            <DollarSign className="h-4 w-4 mr-2 text-green-600" />
            Initial Amount
          </label>
          <div className="relative">
            <input
              type="text"
              value={principal}
              onChange={(e) => handleNumberInput(e.target.value, setPrincipal)}
              className="w-full px-4 py-3 pl-8 border border-border rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all duration-200"
              placeholder="10,000"
              style={{ color: '#6B5B47' }}
            />
            <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4" style={{ color: '#6B5B47' }} />
          </div>
        </div>
        
        <div className="space-y-2">
          <label className="flex items-center text-sm font-medium mb-2" style={{ color: '#6B5B47' }}>
            <Percent className="h-4 w-4 mr-2 text-green-600" />
            Annual Interest Rate
          </label>
          <div className="relative">
            <input
              type="text"
              value={rate}
              onChange={(e) => handleNumberInput(e.target.value, setRate)}
              className="w-full px-4 py-3 pr-8 border border-border rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all duration-200"
              placeholder="8.00"
              style={{ color: '#6B5B47' }}
            />
            <Percent className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4" style={{ color: '#6B5B47' }} />
          </div>
        </div>
        
        <div className="space-y-2">
          <label className="flex items-center text-sm font-medium mb-2" style={{ color: '#6B5B47' }}>
            <Calendar className="h-4 w-4 mr-2 text-green-600" />
            Time Period (years)
          </label>
          <input
            type="text"
            value={time}
            onChange={(e) => handleNumberInput(e.target.value, setTime)}
            className="w-full px-4 py-3 border border-border rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all duration-200"
            placeholder="10"
            style={{ color: '#6B5B47' }}
          />
        </div>
        
        <div className="space-y-2">
          <label className="block text-sm font-medium mb-2" style={{ color: '#6B5B47' }}>
            Compounding Frequency
          </label>
          <select
            value={compounding}
            onChange={(e) => setCompounding(e.target.value)}
            className="w-full px-4 py-3 border border-border rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all duration-200"
            style={{ color: '#6B5B47' }}
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
        className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 px-6 rounded-xl font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
      >
        {isCalculating ? (
          <>
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
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
        <div className="mt-6 p-6 bg-green-50 rounded-xl border border-green-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="text-center md:text-left">
              <p className="text-sm font-medium mb-1" style={{ color: '#6B5B47' }}>Future Value</p>
              <p className="text-2xl font-bold" style={{ color: '#6B5B47' }}>
                ${result.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm font-medium mb-1" style={{ color: '#6B5B47' }}>Total Interest Earned</p>
              <p className="text-2xl font-bold text-green-600">
                ${(result - parseFloat(principal)).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </p>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-green-200">
            <div className="flex justify-between items-center text-sm" style={{ color: '#6B5B47' }}>
              <span>Growth Multiple</span>
              <span className="font-semibold">{(result / parseFloat(principal)).toFixed(2)}x</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
