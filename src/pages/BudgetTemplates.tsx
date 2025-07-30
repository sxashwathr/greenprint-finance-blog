import { Download, FileText, Grid3X3 } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ThemeToggle } from '@/components/ThemeToggle';
import { budgetTemplates, BudgetTemplate } from '@/data/budgetTemplates';

export function BudgetTemplates() {
  const handleDownload = (template: BudgetTemplate) => {
    if (template.type === 'sheets') {
      window.open(template.downloadUrl, '_blank');
    } else {
      const link = document.createElement('a');
      link.href = template.downloadUrl;
      link.download = `${template.name}.${template.type}`;
      link.click();
    }
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'pdf': return <FileText className="h-6 w-6" />;
      case 'excel': return <Grid3X3 className="h-6 w-6" />;
      case 'sheets': return <Grid3X3 className="h-6 w-6" />;
      default: return <FileText className="h-6 w-6" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <ThemeToggle />
      <Header />
      
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
              Budget Templates
            </h1>
            <p className="text-lg text-foreground mb-8">
              Free, downloadable budget templates to help you manage your finances
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {budgetTemplates.map((template) => (
              <div key={template.id} className="bg-card p-6 rounded-lg border hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  {getIcon(template.type)}
                  <span className="ml-2 text-sm bg-primary/10 text-primary px-2 py-1 rounded">
                    {template.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  {template.name}
                </h3>
                
                <p className="text-muted-foreground mb-4">
                  {template.description}
                </p>
                
                <button
                  onClick={() => handleDownload(template)}
                  className="w-full bg-primary text-primary-foreground py-2 px-4 rounded-md hover:bg-primary/90 transition-colors flex items-center justify-center"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download {template.type.toUpperCase()}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
