import { Header } from "@/components/Header";
import { BlogSlideshow } from "@/components/BlogSlideshow";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { BlogTiles } from "@/components/BlogTiles";
import { LocalTiles } from "@/components/LocalTiles";
import { Footer } from "@/components/Footer";

const Index = () => {
  console.log("Index component is rendering");
  console.log("Current location:", window.location.href);
  console.log("Base URL from import.meta.env:", import.meta.env.BASE_URL);
  console.log("Mode:", import.meta.env.MODE);
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-20 pb-12">
        <div className="container mx-auto px-3">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-forest-green via-emerald-green via-sage-green to-forest-green bg-[length:200%_200%] animate-gradient-x bg-clip-text text-transparent mb-8 animate-fade-in">
              Your Blueprint to Financial Success
            </h1>
            <p className="text-lg text-emerald-700 mb-8 leading-relaxed max-w-2xl mx-auto animate-fade-in">
              Master the art of financial literacy with expert guidance, practical tips,
              and actionable strategies to build wealth and secure your future.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="flex gap-8 items-start">
            <div className="w-3/5 animate-fade-in">
              <BlogSlideshow />
            </div>
            
            <div className="w-2/5">
              <div className="bg-white rounded-2xl border-2 p-8 h-[560px] flex flex-col justify-center hover:shadow-lg transition-all duration-300 relative overflow-hidden" style={{ borderColor: '#fed7aa' }}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <img 
                    src="/texas.png" 
                    alt="Texas" 
                    className="w-64 h-64 object-contain opacity-25"
                  />
                </div>
                
                <div className="relative z-10">
                  <h2 className="text-3xl font-bold text-center mb-8 animate-fade-in font-mono" style={{ color: '#6B5B47' }}>
                    Our Mission
                  </h2>
                  <p className="text-lg leading-relaxed text-center font-mono animate-fade-in" style={{ color: '#6B5B47' }}>
                    At <strong>Greenprint</strong>, our mission is to empower Texas teens to take control of their financial future by providing clear, practical, and engaging resources on money management, investing, and entrepreneurship. We aim to break down complex financial concepts into simple, actionable steps that fit real-life situations, helping young people build confidence, make informed decisions, and create their own "greenprint" for long-term success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <hr style={{ 
          border: 'none',
          height: '1px',
          backgroundColor: '#8B7355',
          margin: '0'
        }} />
      </div>

      <LocalTiles />

      <div className="container mx-auto px-4 py-8">
        <hr style={{ 
          border: 'none',
          height: '1px',
          backgroundColor: '#8B7355',
          margin: '0'
        }} />
      </div>

      <BlogTiles />

      <NewsletterSignup />

      <Footer />
    </div>
  );
};

export default Index;
