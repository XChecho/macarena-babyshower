import { motion } from "motion/react";
import { Heart } from "lucide-react";
import { GALLERY_PHOTOS } from "../../lib/constants";

export default function Gallery() {
  const rotations = [
    "-rotate-2 hover:rotate-1",
    "rotate-3 hover:rotate-[-1deg]",
    "-rotate-1 hover:rotate-2",
  ];

  return (
    <section
      className="w-full py-16 px-4 md:px-8 flex flex-col items-center scroll-mt-20 relative z-10"
      id="gallery"
    >
      <div className="flex flex-col items-center justify-center gap-2 mb-10 text-center">
        <span className="text-sm tracking-widest text-primary font-bold font-display uppercase bg-primary-container/25 px-4 py-1.5 rounded-full">
          Recuerdos Adorables
        </span>
        <h2 className="text-3xl md:text-4xl font-bold font-display text-primary tracking-tight mt-2 pb-1">
          Nuestros Momentos
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-2 max-w-5xl w-full">
        {GALLERY_PHOTOS.map((photo, index) => (
          <motion.div
            key={index}
            className={`bg-white p-3 pb-8 rounded-2xl soft-shadow border border-primary-container/30 transform transition-all duration-500 hover:scale-[1.04] ${rotations[index % rotations.length]} relative group`}
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
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary-container/60 flex items-center justify-center border-2 border-white soft-shadow">
              <Heart className="w-3.5 h-3.5 text-primary fill-current" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
