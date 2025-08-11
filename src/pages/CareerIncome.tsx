import { Header } from "@/components/Header";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Footer } from "@/components/Footer";
import { Briefcase } from "lucide-react";
import { BlogTile } from "@/components/BlogTile";

const careerIncomeBlogs = [
  {
    id: "career-growth",
    title: "Career Growth: Maximizing Your Earning Potential",
    excerpt: "Proven strategies to negotiate higher compensation with confidence.",
    category: "Career & Income",
    date: "2024-01-30",
    readTime: "9 min read",
    categoryColor: "bg-teal-600"  
  },
  {
    id: "remote-work-mastery",
    title: "Remote Work Mastery: Thriving in the Digital Economy",
    excerpt: "Essential skills and strategies for building a successful remote career in today's job market.",
    category: "Career & Income",
    date: "2024-01-30",
    readTime: "8 min read",
    categoryColor: "bg-teal-600"  
  },
  {
    id: "multiple-income-streams",
    title: "Building Multiple Income Streams: Your Path to Financial Security",
    excerpt: "Diversify income sources to reduce risk and accelerate financial independence.",
    category: "Career & Income",
    date: "2024-01-30",
    readTime: "7 min read",
    categoryColor: "bg-teal-600"  
  },
  {
    id: "networking-for-career-growth",
    title: "Networking for Career Growth: Building Relationships That Pay",
    excerpt: "Transform networking into genuine relationship building that accelerates careers.",
    category: "Career & Income",
    date: "2024-01-30",
    readTime: "6 min read",
    categoryColor: "bg-teal-600"  
  },
  {
    id: "skills-based-career-pivoting",
    title: "Career Pivoting: Leverage Skills to Change Paths",
    excerpt: "Leverage transferable skills to transition into new industries successfully.",
    category: "Career & Income",
    date: "2024-01-30",
    readTime: "8 min read",
    categoryColor: "bg-teal-600"  
  },
  {
    id: "freelancing-business-fundamentals",
    title: "Freelancing Business Fundamentals: Building a Sustainable Solo Career",
    excerpt: "Master the business side of freelancing from pricing to scaling.",
    category: "Career & Income",
    date: "2024-01-30",
    readTime: "8 min read",
    categoryColor: "bg-teal-600"  
  }
];

const CareerIncome = () => {
  return (
    <div className="min-h-screen bg-background">
      
      <Header />
      
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="flex justify-center mb-8 animate-fade-in">
              <div className="w-16 h-16 bg-gradient-to-br from-forest-green to-sage-green rounded-xl flex items-center justify-center">
                <Briefcase className="h-8 w-8 text-white" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-forest-green to-sage-green bg-clip-text text-transparent animate-fade-in">
              Career & Income Growth
            </h1>
            
            {/* CHANGED: Main description text to dark forest green */}
            <p className="text-xl text-emerald-700 mb-12 leading-relaxed animate-fade-in">
              Maximize your earning potential through strategic career moves, skill development, and smart negotiation tactics.
            </p>
          </div>

          {/* Blog Tiles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {careerIncomeBlogs.map((blog) => (
              <BlogTile key={blog.id} {...blog} />
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default CareerIncome;
