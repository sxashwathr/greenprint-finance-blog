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
    const formData = new FormData();
    formData.append('entry.1853429173', name.trim());
    formData.append('entry.712709816', email.trim());
    
    await fetch('https://docs.google.com/forms/d/e/1FAIpQLSdIXDyN10PUfOJA0QH9vZt9dL1TQEdIyW1tGJtRaCkJTMHb_kpE/formResponse', {
      method: 'POST',
      mode: 'no-cors',
      body: formData
    });

    toast({
      title: "Success! 🎉",
      description: "You've been successfully subscribed to our newsletter.",
    });
    
    setTimeout(() => {}, 5000);
    
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
  <section className="py-16 bg-gradient-to-br from-emerald-800 to-green-800">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-10 border border-white/20 shadow-2xl">
          <div className="flex items-center justify-center mb-8">
            <Mail className="h-10 w-10 text-white mr-4" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">Stay Updated</h2>
          </div>
          
          <p className="text-xl text-white/95 mb-10 leading-relaxed max-w-3xl mx-auto">
            Get the latest financial tips and insights delivered to your inbox weekly.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-6 max-w-4xl mx-auto">
            <Input
              type="text"
              placeholder="First Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="flex-1 h-16 text-lg bg-white/95 border-2 border-white/40 placeholder:text-gray-600 rounded-xl"
              disabled={isLoading}
            />
            <Input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 h-16 text-lg bg-white/95 border-2 border-white/40 placeholder:text-gray-600 rounded-xl"
              disabled={isLoading}
            />
            <Button 
              type="submit" 
              size="lg" 
              className="h-16 px-10 text-lg font-bold bg-white text-emerald-800 hover:bg-white/95 transition-all duration-300 rounded-xl shadow-lg"
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
