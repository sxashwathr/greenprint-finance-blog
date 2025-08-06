import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

import { TrendingUp, CreditCard, Shield, Home } from 'lucide-react';
import { CompoundInterestCalculator } from '@/components/calculators/CompoundInterestCalculator';
import { DebtPayoffCalculator } from '@/components/calculators/DebtPayoffCalculator';
import { EmergencyFundCalculator } from '@/components/calculators/EmergencyFundCalculator';
import { LoanCalculator } from '@/components/calculators/LoanCalculator';

const calculatorTypes = [
  { id: 'compound', name: 'Compound Interest', icon: TrendingUp, color: '#059669' },
  { id: 'debt', name: 'Debt Payoff', icon: CreditCard, color: '#DC2626' },
  { id: 'emergency', name: 'Emergency Fund', icon: Shield, color: '#2563EB' },
  { id: 'loan', name: 'Loan Calculator', icon: Home, color: '#16A34A' }
];

export function FinancialCalculators() {
  const [activeCalculator, setActiveCalculator] = useState('compound');

  const renderCalculator = () => {
    switch (activeCalculator) {
      case 'compound':
        return <CompoundInterestCalculator />;
      case 'debt':
        return <DebtPayoffCalculator />;
      case 'emergency':
        return <EmergencyFundCalculator />;
      case 'loan':
        return <LoanCalculator />;
      default:
        return <CompoundInterestCalculator />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      
      <Header />
      
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center" style={{ color: '#6B5B47' }}>
              Financial Calculators
            </h1>
            <p className="text-lg mb-8 leading-relaxed max-w-2xl mx-auto text-center" style={{ color: '#6B5B47' }}>
              Use these tools to make informed financial decisions and plan your future
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              <div className="lg:col-span-1">
                <nav className="bg-card p-4 rounded-lg border">
                  <h3 className="font-semibold mb-4" style={{ color: '#6B5B47' }}>Calculator Types</h3>
                  
                  {calculatorTypes.map((calc) => {
                    const IconComponent = calc.icon;
                    return (
                      <button
                        key={calc.id}
                        onClick={() => setActiveCalculator(calc.id)}
                        className={`w-full text-left p-3 rounded flex items-center space-x-3 mb-2 transition-all duration-300 ${
                          activeCalculator === calc.id 
                            ? 'bg-orange-100 border border-orange-300 shadow-sm' 
                            : 'hover:bg-muted'
                        }`}
                        style={{ color: activeCalculator === calc.id ? '#D97706' : '#6B5B47' }}
                      >
                        <IconComponent 
                          className="h-5 w-5 transition-colors duration-300" 
                          style={{ color: activeCalculator === calc.id ? calc.color : '#6B5B47' }}
                        />
                        <span className="font-medium">{calc.name}</span>
                      </button>
                    );
                  })}
                </nav>
              </div>
              
              <div className="lg:col-span-3">
                <div className="transition-opacity duration-300 ease-in-out">
                  {renderCalculator()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
