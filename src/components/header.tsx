import { useTheme } from "../hooks/useTheme.ts";
import { FaMoon, FaSun } from "react-icons/fa";
import profileImg from "../assets/tahm-kench.png";
import Timer from "./timer.tsx";
import clsx from "clsx";

export default function Header({ className = "" }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <header
      className={clsx(
        "flex items-center justify-between bg-[#F4F4F1] dark:bg-[#1a1a1a] p-4 rounded-lg shadow-md",
        className,
      )}
    >
      <div className="flex items-center gap-3">
        {/* Profile Image */}
        <div className="w-10 h-10 rounded-full">
          <img
            src={profileImg}
            alt="Profile"
            className="w-full h-full rounded-full object-cover"
          />
        </div>

        {/* Name */}
        <div className="flex items-center gap-2">
          <span className="font-bold text-black dark:text-white">
            Ahmed Faisal
          </span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        {/* Timer and Theme Toggle Button */}
        <Timer />
        <button
          onClick={toggleTheme}
          className="w-10 h-10 rounded-full flex items-center justify-center bg-neutral-200 dark:bg-neutral-800"
        >
          {theme === "light" ? <FaMoon /> : <FaSun />}
        </button>
      </div>
    </header>
  );
}
