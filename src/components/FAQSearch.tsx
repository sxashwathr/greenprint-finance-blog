import { Search } from 'lucide-react';

interface FAQSearchProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

export function FAQSearch({ searchTerm, onSearchChange }: FAQSearchProps) {
  return (
    <div className="relative max-w-md mx-auto mb-8">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5" style={{ color: '#D97706' }} />
      <input
        type="text"
        placeholder="Search frequently asked questions..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full pl-10 pr-4 py-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
        style={{ 
          color: '#6B5B47',
          '::placeholder': { color: '#6B5B47' }
        }}
      />
      <style jsx>{`
        input::placeholder {
          color: #6B5B47;
        }
      `}</style>
    </div>
  );
}
