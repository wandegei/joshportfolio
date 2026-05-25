import { motion } from "framer-motion";

export default function SectionHeading({ label, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="mb-16 md:mb-20"
    >
      <span className="font-mono text-primary text-sm tracking-widest uppercase mb-4 block">
        // {label}
      </span>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}