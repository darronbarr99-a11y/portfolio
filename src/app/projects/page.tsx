import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "Project One",
    description:
      "A brief description of what this project does, the problem it solves, and any notable features or results.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/yourusername/project-one",
  },
  {
    title: "Project Two",
    description:
      "A brief description of what this project does, the problem it solves, and any notable features or results.",
    tags: ["React", "Node.js", "PostgreSQL"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/yourusername/project-two",
  },
  {
    title: "Project Three",
    description:
      "A brief description of what this project does, the problem it solves, and any notable features or results.",
    tags: ["Python", "FastAPI", "Docker"],
    repoUrl: "https://github.com/yourusername/project-three",
  },
];

export default function Projects() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24">
      <h1 className="mb-4 text-4xl font-bold text-white">Projects</h1>
      <p className="mb-12 text-gray-400">
        A selection of things I&apos;ve built. Replace these with your own work.
      </p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
