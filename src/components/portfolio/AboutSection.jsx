import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Code2, Zap, Globe } from "lucide-react";

const stats = [
  { value: "2+", label: "Years Experience" },
  { value: "2+", label: "Live Projects" },
  { value: "100+", label: "Happy Clients" },
  { value: "100%", label: "Commitment" },
];

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    desc: "Writing maintainable, well-structured code that scales — built on SOLID principles and modern best practices.",
  },
  {
    icon: Zap,
    title: "Performance First",
    desc: "Every project I ship is optimized for speed, accessibility, and buttery-smooth user experiences.",
  },
  {
    icon: Globe,
    title: "Full-Stack Vision",
    desc: "From backend APIs and database design to pixel-perfect frontends — I handle the full delivery pipeline.",
  },
];

export default function AboutSection({ aboutImage }) {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <SectionHeading
          label="About Me"
          title="Who I Am"
          description="A software engineer from Uganda building digital products that matter."
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-sm">
              <img
                src={aboutImage}
                alt="Abstract precision engineering visualization"
                className="w-full h-auto object-cover aspect-[4/3]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-primary/20 rounded-sm -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              I'm <span className="text-foreground font-semibold">Joshua Wandegei</span>, a software 
              engineer based in Wakiso, Uganda, passionate about building web applications that 
              solve real-world problems. I specialize in React, Next.js, TypeScript, Node.js, 
              and Supabase — delivering end-to-end solutions from concept to deployment.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              I co-built <span className="text-primary font-semibold">Farmsell</span> — an 
              agricultural marketplace transforming how farmers sell their produce across East Africa 
              — and <span className="text-primary font-semibold">Tallen Tech</span>, a web development 
              agency delivering custom digital solutions. I believe great software should be 
              invisible — intuitive, fast, and reliable.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-10">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="text-center lg:text-left"
                >
                  <div className="text-3xl font-black text-foreground">{stat.value}</div>
                  <div className="text-xs font-mono text-muted-foreground mt-1 tracking-wide uppercase">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://www.linkedin.com/in/wandegei-joshua-8284b9247/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-primary text-primary-foreground text-sm font-semibold rounded-sm hover:bg-primary/90 transition-all duration-300 text-center"
              >
                View LinkedIn
              </a>
              <a
                href="https://github.com/wandegei"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-border text-foreground text-sm font-semibold rounded-sm hover:border-primary/50 hover:text-primary transition-all duration-300 text-center"
              >
                GitHub Profile
              </a>
            </div>
          </motion.div>
        </div>

        {/* Highlight cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-16 md:mt-24">
          {highlights.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i, duration: 0.6 }}
              className="glass-pane rounded-sm p-8 group transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <Icon size={22} className="text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}