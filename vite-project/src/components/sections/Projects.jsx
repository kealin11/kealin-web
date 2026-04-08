import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  FolderKanban,
  Github,
  TrendingUp,
} from "lucide-react";
import { useState } from "react";
import ScrollReveal from "../animations/ScrollReveal";
import { projects } from "../../data/projects";

const Projects = () => {
  const projectsPerPage = 2;
  const projectPages = [];

  for (let index = 0; index < projects.length; index += projectsPerPage) {
    projectPages.push(projects.slice(index, index + projectsPerPage));
  }

  const [activePage, setActivePage] = useState(0);
  const isFirstPage = activePage === 0;
  const isLastPage = activePage === projectPages.length - 1;

  const goToPreviousPage = () => {
    setActivePage((currentPage) => Math.max(currentPage - 1, 0));
  };

  const goToNextPage = () => {
    setActivePage((currentPage) =>
      Math.min(currentPage + 1, projectPages.length - 1),
    );
  };

  return (
    <section id="projects" className="relative px-4 py-6 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-12%] top-[28%] h-[520px] w-[520px] rounded-full bg-[#10220e]/60 blur-2xl" />
        <div className="absolute right-[-8%] top-[8%] h-[420px] w-[420px] rounded-full bg-[#1a3515]/18 blur-2xl" />
      </div>

      <div className="relative mx-auto max-w-[1720px] overflow-hidden rounded-[36px] border border-white/6 bg-[linear-gradient(180deg,rgba(6,8,6,0.99),rgba(5,7,5,0.98))] px-6 py-16 shadow-[0_20px_60px_rgba(0,0,0,0.34)] sm:px-8 lg:px-12 lg:py-18 xl:px-16">
        <ScrollReveal className="mx-auto max-w-[920px] text-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-[#8dff69]/18 bg-[#152014] px-5 py-3 text-sm font-medium text-[#8dff69] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.02)] sm:text-lg">
            <FolderKanban size={18} />
            <span>My Work</span>
          </div>

          <h2 className="mt-9 text-[3.2rem] font-light tracking-[-0.05em] text-white sm:text-[4.6rem] lg:text-[5.8rem]">
            Featured Projects
          </h2>
          <p className="mx-auto mt-5 max-w-[820px] text-lg text-white/56 sm:text-[1.5rem] lg:text-[1.8rem]">
            Selected client and production projects featured on my CV
          </p>
        </ScrollReveal>

        <div className="relative mt-16">
          <button
            type="button"
            onClick={goToPreviousPage}
            disabled={isFirstPage}
            className="absolute left-[-1.5rem] top-1/2 z-10 hidden h-16 w-16 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-white/8 text-white/88 backdrop-blur-sm transition duration-300 disabled:cursor-not-allowed disabled:opacity-35 xl:inline-flex"
            aria-label="Previous projects"
          >
            <ArrowLeft size={30} />
          </button>

          <button
            type="button"
            onClick={goToNextPage}
            disabled={isLastPage}
            className="absolute right-[-1.5rem] top-1/2 z-10 hidden h-16 w-16 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-white/8 text-white/88 backdrop-blur-sm transition duration-300 disabled:cursor-not-allowed disabled:opacity-35 xl:inline-flex"
            aria-label="Next projects"
          >
            <ArrowRight size={30} />
          </button>

          <div className="grid gap-6 xl:grid-cols-2">
            {projectPages[activePage].map((project, index) => (
              <ScrollReveal
                key={project.id}
                delay={index * 90}
                className="interactive-card group overflow-hidden rounded-[30px] border border-white/7 bg-[#151617] shadow-[0_18px_50px_rgba(0,0,0,0.24)]"
              >
                <div className="relative overflow-hidden">
                  <img
                    src="/images/projects/project.png"
                    alt={project.title}
                    className="h-[320px] w-full object-cover object-center opacity-62 transition duration-500 group-hover:scale-[1.03] group-hover:opacity-78 sm:h-[360px] lg:h-[390px]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,17,22,0.26)_0%,rgba(15,14,19,0.38)_32%,rgba(14,14,14,0.86)_100%)]" />

                  <span className="absolute left-6 top-6 rounded-full border border-white/10 bg-[#191a1d]/88 px-4 py-2 text-sm font-medium text-white/88 backdrop-blur-sm sm:text-base">
                    {project.category}
                  </span>

                  <div className="absolute bottom-6 right-6 flex items-center gap-3">
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex h-14 w-14 items-center justify-center rounded-[18px] border border-white/12 bg-white/8 text-white backdrop-blur-sm transition duration-300 hover:border-[#8dff69]/30 hover:bg-[#8dff69]/12 hover:text-[#8dff69]"
                        aria-label={`Open ${project.title} live project`}
                      >
                        <ArrowUpRight size={22} />
                      </a>
                    ) : null}
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex h-14 w-14 items-center justify-center rounded-[18px] border border-white/12 bg-white/8 text-white backdrop-blur-sm transition duration-300 hover:border-[#8dff69]/30 hover:bg-[#8dff69]/12 hover:text-[#8dff69]"
                        aria-label={`Open ${project.title} source code`}
                      >
                        <Github size={20} />
                      </a>
                    ) : null}
                  </div>
                </div>

                <div className="px-6 pb-8 pt-7 sm:px-7">
                  <h3 className="text-[1.95rem] font-medium tracking-[-0.04em] text-white sm:text-[2.2rem]">
                    {project.title}
                  </h3>
                  <p className="mt-4 min-h-[104px] text-base leading-[1.65] text-white/58 sm:text-[1.28rem]">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="interactive-chip rounded-[14px] border border-[#3c562d] bg-[#1c2a16] px-4 py-2 text-sm font-medium text-[#8dff69] sm:text-base"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 border-t border-white/7 pt-5">
                    <p className="flex items-center gap-3 text-base font-medium text-[#39d96b] sm:text-[1.25rem]">
                      <TrendingUp size={18} />
                      <span>{project.metric}</span>
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-10 flex items-center justify-center gap-4 xl:hidden">
            <button
              type="button"
              onClick={goToPreviousPage}
              disabled={isFirstPage}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/8 text-white/88 backdrop-blur-sm transition duration-300 disabled:cursor-not-allowed disabled:opacity-35"
              aria-label="Previous projects"
            >
              <ArrowLeft size={22} />
            </button>

            {projectPages.map((_, index) => {
              const isActive = index === activePage;

              return (
                <button
                  key={`project-page-${index}`}
                  type="button"
                  onClick={() => setActivePage(index)}
                  className={`transition duration-300 ${
                    isActive
                      ? "h-3 w-10 rounded-full bg-[#8dff69]"
                      : "h-3 w-3 rounded-full bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Go to project page ${index + 1}`}
                  aria-pressed={isActive}
                />
              );
            })}

            <button
              type="button"
              onClick={goToNextPage}
              disabled={isLastPage}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/8 text-white/88 backdrop-blur-sm transition duration-300 disabled:cursor-not-allowed disabled:opacity-35"
              aria-label="Next projects"
            >
              <ArrowRight size={22} />
            </button>
          </div>

          <div className="mt-10 hidden items-center justify-center gap-3 xl:flex">
            {projectPages.map((_, index) => {
              const isActive = index === activePage;

              return (
                <button
                  key={`desktop-project-page-${index}`}
                  type="button"
                  onClick={() => setActivePage(index)}
                  className={`transition duration-300 ${
                    isActive
                      ? "h-3 w-10 rounded-full bg-[#8dff69]"
                      : "h-3 w-3 rounded-full bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Go to project page ${index + 1}`}
                  aria-pressed={isActive}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
