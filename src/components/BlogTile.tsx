import { useNavigate } from "react-router-dom";
import { Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface BlogTileProps {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  categoryColor: string;
}

export function BlogTile({ id, title, excerpt, category, date, readTime, categoryColor }: BlogTileProps) {
  const navigate = useNavigate();

  const handleTileClick = () => {
    navigate(`/blog/${id}`);
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
        <div className="flex items-center text-muted-foreground text-xs">
          <Calendar className="h-3 w-3 mr-1" />
          <span>{new Date(date).toLocaleDateString()}</span>
        </div>
        {/* CHANGED: Title now uses text-foreground (dark slate in light mode) */}
        <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors text-foreground">
          {title}
        </h3>
        {/* CHANGED: Description now uses text-foreground (same as title) */}
        <p className="text-foreground mb-4 text-sm leading-relaxed">
          {excerpt}
        </p>
        <div className="flex items-center justify-between">
          {/* CHANGED: Read time now uses orange color */}
          <span className="text-xs text-orange-500">{readTime}</span>
          {/* CHANGED: "Click to read more" now uses orange color */}
          <span className="text-xs text-orange-500 font-medium">
            Click to read more →
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
