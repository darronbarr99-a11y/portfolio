const skills = [
  "TypeScript", "React", "Next.js", "Node.js",
  "Tailwind CSS", "PostgreSQL", "Git", "Figma",
];

export default function About() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24">
      <h1 className="mb-12 text-4xl font-bold text-white">About Me</h1>

      <div className="grid gap-16 md:grid-cols-2">
        {/* Bio */}
        <div className="flex flex-col gap-6">
          <p className="text-gray-400 leading-relaxed">
            I&apos;m a full-stack developer based in [Your City] with a passion
            for building products that are both beautiful and functional. I
            specialize in React and Node.js, and I care deeply about
            performance, accessibility, and clean code.
          </p>
          <p className="text-gray-400 leading-relaxed">
            When I&apos;m not coding, you can find me [your hobbies — hiking,
            reading, photography, etc.]. I&apos;m always open to new
            opportunities and collaborations.
          </p>
          <div className="pt-2">
            <a
              href="/resume.pdf"
              className="inline-block rounded-lg border border-gray-700 px-5 py-2.5 text-sm font-medium text-gray-300 transition-colors hover:border-gray-500 hover:text-white"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Skills */}
        <div>
          <h2 className="mb-6 text-lg font-semibold text-white">Skills</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-gray-700 px-4 py-1.5 text-sm text-gray-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
