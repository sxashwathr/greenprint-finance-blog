
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, DollarSign, TrendingUp, CreditCard, Briefcase, Users } from "lucide-react";
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
    { name: "Home", href: "/", icon: null },
    { name: "Budgeting", href: "/budgeting", icon: DollarSign },
    { name: "Investing", href: "/investing", icon: TrendingUp },
    { name: "Credit & Debt", href: "/credit-debt", icon: CreditCard },
    { name: "Entrepreneurship", href: "/entrepreneurship", icon: Briefcase },
    { name: "Career & Income", href: "/career-income", icon: Users }
  ];

  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Greenprint Brand - Fixed position for all pages */}
      <div className="fixed top-3 left-3 z-50">
        <Link to="/" className="flex items-center space-x-2" onClick={handleNavClick}>
          <div className="w-10 h-10 bg-background rounded-lg flex items-center justify-center shadow-md border border-primary/20">
            <img 
              src="/lovable-uploads/92ea261f-7b6b-4e5e-951b-dea177cce938.png" 
              alt="Greenprint Logo" 
              className="w-6 h-6 object-contain"
            />
          </div>
          <span className="font-bold text-base text-foreground">Greenprint</span>
        </Link>
      </div>

      <header className={`fixed w-full top-3 z-40 flex justify-center transition-all duration-300`}>
        <nav className={`bg-background/95 backdrop-blur-sm border border-primary/30 rounded-full shadow-lg transition-all duration-300 ${
          isScrolled ? 'h-8 px-3' : 'h-12 px-6'
        }`}>
          <div className="h-full flex items-center justify-center">
            {/* Desktop Navigation - Centered */}
            <div className="hidden md:flex items-center space-x-1">
              {navigation.map((item) => {
                const IconComponent = item.icon;
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={handleNavClick}
                    className={`relative text-foreground transition-all duration-300 font-medium rounded-full group flex items-center space-x-1.5 ${
                      isScrolled ? 'text-xs px-2 py-1.5' : 'text-sm px-3 py-2'
                    }`}
                  >
                    {IconComponent && <IconComponent className={isScrolled ? "h-3 w-3" : "h-4 w-4"} />}
                    <span className="relative z-10">{item.name}</span>
                    <div className={`absolute inset-0 rounded-full transition-all duration-300 ${
                      isActive 
                        ? 'bg-primary/5' 
                        : 'bg-transparent group-hover:bg-primary/20 group-hover:shadow-lg group-hover:shadow-primary/20'
                    }`} />
                  </Link>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="absolute right-3 md:hidden hover:bg-primary/20"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="absolute top-full left-0 w-full bg-background border border-primary/30 rounded-xl shadow-lg md:hidden mt-2">
              <div className="flex flex-col space-y-1 p-3">
                {navigation.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`text-foreground transition-all duration-200 font-medium px-3 py-2 rounded-full hover:bg-primary/20 hover:shadow-md flex items-center space-x-2 text-sm ${
                        location.pathname === item.href ? 'bg-primary/5' : ''
                      }`}
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        handleNavClick();
                      }}
                    >
                      {IconComponent && <IconComponent className="h-3 w-3" />}
                      <span>{item.name}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
}
