import { Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export function Footer() {
  const [logoError, setLogoError] = useState(false);

  const handleLogoError = () => {
    setLogoError(true);
  };

  const handleLogoLoad = () => {
    setLogoError(false);
  };

  const getLogoPath = () => {
    return '/favico.png';
  };

  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-muted py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4 text-foreground">About Greenprint</h3>
            <p className="text-foreground mb-4 leading-relaxed">
              Your blueprint to achieving proficient financial literacy. We provide practical, 
              actionable advice to help you build a secure financial future.
            </p>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-background rounded flex items-center justify-center shadow-md border border-primary/20">
                {!logoError ? (
                  <img 
                    src={getLogoPath()}
                    alt="Greenprint Logo" 
                    className="w-4 h-4 object-contain"
                    onError={handleLogoError}
                    onLoad={handleLogoLoad}
                  />
                ) : (
                  <div className="w-4 h-4 bg-primary/20 rounded flex items-center justify-center text-xs font-bold text-primary">
                    G
                  </div>
                )}
              </div>
              <span className="font-semibold text-foreground">Greenprint</span>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/budgeting" onClick={handleNavClick} className="text-foreground hover:text-orange-500 transition-colors">Budgeting</Link></li>
              <li><Link to="/investing" onClick={handleNavClick} className="text-foreground hover:text-orange-500 transition-colors">Investing Basics</Link></li>
              <li><Link to="/credit-debt" onClick={handleNavClick} className="text-foreground hover:text-orange-500 transition-colors">Credit & Debt</Link></li>
              <li><Link to="/entrepreneurship" onClick={handleNavClick} className="text-foreground hover:text-orange-500 transition-colors">Entrepreneurship</Link></li>
              <li><Link to="/career-income" onClick={handleNavClick} className="text-foreground hover:text-orange-500 transition-colors">Career & Income</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-foreground">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/financial-calculators" onClick={handleNavClick} className="text-foreground hover:text-orange-500 transition-colors">Financial Calculators</Link></li>
              <li><Link to="/budget-templates" onClick={handleNavClick} className="text-foreground hover:text-orange-500 transition-colors">Budget Templates</Link></li>
              <li><Link to="/investment-guide" onClick={handleNavClick} className="text-foreground hover:text-orange-500 transition-colors">Investment Guide</Link></li>
              <li><Link to="/newsletter-archive" onClick={handleNavClick} className="text-foreground hover:text-orange-500 transition-colors">Newsletter Archive</Link></li>
              <li><Link to="/faq" onClick={handleNavClick} className="text-foreground hover:text-orange-500 transition-colors">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-foreground">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-forest-green" />
                <span className="text-foreground">educate.greenprint@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-forest-green" />
                <span className="text-foreground">Frisco, Texas</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
