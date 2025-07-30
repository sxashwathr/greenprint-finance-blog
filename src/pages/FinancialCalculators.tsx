import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ThemeToggle } from '@/components/ThemeToggle';
import { CompoundInterestCalculator } from '@/components/calculators/CompoundInterestCalculator';
import { DebtPayoffCalculator } from '@/components/calculators/DebtPayoffCalculator';
import { EmergencyFundCalculator } from '@/components/calculators/EmergencyFundCalculator';
import { LoanCalculator } from '@/components/calculators/LoanCalculator';

export function FinancialCalculators() {
  return (
    <div className="min-h-screen bg-background">
      <ThemeToggle />
      <Header />
      
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
              Financial Calculators
            </h1>
            <p className="text-lg text-foreground mb-8">
              Use these tools to make informed financial decisions and plan your future
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <CompoundInterestCalculator />
            <DebtPayoffCalculator />
            <EmergencyFundCalculator />
            <LoanCalculator />
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
