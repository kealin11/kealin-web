import { CodeXml, Heart, Mail, MapPin, Phone } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { NAV_LINKS } from "../../utils/constant";

const Footer = () => {
  return (
    <footer className="relative border-t border-white/8 px-4 pb-8 pt-14 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-[18%] h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-[#153315]/16 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1720px] rounded-[36px] border border-white/6 bg-[linear-gradient(180deg,rgba(5,8,5,0.96),rgba(4,6,4,0.98))] px-6 py-12 shadow-[0_20px_60px_rgba(0,0,0,0.24)] sm:px-8 lg:px-12 xl:px-16">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.7fr_1fr] lg:gap-10">
          <div>
            <a
              href="#hero"
              className="inline-flex items-center gap-3 text-[2.6rem] font-bold tracking-[-0.04em] text-[#8dff69]"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#8dff69]/12 text-[#8dff69]">
                <CodeXml size={24} strokeWidth={2.3} />
              </span>
              <span>Kealin Daniels</span>
            </a>

            <p className="mt-8 max-w-[20ch] text-lg leading-[1.65] text-white/56 sm:text-[1.35rem]">
              Crafting seamless digital experiences with modern web
              technologies
            </p>

            <div className="mt-10 space-y-4">
              <a
                href="mailto:kealindaniels24@gmail.com"
                className="flex items-center gap-4 rounded-[22px] border border-white/7 bg-[#161918]/96 px-5 py-5 text-lg text-white/84 transition duration-300 hover:border-[#8dff69]/20 hover:text-white sm:max-w-[490px]"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#3f6132] bg-[#1d3118] text-[#8dff69]">
                  <Mail size={22} />
                </span>
                <span>kealindaniels24@gmail.com</span>
              </a>

              <div className="flex items-center gap-4 rounded-[22px] border border-white/7 bg-[#161918]/96 px-5 py-5 text-lg text-white/84 sm:max-w-[490px]">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#3f6132] bg-[#1d3118] text-[#8dff69]">
                  <MapPin size={22} />
                </span>
                <span>Johannesburg, South Africa</span>
              </div>

              <a
                href="tel:0631437911"
                className="flex items-center gap-4 rounded-[22px] border border-white/7 bg-[#161918]/96 px-5 py-5 text-lg text-white/84 transition duration-300 hover:border-[#8dff69]/20 hover:text-white sm:max-w-[490px]"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#3f6132] bg-[#1d3118] text-[#8dff69]">
                  <Phone size={22} />
                </span>
                <span>0631437911</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-[2rem] font-medium tracking-[-0.04em] text-white">
              Quick Links
            </h3>

            <ul className="mt-8 space-y-5 text-lg text-white/64 sm:text-[1.35rem]">
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
            <h3 className="text-[2rem] font-medium tracking-[-0.04em] text-white">
              Connect With Me
            </h3>

            <p className="mt-8 max-w-[22ch] text-lg leading-[1.65] text-white/56 sm:text-[1.35rem]">
              Let&apos;s connect and create something amazing together.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="https://github.com/kealin11"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
                className="flex h-18 w-18 items-center justify-center rounded-[20px] border border-white/8 bg-[#17191a] text-white/82 transition duration-300 hover:border-[#8dff69]/35 hover:text-[#8dff69]"
              >
                <FiGithub size={28} />
              </a>
              <a
                href="https://www.linkedin.com/in/kealin-daniels-1ab1b3332/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
                className="flex h-18 w-18 items-center justify-center rounded-[20px] border border-white/8 bg-[#17191a] text-white/82 transition duration-300 hover:border-[#8dff69]/35 hover:text-[#8dff69]"
              >
                <FiLinkedin size={28} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/8 pt-8 text-base text-white/42 sm:text-lg lg:flex-row lg:items-center lg:justify-between">
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
