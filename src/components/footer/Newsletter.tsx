import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "react-toastify";
import axios from "axios";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      toast("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await axios.post(
        "https://armoniaa-backend.onrender.com/api/subscribe",
        {
          email,
        }
      );
      toast.success("Thank you for signing up!");
      setEmail("");
      return response.data;
    } catch (error) {
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-10 w-sm">
      <h2 className="text-xl font-medium text-white">Subscribe to our Mailing List</h2>

      <form onSubmit={handleSubmit} className="w-[80%] lg:w-full">
        <div className="relative">
          <Input
            type="email"
            placeholder="Your email here"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-transparent text-white border border-gray-700 rounded-full pl-4 pr-10 py-2 w-full focus:outline-none focus:border-white"
          />
          <Button
            type="submit"
            disabled={isSubmitting}
            size="icon"
            variant="ghost"
            className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full h-8 w-8 flex items-center justify-center"
          >
            <div className="h-5 w-5 rounded-full border border-white flex items-center justify-center">
              <span className="sr-only">Submit</span>
              {isSubmitting ? (
                <div className="h-3 w-3 animate-spin rounded-full border-2 border-t-transparent border-white"></div>
              ) : (
                <span className="text-white text-xs">→</span>
              )}
            </div>
          </Button>
        </div>
      </form>

      <div className="flex gap-6">
        <a
          target="_blank"
          href="https://www.instagram.com/european.new.wave/"
          className="text-white text-xs tracking-wide hover:underline"
          rel="noopener noreferrer"
          aria-label="Follow us on Instagram"
        >
          INSTAGRAM
        </a>
        <a
          target="_blank"
          href="https://www.tiktok.com/european.new.wave/"
          className="text-white text-xs tracking-wide hover:underline"
          rel="noopener noreferrer"
          aria-label="Follow us on Instagram"
        >
          TIKTOK
        </a>
        <a
          target="_blank"
          href="https://www.threads.com/european.new.wave/"
          className="text-white text-xs tracking-wide hover:underline"
        >
          THREADS
        </a>
      </div>
    </div>
  );
};

export default Newsletter;
