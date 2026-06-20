import { useState, useEffect } from "react";
import { SECTIONS, type SectionId } from "../lib/constants";

export function useScrollSpy() {
  const [activeSection, setActiveSection] = useState<SectionId>("hero");

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        const scrollPosition = window.scrollY + 200;

        for (const section of SECTIONS) {
          const el = document.getElementById(section);
          if (el) {
            const top = el.offsetTop;
            const height = el.clientHeight;
            if (scrollPosition >= top && scrollPosition < top + height) {
              setActiveSection(section);
            }
          }
        }
        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return activeSection;
}
