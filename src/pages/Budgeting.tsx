
import { Header } from "@/components/Header";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Footer } from "@/components/Footer";
import { Calculator, PiggyBank, Target } from "lucide-react";

const Budgeting = () => {
  return (
    <div className="min-h-screen bg-background">
      <ThemeToggle />
      <Header />
      
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-gold-500 rounded-xl flex items-center justify-center">
                <Calculator className="h-8 w-8 text-white" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-gold-500 bg-clip-text text-transparent">
              Budgeting Mastery
            </h1>
            
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Learn how to create, manage, and stick to budgets that actually work for your lifestyle and financial goals.
            </p>

            {/* Placeholder Content Cards */}
            <div className="grid md:grid-cols-2 gap-8 mt-16">
              <div className="bg-card border rounded-xl p-8 text-left">
                <PiggyBank className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-4">Budget Templates</h3>
                <p className="text-muted-foreground">
                  Ready-to-use budget templates for different income levels and lifestyles. 
                  Coming soon - downloadable spreadsheets and interactive tools.
                </p>
              </div>
              
              <div className="bg-card border rounded-xl p-8 text-left">
                <Target className="h-12 w-12 text-gold-500 mb-4" />
                <h3 className="text-xl font-bold mb-4">Goal Setting</h3>
                <p className="text-muted-foreground">
                  Learn how to set realistic financial goals and create budgets that help you achieve them. 
                  Step-by-step guides and tracking methods.
                </p>
              </div>
            </div>

            <div className="mt-12 p-8 bg-muted rounded-xl">
              <h2 className="text-2xl font-bold mb-4">Coming Soon</h2>
              <p className="text-muted-foreground">
                This section will be filled with comprehensive budgeting guides, 
                interactive calculators, and practical resources to help you master your finances.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Budgeting;
