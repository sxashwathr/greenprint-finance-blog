import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Budgeting from "./pages/Budgeting";
import Investing from "./pages/Investing";
import CreditDebt from "./pages/CreditDebt";
import Entrepreneurship from "./pages/Entrepreneurship";
import CareerIncome from "./pages/CareerIncome";
import BlogPost from "./pages/BlogPost";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  console.log("App component is rendering");
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename="/greenprint-finance-blog">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/budgeting" element={<Budgeting />} />
            <Route path="/investing" element={<Investing />} />
            <Route path="/credit-debt" element={<CreditDebt />} />
            <Route path="/entrepreneurship" element={<Entrepreneurship />} />
            <Route path="/career-income" element={<CareerIncome />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
