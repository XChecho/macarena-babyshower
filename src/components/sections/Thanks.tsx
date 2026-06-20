import { motion } from "motion/react";
import { HandHeart } from "lucide-react";

export default function Thanks() {
  return (
    <section
      className="w-full md:py-16 px-4 md:px-8 flex flex-col items-center scroll-mt-20 relative z-10 overflow-hidden"
      id="thanks"
    >
      <div className="flex flex-col items-center justify-center gap-2 mb-10 text-center">
        <span className="text-sm tracking-widest text-primary font-bold font-display uppercase bg-primary-container/25 px-4 py-1.5 rounded-full">
          Con cariño
        </span>
        <h2 className="text-3xl md:text-4xl font-bold font-display text-primary tracking-tight mt-2 pb-1">
          Gracias por ser parte de nuestra felicidad
        </h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="bg-white rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-14 soft-shadow border-4 border-primary-container/30 max-w-2xl w-full text-center relative overflow-hidden"
      >
        <div aria-hidden="true" className="absolute top-4 left-4 text-3xl opacity-20 select-none animate-float">🌸</div>
        <div aria-hidden="true" className="absolute top-8 right-8 text-2xl opacity-20 select-none animate-float" style={{ animationDelay: "1s" }}>💛</div>
        <div aria-hidden="true" className="absolute bottom-6 left-8 text-2xl opacity-20 select-none animate-float" style={{ animationDelay: "2s" }}>🌸</div>
        <div aria-hidden="true" className="absolute bottom-4 right-4 text-3xl opacity-20 select-none animate-float" style={{ animationDelay: "0.5s" }}>💛</div>

        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          className="inline-flex bg-primary-container/25 rounded-full p-5 mb-6"
        >
          <HandHeart className="w-10 h-10 text-primary stroke-2" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-lg md:text-xl text-on-surface-variant font-medium max-w-lg mx-auto mb-8 font-body-custom leading-relaxed"
        >
          Cada palabra de cariño, cada abrazo y cada oración significan el mundo para nosotros.
          Gracias por acompañarnos en este sueño hecho realidad y por ser parte de la llegada de Macarena.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="border-t-2 border-dashed border-primary-container/40 pt-6 mt-4"
        >
          <p className="text-sm text-on-surface-variant/80 font-body-custom mb-2">Con todo nuestro amor,</p>
          <p className="text-xl font-display font-bold text-primary">
            Los papás de Macarena
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1, duration: 0.8 }}
        className="flex gap-4 mt-8 select-none"
      >
        {["🌸", "💛", "🌸", "💛", "🌸"].map((emoji, i) => (
          <motion.span
            key={i}
            aria-hidden="true"
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 2, delay: i * 0.2 }}
            className="text-2xl opacity-60"
          >
            {emoji}
          </motion.span>
        ))}
      </motion.div>
    </section>
  );
}
