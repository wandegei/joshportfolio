import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin, ExternalLink, Download } from "lucide-react";
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

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length + 1));
      }, 60);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length - 1));
      }, 35);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-background"
    >
      {/* BACKGROUND LIGHTS */}
      <div className="absolute top-[-15%] left-[-10%] w-[45rem] h-[45rem] bg-primary/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="absolute bottom-[-20%] right-[-10%] w-[35rem] h-[35rem] bg-accent/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

      {/* GRID */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 pt-32 pb-24 lg:pt-36">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
          {/* LEFT SIDE */}
          <div>
            {/* BADGE */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="
                inline-flex
                items-center
                gap-2
                px-5
                py-2.5
                rounded-full
                border
                border-primary/20
                bg-primary/10
                backdrop-blur-xl
                mb-8
              "
            >
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />

              <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-primary">
                Available for new projects
              </span>
            </motion.div>

            {/* HEADING */}
            <div className="mb-8">
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.1,
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="
                  leading-[0.88]
                  font-black
                  tracking-[-0.05em]
                  text-[4.2rem]
                  sm:text-[5.5rem]
                  lg:text-[6.2rem]
                "
              >
                <span className="block text-foreground">
                  JOSHUA
                </span>

                <span className="block text-gradient">
                  WANDEGEI
                </span>
              </motion.h1>
            </div>

            {/* ROLE */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="mb-7"
            >
              <span
                className="
                  font-mono
                  text-lg
                  md:text-2xl
                  font-semibold
                  bg-gradient-to-r
                  from-primary
                  to-blue-400
                  bg-clip-text
                  text-transparent
                "
              >
                {displayed}

                <span className="inline-block w-[2px] h-5 md:h-6 bg-primary ml-1 animate-pulse align-middle" />
              </span>
            </motion.div>

            {/* LOCATION */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
              className="flex items-center gap-2 mb-9"
            >
              <MapPin size={15} className="text-muted-foreground" />

              <span className="font-mono text-sm tracking-wide text-muted-foreground">
                Wakiso, Uganda · Remote Available
              </span>
            </motion.div>

            {/* SUMMARY */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 }}
              className="
                max-w-xl
                text-base
                md:text-lg
                leading-relaxed
                text-muted-foreground
                mb-12
              "
            >
              Software engineer specializing in{" "}
              <span className="text-foreground font-semibold">
                React, Next.js, TypeScript & Node.js
              </span>
              .

              <br />
              <br />

              I co-built{" "}
              <span className="text-primary font-semibold">
                Farmsell
              </span>{" "}
                an agri-marketplace serving East Africa   and run{" "}
              <span className="text-primary font-semibold">
                Tallen Tech
              </span>
              , a web development agency with 150+ projects delivered.
            </motion.p>

            {/* CTA BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="
                flex
                flex-col
                md:flex-row
                flex-wrap
                items-start
                gap-4
                mb-16
              "
            >
              {/* PRIMARY */}
              <a
                href="https://farmsell.org/"
                className="
                  group
                  h-14
                  px-7
                  whitespace-nowrap
                  rounded-full
                  bg-primary
                  text-primary-foreground
                  font-semibold
                  text-sm
                  tracking-wide
                  flex
                  items-center
                  justify-center
                  gap-2
                  shadow-xl
                  hover:bg-primary/90
                  hover:scale-[1.02]
                  active:scale-[0.98]
                  transition-all
                  duration-300
                "
              >
                <span>View My Work</span>

                <ExternalLink
                  size={16}
                  className="
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                    transition-transform
                  "
                />
              </a>

              {/* SECONDARY */}
              <a
                href="https://wa.me/256777829813"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  h-14
                  px-7
                  whitespace-nowrap
                  rounded-full
                  border
                  border-white/10
                  bg-card/40
                  backdrop-blur-xl
                  text-foreground
                  font-semibold
                  text-sm
                  tracking-wide
                  flex
                  items-center
                  justify-center
                  hover:border-primary/40
                  hover:text-primary
                  hover:bg-card/70
                  hover:scale-[1.02]
                  active:scale-[0.98]
                  transition-all
                  duration-300
                "
              >
                Hire Me
              </a>

              {/* DOWNLOAD CV */}
              <a
                href="https://drive.google.com/uc?export=download&id=YOUR_GOOGLE_DRIVE_FILE_ID"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  h-14
                  px-7
                  whitespace-nowrap
                  rounded-full
                  border
                  border-emerald-500/20
                  bg-emerald-500/5
                  text-emerald-400
                  font-semibold
                  text-sm
                  tracking-wide
                  flex
                  items-center
                  justify-center
                  gap-2
                  hover:bg-emerald-500/10
                  hover:border-emerald-500/40
                  hover:scale-[1.02]
                  active:scale-[0.98]
                  transition-all
                  duration-300
                "
              >
                <Download
                  size={16}
                  className="group-hover:animate-bounce"
                />

                <span>Download CV</span>
              </a>
            </motion.div>

            {/* STATS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="
                    group
                    bg-card/40
                    backdrop-blur-xl
                    border
                    border-white/5
                    rounded-3xl
                    px-6
                    py-6
                    hover:border-primary/30
                    hover:-translate-y-1
                    transition-all
                    duration-300
                  "
                >
                  <div className="text-3xl font-black text-foreground">
                    {stat.value}
                  </div>

                  <div className="mt-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            whileHover={{ y: -6 }}
            className="relative hidden lg:flex justify-center"
          >
            {/* OUTER GLOW */}
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />

            <div className="relative">
              {/* IMAGE */}
              <img
                src="https://zgtkjrbgguphvxyvsxcr.supabase.co/storage/v1/object/public/hero%20imgae/WhatsApp%20Image%202026-05-26%20at%203.44.33%20PM.jpeg"
                alt="Joshua Wandegei"
                loading="eager"
                className="
                  relative
                  z-10
                  w-[380px]
                  xl:w-[430px]
                  h-[500px]
                  xl:h-[560px]
                  object-cover
                  object-[center_top]
                  rounded-[32px]
                  border
                  border-white/10
                  shadow-[0_20px_80px_rgba(0,0,0,0.6)]
                "
              />

              {/* DECORATIVE RING */}
              <div className="absolute -inset-4 rounded-[36px] border border-primary/20" />

              {/* EXTRA GLOW */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />

             
            </div>
          </motion.div>
        </div>
      </div>

      <HeroOrb />
      <SocialSidebar />
    </section>
  );
}