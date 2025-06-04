
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
    <div className="bg-gradient-to-r from-primary to-gold-500 rounded-xl p-6 text-white">
      <div className="flex items-center mb-4">
        <Mail className="h-6 w-6 mr-2" />
        <h3 className="text-xl font-bold">Stay Updated</h3>
      </div>
      <p className="mb-4 opacity-90">
        Get the latest financial tips and insights delivered to your inbox weekly.
      </p>
      <form onSubmit={handleSubmit} className="space-y-3">
        <Input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
          required
        />
        <Input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
          required
        />
        <Button type="submit" className="w-full bg-white text-primary hover:bg-white/90">
          Subscribe Now
        </Button>
      </form>
    </div>
  );
}
