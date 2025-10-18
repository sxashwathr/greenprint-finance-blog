import { BlogTile } from "./BlogTile";

const localBlogs = [
  {
    id: "local-business-spotlight",
    title: "Supporting Local Businesses: A Financial Perspective",
    excerpt: "How investing in your local community can benefit both your finances and neighborhood economy.",
    category: "Entrepreneurship",
    date: "2024-01-15",
    readTime: "6 min read",
    categoryColor: "bg-emerald-green"
  },
  {
    id: "dfw-teens-money-moves",
    title: "Real Money Moves for DFW Teens: Paid Jobs and Finance Programs You Can Use Now",
    excerpt: "Discover paid internship programs and financial literacy resources available for Dallas-Fort Worth teens.",
    category: "Career & Income",
    date: "2025-01-15",
    readTime: "8 min read",
    categoryColor: "bg-teal-600"
  },
  {
    id: "dfw-teen-entrepreneurship",
    title: "From Classrooms to Cash Flow: Entrepreneurship Opportunities for Texas Teens in DFW",
    excerpt: "Learn how DFW teens can access free mentoring, business workshops, and pitch competitions to launch their ventures.",
    category: "Entrepreneurship",
    date: "2025-01-16",
    readTime: "7 min read",
    categoryColor: "bg-emerald-green"
  }
];

export function LocalTiles() {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6 text-foreground animate-fade-in">Local Endeavours</h2>
        <p className="text-lg text-foreground mb-8 leading-relaxed max-w-2xl mx-auto text-center">
          Discover recent Texas community events, outcomes, and how you can participate.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {localBlogs.map((blog) => (
            <BlogTile key={blog.id} {...blog} type="local" />
          ))}
        </div>
      </div>
    </section>
  );
}
