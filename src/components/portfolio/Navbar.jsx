import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import LogoAvatar from "./LogoAvatar";

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
  const offset = 80; // navbar height buffer
  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: "smooth" });
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [dark, setDark] = useState(() => {
    if (typeof window === "undefined") return true;
    return localStorage.getItem("jw_theme") !== "light";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("jw_theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("jw_theme", "light");
    }
  }, [dark]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      // Detect active section
      const sections = navLinks.map((l) => document.querySelector(l.href));
      let current = "";
      sections.forEach((el) => {
        if (el && window.scrollY >= el.offsetTop - 120) {
          current = "#" + el.id;
        }
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    smoothScrollTo(href);
    setMobileOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "glass-pane border-b border-border/30 py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="flex items-center gap-2.5"
          >
            <LogoAvatar size={36} />
            <span className="font-mono text-primary font-bold text-sm tracking-tight hidden sm:block">Joshua<span className="text-muted-foreground"> W.</span></span>
          </a>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative text-sm tracking-wide transition-colors duration-300 ${
                    isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-px bg-primary"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
            {/* Theme toggle */}
            <button
              onClick={() => setDark((d) => !d)}
              className="w-9 h-9 rounded-sm border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all duration-200"
              title={dark ? "Switch to light mode" : "Switch to dark mode"}
            >
              <AnimatePresence mode="wait">
                {dark ? (
                  <motion.span key="sun" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.18 }}>
                    <Sun size={15} />
                  </motion.span>
                ) : (
                  <motion.span key="moon" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.18 }}>
                    <Moon size={15} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="ml-2 px-5 py-2.5 bg-primary text-primary-foreground text-sm font-semibold rounded-sm hover:bg-primary/90 transition-all duration-300"
            >
              Let's Talk
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-foreground p-2"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-background/98 backdrop-blur-xl pt-24 px-8"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-2xl font-semibold transition-colors ${
                    activeSection === link.href ? "text-primary" : "text-foreground hover:text-primary"
                  }`}
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="mt-4 px-6 py-3 bg-primary text-primary-foreground text-center font-semibold rounded-sm"
              >
                Let's Talk
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}