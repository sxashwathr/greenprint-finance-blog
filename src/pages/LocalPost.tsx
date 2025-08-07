import { useParams } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export function LocalPost() {
  const { slug } = useParams();
  
  const renderContent = () => {
    switch(slug) {
      case "local-business-spotlight":
        return (
          <div className="prose prose-lg max-w-4xl mx-auto">
            <p className="text-lg text-emerald-700 mb-6">
              Discover how investing in your local community can create lasting financial benefits while strengthening neighborhood economies and building meaningful connections.
            </p>
            
            <p className="mb-6 text-foreground">
              Have you ever considered that your spending habits could be a powerful tool for both personal financial growth and community development? When you choose to support local businesses, you're not just making a purchase—you're making an investment in your community's economic future while often receiving superior value and service in return.
            </p>
            
            <h3 className="text-xl font-semibold mb-4 text-white">The Economic Multiplier Effect</h3>
            
            <p className="mb-6 text-foreground">
              Local spending creates what economists call the "multiplier effect." When you spend $100 at a local business, studies show that approximately $68 stays within your local economy, compared to only $43 when spent at a national chain. This money circulates through local suppliers, employees, and other businesses, creating a ripple effect that strengthens your entire community's financial foundation.
            </p>
            
            <p className="mb-6 text-foreground">
              This multiplier effect can directly benefit your personal finances through increased property values, more local job opportunities, and a more robust local economy that supports diverse income streams and investment opportunities.
            </p>
            
            <h3 className="text-xl font-semibold mb-4 text-white">Building Your Local Network</h3>
            
            <p className="mb-6 text-foreground">
              Supporting local businesses isn't just about transactions—it's about building relationships that can enhance your financial opportunities. Local business owners often become valuable networking contacts, potential business partners, or sources of referrals and recommendations that can advance your career or entrepreneurial goals.
            </p>
            
            <p className="mb-6 text-foreground">
              These relationships can lead to insider knowledge about local investment opportunities, job openings, or business ventures before they become widely known, giving you a competitive advantage in your financial planning and career development.
            </p>
          </div>
        );
        
      default:
        return (
          <div className="prose prose-lg max-w-4xl mx-auto">
            <p className="text-lg text-emerald-700 mb-6">
              Local post content coming soon.
            </p>
            <p className="mb-6 text-foreground">
              This local post is currently being developed. Check back soon for valuable insights about community involvement and local financial opportunities.
            </p>
          </div>
        );
    }
  };

  const post = (() => {
    switch(slug) {
      case "local-business-spotlight":
        return {
          title: "Supporting Local Businesses: A Financial Perspective",
          date: "January 15, 2024",
          readTime: "6 min read"
        };
      default:
        return {
          title: "Local Post",
          date: "Coming Soon",
          readTime: ""
        };
    }
  })();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <article className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center text-foreground">
            {post.title}
          </h1>
          
          <div className="flex justify-center items-center space-x-4 mb-8 text-muted-foreground">
            <span>{post.date}</span>
            {post.readTime && <span>•</span>}
            {post.readTime && <span>{post.readTime}</span>}
          </div>
          
          {renderContent()}
        </div>
      </article>
      
      <Footer />
    </div>
  );
}
