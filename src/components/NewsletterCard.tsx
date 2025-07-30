import { Calendar, Tag } from 'lucide-react';
import { Newsletter } from '@/data/newsletters';

interface NewsletterCardProps {
  newsletter: Newsletter;
  onClick: (newsletter: Newsletter) => void;
}

export function NewsletterCard({ newsletter, onClick }: NewsletterCardProps) {
  return (
    <div 
      className="bg-card p-6 rounded-lg border hover:shadow-lg transition-shadow cursor-pointer"
      onClick={() => onClick(newsletter)}
    >
      <div className="flex items-center text-sm text-muted-foreground mb-2">
        <Calendar className="h-4 w-4 mr-2" />
        {new Date(newsletter.date).toLocaleDateString()}
      </div>
      
      <h3 className="text-xl font-semibold mb-3 text-foreground">
        {newsletter.title}
      </h3>
      
      <p className="text-muted-foreground mb-4">
        {newsletter.excerpt}
      </p>
      
      <div className="flex flex-wrap gap-2">
        {newsletter.topics.map((topic) => (
          <span 
            key={topic}
            className="inline-flex items-center text-xs bg-primary/10 text-primary px-2 py-1 rounded"
          >
            <Tag className="h-3 w-3 mr-1" />
            {topic}
          </span>
        ))}
      </div>
    </div>
  );
}
