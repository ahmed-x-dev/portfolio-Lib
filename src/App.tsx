import { useState } from "react";

import Header from "./components/header";
import NavBar from "./components/navBar";
import HomeCard from "./components/homeCard";
import SkillCard from "./components/skillCard";
import ProjectCard from "./components/projectCard";
import AboutMeCard from "./components/aboutmeCard";
import Resume from "./components/resumeCard";

import { skills } from "./data/skills";
import type { Section } from "./types/sections";
import { useGithubProjects } from "./hooks/useGithubProjects";
import Footer from "./components/footer";

function App() {
  const [activeSection, setActiveSection] = useState<Section>("home");
  const { projects, loading, error } = useGithubProjects();

  const sections = {
    home: <HomeCard onNavigate={setActiveSection} />,
    about: <AboutMeCard onNavigate={setActiveSection} />,
    skills: <SkillCard skills={skills} />,
    projects: (
      <ProjectCard projects={projects} loading={loading} error={error} />
    ),
    resume: <Resume />,
  };

  return (
    <div className="h-screen bg-[#e0e0d8] dark:bg-[#141414] text-[#1a1a1a] dark:text-[#f0f0f0] flex flex-col p-4">
      <Header className="shrink-0" />

      <main className="flex flex-1 items-starts gap-5 mt-0.5 bg-[#F4F4F1] dark:bg-[#1a1a1a] p-4 rounded-lg shadow-md overflow-auto">
        <NavBar
          activeSection={activeSection}
          onSectionChange={setActiveSection}
        />
        {sections[activeSection as keyof typeof sections]}
      </main>

      <Footer className="shrink-0" />
    </div>
  );
}

export default App;
