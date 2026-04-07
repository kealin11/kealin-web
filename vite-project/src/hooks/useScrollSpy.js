import { useEffect, useState } from "react";

const useScrollSpy = (sectionIds = [], offset = 160) => {
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? "");

  useEffect(() => {
    if (!sectionIds.length) {
      return undefined;
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;
      let currentSection = sectionIds[0];

      sectionIds.forEach((sectionId) => {
        const element = document.getElementById(sectionId);

        if (element && element.offsetTop <= scrollPosition) {
          currentSection = sectionId;
        }
      });

      setActiveSection(currentSection);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [offset, sectionIds]);

  return activeSection;
};

export default useScrollSpy;
