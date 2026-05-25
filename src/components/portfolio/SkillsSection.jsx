import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

// SVG icon paths for each tech — inline for zero external deps
const SKILLS = [
  {
    name: "React",
    color: "#61DAFB",
    bg: "bg-[#61DAFB]/10",
    border: "border-[#61DAFB]/20",
    icon: (
      <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none">
        <ellipse cx="20" cy="20" rx="18" ry="7" stroke="#61DAFB" strokeWidth="1.8" fill="none"/>
        <ellipse cx="20" cy="20" rx="18" ry="7" stroke="#61DAFB" strokeWidth="1.8" fill="none" transform="rotate(60 20 20)"/>
        <ellipse cx="20" cy="20" rx="18" ry="7" stroke="#61DAFB" strokeWidth="1.8" fill="none" transform="rotate(120 20 20)"/>
        <circle cx="20" cy="20" r="2.5" fill="#61DAFB"/>
      </svg>
    ),
  },
  {
    name: "Next.js",
    color: "#ffffff",
    bg: "bg-white/10",
    border: "border-white/20",
    icon: (
      <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none">
        <circle cx="20" cy="20" r="16" stroke="white" strokeWidth="1.8"/>
        <path d="M14 26V14l14 14V14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: "TypeScript",
    color: "#3178C6",
    bg: "bg-[#3178C6]/10",
    border: "border-[#3178C6]/20",
    icon: (
      <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none">
        <rect x="4" y="4" width="32" height="32" rx="4" fill="#3178C6" fillOpacity="0.15" stroke="#3178C6" strokeWidth="1.5"/>
        <text x="7" y="28" fontSize="16" fontWeight="bold" fill="#3178C6" fontFamily="monospace">TS</text>
      </svg>
    ),
  },
  {
    name: "JavaScript",
    color: "#F7DF1E",
    bg: "bg-[#F7DF1E]/10",
    border: "border-[#F7DF1E]/20",
    icon: (
      <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none">
        <rect x="4" y="4" width="32" height="32" rx="3" fill="#F7DF1E" fillOpacity="0.12" stroke="#F7DF1E" strokeWidth="1.5"/>
        <text x="7" y="28" fontSize="15" fontWeight="bold" fill="#F7DF1E" fontFamily="monospace">JS</text>
      </svg>
    ),
  },
  {
    name: "Node.js",
    color: "#339933",
    bg: "bg-[#339933]/10",
    border: "border-[#339933]/20",
    icon: (
      <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none">
        <polygon points="20,4 34,12 34,28 20,36 6,28 6,12" stroke="#339933" strokeWidth="1.8" fill="none"/>
        <text x="10" y="25" fontSize="10" fontWeight="bold" fill="#339933" fontFamily="monospace">node</text>
      </svg>
    ),
  },
  {
    name: "Tailwind",
    color: "#06B6D4",
    bg: "bg-[#06B6D4]/10",
    border: "border-[#06B6D4]/20",
    icon: (
      <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none">
        <path d="M10 18c2-8 8-10 12-8-1.5 4-4 6-7 6 2 0 8-2 10 6-2 8-8 10-12 8 1.5-4 4-6 7-6-2 0-8 2-10-6z" fill="#06B6D4" fillOpacity="0.8"/>
      </svg>
    ),
  },
  {
    name: "Supabase",
    color: "#3ECF8E",
    bg: "bg-[#3ECF8E]/10",
    border: "border-[#3ECF8E]/20",
    icon: (
      <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none">
        <path d="M22 5L8 23h13v12l14-18H22V5z" fill="#3ECF8E" fillOpacity="0.8" stroke="#3ECF8E" strokeWidth="1"/>
      </svg>
    ),
  },
  {
    name: "PostgreSQL",
    color: "#4169E1",
    bg: "bg-[#4169E1]/10",
    border: "border-[#4169E1]/20",
    icon: (
      <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none">
        <ellipse cx="20" cy="13" rx="12" ry="6" stroke="#4169E1" strokeWidth="1.8"/>
        <path d="M8 13v14c0 3.3 5.4 6 12 6s12-2.7 12-6V13" stroke="#4169E1" strokeWidth="1.8"/>
        <path d="M8 20c0 3.3 5.4 6 12 6s12-2.7 12-6" stroke="#4169E1" strokeWidth="1.5" strokeDasharray="3 2"/>
      </svg>
    ),
  },
  {
    name: "PHP",
    color: "#777BB4",
    bg: "bg-[#777BB4]/10",
    border: "border-[#777BB4]/20",
    icon: (
      <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none">
        <ellipse cx="20" cy="20" rx="16" ry="9" stroke="#777BB4" strokeWidth="1.8"/>
        <text x="11" y="25" fontSize="13" fontWeight="bold" fill="#777BB4" fontFamily="monospace">php</text>
      </svg>
    ),
  },
  {
    name: "Vue.js",
    color: "#42B883",
    bg: "bg-[#42B883]/10",
    border: "border-[#42B883]/20",
    icon: (
      <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none">
        <polygon points="20,34 4,8 11,8 20,22 29,8 36,8" fill="#42B883" fillOpacity="0.8"/>
        <polygon points="20,24 11,8 14.5,8 20,18 25.5,8 29,8" fill="#35495e" fillOpacity="0.6"/>
      </svg>
    ),
  },
  {
    name: "Git",
    color: "#F05032",
    bg: "bg-[#F05032]/10",
    border: "border-[#F05032]/20",
    icon: (
      <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none">
        <circle cx="28" cy="12" r="4" stroke="#F05032" strokeWidth="1.8"/>
        <circle cx="12" cy="28" r="4" stroke="#F05032" strokeWidth="1.8"/>
        <circle cx="28" cy="28" r="4" stroke="#F05032" strokeWidth="1.8"/>
        <path d="M28 16v8M16 28h8M12 24v-8a4 4 0 0 1 4-4h8" stroke="#F05032" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "Figma",
    color: "#F24E1E",
    bg: "bg-[#F24E1E]/10",
    border: "border-[#F24E1E]/20",
    icon: (
      <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none">
        <rect x="12" y="4" width="8" height="8" rx="2" fill="#F24E1E" fillOpacity="0.7"/>
        <rect x="20" y="4" width="8" height="8" rx="2" fill="#FF7262" fillOpacity="0.7"/>
        <rect x="12" y="12" width="8" height="8" rx="2" fill="#A259FF" fillOpacity="0.7"/>
        <rect x="12" y="20" width="8" height="8" rx="2" fill="#1ABCFE" fillOpacity="0.7"/>
        <circle cx="24" cy="24" r="4" fill="#0ACF83" fillOpacity="0.7"/>
      </svg>
    ),
  },
];

const CATEGORIES = [
  {
    label: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "Vue.js", "Tailwind"],
    color: "text-primary",
  },
  {
    label: "Backend & Data",
    skills: ["Node.js", "Supabase", "PostgreSQL", "PHP"],
    color: "text-accent",
  },
  {
    label: "Tooling",
    skills: ["Git", "Figma"],
    color: "text-yellow-400",
  },
];

export default function SkillsSection() {
  const skillMap = Object.fromEntries(SKILLS.map((s) => [s.name, s]));

  return (
    <section id="skills" className="relative py-24 md:py-32 bg-background overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[30vw] bg-primary/4 blur-[200px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <SectionHeading
          label="Skills & Technologies"
          title="Tech Arsenal"
          description="The tools I use to build scalable, production-grade software end-to-end."
        />

        <div className="space-y-14">
          {CATEGORIES.map((cat, ci) => (
            <div key={cat.label}>
              <motion.p
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: ci * 0.1, duration: 0.5 }}
                className={`font-mono text-xs tracking-widest uppercase mb-6 ${cat.color}`}
              >
                // {cat.label}
              </motion.p>
              <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.07, delayChildren: ci * 0.12 } },
                }}
              >
                {cat.skills.map((name) => {
                  const skill = skillMap[name];
                  if (!skill) return null;
                  return (
                    <motion.div
                      key={name}
                      variants={{
                        hidden: { opacity: 0, y: 28, scale: 0.88 },
                        visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
                      }}
                      whileHover={{
                        y: -6,
                        scale: 1.06,
                        transition: { duration: 0.22, ease: "easeOut" },
                      }}
                      className={`group relative flex flex-col items-center gap-3 p-5 rounded-sm border ${skill.bg} ${skill.border} cursor-default overflow-hidden`}
                    >
                      {/* glow on hover */}
                      <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-sm pointer-events-none"
                        style={{ boxShadow: `inset 0 0 30px ${skill.color}18` }}
                      />
                      <motion.div
                        whileHover={{ rotate: [0, -8, 8, 0], scale: 1.15 }}
                        transition={{ duration: 0.4 }}
                        className="relative z-10"
                      >
                        {skill.icon}
                      </motion.div>
                      <span
                        className="relative z-10 text-xs font-mono font-semibold tracking-wide"
                        style={{ color: skill.color }}
                      >
                        {name}
                      </span>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          ))}
        </div>

        {/* Extra text skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 glass-pane rounded-sm p-6 md:p-8"
        >
          <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-4">// Also proficient in</p>
          <motion.div
            className="flex flex-wrap gap-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.04, delayChildren: 0.1 } } }}
          >
            {["REST APIs", "MySQL", "Vercel", "SEO", "Responsive Design", "Agile", "UI/UX Design", "Performance Optimization", "API Integration", "Linux"].map((s) => (
              <motion.span
                key={s}
                variants={{ hidden: { opacity: 0, scale: 0.85 }, visible: { opacity: 1, scale: 1 } }}
                whileHover={{ scale: 1.08, transition: { duration: 0.15 } }}
                className="px-4 py-2 text-xs font-mono text-muted-foreground bg-secondary/40 rounded-sm border border-border/40 hover:border-primary/40 hover:text-foreground transition-colors duration-300 cursor-default"
              >
                {s}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}