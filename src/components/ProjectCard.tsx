interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
}

export default function ProjectCard({ title, description, tags, liveUrl, repoUrl }: ProjectCardProps) {
  return (
    <div className="flex flex-col gap-4 rounded-xl border border-gray-800 bg-gray-900 p-6 transition-colors hover:border-gray-700">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="flex-1 text-sm text-gray-400 leading-relaxed">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-gray-700 px-3 py-0.5 text-xs text-gray-400"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex gap-4 text-sm font-medium">
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition-colors"
          >
            Live site →
          </a>
        )}
        {repoUrl && (
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-200 transition-colors"
          >
            GitHub
          </a>
        )}
      </div>
    </div>
  );
}
