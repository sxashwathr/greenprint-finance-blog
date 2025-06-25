

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function NewsletterSignup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !email.trim()) {
      toast({
        title: "Please fill in all fields",
        description: "Both name and email are required.",
        variant: "destructive",
      });
      return;
    }

    if (!email.includes("@")) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      // Using Google Forms approach (most reliable)
      const formData = new FormData();
      formData.append('entry.1853429173', name.trim()); // Your actual entry ID for name
      formData.append('entry.712709816', email.trim()); // Your actual entry ID for email
      
      // Submit to Google Form with your actual form ID
      await fetch('https://docs.google.com/forms/d/e/1FAIpQLSdZ-aGo9ZUdOoQ6-xzFcSmfDwHEL-7q3AxG1Elvwm-xvFDkbQ/formResponse', {
        method: 'POST',
        body: formData
      });

      toast({
        title: "Success! 🎉",
        description: "You've been successfully subscribed to our newsletter.",
      });
      
      // Auto-dismiss after 5 seconds
      setTimeout(() => {
        // Toast will auto-dismiss
      }, 5000);
      
      setName("");
      setEmail("");
    } catch (error) {
      console.error("Subscription error:", error);
      toast({
        title: "Subscription failed",
        description: "There was an error subscribing you to the newsletter. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
  <section className="py-16 bg-gradient-to-br from-green-700 to-green-600">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-black/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <div className="flex items-center justify-center mb-6">
            <Mail className="h-8 w-8 text-white mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">Stay Updated</h2>
          </div>
          
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Get the latest financial tips and insights delivered to your inbox weekly.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
            <Input
              type="text"
              placeholder="First Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="flex-1 h-14 text-lg bg-white/90 border-white/30 placeholder:text-gray-500"
              disabled={isLoading}
            />
            <Input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 h-14 text-lg bg-white/90 border-white/30 placeholder:text-gray-500"
              disabled={isLoading}
            />
            <Button 
              type="submit" 
              size="lg" 
              className="h-14 px-8 text-lg font-semibold bg-white text-green-700 hover:bg-white/90 transition-colors"
              disabled={isLoading}
            >
              {isLoading ? "Subscribing..." : "Subscribe Now"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  </section>
);
}
