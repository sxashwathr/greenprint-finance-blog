
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
      <div className="fixed top-4 left-4 z-50">
        <Link to="/" className="flex items-center space-x-2" onClick={handleNavClick}>
          <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-md border border-forest-green/20">
            <img 
              src="/lovable-uploads/840f2312-113b-4db2-b16f-ba37c803ba71.png" 
              alt="Greenprint Logo" 
              className="w-8 h-8 object-contain"
            />
          </div>
          <span className="font-bold text-lg text-foreground">Greenprint</span>
        </Link>
      </div>

      <header className={`fixed w-full top-4 z-40 flex justify-center transition-all duration-300`}>
        <nav className={`bg-background/95 backdrop-blur-sm border border-forest-green/30 rounded-full shadow-lg transition-all duration-300 ${
          isScrolled ? 'h-8 px-3' : 'h-12 px-6'
        }`}>
          <div className="h-full flex items-center justify-center">
            {/* Desktop Navigation - Centered */}
            <div className="hidden md:flex items-center space-x-1">
              {navigation.map((item) => {
                const IconComponent = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={handleNavClick}
                    className={`relative text-foreground transition-all duration-300 font-medium rounded-full group flex items-center space-x-2 ${
                      isScrolled ? 'text-xs px-2 py-1' : 'text-sm px-3 py-2'
                    }`}
                  >
                    {IconComponent && <IconComponent className={isScrolled ? "h-3 w-3" : "h-4 w-4"} />}
                    <span className="relative z-10">{item.name}</span>
                    <div className={`absolute inset-0 rounded-full transition-all duration-300 ${
                      location.pathname === item.href 
                        ? '' 
                        : 'bg-transparent group-hover:bg-forest-green/30 group-hover:shadow-lg group-hover:shadow-forest-green/20'
                    }`} />
                  </Link>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="absolute right-4 md:hidden hover:bg-forest-green/20"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="absolute top-full left-0 w-full bg-background border border-forest-green/30 rounded-xl shadow-lg md:hidden mt-2">
              <div className="flex flex-col space-y-2 p-4">
                {navigation.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`text-foreground transition-all duration-200 font-medium px-4 py-2 rounded-full hover:bg-forest-green/30 hover:shadow-md flex items-center space-x-2 ${
                        location.pathname === item.href ? 'bg-forest-green/20' : ''
                      }`}
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        handleNavClick();
                      }}
                    >
                      {IconComponent && <IconComponent className="h-4 w-4" />}
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
