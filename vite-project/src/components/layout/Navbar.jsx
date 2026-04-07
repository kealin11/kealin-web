import { CodeXml, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import useScrollSpy from "../../hooks/useScrollSpy";
import { NAV_LINKS } from "../../utils/constant";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const activeSection = useScrollSpy(NAV_LINKS.map((link) => link.id), 220);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="bg-[linear-gradient(180deg,rgba(4,8,4,0.72),rgba(4,8,4,0.18),transparent)] backdrop-blur-md">
        <div className="mx-auto flex max-w-[1720px] items-center justify-between gap-4 px-4 py-4 sm:gap-6 sm:py-5 sm:px-6 lg:px-8">
          <a
            href="#hero"
            className="flex shrink-0 items-center gap-2.5 text-[1.6rem] font-bold tracking-[-0.04em] text-[#8dff69] sm:gap-3 sm:text-[1.85rem]"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#8dff69]/10 text-[#8dff69] sm:h-10 sm:w-10">
              <CodeXml size={20} strokeWidth={2.4} />
            </span>
            <span>Kealin</span>
          </a>

          <nav className="hidden flex-1 items-center justify-center gap-3 lg:flex">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;

              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className={`relative rounded-full px-6 py-3 text-[1.15rem] font-medium transition duration-300 ${
                    isActive
                      ? "text-white"
                      : "text-white/72 hover:text-white"
                  }`}
                >
                  {isActive ? (
                    <span className="absolute inset-0 rounded-full bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))]" />
                  ) : null}
                  {isActive ? (
                    <span className="absolute inset-x-4 top-0 h-full rounded-full bg-[#8dff69]/10 blur-2xl" />
                  ) : null}
                  <span className="relative">{link.label}</span>
                </a>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <a
              href="#contact"
              className="inline-flex min-h-16 items-center justify-center rounded-[22px] bg-white px-10 text-[1.2rem] font-semibold text-black transition duration-300 hover:-translate-y-0.5 hover:bg-[#f4f7f1]"
            >
              Hire Me
            </a>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-black/20 text-white backdrop-blur-md transition duration-300 hover:bg-black/30 lg:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {isOpen ? (
        <div className="px-4 sm:px-6 lg:hidden">
          <div className="mx-auto mt-2 max-w-[1720px] overflow-hidden rounded-[28px] bg-[linear-gradient(180deg,rgba(8,12,8,0.82),rgba(5,8,5,0.72))] p-4 shadow-[0_16px_40px_rgba(0,0,0,0.28)] backdrop-blur-xl">
            <nav className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.id;

                return (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={closeMenu}
                    className={`rounded-[18px] px-4 py-3 text-base font-medium transition duration-300 ${
                      isActive
                        ? "bg-[#8dff69]/12 text-[#8dff69]"
                        : "text-white/78 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}

              <a
                href="#contact"
                onClick={closeMenu}
                className="mt-2 inline-flex min-h-14 items-center justify-center rounded-[20px] bg-white px-6 text-base font-semibold text-black"
              >
                Hire Me
              </a>
            </nav>
          </div>
        </div>
      ) : null}
    </header>
  );
};

export default Navbar;
