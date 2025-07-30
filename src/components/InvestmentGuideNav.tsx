import { useState } from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';
import { GuideSection } from '@/data/investmentGuide';

interface GuideNavProps {
  sections: GuideSection[];
  activeSection: string;
  onSectionChange: (sectionId: string) => void;
}

export function InvestmentGuideNav({ sections, activeSection, onSectionChange }: GuideNavProps) {
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  return (
    <nav className="bg-card p-4 rounded-lg border">
      <h3 className="font-semibold mb-4 text-foreground">Guide Contents</h3>
      
      {sections.map((section) => (
        <div key={section.id} className="mb-2">
          <button
            onClick={() => {
              toggleSection(section.id);
              onSectionChange(section.id);
            }}
            className={`w-full text-left p-2 rounded flex items-center justify-between hover:bg-muted transition-colors ${
              activeSection === section.id ? 'bg-primary/10 text-primary' : 'text-foreground'
            }`}
          >
            <span>{section.title}</span>
            {section.subsections && (
              expandedSections.includes(section.id) 
                ? <ChevronDown className="h-4 w-4" />
                : <ChevronRight className="h-4 w-4" />
            )}
          </button>
          
          {expandedSections.includes(section.id) && section.subsections && (
            <div className="ml-4 mt-2">
              {section.subsections.map((subsection) => (
                <button
                  key={subsection.id}
                  onClick={() => onSectionChange(subsection.id)}
                  className={`block w-full text-left p-2 text-sm rounded hover:bg-muted transition-colors ${
                    activeSection === subsection.id ? 'bg-primary/10 text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {subsection.title}
                </button>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  );
}
