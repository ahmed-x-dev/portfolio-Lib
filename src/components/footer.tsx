import { useTheme } from "../hooks/useTheme.ts";
import clsx from "clsx";

export default function Footer({ className = "" }: { className?: string }) {
  const { theme } = useTheme();

  return (
    <footer
      className={clsx(
        "mt-0.5 p-4 bg-[#F4F4F1] dark:bg-[#1a1a1a] rounded-lg shadow-md flex justify-between gap-4",
        className,
      )}
    >
      <div className="flex items-center gap-2">
        <img className="w-8 h-8" src="robot.png" alt="BMO" />
        <span className="dark:bg-[#2c2c2a] text-sm text-gray-600 dark:text-gray-400 border border-gray-300 dark:border-gray-700 rounded-2xl px-2 py-1">
          Hi I'm BMO
        </span>
      </div>

      <div className="flex gap-4">
        <a
          href="https://github.com/ahmed-x-dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="w-8 h-8"
            src={theme === "dark" ? "github-dark.png" : "github.png"}
            alt="GitHub"
            title="Visit my GitHub profile"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/ahmed-faisal-680413248/"
          target="_blank"
          rel="noopener noreferrer"
          title="Visit my Linkedin profile"
        >
          <img className="w-8 h-8" src="linkedin.png" alt="LinkedIn" />
        </a>
        <a
          href="mailto:a8392280@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="w-8 h-8"
            src="mail.png"
            alt="Gmail"
            title="Contact Me "
          />
        </a>
      </div>
    </footer>
  );
}
