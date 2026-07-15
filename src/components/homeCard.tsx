import type { CardProps } from "../types/sections";

export default function Card({ onNavigate }: CardProps) {
  return (
    <section
      id="home"
      className="flex flex-col self-start  gap-4 rounded-lg bg-white p-4 shadow-md dark:bg-[#2a2a2a]"
    >
      <div className="flex flex-col gap-2">
        <p className="text-sm font-semibold text-[#185FA5]">
          Full-Stack Developer
        </p>

        <h1 className="text-2xl font-bold text-[#1a1a1a] dark:text-[#f0f0f0]">
          Hi, I'm Ahmed — I build full-stack applications using modern
          technologies.
        </h1>

        <p className="text-gray-600 dark:text-gray-400">
          HTML | CSS | JavaScript | TypeScript | Node.js | Express.js | Python |
          FastAPI | PostgreSQL | Git | GitHub
        </p>
      </div>

      <div className="mt-4 flex gap-4">
        <button
          onClick={() => onNavigate("resume")}
          className="cursor-pointer rounded-md border border-[#1a1a1aa4] px-4 py-2 transition-colors duration-300 hover:bg-[#185FA5] hover:text-white dark:border-[#f0f0f0a9]"
        >
          View resume
        </button>

        <button
          onClick={() => onNavigate("about")}
          className="cursor-pointer rounded-md border border-[#1a1a1a] bg-[#2a2a2a] px-4 py-2 text-[#f0f0f0] dark:bg-[#f0f0f0] dark:text-[#1a1a1a]"
        >
          About Me
        </button>
      </div>
    </section>
  );
}
