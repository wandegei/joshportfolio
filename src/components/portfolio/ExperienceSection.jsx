import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Briefcase, ExternalLink } from "lucide-react";

const experiences = [
  {
    role: "Software Engineer",
    company: "Tallen Tech",
    url: "https://tallen.tech/",
    period: "2023 — Present",
    type: "Co-Founder & Engineer",
    description: "Co-founded a web development agency delivering custom digital solutions to businesses, NGOs, schools, and startups. 150+ projects shipped, 100+ satisfied clients — zero templates, all handcrafted code.",
    achievements: [
      "Delivered 150+ custom web projects",
      "Built scalable React & Next.js applications",
      "Managed client relationships end-to-end",
    ],
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "PHP", "MySQL"],
    current: true,
  },
  {
    role: "Full-Stack Developer",
    company: "Farmsell",
    url: "https://farmsell.org",
    period: "2023 — Present",
    type: "Core Engineer",
    description: "Built the full Farmsell agricultural marketplace platform from scratch — eliminating middlemen and connecting farmers directly to buyers across East Africa. Helped reduce post-harvest losses by 15%.",
    achievements: [
      "500+ verified buyers onboarded",
      "15% reduction in post-harvest losses",
      "Full platform architecture & implementation",
    ],
    tech: ["React", "Node.js", "Supabase", "PostgreSQL", "Tailwind CSS"],
    current: true,
  },
  {
    role: "Frontend Developer",
    company: "Freelance",
    url: null,
    period: "2022 — 2023",
    type: "Independent Contractor",
    description: "Delivered responsive, high-performance websites and web apps for local businesses and startups in Uganda. Built strong foundations in React, modern CSS, and deployment workflows.",
    achievements: [
      "Built responsive sites for 10+ local businesses",
      "Mastered React, Tailwind CSS, and Vue.js",
      "Gained experience with PHP & MySQL backends",
    ],
    tech: ["React", "JavaScript", "CSS", "Vue.js", "PHP"],
    current: false,
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative py-24 md:py-32 bg-background">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <SectionHeading
          label="Work Experience"
          title="The Journey"
          description="A timeline of the companies and projects that have shaped my engineering craft."
        />

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[15px] md:left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-border/40 to-transparent" />

          <div className="space-y-0">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company + exp.role}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.15, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                className="relative pl-12 md:pl-14 pb-12 last:pb-0"
              >
                {/* Timeline node */}
                <div className="absolute left-0 top-1 flex items-center justify-center">
                  <div className={`w-8 h-8 md:w-[38px] md:h-[38px] rounded-full flex items-center justify-center border-2 ${exp.current ? "bg-primary/15 border-primary" : "bg-secondary/50 border-border"}`}>
                    <Briefcase size={13} className={exp.current ? "text-primary" : "text-muted-foreground"} />
                  </div>
                </div>

                {/* Card */}
                <div className="group glass-pane rounded-sm p-6 md:p-7 hover:border-primary/30 transition-all duration-400">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-1">
                    <div className="flex items-center gap-3">
                      <h3 className="text-lg md:text-xl font-bold text-foreground">{exp.role}</h3>
                      {exp.current && (
                        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-accent/15 border border-accent/25 text-xs font-mono text-accent">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                          Current
                        </span>
                      )}
                    </div>
                    <span className="font-mono text-xs text-muted-foreground tracking-wider shrink-0">{exp.period}</span>
                  </div>

                  {/* Company */}
                  <div className="flex items-center gap-2 mb-4">
                    {exp.url ? (
                      <a
                        href={exp.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-sm text-primary hover:text-primary/80 transition-colors flex items-center gap-1.5 group/link"
                      >
                        {exp.company}
                        <ExternalLink size={11} className="opacity-0 group-hover/link:opacity-100 transition-opacity" />
                      </a>
                    ) : (
                      <span className="font-mono text-sm text-muted-foreground">{exp.company}</span>
                    )}
                    <span className="text-border">·</span>
                    <span className="text-xs text-muted-foreground">{exp.type}</span>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">{exp.description}</p>

                  {/* Achievements */}
                  <ul className="space-y-1.5 mb-5">
                    {exp.achievements.map((a) => (
                      <li key={a} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <span className="text-primary mt-1 text-xs">▸</span>
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 text-xs font-mono text-muted-foreground bg-secondary/40 rounded-sm border border-border/30"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}