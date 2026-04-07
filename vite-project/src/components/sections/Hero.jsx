import {
  ArrowDown,
  ArrowRight,
  BadgeCheck,
  Braces,
  Database,
  Leaf,
  Orbit,
} from "lucide-react";
import ScrollReveal from "../animations/ScrollReveal";
import { HERO_STATS } from "../../utils/constant";

const techIcons = [
  { label: "React", icon: Orbit },
  { label: "Next", icon: BadgeCheck },
  { label: "Node", icon: Braces },
  { label: "Tailwind", icon: Leaf },
  { label: "MongoDB", icon: Database },
];

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative overflow-hidden px-4 pb-12 pt-4 sm:px-6 lg:px-8 lg:pb-16"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-full opacity-90">
        <div className="absolute left-[-12%] top-[-8%] h-[720px] w-[720px] rounded-full bg-[#173313]/40 blur-3xl" />
        <div className="absolute bottom-[-16%] right-[-10%] h-[680px] w-[680px] rounded-full bg-[#10280e]/45 blur-3xl" />
        <div className="absolute left-[8%] top-[2%] h-[980px] w-[980px] rounded-full border border-[#8dff69]/8 bg-[#0d170b]/68" />
        <div className="absolute left-[-18%] top-[26%] h-[600px] w-[600px] rounded-full bg-[#1b3816]/28" />
      </div>

      <div className="relative mx-auto max-w-[1720px] overflow-hidden rounded-[36px] border border-[#8dff69]/10 bg-[radial-gradient(circle_at_top_left,_rgba(27,54,22,0.36),_rgba(0,0,0,0.95)_45%)] px-6 pb-14 pt-8 shadow-[0_25px_80px_rgba(0,0,0,0.45)] sm:px-8 lg:min-h-[calc(100vh-7rem)] lg:px-12 lg:pt-10 xl:px-16">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <ScrollReveal className="max-w-[760px] pt-4 lg:pt-12">
            <div className="inline-flex max-w-full items-center gap-3 rounded-full border border-[#8dff69]/20 bg-[#203c19]/78 px-4 py-3 text-sm text-white/88 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03)] sm:px-6 sm:text-lg">
              <BadgeCheck className="shrink-0 text-white" size={18} fill="currentColor" />
              <span className="truncate">
                FullStack Developer &amp; Java Enthusiast | Based in Johannersburg, South Africa
              </span>
            </div>

            <h1 className="mt-10 max-w-[11ch] text-[3.4rem] leading-[0.98] font-light tracking-[-0.05em] text-white sm:text-[4.5rem] lg:text-[5.8rem] xl:text-[6.4rem]">
              FullStack Developer Portfolio
            </h1>

            <p className="mt-8 max-w-[720px] text-lg leading-[1.65] text-white/72 sm:text-[1.8rem] lg:text-[2rem] lg:leading-[1.55]">
              Final-year Software Engineering student with demonstrated experience shipping production systems for 
              real clients. Skilled in React, Next.js, and Java, with hands-on exposure to full deployment pipelines — 
              from development through to hosting and environment management.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex min-h-16 items-center justify-center rounded-[24px] bg-white px-9 text-lg font-semibold text-black transition duration-300 hover:-translate-y-0.5 hover:bg-[#f2f6ed] sm:text-xl"
              >
                Get in Touch
              </a>

              <a
                href="#projects"
                className="inline-flex min-h-16 items-center gap-2 rounded-[24px] border border-white/10 bg-white/5 px-7 text-lg font-medium text-white/84 transition duration-300 hover:border-[#8dff69]/40 hover:bg-[#8dff69]/10 hover:text-white sm:text-xl"
              >
                View Projects
                <ArrowRight size={20} />
              </a>
            </div>

            <div className="mt-16 grid gap-6 border-t border-white/8 pt-8 sm:grid-cols-2 xl:grid-cols-4 xl:gap-0 xl:pt-10">
              {HERO_STATS.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`interactive-card rounded-[22px] xl:px-10 ${index !== 0 ? "xl:border-l xl:border-white/18" : ""}`}
                >
                  <p className="text-[2.4rem] font-semibold tracking-[-0.05em] text-[#8dff69] sm:text-[3rem]">
                    {stat.value}
                  </p>
                  <p className="mt-2 max-w-[10ch] text-lg leading-[1.35] text-white/76 sm:text-xl">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal className="relative flex justify-center lg:justify-end" delay={160}>
            <div className="relative w-full max-w-[650px]">
              <div className="absolute -inset-6 rounded-[38px] bg-[radial-gradient(circle_at_top,_rgba(141,255,105,0.12),_transparent_58%)] blur-xl" />
              <div className="relative overflow-hidden rounded-[34px] border border-white/8 bg-[#0b120b] shadow-[0_30px_80px_rgba(0,0,0,0.5)]">
                <img
                  src="/images/projects/Developer%20Pic.png"
                  alt="Portrait of Kealin Daniels"
                  className="h-[520px] w-full object-cover object-[62%_center] sm:h-[680px] lg:h-[860px]"
                />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(3,8,5,0.2)_0%,rgba(3,8,5,0.02)_24%,rgba(3,8,5,0.36)_100%)]" />

                <div className="absolute bottom-6 left-6 right-6 rounded-[24px] border border-[#8dff69]/12 bg-black/42 px-4 py-3 backdrop-blur-md sm:bottom-8 sm:left-8 sm:right-auto">
                  <div className="flex items-center gap-4 sm:gap-5">
                    {techIcons.map(({ label, icon: Icon }) => (
                      <div
                        key={label}
                        className="flex h-11 w-11 items-center justify-center rounded-full border border-[#8dff69]/18 bg-[#8dff69]/10 text-[#8dff69] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.02)] sm:h-12 sm:w-12"
                        title={label}
                      >
                        <Icon size={20} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <a
          href="#about"
          className="absolute bottom-5 left-1/2 inline-flex -translate-x-1/2 items-center justify-center rounded-full border border-transparent p-2 text-[#8dff69] transition duration-300 hover:border-[#8dff69]/20 hover:bg-[#8dff69]/8"
          aria-label="Scroll to about section"
        >
          <ArrowDown size={34} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
