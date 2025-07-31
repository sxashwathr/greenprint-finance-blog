import { X } from 'lucide-react';
import { Newsletter } from '@/data/newsletters';

interface NewsletterModalProps {
  newsletter: Newsletter | null;
  onClose: () => void;
}

export function NewsletterModal({ newsletter, onClose }: NewsletterModalProps) {
  if (!newsletter) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-card rounded-lg max-w-4xl max-h-[90vh] overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-bold" style={{ color: '#6B5B47' }}>
            {newsletter.title}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-lg transition-colors"
          >
            <X className="h-5 w-5" style={{ color: '#6B5B47' }} />
          </button>
        </div>
        
        <div className="p-6 overflow-y-auto max-h-[70vh]">
          <div className="text-sm mb-4" style={{ color: '#A0917A' }}>
            {new Date(newsletter.date).toLocaleDateString()}
          </div>
          
          <div className="prose prose-lg max-w-none whitespace-pre-line" style={{ color: '#6B5B47' }}>
            {newsletter.content}
          </div>
        </div>
      </div>
    </div>
  );
}
