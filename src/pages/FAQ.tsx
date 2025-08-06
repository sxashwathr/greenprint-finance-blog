import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

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

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'All':
        return 'bg-orange-500 text-white';
      case 'Budgeting':
        return 'bg-forest-green text-white';
      case 'Investing':
        return 'bg-sage-green text-white';
      case 'Credit & Debt':
        return 'bg-green-600 text-white';
      case 'Entrepreneurship':
        return 'bg-emerald-green text-white';
      case 'Career & Income':
        return 'bg-teal-600 text-white';
      default:
        return 'bg-gray-600 text-white';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      
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
                  className={`px-4 py-2 rounded-lg transition-colors font-medium ${
                    selectedCategory === category
                      ? getCategoryColor(category)
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
