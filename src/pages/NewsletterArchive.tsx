import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

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
      
      <Header />
      
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold mb-8" style={{ color: '#6B5B47' }}>
              Newsletter Archive
            </h1>
            <p className="text-lg mb-8 leading-relaxed max-w-2xl mx-auto" style={{ color: '#6B5B47' }}>
              Browse our past newsletters full of financial tips and insights
            </p>
            
            <div className="bg-card p-8 rounded-2xl border border-border/50">
              <p className="mb-4 font-medium text-lg" style={{ color: '#6B5B47' }}>
                Past newsletters will be posted soon on a regular basis thereafter. 
              </p>
              <p className="text-base" style={{ color: '#6B5B47' }}>
                In the meantime, explore our calculators, guides, and sign up for our newsletter to start your financial journey.
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
