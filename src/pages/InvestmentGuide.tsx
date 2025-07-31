import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ThemeToggle } from '@/components/ThemeToggle';
import { InvestmentGuideNav } from '@/components/InvestmentGuideNav';
import { investmentGuideData } from '@/data/investmentGuide';

export function InvestmentGuide() {
  const [activeSection, setActiveSection] = useState(investmentGuideData[0].id);

  const getActiveContent = () => {
    for (const section of investmentGuideData) {
      if (section.id === activeSection) {
        return { title: section.title, content: section.content };
      }
      if (section.subsections) {
        for (const subsection of section.subsections) {
          if (subsection.id === activeSection) {
            return { title: subsection.title, content: subsection.content };
          }
        }
      }
    }
    return { title: '', content: '' };
  };

  const activeContent = getActiveContent();

  return (
    <div className="min-h-screen bg-background">
      <ThemeToggle />
      <Header />
      
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center" style={{ color: '#6B5B47' }}>
              Complete Investment Guide
            </h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              <div className="lg:col-span-1">
                <InvestmentGuideNav
                  sections={investmentGuideData}
                  activeSection={activeSection}
                  onSectionChange={setActiveSection}
                />
              </div>
              
              <div className="lg:col-span-3">
                <div className="bg-card p-8 rounded-lg border transition-opacity duration-300 ease-in-out">
                  <h2 className="text-2xl font-bold mb-6" style={{ color: '#6B5B47' }}>
                    {activeContent.title}
                  </h2>
                  <div className="prose prose-lg max-w-none whitespace-pre-line" style={{ color: '#6B5B47' }}>
                    {activeContent.content}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
