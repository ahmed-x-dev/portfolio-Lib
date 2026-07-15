import type { Project } from "../types/project";

export async function fetchGithubProjects(): Promise<Project[]> {
  const res = await fetch("https://api.github.com/users/Ahmed-x-dev/repos");

  if (!res.ok) {
    throw new Error("Failed to fetch projects.");
  }

  const data = await res.json();

  return data
    .filter((project: Project) => project.name !== "ahmed-x-dev")
    .map((project: Project) => ({
      id: project.id,
      name: project.name,
      description: project.description,
      html_url: project.html_url,
    }));
}
