import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MessageCircle, ArrowUp } from "lucide-react";
import LogoAvatar from "./LogoAvatar";

const socialLinks = [
  { icon: Github, href: "https://github.com/wandegei", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/wandegei-joshua-8284b9247/", label: "LinkedIn" },
  { icon: MessageCircle, href: "https://wa.me/256777829813", label: "WhatsApp" },
  { icon: Mail, href: "mailto:wandageijoshua@gmail.com", label: "Email" },
];

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

function smoothScrollTo(id) {
  const el = document.querySelector(id);
  if (!el) return;
  window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: "smooth" });
}

export default function Footer() {
  return (
    <footer className="relative border-t border-border/20 bg-background">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 py-14">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 mb-10">
          {/* Brand + tagline */}
          <div className="flex-shrink-0">
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              className="flex items-center gap-3"
            >
              <LogoAvatar size={44} />
              <span className="font-mono text-primary font-bold text-xl tracking-tight">Joshua<span className="text-muted-foreground"> W.</span></span>
            </a>
            <p className="text-muted-foreground text-sm mt-2 max-w-[220px] leading-relaxed">
              Building scalable software from Uganda — available worldwide.
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => { e.preventDefault(); smoothScrollTo(link.href); }}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social icons */}
          <div className="flex items-center gap-2">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                title={label}
                whileHover={{ y: -3, scale: 1.1 }}
                transition={{ duration: 0.18 }}
                className="w-9 h-9 rounded-sm border border-border/40 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors duration-200"
              >
                <Icon size={15} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Divider + copyright */}
        <div className="border-t border-border/20 pt-7 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} Joshua Wandegei · All rights reserved.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group flex items-center gap-1.5 font-mono text-xs text-muted-foreground hover:text-primary transition-colors duration-200"
          >
            Back to top
            <ArrowUp size={11} className="group-hover:-translate-y-0.5 transition-transform duration-200" />
          </button>
        </div>
      </div>
    </footer>
  );
}