import React from "react";

const Skills: React.FC = () => {
  const skills = [
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Vite",
    "REST APIs",
    "ASP.NET Integration",
    "SQL",
  ];

  return (
    <section id="skills" className="py-12 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-6">Skills</h2>
        <div className="flex flex-wrap gap-3">
          {skills.map((s) => (
            <span
              key={s}
              className="px-3 py-1 rounded-full bg-gray-800 border border-gray-700 text-sm"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
