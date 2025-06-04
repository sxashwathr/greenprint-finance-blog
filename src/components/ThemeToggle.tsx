
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const darkMode = localStorage.getItem('theme') === 'dark' || 
      (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    setIsDark(darkMode);
    document.documentElement.classList.toggle('dark', darkMode);
  }, []);

  const toggleTheme = () => {
    const newDarkMode = !isDark;
    setIsDark(newDarkMode);
    localStorage.setItem('theme', newDarkMode ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', newDarkMode);
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      className={`fixed top-4 right-4 z-50 w-12 h-12 rounded-full bg-background/90 backdrop-blur-sm shadow-lg transition-all duration-300 border-0 focus:ring-0 focus:outline-none group ${
        isDark 
          ? 'hover:bg-white/20 hover:shadow-white/20' 
          : 'hover:bg-black/20 hover:shadow-black/20'
      } hover:shadow-xl`}
    >
      {isDark ? (
        <Sun className="h-5 w-5 text-foreground transition-all duration-300 group-hover:rotate-180 group-hover:scale-110" />
      ) : (
        <Moon className="h-5 w-5 text-foreground transition-all duration-300 group-hover:rotate-180 group-hover:scale-110" />
      )}
    </Button>
  );
}
