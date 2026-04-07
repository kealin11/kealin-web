import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import Services from "./components/sections/Services";
import Skills from "./components/sections/Skills";
import { PAGE_SECTIONS } from "./utils/constant";

const App = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Contact />

        <div className="px-4 pb-20 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-[1720px] flex-col gap-6">
            {PAGE_SECTIONS.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="rounded-[32px] border border-white/6 bg-[linear-gradient(180deg,rgba(13,23,11,0.88),rgba(5,8,5,0.96))] px-6 py-14 shadow-[0_20px_50px_rgba(0,0,0,0.26)] sm:px-8 lg:px-12 lg:py-18"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#8dff69]">
                  {section.eyebrow}
                </p>
                <h2 className="mt-4 max-w-[16ch] text-3xl leading-tight font-light tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
                  {section.title}
                </h2>
                <p className="mt-5 max-w-3xl text-base leading-8 text-white/72 sm:text-lg">
                  {section.description}
                </p>
              </section>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
