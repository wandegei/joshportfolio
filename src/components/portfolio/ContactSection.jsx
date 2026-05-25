import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Send, Mail, MapPin, CheckCircle, MessageCircle, Github, Linkedin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-background overflow-hidden">
      <div className="absolute bottom-0 left-0 right-0 h-[60vh] bg-primary/3 blur-[200px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <SectionHeading
          label="Get In Touch"
          title="Let's Build Together"
          description="Have a project in mind or a role to fill? Reach out — I respond fast."
        />

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Left — contact info (2 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            <p className="text-muted-foreground text-base leading-relaxed">
              Whether you're a startup, enterprise, or solo founder — I'm open to new projects 
              and opportunities. Let's create something great.
            </p>

            {/* WhatsApp — hero contact */}
            <a
              href="https://wa.me/256777829813"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-5 rounded-sm bg-accent/10 border border-accent/30 hover:bg-accent/15 hover:border-accent/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center shrink-0 group-hover:bg-accent/30 transition-colors">
                <MessageCircle size={22} className="text-accent" />
              </div>
              <div>
                <p className="font-mono text-xs text-accent/70 uppercase tracking-widest mb-0.5">WhatsApp — quickest reply</p>
                <p className="text-lg font-bold text-foreground">+256 777 829 813</p>
              </div>
              <Send size={16} className="text-accent ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>

            {/* Email */}
            <a
              href="mailto:wandegei.joshua@gmail.com"
              className="group flex items-center gap-4 p-5 rounded-sm glass-pane hover:border-primary/40 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                <Mail size={18} className="text-primary" />
              </div>
              <div>
                <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-0.5">Email</p>
                <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                  wandegei.joshua@gmail.com
                </p>
              </div>
            </a>

            {/* Location */}
            <div className="flex items-center gap-4 p-5 rounded-sm glass-pane">
              <div className="w-12 h-12 rounded-sm bg-secondary/50 flex items-center justify-center shrink-0">
                <MapPin size={18} className="text-muted-foreground" />
              </div>
              <div>
                <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-0.5">Location</p>
                <p className="text-sm font-semibold text-foreground">Wakiso, Uganda</p>
                <p className="text-xs text-muted-foreground">Open to Remote</p>
              </div>
            </div>

            {/* Social links row */}
            <div className="flex gap-3 pt-2">
              {[
                { href: "https://www.linkedin.com/in/wandegei-joshua-8284b9247/", icon: Linkedin, label: "LinkedIn" },
                { href: "https://github.com/wandegei", icon: Github, label: "GitHub" },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 border border-border rounded-sm text-sm text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                >
                  <Icon size={14} />
                  {label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right — form (3 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass-pane rounded-sm p-7 md:p-10 space-y-6">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2 block">Name</label>
                  <Input
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-secondary/30 border-border/50 text-foreground placeholder:text-muted-foreground/40 focus:border-primary/50 rounded-sm h-12"
                    required
                  />
                </div>
                <div>
                  <label className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2 block">Email</label>
                  <Input
                    type="email"
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-secondary/30 border-border/50 text-foreground placeholder:text-muted-foreground/40 focus:border-primary/50 rounded-sm h-12"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2 block">Message</label>
                <Textarea
                  placeholder="Tell me about your project, idea, or opportunity..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-secondary/30 border-border/50 text-foreground placeholder:text-muted-foreground/40 focus:border-primary/50 rounded-sm min-h-[160px]"
                  required
                />
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-3 px-5 py-4 rounded-sm bg-accent/10 border border-accent/30"
                >
                  <CheckCircle size={18} className="text-accent" />
                  <span className="text-accent text-sm font-medium">
                    Message sent! Joshua will reply shortly.
                  </span>
                </motion.div>
              ) : (
                <Button
                  type="submit"
                  className="w-full h-12 bg-primary text-primary-foreground font-bold tracking-widest uppercase text-sm hover:bg-primary/90 rounded-sm"
                >
                  <Send size={15} className="mr-2" />
                  Send Message
                </Button>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}