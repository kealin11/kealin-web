import { CodeXml, Heart, Mail, MapPin, Phone } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { NAV_LINKS } from "../../utils/constant";

const Footer = () => {
  return (
    <footer className="relative border-t border-white/8 px-4 pb-8 pt-14 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-[18%] h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-[#153315]/16 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1720px] rounded-[30px] border border-white/6 bg-[linear-gradient(180deg,rgba(5,8,5,0.96),rgba(4,6,4,0.98))] px-5 py-10 shadow-[0_20px_60px_rgba(0,0,0,0.24)] sm:rounded-[36px] sm:px-8 sm:py-12 lg:px-12 xl:px-16">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.7fr_1fr] lg:gap-10">
          <div>
            <a
              href="#hero"
              className="inline-flex items-center gap-2.5 text-[2rem] font-bold tracking-[-0.04em] text-[#8dff69] sm:gap-3 sm:text-[2.6rem]"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#8dff69]/12 text-[#8dff69] sm:h-11 sm:w-11">
                <CodeXml size={22} strokeWidth={2.3} />
              </span>
              <span>Kealin Daniels</span>
            </a>

            <p className="mt-6 max-w-[24ch] text-base leading-[1.7] text-white/56 sm:mt-8 sm:text-[1.35rem]">
              Crafting seamless digital experiences with modern web
              technologies
            </p>

            <div className="mt-8 space-y-4 sm:mt-10">
              <a
                href="mailto:kealindaniels24@gmail.com"
                className="flex items-start gap-4 rounded-[20px] border border-white/7 bg-[#161918]/96 px-4 py-4 text-base text-white/84 transition duration-300 hover:border-[#8dff69]/20 hover:text-white sm:items-center sm:max-w-[490px] sm:rounded-[22px] sm:px-5 sm:py-5 sm:text-lg"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[#3f6132] bg-[#1d3118] text-[#8dff69] sm:h-12 sm:w-12">
                  <Mail size={20} />
                </span>
                <span className="break-all">kealindaniels24@gmail.com</span>
              </a>

              <div className="flex items-start gap-4 rounded-[20px] border border-white/7 bg-[#161918]/96 px-4 py-4 text-base text-white/84 sm:items-center sm:max-w-[490px] sm:rounded-[22px] sm:px-5 sm:py-5 sm:text-lg">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[#3f6132] bg-[#1d3118] text-[#8dff69] sm:h-12 sm:w-12">
                  <MapPin size={20} />
                </span>
                <span>Johannesburg, South Africa</span>
              </div>

              <a
                href="tel:0631437911"
                className="flex items-start gap-4 rounded-[20px] border border-white/7 bg-[#161918]/96 px-4 py-4 text-base text-white/84 transition duration-300 hover:border-[#8dff69]/20 hover:text-white sm:items-center sm:max-w-[490px] sm:rounded-[22px] sm:px-5 sm:py-5 sm:text-lg"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[#3f6132] bg-[#1d3118] text-[#8dff69] sm:h-12 sm:w-12">
                  <Phone size={20} />
                </span>
                <span>0631437911</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-[1.65rem] font-medium tracking-[-0.04em] text-white sm:text-[2rem]">
              Quick Links
            </h3>

            <ul className="mt-6 space-y-4 text-base text-white/64 sm:mt-8 sm:space-y-5 sm:text-[1.35rem]">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="inline-flex items-center gap-3 transition duration-300 hover:text-[#8dff69]"
                  >
                    <span className="h-2.5 w-2.5 rounded-full bg-white/26" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[1.65rem] font-medium tracking-[-0.04em] text-white sm:text-[2rem]">
              Connect With Me
            </h3>

            <p className="mt-6 max-w-[24ch] text-base leading-[1.7] text-white/56 sm:mt-8 sm:text-[1.35rem]">
              Let&apos;s connect and create something amazing together.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3 sm:mt-8 sm:gap-4">
              <a
                href="https://github.com/kealin11"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
                className="flex h-14 w-14 items-center justify-center rounded-[18px] border border-white/8 bg-[#17191a] text-white/82 transition duration-300 hover:border-[#8dff69]/35 hover:text-[#8dff69] sm:h-18 sm:w-18 sm:rounded-[20px]"
              >
                <FiGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/kealin-daniels-1ab1b3332/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
                className="flex h-14 w-14 items-center justify-center rounded-[18px] border border-white/8 bg-[#17191a] text-white/82 transition duration-300 hover:border-[#8dff69]/35 hover:text-[#8dff69] sm:h-18 sm:w-18 sm:rounded-[20px]"
              >
                <FiLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/8 pt-8 text-sm text-white/42 sm:mt-12 sm:text-lg lg:flex-row lg:items-center lg:justify-between">
          <p>&copy; 2026 Kealin Daniels. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span>Built with</span>
            <Heart size={16} className="fill-[#8dff69] text-[#8dff69]" />
            <span>using React &amp; Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
