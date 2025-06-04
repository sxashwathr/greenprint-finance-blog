
import { Header } from "@/components/Header";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Footer } from "@/components/Footer";
import { TrendingUp, BarChart3, DollarSign } from "lucide-react";

const Investing = () => {
  return (
    <div className="min-h-screen bg-background">
      <ThemeToggle />
      <Header />
      
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-gold-500 rounded-xl flex items-center justify-center">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-gold-500 bg-clip-text text-transparent">
              Investing Basics
            </h1>
            
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Start your investment journey with confidence. Learn the fundamentals of building wealth through smart investing strategies.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-16">
              <div className="bg-card border rounded-xl p-8 text-left">
                <BarChart3 className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-4">Market Fundamentals</h3>
                <p className="text-muted-foreground">
                  Understanding stocks, bonds, ETFs, and mutual funds. Learn how markets work 
                  and how to make informed investment decisions.
                </p>
              </div>
              
              <div className="bg-card border rounded-xl p-8 text-left">
                <DollarSign className="h-12 w-12 text-gold-500 mb-4" />
                <h3 className="text-xl font-bold mb-4">Portfolio Building</h3>
                <p className="text-muted-foreground">
                  Diversification strategies, risk management, and how to build a portfolio 
                  that aligns with your financial goals and risk tolerance.
                </p>
              </div>
            </div>

            <div className="mt-12 p-8 bg-muted rounded-xl">
              <h2 className="text-2xl font-bold mb-4">Coming Soon</h2>
              <p className="text-muted-foreground">
                Comprehensive investing guides, market analysis tools, and beginner-friendly 
                resources to help you start building wealth through smart investments.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Investing;
