import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const mockBlogs = [
  {
    id: 1,
    title: "The Psychology of Money: Why We Spend and How to Change It",
    excerpt: "Discover the triggers that drive spending habits and learn useful strategies to overcome them.",
    image: "/psych.png",
    category: "Budgeting"
  },
  {
    id: 2,
    title: "Investment Portfolio Basics: Building Your Wealth Foundation",
    excerpt: "Learn fundamental portfolio construction and asset allocation principles.",
    image: "/portfolio.png",
    category: "Investing"
  },
  {
    id: 3,
    title: "Debt Payoff Strategies: Finding Your Path to Freedom",
    excerpt: "Explore proven methods to eliminate debt and regain control of your financial future.",
    image: "/debt.png",
    category: "Credit & Debt"
  },
  {
    id: 4,
    title: "Scaling Your Business: From Solo Act to Sustainable Growth",
    excerpt: "Learn key strategies and tools needed to grow your business beyond what you can handle alone.",
    image: "entrepreneurship.png",
    category: "Entrepreneurship"
  },
  {
    id: 5,
    title: "Networking for Career Growth: Building Relationships That Pay",
    excerpt: "Transform networking into genuine relationship building that accelerates careers.",
    image: "/networking.png",
    category: "Career & Income"
  }
];

export function BlogSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % mockBlogs.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % mockBlogs.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + mockBlogs.length) % mockBlogs.length);
  };

  const getCategoryColor = (category) => {
    switch (category.toLowerCase()) {
      case 'investing':
        return 'bg-sage-green';
      case 'budgeting':
        return 'bg-forest-green';
      case 'career & income':
        return 'bg-teal-600';
      case 'entrepreneurship':
        return 'bg-emerald-green';
      case 'credit & debt':
        return 'bg-green-700';
      default:
        return 'bg-sage-green';
    }
  };

  return (
    <div className="relative w-full h-[560px] overflow-hidden rounded-xl shadow-2xl">
      {mockBlogs.map((blog, index) => (
        <div
          key={blog.id}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="w-full h-full bg-cover bg-center relative"
            style={{ backgroundImage: `url(${blog.image})` }}
          >
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <span className={`inline-block px-4 py-2 ${getCategoryColor(blog.category)} text-white text-sm font-bold rounded-full mb-4 shadow-lg border-2 border-white/20 backdrop-blur-sm`}>
                {blog.category}
              </span>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">{blog.title}</h3>
              <p className="text-lg opacity-90">{blog.excerpt}</p>
            </div>
          </div>
        </div>
      ))}
      
      <Button
        variant="secondary"
        size="sm"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 hover:scale-105 transition-all duration-300"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <Button
        variant="secondary"
        size="sm"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 hover:scale-105 transition-all duration-300"
        onClick={nextSlide}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
      
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {mockBlogs.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 hover:scale-125 ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}
