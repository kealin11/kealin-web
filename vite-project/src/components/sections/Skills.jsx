import {
  Braces,
  Database,
  FileCode2,
  Figma,
  GitBranch,
  Globe,
  MonitorSmartphone,
  Palette,
  Rocket,
  Server,
  Type,
  Zap,
} from "lucide-react";
import ScrollReveal from "../animations/ScrollReveal";
import { skillCategories } from "../../data/skills";

const iconMap = {
  code: Braces,
  file: FileCode2,
  typescript: Type,
  zap: Zap,
  palette: Palette,
  database: Database,
  server: Server,
  globe: Globe,
  git: GitBranch,
  device: MonitorSmartphone,
  figma: Figma,
  rocket: Rocket,
};

const badgeStyles = {
  Expert: "border-[#5b8f33] bg-[#253d1d] text-[#8dff69]",
  Advanced: "border-[#0d6872] bg-[#08383f] text-[#35d4ec]",
  Intermediate: "border-[#0a6255] bg-[#07372f] text-[#35caa8]",
};

const Skills = () => {
  return (
    <section id="skills" className="relative px-4 py-6 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-12%] top-[12%] h-[560px] w-[560px] rounded-full bg-[#0e1f0d]/60 blur-2xl" />
        <div className="absolute right-[-12%] top-[4%] h-[320px] w-[320px] rounded-full bg-[#173313]/20 blur-2xl" />
      </div>

      <div className="relative mx-auto max-w-[1720px] overflow-hidden rounded-[30px] border border-white/6 bg-[linear-gradient(180deg,rgba(6,8,6,0.98),rgba(5,7,5,0.98))] px-5 py-12 shadow-[0_20px_60px_rgba(0,0,0,0.34)] sm:rounded-[36px] sm:px-8 sm:py-16 lg:px-12 lg:py-18 xl:px-16">
        <ScrollReveal className="mx-auto max-w-[980px] text-center">
          <h2 className="text-[2.45rem] font-light tracking-[-0.05em] text-white sm:text-[4.6rem] lg:text-[5.8rem]">
            Skills &amp; Technologies
          </h2>
          <p className="mx-auto mt-4 max-w-[920px] text-base leading-[1.7] text-white/56 sm:mt-5 sm:text-[1.5rem] lg:text-[1.8rem]">
            Core tools, languages, and workflows drawn from my coursework and
            real client projects
          </p>
        </ScrollReveal>

        <div className="mt-12 grid gap-5 xl:mt-18 xl:grid-cols-[1.06fr_1.04fr_1.04fr] xl:gap-6">
          {skillCategories.map((category, index) => (
            <ScrollReveal
              key={category.title}
              delay={index * 90}
              className="interactive-card rounded-[24px] border border-white/7 bg-[#141714]/96 px-5 py-6 shadow-[0_12px_35px_rgba(0,0,0,0.16)] sm:rounded-[28px] sm:px-8 sm:py-7"
            >
              <div className="flex items-center gap-4 border-b border-white/6 pb-5 sm:gap-5 sm:pb-6">
                <span className="h-10 w-[4px] rounded-full bg-[linear-gradient(180deg,#466b2f,#142112)] sm:h-11 sm:w-[5px]" />
                <h3 className="text-[1.65rem] font-medium tracking-[-0.04em] text-white sm:text-[2rem]">
                  {category.title}
                </h3>
              </div>

              <div className="mt-6 space-y-7 sm:mt-7 sm:space-y-8">
                {category.skills.map((skill) => {
                  const Icon = iconMap[skill.icon];

                  return (
                    <div key={skill.name}>
                      <div className="flex flex-col gap-3 sm:gap-4">
                        <div className="flex min-w-0 items-start gap-4">
                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#182018] text-[#8dff69] sm:h-12 sm:w-12">
                            <Icon size={20} />
                          </div>

                          <div className="min-w-0 flex-1">
                            <p className="text-base font-medium leading-tight text-white break-words sm:text-[1.55rem]">
                              {skill.name}
                            </p>
                            <p className="mt-1 text-sm leading-5 text-white/48 sm:text-base">
                              {skill.experience}
                            </p>
                          </div>
                        </div>

                        <span
                          className={`interactive-chip inline-flex w-fit rounded-full border px-4 py-2 text-sm font-medium sm:text-base ${
                            badgeStyles[skill.level]
                          }`}
                        >
                          {skill.level}
                        </span>
                      </div>

                      <div className="mt-4 h-[10px] overflow-hidden rounded-full bg-[#202520]">
                        <div
                          className="h-full rounded-full bg-[linear-gradient(90deg,#4f7d38,#7be35a)] shadow-[0_0_14px_rgba(141,255,105,0.18)]"
                          style={{ width: `${skill.progress}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
