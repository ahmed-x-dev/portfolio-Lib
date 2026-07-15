import { FaHome, FaCode, FaFolder, FaUser, FaFileAlt } from "react-icons/fa";
import type { Section } from "../types/sections";
import type { IconType } from "react-icons";

type NavItem = {
  id: Section;
  label: string;
  icon: IconType;
};

const navItems: NavItem[] = [
  { id: "home", label: "Home", icon: FaHome },
  { id: "about", label: "About Me", icon: FaUser },
  { id: "skills", label: "Technical Skills", icon: FaCode },
  { id: "projects", label: "Projects", icon: FaFolder },
  { id: "resume", label: "Resume", icon: FaFileAlt },
];

type NavBarProps = {
  activeSection: Section;
  onSectionChange: (section: Section) => void;
};

export default function NavBar({
  activeSection,
  onSectionChange,
}: NavBarProps) {
  return (
    <nav className="flex flex-col gap-2 min-w-50">
      {navItems.map(({ id, label, icon: Icon }) => (
        <button
          key={id}
          onClick={() => onSectionChange(id)}
          className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-colors
            ${
              activeSection === id
                ? "bg-[#021527] text-white dark:bg-white dark:text-black"
                : "bg-[#e8e9ee] hover:bg-neutral-200 dark:bg-neutral-900 dark:text-gray-300 dark:hover:bg-neutral-800"
            }`}
        >
          <Icon />
          <span>{label}</span>
        </button>
      ))}
    </nav>
  );
}
