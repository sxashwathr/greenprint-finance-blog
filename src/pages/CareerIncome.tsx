
import { Header } from "@/components/Header";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Footer } from "@/components/Footer";
import { Briefcase, TrendingUp, Star } from "lucide-react";

const CareerIncome = () => {
  return (
    <div className="min-h-screen bg-background">
      <ThemeToggle />
      <Header />
      
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-gold-500 rounded-xl flex items-center justify-center">
                <Briefcase className="h-8 w-8 text-white" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-gold-500 bg-clip-text text-transparent">
              Career & Income Growth
            </h1>
            
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Maximize your earning potential through strategic career moves, skill development, and smart negotiation tactics.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-16">
              <div className="bg-card border rounded-xl p-8 text-left">
                <TrendingUp className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-4">Salary Negotiation</h3>
                <p className="text-muted-foreground">
                  Master the art of salary negotiation. Learn how to research market rates, 
                  prepare compelling cases, and negotiate confidently for better compensation.
                </p>
              </div>
              
              <div className="bg-card border rounded-xl p-8 text-left">
                <Star className="h-12 w-12 text-gold-500 mb-4" />
                <h3 className="text-xl font-bold mb-4">Skill Development</h3>
                <p className="text-muted-foreground">
                  Identify high-value skills that command premium salaries. Create a learning 
                  roadmap to advance your career and increase your market value.
                </p>
              </div>
            </div>

            <div className="mt-12 p-8 bg-muted rounded-xl">
              <h2 className="text-2xl font-bold mb-4">Coming Soon</h2>
              <p className="text-muted-foreground">
                Career advancement strategies, industry salary guides, and professional 
                development resources to help you climb the corporate ladder or transition careers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CareerIncome;
