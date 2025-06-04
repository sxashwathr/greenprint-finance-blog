
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
    <section className="py-16 bg-gradient-to-r from-olive-drab to-dusty-gold">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-ivory/10 backdrop-blur-sm rounded-xl p-8 text-center">
            <div className="flex items-center justify-center mb-6">
              <Mail className="h-8 w-8 mr-3 text-ivory" />
              <h3 className="text-3xl font-bold text-ivory">Stay Updated</h3>
            </div>
            <p className="text-xl mb-8 text-ivory/90 leading-relaxed">
              Get the latest financial tips and insights delivered to your inbox weekly.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
              <Input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="bg-ivory/20 border-ivory/30 text-ivory placeholder:text-ivory/70 flex-1"
                required
              />
              <Input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-ivory/20 border-ivory/30 text-ivory placeholder:text-ivory/70 flex-1"
                required
              />
              <Button 
                type="submit" 
                className="bg-ivory text-olive-drab hover:bg-ivory/90 font-semibold px-8"
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
