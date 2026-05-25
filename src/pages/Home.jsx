import { useEffect } from "react";
import Navbar from "../components/portfolio/Navbar";
import HeroSection from "../components/portfolio/HeroSection";
import AboutSection from "../components/portfolio/AboutSection";
import SkillsSection from "../components/portfolio/SkillsSection";
import ProjectsSection from "../components/portfolio/ProjectsSection";
import ExperienceSection from "../components/portfolio/ExperienceSection";
import TestimonialsSection from "../components/portfolio/TestimonialsSection";
import ContactSection from "../components/portfolio/ContactSection";
import Footer from "../components/portfolio/Footer";
import FloatingWhatsApp from "../components/portfolio/FloatingWhatsApp";
import BlogSection from "../components/portfolio/BlogSection";
import { analytics } from "@/lib/analytics";

const HERO_IMAGE = "https://media.base44.com/images/public/6a06cded1e63570267c39f75/220b32837_generated_f5707ebd.png";
const ABOUT_IMAGE = "https://media.base44.com/images/public/6a06cded1e63570267c39f75/a682bfb6c_generated_80c0c72f.png";

const projects = [
  {
    title: "Farmsell",
    description: "A full-stack agricultural marketplace that connects farmers directly to buyers — eliminating middlemen and reducing post-harvest losses by 15%. Built for scale with 500+ verified buyers across East Africa.",
    tech: ["React", "Node.js", "Tailwind CSS", "Supabase", "TypeScript"],
    image: "https://media.base44.com/images/public/6a06cded1e63570267c39f75/ff1306354_generated_image.png",
    liveUrl: "https://farmsell.org",
    githubUrl: "https://github.com/wandegei",
  },
  {
    title: "Tallen Tech",
    description: "A professional web development agency platform offering custom-built solutions for businesses, schools, NGOs, and techpreneurs. 100+ happy clients, 150+ projects delivered with zero templates.",
    tech: ["Next.js", "React", "Tailwind CSS", "JavaScript", "PHP"],
    image: "https://media.base44.com/images/public/6a06cded1e63570267c39f75/87a157de0_generated_image.png",
    liveUrl: "https://tallen.tech/",
    githubUrl: "https://github.com/wandegei/Tallenweb",
  },
];

export default function Home() {
  useEffect(() => { analytics.trackPageView(); }, []);

  return (
    <div className="bg-background text-foreground font-inter min-h-screen">
      <Navbar />
      <HeroSection heroImage={HERO_IMAGE} />
      <AboutSection aboutImage={ABOUT_IMAGE} />
      <ProjectsSection projects={projects} />
      <SkillsSection />
      <ExperienceSection />
      <TestimonialsSection />
      <BlogSection />
      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}