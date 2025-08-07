import { BlogTile } from "./BlogTile";

const localBlogs = [
  {
    id: "local-business-spotlight",
    title: "Supporting Local Businesses: A Financial Perspective",
    excerpt: "How investing in your local community can benefit both your finances and neighborhood economy.",
    category: "Entrepreneurship",
    date: "2024-01-15",
    readTime: "6 min read",
    categoryColor: "bg-teal-600"
  }
];

export function LocalTiles() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground animate-fade-in">Local Endeavours</h2>
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
