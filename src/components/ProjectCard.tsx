import React from "react";

export type ProjectCardProps = {
  title: string;
  description: string;
  tags: string[];
  link?: string;
};

const ProjectCard: React.FC<{ project: ProjectCardProps }> = ({ project }) => {
  return (
    <article className="bg-gray-800 rounded-2xl p-4 shadow hover:shadow-lg transition">
      <div className="h-40 rounded-lg mb-4 bg-gradient-to-tr from-yellow-400 to-pink-500 flex items-center justify-center text-white font-bold">
        {project.title}
      </div>

      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
      <p className="text-gray-300 text-sm mb-4">{project.description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((t) => (
          <span
            key={t}
            className="text-xs px-2 py-1 rounded bg-gray-700/60 text-gray-200"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="flex gap-3">
        {project.link ? (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="text-sm underline text-yellow-400"
          >
            Live
          </a>
        ) : (
          <span className="text-sm text-gray-400">Demo coming</span>
        )}
      </div>
    </article>
  );
};

export default ProjectCard;
