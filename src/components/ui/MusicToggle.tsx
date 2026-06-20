import { motion } from "motion/react";
import { Volume2, VolumeX } from "lucide-react";

interface MusicToggleProps {
  isMuted: boolean;
  onToggle: () => void;
}

export default function MusicToggle({ isMuted, onToggle }: MusicToggleProps) {
  return (
    <motion.button
      type="button"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={onToggle}
      className={`p-3 rounded-full flex items-center justify-center transition-all cursor-pointer ${
        !isMuted
          ? "bg-primary text-white shadow-md animate-pulse"
          : "bg-white text-primary border-2 border-primary-container/40 hover:bg-primary-container/20"
      }`}
      title={isMuted ? "Activar música" : "Silenciar música"}
      aria-label={isMuted ? "Activar música" : "Silenciar música"}
    >
      {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
    </motion.button>
  );
}
