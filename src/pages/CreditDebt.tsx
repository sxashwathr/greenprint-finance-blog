
import { Header } from "@/components/Header";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Footer } from "@/components/Footer";
import { CreditCard, Shield, AlertTriangle } from "lucide-react";

const CreditDebt = () => {
  return (
    <div className="min-h-screen bg-background">
      <ThemeToggle />
      <Header />
      
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-gold-500 rounded-xl flex items-center justify-center">
                <CreditCard className="h-8 w-8 text-white" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-gold-500 bg-clip-text text-transparent">
              Credit & Debt Management
            </h1>
            
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Master your credit score, manage debt effectively, and build a strong financial foundation for your future.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-16">
              <div className="bg-card border rounded-xl p-8 text-left">
                <Shield className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-4">Credit Building</h3>
                <p className="text-muted-foreground">
                  Learn how to build and maintain excellent credit. Understanding credit scores, 
                  reports, and strategies to improve your creditworthiness.
                </p>
              </div>
              
              <div className="bg-card border rounded-xl p-8 text-left">
                <AlertTriangle className="h-12 w-12 text-gold-500 mb-4" />
                <h3 className="text-xl font-bold mb-4">Debt Strategies</h3>
                <p className="text-muted-foreground">
                  Proven methods to pay off debt faster including snowball and avalanche methods. 
                  Create a plan that works for your situation.
                </p>
              </div>
            </div>

            <div className="mt-12 p-8 bg-muted rounded-xl">
              <h2 className="text-2xl font-bold mb-4">Coming Soon</h2>
              <p className="text-muted-foreground">
                Detailed guides on credit repair, debt consolidation strategies, and tools 
                to help you take control of your credit and debt situation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CreditDebt;
