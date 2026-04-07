import { Braces, Download, FileCode2, GitBranch, Sparkles } from "lucide-react";
import {
  RiNextjsFill,
  RiNodejsLine,
  RiReactjsLine,
  RiTailwindCssFill,
} from "react-icons/ri";
import { SiMongodb, SiTypescript } from "react-icons/si";
import {
  ABOUT_FEATURES,
  ABOUT_HIGHLIGHTS,
  ABOUT_STATS,
  ABOUT_TECH_STACK,
} from "../../utils/constant";
import ScrollReveal from "../animations/ScrollReveal";

const iconMap = {
  code: Braces,
  sparkles: Sparkles,
  download: Download,
};

const techIconMap = {
  code: Braces,
  file: FileCode2,
  git: GitBranch,
  react: RiReactjsLine,
  next: RiNextjsFill,
  typescript: SiTypescript,
  tailwind: RiTailwindCssFill,
  node: RiNodejsLine,
  mongodb: SiMongodb,
};

const About = () => {
  return (
    <section id="about" className="relative px-4 py-6 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute bottom-[-18%] right-[-12%] h-[520px] w-[520px] rounded-full bg-[#1a3515]/28 blur-xl" />
      </div>

      <div className="relative mx-auto max-w-[1720px] overflow-hidden rounded-[36px] border border-white/6 bg-[linear-gradient(180deg,rgba(7,10,7,0.96),rgba(5,8,5,0.98))] px-6 py-14 shadow-[0_20px_60px_rgba(0,0,0,0.34)] sm:px-8 lg:px-12 lg:py-16 xl:px-16">
        <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-12 xl:gap-16">
          <ScrollReveal className="max-w-[820px]">
            <div className="inline-flex items-center gap-3 rounded-full border border-[#8dff69]/18 bg-[#151f14] px-5 py-3 text-sm font-medium text-[#8dff69] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.02)] sm:text-lg">
              <Braces size={18} />
              <span>Software Engineer</span>
              <Sparkles size={18} />
            </div>

            <h2 className="mt-10 max-w-[11ch] text-[3.2rem] leading-[1.06] font-light tracking-[-0.05em] text-white sm:text-[4.4rem] lg:text-[5.5rem] xl:text-[6rem]">
              Building Real Products While I Study
            </h2>

            <div className="mt-10 space-y-8 text-lg leading-[1.65] text-white/72 sm:text-[1.55rem] lg:text-[1.75rem] lg:leading-[1.62]">
              <p>
                I&apos;m a final-year BSc IT student in Software Engineering
                with hands-on experience building and shipping production
                systems for real clients. My strongest tools are React,
                Next.js, TypeScript, JavaScript, and Java.
              </p>
              <p>
                I&apos;ve worked on end-to-end website builds, secure check-in
                systems, and live client deployments, managing everything from
                development through hosting, environment setup, backups, and
                iteration after launch.
              </p>
              <p>
                I&apos;m known for turning stakeholder requirements into clean,
                maintainable solutions, and I&apos;m open to graduate programs,
                junior developer roles, and contract opportunities in
                Johannesburg or remote.
              </p>
            </div>

            <div className="mt-14 grid gap-8 border-white/8 pt-2 sm:grid-cols-3 sm:gap-6 lg:mt-16">
              {ABOUT_STATS.map((stat) => (
                <div key={stat.label} className="flex items-start gap-4">
                  <span className="mt-1 h-20 w-[4px] rounded-full bg-[linear-gradient(180deg,#8dff69,rgba(141,255,105,0.05))]" />
                  <div>
                    <p className="text-[2.3rem] leading-none font-light tracking-[-0.05em] text-white sm:text-[3rem] lg:text-[3.4rem]">
                      {stat.value}
                    </p>
                    <p className="mt-3 text-base text-white/62 sm:text-lg">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal className="flex flex-col gap-5 pt-2 lg:pt-20" delay={120}>
            <div className="grid gap-5 md:grid-cols-2">
              {ABOUT_FEATURES.map((feature, index) => {
                const Icon = iconMap[feature.icon];
                const isWide = feature.span === "wide";

                return (
                  <article
                    key={feature.title}
                    className={`interactive-card rounded-[28px] border border-white/6 bg-[#131813] p-7 shadow-[0_12px_35px_rgba(0,0,0,0.18)] ${
                      isWide ? "md:col-span-2" : ""
                    } ${index === 0 ? "lg:mb-1" : ""}`}
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-[20px] bg-[#1f311c] text-[#8dff69]">
                      <Icon size={28} />
                    </div>
                    <h3 className="mt-7 text-[2rem] font-medium tracking-[-0.04em] text-white">
                      {feature.title}
                    </h3>
                    <p className="mt-4 max-w-[28ch] text-lg leading-[1.65] text-white/62 sm:text-[1.45rem]">
                      {feature.description}
                    </p>
                  </article>
                );
              })}
            </div>

            <div className="interactive-card rounded-[28px] border border-white/6 bg-[#131813] px-6 py-8 shadow-[0_12px_35px_rgba(0,0,0,0.18)] sm:px-8">
              <div className="grid gap-8 sm:grid-cols-3 sm:gap-4">
                {ABOUT_HIGHLIGHTS.map((item) => (
                  <div key={item.label} className="text-center">
                    <p className="text-[2.4rem] leading-none font-semibold tracking-[-0.05em] text-[#8dff69] sm:text-[3rem]">
                      {item.value}
                    </p>
                    <p className="mt-3 text-base text-white/55 sm:text-lg">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal className="relative mt-18 border-t border-white/5 pt-16 lg:mt-24 lg:pt-20" delay={160}>
          <div className="pointer-events-none absolute -right-[12%] top-[-8%] h-[420px] w-[420px] rounded-full bg-[#193415]/22 blur-xl" />

          <div className="relative">
            <a
              href="/Kealin%20Daniels%20CV2.pdf"
              download
              className="inline-flex min-h-16 items-center gap-4 rounded-full bg-white px-10 text-lg font-medium text-black transition duration-300 hover:-translate-y-0.5 hover:bg-[#f3f7ef] sm:min-h-18 sm:px-12 sm:text-[1.7rem]"
            >
              <Download size={24} />
              <span>Download CV</span>
            </a>

            <div className="mx-auto mt-24 max-w-[980px] text-center">
              <h3 className="text-[2.5rem] font-light tracking-[-0.05em] text-white sm:text-[3.5rem] lg:text-[4.2rem]">
                Tech Stack &amp; Expertise
              </h3>
              <p className="mt-4 text-lg text-white/58 sm:text-[1.5rem]">
                Technologies I work with to build amazing products
              </p>
            </div>

            <div className="mx-auto mt-14 grid max-w-[1220px] gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
              {ABOUT_TECH_STACK.map((tech) => {
                const Icon = techIconMap[tech.icon];

                return (
                  <article
                    key={tech.name}
                    className="interactive-card flex min-h-[170px] flex-col items-center justify-center rounded-[26px] border border-white/7 bg-[#121412]/96 px-6 py-8 text-center shadow-[0_12px_35px_rgba(0,0,0,0.16)]"
                  >
                    <Icon className="text-[3rem] text-[#8dff69] sm:text-[3.4rem]" />
                    <p className="mt-7 text-lg font-medium text-white/78 sm:text-[1.45rem]">
                      {tech.name}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default About;
