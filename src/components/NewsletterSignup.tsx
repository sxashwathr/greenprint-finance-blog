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
        mode: 'no-cors',
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
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-white/20 border-white/30 text-white placeholder:text-white/70 flex-1 rounded-full"
                disabled={isLoading}
              />
              <Input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/20 border-white/30 text-white placeholder:text-white/70 flex-1 rounded-full"
                disabled={isLoading}
              />
              <Button 
                type="submit" 
                className="bg-white text-forest-green hover:bg-white/90 font-semibold px-8 rounded-full transition-all duration-300 hover:scale-105"
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
