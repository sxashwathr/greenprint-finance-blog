
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const mockBlogs = [
  {
    id: 1,
    title: "5 Essential Budgeting Tips for Beginners",
    excerpt: "Learn how to create and stick to a budget that actually works for your lifestyle.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=400&fit=crop",
    category: "Budgeting"
  },
  {
    id: 2,
    title: "Understanding Investment Basics: A Complete Guide",
    excerpt: "Start your investment journey with these fundamental principles and strategies.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=400&fit=crop",
    category: "Investing"
  },
  {
    id: 3,
    title: "How to Build Credit from Scratch",
    excerpt: "Practical steps to establish and improve your credit score for better financial health.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop",
    category: "Credit & Debt"
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

  return (
    <div className="relative w-full h-96 overflow-hidden rounded-xl shadow-2xl">
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
              <span className="inline-block px-3 py-1 bg-gold-500 text-black text-sm font-semibold rounded-full mb-4">
                {blog.category}
              </span>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">{blog.title}</h3>
              <p className="text-lg opacity-90">{blog.excerpt}</p>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <Button
        variant="secondary"
        size="sm"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <Button
        variant="secondary"
        size="sm"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30"
        onClick={nextSlide}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {mockBlogs.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}
