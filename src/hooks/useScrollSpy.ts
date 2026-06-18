import { useState, useEffect } from "react";
import { SECTIONS, type SectionId } from "../lib/constants";

export function useScrollSpy() {
  const [activeSection, setActiveSection] = useState<SectionId>("hero");

  useEffect(() => {
    const handleScroll = () => {
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
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return activeSection;
}
