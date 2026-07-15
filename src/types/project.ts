export type Project = {
  id: number;
  name: string;
  description: string;
  html_url: string;
};

export type ProjectCardProps = {
  projects: Project[];
  loading: boolean;
  error: string;
};
