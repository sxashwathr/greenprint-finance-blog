
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Budgeting", href: "/budgeting" },
    { name: "Investing", href: "/investing" },
    { name: "Credit & Debt", href: "/credit-debt" },
    { name: "Entrepreneurship", href: "/entrepreneurship" },
    { name: "Career & Income", href: "/career-income" }
  ];

  return (
    <header className={`fixed w-full top-0 z-40 bg-background/95 backdrop-blur-sm border-b transition-all duration-300 ${
      isScrolled ? 'h-16' : 'h-20'
    }`}>
      <nav className="container mx-auto px-4 h-full flex items-center justify-center">
        <Link to="/" className="absolute left-4 flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-br from-olive-drab to-dusty-gold rounded-lg flex items-center justify-center">
            <span className="text-ivory font-bold text-lg">G</span>
          </div>
          <span className={`font-bold text-foreground transition-all duration-300 ${
            isScrolled ? 'text-xl' : 'text-2xl'
          }`}>
            Greenprint
          </span>
        </Link>

        {/* Desktop Navigation - Centered */}
        <div className="hidden md:flex items-center space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`relative text-foreground hover:text-olive-drab transition-all duration-300 font-medium px-4 py-2 rounded-full hover:bg-sage-green/20 ${
                location.pathname === item.href ? 'text-olive-drab bg-sage-green/20' : ''
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="sm"
          className="absolute right-4 md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-background border-b shadow-lg md:hidden">
            <div className="flex flex-col space-y-4 p-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-foreground hover:text-olive-drab transition-colors duration-200 font-medium px-4 py-2 rounded-full hover:bg-sage-green/20 ${
                    location.pathname === item.href ? 'text-olive-drab bg-sage-green/20' : ''
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
