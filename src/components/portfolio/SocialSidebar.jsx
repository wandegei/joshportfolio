import { Github, Linkedin, Twitter, Mail, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const socials = [
  { icon: Github, href: "https://github.com/wandegei", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/wandegei-joshua-8284b9247/", label: "LinkedIn" },
  { icon: MessageCircle, href: "https://wa.me/256777829813", label: "WhatsApp" },
  { icon: Mail, href: "mailto:wandageijoshua@gmail.com", label: "Email" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
];

export default function SocialSidebar() {
  return (
    <motion.aside
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1, duration: 0.6 }}
      className="fixed right-6 lg:right-10 top-1/2 -translate-y-1/2 z-30 hidden md:flex flex-col gap-4"
    >
      {socials.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-10 h-10 rounded-full border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
          title={label}
        >
          <Icon size={15} />
        </a>
      ))}
      <div className="w-px h-12 bg-border/50 mx-auto mt-2" />
    </motion.aside>
  );
}