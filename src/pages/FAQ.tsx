import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ThemeToggle } from '@/components/ThemeToggle';
import { FAQItem } from '@/components/FAQItem';
import { FAQSearch } from '@/components/FAQSearch';
import { faqData, faqCategories } from '@/data/faq';

export function FAQ() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredFAQs = faqData.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <ThemeToggle />
      <Header />
      
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold mb-8" style={{ color: '#6B5B47' }}>
              Frequently Asked Questions
            </h1>
            <p className="text-lg mb-8 leading-relaxed max-w-2xl mx-auto" style={{ color: '#6B5B47' }}>
              Find answers to common financial questions
            </p>
            
            <FAQSearch searchTerm={searchTerm} onSearchChange={setSearchTerm} />
            
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {faqCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    selectedCategory === category
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted hover:bg-muted/80'
                  }`}
                  style={{ color: selectedCategory === category ? 'white' : '#6B5B47' }}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {filteredFAQs.length > 0 ? (
              filteredFAQs.map((faq) => (
                <FAQItem key={faq.id} faq={faq} />
              ))
            ) : (
              <div className="text-center py-8">
                <p style={{ color: '#6B5B47' }}>No FAQs found matching your search.</p>
              </div>
            )}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
