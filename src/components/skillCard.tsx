import { useState } from "react";
import type { SkillType } from "../types/skill";

export default function SkillsGrid({ skills }: { skills: SkillType[] }) {
  const [selectedSkill, setSelectedSkill] = useState<SkillType | null>(null);

  return (
    <div className="flex h-full w-full rounded-lg bg-[#FFFFFF] dark:bg-[#2a2a2a] p-5 shadow-md">
      {/* Skills Section */}
      <section className="flex-3 overflow-y-auto pr-2">
        <h2 className="mb-4 text-2xl font-bold">Skills:-</h2>

        <div className="gap-2 grid grid-cols-1 sm:grid-cols-3  md:grid-cols-4 lg:grid-cols-5pr-2">
          {skills.map((skill) => (
            <button
              key={skill.name}
              onClick={() => setSelectedSkill(skill)}
              className={`rounded-lg border p-6 text-center transition-all duration-200 cursor-pointer
                ${
                  selectedSkill?.name === skill.name
                    ? "border-blue-500 bg-blue-100 dark:bg-blue-900"
                    : "border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
            >
              {skill.name}
            </button>
          ))}
        </div>
      </section>
      {/* vertical line */}
      <div className="w-px bg-gray-300 dark:bg-gray-700 mx-2"></div>
      {/* Tutorials Section */}
      <section className="flex-1 overflow-y-auto pr-2 sm:">
        {selectedSkill ? (
          <>
            <h2 className="mb-6 text-3xl font-bold">{selectedSkill.name}</h2>

            <div className="flex flex-col gap-3 pr-2">
              {selectedSkill.tutorials.map((tutorial, index) => (
                <a
                  key={index}
                  href={tutorial.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md border border-gray-300 dark:border-gray-700 p-4 transition hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  {tutorial.name}
                </a>
              ))}
            </div>
          </>
        ) : (
          <div className="flex h-full min-h-75 items-center justify-center text-gray-500">
            Select a skill to view its tutorials.
          </div>
        )}
      </section>
    </div>
  );
}
