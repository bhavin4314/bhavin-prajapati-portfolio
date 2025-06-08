"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { Github, Linkedin, Mail, Send, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs
        .send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          formData,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        .then(
          () => {
            toast({
              title: "Message sent successfully! 🎉",
              description:
                "Thank you for reaching out. I'll get back to you soon.",
            });
          },
          (error) => {
            toast({
              title: "Failed to send message",
              description: "Please try again or contact me directly via email.",
              variant: "destructive",
            });
          }
        );

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Get In Touch
          </motion.h2>

          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Info */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl font-semibold mb-4">
                  Let's work together
                </h3>
                <p className="text-muted-foreground text-lg">
                  I'm always interested in hearing about new opportunities and
                  exciting projects. Whether you have a question or just want to
                  say hi, feel free to reach out!
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>bhavinprajapati8548@gmail.com</span>
                </div>
              </div>

              <div className="flex gap-4">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button size="icon" variant="outline" asChild>
                    <a
                      href="https://github.com/bhavin4314"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:bg-foreground hover:text-background transition-colors duration-300"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button size="icon" variant="outline" asChild>
                    <a
                      href="https://www.linkedin.com/in/bhavin-prajapati-2477b5213"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:bg-blue-600 hover:text-white transition-colors duration-300"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </Button>
                </motion.div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card className="border-0 shadow-xl bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Send a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Input
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        disabled={isLoading}
                        className="border-2 focus:border-primary transition-colors"
                      />
                    </div>

                    <div>
                      <Input
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        disabled={isLoading}
                        className="border-2 focus:border-primary transition-colors"
                      />
                    </div>

                    <div>
                      <Textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        disabled={isLoading}
                        rows={5}
                        className="border-2 focus:border-primary transition-colors resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 disabled:opacity-70"
                      size="lg"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
