import { useParams } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export function LocalPost() {
  const { slug } = useParams();
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-32">
        <h1 className="text-4xl font-bold mb-8">Local Post: {slug}</h1>
        <p>Content for {slug} goes here</p>
      </div>
      <Footer />
    </div>
  );
}
