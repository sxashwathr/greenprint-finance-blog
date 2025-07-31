import { Download, FileText, Grid3X3 } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ThemeToggle } from '@/components/ThemeToggle';
import { budgetTemplates, BudgetTemplate } from '@/data/budgetTemplates';

function BudgetTemplateTile({ template }: { template: BudgetTemplate }) {
  const handleDownload = () => {
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
      case 'pdf': return <FileText className="h-5 w-5" />;
      case 'excel': return <Grid3X3 className="h-5 w-5" />;
      case 'sheets': return <Grid3X3 className="h-5 w-5" />;
      default: return <FileText className="h-5 w-5" />;
    }
  };

  const getTopics = (category: string) => {
    switch (category.toLowerCase()) {
      case 'beginner':
      case 'simple':
      case 'advanced':
        return ['Budgeting'];
      case 'debt management':
        return ['Debt Management'];
      case 'investing':
        return ['Budgeting', 'Investing'];
      default:
        return ['Budgeting'];
    }
  };

  const getTopicColor = (topic: string) => {
    switch (topic.toLowerCase()) {
      case 'budgeting':
        return 'bg-forest-green';
      case 'debt management':
        return 'bg-red-600';
      case 'investing':
        return 'bg-sage-green';
      default:
        return 'bg-forest-green';
    }
  };

  const topics = getTopics(template.category);

  return (
    <div className="bg-background rounded-2xl border-2 border-orange-200 p-6 hover:shadow-lg transition-all duration-300 hover:border-orange-300 relative h-[420px] flex flex-col">
      <div className="absolute top-4 right-4">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-muted border" style={{ color: '#6B5B47' }}>
          {getIcon(template.type)}
          <span className="ml-1.5">{template.category}</span>
        </span>
      </div>

      <div className="mb-4 flex gap-2">
        {topics.map((topic, index) => (
          <span 
            key={index}
            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium text-white ${getTopicColor(topic)}`}
          >
            {topic}
          </span>
        ))}
      </div>

      <h3 className="text-xl font-bold mb-3 leading-tight pr-16" style={{ color: '#6B5B47' }}>
        {template.name}
      </h3>

      <p className="mb-6 leading-relaxed flex-grow" style={{ color: '#6B5B47' }}>
        {template.description}
      </p>

      <div className="mt-auto">
        <button
          onClick={handleDownload}
          className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 flex items-center justify-center space-x-2 shadow-sm"
        >
          <Download className="h-4 w-4" />
          <span>Download {template.type.toUpperCase()}</span>
        </button>
      </div>
    </div>
  );
}

export function BudgetTemplates() {
  return (
    <div className="min-h-screen bg-background">
      <ThemeToggle />
      <Header />
      
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold mb-8" style={{ color: '#6B5B47' }}>
              Budget Templates
            </h1>
            <p className="text-lg mb-8 leading-relaxed max-w-2xl mx-auto" style={{ color: '#6B5B47' }}>
              Free, downloadable budget templates to help you manage your finances and achieve your goals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {budgetTemplates.map((template) => (
              <BudgetTemplateTile key={template.id} template={template} />
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
