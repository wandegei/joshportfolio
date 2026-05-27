import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown, MapPin, ExternalLink, Download } from "lucide-react";
import SocialSidebar from "./SocialSidebar";
import HeroOrb from "./HeroOrb";

const ROLES = [
  "Full-Stack Engineer",
  "React Specialist",
  "Next.js Developer",
  "UI/UX Builder",
];

const STATS = [
  { value: "2+", label: "Years Building" },
  { value: "150+", label: "Projects Shipped" },
  { value: "100+", label: "Happy Clients" },
  { value: "2", label: "Live Products" },
];

export default function HeroSection({ heroImage }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout;
    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 35);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section id="hero" className="relative min-h-screen w-full flex flex-col justify-center overflow-hidden bg-background">
      {/* Ambient glows  reduced blur for perf */}
      <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-primary/8 blur-[120px] rounded-full pointer-events-none animate-pulse-glow will-change-auto" />
      <div className="absolute bottom-[-15%] right-[-10%] w-[35vw] h-[35vw] bg-accent/5 blur-[100px] rounded-full pointer-events-none" />

      {/* Background image overlay */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <img src={heroImage} alt="" className="w-full h-full object-cover" loading="lazy" decoding="async" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(rgba(244,244,245,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(244,244,245,0.15) 1px, transparent 1px)`,
          backgroundSize: "72px 72px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 pt-32 pb-24 md:pt-44 w-full">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/25 bg-primary/8 mb-8"
        >
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="font-mono text-xs text-primary tracking-widest uppercase">Available for new projects</span>
        </motion.div>

        {/* Name */}
        <h1 className="text-[14vw] md:text-[10vw] lg:text-[8.5vw] leading-[0.85] font-black tracking-tighter mb-6">
          <motion.span
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="block text-foreground"
          >
            JOSHUA
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="block text-gradient"
          >
            WANDEGEI
          </motion.span>
        </h1>

        {/* Typing role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="font-mono text-lg md:text-2xl text-primary font-semibold">
            {displayed}
            <span className="inline-block w-0.5 h-5 md:h-6 bg-primary ml-0.5 animate-pulse align-middle" />
          </span>
        </motion.div>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.65 }}
          className="flex items-center gap-2 mb-8"
        >
          <MapPin size={14} className="text-muted-foreground" />
          <span className="font-mono text-sm text-muted-foreground tracking-wide">Wakiso, Uganda · Remote Available</span>
        </motion.div>

        {/* Summary */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed mb-10"
        >
          Software engineer specializing in <span className="text-foreground font-medium">React, Next.js, TypeScript & Node.js</span>.
          I co-built <span className="text-primary font-medium">Farmsell</span>  an agri-marketplace serving East Africa  
          and run <span className="text-primary font-medium">Tallen Tech</span>, a web dev agency with 150+ projects delivered.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 mb-16 md:mb-20"
        >
          <a
            href="#projects"
            className="group px-8 py-4 bg-primary text-primary-foreground font-bold text-sm tracking-widest uppercase rounded-sm hover:bg-primary/90 transition-all duration-300 text-center flex items-center justify-center gap-2"
          >
            View My Work
            <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
          <a
            href="https://wa.me/256777829813"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border border-border text-foreground font-bold text-sm tracking-widest uppercase rounded-sm hover:border-primary/60 hover:text-primary transition-all duration-300 text-center"
          >
            Hire Me on WhatsApp
          </a>
          <a
            href="https://drive.google.com/uc?export=download&id=YOUR_GOOGLE_DRIVE_FILE_ID"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-2 px-8 py-4 border border-accent/50 text-accent font-bold text-sm tracking-widest uppercase rounded-sm hover:bg-accent/10 hover:border-accent transition-all duration-300"
          >
            <Download size={14} className="group-hover:animate-bounce" />
            Download CV
          </a>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border/30 rounded-sm overflow-hidden border border-border/30"
        >
          {STATS.map((stat) => (
            <div key={stat.label} className="bg-card/60 backdrop-blur-sm px-6 py-5 text-center">
              <div className="text-2xl md:text-3xl font-black text-foreground">{stat.value}</div>
              <div className="font-mono text-xs text-muted-foreground uppercase tracking-wider mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
      >
        <span className="font-mono text-xs text-muted-foreground tracking-widest">SCROLL</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ArrowDown size={14} className="text-muted-foreground" />
        </motion.div>
      </motion.div>

      <HeroOrb />
      <SocialSidebar />
    </section>
  );
}