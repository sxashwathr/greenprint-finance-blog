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
              Newsletter Archive
            </h1>
            <p className="text-lg text-foreground mb-8">
              Browse our past newsletters full of financial tips and insights
            </p>
            
            {/* Topic Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {allTopics.map((topic) => (
                <button
                  key={topic}
                  onClick={() => setSelectedTopic(topic)}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    selectedTopic === topic
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  }`}
                >
                  {topic}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNewsletters.map((newsletter) => (
              <NewsletterCard
                key={newsletter.id}
                newsletter={newsletter}
                onClick={setSelectedNewsletter}
              />
            ))}
          </div>
        </div>
      </section>
      
      <NewsletterModal
        newsletter={selectedNewsletter}
        onClose={() => setSelectedNewsletter(null)}
      />
      
      <Footer />
    </div>
  );
}
