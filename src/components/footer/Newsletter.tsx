import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "react-toastify";
import axios from "axios";
import { MdChevronRight, MdOutlineEmail } from "react-icons/md";
import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa6";

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
    <div className="flex flex-col my-32 items-center space-y-10 w-sm">
      <h2 className="text-[24px] font-medium text-armonia-sand">
        Email Sign-up
      </h2>

      <form onSubmit={handleSubmit} className="w-[80%] lg:w-full">
        <div className="relative">
          <Input
            type="email"
            placeholder="Your email here"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-armonia-sand/10 text-armonia-sand placeholder:text-armonia-sand font-light border border-armonia-sand rounded-full pl-4 pr-12 py-6 w-full focus:outline-none focus:border-armonia-sand transition"
          />
          <Button
            type="submit"
            disabled={isSubmitting}
            size="icon"
            variant="ghost"
            className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full h-8 w-8 flex items-center justify-center"
          >
            <div className="h-5 w-5 rounded-full border border-armonia-sand flex items-center justify-center">
              <span className="sr-only">Submit</span>
              {isSubmitting ? (
                <div className="h-3 w-3 animate-spin rounded-full border-2 border-t-transparent border-armonia-sand"></div>
              ) : (
                <span className="text-armonia-sand text-xs">
                  <MdChevronRight />
                </span>
              )}
            </div>
          </Button>
        </div>
      </form>

      <div className="flex gap-6">
        <a
          id="email-link"
          className="text-armonia-sand text-2xl hover:opacity-80 transition-opacity"
          href="mailto:european.new.wave@gmail.com"
          aria-label="Send us an email"
        >
          <MdOutlineEmail />
        </a>
        <a
          target="_blank"
          href="https://www.instagram.com/european.new.wave/"
          className="text-armonia-sand text-2xl hover:opacity-80 transition-opacity"
          rel="noopener noreferrer"
          aria-label="Follow us on Instagram"
        >
          <FaInstagram />
        </a>
        <a
          target="_blank"
          href="https://www.tiktok.com/@european.new.wave"
          className="text-armonia-sand text-2xl hover:opacity-80 transition-opacity"
          rel="noopener noreferrer"
          aria-label="Follow us on TikTok"
        >
          <FaTiktok />
        </a>
        <a
          target="_blank"
          href="https://www.youtube.com/@european.new.wave.official"
          className="text-armonia-sand text-2xl hover:opacity-80 transition-opacity"
          rel="noopener noreferrer"
          aria-label="Subscribe to our YouTube channel"
        >
          <FaYoutube />
        </a>
      </div>
    </div>
  );
};

export default Newsletter;
