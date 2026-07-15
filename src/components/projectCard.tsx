import type { ProjectCardProps } from "../types/project";

export default function ProjectCard({
  projects,
  loading,
  error,
}: ProjectCardProps) {
  if (loading) {
    return (
      <div className="flex h-60 items-center justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-500 border-t-transparent" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-60 items-center justify-center text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className="bg-[#FFFFFF] dark:bg-[#2a2a2a] p-4 rounded-lg overflow-y-auto pr-2 self-start w-full ">
      <h1 className="text-2xl font-bold mb-4  ">Github Repositories</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {projects.map((project) => (
          <a
            key={project.id}
            href={project.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border p-6 text-center transition-all duration-200 cursor-pointer
                border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {project.name}
          </a>
        ))}
      </div>
    </div>
  );
}
