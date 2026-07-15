import { useNavigate } from "react-router-dom";

export default function AboutMeCard() {
  const navigate = useNavigate();

  return (
    <section
      id="about"
      className="flex flex-col self-start justify-between gap-4 rounded-lg bg-white p-6 dark:bg-[#2a2a2a]"
    >
      <h2 className="mb-4 text-3xl font-bold">About Me</h2>

      <div className="space-y-6 text-base leading-8 text-gray-700 dark:text-gray-300">
        <p>
          Hi, I'm <span className="font-semibold">Ahmed</span>, a Full-Stack
          Developer passionate about building modern, reliable, and user-focused
          web applications.
        </p>

        <p>
          I enjoy transforming ideas into real products by combining intuitive
          user interfaces with scalable backend systems. Whether I'm designing a
          responsive frontend or developing efficient APIs, I strive to write
          clean, maintainable, and high-quality code.
        </p>

        <p>
          I'm driven by curiosity and continuous learning. I enjoy exploring new
          technologies, improving my problem-solving skills, and taking on
          projects that challenge me to grow as a developer. I embrace
          AI-powered tools as part of my workflow to speed up research,
          prototype ideas, and boost productivity without compromising code
          quality.
        </p>

        <p>
          My goal is to create software that is not only functional and
          performant but also provides a great experience for the people who use
          it.
        </p>
      </div>

      <div className="mt-6 flex flex-wrap gap-4">
        <button
          onClick={() => navigate("/skills")}
          className="cursor-pointer rounded-md border border-[#1a1a1aa4] px-4 py-2 transition-colors duration-300 hover:bg-[#185FA5] hover:text-white dark:border-[#f0f0f0a9]"
        >
          Technical Skills
        </button>
        <button
          onClick={() => navigate("/projects")}
          className="cursor-pointer rounded-md border border-[#1a1a1a] bg-[#2a2a2a] px-4 py-2 text-[#f0f0f0] dark:bg-[#f0f0f0] dark:text-[#1a1a1a]"
        >
          Projects
        </button>
      </div>
    </section>
  );
}
