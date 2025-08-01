import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQItem as FAQItemType } from '@/data/faq';

interface FAQItemProps {
  faq: FAQItemType;
}

export function FAQItem({ faq }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Budgeting':
        return 'bg-forest-green';
      case 'Investing':
        return 'bg-sage-green';
      case 'Credit & Debt':
        return 'bg-green-600';
      case 'Entrepreneurship':
        return 'bg-emerald-green';
      case 'Career & Income':
        return 'bg-teal-600';
      default:
        return 'bg-gray-600';
    }
  };

  return (
    <div className="bg-card border rounded-lg transition-all duration-200 hover:shadow-md">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/50 transition-colors duration-200"
      >
        <h3 className="text-lg font-semibold pr-4" style={{ color: '#6B5B47' }}>
          {faq.question}
        </h3>
        <div className="transition-transform duration-200" style={{
          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
        }}>
          <ChevronDown className="h-5 w-5 flex-shrink-0" style={{ color: '#6B5B47' }} />
        </div>
      </button>
      
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-6 pb-6">
          <div className="mb-3">
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium text-white ${getCategoryColor(faq.category)}`}>
              {faq.category}
            </span>
          </div>
          <p className="leading-relaxed" style={{ color: '#6B5B47' }}>
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  );
}
