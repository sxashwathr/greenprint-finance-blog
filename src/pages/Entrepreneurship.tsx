
import { Header } from "@/components/Header";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Footer } from "@/components/Footer";
import { Lightbulb, Rocket, Users } from "lucide-react";

const Entrepreneurship = () => {
  return (
    <div className="min-h-screen bg-background">
      <ThemeToggle />
      <Header />
      
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-gold-500 rounded-xl flex items-center justify-center">
                <Lightbulb className="h-8 w-8 text-white" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-gold-500 bg-clip-text text-transparent">
              Entrepreneurship
            </h1>
            
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Turn your ideas into profitable ventures. Learn the financial fundamentals of starting and growing a successful business.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-16">
              <div className="bg-card border rounded-xl p-8 text-left">
                <Rocket className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-4">Startup Finances</h3>
                <p className="text-muted-foreground">
                  Understanding startup costs, cash flow management, and funding options. 
                  Learn how to bootstrap or seek investment for your business idea.
                </p>
              </div>
              
              <div className="bg-card border rounded-xl p-8 text-left">
                <Users className="h-12 w-12 text-gold-500 mb-4" />
                <h3 className="text-xl font-bold mb-4">Side Hustles</h3>
                <p className="text-muted-foreground">
                  Practical side business ideas you can start today. From freelancing to 
                  e-commerce, discover opportunities to generate additional income.
                </p>
              </div>
            </div>

            <div className="mt-12 p-8 bg-muted rounded-xl">
              <h2 className="text-2xl font-bold mb-4">Coming Soon</h2>
              <p className="text-muted-foreground">
                Business planning templates, financial projections guides, and real-world 
                entrepreneurship stories to inspire and educate aspiring business owners.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Entrepreneurship;
