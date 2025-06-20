
import { BlogTile } from "./BlogTile";

const recentBlogs = [
  {
    id: "budgeting-basics",
    title: "Budgeting Basics: Your First Step to Financial Freedom",
    excerpt: "Learn how to create and stick to a budget that actually works for your lifestyle.",
    category: "Budgeting",
    date: "2024-01-15",
    readTime: "5 min read",
    categoryColor: "bg-forest-green"
  }
];

export function BlogTiles() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground animate-fade-in">Recently Published</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentBlogs.map((blog) => (
            <BlogTile key={blog.id} {...blog} />
          ))}
        </div>
      </div>
    </section>
  );
}
