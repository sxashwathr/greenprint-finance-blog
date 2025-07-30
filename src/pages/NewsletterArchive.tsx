import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ThemeToggle } from '@/components/ThemeToggle';
import { NewsletterCard } from '@/components/NewsletterCard';
import { NewsletterModal } from '@/components/NewsletterModal';
import { newsletters, Newsletter } from '@/data/newsletters';

export function NewsletterArchive() {
  const [selectedNewsletter, setSelectedNewsletter] = useState<Newsletter | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<string>('All');

  const allTopics = ['All'];
  
  const filteredNewsletters = newsletters || [];

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
            
            <div className="bg-card p-8 rounded-2xl border border-border/50">
              <p className="text-muted-foreground mb-4">
                No newsletters available yet. Check back soon for valuable financial insights!
              </p>
              <p className="text-sm text-muted-foreground">
                In the meantime, explore our calculators and investment guide to start your financial journey.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {selectedNewsletter && (
        <NewsletterModal
          newsletter={selectedNewsletter}
          onClose={() => setSelectedNewsletter(null)}
        />
      )}
      
      <Footer />
    </div>
  );
}
