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

      <div className="relative mx-auto max-w-[1720px] overflow-hidden rounded-[36px] border border-white/6 bg-[linear-gradient(180deg,rgba(6,8,6,0.98),rgba(5,7,5,0.98))] px-6 py-16 shadow-[0_20px_60px_rgba(0,0,0,0.34)] sm:px-8 lg:px-12 lg:py-18 xl:px-16">
        <ScrollReveal className="mx-auto max-w-[980px] text-center">
          <h2 className="text-[3.2rem] font-light tracking-[-0.05em] text-white sm:text-[4.6rem] lg:text-[5.8rem]">
            Skills &amp; Technologies
          </h2>
          <p className="mx-auto mt-5 max-w-[920px] text-lg text-white/56 sm:text-[1.5rem] lg:text-[1.8rem]">
            Core tools, languages, and workflows drawn from my coursework and
            real client projects
          </p>
        </ScrollReveal>

        <div className="mt-18 grid gap-6 xl:grid-cols-[1.06fr_1.04fr_1.04fr]">
          {skillCategories.map((category, index) => (
            <ScrollReveal
              key={category.title}
              delay={index * 90}
              className="interactive-card rounded-[28px] border border-white/7 bg-[#141714]/96 px-6 py-7 shadow-[0_12px_35px_rgba(0,0,0,0.16)] sm:px-8"
            >
              <div className="flex items-center gap-5 border-b border-white/6 pb-6">
                <span className="h-11 w-[5px] rounded-full bg-[linear-gradient(180deg,#466b2f,#142112)]" />
                <h3 className="text-[2rem] font-medium tracking-[-0.04em] text-white">
                  {category.title}
                </h3>
              </div>

              <div className="mt-7 space-y-8">
                {category.skills.map((skill) => {
                  const Icon = iconMap[skill.icon];

                  return (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex min-w-0 items-center gap-4">
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#182018] text-[#8dff69]">
                            <Icon size={22} />
                          </div>

                          <div className="min-w-0">
                            <p className="truncate text-lg font-medium text-white sm:text-[1.55rem]">
                              {skill.name}
                            </p>
                            <p className="text-sm text-white/48 sm:text-base">
                              {skill.experience}
                            </p>
                          </div>
                        </div>

                        <span
                          className={`interactive-chip shrink-0 rounded-full border px-4 py-2 text-sm font-medium sm:text-base ${
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
