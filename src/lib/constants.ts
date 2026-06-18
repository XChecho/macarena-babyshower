export const LOGO_MACARENA = "/assets/images/logoMacarena.png";

export const GALLERY_PHOTOS = [
  "/assets/images/gallery-1.jpg",
  "/assets/images/gallery-2.jpg",
  "/assets/images/gallery-3.jpg",
  "/assets/images/gallery-4.jpg",
];

export const GALLERY_CAPTIONS = [
  "Mamá y Papá esperando 💕",
  "Zapatitos Chibi 👶",
  "Primera ecografía ✨",
  "Decoración dulce 🧁",
];

export const GALLERY_LIGHTBOX_DESCRIPTIONS = [
  "¡Papá y mamá muy ilusionados esperando la llegada de Macarena!",
  "Detalles hechos a mano con mucho cariño para el clóset de la bebé",
  "Con mucha emoción, observamos y amamos la ecografía de nuestra vaquita",
  "Un banquete de ternura con bocados dulces y arreglos especiales",
];

export const SMILEBABY_URL = "https://smilebaby.app/56ee1715-aafb-49af-8021-0fba437bbf1d";

export const WHATSAPP_NUMBER = "56912345678";

export const EVENT_DATE = "2026-08-07T15:00:00-05:00";

export const BACKGROUND_MUSIC_SRC = "/assets/sounds/indigo.mp3";

export const SECTIONS = ["hero", "event", "gallery", "gifts", "rsvp", "thanks"] as const;

export type SectionId = (typeof SECTIONS)[number];

export const SECTION_LABELS: Record<SectionId, string> = {
  hero: "Inicio",
  event: "Evento",
  gallery: "Galería",
  gifts: "Regalos",
  rsvp: "RSVP",
  thanks: "Gracias",
};
