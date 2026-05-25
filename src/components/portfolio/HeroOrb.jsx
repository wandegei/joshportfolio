import { motion } from "framer-motion";

// Animated geometric abstract — orbiting rings + floating nodes
export default function HeroOrb() {
  const nodes = [
    { cx: "50%", cy: "20%", r: 4, delay: 0 },
    { cx: "80%", cy: "50%", r: 3, delay: 0.4 },
    { cx: "60%", cy: "80%", r: 5, delay: 0.8 },
    { cx: "20%", cy: "65%", r: 3, delay: 1.2 },
    { cx: "30%", cy: "30%", r: 4, delay: 0.6 },
  ];

  const lines = [
    { x1: "50%", y1: "20%", x2: "80%", y2: "50%" },
    { x1: "80%", y1: "50%", x2: "60%", y2: "80%" },
    { x1: "60%", y1: "80%", x2: "20%", y2: "65%" },
    { x1: "20%", y1: "65%", x2: "30%", y2: "30%" },
    { x1: "30%", y1: "30%", x2: "50%", y2: "20%" },
    { x1: "50%", y1: "20%", x2: "60%", y2: "80%" },
    { x1: "30%", y1: "30%", x2: "80%", y2: "50%" },
  ];

  return (
    <div className="absolute right-0 top-0 w-[50vw] h-full pointer-events-none hidden lg:block overflow-hidden">
      {/* Outer glow blob */}
      <div className="absolute right-[-10%] top-[10%] w-[500px] h-[500px] rounded-full bg-primary/6 blur-[120px] animate-pulse-glow" />

      {/* Rotating outer ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute right-[8%] top-1/2 -translate-y-1/2 w-[380px] h-[380px]"
      >
        <svg viewBox="0 0 380 380" className="w-full h-full opacity-15">
          <circle cx="190" cy="190" r="180" stroke="url(#ring1)" strokeWidth="1" fill="none" strokeDasharray="8 12" />
          <defs>
            <linearGradient id="ring1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#10b981" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Counter-rotating inner ring */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute right-[8%] top-1/2 -translate-y-1/2 w-[260px] h-[260px]"
        style={{ marginRight: "60px" }}
      >
        <svg viewBox="0 0 260 260" className="w-full h-full opacity-20">
          <circle cx="130" cy="130" r="120" stroke="url(#ring2)" strokeWidth="1" fill="none" strokeDasharray="4 8" />
          <defs>
            <linearGradient id="ring2" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#60a5fa" />
              <stop offset="100%" stopColor="#34d399" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Geometric graph — nodes + connecting lines */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1.5 }}
        className="absolute right-[5%] top-1/2 -translate-y-1/2 w-[400px] h-[400px]"
      >
        <svg viewBox="0 0 400 400" className="w-full h-full">
          {/* Lines */}
          {lines.map((l, i) => (
            <motion.line
              key={i}
              x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2}
              stroke="#3b82f6"
              strokeWidth="0.8"
              strokeOpacity="0.25"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 0.8 + i * 0.15, duration: 1, ease: "easeOut" }}
            />
          ))}

          {/* Nodes */}
          {nodes.map((n, i) => (
            <motion.g key={i}>
              {/* Outer pulse ring */}
              <motion.circle
                cx={n.cx} cy={n.cy} r={n.r * 3}
                fill="none"
                stroke="#3b82f6"
                strokeWidth="0.8"
                strokeOpacity="0.15"
                animate={{ r: [n.r * 2.5, n.r * 4, n.r * 2.5] }}
                transition={{ delay: n.delay, duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              {/* Core dot */}
              <motion.circle
                cx={n.cx} cy={n.cy} r={n.r}
                fill="#3b82f6"
                fillOpacity="0.8"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6 + i * 0.12, duration: 0.5, type: "spring" }}
              />
            </motion.g>
          ))}

          {/* Central glowing core */}
          <motion.circle
            cx="50%" cy="50%" r="8"
            fill="url(#core)"
            animate={{ r: [7, 10, 7] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.circle
            cx="50%" cy="50%" r="20"
            fill="none"
            stroke="#3b82f6"
            strokeOpacity="0.2"
            strokeWidth="1"
            animate={{ r: [18, 28, 18] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />

          <defs>
            <radialGradient id="core" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#60a5fa" stopOpacity="1" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.5" />
            </radialGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Floating tech labels */}
      {[
        { label: "React", x: "right-[28%]", y: "top-[22%]", delay: 1.2 },
        { label: "Next.js", x: "right-[8%]", y: "top-[42%]", delay: 1.5 },
        { label: "TypeScript", x: "right-[20%]", y: "bottom-[22%]", delay: 1.8 },
      ].map(({ label, x, y, delay }) => (
        <motion.span
          key={label}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay, duration: 0.5 }}
          className={`absolute ${x} ${y} font-mono text-xs text-primary/60 border border-primary/20 bg-primary/5 px-2.5 py-1 rounded-sm backdrop-blur-sm`}
        >
          {label}
        </motion.span>
      ))}
    </div>
  );
}