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
      {/* BACKGROUND GLOWS */}
      <div className="absolute top-[-10%] left-[-10%] w-[35rem] h-[35rem] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="absolute bottom-[-15%] right-[-10%] w-[28rem] h-[28rem] bg-accent/10 blur-[100px] rounded-full pointer-events-none" />

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

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-20 sm:pt-24 lg:pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-14 xl:gap-24 items-center">

          {/* TEXT CONTENT FIRST ON SMALL SCREENS */}
          <div className="order-1 lg:order-1">
            {/* BADGE */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="
                inline-flex
                items-center
                gap-2
                px-4
                py-2
                rounded-full
                border
                border-primary/20
                bg-primary/10
                backdrop-blur-xl
                mb-6
              "
            >
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />

              <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.14em] uppercase text-primary">
                Available for new projects
              </span>
            </motion.div>

            {/* HEADING */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.1,
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mb-5"
            >
              <h1
                className="
                  leading-[0.9]
                  font-black
                  tracking-[-0.05em]
                  text-[2.5rem]
                  xs:text-[2.8rem]
                  sm:text-[4rem]
                  md:text-[5rem]
                  lg:text-[6rem]
                "
              >
                <span className="block text-foreground">
                  JOSHUA
                </span>

                <span className="block text-gradient">
                  WANDEGEI
                </span>
              </h1>
            </motion.div>

            {/* TYPING ROLE */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="mb-5 min-h-[30px]"
            >
              <span
                className="
                  font-mono
                  text-sm
                  sm:text-lg
                  md:text-xl
                  font-semibold
                  bg-gradient-to-r
                  from-primary
                  to-blue-400
                  bg-clip-text
                  text-transparent
                "
              >
                {displayed}

                <span className="inline-block w-[2px] h-4 sm:h-5 bg-primary ml-1 animate-pulse align-middle" />
              </span>
            </motion.div>

            {/* LOCATION */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
              className="flex items-center gap-2 mb-7"
            >
              <MapPin
                size={14}
                className="text-muted-foreground shrink-0"
              />

              <span className="font-mono text-xs sm:text-sm text-muted-foreground">
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
                text-sm
                sm:text-base
                md:text-lg
                leading-relaxed
                text-muted-foreground
                mb-10
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
                sm:flex-row
                sm:flex-wrap
                gap-3
                mb-12
              "
            >
              {/* VIEW WORK */}
              <a
                href="https://farmsell.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  w-full
                  sm:w-auto
                  h-12
                  px-6
                  rounded-2xl
                  bg-primary
                  text-primary-foreground
                  text-sm
                  font-semibold
                  flex
                  items-center
                  justify-center
                  gap-2
                  shadow-lg
                  hover:bg-primary/90
                  transition-all
                  duration-300
                "
              >
                <span>View My Work</span>

                <ExternalLink
                  size={15}
                  className="
                    transition-transform
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                />
              </a>

              {/* HIRE ME */}
              <a
                href="https://wa.me/256777829813"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-full
                  sm:w-auto
                  h-12
                  px-6
                  rounded-2xl
                  border
                  border-white/10
                  bg-card/40
                  backdrop-blur-xl
                  text-foreground
                  text-sm
                  font-semibold
                  flex
                  items-center
                  justify-center
                  hover:border-primary/40
                  hover:text-primary
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
                  w-full
                  sm:w-auto
                  h-12
                  px-6
                  rounded-2xl
                  border
                  border-emerald-500/20
                  bg-emerald-500/5
                  text-emerald-400
                  text-sm
                  font-semibold
                  flex
                  items-center
                  justify-center
                  gap-2
                  hover:bg-emerald-500/10
                  hover:border-emerald-500/40
                  transition-all
                  duration-300
                "
              >
                <Download
                  size={15}
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
              className="grid grid-cols-2 lg:grid-cols-4 gap-3"
            >
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="
                    bg-card/40
                    backdrop-blur-xl
                    border
                    border-white/5
                    rounded-2xl
                    px-4
                    py-5
                    hover:border-primary/30
                    transition-all
                    duration-300
                  "
                >
                  <div className="text-2xl sm:text-3xl font-black text-foreground">
                    {stat.value}
                  </div>

                  <div className="mt-2 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* IMAGE NOW COMES AFTER TEXT ON SMALL SCREENS */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="
              relative
              flex
              justify-center
              order-2
              lg:order-2
            "
          >
            {/* GLOW */}
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
                  w-[220px]
                  xs:w-[250px]
                  sm:w-[320px]
                  md:w-[360px]
                  xl:w-[430px]
                  h-[280px]
                  xs:h-[320px]
                  sm:h-[420px]
                  md:h-[470px]
                  xl:h-[560px]
                  object-cover
                  object-top
                  rounded-[28px]
                  border
                  border-white/10
                  shadow-[0_20px_80px_rgba(0,0,0,0.6)]
                "
              />

              
            </div>
          </motion.div>
        </div>
      </div>

      <HeroOrb />
      <SocialSidebar />
    </section>
  );
}