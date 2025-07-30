import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FAQItem as FAQItemType } from '@/data/faq';

interface FAQItemProps {
  faq: FAQItemType;
}

export function FAQItem({ faq }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-card border rounded-lg">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
      >
        <h3 className="text-lg font-semibold text-foreground pr-4">
          {faq.question}
        </h3>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-muted-foreground flex-shrink-0" />
        ) : (
          <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0" />
        )}
      </button>
      
      {isOpen && (
        <div className="px-6 pb-6">
          <div className="text-sm bg-primary/10 text-primary px-2 py-1 rounded inline-block mb-3">
            {faq.category}
          </div>
          <p className="text-foreground leading-relaxed">
            {faq.answer}
          </p>
        </div>
      )}
    </div>
  );
}
