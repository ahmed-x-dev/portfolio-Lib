import { useEffect, useState } from "react";
import { fetchGithubProjects } from "../api/github";
import type { Project } from "../types/project";

export function useGithubProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function load() {
      try {
        const data = await fetchGithubProjects();
        setProjects(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Unknown error");
        }
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  return {
    projects,
    loading,
    error,
  };
}
