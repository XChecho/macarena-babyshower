import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full px-8 py-10 flex flex-col items-center text-center bg-white border-t-4 border-primary-container relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-8 bg-repeat-x pointer-events-none opacity-20 scalloped-footer-wave lg:block hidden" />

      <div className="text-xl font-bold text-primary mb-2 flex items-center gap-2 tracking-tight">
        <Heart className="w-5 h-5 fill-primary stroke-none" />
        <span className="font-display">Macarena Morales Cárdenas</span>
      </div>

      <p className="text-xs text-on-surface-variant font-semibold mb-6">
        © 2026 <a href="https://xchecho.com/en" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">XChecho Dev</a>. Todos los derechos reservados con amor.
      </p>

      <div className="flex gap-6 relative z-10 select-none">
        <a
          href="#hero"
          className="text-on-surface-variant hover:text-primary transition-colors text-xs font-bold tracking-wider uppercase bg-background-custom px-4 py-2 rounded-full border border-primary-container/20"
        >
          Ir Arriba
        </a>
      </div>
    </footer>
  );
}
