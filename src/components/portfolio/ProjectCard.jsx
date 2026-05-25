import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { analytics } from "@/lib/analytics";

export default function ProjectCard({ project, index, featured }) {
  if (featured) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ delay: index * 0.15, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        className="group relative glass-pane rounded-sm overflow-hidden hover:glow-blue transition-all duration-500"
      >
        {/* Top accent bar */}
        <div className="h-0.5 w-full bg-gradient-to-r from-primary/60 via-primary to-accent/60" />

        <div className="grid md:grid-cols-5 min-h-[320px]">
          {/* Image - 3/5 */}
          <div className="md:col-span-3 relative overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 md:h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/70 hidden md:block" />
            <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent md:hidden" />

            {/* Live badge */}
            <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/70 backdrop-blur-md border border-accent/30">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-xs font-mono text-accent font-semibold tracking-widest">LIVE</span>
            </div>
          </div>

          {/* Content - 2/5 */}
          <div className="md:col-span-2 p-7 md:p-8 flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs text-primary tracking-widest uppercase block mb-2">
                Featured Project
              </span>
              <h3 className="text-2xl md:text-3xl font-black text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 text-xs font-mono text-primary bg-primary/10 rounded-sm border border-primary/20"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => analytics.trackProjectClick(project.title)}
                className="group/btn flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground text-sm font-bold rounded-sm hover:bg-primary/90 transition-all duration-300"
              >
                <ExternalLink size={13} />
                Visit Site
                <ArrowUpRight size={13} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 border border-border text-muted-foreground text-sm font-semibold rounded-sm hover:border-primary/50 hover:text-primary transition-all duration-300"
              >
                <Github size={13} />
                Code
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  // Standard card (fallback)
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.15, duration: 0.7 }}
      className="group glass-pane rounded-sm overflow-hidden hover:glow-blue transition-all duration-500"
    >
      <div className="relative overflow-hidden aspect-video">
        <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-80" />
        <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/20 backdrop-blur-md border border-accent/30">
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-xs font-mono text-accent font-medium">LIVE</span>
        </div>
      </div>
      <div className="p-6 md:p-8">
        <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">{project.title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-5">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t) => (
            <span key={t} className="px-3 py-1 text-xs font-mono text-muted-foreground bg-secondary/50 rounded-sm border border-border/30">{t}</span>
          ))}
        </div>
        <div className="flex gap-4">
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" onClick={() => analytics.trackProjectClick(project.title)} className="flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground text-sm font-semibold rounded-sm hover:bg-primary/90 transition-all duration-300">
            <ExternalLink size={14} /> Live Demo
          </a>
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2.5 border border-border text-foreground text-sm font-semibold rounded-sm hover:border-primary/50 hover:text-primary transition-all duration-300">
            <Github size={14} /> Source Code
          </a>
        </div>
      </div>
    </motion.div>
  );
}