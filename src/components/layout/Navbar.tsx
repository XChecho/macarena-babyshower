import React from "react";
import { motion } from "motion/react";
import { Heart, Calendar, Image as ImageIcon, Mail, Gift, HandHeart } from "lucide-react";
import { SECTIONS, SECTION_LABELS, type SectionId } from "../../lib/constants";
import MusicToggle from "../ui/MusicToggle";

interface NavbarProps {
  activeSection: SectionId;
  isMuted: boolean;
  onToggleMusic: () => void;
}

const SECTION_ICONS: Record<SectionId, React.ReactNode> = {
  hero: <Heart className="w-4 h-4" />,
  event: <Calendar className="w-4 h-4" />,
  gallery: <ImageIcon className="w-4 h-4" />,
  gifts: <Gift className="w-4 h-4" />,
  rsvp: <Mail className="w-4 h-4" />,
  thanks: <HandHeart className="w-4 h-4" />,
};

export default function Navbar({ activeSection, isMuted, onToggleMusic }: NavbarProps) {
  return (
    <>
      <header className="hidden md:flex fixed top-0 left-0 w-full z-50 justify-between items-center px-12 py-4 bg-white/85 backdrop-blur-md transition-all border-b border-primary-container/25 soft-shadow">
        <div className="text-2xl font-bold text-primary flex items-center gap-2 cursor-pointer group select-none">
          <motion.div whileHover={{ scale: 1.15, rotate: 10 }} className="text-primary-container">
            <Heart className="w-8 h-8 fill-primary stroke-none" />
          </motion.div>
          <span className="font-display tracking-tight text-primary">Macarena</span>
        </div>

        <nav className="flex gap-10 items-center">
          {SECTIONS.map((sec) => (
            <a
              key={sec}
              href={`#${sec}`}
              className={`font-display text-sm tracking-widest uppercase transition-colors relative py-1 ${activeSection === sec ? "text-primary font-bold" : "text-on-surface-variant hover:text-primary"
                }`}
            >
              {SECTION_LABELS[sec]}
              {activeSection === sec && (
                <motion.div
                  layoutId="activeDot"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                />
              )}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <MusicToggle isMuted={isMuted} onToggle={onToggleMusic} />
        </div>
      </header>

      <nav className="md:hidden fixed bottom-0 left-0 w-full z-40 flex justify-around items-center px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] bg-white/95 backdrop-blur-md rounded-t-[1.8rem] border-t-2 border-primary-container/50 soft-shadow">
        {SECTIONS.map((item) => {
          const isActive = activeSection === item;
          return (
            <a
              key={item}
              href={`#${item}`}
              className={`flex flex-col items-center justify-center rounded-2xl px-2 py-1.5 transition-all text-center ${isActive
                ? "bg-primary-container text-primary font-bold scale-[1.02] border-b-2 border-primary"
                : "text-on-surface-variant"
                }`}
            >
              <div className={isActive ? "text-primary" : "text-on-surface-variant/75"}>
                {SECTION_ICONS[item]}
              </div>
              <span className="text-[8px] uppercase font-bold tracking-wider mt-0.5">{SECTION_LABELS[item]}</span>
            </a>
          );
        })}
      </nav>

      <div className="md:hidden fixed bottom-24 right-5 z-50">
        <MusicToggle isMuted={isMuted} onToggle={onToggleMusic} />
      </div>
    </>
  );
}
