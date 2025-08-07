import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

interface BlogTileProps {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  categoryColor: string;
  type?: string;
}

export function BlogTile({ id, title, excerpt, category, date, readTime, categoryColor, type = "blog" }: BlogTileProps) {
  const navigate = useNavigate();
  
  const handleTileClick = () => {
    const route = type === "local" ? `/local/${id}` : `/blog/${id}`;
    navigate(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Card
      className="group hover:shadow-xl transition-all duration-300 hover:transform-y-1 border-border/20 bg-card cursor-pointer"
      onClick={handleTileClick}
    >
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className={`text-xs font-semibold text-white ${categoryColor} px-4 py-2 rounded-full`}>
            {category}
          </span>
        </div>
        <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors text-foreground">
          {title}
        </h3>
        <p className="text-foreground mb-4 text-sm leading-relaxed">
          {excerpt}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-xs text-orange-500">{readTime}</span>
          <span className="text-xs text-orange-500 font-medium">
            Click to read more →
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
