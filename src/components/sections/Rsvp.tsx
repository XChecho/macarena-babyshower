import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, CheckCircle, MessageCircle, Plus, Minus } from "lucide-react";
import { WHATSAPP_NUMBER } from "../../lib/constants";

export default function Rsvp() {
  const [rsvpName, setRsvpName] = useState("");
  const [rsvpAttending, setRsvpAttending] = useState("yes");
  const [rsvpGuests, setRsvpGuests] = useState(1);
  const [rsvpDiet, setRsvpDiet] = useState("");
  const [rsvpWishes, setRsvpWishes] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleRsvpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!rsvpName.trim()) return;

    setIsSubmitted(true);

    const attendingMsg =
      rsvpAttending === "yes"
        ? `¡Sí, ahí estaré con mucho amor! 💕 (Acompañantes: ${rsvpGuests})`
        : "No podré asistir esta vez, pero les envío todo mi amor y bendiciones 🍼✨";

    let encodedText =
      `¡Hola! Confirmo mi asistencia al Baby Shower de Macarena Morales Cárdenas:\n\n` +
      `- *Nombre:* ${rsvpName}\n` +
      `- *Asistencia:* ${attendingMsg}\n`;

    if (rsvpAttending === "yes" && rsvpDiet.trim()) {
      encodedText += `- *Requisitos dietarios/Alergias:* ${rsvpDiet}\n`;
    }
    if (rsvpWishes.trim()) {
      encodedText += `- *Mensaje especial:* "${rsvpWishes}"\n`;
    }

    const whatsAppLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(encodedText)}`;

    setTimeout(() => {
      window.open(whatsAppLink, "_blank");
    }, 1800);
  };

  return (
    <section
      className="w-full py-16 px-4 md:px-8 flex flex-col items-center relative z-10 scroll-mt-20"
      id="rsvp"
    >
      <div className="bg-primary-fixed rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-14 soft-shadow border-4 border-white max-w-2xl w-full text-center relative overflow-hidden">
        <div className="absolute -top-12 -right-12 w-28 h-28 bg-white/40 rounded-full pointer-events-none" />

        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.div key="form" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
              <div className="inline-flex bg-white rounded-full p-5 mb-5 soft-shadow border-2 border-primary-container/40">
                <Mail className="w-10 h-10 text-primary stroke-2 animate-float" />
              </div>

              <h3 className="text-3xl font-display font-bold text-primary mb-2">¡Confirma tu asistencia!</h3>

              <p className="text-sm font-semibold tracking-wider text-on-primary-fixed-variant mb-8 bg-white/40 px-5 py-2 rounded-full inline-block">
                Esperamos compartir este día especial contigo.
              </p>

              <form onSubmit={handleRsvpSubmit} className="text-left space-y-5 bg-white/75 p-6 md:p-8 rounded-3xl soft-shadow border border-white/80">
                <div>
                  <label className="block text-xs font-bold tracking-wider text-primary font-display mb-2 uppercase">Tu Nombre Completo *</label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      value={rsvpName}
                      onChange={(e) => setRsvpName(e.target.value)}
                      placeholder="Ingresa tu nombre y apellido"
                      className="w-full rounded-2xl border-2 border-primary-container/50 bg-white/90 px-4 py-3.5 text-sm text-on-background placeholder:text-on-surface-variant/40 focus:border-primary focus:outline-none transition-all font-body-custom font-semibold focus:ring-1 focus:ring-primary"
                    />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-primary-container text-xs">🐮</div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold tracking-wider text-primary font-display mb-2 uppercase">¿Asistirás? *</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setRsvpAttending("yes")}
                      className={`flex items-center justify-between p-3.5 rounded-2xl border-2 transition-all font-semibold font-body-custom text-sm cursor-pointer ${
                        rsvpAttending === "yes"
                          ? "border-primary bg-primary-container/20 text-primary shadow-sm"
                          : "border-primary-container/40 bg-white/80 text-on-surface-variant"
                      }`}
                    >
                      <span>Sí, ahí estaré con amor 💕</span>
                      <span className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${rsvpAttending === "yes" ? "border-primary bg-primary" : "border-primary-container"}`}>
                        {rsvpAttending === "yes" && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setRsvpAttending("no")}
                      className={`flex items-center justify-between p-3.5 rounded-2xl border-2 transition-all font-semibold font-body-custom text-sm cursor-pointer ${
                        rsvpAttending === "no"
                          ? "border-primary bg-primary-container/20 text-primary shadow-sm"
                          : "border-primary-container/40 bg-white/80 text-on-surface-variant"
                      }`}
                    >
                      <span>No podré asistir 🌟</span>
                      <span className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${rsvpAttending === "no" ? "border-primary bg-primary" : "border-primary-container"}`}>
                        {rsvpAttending === "no" && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                      </span>
                    </button>
                  </div>
                </div>

                <AnimatePresence>
                  {rsvpAttending === "yes" && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="space-y-4 overflow-hidden">
                      <div>
                        <label className="block text-xs font-bold tracking-wider text-primary font-display mb-1.5 uppercase">Número de Acompañantes</label>
                        <div className="flex items-center gap-3">
                          <button
                            type="button"
                            disabled={rsvpGuests <= 1}
                            onClick={() => setRsvpGuests((g) => Math.max(1, g - 1))}
                            className="w-10 h-10 rounded-xl bg-primary-container/30 border border-primary-container/40 flex items-center justify-center text-primary disabled:opacity-40 cursor-pointer hover:bg-primary-container/50 transition-colors"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="text-md font-bold text-primary font-display px-2 w-6 text-center">{rsvpGuests}</span>
                          <button
                            type="button"
                            disabled={rsvpGuests >= 5}
                            onClick={() => setRsvpGuests((g) => Math.min(5, g + 1))}
                            className="w-10 h-10 rounded-xl bg-primary-container/30 border border-primary-container/40 flex items-center justify-center text-primary disabled:opacity-40 cursor-pointer hover:bg-primary-container/50 transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                          <span className="text-xs text-on-surface-variant/75 ml-1 select-none">persona(s)</span>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold tracking-wider text-primary font-display mb-2 uppercase">¿Alguna Alergia o Restricción Alimentaria?</label>
                        <input
                          type="text"
                          value={rsvpDiet}
                          onChange={(e) => setRsvpDiet(e.target.value)}
                          placeholder="Ej: Vegetariano, vegano, celíaco (opcional)"
                          className="w-full rounded-2xl border-2 border-primary-container/50 bg-white/90 px-4 py-3 text-sm text-on-background placeholder:text-on-surface-variant/35 focus:border-primary focus:outline-none transition-all font-body-custom"
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div>
                  <label className="block text-xs font-bold tracking-wider text-primary font-display mb-2 uppercase">Dedica unas palabras tiernas (Opcional)</label>
                  <textarea
                    value={rsvpWishes}
                    onChange={(e) => setRsvpWishes(e.target.value)}
                    placeholder="Escribe un mensajito o buenos deseos para Macarena y sus papás..."
                    rows={3}
                    className="w-full rounded-2xl border-2 border-primary-container/50 bg-white/90 px-4 py-3.5 text-sm text-on-background placeholder:text-on-surface-variant/35 focus:border-primary focus:outline-none transition-all font-body-custom"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-primary text-white font-bold font-display text-sm tracking-widest uppercase py-4 rounded-2xl hover:bg-primary-fixed-variant hover:text-white transition-all soft-shadow duration-300 cursor-pointer border-2 border-white/80"
                >
                  Confirmar Asistencia
                </motion.button>
              </form>
            </motion.div>
          ) : (
            <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center py-6 px-4">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-primary soft-shadow animate-bounce mb-6 border-2 border-primary-container">
                <CheckCircle className="w-12 h-12 stroke-2" />
              </div>

              <h3 className="text-3xl font-display font-bold text-primary mb-3">¡Asistencia Confirmada!</h3>

              <p className="text-md text-primary-fixed-variant font-medium max-w-sm mx-auto mb-6 font-body-custom">
                Muchísimas gracias {rsvpName}. Hemos recibido tu confirmación con mucho amor.
              </p>

              <div className="bg-white/85 p-6 rounded-2xl border-2 border-primary-container/50 max-w-sm w-full soft-shadow text-left space-y-2 mb-8">
                <div className="text-xs text-on-surface-variant font-semibold">
                  <strong className="text-primary">Registrado:</strong> {rsvpName}
                </div>
                <div className="text-xs text-on-surface-variant font-semibold">
                  <strong className="text-primary">Asiste:</strong>{" "}
                  {rsvpAttending === "yes" ? "Sí, ¡ahí estaré! 💖" : "No podré asistir 🌟"}
                </div>
                {rsvpAttending === "yes" && (
                  <div className="text-xs text-on-surface-variant font-semibold">
                    <strong className="text-primary">Acompañantes:</strong> {rsvpGuests}
                  </div>
                )}
                {rsvpWishes.trim() && (
                  <div className="text-xs italic text-on-surface-variant/80 border-t border-dashed border-primary-container/40 pt-2 mt-2">
                    "{rsvpWishes}"
                  </div>
                )}
              </div>

              <p className="text-xs text-on-primary-fixed-variant/85 italic mb-4">
                Abriendo chat de WhatsApp para enviar el mensaje...
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => {
                  const attendingMsg =
                    rsvpAttending === "yes"
                      ? `¡Sí, ahí estaré con mucho amor! 💕 (Acompañantes: ${rsvpGuests})`
                      : "No podré asistir esta vez, pero les envío todo mi amor y bendiciones 🍼✨";

                  let encodedText =
                    `¡Hola! Confirmo mi asistencia al Baby Shower de Macarena Morales Cárdenas:\n\n` +
                    `- *Nombre:* ${rsvpName}\n` +
                    `- *Asistencia:* ${attendingMsg}\n`;

                  if (rsvpAttending === "yes" && rsvpDiet.trim()) {
                    encodedText += `- *Requisitos dietarios:* ${rsvpDiet}\n`;
                  }
                  if (rsvpWishes.trim()) {
                    encodedText += `- *Mensaje:* "${rsvpWishes}"\n`;
                  }
                  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(encodedText)}`, "_blank");
                }}
                className="inline-flex items-center gap-2 bg-primary text-white font-bold font-display text-xs tracking-widest uppercase px-6 py-3 rounded-full hover:bg-primary-fixed-variant transition-all duration-300 border-2 border-white shadow shadow-primary-container cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-white stroke-none" />
                Enviar por WhatsApp otra vez
              </motion.button>

              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setRsvpName("");
                  setRsvpWishes("");
                  setRsvpDiet("");
                }}
                className="text-primary/75 hover:text-primary font-bold text-xs underline mt-6 select-none cursor-pointer"
              >
                Registrar otra asistencia
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
