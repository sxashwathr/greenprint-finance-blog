
import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-muted py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">About Greenprint</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Your blueprint to achieving proficient financial literacy. We provide practical, 
              actionable advice to help you build a secure financial future.
            </p>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-gradient-to-br from-primary to-gold-500 rounded flex items-center justify-center">
                <span className="text-white font-bold text-xs">G</span>
              </div>
              <span className="font-semibold">Greenprint</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/budgeting" className="text-muted-foreground hover:text-primary transition-colors">Budgeting</Link></li>
              <li><Link to="/investing" className="text-muted-foreground hover:text-primary transition-colors">Investing Basics</Link></li>
              <li><Link to="/credit-debt" className="text-muted-foreground hover:text-primary transition-colors">Credit & Debt</Link></li>
              <li><Link to="/entrepreneurship" className="text-muted-foreground hover:text-primary transition-colors">Entrepreneurship</Link></li>
              <li><Link to="/career-income" className="text-muted-foreground hover:text-primary transition-colors">Career & Income</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Financial Calculator</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Budget Templates</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Investment Guide</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Newsletter Archive</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">hello@greenprint.blog</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">New York, NY</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 mt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 Greenprint. All rights reserved. Your blueprint to financial success.
          </p>
        </div>
      </div>
    </footer>
  );
}
