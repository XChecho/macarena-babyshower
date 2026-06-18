import { motion } from "motion/react";
import { Gift, ExternalLink } from "lucide-react";
import { SMILEBABY_URL } from "../../lib/constants";

export default function Gifts() {
  return (
    <section
      className="w-full py-16 px-4 md:px-8 flex flex-col items-center scroll-mt-20 relative z-10"
      id="gifts"
    >
      <div className="flex flex-col items-center justify-center gap-2 mb-10 text-center">
        <span className="text-sm tracking-widest text-primary font-bold font-display uppercase bg-secondary-fixed/25 px-4 py-1.5 rounded-full">
          Lista de Regalos
        </span>
        <h2 className="text-3xl md:text-4xl font-bold font-display text-primary tracking-tight mt-2 pb-1">
          Un detallito con amor
        </h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="bg-primary-fixed rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-14 soft-shadow border-4 border-white max-w-2xl w-full text-center relative overflow-hidden"
      >
        <div className="absolute -top-12 -right-12 w-28 h-28 bg-white/40 rounded-full pointer-events-none" />
        <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-white/30 rounded-full pointer-events-none" />

        <div className="relative z-10">
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="inline-flex bg-white rounded-full p-5 mb-6 soft-shadow border-2 border-primary-container/40"
          >
            <Gift className="w-10 h-10 text-primary stroke-2" />
          </motion.div>

          <h3 className="text-2xl md:text-3xl font-display font-bold text-primary mb-4 leading-tight">
            Tu presencia es el regalo más grande
          </h3>

          <p className="text-base md:text-lg text-on-surface-variant font-medium max-w-lg mx-auto mb-8 font-body-custom leading-relaxed">
            Si deseas tener un detalle con Macarena, hemos preparado algunas opciones
            para que elijas con el corazón. Cada regalito nos llena de alegría y gratitud.
          </p>

          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            href={SMILEBABY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-white rounded-full font-bold text-sm tracking-widest uppercase hover:bg-primary-container hover:text-primary transition-all duration-300 soft-shadow border-2 border-white/80"
          >
            <Gift className="w-5 h-5" />
            Ver opciones de regalos
            <ExternalLink className="w-4 h-4" />
          </motion.a>

          <p className="text-xs text-on-surface-variant/70 mt-6 font-body-custom">
            Powered by SmileBaby
          </p>
        </div>
      </motion.div>
    </section>
  );
}
