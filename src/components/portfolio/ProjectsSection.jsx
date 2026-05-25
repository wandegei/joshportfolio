import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection({ projects }) {
  return (
    <section id="projects" className="relative py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <SectionHeading
          label="Featured Projects"
          title="Built to Ship"
          description="A curated selection of production-grade projects that showcase real-world impact and technical depth."
        />

        <div className="flex flex-col gap-6 md:gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} featured />
          ))}
        </div>
      </div>
    </section>
  );
}