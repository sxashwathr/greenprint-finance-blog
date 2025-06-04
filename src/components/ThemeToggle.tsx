
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
      className="fixed top-4 right-4 z-50 w-12 h-12 rounded-full bg-background/90 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 border-0 focus:ring-0 focus:outline-none"
    >
      {isDark ? (
        <Sun className="h-5 w-5 text-white hover:text-white transition-colors" />
      ) : (
        <Moon className="h-5 w-5 text-black hover:text-black transition-colors" />
      )}
    </Button>
  );
}
