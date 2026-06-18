import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import { GALLERY_PHOTOS, GALLERY_LIGHTBOX_DESCRIPTIONS } from "../../lib/constants";

interface LightboxProps {
  index: number | null;
  onClose: () => void;
}

export default function Lightbox({ index, onClose }: LightboxProps) {
  return (
    <AnimatePresence>
      {index !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 cursor-zoom-out"
        >
          <div
            className="relative max-w-3xl w-full max-h-[85vh] rounded-3xl overflow-hidden border-4 border-white soft-shadow"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={GALLERY_PHOTOS[index]}
              alt="Dulce Recuerdo Completo"
              className="w-full h-auto max-h-[80vh] object-contain mx-auto bg-transparent"
            />
            <div className="absolute bottom-0 left-0 w-full bg-black/60 backdrop-blur-sm text-white px-6 py-4 flex justify-between items-center">
              <span className="font-body-custom text-sm font-semibold">
                {GALLERY_LIGHTBOX_DESCRIPTIONS[index]}
              </span>
              <button
                onClick={onClose}
                className="bg-primary hover:bg-primary-container hover:text-primary transition-colors text-white font-bold p-2.5 rounded-full"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
