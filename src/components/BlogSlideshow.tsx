import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const mockBlogs = [
  {
    id: 4,
    title: "Investment Portfolio Basics: Building Your Wealth Foundation",
    excerpt: "Learn fundamental portfolio construction and asset allocation principles.",
    image: "/portfolio.png",
    category: "Investing",
    slug: "investment-portfolio-basics"
  },
  {
    id: 1,
    title: "5 Essential Budgeting Tips for Beginners",
    excerpt: "Learn how to create and stick to a budget that actually works for your lifestyle.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=500&fit=crop",
    category: "Budgeting",
    slug: null
  },
  {
    id: 2,
    title: "Understanding Investment Basics: A Complete Guide",
    excerpt: "Start your investment journey with these fundamental principles and strategies.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&h=500&fit=crop",
    category: "Investing",
    slug: null
  },
  {
    id: 3,
    title: "How to Build Credit from Scratch",
    excerpt: "Practical steps to establish and improve your credit score for better financial health.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=500&fit=crop",
    category: "Credit & Debt",
    slug: null
  },
  {
    id: 5,
    title: "Starting Your First Business: A Teen's Guide to Entrepreneurship",
    excerpt: "Essential steps and strategies for young entrepreneurs to launch their first venture.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=500&fit=crop",
    category: "Entrepreneurship",
    slug: null
  }
];

export function BlogSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

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

  const handleSlideClick = (blog) => {
    if (blog.slug) {
      navigate(`/blog/${blog.slug}`);
    }
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
            className={`w-full h-full bg-cover bg-center relative ${
              blog.slug ? 'cursor-pointer' : ''
            }`}
            style={{ backgroundImage: `url(${blog.image})` }}
            onClick={() => handleSlideClick(blog)}
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
