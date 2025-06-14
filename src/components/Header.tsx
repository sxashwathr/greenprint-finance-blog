
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, DollarSign, TrendingUp, CreditCard, Briefcase, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);
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

  const handleLogoError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    console.error("Logo failed to load:", e);
    console.log("Attempted logo path:", e.currentTarget.src);
    console.log("Base URL:", window.location.origin);
    console.log("Current pathname:", window.location.pathname);
    setLogoError(true);
  };

  const handleLogoLoad = () => {
    console.log("Logo loaded successfully");
    setLogoError(false);
  };

  // Try different logo paths based on the environment
  const getLogoPath = () => {
    const basePath = import.meta.env.BASE_URL || '/';
    const logoPath = `${basePath}lovable-uploads/92ea261f-7b6b-4e5e-951b-dea177cce938.png`;
    console.log("Computed logo path:", logoPath);
    return logoPath;
  };

  return (
    <>
      {/* Greenprint Brand - Fixed position for all pages */}
      <div className="fixed top-2 left-2 z-50">
        <Link to="/" className="flex items-center space-x-1.5" onClick={handleNavClick}>
          <div className="w-8 h-8 bg-background rounded-lg flex items-center justify-center shadow-md border border-primary/20">
            {!logoError ? (
              <img 
                src={getLogoPath()}
                alt="Greenprint Logo" 
                className="w-5 h-5 object-contain"
                onError={handleLogoError}
                onLoad={handleLogoLoad}
              />
            ) : (
              <div className="w-5 h-5 bg-primary/20 rounded flex items-center justify-center text-xs font-bold text-primary">
                G
              </div>
            )}
          </div>
          <span className="font-bold text-sm text-foreground">Greenprint</span>
        </Link>
      </div>

      <header className={`fixed w-full top-2 z-40 flex justify-center transition-all duration-300`}>
        <nav className={`bg-background/95 backdrop-blur-sm border border-primary/30 rounded-full shadow-lg transition-all duration-300 ${
          isScrolled ? 'h-7 px-2' : 'h-10 px-4'
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
                    className={`relative text-foreground transition-all duration-300 font-medium rounded-full group flex items-center justify-center space-x-1 ${
                      isScrolled ? 'text-xs px-2.5 py-1' : 'text-sm px-3 py-1.5'
                    }`}
                  >
                    {IconComponent && <IconComponent className={isScrolled ? "h-2.5 w-2.5" : "h-3.5 w-3.5"} />}
                    <span className="relative z-10">{item.name}</span>
                    <div className={`absolute inset-0 rounded-full transition-all duration-300 ${
                      isActive 
                        ? 'bg-primary/10' 
                        : 'bg-transparent group-hover:bg-primary/15 group-hover:shadow-md group-hover:shadow-primary/15'
                    }`} />
                  </Link>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="absolute right-2 md:hidden hover:bg-primary/20"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-3.5 w-3.5" /> : <Menu className="h-3.5 w-3.5" />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="absolute top-full left-0 w-full bg-background border border-primary/30 rounded-xl shadow-lg md:hidden mt-1">
              <div className="flex flex-col space-y-1 p-2">
                {navigation.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`text-foreground transition-all duration-200 font-medium px-2.5 py-1.5 rounded-full hover:bg-primary/20 hover:shadow-md flex items-center space-x-1.5 text-sm ${
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
