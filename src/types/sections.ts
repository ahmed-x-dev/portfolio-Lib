export type Section = "home" | "skills" | "projects" | "about" | "resume";

export type CardProps = {
  onNavigate: (section: Section) => void;
};
