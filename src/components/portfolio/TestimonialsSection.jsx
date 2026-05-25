import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote: "Joshua built our entire Farmsell platform with exceptional speed and quality. His ability to translate complex requirements into a clean, working product is remarkable. A true engineering talent.",
    name: "Farmsell Team",
    role: "AgriTech Marketplace",
    company: "Farmsell.org",
    initials: "FS",
    color: "text-accent",
    bg: "bg-accent/10",
    border: "border-accent/20",
    stars: 5,
  },
  {
    quote: "Working with Joshua at Tallen Tech has been outstanding. He writes clean, maintainable code and consistently delivers on time. Our clients always come back because of the quality he brings.",
    name: "Tallen Tech",
    role: "Web Development Agency",
    company: "Tallen.tech",
    initials: "TT",
    color: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/20",
    stars: 5,
  },
  {
    quote: "Joshua is the kind of developer every project needs. Detail-oriented, proactive, and incredibly skilled. His React and TypeScript work on our platform exceeded every expectation we had.",
    name: "Client Review",
    role: "Freelance Web Project",
    company: "Uganda",
    initials: "CR",
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
    border: "border-yellow-400/20",
    stars: 5,
  },
  {
    quote: "Delivered a fully responsive, SEO-optimised website for our school within a week. Communication was seamless, revisions were fast, and the final result was beyond what we imagined.",
    name: "School Project",
    role: "Educational Institution",
    company: "Uganda",
    initials: "SP",
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    border: "border-purple-400/20",
    stars: 5,
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((i) => (i + 1) % testimonials.length);
  const t = testimonials[active];

  return (
    <section id="testimonials" className="relative py-24 md:py-32 bg-background overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[50vw] h-[30vw] bg-primary/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <SectionHeading
          label="Testimonials"
          title="What They Say"
          description="Feedback from the teams and clients I've had the privilege of building with."
        />

        {/* Featured carousel */}
        <div className="relative max-w-3xl mx-auto mb-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className={`glass-pane rounded-sm p-10 border ${t.border} relative`}
            >
              {/* Large quote mark */}
              <Quote size={56} className={`absolute top-6 right-8 opacity-8 ${t.color}`} style={{ opacity: 0.07 }} />

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <p className="text-foreground text-lg leading-relaxed mb-8">"{t.quote}"</p>

              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full ${t.bg} border ${t.border} flex items-center justify-center shrink-0`}>
                  <span className={`font-mono text-sm font-bold ${t.color}`}>{t.initials}</span>
                </div>
                <div>
                  <p className="text-foreground font-semibold">{t.name}</p>
                  <p className="text-muted-foreground text-xs font-mono">{t.role} · {t.company}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Nav buttons */}
          <div className="flex items-center justify-between mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-sm border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all duration-200"
            >
              <ChevronLeft size={18} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${i === active ? "w-6 bg-primary" : "w-1.5 bg-border"}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-sm border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all duration-200"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Grid of all cards (subtle) */}
        <div className="grid md:grid-cols-4 gap-4">
          {testimonials.map((tm, i) => (
            <motion.button
              key={tm.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              onClick={() => setActive(i)}
              className={`text-left p-5 rounded-sm border transition-all duration-300 ${
                i === active
                  ? `${tm.bg} ${tm.border}`
                  : "glass-pane border-border/30 hover:border-border/60"
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-8 h-8 rounded-full ${tm.bg} flex items-center justify-center shrink-0`}>
                  <span className={`font-mono text-xs font-bold ${tm.color}`}>{tm.initials}</span>
                </div>
                <div>
                  <p className="text-foreground text-xs font-semibold">{tm.name}</p>
                  <p className="text-muted-foreground text-[10px] font-mono">{tm.company}</p>
                </div>
              </div>
              <p className="text-muted-foreground text-xs leading-relaxed line-clamp-2">"{tm.quote}"</p>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}