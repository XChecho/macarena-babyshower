import { motion } from "motion/react";
import { Calendar, Clock, MapPin, Map } from "lucide-react";

export default function EventDetails() {
  return (
    <section
      className="w-full py-16 px-4 md:px-8 flex flex-col items-center relative z-10 scroll-mt-20"
      id="event"
    >
      <div className="flex items-center justify-center gap-3.5 mb-10 text-center">
        <span className="text-3xl text-primary p-1 animate-pulse">🌸</span>
        <h2 className="text-3xl md:text-4xl font-bold font-display text-primary tracking-tight">
          Detalles del Evento
        </h2>
        <span className="text-3xl text-primary p-1 animate-pulse" style={{ animationDelay: "0.5s" }}>🌸</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl justify-center items-stretch">
        <motion.div
          whileHover={{ y: -6 }}
          className="bg-white rounded-3xl p-6 soft-shadow flex flex-col flex-grow items-center gap-4 cow-border relative group text-center"
        >
          <div className="bg-primary-container/25 rounded-2xl p-4 flex items-center justify-center text-primary">
            <Calendar className="w-8 h-8" />
          </div>
          <div className="flex flex-col justify-center mt-2 items-center">
            <span className="text-[11px] font-bold tracking-widest text-primary font-display uppercase">FECHA</span>
            <span className="text-lg md:text-xl font-bold text-on-surface mt-1 leading-snug">7 de Agosto, 2026</span>
            <span className="text-xs text-on-surface-variant font-medium mt-1">¡Reserva el día en tu agenda!</span>
          </div>
          <div className="absolute right-4 bottom-4 text-3xl opacity-15 select-none font-display">🐮</div>
        </motion.div>

        <motion.div
          whileHover={{ y: -6 }}
          className="bg-white rounded-3xl p-6 soft-shadow flex flex-col flex-grow items-center gap-4 cow-border relative group text-center"
        >
          <div className="bg-secondary-fixed/40 rounded-2xl p-4 flex items-center justify-center text-secondary">
            <Clock className="w-8 h-8" />
          </div>
          <div className="flex flex-col justify-center mt-2 items-center">
            <span className="text-[11px] font-bold tracking-widest text-secondary font-display uppercase">HORA</span>
            <span className="text-lg md:text-xl font-bold text-on-surface mt-1 leading-snug">4:00 PM</span>
            <span className="text-xs text-on-surface-variant font-medium mt-1">Te esperamos puntualmente</span>
          </div>
          <div className="absolute right-4 bottom-4 text-3xl opacity-15 select-none font-display">🌞</div>
        </motion.div>

        <motion.div
          whileHover={{ y: -6 }}
          className="bg-white rounded-3xl p-6 soft-shadow flex flex-col flex-grow gap-5 cow-border relative group"
        >
          <div className="flex items-start gap-4">
            <div className="bg-primary-container/25 rounded-2xl p-4 flex items-center justify-center text-primary">
              <MapPin className="w-8 h-8" />
            </div>
            <div className="flex flex-col pt-1">
              <span className="text-[11px] font-bold tracking-widest text-primary font-display uppercase">LUGAR</span>
              <span className="text-lg md:text-xl font-bold text-on-surface leading-tight mt-1">Matiz Parque Residencial</span>
              <span className="text-xs text-on-surface-variant font-medium mt-0.5">Dosquebradas</span>
            </div>
          </div>

          <motion.a
            whileTap={{ scale: 0.98 }}
            href="https://maps.app.goo.gl/huaijgDmj6MZcmWZ9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-primary text-white rounded-full font-bold text-xs tracking-widest uppercase hover:bg-primary-container hover:text-primary transition-all duration-300 soft-shadow w-full mt-auto"
          >
            <Map className="w-4 h-4" />
            Ver en el mapa
          </motion.a>
          <div className="absolute right-4 bottom-16 text-3xl opacity-15 select-none font-display">🌾</div>
        </motion.div>
      </div>
    </section>
  );
}
