
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
      className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border/20 bg-card cursor-pointer"
      onClick={handleTileClick}
    >
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className={`text-xs font-semibold text-white ${categoryColor} px-4 py-2 rounded-full`}>
            {category}
          </span>
          <div className="flex items-center text-muted-foreground text-xs">
            <Calendar className="h-3 w-3 mr-1" />
            {new Date(date).toLocaleDateString()}
          </div>
        </div>
        <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors text-foreground">
          {title}
        </h3>
        <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
          {excerpt}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-xs text-muted-foreground">{readTime}</span>
          <span className="text-xs text-primary font-medium">
            Click to read more →
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
