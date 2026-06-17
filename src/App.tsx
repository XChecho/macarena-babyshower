/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Heart,
  Calendar,
  Clock,
  MapPin,
  Map,
  Mail,
  Image as ImageIcon,
  ChevronDown,
  Sparkles,
  Music,
  CheckCircle,
  MessageCircle,
  Volume2,
  VolumeX,
  Plus,
  Minus,
  Baby,
  Smile,
  X
} from 'lucide-react';
import {
  playSingleChime,
  startLullabyPlaylist,
  stopLullabyPlaylist
} from './LullabySynth';

// Photo assets from screen.jpg resources
const CHIBI_COW_AVATAR = "https://lh3.googleusercontent.com/aida-public/AB6AXuDSD0GjjWfWuMuGQCHJERw9a4z9YL1y_OylmfHeR4bEM7tXMDW0gO_TOKZu6QpgrYhXGeBfV_xbCYGnFbggWTLL5C1ugFqxDUP4pvCWZe8TB-igizaJuPSpHk0wIP7OIMbTTCjpjLy0m6Tr5BkMw9wV0uaZeYp2Am2_hJmR9vMrf3O9YSNgV5hjztahq3oom-ZCC0OcJge-zXiZxPv3wkO2yPjnEm-RJmAkbf_QOz5JOoZXUKv6tO2SKb5Gdseg6jfDuhuVJ9ciFOr7";

const GALLERY_PHOTOS = [
  "https://lh3.googleusercontent.com/aida/AP1WRLvGO_BgbFS7Ty6mgY50OfIx-4yXNjQjBLWuYyeq-DRq-JfmwNh343bNYdDlqHaK0Lp0yxKhnzO-kORdig1GZ43IsASCL8HU283AUV26Ze-bI2w6MO4Xhlpc0jVl3W3nILuaSo51xOdW3lm6y74sSQyFN2iN3AVPk5KP2Bo4cS6Ur6JtXIPi1KSzCJBwJLDZ3KJjBPtVuoVPE5-1uFmgu0_i6kw2JuDoSGtb00YA-qPInyLeSND5MRXO1JLC",
  "https://lh3.googleusercontent.com/aida/AP1WRLt9glHo5ieiBe0JbvV_g7YWlOxT6rTbza-6FUyrWCxcAnA5H_g1WGEVq1lDIL9VHdcH0ry4ceudba1_380zxOlQqp5wWU-NojrWehnu0PueQ_ejCOzeRQWidYinmjteh7n657LZNoaitFr7VI-B-fyTuOgt5LP39iyHz8W8T0QXlienKRKdDtMI4jAlTj6d5yiPEMs5oIXZQpO8IylXeYEKqmfRbZf-gQhlhPSxhImjJ_Vh_HrVKQjtsRRq",
  "https://lh3.googleusercontent.com/aida/AP1WRLtxehFqxOQaxYJVir17a8u4RFl0TxWCozFjkU4EfVgrdyoEgOFeHgk_FYJtBGNgvp_Xz8Ews5E_84nhYkUiEptfM8Nc01CwnWB7yzLRCYkeYNci1u_RC2Q1W_rnDQ3C5BG9Y_Dp7ztWMKggKUWT_msbh3Sv63U0JO3OWOzYgfKpxb2KUJmf5uTi0t0r0_FIBizKDFoXmVyqXRHAK73noPRuj1WKgwhNAbjf_Ib_GNM5kXGIUC0RmvLT618",
  "https://lh3.googleusercontent.com/aida/AP1WRLs2JKhYs9TtgUbyhC88r0u4xtrR28r5ASCB9jqHFFRpQANtuJ9PuTZzoDwqzVnAy99ISyuJN-J5zcUtBgR0q_PH-Fc3Sp8eodEr-FKE-j1krdyf_yVIdp3clUxMHuNMmxtpl9_A090qT2JpHJdTVYbZLTxmrXbdcbRDr_YgoW94C4Ee8DARZ1qeIEPQW_xwpAiujgAwyrac3asUhvJOfpQjZu_qe67sUd1ePxG6peyGe9qJBprdv1WdCchE"
];

interface Particle {
  id: number;
  left: number;
  delay: number;
  duration: number;
  isHeart: boolean;
  size: number;
}

export default function App() {
  const [isPlayingSeq, setIsPlayingSeq] = useState(false);
  const [currentActiveMelody, setCurrentActiveMelody] = useState<string | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  
  // Particles state
  const [particles, setParticles] = useState<Particle[]>([]);
  
  // RSVP Form States
  const [rsvpName, setRsvpName] = useState('');
  const [rsvpAttending, setRsvpAttending] = useState('yes');
  const [rsvpGuests, setRsvpGuests] = useState(1);
  const [rsvpDiet, setRsvpDiet] = useState('');
  const [rsvpWishes, setRsvpWishes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Countdown state: Targeted to Oct 15 2026 (or custom date)
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isOver: false
  });

  // Calculate coordinates for dynamic dots and reveal states
  const [activeSection, setActiveSection] = useState('hero');

  // Trigger audio sequence
  const toggleMusicPlay = () => {
    if (isPlayingSeq) {
      stopLullabyPlaylist();
      setIsPlayingSeq(false);
      setCurrentActiveMelody(null);
    } else {
      setIsPlayingSeq(true);
      startLullabyPlaylist((note) => {
        setCurrentActiveMelody(note);
      });
    }
  };

  // Generate particles on startup
  useEffect(() => {
    const list: Particle[] = [];
    for (let i = 0; i < 28; i++) {
      list.push({
        id: i,
        left: Math.random() * 95,
        delay: Math.random() * 8,
        duration: 8 + Math.random() * 6,
        isHeart: Math.random() > 0.45,
        size: 10 + Math.random() * 15
      });
    }
    setParticles(list);

    // Initial chime play on a gentle timer to surprise the user elegantly
    const chimeTimer = setTimeout(() => {
      playSingleChime();
    }, 1500);

    return () => clearTimeout(chimeTimer);
  }, []);

  // Countdown timer logic to Oct 15, 2026 (Future-looking relative to 2026-06-17)
  useEffect(() => {
    const targetDate = new Date('2026-10-15T16:00:00').getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft(prev => ({ ...prev, isOver: true }));
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isOver: false });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  // Handle Scroll Spy for active state
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      const sections = ['hero', 'event', 'gallery', 'rsvp'];

      for (const section of sections) {
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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle RSVP confirmation
  const handleRsvpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!rsvpName.trim()) return;

    playSingleChime();
    setIsSubmitted(true);

    // Build perfect cute message string
    const attendingMsg = rsvpAttending === 'yes' 
      ? `¡Sí, ahí estaré con mucho amor! 💕 (Acompañantes: ${rsvpGuests})`
      : 'No podré asistir esta vez, pero les envío todo mi amor y bendiciones 🍼✨';
    
    let encodedText = `¡Hola! Confirmo mi asistencia al Baby Shower de Macarena Morales Cárdenas:\n\n` +
      `- *Nombre:* ${rsvpName}\n` +
      `- *Asistencia:* ${attendingMsg}\n`;
    
    if (rsvpAttending === 'yes' && rsvpDiet.trim()) {
      encodedText += `- *Requisitos dietarios/Alergias:* ${rsvpDiet}\n`;
    }
    if (rsvpWishes.trim()) {
      encodedText += `- *Mensaje especial:* "${rsvpWishes}"\n`;
    }

    const whatsAppLink = `https://wa.me/56912345678?text=${encodeURIComponent(encodedText)}`;
    
    // Redirect after a lovely little animation
    setTimeout(() => {
      window.open(whatsAppLink, '_blank');
    }, 1800);
  };

  return (
    <div className="relative min-h-screen bg-background-custom text-on-background overflow-x-hidden selection:bg-primary-container selection:text-primary">
      
      {/* Dynamic Floating Particles Container */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" id="particles-container">
        {particles.map((p) => (
          <div
            key={p.id}
            className="floating-particle flex items-center justify-center opacity-0"
            style={{
              left: `${p.left}%`,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
              fontSize: `${p.size}px`,
            }}
          >
            {p.isHeart ? (
              <span className="text-primary-container filter drop-shadow-sm select-none">🌸</span>
            ) : (
              <span className="text-secondary-fixed filter drop-shadow-sm select-none opacity-80">💛</span>
            )}
          </div>
        ))}
      </div>

      {/* Top Navigation Bar with glassmorphism */}
      <header className="hidden md:flex fixed top-0 left-0 w-full z-50 justify-between items-center px-12 py-4 bg-white/85 backdrop-blur-md transition-all border-b border-primary-container/25 soft-shadow">
        <div 
          onClick={playSingleChime}
          className="text-2xl font-bold text-primary flex items-center gap-2 cursor-pointer group select-none"
        >
          <motion.div
            whileHover={{ scale: 1.15, rotate: 10 }}
            className="text-primary-container"
          >
            <Heart className="w-8 h-8 fill-primary stroke-none" />
          </motion.div>
          <span className="font-display tracking-tight text-primary">Macarena</span>
        </div>

        <nav className="flex gap-10 items-center">
          {['hero', 'event', 'gallery', 'rsvp'].map((sec) => (
            <a
              key={sec}
              href={`#${sec}`}
              className={`font-display text-sm tracking-widest uppercase transition-colors relative py-1 ${
                activeSection === sec ? 'text-primary font-bold' : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              {sec === 'hero' ? 'Inicio' : sec === 'event' ? 'Evento' : sec === 'gallery' ? 'Galería' : 'RSVP'}
              {activeSection === sec && (
                <motion.div
                  layoutId="activeDot"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                />
              )}
            </a>
          ))}
        </nav>

        {/* Music controller with ambient visualizer when active */}
        <div className="flex items-center gap-5">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleMusicPlay}
            className={`p-3 rounded-full flex items-center justify-center transition-all cursor-pointer ${
              isPlayingSeq 
                ? 'bg-primary text-white shadow-md animate-pulse' 
                : 'bg-white text-primary border-2 border-primary-container/40 hover:bg-primary-container/20'
            }`}
            title="Música de cuna"
          >
            {isPlayingSeq ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
          </motion.button>
          
          <button 
            onClick={playSingleChime}
            className="text-primary hover:text-primary-container transition-colors p-1"
          >
            <Heart className="w-6 h-6 fill-primary stroke-primary animate-pulse" />
          </button>
        </div>
      </header>

      {/* Main Flow */}
      <main className="w-full flex-grow flex flex-col relative pb-16 md:pb-0">
        
        {/* SECTION 1: HERO */}
        <section 
          className="relative w-full min-h-screen flex flex-col justify-center items-center text-center overflow-hidden bg-gradient-to-b from-primary-fixed/20 to-transparent pt-12 md:pt-24"
          id="hero"
        >
          {/* Top-left spot */}
          <div className="absolute top-0 left-0 w-48 h-48 bg-primary-container/20 rounded-br-full pointer-events-none z-0" />
          {/* Bottom-right spot */}
          <div className="absolute bottom-0 right-0 w-56 h-56 bg-secondary-fixed/20 rounded-tl-full pointer-events-none z-0" />

          {/* Decorative floating cartoon shapes */}
          <div className="absolute top-1/4 left-10 md:left-24 text-4xl animate-bounce pointer-events-none opacity-40 select-none">🌸</div>
          <div className="absolute top-1/3 right-10 md:right-32 text-4xl animate-bounce pointer-events-none opacity-40 select-none" style={{ animationDelay: '0.4s' }}>🍼</div>
          <div className="absolute bottom-1/4 left-12 md:left-28 text-4xl animate-float pointer-events-none opacity-40 select-none">🧸</div>
          <div className="absolute bottom-1/3 right-12 md:right-28 text-4xl animate-float pointer-events-none opacity-40 select-none">🍼</div>

          <div className="relative z-10 px-4 md:px-8 py-10 w-full max-w-4xl flex flex-col items-center">
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="glass-panel p-8 md:p-14 rounded-[2.5rem] md:rounded-[4rem] soft-shadow w-full relative"
            >
              {/* Corner cow prints decorative stickers */}
              <div className="absolute -top-4 -left-4 text-5xl rotate-[-12deg] select-none filter drop-shadow">🌸</div>
              <div className="absolute -bottom-4 -right-4 text-5xl rotate-[12deg] select-none filter drop-shadow">🌻</div>

              {/* Centered Circular Cow Main Motif is beautifully framed */}
              <div className="relative w-40 h-40 md:w-52 md:h-52 mx-auto mb-6">
                <div className="absolute inset-0 bg-primary-container/30 rounded-full animate-ping opacity-70" />
                <div className="absolute inset-2 bg-secondary-fixed/40 rounded-full animate-pulse" />
                <motion.div 
                  onClick={playSingleChime}
                  whileHover={{ scale: 1.08, rotate: 3 }}
                  className="relative w-full h-full rounded-full border-4 border-primary p-1 bg-white cursor-pointer overflow-hidden animate-float"
                >
                  <img 
                    src={CHIBI_COW_AVATAR} 
                    alt="Cute Cow Chibi" 
                    className="w-full h-full object-cover rounded-full"
                    style={{ objectPosition: 'top center' }}
                  />
                </motion.div>
              </div>

              {/* Title typography match */}
              <h1 className="text-5xl md:text-7xl font-bold font-display text-primary mb-3 drop-shadow-sm leading-none">
                Macarena
              </h1>

              {/* Decorated subheader badge */}
              <span className="inline-block bg-primary-container/40 text-primary uppercase font-bold text-xs tracking-widest px-6 py-2 rounded-full mb-5 border border-primary-container/60">
                Baby Shower
              </span>

              <p className="text-lg md:text-xl text-on-surface-variant font-medium max-w-md mx-auto mb-8 font-body-custom leading-relaxed">
                ¡Acompáñame en este día especial!
              </p>

              {/* Countdown Active Ticker */}
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
                      { val: timeLeft.days, label: 'DÍAS' },
                      { val: timeLeft.hours, label: 'HORAS' },
                      { val: timeLeft.minutes, label: 'MINUTOS' },
                      { val: timeLeft.seconds, label: 'SEGUNDOS' }
                    ].map((item, idx) => (
                      <div key={idx} className="bg-white/80 p-3 rounded-2xl flex flex-col items-center border border-primary-container/50 soft-shadow">
                        <span className="text-2xl md:text-3xl font-bold font-display text-primary">{item.val.toString().padStart(2, '0')}</span>
                        <span className="text-[9px] md:text-[10px] tracking-wider text-on-surface-variant/85 font-semibold mt-1">{item.label}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Three animated bounce points under invitation card */}
              <div className="mt-8 flex justify-center space-x-3.5">
                <div className="w-3.5 h-3.5 rounded-full bg-primary-container animate-bounce" style={{ animationDelay: '0s' }} />
                <div className="w-3.5 h-3.5 rounded-full bg-secondary-fixed animate-bounce" style={{ animationDelay: '0.15s' }} />
                <div className="w-3.5 h-3.5 rounded-full bg-primary animate-bounce" style={{ animationDelay: '0.3s' }} />
              </div>

            </motion.div>

            {/* Scroll indicators */}
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

        {/* SECTION 2: EVENT DETAILS */}
        <section 
          className="w-full py-16 px-4 md:px-8 flex flex-col items-center relative z-10 scroll-mt-20"
          id="event"
        >
          {/* Header Title with decorative flowers */}
          <div className="flex items-center justify-center gap-3.5 mb-10 text-center">
            <span className="text-3xl text-primary p-1 animate-pulse">🌸</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-primary tracking-tight">
              Detalles del Evento
            </h2>
            <span className="text-3xl text-primary p-1 animate-pulse" style={{ animationDelay: '0.5s' }}>🌸</span>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl justify-center items-stretch">
            
            {/* Card 1: Date */}
            <motion.div 
              whileHover={{ y: -6 }}
              className="bg-white rounded-3xl p-6 soft-shadow flex flex-col flex-grow items-start gap-4 cow-border relative group"
            >
              <div className="bg-primary-container/25 rounded-2xl p-4 flex items-center justify-center text-primary">
                <Calendar className="w-8 h-8" />
              </div>
              <div className="flex flex-col justify-center mt-2">
                <span className="text-[11px] font-bold tracking-widest text-primary font-display uppercase">FECHA</span>
                <span className="text-lg md:text-xl font-bold text-on-surface mt-1 leading-snug">15 de Octubre, 2026</span>
                <span className="text-xs text-on-surface-variant font-medium mt-1">¡Reserva el día en tu agenda!</span>
              </div>
              <div className="absolute right-4 bottom-4 text-3xl opacity-15 select-none font-display">🐮</div>
            </motion.div>

            {/* Card 2: Time */}
            <motion.div 
              whileHover={{ y: -6 }}
              className="bg-white rounded-3xl p-6 soft-shadow flex flex-col flex-grow items-start gap-4 cow-border relative group"
            >
              <div className="bg-secondary-fixed/40 rounded-2xl p-4 flex items-center justify-center text-secondary">
                <Clock className="w-8 h-8" />
              </div>
              <div className="flex flex-col justify-center mt-2">
                <span className="text-[11px] font-bold tracking-widest text-secondary font-display uppercase">HORA</span>
                <span className="text-lg md:text-xl font-bold text-on-surface mt-1 leading-snug">4:00 PM</span>
                <span className="text-xs text-on-surface-variant font-medium mt-1">Te esperamos puntualmente</span>
              </div>
              <div className="absolute right-4 bottom-4 text-3xl opacity-15 select-none font-display">🌞</div>
            </motion.div>

            {/* Card 3: Location inside structured layout */}
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
                  <span className="text-lg md:text-xl font-bold text-on-surface leading-tight mt-1">Villa Santa Rosa</span>
                  <span className="text-xs text-on-surface-variant font-medium mt-0.5">Calle Rosales 123</span>
                </div>
              </div>

              {/* Real clean redirect button */}
              <motion.a 
                whileTap={{ scale: 0.98 }}
                onClick={playSingleChime}
                href="https://maps.google.com/?q=Villa+Santa+Rosa+Calle+Rosales+123"
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

        {/* SECTION 3: GALLERY */}
        <section 
          className="w-full py-16 px-4 md:px-8 flex flex-col items-center scroll-mt-20 relative z-10"
          id="gallery"
        >
          <div className="flex flex-col items-center justify-center gap-2 mb-10 text-center">
            <span className="text-sm tracking-widest text-primary font-bold font-display uppercase bg-primary-container/25 dark:bg-primary-container/40 px-4 py-1.5 rounded-full">Recuerdos Adorables</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-primary tracking-tight mt-2 pb-1">
              Nuestros Momentos
            </h2>
          </div>

          {/* Grid Layout of Polaroid Style Photographs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-2 max-w-5xl w-full">
            {GALLERY_PHOTOS.map((photo, index) => {
              // Simulating slightly rotated layouts for tactile instant photo feeling
              const rotations = ['-rotate-2 hover:rotate-1', 'rotate-3 hover:rotate-[-1deg]', '-rotate-1 hover:rotate-2', 'rotate-2 hover:rotate-[-2deg]'];
              return (
                <motion.div
                  key={index}
                  onClick={() => {
                    playSingleChime();
                    setLightboxIndex(index);
                  }}
                  className={`bg-white p-3 pb-8 rounded-2xl soft-shadow border border-primary-container/30 cursor-crosshair transform transition-all duration-500 hover:scale-[1.04] ${rotations[index % rotations.length]} relative group`}
                >
                  <div className="w-full aspect-[4/5] rounded-xl overflow-hidden bg-primary-container/10 relative">
                    <img 
                      src={photo} 
                      alt={`Momento dulce ${index + 1}`} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay" />
                  </div>
                  <div className="mt-4 text-center select-none">
                    <span className="font-body-custom text-xs text-primary/80 block">
                      {index === 0 ? "Mamá y Papá esperando 💕" : index === 1 ? "Zapatitos Chibi 👶" : index === 2 ? "Primera ecografía ✨" : "Decoración dulce 🧁"}
                    </span>
                  </div>
                  {/* Pin tag effect */}
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary-container/60 flex items-center justify-center border-2 border-white soft-shadow">
                    <Heart className="w-3.5 h-3.5 text-primary fill-current" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* SECTION 4: RSVP SECTION */}
        <section 
          className="w-full py-16 px-4 md:px-8 flex flex-col items-center relative z-10 scroll-mt-20"
          id="rsvp"
        >
          {/* Main Card container */}
          <div className="bg-primary-fixed rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-14 soft-shadow border-4 border-white max-w-2xl w-full text-center relative overflow-hidden">
            
            {/* Top-right cute abstract bubble */}
            <div className="absolute -top-12 -right-12 w-28 h-28 bg-white/40 rounded-full pointer-events-none" />

            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.div 
                  key="form"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  {/* Decorative Header Mail Icon */}
                  <div className="inline-flex bg-white rounded-full p-5 mb-5 soft-shadow border-2 border-primary-container/40">
                    <Mail className="w-10 h-10 text-primary stroke-2 animate-float" />
                  </div>

                  <h3 className="text-3xl font-display font-bold text-primary mb-2">
                    ¡Confirma tu asistencia!
                  </h3>
                  
                  <p className="text-sm font-semibold tracking-wider text-on-primary-fixed-variant mb-8 bg-white/40 px-5 py-2 rounded-full inline-block">
                    Esperamos compartir este día especial contigo.
                  </p>

                  {/* Form Container */}
                  <form onSubmit={handleRsvpSubmit} className="text-left space-y-5 bg-white/75 p-6 md:p-8 rounded-3xl soft-shadow border border-white/80">
                    
                    {/* Name Input */}
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

                    {/* Radio Options Attending */}
                    <div>
                      <label className="block text-xs font-bold tracking-wider text-primary font-display mb-2 uppercase">¿Asistirás? *</label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <button
                          type="button"
                          onClick={() => { playSingleChime(); setRsvpAttending('yes'); }}
                          className={`flex items-center justify-between p-3.5 rounded-2xl border-2 transition-all font-semibold font-body-custom text-sm cursor-pointer ${
                            rsvpAttending === 'yes' 
                              ? 'border-primary bg-primary-container/20 text-primary shadow-sm' 
                              : 'border-primary-container/40 bg-white/80 text-on-surface-variant'
                          }`}
                        >
                          <span>Sí, ahí estaré con amor 💕</span>
                          <span className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${rsvpAttending === 'yes' ? 'border-primary bg-primary' : 'border-primary-container'}`}>
                            {rsvpAttending === 'yes' && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                          </span>
                        </button>

                        <button
                          type="button"
                          onClick={() => { playSingleChime(); setRsvpAttending('no'); }}
                          className={`flex items-center justify-between p-3.5 rounded-2xl border-2 transition-all font-semibold font-body-custom text-sm cursor-pointer ${
                            rsvpAttending === 'no' 
                              ? 'border-primary bg-primary-container/20 text-primary shadow-sm' 
                              : 'border-primary-container/40 bg-white/80 text-on-surface-variant'
                          }`}
                        >
                          <span>No podré asistir 🌟</span>
                          <span className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${rsvpAttending === 'no' ? 'border-primary bg-primary' : 'border-primary-container'}`}>
                            {rsvpAttending === 'no' && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                          </span>
                        </button>
                      </div>
                    </div>

                    {/* Conditional Fields if attending */}
                    <AnimatePresence>
                      {rsvpAttending === 'yes' && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="space-y-4 overflow-hidden"
                        >
                          {/* Guests Counter */}
                          <div>
                            <label className="block text-xs font-bold tracking-wider text-primary font-display mb-1.5 uppercase">Número de Acompañantes</label>
                            <div className="flex items-center gap-3">
                              <button
                                type="button"
                                disabled={rsvpGuests <= 1}
                                onClick={() => { playSingleChime(); setRsvpGuests(g => Math.max(1, g - 1)); }}
                                className="w-10 h-10 rounded-xl bg-primary-container/30 border border-primary-container/40 flex items-center justify-center text-primary disabled:opacity-40 cursor-pointer hover:bg-primary-container/50 transition-colors"
                              >
                                <Minus className="w-4 h-4" />
                              </button>
                              <span className="text-md font-bold text-primary font-display px-2 w-6 text-center">{rsvpGuests}</span>
                              <button
                                type="button"
                                disabled={rsvpGuests >= 5}
                                onClick={() => { playSingleChime(); setRsvpGuests(g => Math.min(5, g + 1)); }}
                                className="w-10 h-10 rounded-xl bg-primary-container/30 border border-primary-container/40 flex items-center justify-center text-primary disabled:opacity-40 cursor-pointer hover:bg-primary-container/50 transition-colors"
                              >
                                <Plus className="w-4 h-4" />
                              </button>
                              <span className="text-xs text-on-surface-variant/75 ml-1 select-none">persona(s)</span>
                            </div>
                          </div>

                          {/* Extra Diet options */}
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

                    {/* Wishes text */}
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

                    {/* Submit layout button */}
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
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center py-6 px-4"
                >
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-primary soft-shadow animate-bounce mb-6 border-2 border-primary-container">
                    <CheckCircle className="w-12 h-12 stroke-2" />
                  </div>
                  
                  <h3 className="text-3xl font-display font-bold text-primary mb-3">
                    ¡Asistencia Confirmada!
                  </h3>

                  <p className="text-md text-primary-fixed-variant font-medium max-w-sm mx-auto mb-6 font-body-custom">
                    Muchísimas gracias {rsvpName}. Hemos recibido tu confirmación con mucho amor.
                  </p>

                  <div className="bg-white/85 p-6 rounded-2xl border-2 border-primary-container/50 max-w-sm w-full soft-shadow text-left space-y-2 mb-8">
                    <div className="text-xs text-on-surface-variant font-semibold">
                      <strong className="text-primary">Registrado:</strong> {rsvpName}
                    </div>
                    <div className="text-xs text-on-surface-variant font-semibold">
                      <strong className="text-primary">Asiste:</strong> {rsvpAttending === 'yes' ? 'Sí, ¡ahí estaré! 💖' : 'No podré asistir 🌟'}
                    </div>
                    {rsvpAttending === 'yes' && (
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
                      const attendingMsg = rsvpAttending === 'yes' 
                        ? `¡Sí, ahí estaré con mucho amor! 💕 (Acompañantes: ${rsvpGuests})`
                        : 'No podré asistir esta vez, pero les envío todo mi amor y bendiciones 🍼✨';
                      
                      let encodedText = `¡Hola! Confirmo mi asistencia al Baby Shower de Macarena Morales Cárdenas:\n\n` +
                        `- *Nombre:* ${rsvpName}\n` +
                        `- *Asistencia:* ${attendingMsg}\n`;
                      
                      if (rsvpAttending === 'yes' && rsvpDiet.trim()) {
                        encodedText += `- *Requisitos dietarios:* ${rsvpDiet}\n`;
                      }
                      if (rsvpWishes.trim()) {
                        encodedText += `- *Mensaje:* "${rsvpWishes}"\n`;
                      }
                      window.open(`https://wa.me/56912345678?text=${encodeURIComponent(encodedText)}`, '_blank');
                    }}
                    className="inline-flex items-center gap-2 bg-primary text-white font-bold font-display text-xs tracking-widest uppercase px-6 py-3 rounded-full hover:bg-primary-fixed-variant transition-all duration-300 border-2 border-white shadow shadow-primary-container cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 fill-white stroke-none" />
                    Enviar por WhatsApp otra vez
                  </motion.button>
                  
                  <button 
                    onClick={() => {
                      setIsSubmitted(false);
                      setRsvpName('');
                      setRsvpWishes('');
                      setRsvpDiet('');
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

      </main>

      {/* FOOTER COMPONENT */}
      <footer className="w-full px-8 py-10 flex flex-col items-center text-center bg-white border-t-4 border-primary-container relative overflow-hidden">
        {/* Scalloped vector wave style effect below */}
        <div className="absolute bottom-0 left-0 w-full h-8 bg-repeat-x pointer-events-none opacity-20 scalloped-footer-wave lg:block hidden" />

        <div className="text-xl font-bold text-primary mb-2 flex items-center gap-2 tracking-tight">
          <Heart className="w-5 h-5 fill-primary stroke-none" />
          <span className="font-display">Macarena Morales Cárdenas</span>
        </div>
        
        <p className="text-xs text-on-surface-variant font-semibold mb-6">
          © 2026 Baby Shower Invitation. Todos los derechos reservados con amor.
        </p>

        <div className="flex gap-6 relative z-10 select-none">
          <a href="#hero" onClick={playSingleChime} className="text-on-surface-variant hover:text-primary transition-colors text-xs font-bold tracking-wider uppercase bg-background-custom px-4 py-2 rounded-full border border-primary-container/20">
            Ir Arriba
          </a>
          <button onClick={() => { playSingleChime(); alert("¡Muchas gracias por amar a Macarena Morales! Esperamos verte en esta linda velada."); }} className="text-on-surface-variant hover:text-primary transition-colors text-xs font-bold tracking-wider uppercase bg-background-custom px-4 py-2 rounded-full border border-primary-container/20">
            Contacto
          </button>
        </div>
      </footer>

      {/* Bottom Navigation Ribbon (Displayed on Mobile devices) */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-40 flex justify-around items-center px-4 py-3 pb-safe bg-white/95 backdrop-blur-md rounded-t-[1.8rem] border-t-2 border-primary-container/50 soft-shadow">
        {[
          { id: 'hero', icon: <Heart className="w-4 h-4" />, label: 'Inicio' },
          { id: 'event', icon: <Calendar className="w-4 h-4" />, label: 'Evento' },
          { id: 'gallery', icon: <ImageIcon className="w-4 h-4" />, label: 'Galería' },
          { id: 'rsvp', icon: <Mail className="w-4 h-4" />, label: 'RSVP' }
        ].map((item) => {
          const isActive = activeSection === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={playSingleChime}
              className={`flex flex-col items-center justify-center rounded-2xl px-4 py-1.5 transition-all text-center ${
                isActive 
                  ? 'bg-primary-container text-primary font-bold px-5 py-2 scale-102 border-b-2 border-primary' 
                  : 'text-on-surface-variant'
              }`}
            >
              <div className={isActive ? 'text-primary' : 'text-on-surface-variant/75'}>
                {item.icon}
              </div>
              <span className="text-[10px] uppercase font-bold tracking-wider mt-0.5">{item.label}</span>
            </a>
          );
        })}
      </nav>

      {/* LIGHTBOX / IMAGE MODAL OVERLAY */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxIndex(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 cursor-zoom-out"
          >
            <div 
              className="relative max-w-3xl w-full max-h-[85vh] rounded-3xl overflow-hidden border-4 border-white soft-shadow"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={GALLERY_PHOTOS[lightboxIndex]} 
                alt="Dulce Recuerdo Completo" 
                className="w-full h-auto max-h-[80vh] object-contain mx-auto bg-transparent"
              />
              {/* Image Description Footer overlay */}
              <div className="absolute bottom-0 left-0 w-full bg-black/60 backdrop-blur-sm text-white px-6 py-4 flex justify-between items-center">
                <span className="font-body-custom text-sm font-semibold">
                  {lightboxIndex === 0 ? "¡Papá y mamá muy ilusionados esperando la llegada de Macarena!" : lightboxIndex === 1 ? "Detalles hechos a mano con mucho cariño para el clóset de la bebé" : lightboxIndex === 2 ? "Con mucha emoción, observamos y amamos la ecografía de nuestra vaquita" : "Un banquete de ternura con bocados dulces y arreglos especiales"}
                </span>
                
                {/* Close Button UI */}
                <button 
                  onClick={() => setLightboxIndex(null)}
                  className="bg-primary hover:bg-primary-container hover:text-primary transition-colors text-white font-bold p-2.5 rounded-full"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
