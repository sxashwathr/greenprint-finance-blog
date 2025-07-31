import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
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
      <h3 className="font-semibold mb-4" style={{ color: '#6B5B47' }}>Guide Contents</h3>
      
      {sections.map((section) => (
        <div key={section.id} className="mb-2">
          <button
            onClick={() => {
              toggleSection(section.id);
              onSectionChange(section.id);
            }}
            className={`w-full text-left p-3 rounded flex items-center justify-between transition-all duration-300 ${
              activeSection === section.id 
                ? 'bg-orange-100 border border-orange-300 shadow-sm' 
                : 'hover:bg-muted'
            }`}
            style={{ color: activeSection === section.id ? '#D97706' : '#6B5B47' }}
          >
            <span className="font-medium">{section.title}</span>
            {section.subsections && (
              <div 
                className="transition-transform duration-300 ease-in-out" 
                style={{
                  transform: expandedSections.includes(section.id) ? 'rotate(90deg)' : 'rotate(0deg)'
                }}
              >
                <ChevronRight className="h-4 w-4" />
              </div>
            )}
          </button>
          
          <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
            expandedSections.includes(section.id) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            {section.subsections && (
              <div className="ml-4 mt-2 space-y-1">
                {section.subsections.map((subsection) => (
                  <button
                    key={subsection.id}
                    onClick={() => onSectionChange(subsection.id)}
                    className={`block w-full text-left p-2 text-sm rounded transition-all duration-300 ${
                      activeSection === subsection.id 
                        ? 'bg-orange-100 border border-orange-300 shadow-sm' 
                        : 'hover:bg-muted'
                    }`}
                    style={{ color: activeSection === subsection.id ? '#D97706' : '#6B5B47' }}
                  >
                    {subsection.title}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </nav>
  );
}
