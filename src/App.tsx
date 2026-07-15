import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Header from "./components/header";
import NavBar from "./components/navBar";
import HomeCard from "./components/homeCard";
import SkillCard from "./components/skillCard";
import ProjectCard from "./components/projectCard";
import AboutMeCard from "./components/aboutmeCard";
import Resume from "./components/resumeCard";
import Footer from "./components/footer";

import { skills } from "./data/skills";
import { useGithubProjects } from "./hooks/useGithubProjects";

function App() {
  const { projects, loading, error } = useGithubProjects();

  return (
    <BrowserRouter>
      <div className="h-screen bg-[#e0e0d8] dark:bg-[#141414] text-[#1a1a1a] dark:text-[#f0f0f0] flex flex-col p-4">
        <Header className="shrink-0" />

        <main className="flex flex-1 items-start gap-5 mt-0.5 bg-[#F4F4F1] dark:bg-[#1a1a1a] p-4 rounded-lg shadow-md overflow-auto">
          <NavBar />

          <Routes>
            <Route path="/" element={<HomeCard />} />
            <Route path="/about" element={<AboutMeCard />} />
            <Route path="/skills" element={<SkillCard skills={skills} />} />
            <Route
              path="/projects"
              element={
                <ProjectCard
                  projects={projects}
                  loading={loading}
                  error={error}
                />
              }
            />
            <Route path="/resume" element={<Resume />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <Footer className="shrink-0" />
      </div>
    </BrowserRouter>
  );
}

export default App;
