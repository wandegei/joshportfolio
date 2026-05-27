import { motion } from "framer-motion";
import { ArrowRight, Clock, Tag } from "lucide-react";
import SectionHeading from "./SectionHeading";

const posts = [
  {
    slug: "building-farmsell",
    title: "How We Built Farmsell: Lessons from an AgriTech Marketplace",
    excerpt: "From idea to 500+ users  the architecture decisions, mistakes, and wins from building a full-stack agricultural platform for East Africa.",
    date: "2024-03-10",
    readTime: "8 min read",
    tags: ["React", "Supabase", "Architecture"],
    color: "text-accent",
    bg: "bg-accent/10",
    border: "border-accent/20",
  },
  {
    slug: "react-performance",
    title: "10 React Performance Tricks That Actually Matter",
    excerpt: "Lazy loading, memoization, bundle splitting  I break down the optimizations that gave our production app a 60% faster load time.",
    date: "2024-02-18",
    readTime: "6 min read",
    tags: ["React", "Performance", "TypeScript"],
    color: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/20",
  },
  {
    slug: "freelancing-uganda",
    title: "Freelancing as a Software Engineer in Uganda: My First Year",
    excerpt: "Landing international clients, pricing your work, managing timezones  the unfiltered reality of tech freelancing from East Africa.",
    date: "2024-01-05",
    readTime: "5 min read",
    tags: ["Career", "Freelancing", "Africa"],
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
    border: "border-yellow-400/20",
  },
  {
    slug: "supabase-vs-firebase",
    title: "Supabase vs Firebase: Which One for Your Next Project?",
    excerpt: "I've shipped production apps on both. Here's an honest comparison of pricing, DX, and scaling  so you can make the right call.",
    date: "2023-12-12",
    readTime: "7 min read",
    tags: ["Supabase", "Firebase", "Backend"],
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    border: "border-purple-400/20",
  },
];

function formatDate(d) {
  return new Date(d).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}

function BlogCard({ post, index, featured }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={`group glass-pane rounded-sm border ${post.border} p-6 flex flex-col gap-4 cursor-pointer hover:border-opacity-60 transition-all duration-300 ${featured ? "md:col-span-2" : ""}`}
    >
      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {post.tags.map((t) => (
          <span key={t} className={`flex items-center gap-1 px-2 py-0.5 text-[10px] font-mono uppercase tracking-widest rounded-sm ${post.bg} ${post.color}`}>
            <Tag size={9} />{t}
          </span>
        ))}
      </div>

      <h3 className={`font-bold text-foreground leading-snug group-hover:${post.color} transition-colors duration-200 ${featured ? "text-xl md:text-2xl" : "text-base"}`}>
        {post.title}
      </h3>

      <p className="text-muted-foreground text-sm leading-relaxed flex-1">{post.excerpt}</p>

      <div className="flex items-center justify-between pt-2 border-t border-border/20">
        <div className="flex items-center gap-3 text-xs text-muted-foreground font-mono">
          <span>{formatDate(post.date)}</span>
          <span>·</span>
          <span className="flex items-center gap-1"><Clock size={10} />{post.readTime}</span>
        </div>
        <span className={`flex items-center gap-1 text-xs font-semibold ${post.color} group-hover:gap-2 transition-all duration-200`}>
          Read <ArrowRight size={12} />
        </span>
      </div>
    </motion.article>
  );
}

export default function BlogSection() {
  return (
    <section id="blog" className="relative py-24 md:py-32 bg-background overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[25vw] bg-primary/4 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <SectionHeading
          label="Blog"
          title="Technical Insights"
          description="Thoughts on software engineering, career, and building products from Uganda."
        />

        <div className="grid md:grid-cols-2 gap-5">
          {posts.map((post, i) => (
            <BlogCard key={post.slug} post={post} index={i} featured={i === 0} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 text-center"
        >
          <p className="font-mono text-xs text-muted-foreground">
            More articles coming soon  follow me on{" "}
            <a href="https://www.linkedin.com/in/wandegei-joshua-8284b9247/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">LinkedIn</a>
            {" "}for updates.
          </p>
        </motion.div>
      </div>
    </section>
  );
}