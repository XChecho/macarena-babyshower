import { motion } from "motion/react";
import { Clock, ChevronDown } from "lucide-react";
import { LOGO_MACARENA } from "../../lib/constants";
import { useCountdown } from "../../hooks/useCountdown";

export default function Hero() {
  const timeLeft = useCountdown();

  return (
    <section
      className="relative w-full min-h-screen flex flex-col justify-center items-center text-center overflow-hidden bg-linear-to-b from-primary-fixed/20 to-transparent pt-12 md:pt-24"
      id="hero"
    >
      <div className="absolute top-0 left-0 w-48 h-48 bg-primary-container/20 rounded-br-full pointer-events-none z-0" />
      <div className="absolute bottom-0 right-0 w-56 h-56 bg-secondary-fixed/20 rounded-tl-full pointer-events-none z-0" />

      <div className="absolute top-1/4 left-10 md:left-24 text-4xl animate-bounce pointer-events-none opacity-40 select-none">🌸</div>
      <div className="absolute top-1/3 right-10 md:right-32 text-4xl animate-bounce pointer-events-none opacity-40 select-none" style={{ animationDelay: "0.4s" }}>🍼</div>
      <div className="absolute bottom-1/4 left-12 md:left-28 text-4xl animate-float pointer-events-none opacity-40 select-none">🧸</div>
      <div className="absolute bottom-1/3 right-12 md:right-28 text-4xl animate-float pointer-events-none opacity-40 select-none">🍼</div>

      <div className="relative z-10 px-4 md:px-8 py-10 w-full max-w-4xl flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glass-panel p-8 md:p-14 rounded-[2.5rem] md:rounded-[4rem] soft-shadow w-full relative overflow-hidden"
        >
          <img
            src="/assets/images/decoracion2.png"
            alt="Decoración esquina superior izquierda"
            className="absolute -top-8 -left-8 md:-top-12 md:-left-16  w-32 h-32 md:w-72 md:h-72 pointer-events-none select-none z-20"
            style={{ transform: "rotate(-12deg)" }}
          />
          <img
            src="/assets/images/decoracion1.png"
            alt="Decoración esquina inferior derecha"
            className="absolute -bottom-8 -right-8 md:-bottom-16 md:-right-20 w-32 h-32 md:w-72 md:h-72 pointer-events-none select-none z-20"
            style={{ transform: "rotate(12deg)" }}
          />

          <div className="relative w-40 h-40 md:w-52 md:h-52 mx-auto mb-6">
            <motion.div
              whileHover={{ scale: 1.08, rotate: 3 }}
              className="relative w-full h-full cursor-pointer animate-float"
            >
              <img
                src={LOGO_MACARENA}
                alt="Macarena Baby Shower"
                className="w-full h-full object-contain"
              />
            </motion.div>
          </div>

          <h1 className="text-5xl md:text-8xl font-bold font-baby-name text-primary mb-1 drop-shadow-sm leading-none">
            Macarena
          </h1>
          <h2 className="text-xl md:text-3xl font-regular font-display text-primary mb-4 drop-shadow-sm leading-none opacity-75">
            Morales Cárdenas
          </h2>

          <span className="inline-block bg-primary-container/40 text-primary uppercase font-bold text-xs tracking-widest px-6 py-2 rounded-full mb-5 border border-primary-container/60">
            Baby Shower
          </span>

          <p className="text-lg md:text-xl text-on-surface-variant font-medium max-w-md mx-auto mb-8 font-body-custom leading-relaxed">
            ¡Acompáñame en este día especial!
          </p>

          <div className="flex flex-col items-center mt-2 max-w-md mx-auto">
            <div className="w-full h-px bg-dashed border-t-2 border-primary-container/60 mb-5" />

            <h3 className="text-xs tracking-widest uppercase font-bold text-primary mb-4 flex items-center gap-1.5 font-display justify-center">
              <Clock className="w-4 h-4" /> Cuenta Regresiva
            </h3>

            {timeLeft.isOver ? (
              <div className="bg-white/80 border-2 border-primary-container shadow-sm px-6 py-3 rounded-2xl">
                <span className="text-md font-bold text-primary">🎉 ¡Llegó el gran día! Macarena con nosotros 💕</span>
              </div>
            ) : (
              <div className="grid grid-cols-4 gap-4 w-full justify-center">
                {[
                  { val: timeLeft.days, label: "DÍAS" },
                  { val: timeLeft.hours, label: "HORAS" },
                  { val: timeLeft.minutes, label: "MINUTOS" },
                  { val: timeLeft.seconds, label: "SEGUNDOS" },
                ].map((item, idx) => (
                  <div key={idx} className="bg-white/80 p-3 rounded-2xl flex flex-col items-center border border-primary-container/50 soft-shadow">
                    <span className="text-2xl md:text-3xl font-bold font-body-custom text-primary">{item.val.toString().padStart(2, "0")}</span>
                    <span className="text-[7px] md:text-[10px] tracking-wider text-on-surface-variant/85 font-semibold mt-1">{item.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="mt-8 flex justify-center space-x-3.5">
            <div className="w-3.5 h-3.5 rounded-full bg-primary-container animate-bounce" style={{ animationDelay: "0s" }} />
            <div className="w-3.5 h-3.5 rounded-full bg-secondary-fixed animate-bounce" style={{ animationDelay: "0.15s" }} />
            <div className="w-3.5 h-3.5 rounded-full bg-primary animate-bounce" style={{ animationDelay: "0.3s" }} />
          </div>
        </motion.div>

        <motion.a
          href="#event"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="mt-12 hidden md:flex flex-col items-center gap-1 opacity-75 hover:opacity-100 transition-opacity cursor-pointer p-2 rounded-full bg-white/70 shadow-sm border border-primary-container/20"
        >
          <span className="text-xs font-bold text-primary font-display tracking-widest uppercase">Ver detalles</span>
          <ChevronDown className="w-5 h-5 text-primary" />
        </motion.a>
      </div>
    </section>
  );
}
