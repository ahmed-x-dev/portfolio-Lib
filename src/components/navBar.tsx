import { NavLink } from "react-router-dom";
import { FaHome, FaCode, FaFolder, FaUser, FaFileAlt } from "react-icons/fa";
import type { IconType } from "react-icons";

type NavItem = {
  path: string;
  label: string;
  icon: IconType;
};

const navItems: NavItem[] = [
  { path: "/", label: "Home", icon: FaHome },
  { path: "/about", label: "About Me", icon: FaUser },
  { path: "/skills", label: "Technical Skills", icon: FaCode },
  { path: "/projects", label: "Projects", icon: FaFolder },
  { path: "/resume", label: "Resume", icon: FaFileAlt },
];

export default function NavBar() {
  return (
    <nav className="flex flex-col gap-2 min-w-50">
      {navItems.map(({ path, label, icon: Icon }) => (
        <NavLink
          key={path}
          to={path}
          end={path === "/"}
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2 rounded-lg transition-colors
            ${
              isActive
                ? "bg-[#021527] text-white dark:bg-white dark:text-black"
                : "bg-[#e8e9ee] hover:bg-neutral-200 dark:bg-neutral-900 dark:text-gray-300 dark:hover:bg-neutral-800"
            }`
          }
        >
          <Icon />
          <span>{label}</span>
        </NavLink>
      ))}
    </nav>
  );
}
