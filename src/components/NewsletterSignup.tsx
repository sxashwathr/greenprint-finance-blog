
import { useState } from "react";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && firstName) {
      toast({
        title: "Success!",
        description: "Thank you for subscribing to our newsletter!",
      });
      setEmail("");
      setFirstName("");
    }
  };

  return (
    <section className="py-16 bg-gradient-to-r from-forest-green to-sage-green">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center border border-white/20 shadow-2xl">
            <div className="flex items-center justify-center mb-6">
              <Mail className="h-8 w-8 mr-3 text-white" />
              <h3 className="text-3xl font-bold text-white">Stay Updated</h3>
            </div>
            <p className="text-xl mb-8 text-white/90 leading-relaxed">
              Get the latest financial tips and insights delivered to your inbox weekly.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
              <Input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="bg-white/20 border-white/30 text-white placeholder:text-white/70 flex-1 rounded-full"
                required
              />
              <Input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/20 border-white/30 text-white placeholder:text-white/70 flex-1 rounded-full"
                required
              />
              <Button 
                type="submit" 
                className="bg-white text-forest-green hover:bg-white/90 font-semibold px-8 rounded-full transition-all duration-300 hover:scale-105"
              >
                Subscribe Now
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
